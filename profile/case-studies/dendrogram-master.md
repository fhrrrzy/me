# Dendrogram Master Equipment — Unifying 71 Factories

## My Role
Solo engineer. Designed and built the entire web application.

## Context
PTPN IV has 71 palm oil factories, each with their own equipment naming conventions and data entry patterns. This data needs to be unified and validated before it can be used in the CMMS or SAP systems.

## Problem
Manually validating and unifying equipment data across 71 factories was a painful, error-prone process. Users had to cross-reference multiple spreadsheets, check functional locations, cost centers, planner groups, and equipment descriptions — all by hand. The path from raw Excel to clean, unified data was brutal.

## Solution
Built a web-based validation tool using a **dendrogram structure** (originally modeled in Google Sheets) to unify equipment hierarchies. Instead of forcing users through the painful manual path, the tool:
- Validates CWC (Work Center), planner groups, functional location plant codes, and cost centers automatically
- Performs combo validation (FUNCTLOC DESC + EQKTU matching against source data)
- Supports single-file upload and batch processing via Google Drive
- Includes dendrogram autofix coverage for conveyor/elevator systems
- Highlights errors and suggests corrections

## Tech
Next.js, TypeScript, ExcelJS, PLpgSQL, Google Drive API integration

## Result
What used to take hours of manual cross-referencing now happens in seconds. Users upload their Excel files, get instant validation feedback, and can fix issues before data enters the system. 71 factories, one unified standard.
