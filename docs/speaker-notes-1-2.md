# Lời thuyết trình — Slide 1 & 2

Đây là **script gợi ý** để speaker đọc / tự điều chỉnh. Không cần học thuộc — cứ nói theo ý, dùng câu chữ ở đây làm "kim chỉ nam".

Format:
- `[stage]` = chỉ dẫn (chỉ vào đâu, làm gì)
- Đoạn văn = nội dung speaker nói
- ⏱ = thời lượng gợi ý

---

## SLIDE 1 — Mở đầu  · ⏱ ~1 phút

### Mục tiêu khi mở
- Chào, làm quen audience
- Cho biết hôm nay nói về **3 khái niệm + 1 demo**
- Đặt kỳ vọng: tập trung vào QC, có live demo

### Script

> `[chỉ vào hero title]`
>
> "Xin chào mọi người. Hôm nay mình ở đây để nói về một thứ mà gần đây team mình đang dùng khá nhiều, và mình nghĩ team QC sẽ là người hưởng lợi nhiều nhất — đó là **ứng dụng AI cho công việc QC**."

> `[chỉ vào dòng subtitle "Agent / Skill / MCP"]`
>
> "Buổi hôm nay mình sẽ đi qua 3 khái niệm cốt lõi: **Agent**, **Skill**, và **MCP**. Cuối buổi mình demo trực tiếp — agent dùng Playwright MCP để test một app, và **bắt 4 bug** mình cố ý cài sẵn trong app đó."

> `[chỉ vào 3 info block: Audience / Tập trung / Có demo]`
>
> "Buổi này dành riêng cho **Team QC**. Mình tập trung vào **manual testing** — phần các bạn làm hằng ngày, không đi sâu unit test hay automation cứng. Cuối buổi sẽ có **live demo**, không phải video, để mọi người thấy thực tế nó chạy ra sao."

> `[chỉ vào 4 preview card ở dưới]`
>
> "Đường đi của mình hôm nay: bắt đầu từ Agent — agent là gì, hoạt động ra sao; rồi tới Skill — cách đóng gói kinh nghiệm team; rồi MCP — chuẩn để agent kết nối tới mọi hệ thống; cuối cùng là demo flow tổng hợp tất cả."

> `[chuyển slide]`
>
> "Bắt đầu từ phần nền tảng nhé — **Agent**."

### Tips
- Đừng đọc hết các từ ở slide. Audience đã nhìn được. Speaker nói **ý** quanh slide.
- Nhấn mạnh: "**bắt 4 bug**" — để tạo tò mò cho phần Demo.
- Tốc độ slide 1: nói **nhanh và năng lượng**. Đây là hook.

---

## SLIDE 2 — Agent là gì?  · ⏱ ~3 phút

### Mục tiêu khi mở
- Audience hiểu agent **khác chatbot** chỗ nào
- Hiểu 3 thành phần: LLM · Context · Tool
- Hiểu giới hạn context → biết tại sao cần Skill

### Script

#### Phần 1: Định nghĩa nhanh  · ⏱ ~15s

> `[chỉ vào tagline "Agent = bộ não + tay chân + trí nhớ ngắn hạn"]`
>
> "Trước hết, một định nghĩa ngắn — và đây là cách mình nhớ:
> **Agent = bộ não + tay chân + trí nhớ ngắn hạn.**
> Ba thứ đó là cái nó cần có để làm được việc."

#### Phần 2: Ba thành phần (3 card)  · ⏱ ~35s

> `[chỉ vào card 1 "Agent là gì? — LLM"]`
>
> "**Bộ não** chính là LLM — kiểu như GPT, Claude. Nó suy nghĩ, quyết định bước tiếp theo. Nhưng nó **không tự làm gì được** — nó chỉ sinh text."

> `[chỉ vào card 2 "Context Window — MEMORY"]`
>
> "**Trí nhớ ngắn hạn** là context window. Toàn bộ chat, toàn bộ kết quả tool gọi đều nằm trong cửa sổ này. Nó **có giới hạn** — khoảng 32K, 128K, hoặc 200K token tuỳ model. Đầy thì agent bị quên, hoặc tự tóm tắt — mình sẽ nói kỹ ở dưới."

> `[chỉ vào card 3 "Tool — ACTION"]`
>
> "**Tay chân** là tool. Đọc file, chạy shell, mở browser, query DB… Mỗi tool là một động từ mà agent có thể làm. LLM một mình chỉ biết sinh text — muốn nó **tác động ra hệ thống thật** đều phải qua tool."

#### Phần 3: Visual Chatbot vs Agent  · ⏱ ~40s

> `[chỉ vào diagram "Chatbot thường vs. Agent"]`
>
> "Đây là điểm dễ nhầm: nhiều người nghĩ agent giống chatbot ChatGPT. **Không phải.** Khác hai chỗ chính:"

> `[chỉ panel trái]`
>
> "Bên trái — chatbot thường: user nhắn → LLM trả text → xong **1 lượt**. Hết. Nó **không gọi tool**, **không loop**. Mọi việc ngoài text đều phải người tự làm."

