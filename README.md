🚀 OSS Sustainability Guardian

AI-Powered Pull Request Risk & Sustainability Analyzer for Open Source

Automated GitHub Pull Request analysis using AI to detect risk, maintainability issues, and long-term sustainability impact — the moment a PR is created.
frontend  https://frontend-chi-jet-30.vercel.app/
backend  https://oss-sustainability-backend.vercel.app/webhooks/github

🔗 Live AI Engine: https://ai-engine-three.vercel.app

🔗 GitHub App: OSS Sustainability Guardian

📖 Table of Contents

Overview

Problem & Solution

Key Features

System Architecture

Technology Stack

How CodeRabbit Is Used

How Oumi AI Is Used

How Vercel Is Used

End-to-End PR Flow

Quick Start

API Documentation

Deployment

Roadmap

Contributing

License

🌟 Overview

OSS Sustainability Guardian is an AI-driven system that automatically reviews GitHub Pull Requests and provides:

⚠️ Risk Level (Low / Medium / High)

📊 Code Health Score

🧠 Maintainability & sustainability insights

💡 Actionable feedback for maintainers

The system works in real time using GitHub webhooks and AI analysis, helping open-source projects stay healthy and scalable.

💡 Problem & Solution
❌ The Problem: OSS Maintenance Bottleneck

Open-source maintainers face:

Challenge	Impact
Large PRs	Hard to review manually
Limited maintainers	Review delays
Hidden risky changes	Bugs & regressions
No sustainability metric	Long-term decay

Manual reviews alone do not scale.

✅ The Solution: Automated AI PR Guardian

OSS Sustainability Guardian acts as an always-on AI reviewer that:

Instantly analyzes every PR

Flags risky changes

Provides maintainability signals

Helps maintainers make informed merge decisions

✨ Key Features

🤖 AI-powered PR analysis

⚠️ Risk classification

📊 Health score generation

🔗 Native GitHub integration

🌍 Real-time webhook-based automation

📈 Frontend dashboard support

🏗️ System Architecture
GitHub Pull Request
        ↓
GitHub Webhook
        ↓
Backend (Vercel)
        ↓
Oumi AI Engine (Render)
        ↓
Risk & Health Analysis
        ↓
Frontend Dashboard / GitHub Feedback

🛠️ Technology Stack
Backend & AI
Category	Technology
Runtime	Node.js
Language	TypeScript
Server	Express.js
AI Engine	Oumi (custom AI logic)
Validation	Zod
Deployment	Render
Frontend
Category	Technology
Framework	React
Build Tool	Vite
Styling	Tailwind CSS
Deployment	Vercel
GitHub Integration
Tool	Purpose
GitHub App	PR events
Webhooks	Real-time triggers
CodeRabbit	Automated code review
🐰 How CodeRabbit Is Used in This Project
Role in OSS Sustainability Guardian

CodeRabbit is used as an automated PR reviewer inside the GitHub workflow.

In this project:

CodeRabbit is installed as a GitHub App

Every Pull Request is automatically reviewed

CodeRabbit provides:

Code quality suggestions

Readability improvements

Best-practice feedback

Why CodeRabbit Matters Here

CodeRabbit ensures:

Clean PRs

Consistent review standards

High-quality open-source contributions

CodeRabbit complements our AI engine by enforcing clean OSS workflows and best practices.

🧠 How Oumi AI Engine Is Used
Role in OSS Sustainability Guardian

Oumi AI Engine is the brain of the system.

It performs semantic PR analysis, focusing on:

Core logic changes

Risk impact

Long-term sustainability

Maintainability signals

What Oumi AI Does

Receives PR metadata

Analyzes change context

Assigns:

Risk level

Health score

Returns structured AI insights

Example output:

{
  "summary": "PR modifies core logic",
  "riskLevel": "Medium",
  "healthScore": 78
}


Oumi AI turns raw PR data into actionable intelligence.

☁️ How Vercel Is Used
Role in OSS Sustainability Guardian

Vercel hosts the backend webhook receiver and frontend dashboard.

In this project, Vercel is responsible for:

Hosting the backend API

Receiving GitHub webhooks

Triggering AI analysis

Serving the frontend UI

Why Vercel

Fast deployments

Secure environment variables

Reliable webhook handling

Seamless frontend hosting

Vercel acts as the control layer between GitHub and the AI Engine.

🔁 End-to-End PR Flow

Developer opens a Pull Request

GitHub triggers webhook

Backend (Vercel) receives event

Backend calls Oumi AI Engine

AI analyzes PR

Result shown on dashboard / used for decisions

CodeRabbit reviews PR in parallel

🚀 Quick Start
Clone Repository
git clone https://github.com/sahu-virendra-1908/ai-engine.git
cd ai-engine

Install Dependencies
npm install

Setup Environment
PORT=5000
GITHUB_TOKEN=your_token
GITHUB_WEBHOOK_SECRET=your_secret

Build & Run
npm run build
npm start

🔌 API Documentation
POST /analyze

Request:

{
  "prNumber": 5,
  "repo": "oss-sustainability-backend"
}


Response:

{
  "maintainer": {
    "summary": "PR modifies core logic",
    "riskLevel": "Medium",
    "healthScore": 78
  }
}

🌍 Deployment

AI Engine: Render

Backend & Frontend: Vercel

GitHub Integration: GitHub App + Webhooks

🗺️ Roadmap
Phase 1

✅ Real-time PR analysis

✅ Health score generation

Phase 2

PR comment automation

Historical PR analytics

Phase 3

ML-based diff analysis

Organization-level insights

🤝 Contributing

Contributions are welcome!

git checkout -b feature/new-feature
git commit -m "feat: add new feature"
git push origin feature/new-feature

📄 License

MIT License — free to use and modify.

🏆 Hackathon Ready

✔ Real-world OSS problem
✔ Live deployment
✔ AI-powered automation
✔ GitHub-native workflow
✔ Clean architecture

⭐ If you find this useful, please star the repository!
Built with ❤️ for the open-source community.
