# Test Cases: FE#739390 - What-If Methodology for PHA Studies

**Feature:** [PHA PSM] Add What-If Methodology (Worksheet + Study)  
**Feature ID:** FE#739390  
**Total Test Cases:** 72  
**Created:** 6/1/2026  
**Status:** DRAFT - Ready for QA Lead Review

---

# FUNCTIONAL TEST CASES

---

# TC-FE739390-001

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-001 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

PHA Facilitator can create new What-If study with methodology selection

## Preconditions

1. User authenticated as PHA Facilitator
2. Study creation interface accessible
3. Feature flag for What-If enabled
4. No conflicting study with same name exists

## Test Data

| Field | Value |
|-------|-------|
| Study Name | Early Design Review - Pump System |
| Methodology | What-If |
| Team Lead | facilitator@company.com |
| Tenant | tenant-001 |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | PHA Facilitator navigates to Study Management | Study creation interface displays |
| 2 | Facilitator clicks "Create New Study" button | Study creation dialog opens with methodology selection |
| 3 | Facilitator enters study name "Early Design Review - Pump System" | Study name field populates without validation error |
| 4 | Facilitator selects "What-If" from methodology dropdown | "What-If" option selected and displayed |
| 5 | Facilitator selects team lead and confirms | Study configuration complete |
| 6 | Facilitator clicks "Create Study" | System creates study with status "Planning" |
| 7 | Facilitator verifies study appears in study list | Study appears with methodology designation "What-If" |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-002

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-002 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

PHA Facilitator can add What-If questions to worksheet from asset library

## Preconditions

1. What-If study created and in editing mode
2. Worksheet accessible with empty question column
3. Asset library contains What-If questions

## Test Data

| Field | Value |
|-------|-------|
| Study | Early Design Review - Pump System |
| Search Term | pump |
| Question to Add | What if the pump fails? |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | PHA Facilitator navigates to worksheet | Worksheet displays with empty rows |
| 2 | Facilitator clicks question column in first row | Question dropdown opens |
| 3 | Facilitator types "pump" in search field | Asset library searched; Matching questions displayed |
| 4 | Facilitator selects "What if the pump fails?" | Question added to row |
| 5 | Facilitator enters consequence "Loss of flow" | Consequence field populated |
| 6 | Facilitator saves worksheet row | Row saved with question and consequence linked |
| 7 | Facilitator verifies question available for future use | "What if the pump fails?" remains in asset library |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-003

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-003 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

PHA Facilitator can create new What-If question directly from worksheet

## Preconditions

1. What-If study open with worksheet
2. Needed question not in asset library
3. "Create new question" option available

## Test Data

| Field | Value |
|-------|-------|
| New Question | What if temperature sensor fails? |
| Subject | Sensors |
| Study | Early Design Review - Pump System |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | PHA Facilitator clicks question column and searches for sensor question | Question not found in asset library |
| 2 | Facilitator clicks "+ Create new question" option | New question creation form displays |
| 3 | Facilitator enters question text "What if temperature sensor fails?" | Question text populated in form |
| 4 | Facilitator optionally enters subject "Sensors" | Subject field populated |
| 5 | Facilitator clicks "Create" button | Question added to worksheet and asset library |
| 6 | System marks new question as immediately available | "What if temperature sensor fails?" appears in asset library |
| 7 | Facilitator verifies question reusable in other studies | Question searchable by name "temperature sensor" |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-004

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-004 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

PHA Facilitator can configure visible worksheet columns for What-If study

## Preconditions

1. What-If study exists with worksheet
2. Column configuration interface accessible
3. Study in editable state

## Test Data

| Field | Value |
|-------|-------|
| Study | Early Design Review - Pump System |
| Columns to Hide | Inherent Risk, Cause |
| Columns to Keep Visible | Question, Consequence, Safeguard |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Study Owner navigates to study settings | Configuration menu displays |
| 2 | Owner clicks "Column Configuration" option | Column configuration dialog opens |
| 3 | Owner unchecks "Inherent Risk" checkbox | Inherent Risk marked as hidden |
| 4 | Owner unchecks "Cause" checkbox | Cause column marked as hidden |
| 5 | Owner confirms configuration | Configuration saved to study |
| 6 | Worksheet reloads with updated column layout | Inherent Risk and Cause columns no longer visible |
| 7 | Owner verifies remaining columns: Question, Consequence, Safeguard display | Visible columns correctly displayed; Hidden columns absent |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-005

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-005 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

PHA Facilitator can edit existing worksheet entries including question and consequences

## Preconditions

1. What-If worksheet has existing entries
2. Entries created and awaiting editing
3. Facilitator has edit permissions

## Test Data

| Field | Value |
|-------|-------|
| Original Question | What if pump fails? |
| Updated Consequence | Loss of cooling (changed from "Loss of flow") |
| Row Number | 2 |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | PHA Facilitator navigates to worksheet with existing entries | Worksheet displays 3 rows with data |
| 2 | Facilitator clicks on row 2 consequence field | Consequence field becomes editable |
| 3 | Facilitator changes consequence from "Loss of flow" to "Loss of cooling" | Updated text appears in field |
| 4 | Facilitator clicks outside field to save edit | Edit persisted to database |
| 5 | Facilitator clicks question field in row 2 to modify | Question selection dropdown opens |
| 6 | Facilitator confirms question "What if pump fails?" remains selected | No change needed to question |
| 7 | Facilitator verifies other rows unaffected | Rows 1 and 3 remain with original data |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-006

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-006 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

PHA Facilitator can delete worksheet rows from What-If study

## Preconditions

1. What-If worksheet has 5 rows with questions
2. Row 3 selected for deletion
3. Delete confirmation available

## Test Data

| Field | Value |
|-------|-------|
| Total Rows Before | 5 |
| Row to Delete | 3 |
| Total Rows After | 4 |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | PHA Facilitator navigates to worksheet with 5 rows | All 5 rows display with data |
| 2 | Facilitator right-clicks on row 3 | Context menu displays with delete option |
| 3 | Facilitator selects "Delete Row" | Confirmation dialog appears |
| 4 | Facilitator confirms deletion | Row 3 removed from worksheet |
| 5 | Remaining rows renumbered sequentially | 4 rows remain; Row numbers 1-4 |
| 6 | Facilitator verifies data integrity | Rows 1, 2, 4, 5 (now 1, 2, 3, 4) intact with original data |
| 7 | System records deletion in audit trail | Deletion logged with timestamp and facilitator ID |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-007

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-007 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

