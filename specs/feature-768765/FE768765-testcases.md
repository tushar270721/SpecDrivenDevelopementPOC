# Test Cases: FE#768765 - [PHA PSM] Add Safeguard instances to the study worksheet 5

**Feature:** [PHA PSM] Add Safeguard instances to the study worksheet 5  
**Feature ID:** FE#768765  
**Total Test Cases:** 45  
**Created:** 6/2/2026  
**Status:** DRAFT - Ready for QA Lead Review

---

# FUNCTIONAL TEST CASES

---

# TC-FE768765-001

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-001 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

PHA Facilitator can create new safeguard by double-clicking worksheet cell and selecting add option

## Preconditions

1. User is authenticated as PHA User/Facilitator
2. Study worksheet is open with safeguard field visible
3. No existing safeguard with the same name exists in the study
4. Safeguard creation is enabled for the methodology

## Test Data

| Field | Value |
|-------|-------|
| Safeguard Name | Relief Valve Assembly |
| Methodology | HAZID |
| Study Name | Process Safety Study 001 |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | User navigates to study worksheet | Worksheet displays with safeguard cells visible |
| 2 | User double-clicks on an empty safeguard cell | Cell enters edit mode; cursor is active in the field |
| 3 | User types "Relief Valve Assembly" | Text appears in the cell as user types |
| 4 | User sees search results or "Add as new" action | Dropdown menu shows matching safeguards or "Add as new" option |
| 5 | User clicks "Add as new" or clicks away after typing | Safeguard creation slide-out panel opens on the right |
| 6 | Safeguard Name field displays "Relief Valve Assembly" | Name is prefilled from worksheet text entry |
| 7 | All other fields are empty and ready for input | Form displays empty optional fields with class selector visible |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768765-002

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-002 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

PHA Facilitator can select Safeguard Class and see auto-populated metadata fields

## Preconditions

1. Safeguard creation panel is open
2. Safeguard Name is prefilled: "Relief Valve Assembly"
3. Safeguard Classes are available in the master list (minimum 3 classes)
4. Selected methodology is HAZID

## Test Data

| Field | Value |
|-------|-------|
| Class Name | Standard HAZOP Safeguard |
| Category Default | Prevention |
| Type Default | Mechanical |
| Methodology | HAZID |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | User clicks on Safeguard Class dropdown in creation panel | Dropdown opens showing available classes for the methodology |
| 2 | User selects "Standard HAZOP Safeguard" from the list | Class is selected; dropdown closes |
| 3 | System retrieves class template with defined properties | Auto-population begins; loading indicator appears briefly |
| 4 | Category field auto-populates with "Prevention" | Field displays the default value from class template |
| 5 | Type field auto-populates with "Mechanical" | Field displays the default value from class template |
| 6 | All other enabled properties are populated from class | Only properties enabled for HAZID methodology are visible |
| 7 | General properties and Scenario-related properties are clearly grouped | Fields are visually grouped by section in the form |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768765-003

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-003 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

PHA Facilitator can override class template values before saving safeguard

## Preconditions

1. Safeguard Class is selected with auto-populated values
2. All properties are visible and editable
3. Safeguard Name is "Relief Valve Assembly"

## Test Data

| Field | Value |
|-------|-------|
| Original Category | Prevention |
| Modified Category | Mitigation |
| Original Type | Mechanical |
| Modified Type | Administrative |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | User views auto-populated Category field showing "Prevention" | Field displays class template default |
| 2 | User clicks on Category field and changes value to "Mitigation" | Category field now shows "Mitigation" |
| 3 | User clicks on Type field and changes value to "Administrative" | Type field now shows "Administrative" |
| 4 | User clicks Save button in the slide-out panel | Safeguard creation request is submitted |
| 5 | System creates safeguard with user-modified values | Safeguard is created with Category="Mitigation" and Type="Administrative" |
| 6 | Original class template remains unchanged in master list | Class template still has Category="Prevention" and Type="Mechanical" |
| 7 | Worksheet cell displays the newly created safeguard name | Cell shows "Relief Valve Assembly" |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768765-004

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-004 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

PHA Facilitator can change selected class mid-creation and see fields reset to new template defaults

## Preconditions

1. Safeguard creation panel is open
2. Class A is selected with some properties populated
3. User has manually edited some fields

## Test Data

| Field | Value |
|-------|-------|
| Class A | Standard HAZOP Safeguard |
| Class B | Advanced LOPA Safeguard |
| Original Category | Prevention |
| New Category | Detection |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | User views form with Class A selected (Category="Prevention") | Class A template values are displayed |
| 2 | User manually changes Category field to "Mitigation" | Field displays "Mitigation" (user override) |
| 3 | User opens Safeguard Class dropdown and selects Class B | Dropdown closes; new class selection is registered |
| 4 | System detects class change and initiates field refresh | Brief loading indicator appears; confirmation not shown (auto-override) |
| 5 | All template-driven fields are reset to Class B defaults (Category="Detection") | Category field now shows "Detection" (Class B default) |
| 6 | User-edited values are replaced with Class B defaults | All fields reflect new template; user edits are lost |
| 7 | Scenario-related and General properties group according to Class B structure | Sections reorganize if Class B has different structure |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768765-005

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-005 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

PHA Facilitator can save safeguard and see it immediately available in worksheet and asset library

## Preconditions

1. Safeguard creation panel is open with all required fields filled
2. Safeguard Name is "Relief Valve Assembly" (mandatory, filled)
3. Optional properties are populated

## Test Data

| Field | Value |
|-------|-------|
| Safeguard Name | Relief Valve Assembly |
| Category | Prevention |
| Priority | High |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | User reviews safeguard details in creation panel | All data is visible and correct |
| 2 | User clicks Save button in the slide-out panel | Save request is submitted to backend |
| 3 | System validates safeguard data (Name required, uniqueness check) | Validation passes; safeguard record is created |
| 4 | Safeguard is immediately created in study asset library | Asset library is updated; new safeguard appears in search results |
| 5 | Worksheet cell is populated with the newly created safeguard | Cell displays "Relief Valve Assembly" |
| 6 | Creation panel closes automatically | User returns to worksheet view |
| 7 | Safeguard is available for reuse in other worksheet locations | Subsequent safeguard searches show the newly created safeguard |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768765-006

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-006 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

PHA Facilitator can cancel safeguard creation without saving and worksheet cell text is cleared

## Preconditions

1. Safeguard creation panel is open
2. This is a new safeguard (no prior record exists in the database)
3. User has entered some data in the form

## Test Data

