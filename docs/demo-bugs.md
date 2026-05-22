# Demo Bugs — Speaker Reference (KHÔNG share cho audience)

App demo: `/demo-app/`  
Credentials: `qc@example.com` / `qc123`  
Reset state: thêm `#reset` vào URL (vd `/demo-app/#reset`) — clear localStorage + reload.

Có **4 bug** được cài chủ động trong app. Agent + Playwright MCP nên bắt được hết khi chạy script test demo.

---

## BUG #1 — Welcome bug (login → dashboard)

**Vị trí**: `app.js` → `enterDashboard()`  
**Triệu chứng UI**: Sau khi login thành công, header hiện `"Xin chào, qc@example.com"` thay vì `"Xin chào, QC User"`.

**Expected**: Hiển thị `displayName` (`QC User`) lấy từ session/profile.  
**Actual**: Hiển thị email.

**Cách agent bắt**:
- Sau khi click `[data-testid="login-submit"]` và đợi dashboard render.
- Đọc text của `[data-testid="welcome"]`.
- Assert: text **chứa** `"QC User"`.
- Kết quả: fail vì text chứa `"qc@example.com"` chứ không có `"QC User"`.

> Nói với audience: *"Đây là kiểu bug copy data sai. UI test bằng mắt rất dễ bỏ qua nếu QA không biết format đúng — Agent đọc rule từ skill, không bị 'quen mắt'."*

---

## BUG #2 — Toast wording (create task)

**Vị trí**: `app.js` → `bindTaskModal()` nhánh create  
**Triệu chứng UI**: Tạo task mới xong, toast hiện `"Task updated"` thay vì `"Task created"`.

**Expected**: Toast = `"Task created"` (do action là create).  
**Actual**: Toast = `"Task updated"` (copy-paste từ nhánh edit).

**Cách agent bắt**:
- Mở modal `[data-testid="new-task"]`.
- Nhập title, click `[data-testid="task-save"]`.
- Đợi `[data-testid="toast"]` xuất hiện (≤ 1s).
- Assert: toast text === `"Task created"`.
- Kết quả: fail vì text === `"Task updated"`.

> Nói với audience: *"Bug copy-paste giữa hai luồng (create vs update). Agent đối chiếu thông điệp với spec, phát hiện ngay — kể cả tin nhắn `"Task updated"` nhìn hợp lý."*

---

## BUG #3 — Cancel button vẫn xoá (confirm dialog)

**Vị trí**: `app.js` → `bindConfirmDelete()` nhánh cancel  
**Triệu chứng UI**: Trong dialog xác nhận xoá, bấm `"Huỷ"` thì task vẫn bị xoá khỏi list (đáng lẽ chỉ đóng dialog).

**Expected**: `Huỷ` → đóng dialog, **không** xoá.  
**Actual**: `Huỷ` → đóng dialog **và** xoá luôn.

**Cách agent bắt**:
- Đếm số row trước khi click delete: `count_before = N`.
- Click `[data-testid="task-delete"]` của 1 row → confirm modal hiện.
- Click `[data-testid="confirm-cancel"]`.
- Đếm số row sau: `count_after`.
- Assert: `count_before === count_after`.
- Kết quả: fail vì `count_after === count_before - 1`.

> Nói với audience: *"Đây là bug rất nguy hiểm với data — không phải bug 'xấu' mà là bug 'phá'. Manual QA dễ bị skip nếu chỉ test happy path xoá thật. Skill yêu cầu test cả nút Huỷ → bắt được."*

---

## BUG #4 — Filter "Only High priority" không filter

**Vị trí**: `app.js` → `renderTable()`  
**Triệu chứng UI**: Tick checkbox `Chỉ hiện priority cao` — list vẫn hiển thị **mọi** task (không filter).

**Expected**: Chỉ hiện row có `priority === "High"`.  
**Actual**: Vẫn hiện tất cả (lỗi logic `|| true`).

**Cách agent bắt**:
- Tick `[data-testid="filter-high"]`.
- Đợi list re-render.
- Đếm row có badge `[data-testid="task-row-priority"]` === `"High"`: `high_count`.
- Đếm tổng row hiển thị: `visible_count`.
- Assert: `visible_count === high_count`.
- Kết quả: fail vì `visible_count > high_count`.

> Nói với audience: *"Bug filter là kiểu rất phổ biến trong CRUD app. Agent kết hợp 2 assertion (đếm + so sánh property) — viết script tay thì verbose, viết bằng skill rất gọn."*

---

## Demo flow (15–20 giây / bug, tổng ~2 phút)

1. Reset app: vào `/demo-app/#reset`.
2. Login với credentials đúng.
3. Quan sát welcome → **BUG #1**.
4. Click "Tạo task", nhập title bất kỳ, Save → toast → **BUG #2**.
5. Click "Xoá" 1 task → modal hiện → Click "Huỷ" → count rows → **BUG #3**.
6. Tick "Chỉ hiện priority cao" → count rows → **BUG #4**.
7. Agent in tổng kết: 4 bug + chi tiết.

Khi bug-list xuất ra dưới dạng Markdown report, có thể paste thẳng vào ticket — chuyển tiếp slide 4 (Backlog MCP) để nói: *"Bước tiếp theo, agent dùng Backlog MCP tự push 4 bug này lên Jira."*