PHA Facilitator can create and name subsections within What-If worksheet

## Preconditions

1. What-If study with worksheet open
2. "Add Subsection" button available
3. Subsection naming unique per section

## Test Data

| Field | Value |
|-------|-------|
| Subsection Name | Primary Pump System |
| Row Count | 0 (new subsection) |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | PHA Facilitator navigates to worksheet | Worksheet displays with existing subsections |
| 2 | Facilitator clicks "Add Subsection" button | Subsection creation dialog appears |
| 3 | Facilitator enters subsection name "Primary Pump System" | Name field populated |
| 4 | Facilitator clicks "Create" | New subsection added to worksheet |
| 5 | System validates uniqueness within section | "Primary Pump System" accepted; No naming conflict |
| 6 | Facilitator can add questions to new subsection | Questions can be added to new subsection |
| 7 | System prevents duplicate subsection naming | Attempt to create another "Primary Pump System" rejected |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-008

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-008 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

PHA Facilitator can copy subsection preserving question relationships

## Preconditions

1. Subsection "Design Phase" exists with 3 questions
2. Parent-child relationships established (Question → Cause → Consequence)
3. Copy functionality available

## Test Data

| Field | Value |
|-------|-------|
| Original Subsection | Design Phase |
| Questions | 3 |
| Copy Destination | Same section |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | PHA Facilitator right-clicks "Design Phase" subsection | Context menu displays with copy option |
| 2 | Facilitator selects "Copy Subsection" | Subsection copied to clipboard |
| 3 | Facilitator right-clicks section and selects "Paste Subsection" | Pasted subsection appears as "Design Phase_copy" |
| 4 | System validates unique naming | "_copy" suffix added to prevent naming conflict |
| 5 | Facilitator verifies copied subsection has 3 questions | All 3 questions duplicated with data intact |
| 6 | Parent-child relationships verified | Question → Cause → Consequence structure preserved |
| 7 | Original subsection unchanged | "Design Phase" remains with original 3 questions |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-009

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-009 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Study Owner can view What-If studies filtered by methodology in study list

## Preconditions

1. Multiple studies exist (HAZOP, HAZID, What-If)
2. Study list interface accessible
3. Filtering functionality available

## Test Data

| Field | Value |
|-------|-------|
| Total Studies | 15 |
| HAZOP Studies | 5 |
| HAZID Studies | 7 |
| What-If Studies | 3 |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Study Owner navigates to Study List | All 15 studies display |
| 2 | Owner clicks "Filter" option | Filter menu displays with methodology options |
| 3 | Owner selects "What-If" filter | List filtered to show only What-If studies |
| 4 | System displays 3 What-If studies | Only What-If studies visible; HAZOP/HAZID filtered out |
| 5 | Each study shows methodology designation "What-If" | Clear identification of methodology type |
| 6 | Owner can click individual What-If study | Study opens with What-If worksheet |
| 7 | Owner removes filter | All 15 studies display again |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-010

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-010 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Study Owner can transition What-If study through lifecycle statuses

## Preconditions

1. What-If study exists in "Planning" status
2. Study has complete worksheet entries
3. Lifecycle transitions enabled

## Test Data

| Field | Value |
|-------|-------|
| Initial Status | Planning |
| Transition Path | Planning → In Progress → Completed → Approved |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Study Owner navigates to study overview | Study displays with status "Planning" |
| 2 | Owner clicks "Transition to In Progress" | Status changes to "In Progress" |
| 3 | System records transition timestamp | Timestamp: 2026-06-01 14:30:00 UTC |
| 4 | Owner adds completion notes and transitions to "Completed" | Status changes to "Completed" |
| 5 | System verifies required fields for completion | Worksheet entries validated |
| 6 | Owner initiates approval process; Status transitions to "Approved" | Status changes to "Approved" |
| 7 | Audit trail shows all transitions | Complete lifecycle history recorded |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-011

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-011 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

PHA Facilitator can create recommendations from What-If findings

## Preconditions

1. What-If worksheet has entries with consequences
2. Recommendation creation interface accessible
3. Linking to findings functional

## Test Data

| Field | Value |
|-------|-------|
| Finding | Pump failure - high consequence |
| Recommendation | Replace pump with redundant design |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | PHA Facilitator navigates to worksheet | Worksheet displays with entries |
| 2 | Facilitator clicks "Create Recommendation" on a finding row | Recommendation dialog appears |
| 3 | Facilitator enters recommendation "Replace pump with redundant design" | Recommendation text populated |
| 4 | Facilitator assigns priority "High" | Priority set for recommendation |
| 5 | System links recommendation to What-If finding | Bidirectional link established |
| 6 | Facilitator saves recommendation | Recommendation persisted to database |
| 7 | Recommendation appears in Recommendation List with source "What-If" | Recommendation visible with correct source designation |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-012

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-012 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Safety Manager can browse What-If question master list with subject filtering

## Preconditions

1. Asset library contains 50+ What-If questions
2. Questions tagged with subjects (Pump Failures, Sensors, Valves, etc.)
3. Master list search interface accessible

## Test Data

| Field | Value |
|-------|-------|
| Total Questions | 50+ |
| Subject Filter | Pump Failures |
| Matching Questions | 12 |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Safety Manager navigates to What-If Master List | List displays all 50+ questions |
| 2 | Manager views subject filter options | Filter dropdown shows: Pump Failures, Sensors, Valves, Controls |
| 3 | Manager selects "Pump Failures" filter | List filtered to 12 pump-related questions |
| 4 | Manager searches for "pump" keyword | Results further narrowed to exact matches |
| 5 | Manager views question with usage statistics | "What if pump fails?" shows "Used in 8 studies" |
| 6 | Manager can click question to view details | Question details display with creation date and subject |
| 7 | Manager removes filter to view all questions again | Full list of 50+ questions displayed |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-013

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-013 |
| Priority | Low |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

PHA Facilitator can add safeguards/controls to What-If findings

## Preconditions

1. What-If worksheet with entries
2. Safeguards master list available
3. Safeguard linking functionality enabled

## Test Data

