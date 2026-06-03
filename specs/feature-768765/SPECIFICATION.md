---
featureId: FE#768765
title: "[PHA PSM] Add Safeguard instances to the study worksheet 5"
createdDate: 2026-06-02
lastUpdated: 2026-06-02
status: Active
priority: 2
assignedTo: Godbole, Aparna
---

# SPECIFICATION: FE#768765

## Feature Overview

**Feature:** [PHA PSM] Add Safeguard instances to the study worksheet 5  
**Feature ID:** FE#768765  
**Status:** Active  
**Priority:** 2  
**Assigned To:** Godbole, Aparna  
**Created:** 2/26/2026  
**Last Updated:** 6/1/2026

### Summary

This feature enables users to create safeguards directly from a study worksheet and optionally base them on predefined Safeguard Classes from the tenant master list. It also allows administrators to configure which safeguard metadata properties are relevant for each methodology (HAZOP, LOPA, HAZID), improving UI clarity and reducing user confusion.

---

## Business Requirements

### Problem Statement
- Currently, all safeguard properties are displayed across methodologies, leading to unnecessary complexity and confusion for users
- There is no way to tailor safeguard metadata to the context of a specific methodology
- Safeguard creation workflow is not seamless when done from worksheets

### Business Value
- **Improves Data Consistency:** Class templates drive standardized safeguard metadata
- **Reduces Rework:** Prevents "half-created" safeguards tied to worksheet save timing
- **Supports Governance:** Tenant-defined safeguard classes and properties are reused across studies
- **Cleaner Experience:** Only safeguard name is mandatory; everything else is helpful-but-optional

### User Value
- **Faster Facilitation:** Users can create safeguards in-context without leaving the worksheet
- **Predictable Workflow:** Clear save/cancel behavior with immediate feedback
- **Reduced Clutter:** Only relevant properties for the selected methodology are displayed

---

## User Stories

### US-001: Add Safeguard from Worksheet (Inline Create)
**As a** PHA User  
**I want to** create a new safeguard directly from a worksheet safeguard field  
**So that** I can quickly add safeguards without leaving the worksheet context

**Acceptance:** User can double-click a safeguard cell, type text, search for existing safeguards, and select "Add as new" to open the creation panel

### US-002: Create Safeguard with Class Template
**As a** PHA User  
**I want to** select a Safeguard Class template when creating a safeguard  
**So that** metadata fields are pre-populated with standard definitions, reducing data entry and ensuring consistency

**Acceptance:** Safeguard Class selection populates all class-defined properties; user can override any field before saving

### US-003: Manage Safeguard Name and Metadata
**As a** PHA User  
**I want to** edit safeguard name (up to 3000 characters) and associated metadata  
**So that** I can customize safeguard properties for the specific study context

**Acceptance:** Safeguard Name is mandatory; all other properties are optional; name must be unique within the study

### US-004: Save/Cancel Safeguard Creation
**As a** PHA User  
**I want** to save or cancel safeguard creation with clear behavior  
**So that** I have control over when records are created and can discard changes if needed

**Acceptance:**
- Save immediately creates/updates safeguard record
- Cancel discards unsaved changes
- First-time cancellation clears worksheet cell text

### US-005: Reuse Safeguard in Worksheet
**As a** PHA User  
**I want to** reuse an existing safeguard in multiple worksheet locations  
**So that** I can maintain consistency and reduce duplicate data entry

**Acceptance:**
- General properties remain unchanged
- Scenario-based properties can be modified per location
- Copy/paste preserves both general and scenario properties

### US-006: Manage Methodology-Specific Safeguard Properties
**As an** Administrator  
**I want to** configure which safeguard properties are displayed for each methodology  
**So that** study asset libraries and worksheets only show relevant properties for the selected methodology

**Acceptance:**
- Methodology Configuration screen is accessible only to Admin users
- Tabs exist for HAZOP/LOPA and HAZID
- Admins can enable/disable properties: Category, Hierarchy of Control, IPL, PFD value, Type, SIL rating
- Only properties enabled in the global Safeguard Lookup table are configurable

