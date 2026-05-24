# Demo Bugs — Speaker Reference (DO NOT share with the audience)

Companion app: `/demo-app/`
Credentials: `qc@example.com` / `qc123`
Reset state: append `#reset` to the URL (e.g. `/demo-app/#reset`) — clears `localStorage` and reloads.

The app contains **four bugs planted on purpose**. An agent paired with Playwright MCP should catch all of them when it runs the demo skill.

---

## BUG #1 — Welcome bug (login → dashboard)

**Location**: `app.js` → `enterDashboard()`
**UI symptom**: After a successful login, the header renders `"Hello, qc@example.com"` instead of `"Hello, QC User"`.

**Expected**: Show the `displayName` (`QC User`) loaded from the session/profile.
**Actual**: Shows the email address.

**How the agent catches it**:
- After clicking `[data-testid="login-submit"]` and waiting for the dashboard to render.
- Read the text of `[data-testid="welcome"]`.
- Assert: text **contains** `"QC User"`.
- Result: fails because the text contains `"qc@example.com"` and not `"QC User"`.

> Speaker note: *"This is the classic 'wrong data field' bug. Reviewing by eye is easy to miss if QA doesn't know the exact expected format — the agent reads the rule from the skill, so it isn't fooled by something that 'looks fine'."*

---

## BUG #2 — Toast wording (create task)

**Location**: `app.js` → `bindTaskModal()`, create branch
**UI symptom**: After creating a new task, the toast reads `"Task updated"` instead of `"Task created"`.

**Expected**: Toast = `"Task created"` (the action is a create).
**Actual**: Toast = `"Task updated"` (copy-paste mistake from the edit branch).

**How the agent catches it**:
- Open the modal via `[data-testid="new-task"]`.
- Enter a title, click `[data-testid="task-save"]`.
- Wait for `[data-testid="toast"]` to appear (≤ 1s).
- Assert: toast text === `"Task created"`.
- Result: fails because the text is `"Task updated"`.

> Speaker note: *"A classic copy-paste bug between two branches (create vs. update). The agent compares the message against the spec and spots it immediately — even when the wrong message looks completely reasonable."*

---

## BUG #3 — Cancel still deletes (confirm dialog)

**Location**: `app.js` → `bindConfirmDelete()`, cancel branch
**UI symptom**: In the delete-confirmation dialog, clicking `"Cancel"` still removes the task from the list (it should only close the dialog).

**Expected**: `Cancel` → dialog closes, the task is **not** deleted.
**Actual**: `Cancel` → dialog closes **and** the task is deleted.

**How the agent catches it**:
- Count rows before clicking delete: `count_before = N`.
- Click `[data-testid="task-delete"]` on a row → confirm modal appears.
- Click `[data-testid="confirm-cancel"]`.
- Count rows again: `count_after`.
- Assert: `count_before === count_after`.
- Result: fails because `count_after === count_before - 1`.

> Speaker note: *"This is a dangerous data bug — not a 'looks ugly' bug but a 'destroys things' bug. Manual QA often skips it if they only test the happy path. The skill requires testing the Cancel button too, so the agent catches it."*

---

## BUG #4 — "Only High priority" filter does nothing

**Location**: `app.js` → `renderTable()`
**UI symptom**: Tick the `Only show high priority` checkbox — the list still renders **every** task (no filtering).

**Expected**: Only rows with `priority === "High"` are visible.
**Actual**: All rows still appear (the filter expression contains a stray `|| true`).

**How the agent catches it**:
- Tick `[data-testid="filter-high"]`.
- Wait for the list to re-render.
- Count rows with badge `[data-testid="task-row-priority"]` === `"High"`: `high_count`.
- Count the total visible rows: `visible_count`.
- Assert: `visible_count === high_count`.
- Result: fails because `visible_count > high_count`.

> Speaker note: *"Filter bugs like this are extremely common in CRUD apps. The agent combines two assertions (count + property comparison) — writing this by hand is verbose, but inside a skill it's a couple of lines."*

---

## Demo flow (~15–20s per bug, ~2 minutes total)

1. Reset the app: visit `/demo-app/#reset`.
2. Sign in with the demo credentials.
3. Look at the welcome message → **BUG #1**.
4. Click "New task", enter any title, Save → check the toast → **BUG #2**.
5. Click "Delete" on a task → modal opens → click "Cancel" → count rows → **BUG #3**.
6. Tick "Only show high priority" → count rows → **BUG #4**.
7. The agent prints a summary: 4 bugs + details.

When the bug list is emitted as a Markdown report, you can paste it straight into a ticket — segue into slide 4 (Backlog MCP) with: *"Next, the agent pushes these four bugs to Jira via Backlog MCP."*