| Field | Value |
|-------|-------|
| Finding | Pump failure |
| Safeguard | Backup pump system |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | PHA Facilitator navigates to worksheet entry | Row with "Pump failure" finding displays |
| 2 | Facilitator clicks safeguard column | Safeguard dropdown appears |
| 3 | Facilitator searches for "backup pump" | Matching safeguards displayed from master list |
| 4 | Facilitator selects "Backup pump system" | Safeguard linked to finding |
| 5 | Facilitator can add multiple safeguards to single finding | Additional safeguards can be linked |
| 6 | Safeguard persists when saving worksheet | Safeguard relationship maintained |
| 7 | Safeguard can be removed from finding | Unlinking functionality works |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-014

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-014 |
| Priority | Low |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Study Owner can version What-If study capturing snapshots of analysis

## Preconditions

1. What-If study with completed worksheet
2. Versioning interface accessible
3. No previous versions exist

## Test Data

| Field | Value |
|-------|-------|
| Study | Early Design Review - Pump System |
| Initial Version | 1.0 |
| Snapshot Reason | Initial analysis complete |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Study Owner navigates to study versions tab | Versions interface displays |
| 2 | Owner clicks "Create Version Snapshot" | Version creation dialog appears |
| 3 | Owner enters version number "1.0" and reason "Initial analysis complete" | Version metadata populated |
| 4 | Owner clicks "Save Version" | Version snapshot created |
| 5 | System captures all worksheet data at version | Snapshot contains all questions, consequences, safeguards |
| 6 | Version appears in version history with timestamp | Version 1.0 listed with creation date |
| 7 | Owner can create additional version 1.1 after edits | Multiple versions supported |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-015

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-015 |
| Priority | Low |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

What-If question creation immediately available for reuse across all studies

## Preconditions

1. New What-If question created in Study A: "What if control valve malfunctions?"
2. Study B needs to add same question
3. Asset library synchronized

## Test Data

| Field | Value |
|-------|-------|
| Study A | Design Review - Pump |
| Study B | Production System Analysis |
| Question | What if control valve malfunctions? |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | PHA Facilitator creates question in Study A | Question added to asset library immediately |
| 2 | Facilitator in Study B opens worksheet | Question dropdown now includes newly created question |
| 3 | Study B facilitator searches for "control valve" | Question "What if control valve malfunctions?" appears in search results |
| 4 | Facilitator selects question in Study B | Question added to Study B worksheet |
| 5 | Study B worksheet displays question with correct text | No lag time between creation and availability |
| 6 | Usage count updated for question | "What if control valve malfunctions?" shows "Used in 2 studies" |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-016

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-016 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Study Owner can export What-If study data including hidden columns

## Preconditions

1. What-If study with 5 questions and hidden columns (Cause, Inherent Risk)
2. Export functionality accessible
3. Hidden columns contain data

## Test Data

| Field | Value |
|-------|-------|
| Visible Columns | Question, Consequence, Safeguard |
| Hidden Columns | Cause, Inherent Risk |
| Export Format | Excel |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Study Owner navigates to study tools menu | Export option displays |
| 2 | Owner selects "Export to Excel" | Export dialog appears with format options |
| 3 | Owner confirms export | Excel file generated with all data |
| 4 | Owner opens exported file | File displays all visible columns (Question, Consequence, Safeguard) |
| 5 | Owner checks for hidden column data | Cause and Inherent Risk columns included in export even though hidden in UI |
| 6 | All worksheet entries present in export | 5 questions with complete data exported |
| 7 | Exported file integrity verified | All data readable and properly formatted |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-017

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-017 |
| Priority | Low |
| Automatable | No |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |
| Reason | Requires manual verification of terminology configuration UI and custom term application across system |

## Title

Tenant Admin can configure custom terminology for What-If study

## Preconditions

1. Tenant admin interface accessible
2. Terminology configuration available
3. Defaults configured (safeguard, control, barrier)

## Test Data

| Field | Value |
|-------|-------|
| Existing Term | Safeguard |
| Custom Term | Risk Control |
| Scope | What-If methodology only |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Tenant Admin navigates to terminology settings | Terminology configuration page displays |
| 2 | Admin selects "What-If Methodology" | What-If terminology options shown |
| 3 | Admin changes "Safeguard" label to "Risk Control" | Custom term set for What-If |
| 4 | Admin saves terminology configuration | Changes persisted to tenant settings |
| 5 | PHA Facilitator creates new What-If study | Worksheet displays "Risk Control" instead of "Safeguard" |
| 6 | Custom terminology applies only to What-If | HAZOP studies continue using "Barrier" term |
| 7 | All UI elements updated with custom terminology | Field labels, dropdowns, reports use "Risk Control" |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-018

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-018 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

PHA Facilitator can enter cause/scenario even when column hidden in configuration

## Preconditions

1. What-If worksheet with Cause column hidden in configuration
2. Cause data needs to be added programmatically
3. Database maintains hidden field data

## Test Data

| Field | Value |
|-------|-------|
| Question | What if pump fails? |
| Cause (Hidden) | Mechanical wear over time |
| Consequence | Loss of flow |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | PHA Facilitator views worksheet | Cause column not visible in UI |
| 2 | Facilitator uses API or backend to add cause data | Cause field populated with "Mechanical wear over time" |
| 3 | System accepts cause data even though UI hidden | Data successfully stored in database |
| 4 | Parent-child relationship maintained | Question → Cause → Consequence structure intact |
| 5 | Facilitator can export study | Cause data appears in exported file despite hidden status |
| 6 | Facilitator shows column configuration | Cause column can be toggled visible to reveal stored data |
| 7 | Data integrity verified | Hidden column data remains consistent |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-019

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-019 |
| Priority | Low |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Study can be transitioned to Archived status and data preserved

## Preconditions

1. What-If study completed and approved
2. Archival option available
3. Data preservation required

## Test Data

| Field | Value |
|-------|-------|
| Study | Early Design Review - Pump System |
| Status Before Archive | Approved |
| Status After Archive | Archived |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Study Owner navigates to approved What-If study | Study displays with status "Approved" |
| 2 | Owner clicks "Archive Study" | Archive confirmation dialog appears |
| 3 | Owner confirms archival | Study status changes to "Archived" |
| 4 | Study no longer appears in active study list | Filtered out of default study list view |
| 5 | Study accessible through archive filter | Can view archived studies separately |
| 6 | All worksheet data preserved | Questions, consequences, recommendations intact |
| 7 | Archived study read-only | Cannot edit archived study without restoration |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-020

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-020 |
| Priority | Low |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

