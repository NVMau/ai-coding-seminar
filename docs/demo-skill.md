# Skill: `qc-tasks-smoke-test`

Skill (playbook) mẫu agent sẽ follow trong phần Demo của seminar.  
Mục tiêu: chạy smoke test trên app `/demo-app/`, bắt mọi bug vi phạm spec.

> Đây là file slide ví dụ — trên thực tế skill thường viết bằng Markdown đặt trong
> `.agents/skills/qc-tasks-smoke-test.md`, agent đọc khi nhận được task tương ứng.

---

## Khi nào dùng skill này

Mỗi khi build mới của app `qc-tasks` được deploy lên staging, chạy skill này để
verify regression cho các flow cơ bản: **Login · Create · Cancel-delete · Filter**.

## Tools bắt buộc

- `playwright-mcp` — để điều khiển browser.
- (Optional) `backlog-mcp` — để tạo issue cho bug tìm thấy.

## Spec (oracle để assert)

| Hành động | Expected |
| --- | --- |
| Login đúng `qc@example.com` / `qc123` | Vào dashboard, header chứa `"QC User"` |
| Tạo task hợp lệ | Toast == `"Task created"` |
| Modal xoá → bấm **Huỷ** | Số row không đổi |
| Tick "Chỉ hiện priority cao" | Mọi row có priority badge == `"High"` |

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
        on_fail:   report_bug "Welcome greeting không chứa display name"

- name: Create task
  steps:
    - click: "[data-testid='new-task']"
    - type:  "[data-testid='task-title']" value: "Smoke test demo"
    - click: "[data-testid='task-save']"
    - wait_for: "[data-testid='toast']"
    - assert.text_equals:
        selector: "[data-testid='toast']"
        expected: "Task created"
        on_fail:   report_bug "Toast sai sau khi create task"

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
        on_fail:   report_bug "Cancel trên confirm dialog vẫn xoá task"

- name: High-priority filter
  steps:
    - click: "[data-testid='filter-high']"
    - rows: "[data-testid='task-row']"
    - badges: "[data-testid='task-row-priority']"
    - assert.all_equal:
        haystack: badges.text
        expected: "High"
        on_fail:   report_bug "Filter 'Only High' không filter"

- name: Report
  steps:
    - print: "✓ skill xong — {{bugs_found}} bug phát hiện"
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

## Output mong đợi (sau khi run trên build có 4 bug)

```text
[skill] qc-tasks-smoke-test → run
✗ Welcome greeting không chứa display name      (BUG #1)
✗ Toast sai sau khi create task                 (BUG #2)
✗ Cancel trên confirm dialog vẫn xoá task       (BUG #3)
✗ Filter "Only High" không filter               (BUG #4)
✓ skill xong — 4 bug phát hiện
[backlog-mcp] create_issue → BUG-148, BUG-149, BUG-150, BUG-151
```

## Tại sao skill đáng dùng

- **Viết 1 lần — chạy mọi build** (smoke test nhanh).
- **Spec viết bằng tiếng người** — QC mới đọc cũng hiểu.
- **Agent đọc skill → tự lặp lại đều** — không phụ thuộc mood của QA.
- **Liên thông MCP**: Playwright (đọc UI) + Backlog (push bug) → khép vòng tự động.