### US-007: Apply Methodology Configuration Changes
**As an** Administrator  
**I want to** save methodology configuration changes with confirmation  
**So that** changes are applied consistently across the application

**Acceptance:**
- Confirmation popup required before saving
- Changes apply immediately after confirmation
- Study load times are not negatively impacted
- Configuration supports adding new methodologies without redesign

---

## Acceptance Criteria

### Access & Security

- [ ] Only Admin users can access the Methodology Configuration screen
- [ ] Non-admin users cannot view or modify methodology configuration settings
- [ ] Unauthorized access attempts are logged

### Methodology Configuration UI

- [ ] "Methodology Configuration" item is available in the navigation panel
- [ ] Configuration includes tabs for: HAZOP (&LOPA), HAZID
- [ ] Each methodology tab contains subsections for: Worksheet configuration, Data properties
- [ ] "Worksheet layout configuration" is moved under the correct methodology tab and subsection
- [ ] UI is intuitive and follows existing design patterns

### Enable / Disable Safeguard Properties

- [ ] Admins can enable or disable safeguard metadata properties per methodology
- [ ] Only properties enabled in the global Safeguard Lookup table are configurable
- [ ] Supported properties include:
  - [ ] Category
  - [ ] Hierarchy of Control
  - [ ] IPL
  - [ ] PFD value
  - [ ] Type
  - [ ] SIL rating
- [ ] Toggle state is clearly visible and editable
- [ ] UI clearly indicates enabled vs. disabled properties

### Save Behavior

- [ ] Changes can only be saved after confirmation
- [ ] A confirmation save pop-up is shown before applying changes
- [ ] Saved changes are applied across the application
- [ ] Unsaved changes warning appears if user attempts to leave

### UI Behavior in Studies

- [ ] Study asset libraries only display safeguard properties enabled for the selected methodology
- [ ] Worksheets only display safeguard properties enabled for the selected methodology
- [ ] Disabled properties are hidden and not editable
- [ ] Property visibility updates immediately after configuration save

### Performance & Reliability

- [ ] Configuration changes apply immediately after save
- [ ] Study load times are not negatively impacted by configuration changes
- [ ] No data loss during configuration updates
- [ ] System handles large numbers of methodologies efficiently

### Scalability

- [ ] Configuration supports adding new methodologies without redesign
- [ ] System remains performant with 50+ methodologies
- [ ] UI remains usable with 20+ properties per methodology

---

## Test Scenarios

### Scenario TC-001: Create Safeguard with Valid Inline Input
**Preconditions:**
- User is authenticated as PHA User
- Study worksheet is open with safeguard field visible
- No existing safeguard with the same name

**Given** user is on a study worksheet with a safeguard cell
**When** user double-clicks the safeguard cell and types "New Safeguard"
**And** user selects "Add as new" action
**Then** the safeguard creation slide-out panel opens
**And** "Safeguard Name" is prefilled with "New Safeguard"
**And** all other fields are empty and ready for input

**Expected Result:** Safeguard creation panel displays with prefilled name

---

### Scenario TC-002: Select Safeguard Class and Auto-Populate Fields
**Preconditions:**
- Safeguard creation panel is open
- Safeguard Name is already entered: "Test Safeguard"
- Safeguard Classes are available in the master list

**Given** user is in the safeguard creation panel
**When** user selects a Safeguard Class from the dropdown (e.g., "Standard HAZOP Safeguard")
**Then** all class-defined properties are auto-populated:
  - Category (if defined in class)
  - Hierarchy of Control (if defined in class)
  - Type (if defined in class)
  - Any other default values from the class
**And** fields grouped as "General properties" and "Scenario-related properties"
**And** only properties enabled in the methodology are visible

**Expected Result:** Form fields auto-populate with class template values

---

### Scenario TC-003: Override Class Template Values
**Preconditions:**
- Safeguard Class is selected with pre-populated values
- All properties are visible and editable

**Given** class template values are populated
**When** user modifies any field (e.g., changes Category from "Prevention" to "Mitigation")
**And** user clicks Save
**Then** the safeguard is created with user-modified values
**And** the original class template is not affected