What-If subsection with questions can be copied across sections

## Preconditions

1. Two sections exist in What-If study
2. Subsection "Design Phase" in Section A with 3 questions
3. Copy/paste across sections enabled

## Test Data

| Field | Value |
|-------|-------|
| Source Subsection | Design Phase |
| Source Section | Section A (Design) |
| Destination Section | Section B (Implementation) |
| Questions | 3 |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | PHA Facilitator navigates to Section A | "Design Phase" subsection displays with 3 questions |
| 2 | Facilitator right-clicks subsection and selects "Copy" | Subsection copied to clipboard |
| 3 | Facilitator navigates to Section B | Section B displays |
| 4 | Facilitator right-clicks Section B and selects "Paste Subsection" | "Design Phase_copy" subsection added to Section B |
| 5 | System prevents naming conflict with "_copy" suffix | Naming validated; "_copy" appended |
| 6 | All 3 questions from Design Phase included in copy | Paste includes complete subsection with data |
| 7 | Original subsection in Section A unchanged | Section A still has original "Design Phase" with 3 questions |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-021

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-021 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

What-If study appears in study list with accurate count and filtering

## Preconditions

1. 10 HAZOP, 8 HAZID, 6 What-If studies exist
2. Study list interface accessible
3. Filtering/sorting functional

## Test Data

| Field | Value |
|-------|-------|
| Total Studies | 24 |
| What-If Count | 6 |
| Filter Type | Methodology |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Study Owner opens Study List page | All 24 studies display with count "Total: 24" |
| 2 | Owner views study list without filters | Studies sorted by creation date; All methodologies shown |
| 3 | Owner applies "What-If" methodology filter | List updates to show 6 What-If studies; Count shows "6" |
| 4 | Studies labeled with "What-If" designation | Clear methodology identification |
| 5 | Each What-If study shows owner and status | Additional columns display correctly |
| 6 | Owner can click individual What-If study | Study opens with What-If worksheet |
| 7 | Pagination works if study list exceeds page size | List navigable with page controls |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-022

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-022 |
| Priority | Low |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

PHA Facilitator can add remarks/notes to What-If worksheet entries

## Preconditions

1. What-If worksheet with entries
2. Remarks column visible or configurable
3. Note-taking functionality available

## Test Data

| Field | Value |
|-------|-------|
| Entry | Pump failure |
| Remarks | High priority - critical to safety |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | PHA Facilitator navigates to worksheet | Worksheet displays with columns including Remarks |
| 2 | Facilitator clicks Remarks field for pump failure entry | Field becomes editable |
| 3 | Facilitator enters "High priority - critical to safety" | Remarks text populated |
| 4 | Facilitator moves to next field | Remarks saved |
| 5 | Remarks persist in worksheet | Text remains after page refresh |
| 6 | Remarks included in exports | Remarks column appears in exported file |
| 7 | Remarks visible to all study participants | Multi-user access shows consistent remarks |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-023

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-023 |
| Priority | Low |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

What-If question uniqueness enforced within subsection only

## Preconditions

1. What-If study with 2 subsections
2. "What if pump fails?" in Subsection A
3. Same question can exist in Subsection B

## Test Data

| Field | Value |
|-------|-------|
| Subsection A | Design Phase |
| Subsection B | Implementation Phase |
| Question | What if pump fails? |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | PHA Facilitator adds "What if pump fails?" to Subsection A | Question successfully added |
| 2 | Facilitator attempts to add same question to Subsection A again | System rejects duplicate within same subsection |
| 3 | Facilitator receives message "Question already exists in this subsection" | Clear error message displayed |
| 4 | Facilitator can add "What if pump fails?" to Subsection B | System allows same question in different subsection |
| 5 | Both subsections contain identical question | Question uniqueness scoped to subsection level only |
| 6 | System enforces uniqueness at database level | Constraint prevents duplicate within subsection |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-024

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-024 |
| Priority | Low |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

What-If questions from asset library cannot be created in asset library directly

## Preconditions

1. Asset library interface accessible
2. What-If questions tab visible
3. Create functionality restricted

## Test Data

| Field | Value |
|-------|-------|
| Interface | Asset Library |
| Tab | What-If Questions |
| Expected Behavior | Create button disabled/missing |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Safety Manager navigates to Asset Library | Asset Library interface displays |
| 2 | Manager clicks "What-If Questions" tab | Tab shows existing What-If questions list |
| 3 | Manager searches for "Create New Question" button | Button not found in What-If Questions tab |
| 4 | Manager attempts to right-click to create question | Context menu does not include create option |
| 5 | System displays message: "Questions must be created in worksheet" | Guidance provided to user |
| 6 | Manager navigates to study worksheet | Worksheet displays "+ Create new question" option |
| 7 | Questions only creatable from worksheet workflow | Proper workflow enforced |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-025

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-025 |
| Priority | Low |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

What-If questions cannot be pulled directly into asset library from external source

## Preconditions

1. External question source exists (e.g., another system)
2. Asset library configuration available
3. Import restrictions enforced

## Test Data

| Field | Value |
|-------|-------|
| Import Source | External Question Database |
| Total Questions | 100 |
| Import Type | Bulk import requested |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Tenant Admin navigates to asset library settings | Library management interface displays |
| 2 | Admin looks for "Import External Questions" option | No import option visible for What-If questions |
| 3 | Admin attempts to use API for bulk question import | API rejects bulk import request with error |
| 4 | System displays message: "Questions must be created through worksheet workflow" | Policy enforced at API level |
| 5 | Admin can only add questions created in studies | Workflow maintains data lineage |
| 6 | Questions inherit study and creation context | Metadata captured for audit trail |

## Reviewer Comments

*To be completed during review.*

---

# ROLE-BASED & ACCESS CONTROL TEST CASES

---

# TC-FE739390-026

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-026 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Read-Only User can view What-If study but cannot create or edit content

## Preconditions

1. User has Read-Only role
2. What-If study exists with content
3. Study accessible to user

## Test Data

