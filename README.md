🍕 Nam FlashSale dApp (IOTA + Move + Next.js)

Dự án Web3 của Nam – xây dựng dApp Flash Sale & Demo Smart Contract Move trên mạng IOTA Devnet.
Gồm 2 phần chính:

🔥 Flash Sale dApp (mua hàng Web3, thanh toán bằng IOTA)

🍕 Pizza Move Contract (demo tạo object & tương tác blockchain)

👜 Kết nối ví IOTA (dùng IOTA Wallet Chrome Extension)

🌐 Frontend Next.js + IOTA dApp Kit

🚀 Cách chạy dự án
# 1. Cài dependencies
npm install --legacy-peer-deps

# 2. Deploy smart contract (Move)
npm run iota-deploy

# 3. Chạy web frontend
npm run dev

🧱 Chức năng chính
🔥 Flash Sale Web3

Hiển thị sản phẩm Flash Sale

Thanh toán bằng IOTA

Check ví, check thời gian, check số lượng tồn

Giao dịch hiển thị trên ví IOTA

🍕 Demo Pizza Move Contract

Hàm cook() tạo ra 1 PizzaBox

Hàm get_flag() trả về Flag nếu dữ liệu Pizza hợp lệ

Gọi được trực tiếp từ UI

👜 Wallet Connect

Kết nối tài khoản devnet

Hiện địa chỉ ví

Gửi giao dịch đến smart contract

🎨 UI:

Next.js 14 App Router

Radix UI

Dark theme đẹp mắt

Component tách gọn gàng

📁 Cấu trúc dự án
├── app/
│   ├── page.tsx           # Trang chính (Flash Sale + Pizza)
│   └── Provider.tsx       # Wrap IOTA + React Query
│
├── components/
│   ├── FlashSale.tsx      # Giao diện Flash Sale
│   ├── Wallet-connect.tsx # Kết nối ví IOTA
│   └── sample.tsx         # Demo gọi cook() và get_flag()
│
├── hooks/
│   └── useContract.ts     # Gọi smart contract Move từ frontend
│
├── lib/
│   └── config.ts          # Chứa Package ID + network
│
├── contract/
│   └── pizza_box/
│       ├── sources/       # Move smart contracts
│       └── Move.toml
│
└── prompts/               # Tự tạo prompt bằng AI để custom UI

📦 Deploy Contract

Chạy:

npm run iota-deploy


Nó tự động:

Build Move contract

Deploy lên IOTA Devnet

Lấy packageId

Cập nhật vào file: lib/config.ts

Tạo prompt để custom UI

📚 Tài liệu tham khảo

🔗 IOTA Devnet Explorer
https://explorer.iota.org/

🔗 IOTA SDK
https://github.com/iotaledger/iota-sdk

🔗 Move Language
https://github.com/move-language/move

🔗 Next.js
https://nextjs.org/docs

👨‍💻 Tác giả

Đinh Nhật Nam – Web3 Developer
(Dự án thực hành IOTA Move + Next.js)

📄 License

MIT