| Field | Value |
|-------|-------|
| Safeguard Name | Relief Valve Assembly |
| Category | Prevention |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | User has entered safeguard details but has not yet clicked Save | Form contains unsaved data |
| 2 | User clicks Cancel button in the slide-out panel | Cancel request is processed |
| 3 | System confirms cancellation (no confirmation dialog shown for empty name case) | Cancellation proceeds |
| 4 | All unsaved changes are discarded | Form data is not persisted to database |
| 5 | No safeguard record is created in the study asset library | Asset library remains unchanged |
| 6 | Creation panel closes | User returns to worksheet view |
| 7 | Worksheet safeguard cell text is cleared | Cell is now empty; user can type again if needed |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768765-007

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-007 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

PHA Facilitator can close safeguard panel using Esc key shortcut

## Preconditions

1. Safeguard creation panel is open
2. Safeguard Name has been entered

## Test Data

| Field | Value |
|-------|-------|
| Safeguard Name | Relief Valve Assembly |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | User has the safeguard creation panel open and focused | Panel is visible and ready for keyboard input |
| 2 | User presses Esc key | Keyboard event is captured |
| 3 | System interprets Esc as close command | Close action is triggered |
| 4 | If unsaved changes exist, system shows confirmation dialog | Dialog shows "Discard changes?" message |
| 5 | User confirms discard by clicking Yes or pressing Enter | Confirmation is accepted |
| 6 | Safeguard panel closes | User is returned to worksheet view |
| 7 | No safeguard record is created | Asset library remains unchanged |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768765-008

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-008 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

PHA Facilitator can reuse existing safeguard in different worksheet location with scenario-specific edits

## Preconditions

1. Safeguard already exists in the study asset library: "Relief Valve Assembly"
2. Worksheet has multiple safeguard fields across different scenarios (Scenario A, Scenario B)
3. User is on the same worksheet
4. Safeguard is already placed in Scenario A location

## Test Data

| Field | Value |
|-------|-------|
| Existing Safeguard | Relief Valve Assembly |
| Scenario A Location | Cell A1 |
| Scenario B Location | Cell A2 (different scenario) |
| Scenario B IPL Value | Yes (scenario-specific) |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | User double-clicks safeguard cell in Scenario B | Cell enters edit mode |
| 2 | User types "Relief Valve Assembly" to search | Search results show existing safeguard |
| 3 | User selects the existing safeguard from search results | Safeguard creation panel opens in "reuse" mode |
| 4 | General properties (Category, Type) are displayed but locked/read-only | User cannot modify general properties |
| 5 | Scenario-specific properties (e.g., IPL) are editable | IPL field is highlighted and editable |
| 6 | User modifies IPL value to "Yes" for this scenario | Scenario property field now shows "Yes" |
| 7 | User clicks Save | Safeguard is linked to Scenario B with scenario-specific IPL value |
| 8 | Original safeguard in Scenario A remains unchanged | Scenario A still has original IPL value |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768765-009

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-009 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

PHA Facilitator can copy and paste safeguard with properties across worksheet scenarios

## Preconditions

1. Safeguard exists in Scenario A with populated properties
2. General properties: Category="Prevention", Type="Mechanical"
3. Scenario A IPL value: "Yes"
4. Target location is in Scenario B on the same worksheet

## Test Data

| Field | Value |
|-------|-------|
| Source Scenario | Scenario A |
| Target Scenario | Scenario B |
| General Properties | Category, Type |
| Scenario Properties | IPL |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | User right-clicks safeguard cell in Scenario A | Context menu appears with Copy option |
| 2 | User clicks Copy | Safeguard cell data is copied to clipboard |
| 3 | User right-clicks target cell in Scenario B | Context menu appears with Paste option |
| 4 | User clicks Paste | Safeguard creation panel opens with copy-paste data |
| 5 | Both general properties and Scenario A properties are prefilled | Category="Prevention", Type="Mechanical", IPL="Yes" are all visible |
| 6 | Only scenario-specific properties are editable (general properties grayed out) | User can modify IPL for Scenario B but not Category/Type |
| 7 | User modifies IPL to "No" and clicks Confirm | Safeguard is pasted in Scenario B with general props from A and modified scenario props |
| 8 | Safeguard is linked to Scenario B with mixed properties (general from A, scenario modified) | Result shows Category="Prevention", Type="Mechanical", IPL="No" |

## Reviewer Comments

*To be completed during review.*

---

# ROLE-BASED & ACCESS CONTROL TEST CASES

---

# TC-FE768765-010

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-010 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Admin System Administrator can access Methodology Configuration screen from navigation panel

## Preconditions

1. User is authenticated as Admin (System Administrator role)
2. Navigation panel is visible
3. Methodology Configuration feature is deployed and enabled

## Test Data

| Field | Value |
|-------|-------|
| User Role | Admin System Administrator |
| Navigation Menu | Main navigation |
| Target Item | Methodology Configuration |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | Admin user is logged in and viewing main application screen | Navigation panel is visible on left side |
| 2 | Admin scans navigation menu for "Methodology Configuration" item | Item is visible in the navigation panel |
| 3 | Admin clicks on "Methodology Configuration" | Navigation item is selected |
| 4 | System routes to Methodology Configuration screen | New screen loads with configuration UI |
| 5 | Tabs are displayed: HAZOP (&LOPA), HAZID | Tab interface is visible with all methodology tabs |
| 6 | Each tab contains subsections: Worksheet configuration, Data properties | Subsections are clearly labeled and organized |
| 7 | Existing "Worksheet layout configuration" content appears under Worksheet configuration subsection | Content has been moved to correct location |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768765-011

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-011 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Read-Only User cannot access Methodology Configuration screen from navigation panel

## Preconditions

1. User is authenticated as Non-Admin (Read-Only role)
2. Navigation panel is visible
3. Methodology Configuration feature is deployed

## Test Data

| Field | Value |
|-------|-------|
| User Role | Read-Only User |
| Expected Result | No access |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | Non-admin user is logged in and viewing main application | Navigation panel is displayed |
| 2 | Non-admin user searches for "Methodology Configuration" in navigation | Item is not visible in the navigation menu for this user |
| 3 | Non-admin user attempts direct URL access (e.g., /admin/methodology-config) | System intercepts the request |
| 4 | System checks user permissions and finds user is not Admin | Permission check fails |
| 5 | System returns 403 Forbidden error | User sees "Access Denied" or 403 error page |
| 6 | Error message displays: "You do not have permission to access this feature" | User is informed of access restriction |
| 7 | User is not allowed to view or modify any methodology configuration settings | No configuration data is exposed |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768765-012

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-012 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Admin System Administrator can enable and disable safeguard properties per methodology

## Preconditions

1. Admin is logged in and on Methodology Configuration screen
2. HAZID methodology tab is open
3. Data properties subsection is visible
4. Available properties: Category, Hierarchy of Control, IPL, PFD value, Type, SIL rating

## Test Data