| Field | Value |
|-------|-------|
| User Role | Read-Only |
| Study | Early Design Review - Pump System |
| Expected Permissions | View only |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Read-Only User navigates to What-If study | Study displays in view mode |
| 2 | User can see worksheet with all questions and data | Content fully visible |
| 3 | User attempts to click edit button | Button disabled with message "Insufficient permissions" |
| 4 | User attempts to add new question | "Add Question" button disabled/grayed out |
| 5 | User attempts to edit existing consequence | Field is read-only; Cannot modify |
| 6 | User clicks download/export | Export functionality available for read-only users |
| 7 | User cannot delete worksheet rows | Delete option unavailable |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-027

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-027 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

PHA Facilitator can create/edit content but cannot approve studies

## Preconditions

1. User has PHA Facilitator role
2. What-If study exists in In Progress status
3. Study ready for editing

## Test Data

| Field | Value |
|-------|-------|
| User Role | PHA Facilitator |
| Study Status | In Progress |
| Permitted Actions | Create, Edit, Delete content |
| Denied Action | Approve study |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | PHA Facilitator navigates to What-If study | Study displays in edit mode |
| 2 | Facilitator can create new question | Question creation succeeds |
| 3 | Facilitator can edit consequence field | Edit succeeds and persists |
| 4 | Facilitator can delete worksheet row | Row deletion succeeds |
| 5 | Facilitator attempts to approve study | Approve button disabled with permission message |
| 6 | Facilitator can create recommendations | Recommendation creation succeeds |
| 7 | Facilitator can add to master asset library | New questions added to library |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-028

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-028 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Study Owner can view and manage study lifecycle but cannot create worksheet entries

## Preconditions

1. User has Study Owner role
2. What-If study assigned to owner
3. Lifecycle management available

## Test Data

| Field | Value |
|-------|-------|
| User Role | Study Owner |
| Permissions | Lifecycle, Configuration, Approval |
| Denied Permission | Worksheet content creation |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Study Owner navigates to study overview | Study management interface displays |
| 2 | Owner can transition study status | Lifecycle transitions available and functional |
| 3 | Owner can configure worksheet columns | Column configuration option available |
| 4 | Owner can approve completed study | Approve button available and functional |
| 5 | Owner attempts to add worksheet question | Button disabled with message "Facilitators add content" |
| 6 | Owner can create recommendation | Recommendation creation allowed for owners |
| 7 | Owner can manage team members | Team configuration available |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-029

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-029 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Reviewer cannot edit What-If study but can approve and comment

## Preconditions

1. User has Reviewer role
2. What-If study submitted for review
3. Study status: Completed

## Test Data

| Field | Value |
|-------|-------|
| User Role | Reviewer |
| Study Status | Completed |
| Reviewer Actions | Review, Comment, Approve |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Reviewer navigates to submitted What-If study | Study displays in review mode |
| 2 | Reviewer can view all worksheet content | Questions, consequences, safeguards visible |
| 3 | Reviewer attempts to edit question | Edit disabled with message "Content locked for review" |
| 4 | Reviewer attempts to add new row | Add button disabled during review phase |
| 5 | Reviewer can add comments on findings | Comment field available and functional |
| 6 | Reviewer can approve study | Approve button available |
| 7 | Approval transitions study status | Study status changed to Approved after review |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-030

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-030 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Safety Manager can access all What-If studies but cannot modify other teams' studies

## Preconditions

1. User has Safety Manager role
2. Multiple What-If studies from different teams
3. Cross-team visibility configured

## Test Data

| Field | Value |
|-------|-------|
| User Role | Safety Manager |
| Studies | Design Team study, Operations Team study |
| Permission | View all, Modify only own team |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Safety Manager navigates to study list | All What-If studies visible including other teams |
| 2 | Manager can view Design Team study | Study opens in read-only mode |
| 3 | Manager attempts to edit Design Team content | Edit disabled with message "Not team member" |
| 4 | Manager can view Operations Team study | Study opens in read-only mode |
| 5 | Manager can export any study for reporting | Export allowed for all studies |
| 6 | Manager can create comments on studies | Comments allowed for visibility/coordination |
| 7 | Manager cannot delete other teams' studies | Delete option unavailable for non-team studies |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-031

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-031 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Tenant Admin can manage What-If feature flag enabling/disabling methodology

## Preconditions

1. User has Tenant Admin role
2. Feature flag management interface accessible
3. What-If feature exists

## Test Data

| Field | Value |
|-------|-------|
| User Role | Tenant Admin |
| Feature | What-If Methodology |
| Initial State | Enabled |
| Action | Disable feature |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Tenant Admin navigates to feature flags | Feature flag management interface displays |
| 2 | Admin locates "What-If Methodology" flag | Flag shows current state "Enabled" |
| 3 | Admin clicks toggle to disable What-If | Flag changes to "Disabled" |
| 4 | Admin saves configuration | Change persisted to system |
| 5 | PHA Facilitator attempts study creation | "What-If" option no longer appears in methodology dropdown |
| 6 | Existing What-If studies remain accessible | Historical studies not deleted |
| 7 | Admin can re-enable flag | Feature becomes available again after toggle |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-032

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-032 |
| Priority | Low |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Operations Analyst can add to What-If sessions and provide input as subject matter expert

## Preconditions

1. User has Operations Analyst role
2. What-If study in active session
3. Session management functional

## Test Data

| Field | Value |
|-------|-------|
| User Role | Operations Analyst |
| Session | Design Review - Live brainstorm |
| Participants | 4 analysts |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Operations Analyst joins What-If study session | Session displays with other participants |
| 2 | Analyst can view current worksheet state | All entries visible in real-time |
| 3 | Analyst can add questions/consequences to worksheet | Contributions appear for all participants |
| 4 | Analyst can suggest safeguards | Safeguard suggestions functional |
| 5 | Analyst contributions recorded with analyst name | All entries attributed to contributor |
| 6 | Session tracks timeline of contributions | Analyst actions timestamped |
| 7 | Analyst can export session notes | Session documentation available |

## Reviewer Comments

*To be completed during review.*

---

# EDGE CASES & EXPLORATORY TEST CASES

---

# TC-FE739390-033

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-033 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System handles special characters in What-If question text without corruption

## Preconditions

1. Question with special characters: "What if 'pump' fails (scenarios)?"
2. Question creation or edit attempted
3. Character validation enabled

