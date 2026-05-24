# Skill: `qc-tasks-smoke-test`

A sample skill (playbook) the agent follows during the seminar's demo section.
Goal: run a smoke test against `/demo-app/` and surface anything that violates the spec.

> This file is shown on the slide for illustration. In a real project, the skill
> usually lives in `.agents/skills/qc-tasks-smoke-test.md` and the agent loads it
> when it receives a matching task.

---

## When to use this skill

Every time a new build of the `qc-tasks` app is deployed to staging, run this
skill to verify regressions on the core flows: **Login · Create · Cancel-delete · Filter**.

## Required tools

- `playwright-mcp` — to drive the browser.
- (Optional) `backlog-mcp` — to file issues for the bugs found.

## Spec (oracle for assertions)

| Action | Expected |
| --- | --- |
| Sign in with `qc@example.com` / `qc123` | Lands on the dashboard, header contains `"QC User"` |
| Create a valid task | Toast == `"Task created"` |
| Open delete modal → click **Cancel** | Row count is unchanged |
| Tick "Only show high priority" | Every visible row has priority badge == `"High"` |

## Steps

```yaml
- name: Setup
  steps:
    - navigate: "{{baseUrl}}/demo-app/#reset"
    - wait_for: "[data-testid='login-email']"

- name: Login
  steps:
    - type:  "[data-testid='login-email']"    value: "qc@example.com"
    - type:  "[data-testid='login-password']" value: "qc123"
    - click: "[data-testid='login-submit']"
    - wait_for: "[data-testid='welcome']"
    - assert.text_contains:
        selector: "[data-testid='welcome']"
        expected: "QC User"
        on_fail:   report_bug "Welcome greeting does not contain the display name"

- name: Create task
  steps:
    - click: "[data-testid='new-task']"
    - type:  "[data-testid='task-title']" value: "Smoke test demo"
    - click: "[data-testid='task-save']"
    - wait_for: "[data-testid='toast']"
    - assert.text_equals:
        selector: "[data-testid='toast']"
        expected: "Task created"
        on_fail:   report_bug "Wrong toast wording after creating a task"

- name: Cancel delete should NOT delete
  steps:
    - count_before: "[data-testid='task-row']" → save as N
    - click: "[data-testid='task-delete']:first-of-type"
    - wait_for: "[data-testid='confirm-modal']"
    - click: "[data-testid='confirm-cancel']"
    - wait_until_hidden: "[data-testid='confirm-modal']"
    - count_after:  "[data-testid='task-row']" → save as M
    - assert.equals:
        a: N
        b: M
        on_fail:   report_bug "Cancel on the confirm dialog still deletes the task"

- name: High-priority filter
  steps:
    - click: "[data-testid='filter-high']"
    - rows: "[data-testid='task-row']"
    - badges: "[data-testid='task-row-priority']"
    - assert.all_equal:
        haystack: badges.text
        expected: "High"
        on_fail:   report_bug "'Only High' filter does not filter"

- name: Report
  steps:
    - print: "✓ skill done — {{bugs_found}} bugs found"
    - if: bugs_found > 0
      then:
        - call: backlog-mcp.create_issue
          for_each: bug
          fields:
            project: "QC-25"
            type: "Bug"
            title: bug.title
            description: bug.steps
            priority: "P1"
            assignee: "QC User"
```

## Expected output (when run against a build containing the 4 bugs)

```text
[skill] qc-tasks-smoke-test → run
✗ Welcome greeting does not contain the display name      (BUG #1)
✗ Wrong toast wording after creating a task               (BUG #2)
✗ Cancel on the confirm dialog still deletes the task     (BUG #3)
✗ 'Only High' filter does not filter                      (BUG #4)
✓ skill done — 4 bugs found
[backlog-mcp] create_issue → BUG-148, BUG-149, BUG-150, BUG-151
```

## Why this skill is worth keeping

- **Write once — run on every build** (fast smoke test).
- **Spec written in plain English** — new QC engineers can read and edit it.
- **The agent reads the skill and repeats reliably** — it doesn't depend on whoever is on shift.
- **Connects two MCPs**: Playwright (reads the UI) + Backlog (files the bug) — closing the loop automatically.