| Field | Value |
|-------|-------|
| Methodology | HAZID |
| Property 1 | IPL |
| Property 2 | PFD value |
| Action | Toggle enable/disable |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | Admin views Data properties section for HAZID methodology | List of properties displays with toggle switches (Enabled/Disabled) |
| 2 | Admin sees "IPL" property currently set to Enabled (toggle is ON) | IPL toggle shows enabled state |
| 3 | Admin clicks IPL toggle to disable it | Toggle switches to OFF state |
| 4 | IPL property status changes to Disabled | Toggle state reflects disabled status visually (grayed out, text changed) |
| 5 | Admin sees "PFD value" property currently set to Enabled | PFD value toggle shows enabled state |
| 6 | Admin clicks PFD value toggle to disable it | Toggle switches to OFF state |
| 7 | PFD value property status changes to Disabled | Toggle state reflects disabled status visually |
| 8 | Admin can see all toggled states clearly on the screen (enabled vs. disabled states are visually distinct) | UI clearly indicates which properties are enabled/disabled |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768765-013

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-013 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Admin System Administrator can save methodology configuration changes with confirmation dialog

## Preconditions

1. Admin is on Methodology Configuration screen
2. Admin has made property enable/disable changes (e.g., disabled IPL and PFD value for HAZID)
3. Configuration screen shows unsaved changes indicator

## Test Data

| Field | Value |
|-------|-------|
| Changes Made | IPL disabled, PFD value disabled |
| Methodology | HAZID |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | Admin reviews the changes made to properties | IPL and PFD value toggles show disabled state |
| 2 | Admin clicks Save button at the bottom of the configuration screen | Save action is triggered |
| 3 | System displays confirmation dialog with summary of changes | Dialog shows: "Confirm changes: IPL (Enabled → Disabled), PFD value (Enabled → Disabled)" |
| 4 | Dialog includes Cancel and Confirm buttons | User can choose to proceed or cancel |
| 5 | Admin clicks Confirm button in the dialog | Changes are accepted |
| 6 | System applies changes across the application | Configuration is saved to database |
| 7 | All open studies refresh to reflect new property visibility | Worksheets and asset libraries update immediately |
| 8 | Success message appears: "Configuration saved successfully" | Admin receives confirmation of save |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768765-014

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-014 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Admin System Administrator can cancel configuration changes before saving

## Preconditions

1. Admin is on Methodology Configuration screen
2. Admin has made property enable/disable changes
3. Admin has not yet clicked Save

## Test Data

| Field | Value |
|-------|-------|
| Original State | IPL enabled, PFD value enabled |
| Modified State | IPL disabled, PFD value disabled |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | Admin has toggled IPL and PFD value to disabled state | Toggles show disabled state on screen |
| 2 | Admin clicks Cancel button instead of Save | Cancel action is triggered |
| 3 | System shows confirmation: "Discard unsaved changes?" | Dialog appears asking for confirmation |
| 4 | Admin clicks "Yes, discard" to confirm cancellation | Cancellation is confirmed |
| 5 | All changes are reverted to original state | IPL and PFD value toggles return to enabled state |
| 6 | Configuration screen reflects original settings | UI shows original property states |
| 7 | No changes are saved to the database | Database configuration remains unchanged |

## Reviewer Comments

*To be completed during review.*

---

# EDGE CASE & EXPLORATORY TEST CASES

---

# TC-FE768765-015

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-015 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

PHA Facilitator cannot save safeguard with empty name field

## Preconditions

1. Safeguard creation panel is open
2. Safeguard Name field is empty (no text entered)
3. Optional properties may or may not be populated

## Test Data

| Field | Value |
|-------|-------|
| Safeguard Name | (empty) |
| Category | Prevention |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | User leaves Safeguard Name field empty | Name field remains blank |
| 2 | User populates optional fields (Category, Type, etc.) | Optional fields contain values |
| 3 | User clicks Save button | Save action is attempted |
| 4 | System performs validation check on required fields | Validation identifies missing name |
| 5 | Save is prevented; validation error is shown | Error message: "Safeguard Name is required" appears near the Name field |
| 6 | Save button remains enabled for user to correct | User can click in Name field and enter text |
| 7 | No safeguard record is created | Asset library remains unchanged |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768765-016

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-016 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System prevents saving safeguard with duplicate name within the same study

## Preconditions

1. Study already has safeguard named "Relief Valve Assembly"
2. Safeguard creation panel is open
3. Safeguard Name field is ready for input

## Test Data

| Field | Value |
|-------|-------|
| Existing Safeguard Name | Relief Valve Assembly |
| New Safeguard Name | Relief Valve Assembly |
| Study Name | Process Safety Study 001 |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | User enters safeguard name: "Relief Valve Assembly" | Name field displays "Relief Valve Assembly" |
| 2 | User populates optional properties as desired | Optional fields contain values |
| 3 | User clicks Save button | Save action is submitted |
| 4 | System queries database for existing safeguards with same name in this study | Uniqueness check is performed |
| 5 | System finds existing safeguard with same name | Database match is found |
| 6 | System rejects the save and displays error | Error message: "Safeguard with this name already exists in this study" |
| 7 | User can modify the name and retry | Name field remains editable; user can change name |
| 8 | No duplicate safeguard record is created | Original safeguard remains the only one with that name |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768765-017

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-017 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System accepts safeguard name with special characters up to 3000 character limit

## Preconditions

1. Safeguard creation panel is open
2. Safeguard Name field is ready for input
3. Character counter is enabled

## Test Data

| Field | Value |
|-------|-------|
| Safeguard Name | Relief-Valve #2 (Main) / Line-A @ 100 PSI & Temperature |
| Character Count | 65 characters |
| Maximum Allowed | 3000 characters |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | User enters safeguard name with special characters: "Relief-Valve #2 (Main) / Line-A @ 100 PSI & Temperature" | Text appears in Name field with all special characters intact |
| 2 | Character counter displays "65/3000" | Counter shows current position within limit |
| 3 | User views the entered text to verify special characters are accepted | All characters display correctly: hyphens, #, parentheses, /, @, &, spaces |
| 4 | User clicks Save button | Save action is submitted |
| 5 | System validates and accepts the special characters | Validation passes |
| 6 | Safeguard is created successfully with special character name | Safeguard record is created |
| 7 | Name displays correctly in worksheet cell and asset library search | Special characters are preserved and displayed correctly |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768765-018

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-018 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System prevents entering safeguard name exceeding 3000 character limit

## Preconditions

1. Safeguard creation panel is open
2. Safeguard Name field is active and ready for input
3. Character counter is displayed

## Test Data

| Field | Value |
|-------|-------|
| Character Limit | 3000 |
| Test Input | 3001 characters (exceeds limit) |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | User enters 2990 characters in Safeguard Name field | Field displays text; character counter shows "2990/3000" |
| 2 | User can still type; 10 characters remain | Input is allowed |
| 3 | User enters 10 more characters, reaching exactly 3000 | Field displays all 3000 characters; counter shows "3000/3000" |
| 4 | User attempts to type one more character (3001st) | System prevents input beyond 3000 characters |
| 5 | No 3001st character appears in the field | Input is rejected; field remains at 3000 characters |
| 6 | Character counter shows "3000/3000" (no increment) | Counter stays at maximum |
| 7 | User can still save with 3000 characters | Save button remains enabled |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768765-019

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-019 |
| Priority | Medium |
| Automatable | No |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |
| Reason | Network condition simulation requires mock/stub; best tested manually or with network interception tools |