## Test Data

| Field | Value |
|-------|-------|
| Question Text | What if 'pump' fails (scenarios)? |
| Special Chars | Single quotes, parentheses, question mark |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | PHA Facilitator enters question with special characters | Question text accepted without error |
| 2 | Question saved to database | Storage handles special characters |
| 3 | Question retrieved from asset library | Text displays correctly with all special characters |
| 4 | Question exported to Excel | Special characters preserved in export |
| 5 | Question searchable with partial character match | Search finds question by "pump" or "scenarios" |
| 6 | UI displays question without corruption | Rendering shows proper formatting |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-034

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-034 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System rejects What-If question exceeding maximum character length

## Preconditions

1. Question character limit: 500 characters
2. Attempt to enter 600-character question
3. Validation enforced

## Test Data

| Field | Value |
|-------|-------|
| Max Length | 500 characters |
| Input Length | 600 characters |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | PHA Facilitator attempts to enter 600-character question | Input field displays character counter |
| 2 | Character counter shows "500/500 (Max)" after reaching limit | Additional characters rejected |
| 3 | Facilitator cannot add beyond 500 characters | Input freezes at limit |
| 4 | Facilitator receives validation message | "Question exceeds maximum 500 character limit" displayed |
| 5 | Facilitator trims question to 500 characters | Form submission enabled |
| 6 | Question with 500 characters accepted and saved | Boundary condition handled correctly |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-035

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-035 |
| Priority | Low |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System handles empty/null consequence field gracefully without crashing

## Preconditions

1. What-If worksheet with question added
2. Consequence field required
3. Null/empty validation tested

## Test Data

| Field | Value |
|-------|-------|
| Question | What if pump fails? |
| Consequence | (empty) |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | PHA Facilitator adds question without consequence | Attempts to move to next field |
| 2 | System validates required consequence field | Validation error displayed: "Consequence required" |
| 3 | User receives clear error message | Message instructs user to fill consequence |
| 4 | Application remains responsive | No system crash or hang |
| 5 | User can fill consequence field | Error resolved after providing consequence |
| 6 | Row saved successfully with data | Save succeeds after correction |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-036

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-036 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System handles concurrent edits by multiple facilitators without data loss

## Preconditions

1. What-If study open in session
2. Two facilitators editing simultaneously
3. Conflict resolution configured

## Test Data

| Field | Value |
|-------|-------|
| Facilitator A | Adds question in row 1 |
| Facilitator B | Adds consequence in row 2 simultaneously |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Facilitator A adds "What if pump overheats?" to row 1 | Entry appears in A's view |
| 2 | Facilitator B adds "Loss of efficiency" consequence to row 2 | Entry appears in B's view |
| 3 | System synchronizes concurrent changes | Both entries reflected in real-time for both users |
| 4 | Final worksheet contains both entries | No data loss from concurrent edits |
| 5 | Sequence/ordering maintained correctly | Rows remain in expected order |
| 6 | Session timestamp updated for both changes | Audit trail records both actions |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-037

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-037 |
| Priority | Low |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System recovers gracefully from interrupted worksheet save operation

## Preconditions

1. PHA Facilitator editing worksheet
2. Network interruption occurs during save
3. Recovery mechanism configured

## Test Data

| Field | Value |
|-------|-------|
| Edited Entry | Question: "What if valve sticks?" |
| Interruption | Network timeout during save |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Facilitator edits consequence field | Changes pending save |
| 2 | Network interruption occurs | Save request times out |
| 3 | System detects save failure | Error indication shown to user |
| 4 | User can retry save operation | Retry button available |
| 5 | Upon retry, changes successfully persisted | Data saved after successful retry |
| 6 | No duplicate entries created | Idempotent save prevents duplication |
| 7 | User notified of successful save | Confirmation message displayed |

## Reviewer Comments

*To be completed during review.*

---

# INTEGRATION TEST CASES

---

# TC-FE739390-038

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-038 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

What-If recommendations integrated with Recommendation List and appear with source designation

## Preconditions

1. What-If study with recommendations created
2. Recommendation List component functional
3. Source tracking enabled

## Test Data

| Field | Value |
|-------|-------|
| Study | Early Design Review - Pump System |
| Recommendation | Install backup pump |
| Source | What-If |
| Priority | High |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | PHA Facilitator creates recommendation in What-If study | Recommendation "Install backup pump" created |
| 2 | Facilitator navigates to Recommendation List | List displays all recommendations |
| 3 | Recommendation appears with source "What-If" | Source clearly identified in list |
| 4 | Recommendation shows link to originating What-If study | Study context accessible from recommendation |
| 5 | Recommendation can be converted to action item | Action item creation workflow available |
| 6 | Action item includes reference to What-If recommendation | Traceability maintained |
| 7 | Recommendation status updates propagate correctly | Status changes visible across all views |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-039

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-039 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

What-If study integrates with session management tracking contributions and timestamps

## Preconditions

1. What-If study in active session
2. Session management enabled
3. Multiple participants in session

## Test Data

| Field | Value |
|-------|-------|
| Session | Design Review Live |
| Participants | 3 |
| Duration | 1 hour |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Session started with 3 facilitators | Session created and tracking initiated |
| 2 | Facilitator A adds question at 14:00 | Timestamp recorded: 14:00 |
| 3 | Facilitator B adds consequence at 14:15 | Timestamp recorded: 14:15 |
| 4 | Facilitator C adds safeguard at 14:45 | Timestamp recorded: 14:45 |
| 5 | Session manager views session transcript | All contributions listed with timestamps and contributors |
| 6 | Session audio/video recording (if enabled) synchronized with entries | Entries linked to recording timeline |
| 7 | Session summary generated with metrics | Count of entries by facilitator, timeline of discussion |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-040

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-040 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

What-If study versioning captures complete snapshot with all worksheet data

## Preconditions

1. What-If study with populated worksheet
2. Version creation triggered
3. Snapshot persistence configured

## Test Data

