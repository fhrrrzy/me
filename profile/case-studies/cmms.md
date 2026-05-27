# CMMS — Equipment Monitoring for 71 Palm Oil Factories

**URL:** [cmms.ptpn4.co.id](https://cmms.ptpn4.co.id)

## My Role
Fullstack Developer (team). Collaborated with another fullstack developer, a project manager, and SAP ERP PM key users. I handled both frontend and backend development.

## Context
PT Perkebunan Nusantara IV operates 71 palm oil factories across multiple regions in Indonesia. Plant managers and maintenance supervisors need real-time visibility into equipment health to prevent downtime.

## Problem
Equipment data was scattered, hard to access, and not actionable. Managers couldn't quickly see which machines needed attention, compare performance across regions, or make data-driven maintenance decisions.

## Solution
Built a modern, mobile-first equipment monitoring dashboard connected to **SAP ERP PM module** data. Features include:
- Real-time sortable equipment table with search, pagination, and saved filters
- Powerful filtering by date range, region, plant, and station
- Equipment drill-down with specs, location context, and running time history
- Dual-axis ECharts visualizations for running time analytics
- Work order and material tracking per equipment
- QR code sharing for instant equipment page access
- Google OAuth for secure team access

## Tech
Vue 3 (Composition API), Inertia.js v2, shadcn-vue, ECharts, Tailwind CSS v4, Laravel 12, Filament v3, Laravel Reverb (WebSockets), Redis, Docker Compose (multi-service with queue workers and health checks)

## Result
Plant managers and maintenance supervisors across all regions now have real-time visibility into equipment health. Faster decisions, less unplanned downtime, and a single source of truth for maintenance data.