## Title

System handles network error during safeguard save gracefully and allows retry

## Preconditions

1. Safeguard creation panel is open with all required data filled
2. Network connectivity is available initially but fails during save
3. User has clicked Save button

## Test Data

| Field | Value |
|-------|-------|
| Safeguard Name | Relief Valve Assembly |
| Network Condition | Connection timeout during save |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | User clicks Save button | Save request is initiated |
| 2 | Network connection fails before response is received | API call times out |
| 3 | System detects error and displays notification | Error message: "Unable to save safeguard. Connection error. Please try again." |
| 4 | Safeguard data remains in the creation panel (not lost) | Form fields still contain user's entered data |
| 5 | User can click Retry button to save again | Retry option is available |
| 6 | Network is restored; retry succeeds | Second attempt succeeds if network is restored |
| 7 | Safeguard is created successfully | Record is added to asset library |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768765-020

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-020 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

PHA Facilitator sees properties hidden when methodology configuration disables them

## Preconditions

1. Study is set to HAZID methodology
2. Admin has disabled "IPL" and "PFD value" properties for HAZID
3. Safeguard creation panel is open
4. Safeguard Class with IPL and PFD value in template is selected

## Test Data

| Field | Value |
|-------|-------|
| Methodology | HAZID |
| Disabled Properties | IPL, PFD value |
| Study Asset Library | Contains safeguards with IPL values |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | User is creating a new safeguard in HAZID methodology | Safeguard creation panel opens |
| 2 | User selects a Safeguard Class with IPL and PFD value defined | Class is selected |
| 3 | System attempts to auto-populate class properties but filters by methodology configuration | Filter is applied to class template |
| 4 | IPL field is not displayed in the form (hidden due to disabled status) | IPL field is absent from the form |
| 5 | PFD value field is not displayed in the form | PFD value field is absent from the form |
| 6 | Only enabled properties (Category, Type, SIL rating) are visible | Visible fields match enabled configuration |
| 7 | User searches asset library for existing safeguards | Asset library is queried |
| 8 | Existing safeguards do not display IPL or PFD value columns in search results | Columns for disabled properties are hidden |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768765-021

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-021 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Admin disables all optional safeguard properties but safeguard can still be created with name only

## Preconditions

1. Admin is on Methodology Configuration screen for HAZID
2. All optional properties are currently enabled: Category, Hierarchy of Control, IPL, PFD value, Type, SIL rating
3. Safeguard Name is always mandatory

## Test Data

| Field | Value |
|-------|-------|
| Methodology | HAZID |
| Enabled Properties | (none) |
| Safeguard Name Required | Yes |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | Admin disables all optional properties: Category, Hierarchy of Control, IPL, PFD value, Type, SIL rating | All toggles are switched to OFF |
| 2 | Admin saves the configuration with confirmation | Configuration is saved |
| 3 | PHA Facilitator opens a safeguard creation panel in HAZID methodology | Safeguard panel opens |
| 4 | Only Safeguard Name field is visible in the form | All other fields are hidden |
| 5 | User enters Safeguard Name: "Emergency Relief" | Name is entered |
| 6 | No other properties are available to fill | Form shows only the name field |
| 7 | User clicks Save | Save action is attempted |
| 8 | Safeguard is created successfully with name only | Safeguard record is created and available in asset library |

## Reviewer Comments

*To be completed during review.*

---

# INTEGRATION TEST CASES

---

# TC-FE768765-022

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-022 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System creates work item record in study asset library database when safeguard is saved

## Preconditions

1. Safeguard creation panel is open
2. All required fields are populated
3. Database connection is active

## Test Data

| Field | Value |
|-------|-------|
| Safeguard Name | Relief Valve Assembly |
| Category | Prevention |
| Study ID | study-guid-789 |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | User reviews safeguard details and clicks Save | Save request is submitted |
| 2 | System validates all data (Name required, uniqueness, etc.) | Validation passes |
| 3 | System creates database record in study asset library with safeguard data | SQL INSERT operation executes |
| 4 | System generates unique ID for the new safeguard | GUID is created and assigned |
| 5 | Metadata is recorded: Created Date, Created By (user ID), Study ID | Audit fields are populated |
| 6 | System queries asset library to confirm record exists | SELECT query confirms presence |
| 7 | Subsequent searches for "Relief Valve Assembly" return the newly created safeguard | Query results include new record |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768765-023

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-023 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System retrieves Safeguard Classes from master list and displays in dropdown with available options

## Preconditions

1. Safeguard Class master list is populated in the database
2. Safeguard creation panel is open
3. User is on the Safeguard Class selector field

## Test Data

| Field | Value |
|-------|-------|
| Class 1 | Standard HAZOP Safeguard |
| Class 2 | Advanced LOPA Safeguard |
| Class 3 | HAZID Relief Safeguard |
| Total Classes | 3 |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | System initializes safeguard creation panel | Panel loads |
| 2 | System queries Safeguard Class master list for available classes | Database query executes |
| 3 | System retrieves list of classes: Standard HAZOP, Advanced LOPA, HAZID Relief | 3 classes are returned |
| 4 | User clicks on Safeguard Class dropdown | Dropdown opens |
| 5 | Dropdown displays all retrieved classes: Standard HAZOP, Advanced LOPA, HAZID Relief | All 3 classes appear in dropdown |
| 6 | User can select any class from the list | Selection is possible |
| 7 | User selects "Standard HAZOP Safeguard" | Class is selected |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768765-024

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-024 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Methodology Configuration changes apply immediately across all open study worksheets after save

## Preconditions

1. Multiple studies are open in different browser tabs
2. Admin changes methodology configuration in one tab (disables "IPL" for HAZID)
3. Other tabs have HAZID worksheets open showing safeguards with IPL values

## Test Data

| Field | Value |
|-------|-------|
| Methodology | HAZID |
| Change | IPL property disabled |
| Active Studies | 3 tabs with different studies |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | Admin is on Methodology Configuration screen in Tab 1 | Tab 1 shows configuration interface |
| 2 | Tab 2 and Tab 3 have study worksheets open showing safeguards with IPL values visible | Tabs 2 and 3 show IPL column in safeguard data |
| 3 | Admin disables "IPL" property for HAZID methodology | Toggle is switched to OFF |
| 4 | Admin clicks Save and confirms changes in popup | Configuration is saved |
| 5 | System broadcasts configuration change event to all connected sessions | Change notification is sent |
| 6 | Tab 2 worksheet automatically refreshes and IPL column is hidden | Tab 2 shows updated UI without IPL |
| 7 | Tab 3 worksheet automatically refreshes and IPL column is hidden | Tab 3 shows updated UI without IPL |
| 8 | All existing safeguard data in the database is preserved (not deleted) | Backend data remains intact |