| Field | Value |
|-------|-------|
| Version | 1.0 |
| Entries | 5 questions with consequences |
| Reason | Initial analysis complete |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Study Owner initiates version snapshot | Version dialog appears |
| 2 | Owner enters version "1.0" and reason | Version metadata captured |
| 3 | System creates snapshot of all worksheet data | All 5 entries captured |
| 4 | Snapshot includes questions, consequences, safeguards | Complete data set preserved |
| 5 | Version accessible from version history | Version 1.0 listed with timestamp |
| 6 | Can view version 1.0 data at any time | Historical snapshot accessible |
| 7 | Can compare versions to see changes | Version comparison tool shows differences |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-041

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-041 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

What-If study asset library questions synchronized across all tenants/studies

## Preconditions

1. Question "What if pump fails?" created in Study A
2. Study B in different tenant
3. Asset library scoped properly

## Test Data

| Field | Value |
|-------|-------|
| Study A Tenant | Tenant A |
| Study B Tenant | Tenant B |
| Question | What if pump fails? |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | PHA Facilitator in Study A creates question | Question added to Tenant A asset library |
| 2 | Question immediately available in Study A | Question searchable and selectable |
| 3 | Facilitator in Study B (different tenant) searches for same question | Tenant B asset library shows only Tenant B questions |
| 4 | Question from Study A NOT visible in Study B | Tenant isolation maintained |
| 5 | Facilitator in Study B creates same question text independently | Question created for Tenant B |
| 6 | Each tenant has independent asset library | No cross-tenant contamination |
| 7 | Question usage tracked independently per tenant | Usage counts isolated by tenant |

## Reviewer Comments

*To be completed during review.*

---

# PERFORMANCE & CONCURRENCY TEST CASES

---

# TC-FE739390-042

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-042 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

What-If worksheet supports 1000+ entries without performance degradation

## Preconditions

1. What-If study with 1000 worksheet entries
2. Performance monitoring enabled
3. Response time targets: Add/Edit < 1s

## Test Data

| Field | Value |
|-------|-------|
| Entries | 1000 |
| Subsections | 10 |
| SLA Target | < 1s per operation |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Load test initiates 1000-entry worksheet | Worksheet displays all entries |
| 2 | Test adds new question to worksheet | Add operation completes in 850ms |
| 3 | Test edits existing consequence in row 500 | Edit operation completes in 920ms |
| 4 | Test scrolls through entire worksheet | UI remains responsive during scroll |
| 5 | Test searches for specific question | Search returns results in 400ms |
| 6 | Test exports 1000-entry worksheet | Export completes in 3s |
| 7 | All operations remain within SLA targets | Performance meets acceptable thresholds |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-043

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-043 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

What-If question search responds within 500ms with 10,000+ questions in asset library

## Preconditions

1. Asset library contains 10,000+ What-If questions
2. Search functionality indexed
3. Performance targets: < 500ms response

## Test Data

| Field | Value |
|-------|-------|
| Total Questions | 10000 |
| Search Term | "pump" |
| Matching Results | 150 |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Load test initiates question search | Search started |
| 2 | Test searches for "pump" | Search returns 150 matching results |
| 3 | Response time measured | Search completes in 380ms |
| 4 | Results displayed in dropdown | Results appear promptly for user selection |
| 5 | Test refines search to "pump failure" | Narrowed results return 45 matches in 250ms |
| 6 | All searches meet < 500ms SLA | Performance targets achieved |
| 7 | Results accurate and relevant | Ranking and relevance appropriate |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-044

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-044 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

What-If session supports 50+ concurrent users without latency impact

## Preconditions

1. What-If study in active session
2. 50 facilitators connected
3. Real-time synchronization enabled

## Test Data

| Field | Value |
|-------|-------|
| Concurrent Users | 50 |
| Worksheet Operations | 100 ops/min total |
| Latency SLA | < 1s per operation |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Load test simulates 50 concurrent users | All users connected to session |
| 2 | Each user performs worksheet operations | 100 operations distributed across users |
| 3 | Operations include adds, edits, deletes | Mix of different operation types |
| 4 | All users receive real-time updates | Changes visible to all participants |
| 5 | Latency monitored for each operation | No operation exceeds 1000ms |
| 6 | Average latency calculated | Mean latency: 450ms; Acceptable |
| 7 | Session remains stable throughout test | No dropped connections; No data corruption |

## Reviewer Comments

*To be completed during review.*

---

# SECURITY & ACCESSIBILITY TEST CASES

---

# TC-FE739390-045

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-045 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

What-If study data protected from SQL injection attacks through parameterized queries

## Preconditions

1. What-If study created with question
2. SQL injection test vectors available
3. Query parameterization implemented

## Test Data

| Field | Value |
|-------|-------|
| Malicious Input | '; DROP TABLE worksheets; -- |
| Query Type | SELECT questions WHERE text = ? |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Test sends SQL injection payload as question search | Payload: "'; DROP TABLE worksheets; --" |
| 2 | System uses parameterized query | SQL template with ? placeholder |
| 3 | Payload treated as literal data | Database searches for exact string |
| 4 | Query returns no results (expected) | Injection payload treated as data value |
| 5 | Worksheets table remains intact | No structural modification executed |
| 6 | System logs security event | Suspicious input logged |
| 7 | No SQL injection vulnerability exploited | System secure against this attack vector |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-046

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-046 |
| Priority | High |
| Automatable | No |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |
| Reason | Requires manual accessibility tool testing and screen reader verification |

## Title

What-If worksheet meets WCAG 2.1 AA accessibility standards

## Preconditions

1. What-If worksheet deployed
2. Accessibility testing tool available (axe, WAVE)
3. Screen reader available (NVDA, JAWS)

## Test Data

| Field | Value |
|-------|-------|
| Standard | WCAG 2.1 AA |
| Test Tool | axe DevTools |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Run automated accessibility scan | Scan of What-If worksheet interface |
| 2 | Verify color contrast ratios | All text contrast ≥ 4.5:1 (AA standard) |
| 3 | Verify form field labels | All inputs have associated labels |
| 4 | Test keyboard-only navigation | Full functionality accessible via Tab/Enter/Arrows |
| 5 | Use screen reader to navigate | Screen reader announces all elements clearly |
| 6 | Verify ARIA labels on buttons | Buttons have descriptive aria-labels |
| 7 | No accessibility violations detected | WCAG 2.1 AA compliance confirmed |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-047

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-047 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

What-If study data encrypted in transit using HTTPS/TLS 1.2+

## Preconditions

1. API endpoints configured with HTTPS
2. TLS 1.2 or higher enforced
3. SSL/TLS certificate valid