> `[chỉ panel phải, chú ý mũi tên loop]`
>
> "Bên phải — agent: user giao **một mục tiêu**, không phải một câu hỏi. Ví dụ: 'test giúp tao app này'. Sau đó:
> - LLM tự quyết: cần dùng tool nào.
> - Gọi tool → quan sát kết quả.
> - Đọc lại context → quyết bước tiếp.
> - Lặp 5 lần, 10 lần, 50 lần — đến khi đạt mục tiêu.
>
> Người dùng chỉ giao việc, agent tự đi. **Đó là cái 'tự chủ' nó khác chatbot.**"

#### Phần 4: Context Window  · ⏱ ~50s

> `[chỉ vào thanh ngang chia màu]`
>
> "Vì context quan trọng, mình minh hoạ kỹ chỗ này.
> Đây là cửa sổ context — tất cả mọi thứ agent **biết trong session** đều nằm ở đây."

> `[chỉ lần lượt từng segment màu]`
>
> "Phần xám đầu — **system prompt**, hướng dẫn ban đầu.
> Phần xanh — **user message**, cái mình gõ.
> Phần cam — **LLM reasoning**, agent suy nghĩ.
> Phần xanh lá — **tool result**, output khi gọi tool về.
> Phần đen — phần **còn trống**."

> `[chỉ vào số `12.8K / 32K tokens`]`
>
> "Ví dụ ở đây agent đã dùng 12.8K trong 32K token rồi. Mỗi tool gọi xong, output dài cũng ngốn token."

> `[chỉ vào panel "Khi context đầy"]`
>
> "Khi context đầy — 3 cái xảy ra:
> 1. **Tin nhắn cũ bị summarize** hoặc bị cắt khỏi context.
> 2. **Agent 'quên'** chi tiết ở đầu session → có thể ra quyết định lệch.
> 3. **Càng dài → càng chậm, càng tốn token.**
>
> Tip: **chia task nhỏ**, mở session mới khi không cần state cũ. Một skill = một session ngắn. Đừng gom hết task của tuần vào 1 con agent chạy 3 tiếng — nó sẽ ngu đi."

#### Phần 5: Tool palette  · ⏱ ~30s

> `[chỉ vào lưới 6 tool: Read file, Run shell, Open browser, Query DB, Edit code, Ask user]`
>
> "Vài ví dụ về tool agent hay dùng:
> - **Read file** để đọc spec, code, README…
> - **Run shell** để chạy test, build…
> - **Open browser** để mở web, click, snapshot — cái này sẽ thấy ở demo.
> - **Query DB** để check data thật.
> - **Edit code** để patch file.
> - **Ask user** khi cần xác nhận.
>
> Mỗi tool = một **động từ** agent có thể làm. **Càng nhiều tool phù hợp → agent càng làm được nhiều việc.**"

#### Phần 6: Vòng lặp Agentic  · ⏱ ~25s

> `[chỉ vào 4 step card: Reason / Call tool / Observe / Repeat]`
>
> "Tóm gọn lại cách agent hoạt động: **Reason → Call tool → Observe → Repeat**.
> Suy nghĩ — gọi tool — quan sát kết quả — và lặp đến khi xong.
>
> Đó là toàn bộ vòng lặp. Nhớ 4 từ này — phần sau (Skill, MCP) đều quay quanh vòng lặp này."

#### Transition sang slide 3  · ⏱ ~10s

> `[chuyển slide]`
>
> "Vấn đề là — mỗi task agent giải từ đầu, **không nhớ** team mình thường làm gì.
> Mỗi lần test app mới, agent lại tự mò convention, tự đoán bước.
>
> Cách để **đóng gói kinh nghiệm team** cho agent dùng lại — đó là **Skill**. Mời mọi người sang slide kế."

### Tips slide 2
- Đây là slide **dài nhất và nặng kiến thức nhất** trong nửa đầu. Đừng đọc nhanh.
- Nếu thấy audience trông hơi mệt, **dừng 2 giây** sau khi nói "**4 từ: Reason — Call tool — Observe — Repeat**" rồi qua slide.
- Câu nói chốt nên có sức nặng:
  > "Agent = bộ não (LLM) + tay chân (tools) + trí nhớ ngắn hạn (context window)."
- Đừng đi sâu vào kiến trúc transformer / token / attention — audience không cần, và mình cũng không đủ thời gian.
- Nếu có người hỏi "GPT có phải agent không?" → trả lời:
  > "ChatGPT bản gốc là chatbot. Nhưng khi nó được cho dùng tool — như code interpreter, browse, file upload — thì lúc đó nó hoạt động như agent. Khác nhau ở tool và loop, không phải khác model."

---

## Bảng tổng thời gian (tham khảo)

| Slide | Nội dung | Thời lượng |
| --- | --- | --- |
| 1 | Mở đầu — đặt vấn đề + roadmap | ~1' |
| 2 | Agent — 6 mini-section | ~3' |
| | **Cộng dồn** | **~4'** |

Còn lại ~11 phút cho Skill, MCP, Demo, Kết — sẽ viết tiếp script khi bạn cần.