## Reviewer Comments

*To be completed during review.*

---

# PERFORMANCE & CONCURRENCY TEST CASES

---

# TC-FE768765-025

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-025 |
| Priority | Medium |
| Automatable | No |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |
| Reason | Performance testing requires load testing tools (JMeter, Locust); manual testing cannot measure latency accurately |

## Title

System creates safeguard within acceptable latency (target: <2 seconds) under normal load

## Preconditions

1. Database is responsive
2. Network latency is normal (50-100ms RTT)
3. Server has normal resource utilization (CPU <70%, Memory <80%)
4. Safeguard creation panel is open with data ready to save

## Test Data

| Field | Value |
|-------|-------|
| Safeguard Name | Relief Valve Assembly |
| Optional Properties | 5 properties populated |
| Expected Latency | < 2 seconds |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | User clicks Save button in safeguard creation panel | Save action is initiated; timer starts |
| 2 | System validates data | Validation completes |
| 3 | System creates database record | Record is inserted |
| 4 | System returns response to client | Response is received |
| 5 | Safeguard panel closes and worksheet cell is populated | UI updates complete |
| 6 | Total time from Save click to UI update is recorded | Latency measurement is taken |
| 7 | Latency is under 2 seconds | Target SLA is met |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768765-026

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-026 |
| Priority | Medium |
| Automatable | No |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |
| Reason | Concurrency testing requires simultaneous user simulation; manual testing cannot reliably simulate race conditions |

## Title

System handles concurrent safeguard creation attempts with same name by allowing one and rejecting duplicate

## Preconditions

1. Two users are on different worksheets in the same study
2. Both users attempt to create safeguard with the same name simultaneously
3. Both save requests reach the server within milliseconds of each other

## Test Data

| Field | Value |
|-------|-------|
| Study ID | study-guid-789 |
| Safeguard Name | Relief Valve Assembly |
| User 1 | User A |
| User 2 | User B |
| Timing | Concurrent (within 100ms) |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | User A enters Safeguard Name: "Relief Valve Assembly" and clicks Save | Save request #1 is sent |
| 2 | User B enters Safeguard Name: "Relief Valve Assembly" and clicks Save (within 100ms of User A) | Save request #2 is sent |
| 3 | Both requests arrive at server and are processed | Requests are queued |
| 4 | First request (User A) completes; safeguard is created | User A's safeguard is saved |
| 5 | Second request (User B) executes; uniqueness check fails | Duplicate name detected |
| 6 | User B receives error: "Safeguard with this name already exists" | Error is returned |
| 7 | User A's safeguard is available in asset library | Single record exists |
| 8 | User B can modify name and retry save | Retry is possible |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768765-027

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-027 |
| Priority | Medium |
| Automatable | No |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |
| Reason | Load testing with 50+ classes requires automated load generation and monitoring tools |

## Title

System remains responsive with 50+ Safeguard Classes in dropdown list

## Preconditions

1. Tenant has 50+ Safeguard Classes defined in master list
2. Safeguard creation panel is open
3. User is clicking on Safeguard Class dropdown

## Test Data

| Field | Value |
|-------|-------|
| Total Classes | 50+ |
| Dropdown Load Time Target | < 1 second |
| UI Responsiveness | No freezing or lag |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | User clicks on Safeguard Class dropdown | Dropdown open action is triggered |
| 2 | System queries master list for all 50+ classes | Database query executes |
| 3 | System renders dropdown options (virtual scrolling if implemented) | Options display within 1 second |
| 4 | Dropdown opens without freezing or noticeable lag | UI remains responsive |
| 5 | User can scroll through all 50+ options smoothly | Scrolling is fluid and responsive |
| 6 | User can search/filter classes by typing (if search is implemented) | Search results appear quickly |
| 7 | User can select any class without timeout | Selection succeeds |

## Reviewer Comments

*To be completed during review.*

---

# SECURITY & ACCESS CONTROL TEST CASES

---

# TC-FE768765-028

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-028 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System enforces Admin role requirement for accessing Methodology Configuration API endpoints

## Preconditions

1. API endpoints for Methodology Configuration are secured with role-based authorization
2. Test client has access to both Admin and Non-Admin user tokens

## Test Data

| Field | Value |
|-------|-------|
| Admin User Token | Valid JWT with Admin role |
| Non-Admin User Token | Valid JWT with Read-Only role |
| Endpoint | PUT /api/admin/methodologyconfig/{tenantId}/{methodology} |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | API client sends GET request to retrieve methodology config with Admin token | Request includes Authorization header |
| 2 | Server validates token and verifies Admin role | Authorization check passes |
| 3 | API returns 200 OK with configuration data | Admin receives configuration |
| 4 | API client sends same GET request with Non-Admin token | Request includes Authorization header with Read-Only role |
| 5 | Server validates token and checks Admin role requirement | Non-Admin role detected |
| 6 | API returns 403 Forbidden error | Request is denied |
| 7 | No configuration data is exposed to non-admin user | Response contains error message only |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768765-029

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-029 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System validates safeguard input to prevent SQL injection attacks

## Preconditions

1. Safeguard creation panel is open
2. Attacker attempts to inject SQL code in Safeguard Name field
3. Database connection is active

## Test Data

| Field | Value |
|-------|-------|
| Safeguard Name | '; DROP TABLE safeguards; -- |
| Injection Type | SQL injection attempt |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | Attacker enters malicious SQL in Safeguard Name: "'; DROP TABLE safeguards; --" | Field displays the injection attempt text |
| 2 | System sanitizes input using parameterized queries/prepared statements | Input sanitization occurs |
| 3 | Attacker clicks Save | Save request is submitted |
| 4 | System treats the entire string as literal text (not SQL code) | SQL is not executed |
| 5 | Safeguard is created with Name="'; DROP TABLE safeguards; --" (as literal string) | Record is stored with full string as name |
| 6 | Database tables remain intact | No DROP TABLE command was executed |
| 7 | System successfully creates safeguard with malicious string as literal name | Injection is neutralized |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768765-030

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-030 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System validates safeguard input to prevent XSS attacks in worksheet display

## Preconditions

1. Safeguard creation panel is open
2. Attacker attempts to inject JavaScript in Safeguard Name field
3. Worksheet is set to auto-display safeguards

## Test Data