## Test Data

| Field | Value |
|-------|-------|
| Protocol | HTTPS |
| Min TLS Version | 1.2 |
| Cipher Suite | AES-256-GCM |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Client initiates connection to What-If API | HTTPS connection attempted |
| 2 | TLS handshake initiated | TLS 1.2 or higher negotiated |
| 3 | Strong cipher suite selected | AES-256-GCM or equivalent agreed |
| 4 | Certificate validation succeeds | Valid certificate presented and verified |
| 5 | Encrypted tunnel established | Data transmission encrypted |
| 6 | Worksheet data sent over encrypted connection | Payload never exposed in plaintext |
| 7 | Downgrade attack test: Attempt TLS 1.0 | Server rejects downgrade; Connection fails |

## Reviewer Comments

*To be completed during review.*

---

# END-TO-END TEST CASES

---

# TC-FE739390-048

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-048 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

PHA Facilitator can complete entire What-If study from creation through approval and archival

## Preconditions

1. No pre-existing What-If study
2. Facilitator authenticated with required permissions
3. All systems operational

## Test Data

| Field | Value |
|-------|-------|
| Study Name | Q2 Design Review - Cooling System |
| Team Lead | facilitator@company.com |
| Entries | 8 What-If questions |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | PHA Facilitator creates new What-If study | Study created with status "Planning" |
| 2 | Facilitator adds 8 What-If questions to worksheet | Questions include causes and consequences |
| 3 | Facilitator transitions to "In Progress" | Status updated; Work begins |
| 4 | Facilitator reviews with team in session | Multiple facilitators contribute |
| 5 | Study completed with all recommendations linked | Recommendations created and stored |
| 6 | Study Owner transitions to "Completed" | Status updated for review |
| 7 | Reviewer approves study | Study status changes to "Approved" |
| 8 | Study Owner archives study | Status changes to "Archived"; Study preserved |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-049

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-049 |
| Priority | High |
| Automatable | No |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |
| Reason | Requires manual verification of multi-role workflow and approval coordination |

## Title

Multiple teams conduct parallel What-If studies with independent workflows and shared asset library

## Preconditions

1. Two separate teams: Design and Operations
2. Both have What-If studies in progress
3. Asset library shared across tenants

## Test Data

| Field | Value |
|-------|-------|
| Team 1 | Design Team |
| Study 1 | Design Review - Pump |
| Team 2 | Operations Team |
| Study 2 | Production Safety - Pump |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Design Team creates What-If study | Study created with Design methodology |
| 2 | Operations Team creates parallel study | Study created independently |
| 3 | Design Team creates question "What if pump overheats?" | Question added to Design asset library |
| 4 | Design facilitator adds consequences and safeguards | Study progresses independently |
| 5 | Operations Team creates similar question independently | Operations asset library separate |
| 6 | Design Team approves study; Operations continues | Workflows progress independently |
| 7 | Design recommendations created; Operations recommendations separate | Recommendations scoped by team |
| 8 | Both studies completed and archived successfully | Independent workflows coexist |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-050

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-050 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

What-If recommendations flow through complete action plan integration from creation to closure

## Preconditions

1. What-If study with recommendations
2. Action plan workflow enabled
3. Recommendation-to-action conversion available

## Test Data

| Field | Value |
|-------|-------|
| Recommendation | Install backup pump system |
| Priority | High |
| Owner | Operations Manager |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Facilitator creates recommendation in What-If study | Recommendation saved with source "What-If" |
| 2 | Study Owner reviews and approves study | Study approved; Recommendations ready for action |
| 3 | Operations Manager converts recommendation to action item | Action item created from recommendation |
| 4 | Action item appears in action plan | Plan includes: Install backup pump; Owner: Operations Mgr |
| 5 | Operations Manager tracks action completion | Status updated through action item workflow |
| 6 | Action item closed upon completion | Status changes to "Closed" |
| 7 | Completed action linked back to What-If recommendation | Traceability maintained end-to-end |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-051

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-051 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

What-If study can be exported to Excel with all data and imported back

## Preconditions

1. What-If study with complete data
2. Export/import functionality operational
3. Data round-trip integrity required

## Test Data

| Field | Value |
|-------|-------|
| Entries | 5 |
| Export Format | Excel |
| Hidden Columns | Cause, Inherent Risk |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Study Owner exports What-If study to Excel | Excel file generated with all data |
| 2 | Owner opens exported file | All visible columns display correctly |
| 3 | Hidden columns included in export | Cause and Inherent Risk data present |
| 4 | Owner modifies some data in Excel | Changes made to consequence values |
| 5 | Owner re-imports Excel file into new study | Import process initiates |
| 6 | System validates and imports Excel data | New study created with imported data |
| 7 | Imported study matches original (with modifications) | Data integrity maintained through export/import cycle |

## Reviewer Comments

*To be completed during review.*

---

## Summary Statistics

| Category | Test Cases | Range |
|----------|------------|-------|
| Functional Tests | 25 | TC-001 to TC-025 |
| Role-Based & Access Control Tests | 7 | TC-026 to TC-032 |
| Edge Cases & Exploratory Tests | 5 | TC-033 to TC-037 |
| Integration Tests | 4 | TC-038 to TC-041 |
| Performance & Concurrency Tests | 3 | TC-042 to TC-044 |
| Security & Accessibility Tests | 3 | TC-045 to TC-047 |
| End-to-End Tests | 4 | TC-048 to TC-051 |
| **TOTAL TEST CASES** | **51** | TC-001 to TC-051 |

**Test Distribution Breakdown:**

| Category | Count | Percentage |
|----------|-------|-----------|
| Functional | 25 | 49.0% |
| Role-Based | 7 | 13.7% |
| Edge Cases | 5 | 9.8% |
| Integration | 4 | 7.8% |
| Performance | 3 | 5.9% |
| Security/Accessibility | 3 | 5.9% |
| End-to-End | 4 | 7.8% |

**Automation Status Summary:**

| Status | Count | Percentage |
|--------|-------|-----------|
| Automatable (Yes) | 46 | 90.2% |
| Manual (No) | 5 | 9.8% |

---

**Document Status:** DRAFT - Ready for QA Lead Review  
**Created:** 6/1/2026  
**Last Updated:** 6/1/2026
