# Palmira Chat — Multi-Provider AI Workspace (PTPN IV)

**URL:** [palmira.waterflai.my.id](https://palmira.waterflai.my.id)

## My Role
Frontend Developer. Built the entire client-side application.

## Context
PTPN IV needed an internal AI chat tool that could work with multiple LLM providers and organize conversations by project — not just a ChatGPT wrapper, but a proper workspace for teams across 71 factories to leverage AI for development assistance, report drafting, and operational queries.

## Problem
- Existing AI chat tools are locked to one provider — when one goes down or gets expensive, you're stuck.
- No project-based organization — conversations pile up with no context separation.
- No custom instructions per project — every chat starts from zero.
- No team sharing — insights stay siloed in individual accounts.
- No internal deployment option — sensitive company data can't go through third-party consumer tools.

## Solution
Built a full-featured AI chat workspace:
- **Multi-provider AI adapter** — OpenAI, Anthropic, and any OpenAI-compatible endpoint. Switch providers mid-conversation without losing context.
- **Project-based conversation grouping** — each project carries its own custom instructions, so the AI already knows the domain before you type.
- **Streaming responses via SSE** — real-time token delivery, no waiting for full completion.
- **AI-generated conversation titles** — automatic, contextual naming so you can find things later.
- **Public share pages** — share a conversation with a link, no login required for viewers.
- **Archive/star/search** — full-text search across all chats, star important threads, archive the rest.

## Tech
Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, shadcn/base-ui, NextAuth, Prisma + PostgreSQL, Docker

## Result
A production-ready AI workspace deployed internally at PTPN IV. Teams use it for development assistance, report generation, data analysis queries, and operational documentation. The multi-provider architecture means no single point of failure — when one API has downtime, users switch to another without losing their workflow.

## What Users Like
- Provider switching without losing conversation context
- Project-scoped instructions that eliminate repetitive prompting
- The speed — streaming responses feel instant compared to waiting for full completions
- Search actually works across months of conversations
- Self-hosted — sensitive operational data stays on company infrastructure