**Expected Result:** Safeguard saves with user-entered values, not template defaults

---

### Scenario TC-004: Change Selected Class Mid-Creation
**Preconditions:**
- Safeguard creation panel is open with a class already selected
- Some fields have been manually edited

**Given** user has selected Class A and edited some fields
**When** user changes the selected class to Class B
**Then** all template-driven fields are re-populated with Class B defaults
**And** manually entered values are replaced with Class B defaults
**And** user is shown a confirmation that fields will be reset

**Expected Result:** Class change triggers field refresh with new template defaults

---

### Scenario TC-005: Save Safeguard Successfully
**Preconditions:**
- Safeguard Name is entered (mandatory field)
- All required fields (if any) are populated
- Creation panel is open

**Given** user has entered safeguard details
**When** user clicks Save in the slide-out panel
**Then** safeguard record is immediately created in the study asset library
**And** worksheet cell is populated with the newly created safeguard
**And** creation panel closes
**And** safeguard appears in asset library search results

**Expected Result:** Safeguard is created and available in worksheet

---

### Scenario TC-006: Cancel Safeguard Creation (First-Time)
**Preconditions:**
- Safeguard creation panel is open
- This is a new safeguard (no prior record exists)
- User has entered some data

**Given** user has typed safeguard details but not yet saved
**When** user clicks Cancel or presses Esc
**Then** all unsaved changes are discarded
**And** no safeguard record is created
**And** creation panel closes
**And** worksheet cell text is cleared
**And** user returns to the worksheet

**Expected Result:** No safeguard record created; worksheet cell cleared

---

### Scenario TC-007: Reuse Safeguard in Another Worksheet Location
**Preconditions:**
- Safeguard already exists in the study asset library
- Worksheet has multiple safeguard fields across different scenarios
- User is on the same worksheet

**Given** user is on a worksheet with existing safeguard
**When** user double-clicks another safeguard cell
**And** searches for and selects the existing safeguard
**And** modifies only scenario-specific properties
**And** clicks Save
**Then** the safeguard is linked to the new location
**And** general properties remain unchanged from original
**And** scenario-specific properties reflect the local modification

**Expected Result:** Safeguard reused with scenario-specific edits

---

### Scenario TC-008: Copy/Paste Safeguard with Scenario Properties
**Preconditions:**
- Safeguard exists in one worksheet location
- Target location is in a different scenario on the same worksheet
- User has permissions to edit

**Given** user has a safeguard in Scenario A
**When** user copies the safeguard cell
**And** pastes it into a Scenario B location
**Then** both general and scenario-specific properties from Scenario A are copied
**And** safeguard creation panel immediately displays
**And** only scenario-based properties are editable (general properties grayed out)
**And** user can customize scenario properties before confirming

**Expected Result:** Copy/paste preserves both property types with scenario edit capability

---

### Scenario TC-009: Admin Accesses Methodology Configuration
**Preconditions:**
- User is authenticated as Administrator
- Navigation panel is visible
- Methodology Configuration is implemented

**Given** admin user is logged in
**When** admin clicks "Methodology Configuration" in navigation
**Then** Methodology Configuration screen opens
**And** tabs are displayed: HAZOP (&LOPA), HAZID
**And** subsections are displayed: Worksheet configuration, Data properties
**And** existing "Worksheet layout configuration" content appears under correct subsection

**Expected Result:** Methodology Configuration screen displays with correct structure

---

### Scenario TC-010: Admin Enables/Disables Safeguard Properties
**Preconditions:**
- Methodology Configuration screen is open
- Admin is viewing the Data properties subsection for HAZID
- Properties are listed: Category, Hierarchy of Control, IPL, PFD value, Type, SIL rating

**Given** admin is on Methodology Configuration > HAZID > Data properties
**When** admin toggles "IPL" property from Disabled to Enabled
**And** admin toggles "PFD value" property from Enabled to Disabled
**Then** toggle state changes are clearly visible
**And** only enabled properties can be toggled (if others exist in Lookup table)
**And** disabled properties show as grayed out or crossed out

