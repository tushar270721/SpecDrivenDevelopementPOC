# Feature Report: FE#768248

**Generated:** 6/1/2026, 3:28:42 PM

## Metadata

| Property | Value |
|---|---|
| ID | 768248 |
| Title | [PHA PSM] Import XML PHA Studies into Enablon PHA with canonical search |
| State | Active |
| Priority | 2 |
| Type | Feature |
| Assigned To | Godbole, Aparna |
| Created | 2/24/2026, 5:00:45 PM |
| Updated | 5/29/2026, 3:25:56 PM |
| URL | https://dev.azure.com/enablon/7977ed3d-15c4-4782-b1f7-d1f70660ff0c/_apis/wit/workItems/768248 |

## Description

### As a **PHA User** or **EHS System Administrator**,

- **I want to** automatically import legacy and current customer PHA studies from XML files into Enablon’s PHA using canonical search–based matching,
**so that** I can accelerate system adoption, ensure data consistency, reduce manual migration effort, and intelligently map data even when field names or structures differ across tools.
**Description** Organizations adopting Enablon PHA often possess extensive historical PHA data stored as XML files produced by legacy systems or competitor solutions. These XML structures frequently vary in naming conventions, field labels, or data organization. Manual migration is time‑consuming and prone to errors.
This feature introduces an enhanced automated import mechanism that:
- **Parses XML‑based PHA study structures**, including Study Metadata, Nodes, and Worksheets.
- Uses **canonical search and similarity matching** to intelligently identify, match, and map XML elements to Enablon’s PHA schema (e.g., mapping “Guide Words” vs. “GuideWords”, “Causes” vs. “Initiating Causes”).
- Performs consistency checks to ensure the imported study adheres to configured system requirements (e.g., methodology, risk matrix).
- Allows users to **review, accept, or decline** imported studies using existing review workflows.
This automated and intelligent import reduces adoption friction and enables organizations to bring historical PHA content into Enablon rapidly and reliably.
**User Value** This feature delivers significant benefits:
- **Reduces manual work:** Eliminates one-by-one migration of XML-based PHA studies.
- **Accelerates onboarding:** Organizations can adopt Enablon PHA more quickly, reducing time-to-value.
- **Ensures consistency:** Canonical search–based matching reduces the risk of data loss due to naming inconsistencies across legacy tools.
- **Improves data quality:** Automated checks ensure risk matrix and methodology align with configured system settings.
- **Unlocks historical insights:** Once imported, historical studies can be used for analytics, trending, and risk management.
**Scope** - Import of **XML files** containing legacy or customer PHA studies.
- Files containing **one single methodology only** (HAZID or HAZOP & LOPA).
Automated extraction and mapping of:
- Study details
- Nodes
- Worksheets
- (Optional) Sessions and Team Members
Canonical matching for:
- Field names
- Guidewords
- Deviations
- Worksheet element labels
- Node or section names
System validation including:
- Methodology validation
- Risk matrix compatibility
- XML structure integrity
**Not in Scope (Initial Release)** - Import of Word or Excel files (future enhancement).
- UI for manual correction, mapping, or field-by-field validation.
- Automatic resolution of risk matrix mismatches.
- Merging partial studies.
**User Guidance** - Errors, mismatches, or structural issues will be displayed post-upload.
Statuses available:
- **Imported**
- Study workflow will be similar to In progress status

## Acceptance Criteria

****  **File Upload & Basic Validation** - System must allow users to upload **XML files only**.
- If the uploaded file is **not XML**, the system must display an error message.
System must validate that the XML contains **only one methodology**:
- HAZID **or**
- HAZOP
 - If the XML contains **multiple methodologies**, import must be blocked with an error notification.
- System must validate that the XML meets the **prerequisite format and structure** provided to the user.
**2. Canonical Search–Based Field Matching** System must use Canonical matching to map XML elements to Enablon PHA schema fields even when names differ. Users should not be required to manually map or correct fields during import.
**3. Automated Import Process** System must automatically extract:
- Study metadata
- Nodes/subnodes
- Worksheets (guidewords, deviations, causes, consequences, safeguards, recommendations, etc.)
- Sessions and Team Members
 - System must map the extracted content to Enablon’s PHA schema automatically.
If the XML study’s **risk matrix does not match** the system’s configured risk matrix:
- Import must stop
- System must display an error
 After processing the XML, the system must provide:
- A success message
- Or detailed error messages
**4. Import Result & Review Workflow** - Successfully imported studies must be created with status: **Imported**.
- Users must be able to optionally **review and approve** the imported study via the existing review workflow.
- Users must have the option to **accept or decline** the imported study after review.
- User may optionally **revert the study to “In Progress”** to make changes.
**5. Error Handling & Notifications** System must display clear error messages when:
- XML parsing fails
- Required components are missing
- File contains incompatible methodology
- Risk matrix mismatch occurs
 - System must fail gracefully — no partial or incomplete study imports.
System must log: Any skipped items
 System must notify the user of all mismatches or anomalies after processing.
**6. Performance & Reliability Requirements** - System must be able to process XML files up to the maximum supported size within expected response time thresholds.
- System must handle sequential batch imports without degradation of performance.
All import events must be fully **auditable**, including:
- Timestamp
- User performing the import
- Uploaded file reference
- Import status

## Comments (4)

### Comment 1
**By:** Merwe, Mariante van der
**Date:** 4/10/2026, 1:37:31 PM

@Godbole, Aparna I can't see what changes were made, could you please let me know and then I can confirm

### Comment 2
**By:** Godbole, Aparna
**Date:** 4/9/2026, 7:53:55 PM

Hi @Merwe, Mariante van der The XML import approach is changed according te latest input from engineering team hence accordingly the feature scope and description is changed. please have a look to confirm you are aligned. cc @Tambe, Vitthal Tambe (Vitthal ) @Shrivastava, Vishakha

### Comment 3
**By:** Patil, Harsh Patil (Harsh )
**Date:** 4/9/2026, 12:00:47 PM

Hi @ , we have changed the technical scope of this feature. In first phase, we will add all the extraction logic in the PHA backend services instead of creating new function app to achieve fast fail approach. We will monitor the performance and stability initially, based on the metrics we will decide whether to migrate the logic into function app and keep it inside the PHA backend. CC @ @ @

### Comment 4
**By:** EU-s-productboard
**Date:** 2/24/2026, 5:00:45 PM

Productboard referencehttps://enablon.productboard.com/entity-detail/features/15e26453-6fbb-4086-a83d-26c89d0a5b54

