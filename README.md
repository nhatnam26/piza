🍕 Nam FlashSale dApp (IOTA + Move + Next.js)

A Web3 decentralized application built by Nam, featuring:

🔥 Flash Sale dApp using IOTA wallet

🍕 Move Smart Contract (Pizza Contract) deployed on IOTA Devnet

👜 Wallet connection via IOTA dApp Kit

🌐 Frontend powered by Next.js + TypeScript

This project demonstrates how to build a full-stack IOTA dApp mixing Web2 UI logic with Web3 blockchain transactions.
Quick Start:
# 1. Install dependencies
npm install --legacy-peer-deps

# 2. Deploy Move smart contract to Devnet
npm run iota-deploy

# 3. Run the Next.js development server
npm run dev
🎯 Features
🔥 Web3 Flash Sale

Interactive Flash Sale product UI

Purchase using IOTA wallet

Real-time quantity, timer, and user validation

Transactions signed directly via IOTA Wallet Extension

🍕 Move Smart Contract (PizzaBox)

cook() — creates a PizzaBox object on-chain

get_flag() — returns a Flag object if pizza data matches the required formula

Both functions are public entry functions, fully callable from the frontend

👜 Wallet Integration

Connect & auto-reconnect wallet

Display user address

Sign and submit IOTA transactions

🌐 Modern Frontend

Next.js 14 App Router

Radix UI

TypeScript

React Query

Clean component architecture
📦 Smart Contract Deployment: npm run dev
This script will automatically:

Build the Move contract

Deploy it to IOTA Devnet

Extract and update the Package ID inside lib/config.ts

Generate an AI prompt for UI integration in /prompts

After deployment, your package ID will be shown like:
Package ID: 0x6b59a9423c6aa80f8c6e7e6ec0fe93f38168ce412254880ae59616d06ac275d4
📚 Useful Links

🔗 IOTA Explorer (Devnet)
https://explorer.iota.org/

🔗 IOTA dApp Kit
https://github.com/iotaledger/dapp-kit

🔗 Move Language Documentation
https://github.com/move-language/move

🔗 Next.js Documentation
https://nextjs.org/docs

👨‍💻 Author
Đinh Nhật Nam
Web3 / Move / IOTA Developer
📄 License
MIT