**Expected Result:** Admin can easily see which properties are enabled/disabled

---

### Scenario TC-011: Save Methodology Configuration with Confirmation
**Preconditions:**
- Admin has made property enable/disable changes
- Configuration screen shows unsaved changes indicator

**Given** admin has modified property toggles
**When** admin clicks Save button
**Then** confirmation popup appears with summary of changes
**And** admin must explicitly confirm before changes apply
**And** on confirmation, changes are applied across the application
**And** all open studies refresh to reflect new property visibility

**Expected Result:** Configuration changes are saved with confirmation and apply globally

---

### Scenario TC-012: Verify Property Visibility After Configuration Change
**Preconditions:**
- Methodology configuration has been changed
- Study worksheet is open
- Study asset library is visible

**Given** admin has disabled "IPL" property for HAZID methodology
**And** study is set to HAZID methodology
**When** user opens safeguard creation panel
**And** searches asset library for existing safeguards
**Then** "IPL" field is not displayed in the creation panel
**And** existing safeguards in asset library do not show "IPL" values
**And** worksheets do not display "IPL" column or property

**Expected Result:** Disabled properties are hidden across all UI elements

---

### Scenario TC-013: Safeguard Name Character Limit (3000 characters)
**Preconditions:**
- Safeguard creation panel is open
- Character input field is active

**Given** user is entering safeguard name
**When** user enters 3000 characters successfully
**And** user attempts to enter the 3001st character
**Then** system prevents input beyond 3000 characters
**And** user sees character count indicator (e.g., "2998/3000")
**And** cannot save with empty name (validation requires at least 1 character)

**Expected Result:** Safeguard name enforces 3000-character limit with feedback

---

### Scenario TC-014: Safeguard Name Uniqueness Within Study
**Preconditions:**
- Study has an existing safeguard named "Pressure Relief"
- Safeguard creation panel is open

**Given** safeguard "Pressure Relief" already exists in the study
**When** user enters name "Pressure Relief" for a new safeguard
**And** attempts to save
**Then** system displays error: "Safeguard with this name already exists in this study"
**And** save is prevented
**And** user can modify the name and retry

**Expected Result:** System enforces safeguard name uniqueness within study

---

### Scenario TC-015: Non-Admin Access Denied to Methodology Configuration
**Preconditions:**
- User is authenticated as non-admin PHA User or QA User
- Navigation panel is visible

**Given** non-admin user is logged in
**When** non-admin tries to access "Methodology Configuration" from navigation
**Then** access is denied or item is not visible in navigation
**And** if user attempts direct URL access, 403 Forbidden error is returned
**And** user sees message: "You do not have permission to access this feature"

**Expected Result:** Non-admin users cannot access Methodology Configuration

---

## Edge Cases

### Edge Case EC-001: Empty Safeguard Name
**Scenario:** User attempts to save safeguard without entering a name
**Expected Behavior:** Save fails with error "Safeguard Name is required"
**Mitigation:** Disable Save button until name is entered; show inline validation

### Edge Case EC-002: Special Characters in Safeguard Name
**Scenario:** User enters name with special characters: "Relief-Valve #2 (Main)"
**Expected Behavior:** System accepts and stores special characters; displays correctly in all UI elements
**Mitigation:** Ensure database field supports UTF-8; validate on retrieval

### Edge Case EC-003: Very Long Safeguard Name (2990+ characters)
**Scenario:** User enters 2990 characters; system near limit
**Expected Behavior:** Character counter shows "2990/3000"; user can add 10 more
**Mitigation:** Display remaining character count; prevent overflow

### Edge Case EC-004: Rapid Class Changes
**Scenario:** User changes selected class multiple times in quick succession
**Expected Behavior:** Only the final class selection triggers field refresh
**Mitigation:** Debounce class selection events; show loading indicator

### Edge Case EC-005: Network Error During Save
**Scenario:** Network connection fails while saving safeguard
**Expected Behavior:** Error message displayed; safeguard remains in creation panel; user can retry save
**Mitigation:** Implement offline queue; notify user of retry option