| Field | Value |
|-------|-------|
| Safeguard Name | <img src=x onerror="alert('XSS')"> |
| Injection Type | Cross-site scripting (XSS) attempt |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | Attacker enters JavaScript payload in Safeguard Name: "<img src=x onerror=\"alert('XSS')\">" | Field displays the injection attempt |
| 2 | Attacker clicks Save | Save request is submitted |
| 3 | System stores the string as-is in the database | String is persisted |
| 4 | Safeguard is created and appears in worksheet cell | Cell displays the safeguard |
| 5 | System HTML-encodes the output when rendering in worksheet | HTML encoding is applied: <img src=x...> is rendered as text |
| 6 | JavaScript payload does not execute; onerror handler is not triggered | No alert dialog appears |
| 7 | Worksheet displays literal text: "<img src=x onerror...>" | XSS attack is neutralized |

## Reviewer Comments

*To be completed during review.*

---

# END-TO-END (E2E) TEST CASES

---

# TC-FE768765-031

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-031 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

PHA Facilitator can complete full safeguard creation and reuse workflow across multiple scenarios

## Preconditions

1. Study worksheet is open with multiple scenario rows
2. No safeguards exist in the asset library yet
3. Safeguard Classes are available in the master list
4. User is authenticated as PHA Facilitator

## Test Data

| Field | Value |
|-------|-------|
| Study Name | HAZID Analysis Study 001 |
| Scenario 1 | Node Failure |
| Scenario 2 | Pressure Surge |
| Safeguard Name | Emergency Pressure Relief |
| Class Template | Standard Relief Safeguard |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | User double-clicks safeguard cell in Scenario 1 (Node Failure) | Cell enters edit mode |
| 2 | User types "Emergency Pressure Relief" | Text appears |
| 3 | User selects "Add as new" from search results | Creation panel opens |
| 4 | User selects Safeguard Class: "Standard Relief Safeguard" | Class template loads and populates fields |
| 5 | User modifies Category from "Prevention" to "Mitigation" (scenario-specific) | Category field shows "Mitigation" |
| 6 | User clicks Save | Safeguard is created in asset library |
| 7 | Safeguard appears in Scenario 1 cell | Cell displays "Emergency Pressure Relief" |
| 8 | User double-clicks safeguard cell in Scenario 2 (Pressure Surge) | Cell enters edit mode |
| 9 | User types "Emergency Pressure Relief" | Search finds existing safeguard |
| 10 | User selects existing safeguard from search results | Creation panel opens in reuse mode |
| 11 | General properties show original values (Category="Mitigation") | General properties are locked |
| 12 | User modifies IPL property to "Yes" for Scenario 2 (scenario-specific) | IPL field shows "Yes" |
| 13 | User clicks Save | Safeguard is linked to Scenario 2 |
| 14 | Safeguard appears in Scenario 2 cell | Cell displays "Emergency Pressure Relief" |
| 15 | Scenario 1 still shows original values (Category="Mitigation", original IPL) | Scenario 1 is unchanged |
| 16 | Both scenarios now have the same safeguard with scenario-specific properties | Workflow completes successfully |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768765-032

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-032 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Admin can configure methodology properties and changes are immediately reflected in all open studies

## Preconditions

1. Multiple users have study worksheets open in different tabs
2. HAZID worksheets are displaying safeguards with all properties visible (Category, Type, IPL, PFD value, SIL rating)
3. Admin user has access to Methodology Configuration screen

## Test Data

| Field | Value |
|-------|-------|
| Methodology | HAZID |
| Properties to Disable | IPL, PFD value |
| Studies Affected | 3 (in different browser tabs) |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | User 1 has Tab A open showing HAZID worksheet with all properties visible | Tab A shows Category, Type, IPL, PFD value, SIL rating columns |
| 2 | User 2 has Tab B open showing HAZID worksheet with all properties visible | Tab B shows all property columns |
| 3 | Admin user navigates to Methodology Configuration screen | Configuration UI opens |
| 4 | Admin selects HAZID methodology tab > Data properties section | Data properties list displays |
| 5 | Admin disables "IPL" property by toggling it OFF | IPL toggle switches to disabled |
| 6 | Admin disables "PFD value" property by toggling it OFF | PFD value toggle switches to disabled |
| 7 | Admin clicks Save and confirms in the popup | Configuration is saved |
| 8 | Configuration change event is broadcast to all connected sessions | Change notification is sent |
| 9 | Tab A automatically refreshes; IPL and PFD value columns are hidden | Tab A now shows only Category, Type, SIL rating |
| 10 | Tab B automatically refreshes; IPL and PFD value columns are hidden | Tab B now shows only Category, Type, SIL rating |
| 11 | All existing safeguard data remains unchanged in the database | Data integrity is maintained |
| 12 | New safeguards created after the change do not have IPL/PFD value fields | New records respect updated configuration |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768765-033

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-033 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System correctly handles safeguard creation when no Safeguard Classes are available in master list

## Preconditions

1. Safeguard master list is empty (no classes defined)
2. Safeguard creation panel is open
3. User is ready to create a safeguard

## Test Data

| Field | Value |
|-------|-------|
| Available Classes | 0 |
| Safeguard Name | Emergency Relief |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | User opens Safeguard Class dropdown | Dropdown opens |
| 2 | System queries master list for classes | Query returns empty result set |
| 3 | Dropdown displays message: "No classes available" | Empty state message is shown |
| 4 | User can still enter Safeguard Name: "Emergency Relief" | Name field accepts input |
| 5 | User can manually populate optional properties without class template | All optional fields are editable |
| 6 | User clicks Save | Save request is submitted |
| 7 | Safeguard is created with user-entered values (no class template applied) | Safeguard record is created |
| 8 | Safeguard is available in asset library | New record can be retrieved |

## Reviewer Comments

*To be completed during review.*

---

# ACCESSIBILITY TEST CASES

---

# TC-FE768765-034

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-034 |
| Priority | Medium |
| Automatable | No |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |
| Reason | Accessibility testing requires manual testing with screen readers and automated WCAG scan tools (WAVE, Axe) |

## Title

Safeguard creation form is fully keyboard navigable and meets WCAG 2.1 Level AA standards

## Preconditions

1. Safeguard creation panel is open
2. User is using keyboard navigation only (no mouse)
3. Screen reader is active (NVDA, JAWS, or equivalent)

## Test Data

| Field | Value |
|-------|-------|
| Accessibility Standard | WCAG 2.1 Level AA |
| Navigation Method | Keyboard only (Tab, Shift+Tab, Enter, Arrow keys) |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | User presses Tab key repeatedly to navigate form elements | Focus moves through all interactive elements in logical order |
| 2 | Each form field (Name, Class dropdown, Category, Type, etc.) receives focus | Focus indicator is visible for each element |
| 3 | Screen reader announces field label and type (text input, dropdown, etc.) | Proper ARIA labels and roles are present |
| 4 | User presses Enter on Safeguard Class dropdown to open it | Dropdown expands |
| 5 | User navigates dropdown options using Arrow Up/Down keys | Options are traversable |
| 6 | Screen reader announces each option as user navigates | Options are announced |
| 7 | User presses Enter to select an option | Option is selected |
| 8 | Focus returns to form after selection | Focus management is correct |
| 9 | User tabs to Save button and presses Enter | Save action triggers |
| 10 | WCAG scan tool (Axe, WAVE) reports 0 accessibility violations in the creation panel | No accessibility issues detected |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768765-035

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-035 |
| Priority | Medium |
| Automatable | No |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |
| Reason | Color contrast and visual design testing requires manual review with accessibility tools |

