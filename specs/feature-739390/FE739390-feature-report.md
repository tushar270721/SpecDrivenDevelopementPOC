# Feature Report: FE#739390

**Generated:** 6/1/2026

## Metadata

| Property | Value |
|---|---|
| ID | 739390 |
| Title | [PHA PSM] Add What-if methodology (Worksheet + study) |
| State | Active |
| Priority | 2 |
| Type | Feature |
| Assigned To | Godbole, Aparna |
| Created | 12/3/2025 |
| Updated | 4/14/2026 |

## Description

### User Story

As a PHA User, I want to conduct What-If studies within the application, so that I can assess potential deviations and hazards.

### Problem Statement

Many clients conduct early-stage or lower-complexity risk assessments using the What-If methodology. Without dedicated support in the application, they either:
- Misuse HAZOP templates to mimic What-If behavior, or
- Work outside the platform entirely

This limits adoption and forces inconsistent study formats. To capture a broader market and support diverse workflows, the PHA application needs native What-If capabilities.

### Solution Overview

This feature introduces support for the **What-If methodology** within the PHA application, enabling users to conduct scenario-based hazard identification and risk analysis. The What-If method relies on structured, open-ended questions to explore potential deviations, causes, and consequences—especially effective in early-stage design or non-process-based systems where traditional guideword-based HAZOP may be too restrictive.

**Key Principle:** This new methodology will coexist with HAZOP and LOPA, using the same underlying principles and UI/UX.

## Business Value

- **Methodology Coverage** - Broadens product offering, enabling new use cases and industry segments (non-process industries, early design reviews)
- **Market Competitiveness** - Meets expectations for comprehensive PHA tools and expands addressable market
- **Ease of Adoption** - Enables teams unfamiliar with HAZOP to adopt lighter-weight method for risk assessment

## User Value

- **Flexibility** - Teams can brainstorm hazards without needing fully developed process model
- **Efficiency** - Simplified setup and input for systems or processes that don't fit HAZOP well
- **Familiarity** - Aligns with common industry practices already in use by safety and operations teams

## Core Features

### 1. New Methodology Type: What-If

- Add "What-If" as a selectable study type during creation
- Study appears in study list overview
- Filters in study overview include 'What-If'
- Feature flag support for What-If methodology

### 2. Study Tabs (Consistent with HAZOP)

- **General Info** - No changes
- **Documents** - No changes
- **Sessions & More** - No changes
- **Versions** - No changes
- **Recommendations** - No changes

### 3. Risk Analysis Tab

- Create sections (same as HAZID)
- Sections table/list display (same as HAZID)

### 4. Asset Library

**What-If Questions Tab:**
- Questions from master list cannot be pulled into asset library; must be added via worksheet
- Questions cannot be created in asset library; must be added in worksheet

**Safeguards Tab:**
- No changes (create/pull from master list functions remain)
- Reuse safeguard list functionality from HAZOP/HAZID

### 5. What-If Worksheet Structure

**Column Order:**
- **Question** (e.g., "What if the pump fails?") - NEW
- **Cause (Scenario)** - Existing (configurable)
- **Consequence** - Existing
- **Safeguards** - Existing
- **What-If Recommendations** - Existing
- **Remarks** - Existing (configurable)
- **Cat** - Existing
- **Inherent Risk** - Existing (configurable)
- **Current Risk** - Existing (configurable)
- **Residual Risk** - Existing (configurable)

**Worksheet Functionality:**
- Worksheet functions same as HAZOP and HAZID
- Question creation occurs immediately when user presses "Create" (not on save)
- Once created, question immediately available in asset library
- Button: "+ Add from master list" at top right
- Questions must be unique within subsection
- Copy/paste follows parent-child structure: Question → Cause → Consequence
- Question is dropdown populated from asset library with type-to-search capability
- Users can create new question directly from worksheet if not existing
- "+ Create new question" appears at bottom (same as safeguards)
- Editing behaves same as Recommendations: Modify/Create new on double-click

### 6. Subsections

- Subsection names must be unique
- Add subsections via "+ Add subsection" button
- Entire subsection can be copied/pasted in same section or different section
- Within same section, append subsection name with "_copy" (unique naming requirement)

### 7. Section Lifecycle

- Same as node lifecycle

### 8. Recommendation List View

- What-If recommendations display in recommendation list view with source 'What-If'
- All other functionality same as HAZOP/HAZID

### 9. Worksheet Configuration

Configurable columns (can be switched on/off):
- Cause
- Inherent Risk
- Current Risk
- Residual Risk
- Remarks

### 10. Study Lifecycle

- Same as HAZOP and HAZID
- Statuses: Planned → In Progress → Completed → Approved → (Rejected)

### 11. Versioning

- Same as HAZOP and HAZID

### 12. Import/Export (Future)

**Import (SP14):** Import of What-If study works same as HAZOP

**Export (SP14):** 
- Excel-based sheet with all What-If fields
- All fields exported even if hidden in worksheet configuration

### 13. What-If Master List

- Master list of questions
- One field called "subject" per question
- Subject used to filter questions when adding to worksheet

### 14. Terminology Configuration (SP14)

- Same functionality as HAZOP and HAZID
- Works independently
- Examples: 'safeguard' for HAZID, 'control' for What-If, 'barrier' for HAZOP

## Shared Components with HAZOP/HAZID

- Study Lifecycle and all statuses/transitions
- Node Lifecycle and all statuses/transitions
- Session Management
- Recommendations and Action Plan Integration
- Study Versioning and all rules
- Study List and Filters
- Worksheet column configuration (independent per methodology)
- Terminology configuration

## Acceptance Criteria

### AC-1: Study Creation

- Users can select "What-If" as the Study Type during study creation
- System sets up appropriate worksheet structure based on selected type

### AC-2: Worksheet Structure & Entry

- Users can add, edit, and delete rows in What-If worksheet
- Each row captures: What-If Question, Cause, Consequence, Safeguard, Recommendations
- Recommendations saved and linked to nodes/scenarios in Recommendation List

### AC-3: Study Workflow Compatibility

- What-If studies support same lifecycle workflow as other study types:
  - Planning → In Progress → Completed → Approved → Archived
- Team setup, session tracking, and review workflows remain consistent

### AC-4: Study List & Filters

- What-If studies appear in study list
- Can be filtered by methodology type
- What-If designation visible in study list

### AC-5: Master List Integration

- What-If questions stored in master list
- Questions searchable and reusable across studies
- Subject-based filtering for question organization

### AC-6: Asset Library Behavior

- Questions cannot be created directly in asset library
- Questions created in worksheet immediately added to asset library
- Questions can be pulled from master list into worksheet

## Comments

**Productboard Reference:**
https://enablon.productboard.com/entity-detail/features/b2a8d3d6-a4b6-4308-ac3b-0272ec0f41a8

**Note from Mariante van der Merwe (12/16/2025):**
Removed from SP12 Global release as the feature was not planned. State changed to Removed because it was not planned in SP12.