### Edge Case EC-006: Concurrent Safeguard Creation (Same Name)
**Scenario:** Two users attempt to create safeguard with same name simultaneously
**Expected Behavior:** First user succeeds; second user receives error about duplicate name
**Mitigation:** Use database constraint; show error and allow name modification

### Edge Case EC-007: Property Disabled While in Use
**Scenario:** Admin disables a property while user has it visible in creation panel
**Expected Behavior:** Property immediately hidden; any data already entered is preserved in database but not displayed
**Mitigation:** Refresh UI; show notification "Properties configuration changed"; preserve backend data

### Edge Case EC-008: Class Template with No Default Values
**Scenario:** Selected Safeguard Class has no default values defined
**Expected Behavior:** Safeguard Name remains prefilled; all other fields are empty
**Mitigation:** Handle null/empty defaults gracefully; show empty form

### Edge Case EC-009: Reuse Safeguard in Same Row
**Scenario:** User attempts to add same safeguard twice to the same scenario row
**Expected Behavior:** System either prevents duplicate or allows it depending on business rule
**Mitigation:** Clarify and enforce business rule; show warning if duplicate intended

### Edge Case EC-010: Cancel After Multiple Class Changes
**Scenario:** User changes class 3 times, edits fields, then cancels
**Expected Behavior:** All data discarded; worksheet cell cleared; no record created
**Mitigation:** Track unsaved state; confirm cancellation if data present

### Edge Case EC-011: Large Number of Safeguard Classes
**Scenario:** Tenant has 500+ Safeguard Classes defined
**Expected Behavior:** Dropdown remains responsive; search/filter available
**Mitigation:** Implement virtual scrolling; add search/filter to class selector

### Edge Case EC-012: Methodology with No Enabled Properties
**Scenario:** Admin disables all safeguard properties for HAZID methodology
**Expected Behavior:** Safeguard can still be created (Name is always required); no optional properties displayed
**Mitigation:** Always allow Name field; show warning if all properties disabled

---

## Data Requirements

### Safeguard Entity

| Field | Type | Length | Required | Unique | Notes |
|-------|------|--------|----------|--------|-------|
| ID | GUID | - | Yes | Yes | Primary Key |
| Study ID | GUID | - | Yes | No | Foreign Key to Study |
| Name | String | 3000 | Yes | Within Study | Safeguard name |
| Class ID | GUID | - | No | No | Foreign Key to Safeguard Class |
| Category | String | 255 | No | No | Configurable per methodology |
| Hierarchy of Control | String | 255 | No | No | Configurable per methodology |
| IPL | String | 255 | No | No | Configurable per methodology |
| PFD Value | Decimal | - | No | No | Configurable per methodology |
| Type | String | 255 | No | No | Configurable per methodology |
| SIL Rating | String | 50 | No | No | Configurable per methodology |
| Created Date | DateTime | - | Yes | No | Audit |
| Modified Date | DateTime | - | Yes | No | Audit |
| Created By | GUID | - | Yes | No | User who created |
| Modified By | GUID | - | Yes | No | Last modifier |

### Methodology Configuration Entity

| Field | Type | Length | Required | Unique | Notes |
|-------|------|--------|----------|--------|-------|
| ID | GUID | - | Yes | Yes | Primary Key |
| Tenant ID | GUID | - | Yes | No | Foreign Key to Tenant |
| Methodology | String | 100 | Yes | No | HAZOP, HAZID, LOPA, etc. |
| Property Name | String | 255 | Yes | No | Category, IPL, Type, etc. |
| Is Enabled | Boolean | - | Yes | No | True/False |
| Display Order | Int | - | No | No | UI sort order |
| Created Date | DateTime | - | Yes | No | Audit |
| Modified Date | DateTime | - | Yes | No | Audit |

### Data Validation Rules

- Safeguard Name: Non-empty, max 3000 characters, unique within study
- Category: Must match predefined lookup values (if enabled)
- Hierarchy of Control: Must match predefined lookup values (if enabled)
- IPL: Must be numeric or match predefined values (if enabled)
- PFD Value: Must be numeric (if enabled)
- Type: Must match predefined lookup values (if enabled)
- SIL Rating: Must match predefined values (if enabled)
- Methodology Configuration: Property must exist in Safeguard Lookup table to be configurable