## Title

Methodology Configuration screen has sufficient color contrast and visual indicators for enabled/disabled states

## Preconditions

1. Admin is on Methodology Configuration screen
2. Data properties section is visible
3. Multiple properties have mixed enabled/disabled states

## Test Data

| Field | Value |
|-------|-------|
| Color Contrast Ratio Target | 4.5:1 for normal text (WCAG AA) |
| Indicators | Toggle switches, text labels, colors |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | Admin views Data properties section with toggle switches | Toggle switches are visible |
| 2 | Enabled properties display visual indicator (e.g., green toggle, "Enabled" text) | Enabled state is clearly marked |
| 3 | Disabled properties display visual indicator (e.g., gray toggle, "Disabled" text) | Disabled state is clearly marked |
| 4 | Color contrast between toggle switch and background is measured | Ratio is at least 4.5:1 (WCAG AA compliant) |
| 5 | Color contrast between label text and background is measured | Ratio is at least 4.5:1 |
| 6 | Admin can distinguish enabled vs. disabled properties by color and/or icon alone | Visual differentiation does not rely solely on color |
| 7 | Accessibility color contrast tool (e.g., WAVE, Lighthouse) confirms compliance | No contrast violations reported |

## Reviewer Comments

*To be completed during review.*

---

# BROWSER & DEVICE COMPATIBILITY TEST CASES

---

# TC-FE768765-036

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-036 |
| Priority | Medium |
| Automatable | No |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |
| Reason | Cross-browser testing requires multiple browser instances; best tested manually or with Selenium Grid |

## Title

Safeguard creation workflow functions correctly in Chrome, Firefox, Safari, and Edge browsers

## Preconditions

1. Application is deployed to test environment
2. Test users have access on multiple browsers
3. Safeguard Classes are available

## Test Data

| Field | Value |
|-------|-------|
| Browsers | Chrome (latest), Firefox (latest), Safari (latest), Edge (latest) |
| Safeguard Name | Cross-Browser Test Safeguard |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | Tester opens application in Chrome browser | Application loads correctly |
| 2 | Tester creates safeguard in Chrome using normal workflow | Safeguard is created successfully |
| 3 | Tester opens application in Firefox browser | Application loads correctly |
| 4 | Tester creates safeguard in Firefox using normal workflow | Safeguard is created successfully |
| 5 | Tester opens application in Safari browser | Application loads correctly |
| 6 | Tester creates safeguard in Safari using normal workflow | Safeguard is created successfully |
| 7 | Tester opens application in Edge browser | Application loads correctly |
| 8 | Tester creates safeguard in Edge using normal workflow | Safeguard is created successfully |
| 9 | All safeguards are visible in the asset library regardless of creation browser | Cross-browser data is synchronized |
| 10 | Methodology Configuration screen is accessible and functions identically in all browsers | Configuration UI works uniformly |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768765-037

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-037 |
| Priority | Low |
| Automatable | No |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |
| Reason | Responsive design testing requires manual testing on multiple device sizes |

## Title

Safeguard creation panel is responsive and functional on tablet devices (iPad, Android tablets)

## Preconditions

1. Application is accessible on tablet device (iPad or Android tablet)
2. Study worksheet is open on tablet
3. Tablet is in portrait and landscape orientations

## Test Data

| Field | Value |
|-------|-------|
| Devices | iPad (10-inch), Android tablet (7-inch and 10-inch) |
| Orientations | Portrait and Landscape |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | User opens application on iPad in portrait orientation | Application displays correctly; layout is responsive |
| 2 | User double-clicks safeguard cell to open creation panel | Panel opens; content is readable and interactive |
| 3 | User enters safeguard data on small touch screen | All fields are easily tappable; no content is hidden |
| 4 | User rotates iPad to landscape orientation | Layout adjusts; all content remains accessible |
| 5 | User completes safeguard creation on landscape view | Save button is easily accessible |
| 6 | Same workflow is tested on Android tablets | Functionality is identical |
| 7 | Methodology Configuration screen is accessible on tablets in both orientations | Admin functions work on tablets |

## Reviewer Comments

*To be completed during review.*

---

# DATA VALIDATION TEST CASES

---

# TC-FE768765-038

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-038 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System validates Category field accepts only predefined lookup values from Safeguard Lookup table

## Preconditions

1. Safeguard creation panel is open
2. Category field is visible and enabled for the methodology
3. Predefined categories exist in the Safeguard Lookup table

## Test Data

| Field | Value |
|-------|-------|
| Valid Categories | Prevention, Detection, Mitigation, Control |
| Invalid Category | Unknown Category |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | User clicks on Category field | Field opens (could be dropdown or text input with validation) |
| 2 | User selects "Prevention" from predefined values | "Prevention" is selected |
| 3 | User clicks Save | Validation passes; safeguard is saved with Category="Prevention" |
| 4 | User creates another safeguard and attempts to enter invalid category: "Unknown Category" | If dropdown: value cannot be selected; If text: entry is allowed |
| 5 | User tries to save with invalid category | System displays error: "Invalid Category value" (if validation is done on save) |
| 6 | Save is prevented until valid category is selected | User must correct the value |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768765-039

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-039 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System validates IPL field accepts only predefined values or numeric input depending on configuration

## Preconditions

1. Safeguard creation panel is open
2. IPL field is visible and enabled for the methodology
3. IPL can accept: "Yes", "No", or numeric values (0.01, 0.05, etc.)

## Test Data

| Field | Value |
|-------|-------|
| Valid IPL Values | Yes, No, 0.01, 0.05, 0.1 |
| Invalid IPL Value | InvalidValue |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | User clicks on IPL field | Field is ready for input |
| 2 | User enters "Yes" in IPL field | Value is accepted |
| 3 | User clicks Save | Validation passes; safeguard is saved with IPL="Yes" |
| 4 | User creates another safeguard and enters numeric value "0.05" in IPL field | Numeric value is accepted |
| 5 | User clicks Save | Validation passes; safeguard is saved with IPL=0.05 |
| 6 | User creates another safeguard and attempts to enter invalid value: "InvalidValue" | Field either prevents input or allows entry but marks as invalid |
| 7 | User clicks Save | System displays error: "Invalid IPL value" |
| 8 | Save is prevented until valid IPL is entered | User must correct the value |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768765-040

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-040 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System validates PFD Value field accepts only numeric values within valid range (0-1)

## Preconditions

