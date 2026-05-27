# Palmira Chat — AI Chat Workspace (Internal Product)

## My Role
Frontend Developer. Built the entire client-side application.

## Context
Needed an internal AI chat tool that could work with multiple LLM providers and organize conversations by project — not just a ChatGPT wrapper, but a proper workspace.

## Problem
Existing AI chat tools are either locked to one provider, don't support project-based organization, or lack features like custom instructions per project and team sharing.

## Solution
Built a full-featured AI chat workspace:
- Multi-provider AI adapter (OpenAI, Anthropic, OpenAI-compatible endpoints)
- Project-based conversation grouping with custom instructions per project
- Streaming responses via SSE
- AI-generated conversation titles
- Public share pages for conversations
- Archive/star/search across all chats

## Tech
Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, shadcn/base-ui, NextAuth, Prisma + PostgreSQL, Docker

## Result
A production-ready AI workspace that adapts to different LLM providers and organizes work by project context. Used internally for development assistance and content generation.