---

## API Requirements

### Endpoint 1: Create Safeguard
```
POST /api/studies/{studyId}/safeguards
Content-Type: application/json

{
  "name": "Relief Valve Assembly",
  "classId": "class-guid-123",
  "category": "Prevention",
  "hierarchyOfControl": "PPE",
  "ipL": "Yes",
  "pfdValue": 0.01,
  "type": "Mechanical",
  "silRating": "2"
}

Response 201 Created:
{
  "id": "safeguard-guid-456",
  "studyId": "study-guid-789",
  "name": "Relief Valve Assembly",
  "classId": "class-guid-123",
  ...
  "createdDate": "2026-06-02T10:30:00Z"
}
```

### Endpoint 2: Update Safeguard
```
PUT /api/studies/{studyId}/safeguards/{safeguardId}
Content-Type: application/json

{
  "name": "Relief Valve Assembly",
  "category": "Mitigation",
  ...
}

Response 200 OK: Updated safeguard object
```

### Endpoint 3: Get Safeguard Classes
```
GET /api/safeguardclasses?tenantId={tenantId}&includeDefaults=true

Response 200 OK:
[
  {
    "id": "class-guid-123",
    "name": "Standard HAZOP Safeguard",
    "properties": {
      "category": "Prevention",
      "type": "Mechanical"
    }
  }
]
```

### Endpoint 4: Get Methodology Configuration
```
GET /api/admin/methodologyconfig/{tenantId}/{methodology}

Response 200 OK:
{
  "methodology": "HAZID",
  "properties": [
    {
      "name": "Category",
      "isEnabled": true,
      "displayOrder": 1
    },
    {
      "name": "IPL",
      "isEnabled": false,
      "displayOrder": 2
    }
  ]
}
```

### Endpoint 5: Update Methodology Configuration
```
PUT /api/admin/methodologyconfig/{tenantId}/{methodology}
Content-Type: application/json

{
  "properties": [
    { "name": "Category", "isEnabled": true },
    { "name": "IPL", "isEnabled": false }
  ]
}

Response 200 OK: Updated configuration
```

---

## Implementation Notes

### Breaking Changes
- Safeguard creation workflow changes from "worksheet save" to "safeguard save" timing
- Existing safeguards will need migration to support optional properties by methodology
- "Worksheet layout configuration" will be moved to Methodology Configuration screen

### Considerations
- Performance impact of configuration caching (recommend 5-min TTL)
- Ensure backward compatibility for existing safeguards with all properties
- Consider feature flag for gradual rollout

### Future Enhancements
- Support for dynamic property additions (not just toggle)
- Audit trail for methodology configuration changes
- Bulk operations for multiple methodology configurations

---

## Traceability

| Acceptance Criterion | Test Scenario | Edge Case |
|---------------------|---------------|-----------|
| Admin-only access | TC-009, TC-015 | - |
| Enable/Disable properties | TC-010 | EC-012 |
| Confirmation popup | TC-011 | - |
| Property visibility | TC-012 | EC-007 |
| Safeguard Name mandatory | TC-005 | EC-001 |
| Safeguard Name uniqueness | - | EC-014 |
| 3000-char limit | TC-013 | EC-003 |
| Class template population | TC-002 | EC-008 |
| Field override | TC-003 | - |
| Save/Cancel behavior | TC-005, TC-006 | EC-005, EC-010 |
| Reuse safeguard | TC-007, TC-008 | EC-009 |

---

## References

- **Azure DevOps Feature:** https://dev.azure.com/enablon/7977ed3d-15c4-4782-b1f7-d1f70660ff0c/_apis/wit/workItems/768765
- **Productboard:** https://enablon.productboard.com/entity-detail/features/12a1e28b-16c5-411a-b5fb-0ffcb0064e9e

---

**Document Status:** DRAFT  
**Next Review:** Pending QA Lead Review  
**Generated:** 2026-06-02 by Specification Generator
