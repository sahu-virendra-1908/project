🚀 OSS Sustainability Guardian

AI-Powered Pull Request Risk & Sustainability Analyzer for Open Source

OSS Sustainability Guardian is a production-ready, AI-driven system that automatically analyzes GitHub Pull Requests to detect risk, maintainability issues, and long-term sustainability impact the moment a PR is created.

It combines GitHub-native automation, AI agents, and modern cloud deployment to help open-source maintainers scale reviews without compromising code quality or project health.

🔗 Live Links

Frontend Dashboard:
https://frontend-chi-jet-30.vercel.app/

Backend Webhook Service (Vercel):
https://oss-sustainability-backend.vercel.app/webhooks/github

AI Engine (Oumi-powered):
https://ai-engine-three.vercel.app

GitHub App:
OSS Sustainability Guardian

📖 Table of Contents

Overview

Problem & Solution

Key Features

System Architecture

Technology Stack

How CodeRabbit Is Used

How Oumi AI Is Used

How Vercel Is Used

End-to-End Pull Request Flow

Quick Start

API Documentation

Deployment

Roadmap

Contributing

License

🌟 Overview

Open-source projects grow through Pull Requests—but reviewing them does not scale.

OSS Sustainability Guardian acts as an always-on AI reviewer that evaluates every Pull Request for:

⚠️ Risk Level (Low / Medium / High)

📊 Code Health & Sustainability Score

🧠 Maintainability and long-term impact

💡 Actionable insights for maintainers

The system operates in real time using GitHub webhooks and a dedicated AI Engine, providing immediate intelligence instead of delayed manual reviews.

💡 Problem & Solution
❌ The Problem: OSS Maintenance Bottleneck

Open-source maintainers face recurring challenges:

Challenge	Impact
Large Pull Requests	Hard to review manually
Limited maintainers	Review delays
Hidden risky changes	Bugs & regressions
No sustainability metric	Long-term decay

Manual reviews alone do not scale as projects grow.

✅ The Solution: Automated AI PR Guardian

OSS Sustainability Guardian solves this by:

Automatically analyzing every PR on creation

Detecting risky or high-impact changes early

Providing sustainability and maintainability signals

Supporting maintainers with structured, explainable insights

This allows maintainers to focus on decisions, not manual scanning.

✨ Key Features

🤖 AI-powered Pull Request analysis

⚠️ Automated risk classification

📊 Code health & sustainability scoring

🔗 Native GitHub App integration

🌍 Real-time webhook-based automation

📈 Frontend dashboard for visibility

🧩 Clean microservice architecture

🏗️ System Architecture
GitHub Pull Request
        ↓
GitHub Webhook
        ↓
Backend (Vercel)
        ↓
Oumi AI Engine (AI Microservice)
        ↓
Risk & Health Analysis
        ↓
Frontend Dashboard / Maintainer Insights

Architectural Principles

Event-driven (GitHub webhooks)

Separation of concerns (Backend vs AI Engine)

Production-ready deployment

OSS-friendly workflows

🛠️ Technology Stack
Backend & AI
Category	Technology
Runtime	Node.js
Language	TypeScript
Server	Express.js
AI Engine	Oumi (open-source)
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
GitHub App	PR event access
Webhooks	Real-time triggers
CodeRabbit	Automated PR review
🐰 How CodeRabbit Is Used
Role in OSS Sustainability Guardian

CodeRabbit is integrated as an AI-assisted PR reviewer within the GitHub workflow.

In this project:

CodeRabbit is installed as a GitHub App

Every Pull Request is automatically reviewed

CodeRabbit provides:

Code quality suggestions

Readability improvements

Refactoring recommendations

Documentation feedback

Why CodeRabbit Matters

CodeRabbit ensures:

Clean Pull Requests

Consistent review standards

Professional open-source practices

It complements our AI Engine by enforcing code-level quality, while OSS Sustainability Guardian focuses on risk and sustainability.

All CodeRabbit review activity is publicly visible in Pull Requests, demonstrating transparent OSS workflows.

🧠 How Oumi AI Is Used
Role of the Oumi AI Engine

Oumi is the core intelligence layer of the system.

It powers a dedicated AI Engine microservice that performs:

Semantic analysis of PR context

Detection of core logic changes

Risk and sustainability assessment

Maintainability signal extraction

Reinforcement Learning Fine-Tuning

Each Pull Request analysis is treated as an action.

Maintainer outcomes act as reward signals:

PR merged → positive reinforcement

Changes requested or PR closed → negative/neutral feedback

This enables the AI Engine to adapt its decision policy over time, improving accuracy based on real open-source behavior.

LLM-as-a-Judge

The system also applies LLM-as-a-Judge techniques to:

Self-evaluate AI suggestions

Improve clarity and usefulness

Maintain consistent output quality

Example AI Output
{
  "summary": "PR modifies core logic",
  "riskLevel": "Medium",
  "healthScore": 78
}


Oumi transforms raw PR metadata into actionable intelligence.

☁️ How Vercel Is Used
Role of Vercel

Vercel acts as the control and presentation layer of the system.

It hosts:

Backend webhook receiver

Frontend dashboard

Why Vercel

Fast global deployments

Secure environment variable handling

Reliable webhook processing

Seamless frontend hosting

The project is fully deployed on Vercel with a live production environment, demonstrating real-world readiness.

🔁 End-to-End Pull Request Flow

Developer opens a Pull Request

GitHub triggers a webhook

Backend (Vercel) receives the event

Backend calls the Oumi AI Engine

AI Engine analyzes PR risk & health

Results are returned

Frontend dashboard displays insights

CodeRabbit reviews PR in parallel

🚀 Quick Start
git clone https://github.com/sahu-virendra-1908/ai-engine.git
cd ai-engine

Install Dependencies
npm install

Environment Variables
PORT=5000
GITHUB_TOKEN=your_token
GITHUB_WEBHOOK_SECRET=your_secret

Build & Run
npm run build
npm start

🔌 API Documentation
POST /analyze

Request

{
  "prNumber": 5,
  "repo": "oss-sustainability-backend"
}


Response

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

All services are live and publicly accessible.

🗺️ Roadmap
Phase 1 (Completed)

✅ Real-time PR analysis

✅ Health score generation

Phase 2

PR comment automation

Historical PR analytics

Phase 3

ML-based diff analysis

Organization-level sustainability insights

🤝 Contributing

Contributions are welcome!

git checkout -b feature/new-feature
git commit -m "feat: add new feature"
git push origin feature/new-feature

📄 License

MIT License — free to use and modify.

🏆 Hackathon Ready

✔ Solves a real OSS problem
✔ Live deployment
✔ AI-powered automation
✔ GitHub-native workflow
✔ Clean, scalable architecture

⭐ If you find this useful, please star the repository.
Built with ❤️ for the open-source community.