1. Safeguard creation panel is open
2. PFD Value field is visible and enabled for the methodology
3. PFD Value should be numeric between 0 and 1

## Test Data

| Field | Value |
|-------|-------|
| Valid PFD Values | 0, 0.01, 0.05, 0.5, 1 |
| Invalid Values | 1.5, -0.1, "text" |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | User clicks on PFD Value field | Field is ready for numeric input |
| 2 | User enters "0.05" (valid numeric value between 0-1) | Value is accepted |
| 3 | User clicks Save | Validation passes; safeguard is saved with PFD Value=0.05 |
| 4 | User creates another safeguard and attempts to enter "1.5" (value > 1) | Entry is allowed or prevented by input type |
| 5 | User clicks Save | System displays error: "PFD Value must be between 0 and 1" |
| 6 | Save is prevented | User must enter valid value |
| 7 | User clears field and enters "-0.1" (negative value) | Entry might be rejected depending on validation |
| 8 | User clicks Save | System displays error: "PFD Value cannot be negative" (if validation catches it) |

## Reviewer Comments

*To be completed during review.*

---

# WORKFLOW & USER EXPERIENCE TEST CASES

---

# TC-FE768765-041

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-041 |
| Priority | Medium |
| Automatable | No |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |
| Reason | UX testing is subjective and requires user feedback; best done with user testing sessions |

## Title

User sees clear feedback when safeguard is successfully created (success message, visual confirmation)

## Preconditions

1. Safeguard creation panel is open
2. All required data is entered
3. User has clicked Save button

## Test Data

| Field | Value |
|-------|-------|
| Safeguard Name | Relief Valve Assembly |
| Success Message Timeout | 3-5 seconds |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | User clicks Save button | Save action is initiated; loading indicator appears |
| 2 | System processes the request and creates safeguard | Backend operations complete |
| 3 | Success message appears: "Safeguard created successfully" (e.g., green toast notification) | User receives visual confirmation |
| 4 | Safeguard panel closes automatically or shows dismiss button | User is returned to worksheet |
| 5 | Worksheet cell displays newly created safeguard name | Visual confirmation in worksheet |
| 6 | Success message remains visible for 3-5 seconds before fading out | Message gives user time to read |
| 7 | Asset library shows new safeguard in search results | Complete confirmation that record was created |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768765-042

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-042 |
| Priority | Medium |
| Automatable | No |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |
| Reason | UX flow testing is best evaluated through user testing and usability studies |

## Title

User can easily distinguish between Safeguard Name, Class Selection, and Optional Properties sections in creation panel

## Preconditions

1. Safeguard creation panel is open
2. Panel displays all relevant sections
3. Multiple fields are visible

## Test Data

| Field | Value |
|-------|-------|
| Sections | Mandatory fields, Class selection, General properties, Scenario properties |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | User views safeguard creation panel | Panel layout is visible |
| 2 | User identifies Safeguard Name field (mandatory, at top) | Name field is clearly labeled and positioned |
| 3 | User identifies Safeguard Class selector (optional, with description "Select template") | Class selector is visually distinct |
| 4 | User identifies General properties section (grouped together, labeled) | Section header clearly indicates general properties |
| 5 | User identifies Scenario properties section (grouped separately, labeled) | Section header distinguishes scenario-specific properties |
| 6 | Visual separation between sections is clear (whitespace, borders, background colors, etc.) | Sections do not appear merged or confusing |
| 7 | User can navigate through sections without confusion | Flow is logical and intuitive |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768765-043

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-043 |
| Priority | Low |
| Automatable | No |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |
| Reason | Localization testing requires multiple language configurations and manual review |

## Title

Safeguard creation panel and Methodology Configuration screen display correctly in English and support future localization

## Preconditions

1. Application is set to English language
2. Test environment has localization framework configured
3. Strings are externalized (not hardcoded)

## Test Data

| Field | Value |
|-------|-------|
| Language | English |
| Supported Future Languages | Spanish, French, German (framework ready) |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | User views safeguard creation panel in English | All labels, placeholders, and messages are in English |
| 2 | User reviews Methodology Configuration screen in English | All section headers, property names, and buttons are in English |
| 3 | Code review confirms all UI strings are externalized (not hardcoded) | Strings are in resource files or constants |
| 4 | Localization framework is properly configured for future language support | Framework supports adding new languages without code changes |
| 5 | RTL (right-to-left) language support is considered (if applicable) | Layout considerations are documented |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768765-044

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-044 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Safeguard created in one study is not visible in safeguard asset library of different study

## Preconditions

1. Two studies exist: Study A and Study B
2. Safeguard "Relief Valve Assembly" is created in Study A
3. User is now working on Study B

## Test Data

| Field | Value |
|-------|-------|
| Study A | HAZID Analysis 001 |
| Study B | HAZID Analysis 002 |
| Safeguard | Relief Valve Assembly |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | User creates safeguard "Relief Valve Assembly" in Study A | Safeguard appears in Study A asset library |
| 2 | User searches for safeguard in Study A | Search finds "Relief Valve Assembly" |
| 3 | User navigates to Study B | Study B context is active |
| 4 | User opens safeguard creation panel in Study B and searches for "Relief Valve Assembly" | Search results in Study B do not show the Study A safeguard |
| 5 | User can create new safeguard with same name "Relief Valve Assembly" in Study B without conflict | Name is unique within Study B |
| 6 | Study A and Study B now each have their own "Relief Valve Assembly" safeguard | Records are properly scoped to studies |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768765-045

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE768765-045 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Admin can reset methodology configuration to default state if configuration becomes inconsistent

## Preconditions

1. Admin is on Methodology Configuration screen
2. Previous configuration changes have been made
3. Consistency issue is detected (e.g., orphaned property references)

## Test Data

| Field | Value |
|-------|-------|
| Methodology | HAZID |
| Current State | Inconsistent (some properties missing from Lookup table) |
| Default State | All properties enabled |

## Test Steps

| Step | Action | Expected Result |
| ---- | ------------------------------------------------------ | ---------------------- |
| 1 | Admin views Methodology Configuration for HAZID | Configuration interface displays |
| 2 | Admin notices configuration is inconsistent (orphaned properties, missing references) | Admin can see the issue or gets a warning |
| 3 | Admin looks for Reset to Defaults button or option | Reset option is available (if implemented) |
| 4 | Admin clicks Reset to Defaults (if available) | Confirmation dialog appears |
| 5 | Admin confirms reset | Configuration is reset to default state (all properties enabled) |
| 6 | Properties now match those in Safeguard Lookup table | Consistency is restored |
| 7 | All studies immediately reflect the reset configuration | Worksheets update to show all properties enabled |

## Reviewer Comments

*To be completed during review.*

---

**Document Status:** DRAFT  
**Total Test Cases Generated:** 45  
**Next Steps:** Submit for QA Lead Review and Prioritization  
**Generated:** 2026-06-02 by Test Case Generator
