# Feature Report: FE#768765

**Generated:** 6/1/2026, 3:25:24 PM

## Metadata

| Property | Value |
|---|---|
| ID | 768765 |
| Title | [PHA PSM] Add Safeguard instances to the study worksheet 5 |
| State | Active |
| Priority | 2 |
| Type | Feature |
| Assigned To | Godbole, Aparna |
| Created | 2/26/2026, 4:25:30 PM |
| Updated | 5/25/2026, 12:46:52 PM |
| URL | https://dev.azure.com/enablon/7977ed3d-15c4-4782-b1f7-d1f70660ff0c/_apis/wit/workItems/768765 |

## Description

### User Story

- **As a** PHA User,
**I want to** add safeguards to a study worksheet using a safeguard class from the tenant master list as a template,
**so that** safeguard entries are created faster, more consistently, and with the right metadata prefilled—while still allowing study-specific edits.

### As an Admin, I want to **enable or disable safeguard metadata types for each methodology (e.g., HAZOP, What-If, LOPA)**

**so that** **study asset libraries and UI only display relevant safeguard properties for the selected methodology**.
###

### Description

- This feature enables facilitators to create a study safeguard directly from a worksheet (e.g., the HAZID worksheet) and optionally base it on a predefined Safeguard Class from the tenant master list. When a class is selected, the safeguard’s metadata fields are pre-populated according to the class definition (which itself is built from the tenant safeguard lookup table properties). The facilitator can modify any prefilled values before saving.
This introduces an important behavioral change: the safeguard database record is created when the user clicks **Save** in the safeguard slide-out panel (i.e., at safeguard-level save), not when the worksheet or node is saved.
**Problem Statement** Currently, all safeguard properties are displayed across methodologies, leading to unnecessary complexity and confusion for users. There is no way to tailor safeguard metadata to the context of a specific methodology.
Admins can configure which safeguard properties (e.g., Category, Hierarchy of Control, IPL, PFD value, Type, SIL rating) are available for each methodology. This ensures that users only see relevant fields when conducting studies, improving usability and reducing clutter. The configuration will be accessible via the **Methodology Configuration** screen, where admins can toggle properties per methodology IF the property has been anabled in the Safeguard look-up table.

### Scope

- ****1.' Add Safeguard from Worksheet (Inline Create)****
  - From a study worksheet safeguard field:
  - User can double-click the safeguard cell and begin typing.
  - System searches existing safeguards from the study asset library.
  - If no results are found, user can select an **“Add as new”** action ( or clicking away after typing).
  - Creating a new safeguard opens a slide-out panel (drawer) for safeguard details.
  - **2. Slide-Out Panel: Create Safeguard with Class Template**
  - In the slide-out panel:
  - **Safeguard Name** is prefilled from the worksheet text and is the only mandatory field.
  - Safeguard Name is unique in the specific study
  - User can select a **Safeguard Class** (defined in the tenant master list).
  - When the user selects a class:
  - All class-defined properties are prefilled into the safeguard form.
  - Prefill includes any “default value” fields defined in the class template.
  - Fields are grouped as:
  - General properties (e.g., hierarchy of control category, type)
  - Scenario-related properties (e.g. IPL)
  - Only properties that are Enabled in the Safeguard Lookup table AND enabled in the methodology is visible
  - If the user changes the selected class:
  - All template-driven fields are re-populated to the newly selected class defaults.
  - User may then override any field values before saving.
  - Add a shortcut (esc) to close the panel
  - **3. Save and Cancel Behavior in the worksheet**
  - Save/create safeguard behaviour
  - Clicking **Save** in the slide-out panel immediately creates/updates the safeguard record in the worksheet.
  - The new safeguard becomes available in the study asset library when user saves the data from worksheet by clicking on 'Save node'/ 'Save section'..
  - The worksheet cell is populated with the newly created safeguard.
  - Cancel behavior:
  - Cancel discards all unsaved changes in the slide-out panel.
  - If this was the *first-time creation* (i.e., safeguard did not previously exist), then:
  - No safeguard record is created.
  - User returns to the worksheet.
  - The typed text in the safeguard cell is cleared (user can type again if needed).
  - **4. Reuse safeguard in a worksheet**
  - Reusing a safeguard in a worksheet after it is created is possible:
  - the properties will remain the same as the first time it was created
  - only the scenario-based properties can be changed for the safeguard in a specific scenario
  - copy/paste will copy the general and that specific scenario properties
  - immediately after paste the safeguard pop-up is displayed
  - only scenario-based properties can be edited
  - **Methodology specific configuration for safeguard** - Ability to **enable/disable safeguard properties per methodology** (HAZID, HAZOP&LOPA).
  - UI updates to reflect selected properties in:
  - Study asset libraries
  - Worksheets
  - URL Link to **global safeguard lookup table** for reference.
  - Create **Methodology configuration** under navigation panel
  - Create the following tabs under methodology configuration (Tabs: HAZOP (&LOPA), HAZID, *more to be added later)*
  - *-* Methodology configuration will have subsections under each tab (Subsections: Worksheet configuration, Data properties
  -  Move and split "Worksheet layout configuration" page to the "Methodology   Configuration" page under "Worksheet layout" subsection in each methodology tab
  - **6. Validation Rules**
  - Safeguard Name is required.
  - All other properties are optional.
  - System prevents saving if required fields are missing (name).


### Business & User Value

- **Business Value**
- Improves Data Consistency: Class templates drive standardized safeguard metadata.
- Reduces Rework: Prevents “half-created” safeguards tied to worksheet save timing.
- Supports Governance: Tenant-defined safeguard classes and properties are reused across studies.
**User Value**
- Faster Facilitation: Users can create safeguards in-context without leaving the worksheet.
- Cleaner Experience: Only safeguard name is mandatory; everything else is helpful-but-optional.
- Predictable Workflow
Design:
Embedded content

## Acceptance Criteria

### Access & Security

- **Only** Admin users can access the Methodology Configuration screen.
- Non‑admin users cannot view or modify methodology configuration settings.

### Methodology Configuration UI

- A “Methodology Configuration” item is available in the navigation panel.
- Configuration includes tabs for:
- HAZOP (& LOPA)
- HAZID
- Each methodology tab contains subsections for:
- Worksheet configuration
- Data properties
- The existing “Worksheet layout configuration” is moved under the correct methodology tab and subsection.

### Enable / Disable Safeguard Properties

- Admins can enable or disable safeguard metadata properties per methodology.
- **Only** properties **enabled** in the global Safeguard Lookup table are configurable.
- Supported properties include (but are not limited to):
- Category
- Hierarchy of Control
- IPL
- PFD value
- Type
- SIL rating
- Toggle state is clearly **visible** and editable.

### Save Behavior

- Changes can **only** be saved after confirmation.
- A confirmation save pop‑up is shown before applying changes.
- Saved changes are applied across the application.

### UI Behavior in Studies

- Study asset libraries **only** **display** safeguard properties **enabled** for the selected methodology.
- Worksheets **only** **display** safeguard properties **enabled** for the selected methodology.
- **Disabled** properties are **hidden** and not editable.

### Performance & Reliability

- Configuration changes apply immediately after save.
- Study load times are not negatively impacted by configuration changes.

### Scalability

- The configuration supports adding new methodologies without redesign.

## Comments (1)

### Comment 1
**By:** EU-s-productboard
**Date:** 3/9/2026, 12:48:43 PM

Productboard referencehttps://enablon.productboard.com/entity-detail/features/12a1e28b-16c5-411a-b5fb-0ffcb0064e9e

