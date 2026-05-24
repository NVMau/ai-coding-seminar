/* ============================================================
 * QC Tasks — demo app for AI seminar.
 *
 * 4 INTENTIONAL BUGS are planted below — search for "BUG #".
 * Each bug is realistic and meant to be caught by the agent.
 * ============================================================ */

(function () {
  "use strict";

  const STORAGE_KEY = "qc-tasks-v1";
  const SESSION_KEY = "qc-session-v1";

  /* ---------- demo credentials & seed data ---------- */
  const CREDENTIALS = {
    email: "qc@example.com",
    password: "qc123",
    displayName: "QC User",
  };

  const SEED_TASKS = [
    { id: 1, title: "Login flow: validate empty email", priority: "High", status: "Open" },
    { id: 2, title: "Reset password — email delivery", priority: "Medium", status: "In progress" },
    { id: 3, title: "Profile page: avatar upload", priority: "Low", status: "Done" },
  ];

  /* ---------- storage helpers ---------- */
  function loadTasks() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_TASKS));
        return [...SEED_TASKS];
      }
      const arr = JSON.parse(raw);
      return Array.isArray(arr) ? arr : [...SEED_TASKS];
    } catch {
      return [...SEED_TASKS];
    }
  }
  function saveTasks(tasks) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }
  function loadSession() {
    try {
      return JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
    } catch {
      return null;
    }
  }
  function saveSession(session) {
    if (session) localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    else localStorage.removeItem(SESSION_KEY);
  }

  /* ---------- DOM helpers ---------- */
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  function show(view) {
    $$(".view").forEach((v) => v.classList.remove("view-active"));
    view.classList.add("view-active");
  }
  function toast(msg) {
    const el = $("#toast");
    el.textContent = msg;
    el.hidden = false;
    clearTimeout(toast._t);
    toast._t = setTimeout(() => (el.hidden = true), 2200);
  }

  /* ============================================================
   *  LOGIN
   * ============================================================ */
  function bindLogin() {
    $("#login-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const email = $("#login-email").value.trim();
      const password = $("#login-password").value;
      const errEl = $("#login-error");
      errEl.hidden = true;

      if (!email || !password) {
        errEl.textContent = "Email and password are required.";
        errEl.hidden = false;
        return;
      }

      if (
        email.toLowerCase() === CREDENTIALS.email &&
        password === CREDENTIALS.password
      ) {
        saveSession({
          email: CREDENTIALS.email,
          displayName: CREDENTIALS.displayName,
        });
        enterDashboard();
      } else {
        errEl.textContent = "Incorrect email or password.";
        errEl.hidden = false;
      }
    });
  }

  /* ============================================================
   *  DASHBOARD
   * ============================================================ */
  let state = {
    tasks: [],
    filterHigh: false,
    deleteId: null,
  };

  function enterDashboard() {
    const session = loadSession();
    if (!session) {
      show($("#view-login"));
      return;
    }

    // BUG #1 (Welcome bug)
    // Should render `session.displayName` ("QC User") but renders email instead.
    // Agent assertion: greeting contains the display name → fails because email shown.
    $("#welcome").textContent = "Hello, " + session.email;

    state.tasks = loadTasks();
    state.filterHigh = false;
    $("#filter-high").checked = false;
    renderTable();
    show($("#view-dashboard"));
  }

  function renderTable() {
    const tbody = $("#task-tbody");
    tbody.innerHTML = "";

    // BUG #4 (Filter bug)
    // The checkbox should filter to priority === "High",
    // but here we wrongly use `||` instead of `&&`, so ALL tasks pass through.
    const visible = state.tasks.filter(
      (t) => !state.filterHigh || t.priority === "High" || true
    );

    visible.forEach((t) => {
      const tr = document.createElement("tr");
      tr.dataset.testid = "task-row";
      tr.dataset.id = t.id;

      tr.innerHTML = `
        <td class="col-title" data-testid="task-row-title">${escapeHtml(t.title)}</td>
        <td class="col-priority">
          <span class="badge ${priorityClass(t.priority)}" data-testid="task-row-priority">${t.priority}</span>
        </td>
        <td class="col-status">
          <span class="status" data-testid="task-row-status">${t.status}</span>
        </td>
        <td class="col-actions">
          <button class="btn btn-ghost btn-sm" data-action="edit" data-id="${t.id}" data-testid="task-edit">Edit</button>
          <button class="btn btn-ghost btn-sm" data-action="delete" data-id="${t.id}" data-testid="task-delete">Delete</button>
        </td>
      `;
      tbody.appendChild(tr);
    });

    $("#empty-state").hidden = visible.length > 0;
    $("#task-count").textContent = String(state.tasks.length);
  }

  function priorityClass(p) {
    if (p === "High") return "badge-high";
    if (p === "Medium") return "badge-medium";
    return "badge-low";
  }
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[c]));
  }

  function bindDashboard() {
    $("#logout").addEventListener("click", () => {
      saveSession(null);
      show($("#view-login"));
    });

    $("#filter-high").addEventListener("change", (e) => {
      state.filterHigh = !!e.target.checked;
      renderTable();
    });

    $("#new-task").addEventListener("click", () => openTaskModal(null));

    $("#task-tbody").addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-action]");
      if (!btn) return;
      const id = Number(btn.dataset.id);
      const task = state.tasks.find((t) => t.id === id);
      if (!task) return;

      if (btn.dataset.action === "edit") openTaskModal(task);
      else if (btn.dataset.action === "delete") openConfirmDelete(task);
    });
  }

  /* ============================================================
   *  TASK MODAL (create / edit)
   * ============================================================ */
  function openTaskModal(task) {
    $("#task-modal-title").textContent = task ? "Edit task" : "New task";
    $("#task-id").value = task ? String(task.id) : "";
    $("#task-title").value = task ? task.title : "";
    $("#task-priority").value = task ? task.priority : "Medium";
    $("#task-status").value = task ? task.status : "Open";
    $("#task-title-error").hidden = true;
    $("#task-modal").hidden = false;
    setTimeout(() => $("#task-title").focus(), 30);
  }

  function closeTaskModal() {
    $("#task-modal").hidden = true;
  }

  function bindTaskModal() {
    $$("[data-modal-close]").forEach((el) =>
      el.addEventListener("click", closeTaskModal)
    );

    $("#task-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const id = $("#task-id").value ? Number($("#task-id").value) : null;
      const title = $("#task-title").value.trim();
      const priority = $("#task-priority").value;
      const status = $("#task-status").value;
      const errEl = $("#task-title-error");
      errEl.hidden = true;

      if (!title) {
        errEl.textContent = "Title is required.";
        errEl.hidden = false;
        return;
      }

      if (id) {
        // edit
        const idx = state.tasks.findIndex((t) => t.id === id);
        if (idx >= 0) {
          state.tasks[idx] = { ...state.tasks[idx], title, priority, status };
        }
        saveTasks(state.tasks);
        renderTable();
        closeTaskModal();
        toast("Task updated");
      } else {
        // create
        const newId =
          state.tasks.reduce((m, t) => Math.max(m, t.id), 0) + 1;
        state.tasks.push({ id: newId, title, priority, status });
        saveTasks(state.tasks);
        renderTable();
        closeTaskModal();

        // BUG #2 (Toast bug)
        // After creating a task the toast says "Task updated" (copy-paste mistake)
        // — should be "Task created".
        // Agent assertion: toast text === "Task created" → fails.
        toast("Task updated");
      }
    });
  }

  /* ============================================================
   *  DELETE CONFIRM
   * ============================================================ */
  function openConfirmDelete(task) {
    state.deleteId = task.id;
    $("#confirm-text").textContent =
      'Are you sure you want to delete "' + task.title + '"?';
    $("#confirm-modal").hidden = false;
  }
  function closeConfirmDelete() {
    state.deleteId = null;
    $("#confirm-modal").hidden = true;
  }
  function bindConfirmDelete() {
    $("#confirm-cancel").addEventListener("click", () => {
      // BUG #3 (Cancel-delete bug)
      // Clicking "Cancel" on the confirm dialog should ONLY close the dialog.
      // Here it also performs the delete — wrong behaviour.
      // Agent assertion: number of tasks BEFORE == AFTER pressing Cancel → fails.
      if (state.deleteId != null) {
        state.tasks = state.tasks.filter((t) => t.id !== state.deleteId);
        saveTasks(state.tasks);
        renderTable();
      }
      closeConfirmDelete();
    });

    $("#confirm-delete").addEventListener("click", () => {
      if (state.deleteId != null) {
        state.tasks = state.tasks.filter((t) => t.id !== state.deleteId);
        saveTasks(state.tasks);
        renderTable();
        toast("Task deleted");
      }
      closeConfirmDelete();
    });
  }

  /* ============================================================
   *  BOOTSTRAP
   * ============================================================ */
  function boot() {
    bindLogin();
    bindDashboard();
    bindTaskModal();
    bindConfirmDelete();

    // Auto-route based on session
    const session = loadSession();
    if (session) enterDashboard();
    else show($("#view-login"));

    // Tiny escape: hash #reset clears state for fresh demos
    if (location.hash === "#reset") {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(SESSION_KEY);
      location.hash = "";
      location.reload();
    }
  }

  document.addEventListener("DOMContentLoaded", boot);
})();
