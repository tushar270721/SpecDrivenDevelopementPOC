---
Feature ID: FE#768248
Feature Title: [PHA PSM] Import XML PHA Studies into Enablon PHA with canonical search
Created: 6/1/2026
Last Updated: 6/1/2026
Status: DRAFT
---

# SPECIFICATION: Import XML PHA Studies with Canonical Search

## 1. Feature Overview

### Feature ID
FE#768248

### Feature Title
[PHA PSM] Import XML PHA Studies into Enablon PHA with canonical search

### Business Context
Organizations adopting Enablon PHA often possess extensive historical PHA data stored as XML files produced by legacy systems or competitor solutions. These XML structures frequently vary in naming conventions, field labels, or data organization. Manual migration is time-consuming and prone to errors.

### Feature Purpose
Enable PHA Users and EHS System Administrators to automatically import legacy and current customer PHA studies from XML files into Enablon's PHA using canonical search-based matching to intelligently map data even when field names or structures differ across tools.

### User Value Proposition
- **Reduces manual work:** Eliminates one-by-one migration of XML-based PHA studies
- **Accelerates onboarding:** Organizations can adopt Enablon PHA more quickly, reducing time-to-value
- **Ensures consistency:** Canonical search-based matching reduces the risk of data loss due to naming inconsistencies
- **Improves data quality:** Automated checks ensure risk matrix and methodology align with configured system settings
- **Unlocks historical insights:** Once imported, historical studies can be used for analytics, trending, and risk management

---

## 2. Business Requirements

### Primary Users
- **PHA Users:** Need to import XML PHA studies from legacy systems
- **EHS System Administrators:** Responsible for system configuration and data governance

### Key Business Objectives
1. Reduce adoption friction for organizations with existing PHA data
2. Enable rapid migration of historical PHA content
3. Maintain data quality and consistency during import
4. Provide audit trail for regulatory compliance
5. Support multiple XML structures through intelligent canonical matching

### Scope

#### In Scope
- Import of XML files containing legacy or customer PHA studies
- Files containing **one single methodology only** (HAZID or HAZOP & LOPA)
- Automated extraction and mapping of:
  - Study details (metadata)
  - Nodes and subnodes
  - Worksheets (guidewords, deviations, causes, consequences, safeguards, recommendations, etc.)
  - Optional: Sessions and Team Members
- Canonical matching for:
  - Field names
  - Guidewords
  - Deviations
  - Worksheet element labels
  - Node or section names
- System validation including:
  - Methodology validation
  - Risk matrix compatibility
  - XML structure integrity

#### Not in Scope (Initial Release)
- Import of Word or Excel files (future enhancement)
- UI for manual correction, mapping, or field-by-field validation
- Automatic resolution of risk matrix mismatches
- Merging partial studies

---

## 3. User Stories

### User Story 1: File Upload and Format Validation
**As a** PHA User,
**I want to** upload an XML file containing a PHA study,
**so that** I can begin the import process into Enablon PHA.

**Acceptance Criteria:**
- System accepts XML files via upload interface
- System displays error if uploaded file is not XML format
- System validates XML contains only one methodology (HAZID or HAZOP & LOPA)
- System blocks import with error if multiple methodologies detected
- System validates XML structure matches prerequisite format
- Users receive clear feedback on upload success or validation failure

**Test Scenario:** 
See section 4.1 - File Upload & Format Validation

---

### User Story 2: Intelligent Field Mapping
**As an** EHS System Administrator,
**I want** XML elements to be automatically mapped to Enablon PHA schema fields,
**so that** I don't need to manually correct or map fields during import.

**Acceptance Criteria:**
- System uses canonical search to match XML field names to Enablon schema fields
- System handles naming variations (e.g., "Guide Words" vs "GuideWords")
- System handles structure variations (e.g., "Causes" vs "Initiating Causes")
- Mapping occurs automatically without manual user intervention
- System provides summary of matched fields post-import

**Test Scenario:**
See section 4.2 - Canonical Search-Based Field Matching

---

### User Story 3: Automated Study Import
**As a** PHA User,
**I want** the system to automatically extract and import my study components,
**so that** the entire study is imported into Enablon PHA without manual data entry.

**Acceptance Criteria:**
- System automatically extracts study metadata
- System automatically extracts nodes and subnodes
- System automatically extracts worksheets with all components (guidewords, deviations, causes, consequences, safeguards, recommendations)
- System optionally extracts sessions and team members
- System maps extracted content to Enablon's PHA schema
- Imported study is created with status "Imported"
- System provides success message upon completion

**Test Scenario:**
See section 4.3 - Automated Import Process

---

### User Story 4: Risk Matrix Validation
**As an** EHS System Administrator,
**I want** the system to validate that imported study's risk matrix matches configured system risk matrix,
**so that** I ensure consistency and prevent incompatible data entry.

**Acceptance Criteria:**
- System validates XML study's risk matrix against system configuration
- System blocks import if risk matrix does not match
- System displays clear error message explaining mismatch
- System does not create partial or incomplete studies
- User can review error and upload corrected XML

**Test Scenario:**
See section 4.4 - Risk Matrix Validation

---

### User Story 5: Review and Approval Workflow
**As a** PHA Reviewer,
**I want to** review and approve imported studies using existing review workflows,
**so that** I ensure data quality before final acceptance.

**Acceptance Criteria:**
- Imported studies are available for review via existing review workflow
- Users can accept or decline imported study after review
- Users can optionally revert study to "In Progress" status to make changes
- Review status and reviewer information are tracked
- All review actions are auditable

**Test Scenario:**
See section 4.5 - Import Result & Review Workflow

---

### User Story 6: Error Handling and Notifications
**As a** PHA User,
**I want** clear error messages when import fails,
**so that** I understand what went wrong and can take corrective action.

**Acceptance Criteria:**
- System displays specific error messages for:
  - XML parsing failures
  - Missing required components
  - Incompatible methodology
  - Risk matrix mismatch
- System fails gracefully (no partial imports)
- System logs all skipped items and anomalies
- User is notified of all mismatches or anomalies post-processing
- All import events are fully auditable (timestamp, user, file reference, status)

**Test Scenario:**
See section 4.6 - Error Handling & Notifications

---

### User Story 7: Performance and Audit Trail
**As an** EHS System Administrator,
**I want** the system to handle large XML files efficiently and maintain audit records,
**so that** I can track imports for compliance and ensure system reliability.

**Acceptance Criteria:**
- System processes XML files up to maximum supported size within expected response time
- System handles sequential batch imports without performance degradation
- All import events are fully auditable including: timestamp, user, file reference, import status
- System provides audit report for imported studies
- System maintains performance metrics for monitoring

**Test Scenario:**
See section 4.7 - Performance & Reliability

---

## 4. Acceptance Criteria & Test Scenarios

### 4.1 File Upload & Basic Validation

**Acceptance Criteria:**
- System must allow users to upload **XML files only**
- If the uploaded file is **not XML**, the system must display an error message
- System must validate that the XML contains **only one methodology**:
  - HAZID **or**
  - HAZOP
- If the XML contains **multiple methodologies**, import must be blocked with an error notification
- System must validate that the XML meets the **prerequisite format and structure** provided to the user

**Test Scenarios:**

**SC-1.1: Valid XML Upload - HAZID Study**
- **Preconditions:** User is logged in as PHA User; valid HAZID XML file is available
- **Given:** User navigates to Import Studies page
- **When:** User uploads valid HAZID XML file
- **Then:** System accepts file and displays success message; Study is ready for import preview
- **Expected Result:** XML file is parsed successfully; import process initiates
- **Test Data:** Valid HAZID XML file (e.g., sample_hazid_study.xml)

**SC-1.2: Valid XML Upload - HAZOP Study**
- **Preconditions:** User is logged in as PHA User; valid HAZOP XML file is available
- **Given:** User navigates to Import Studies page
- **When:** User uploads valid HAZOP XML file
- **Then:** System accepts file and displays success message; Study is ready for import preview
- **Expected Result:** XML file is parsed successfully; import process initiates
- **Test Data:** Valid HAZOP XML file (e.g., sample_hazop_study.xml)

**SC-1.3: Invalid File Format - Excel Upload**
- **Preconditions:** User is logged in as PHA User
- **Given:** User navigates to Import Studies page
- **When:** User attempts to upload Excel file (.xlsx)
- **Then:** System rejects file with error message: "Only XML files are supported"
- **Expected Result:** File is not processed; error dialog displayed
- **Test Data:** sample_study.xlsx

**SC-1.4: Invalid File Format - Word Upload**
- **Preconditions:** User is logged in as PHA User
- **Given:** User navigates to Import Studies page
- **When:** User attempts to upload Word document (.docx)
- **Then:** System rejects file with error message: "Only XML files are supported"
- **Expected Result:** File is not processed; error dialog displayed
- **Test Data:** sample_study.docx

**SC-1.5: Invalid File Format - Text File Upload**
- **Preconditions:** User is logged in as PHA User
- **Given:** User navigates to Import Studies page
- **When:** User attempts to upload text file (.txt)
- **Then:** System rejects file with error message: "Only XML files are supported"
- **Expected Result:** File is not processed; error dialog displayed
- **Test Data:** sample_study.txt (renamed XML file or plain text)

**SC-1.6: XML Structure Validation - Missing Required Element**
- **Preconditions:** User is logged in as PHA User; XML file with missing Study ID exists
- **Given:** User navigates to Import Studies page
- **When:** User uploads XML file missing required Study ID element
- **Then:** System rejects file with error message: "XML structure is invalid - missing required element: StudyID"
- **Expected Result:** File is not processed; import blocked
- **Test Data:** invalid_structure_missing_study_id.xml

**SC-1.7: XML Structure Validation - Malformed XML**
- **Preconditions:** User is logged in as PHA User; malformed XML file exists
- **Given:** User navigates to Import Studies page
- **When:** User uploads malformed XML file (unclosed tag, invalid syntax)
- **Then:** System rejects file with error message: "XML parsing failed - invalid XML syntax"
- **Expected Result:** File is not processed; import blocked
- **Test Data:** malformed_structure.xml

**SC-1.8: Multiple Methodologies - HAZID + HAZOP**
- **Preconditions:** User is logged in as PHA User; XML file containing both HAZID and HAZOP studies exists
- **Given:** User navigates to Import Studies page
- **When:** User uploads XML file with multiple methodologies
- **Then:** System rejects file with error message: "XML contains multiple methodologies. Only one methodology (HAZID or HAZOP) is supported per import"
- **Expected Result:** File is not processed; import blocked
- **Test Data:** mixed_hazid_hazop_study.xml

**SC-1.9: Single Methodology - HAZID Only (Valid)**
- **Preconditions:** User is logged in as PHA User; HAZID-only XML file exists
- **Given:** User navigates to Import Studies page
- **When:** User uploads XML file containing only HAZID studies
- **Then:** System accepts file and validates structure
- **Expected Result:** File passes methodology and structure validation; import proceeds
- **Test Data:** hazid_only_study.xml

**SC-1.10: Single Methodology - HAZOP Only (Valid)**
- **Preconditions:** User is logged in as PHA User; HAZOP-only XML file exists
- **Given:** User navigates to Import Studies page
- **When:** User uploads XML file containing only HAZOP studies
- **Then:** System accepts file and validates structure
- **Expected Result:** File passes methodology and structure validation; import proceeds
- **Test Data:** hazop_only_study.xml

---

### 4.2 Canonical Search-Based Field Matching

**Acceptance Criteria:**
- System must use Canonical matching to map XML elements to Enablon PHA schema fields even when names differ
- Users should not be required to manually map or correct fields during import

**Test Scenarios:**

**SC-2.1: Field Name Variation - "Guide Words" vs "GuideWords"**
- **Preconditions:** XML study uses "Guide Words" field; Enablon schema uses "GuideWords"
- **Given:** XML file is uploaded with "Guide Words" element
- **When:** System processes canonical search matching
- **Then:** System matches "Guide Words" to "GuideWords" field
- **Expected Result:** Field is correctly mapped; no manual intervention required
- **Test Data:** XML with guide_words_variation_format.xml

**SC-2.2: Field Name Variation - "Causes" vs "Initiating Causes"**
- **Preconditions:** XML study uses "Initiating Causes"; Enablon schema uses "Causes"
- **Given:** XML file is uploaded with "Initiating Causes" element
- **When:** System processes canonical search matching
- **Then:** System matches "Initiating Causes" to "Causes" field
- **Expected Result:** Field is correctly mapped; no manual intervention required
- **Test Data:** XML with initiating_causes_format.xml

**SC-2.3: Field Name Variation - "Consequences" vs "Hazard & Effects"**
- **Preconditions:** XML study uses "Hazard & Effects"; Enablon schema uses "Consequences"
- **Given:** XML file is uploaded with "Hazard & Effects" element
- **When:** System processes canonical search matching
- **Then:** System matches "Hazard & Effects" to "Consequences" field
- **Expected Result:** Field is correctly mapped; no manual intervention required
- **Test Data:** XML with hazard_effects_format.xml

**SC-2.4: Case Sensitivity Handling - "safeguards" vs "SAFEGUARDS" vs "Safeguards"**
- **Preconditions:** XML uses lowercase "safeguards"; Enablon uses title case "Safeguards"
- **Given:** XML file is uploaded with case variation in field names
- **When:** System processes canonical search matching
- **Then:** System matches case-variant fields to canonical Enablon fields
- **Expected Result:** Field is correctly mapped; no manual intervention required
- **Test Data:** XML with case_variations.xml

**SC-2.5: Field Name Variation - "Risk Assessment" vs "Risk Matrix"**
- **Preconditions:** XML study uses "Risk Assessment"; Enablon schema uses "Risk Matrix"
- **Given:** XML file is uploaded with "Risk Assessment" element
- **When:** System processes canonical search matching
- **Then:** System matches "Risk Assessment" to "Risk Matrix" field
- **Expected Result:** Field is correctly mapped; no manual intervention required
- **Test Data:** XML with risk_assessment_format.xml

**SC-2.6: Structure Variation - Nested Elements**
- **Preconditions:** XML uses nested structure for guidewords; Enablon expects flat structure
- **Given:** XML file is uploaded with differently structured elements
- **When:** System processes canonical search matching and structure flattening
- **Then:** System correctly extracts and maps nested elements to flat schema
- **Expected Result:** All elements extracted and mapped correctly; no manual intervention required
- **Test Data:** XML with nested_guidewords_structure.xml

**SC-2.7: Field Abbreviation - "ID" vs "Identifier"**
- **Preconditions:** XML uses "ID"; Enablon uses "Identifier"
- **Given:** XML file is uploaded with abbreviated field names
- **When:** System processes canonical search matching
- **Then:** System matches "ID" to "Identifier" field
- **Expected Result:** Field is correctly mapped; no manual intervention required
- **Test Data:** XML with abbreviated_fields.xml

**SC-2.8: Multiple Naming Variations in Single File**
- **Preconditions:** XML file contains multiple naming variations
- **Given:** XML file is uploaded with mixed naming conventions throughout
- **When:** System processes canonical search matching for all fields
- **Then:** System correctly maps all variations to Enablon schema fields
- **Expected Result:** All fields are mapped correctly; no data loss or misalignment
- **Test Data:** XML with comprehensive_naming_variations.xml

---

### 4.3 Automated Import Process

**Acceptance Criteria:**
- System must automatically extract study metadata, nodes, worksheets, and optional sessions
- System must map extracted content to Enablon's PHA schema automatically
- If the XML study's risk matrix does not match system's configured risk matrix: import must stop with error
- After processing, system must provide success message or detailed error messages

**Test Scenarios:**

**SC-3.1: Complete Study Import with All Components**
- **Preconditions:** Valid XML file with study metadata, nodes, worksheets exists
- **Given:** XML file is uploaded and validated
- **When:** System initiates automated import process
- **Then:** System extracts study metadata, nodes, and worksheets; Maps to Enablon schema; Creates study successfully
- **Expected Result:** Study is created with all components; Status: "Imported"
- **Test Data:** complete_study_with_all_components.xml

**SC-3.2: Study Metadata Import**
- **Preconditions:** XML study contains metadata (study name, description, created date, etc.)
- **Given:** XML file is uploaded and validated
- **When:** System extracts study metadata
- **Then:** System maps metadata to Enablon study fields
- **Expected Result:** Study metadata is correctly populated in Enablon
- **Test Data:** XML with study metadata (e.g., name, description, project, methodology)

**SC-3.3: Nodes and Subnodes Import**
- **Preconditions:** XML contains study with 5 nodes and 3 subnodes
- **Given:** XML file is uploaded with hierarchical node structure
- **When:** System extracts and imports nodes
- **Then:** System creates all nodes and subnodes with correct hierarchy; All node properties preserved
- **Expected Result:** Node structure matches source XML; Hierarchy maintained
- **Test Data:** XML with hierarchical_node_structure.xml (5 nodes, 3 subnodes total)

**SC-3.4: Worksheet Import - Guidewords**
- **Preconditions:** XML contains 10 guidewords in worksheet
- **Given:** XML file is uploaded
- **When:** System extracts worksheet guidewords
- **Then:** System imports all 10 guidewords; Maps to Enablon guideword reference data
- **Expected Result:** All guidewords are imported and linked to worksheet
- **Test Data:** XML with 10_guidewords.xml

**SC-3.5: Worksheet Import - Deviations**
- **Preconditions:** XML contains 25 deviations with descriptions
- **Given:** XML file is uploaded
- **When:** System extracts worksheet deviations
- **Then:** System imports all 25 deviations with descriptions and metadata
- **Expected Result:** All deviations imported; Descriptions preserved
- **Test Data:** XML with 25_deviations.xml

**SC-3.6: Worksheet Import - Complete Rows (Guidewords, Deviations, Causes, Consequences, Safeguards, Recommendations)**
- **Preconditions:** XML contains worksheet with 20 complete rows
- **Given:** XML file is uploaded
- **When:** System extracts worksheet rows with all columns
- **Then:** System imports all 20 rows with complete data for each column
- **Expected Result:** All worksheet data preserved; Relationships maintained
- **Test Data:** XML with 20_complete_worksheet_rows.xml

**SC-3.7: Sessions and Team Members Import (Optional)**
- **Preconditions:** XML contains session information and team member assignments
- **Given:** XML file is uploaded with optional session data
- **When:** System extracts sessions and team members
- **Then:** System optionally imports sessions and creates team member assignments
- **Expected Result:** Sessions created with attendees; Team members assigned to study
- **Test Data:** XML with sessions_and_team_members.xml

**SC-3.8: Study Without Optional Components (Minimal)**
- **Preconditions:** XML contains only study metadata and nodes (no sessions)
- **Given:** XML file is uploaded with minimal components
- **When:** System imports study
- **Then:** System creates study with required components; Skips optional components gracefully
- **Expected Result:** Study created successfully; Optional components not required
- **Test Data:** XML with minimal_study_data.xml

**SC-3.9: Large Study Import (500+ Worksheet Rows)**
- **Preconditions:** XML contains study with 500+ worksheet rows
- **Given:** XML file is uploaded
- **When:** System processes large study import
- **Then:** System imports all rows within performance SLA; No timeout or failure
- **Expected Result:** All 500+ rows imported; Study created successfully
- **Test Data:** large_study_500_plus_rows.xml

**SC-3.10: Study Import Success Message**
- **Preconditions:** XML import is successful
- **Given:** System completes import process
- **When:** Import completes without errors
- **Then:** System displays success message with study details (Study ID, Name, Component Count)
- **Expected Result:** User receives confirmation of successful import
- **Test Data:** Any valid XML file

---

### 4.4 Risk Matrix Validation

**Acceptance Criteria:**
- If the XML study's risk matrix does not match the system's configured risk matrix: import must stop
- System must display an error explaining mismatch
- No partial or incomplete study imports occur

**Test Scenarios:**

**SC-4.1: Risk Matrix Match - 5x5 Matrix**
- **Preconditions:** XML study uses 5x5 risk matrix; System configured for 5x5
- **Given:** XML file is uploaded
- **When:** System validates risk matrix
- **Then:** Risk matrices match; Import proceeds
- **Expected Result:** Validation passes; Import continues
- **Test Data:** XML with 5x5_risk_matrix.xml

**SC-4.2: Risk Matrix Mismatch - 5x5 vs 3x3**
- **Preconditions:** XML study uses 5x5 risk matrix; System configured for 3x3
- **Given:** XML file is uploaded
- **When:** System validates risk matrix
- **Then:** Risk matrices do not match; Import is blocked
- **Expected Result:** Error message displayed: "Risk matrix mismatch: XML contains 5x5 matrix but system is configured for 3x3. Import blocked."
- **Test Data:** XML with 5x5_risk_matrix_against_3x3_system.xml

**SC-4.3: Risk Matrix Mismatch - Different Risk Values**
- **Preconditions:** XML risk matrix has different probability/severity values than system configuration
- **Given:** XML file is uploaded
- **When:** System validates risk matrix
- **Then:** Risk matrix values do not match; Import is blocked
- **Expected Result:** Error message displayed: "Risk matrix configuration mismatch. Import blocked."
- **Test Data:** XML with mismatched_risk_values.xml

**SC-4.4: Risk Matrix Not Defined in XML**
- **Preconditions:** XML study does not include risk matrix definition
- **Given:** XML file without explicit risk matrix is uploaded
- **When:** System attempts to validate risk matrix
- **Then:** System uses default risk matrix for validation; Proceeds if default matches system config
- **Expected Result:** System either validates against default or displays error if default differs
- **Test Data:** XML without_explicit_risk_matrix.xml

**SC-4.5: No Risk Data - Optional Validation**
- **Preconditions:** XML study contains no risk assessments
- **Given:** XML file without risk data is uploaded
- **When:** System processes import
- **Then:** System allows import to proceed; Study created without risk assessments
- **Expected Result:** Study imported successfully; Risk assessments can be added later
- **Test Data:** XML without_risk_assessments.xml

**SC-4.6: Risk Matrix Validation - Error Message Detail**
- **Preconditions:** Risk matrix mismatch detected
- **Given:** XML file with incompatible risk matrix uploaded
- **When:** System detects mismatch and generates error
- **Then:** Error message includes: expected matrix config, actual matrix in XML, resolution steps
- **Expected Result:** User receives detailed error explaining mismatch and corrective action
- **Test Data:** XML with detailed_risk_matrix_mismatch.xml

---

### 4.5 Import Result & Review Workflow

**Acceptance Criteria:**
- Successfully imported studies must be created with status: **Imported**
- Users must be able to optionally review and approve the imported study via existing review workflow
- Users must have the option to accept or decline the imported study after review
- User may optionally revert the study to "In Progress" to make changes

**Test Scenarios:**

**SC-5.1: Study Created with "Imported" Status**
- **Preconditions:** XML import completed successfully
- **Given:** Study is imported
- **When:** System creates study
- **Then:** Study is created with status: "Imported"
- **Expected Result:** Study appears in study list with "Imported" status
- **Test Data:** Any successful import

**SC-5.2: Review Workflow - Reviewer Accesses Imported Study**
- **Preconditions:** Study is in "Imported" status; Reviewer is assigned
- **Given:** Reviewer navigates to study review
- **When:** Reviewer opens imported study for review
- **Then:** Study displays in review mode; Reviewer can view all study data
- **Expected Result:** Study is accessible for review via existing workflow
- **Test Data:** Successfully imported study

**SC-5.3: Reviewer Adds Comments to Imported Study**
- **Preconditions:** Study is in review; Reviewer is reviewing
- **Given:** Reviewer navigates to comments section
- **When:** Reviewer adds review comments
- **Then:** Comments are saved and linked to study review
- **Expected Result:** Review comments recorded; Visible to study owner
- **Test Data:** Review workflow comment interface

**SC-5.4: Study Approval - Reviewer Approves Study**
- **Preconditions:** Study is in "Imported" status; Review is complete
- **Given:** Reviewer completes review and decides to approve
- **When:** Reviewer clicks "Approve" button
- **Then:** Study status changes to "Approved"; Approval timestamp recorded
- **Expected Result:** Study approval is finalized; Study accessible for use
- **Test Data:** Study in review awaiting approval

**SC-5.5: Study Decline - Reviewer Declines Study**
- **Preconditions:** Study is in "Imported" status; Review is complete
- **Given:** Reviewer completes review and decides to decline
- **When:** Reviewer clicks "Decline" button and provides reason
- **Then:** Study status changes to "Declined"; Decline reason recorded
- **Expected Result:** Study is marked as declined; Available for re-import with corrections
- **Test Data:** Study in review awaiting decision

**SC-5.6: Revert Study to "In Progress" for Changes**
- **Preconditions:** Study is in "Imported" status; User has edit permissions
- **Given:** User opens imported study
- **When:** User clicks "Edit Study" or "Revert to In Progress"
- **Then:** Study status changes to "In Progress"; Study becomes editable
- **Expected Result:** User can modify study data; Changes can be made
- **Test Data:** Imported study with edit functionality

**SC-5.7: Make Changes to Study in "In Progress" Status**
- **Preconditions:** Study is in "In Progress" status after revert
- **Given:** User is editing study
- **When:** User modifies study data (adds nodes, edits worksheets)
- **Then:** Changes are saved; Study maintains "In Progress" status
- **Expected Result:** Modified study ready for re-review or completion
- **Test Data:** Imported study in edit mode

**SC-5.8: Re-submit Study for Review After Changes**
- **Preconditions:** Study modified and ready for re-review
- **Given:** User completes editing and submits study
- **When:** User clicks "Submit for Review"
- **Then:** Study status changes to "Pending Review"; Available for reviewer
- **Expected Result:** Modified study enters review workflow again
- **Test Data:** Modified study submission

**SC-5.9: Review Status Tracking - Pending**
- **Preconditions:** Study submitted for review
- **Given:** Study is awaiting reviewer action
- **When:** System displays study status
- **Then:** Status shows "Pending Review" or "Awaiting Approval"
- **Expected Result:** User can track review status
- **Test Data:** Study in pending review state

**SC-5.10: Review Status Tracking - Completed**
- **Preconditions:** Study review completed and approved
- **Given:** Study review is finalized
- **When:** System displays study status
- **Then:** Status shows "Approved" with reviewer name and date
- **Expected Result:** User can verify review completion and approver details
- **Test Data:** Approved imported study

---

### 4.6 Error Handling & Notifications

**Acceptance Criteria:**
- System must display clear error messages when XML parsing fails, required components are missing, file contains incompatible methodology, or risk matrix mismatch occurs
- System must fail gracefully — no partial or incomplete study imports
- System must log any skipped items and notify the user of all mismatches or anomalies after processing
- All import events must be fully auditable

**Test Scenarios:**

**SC-6.1: XML Parsing Error - Unclosed Tag**
- **Preconditions:** XML file contains syntax error (unclosed tag)
- **Given:** XML file is uploaded
- **When:** System attempts to parse XML
- **Then:** System displays error: "XML parsing failed - unclosed tag at line 45: <Study>"
- **Expected Result:** Import blocked; No partial study created; User informed of specific error
- **Test Data:** XML with unclosed_tag_syntax_error.xml

**SC-6.2: Missing Required Component - No Study ID**
- **Preconditions:** XML file missing study ID element
- **Given:** XML file is uploaded
- **When:** System validates required components
- **Then:** System displays error: "Missing required component: Study ID"
- **Expected Result:** Import blocked; User informed of missing component
- **Test Data:** XML with missing_study_id.xml

**SC-6.3: Missing Required Component - No Methodology**
- **Preconditions:** XML file missing methodology specification
- **Given:** XML file is uploaded
- **When:** System validates required components
- **Then:** System displays error: "Missing required component: Methodology (HAZID or HAZOP)"
- **Expected Result:** Import blocked; User informed of missing component
- **Test Data:** XML with missing_methodology.xml

**SC-6.4: Incompatible Methodology - Both HAZID and HAZOP**
- **Preconditions:** XML file contains both HAZID and HAZOP elements
- **Given:** XML file is uploaded
- **When:** System validates methodology uniqueness
- **Then:** System displays error: "XML contains multiple methodologies. Only one methodology allowed per import"
- **Expected Result:** Import blocked; User informed of invalid configuration
- **Test Data:** XML with mixed_methodologies.xml

**SC-6.5: Risk Matrix Mismatch - Detailed Error**
- **Preconditions:** XML risk matrix does not match system configuration
- **Given:** XML file is uploaded
- **When:** System validates risk matrix
- **Then:** System displays detailed error: "Risk matrix mismatch: Expected 5x5 but XML contains 3x3 matrix"
- **Expected Result:** Import blocked with clear explanation of mismatch
- **Test Data:** XML with incompatible_risk_matrix.xml

**SC-6.6: Graceful Failure - No Partial Import**
- **Preconditions:** Import validation fails at step 3 of 5
- **Given:** XML file fails validation mid-process
- **When:** System encounters validation error
- **Then:** System rolls back any partial processing; No incomplete study is created
- **Expected Result:** Database remains clean; No orphaned or partial data
- **Test Data:** XML that fails at intermediate validation step

**SC-6.7: Skipped Items Logging - Invalid Row Data**
- **Preconditions:** XML contains worksheet row with invalid data
- **Given:** XML file is uploaded with one invalid row out of 20
- **When:** System processes worksheet rows
- **Then:** System logs skipped row and includes reason in notification
- **Expected Result:** Valid rows imported; User notified of skipped row with reason
- **Test Data:** XML with one_invalid_worksheet_row.xml

**SC-6.8: Anomaly Notification - Unrecognized Fields**
- **Preconditions:** XML contains fields not recognized in Enablon schema
- **Given:** XML file is uploaded with extra or unrecognized fields
- **When:** System processes import
- **Then:** System logs unrecognized fields and includes in post-import notification
- **Expected Result:** Import succeeds; User notified of unrecognized fields that were skipped
- **Test Data:** XML with unrecognized_fields.xml

**SC-6.9: Error Message Specificity - Line Number**
- **Preconditions:** XML error occurs at specific line
- **Given:** XML file with error is uploaded
- **When:** System detects error
- **Then:** Error message includes specific line number and context
- **Expected Result:** User can locate and correct error using line reference
- **Test Data:** XML with error at line 127

**SC-6.10: Post-Import Anomaly Summary Report**
- **Preconditions:** XML import completes with warnings
- **Given:** Import succeeds with some anomalies detected
- **When:** Import completes
- **Then:** System displays summary report listing all anomalies, skipped items, and warnings
- **Expected Result:** User receives comprehensive overview of import status
- **Test Data:** XML with multiple_anomalies.xml

---

### 4.7 Performance & Reliability Requirements

**Acceptance Criteria:**
- System must be able to process XML files up to the maximum supported size within expected response time thresholds
- System must handle sequential batch imports without degradation of performance
- All import events must be fully auditable with timestamp, user, file reference, and import status

**Test Scenarios:**

**SC-7.1: File Size Performance - 10 MB XML**
- **Preconditions:** 10 MB XML file is available
- **Given:** System is configured for maximum file size
- **When:** 10 MB XML file is uploaded and imported
- **Then:** Import completes within 30 seconds; No timeout
- **Expected Result:** Large file processed efficiently
- **Test Data:** 10_MB_study.xml

**SC-7.2: File Size Performance - 50 MB XML**
- **Preconditions:** 50 MB XML file is available
- **Given:** System is configured for maximum file size
- **When:** 50 MB XML file is uploaded and imported
- **Then:** Import completes within 60 seconds; No timeout
- **Expected Result:** Very large file processed within acceptable timeframe
- **Test Data:** 50_MB_study.xml

**SC-7.3: Large Worksheet Performance - 1000 Rows**
- **Preconditions:** XML contains study with 1000 worksheet rows
- **Given:** XML file is uploaded
- **When:** System imports 1000-row worksheet
- **Then:** Import completes within expected SLA; All rows imported
- **Expected Result:** Performance acceptable for large datasets
- **Test Data:** study_with_1000_worksheet_rows.xml

**SC-7.4: Concurrent Batch Import - No Degradation**
- **Preconditions:** Two users upload XML files simultaneously
- **Given:** User 1 uploads XML file; User 2 uploads XML file at same time
- **When:** System processes both imports concurrently
- **Then:** Both imports complete without degradation; Each completes within SLA
- **Expected Result:** System handles concurrent batch imports efficiently
- **Test Data:** Two simultaneous upload operations

**SC-7.5: Sequential Batch Import - 10 Files**
- **Preconditions:** 10 XML files are queued for sequential import
- **Given:** System processes imports one after another
- **When:** All 10 files are imported sequentially
- **Then:** Last import completes within expected SLA; No cumulative degradation
- **Expected Result:** Performance remains consistent across sequential batch
- **Test Data:** Batch of 10 XML files

**SC-7.6: Audit Trail - Import Event Recorded**
- **Preconditions:** XML import completes successfully
- **Given:** Import event occurs
- **When:** System creates audit log entry
- **Then:** Log includes: timestamp, user ID, filename, import status, study ID created
- **Expected Result:** Complete audit trail captured for compliance
- **Test Data:** Any successful import

**SC-7.7: Audit Trail - User Information**
- **Preconditions:** Specific user performs import
- **Given:** User "john.doe@example.com" uploads and imports XML
- **When:** Import completes
- **Then:** Audit log records user: "john.doe@example.com"
- **Expected Result:** User identity captured for accountability
- **Test Data:** Import by named user account

**SC-7.8: Audit Trail - File Reference**
- **Preconditions:** XML file is imported
- **Given:** File "pump_study_2026.xml" is uploaded
- **When:** Import completes
- **Then:** Audit log references: filename and upload timestamp
- **Expected Result:** File reference available for traceability
- **Test Data:** Named XML file import

**SC-7.9: Audit Trail - Import Status**
- **Preconditions:** Multiple imports occur with different outcomes
- **Given:** Import 1 succeeds, Import 2 fails, Import 3 succeeds with warnings
- **When:** System logs each import
- **Then:** Audit trail records: Success, Failed (with error reason), Success with Warnings
- **Expected Result:** Status clearly documented for each import event
- **Test Data:** Mixed import outcomes

**SC-7.10: Audit Report Generation**
- **Preconditions:** Multiple imports have been performed
- **Given:** Administrator requests audit report for date range
- **When:** Administrator generates audit report
- **Then:** Report displays all imports with: timestamp, user, file, status, study ID
- **Expected Result:** Audit report available for compliance review
- **Test Data:** Historical import data

---

## 5. Edge Cases & Exploratory Tests

### Edge Cases to Consider

1. **Empty XML File**
   - System must detect and reject empty XML files
   - Expected Result: Error message "XML file is empty or invalid"

2. **XML with BOM (Byte Order Mark)**
   - System must handle XML files with UTF-8 BOM
   - Expected Result: File parsed correctly despite BOM presence

3. **Very Long Field Values (1000+ characters)**
   - System must handle worksheet fields with extended text
   - Expected Result: All characters preserved; No truncation

4. **Special Characters in XML Data**
   - XML containing: & < > " ' ™ © etc.
   - Expected Result: Characters properly escaped; Data preserved

5. **Study with No Worksheet Data**
   - XML containing study metadata and nodes but no worksheet rows
   - Expected Result: Study created successfully; Empty worksheet

6. **Duplicate Field Names in XML**
   - XML containing multiple fields with same name
   - Expected Result: System handles gracefully; Last occurrence used or error thrown

7. **Missing Optional Guidewords**
   - XML with partial guideword set (e.g., 4 guidewords instead of standard 10)
   - Expected Result: Study imported with available guidewords

8. **Encoding Issues - Latin1 vs UTF-8**
   - XML file with different character encoding than expected
   - Expected Result: System detects encoding; Converts or displays error

9. **Circular References in Node Structure**
   - XML with nodes referencing each other in circular manner
   - Expected Result: System detects and breaks circular reference; Imports safely

10. **Study with 0 Nodes**
    - XML with study but no nodes defined
    - Expected Result: Study created successfully; Empty node list

---

## 6. Data Requirements

### XML Schema Requirements

**Study Metadata:**
- Study ID (Required)
- Study Name (Required)
- Study Description (Optional)
- Methodology (Required): HAZID or HAZOP
- Created Date (Optional)
- Project/Facility Reference (Optional)
- Risk Matrix Configuration (Required if study contains risk data)

**Node Structure:**
- Node ID (Required)
- Node Name/Description (Required)
- Parent Node ID (Optional - for subnodes)
- Node Type (Optional)
- Node Sequence (Optional)

**Worksheet Data:**
- Guidewords (Optional - depends on methodology)
- Deviations (Required)
- Causes (Required)
- Consequences (Required)
- Safeguards (Optional)
- Recommendations (Optional)
- Risk Assessment Data (Optional)
- Remarks (Optional)

**Sessions and Team Members (Optional):**
- Session ID (Optional)
- Session Date (Optional)
- Session Objectives (Optional)
- Team Member Name (Optional)
- Team Member Role (Optional)
- Participant Status (Optional)

### Risk Matrix Mapping

**Standard 5x5 Risk Matrix:**
| Probability \ Severity | Minor | Significant | Major | Severe | Catastrophic |
|---|---|---|---|---|---|
| Remote | Low | Low | Low | Medium | Medium |
| Unlikely | Low | Low | Medium | Medium | High |
| Possible | Low | Medium | Medium | High | High |
| Likely | Medium | Medium | High | High | Critical |
| Almost Certain | Medium | High | High | Critical | Critical |

**System will validate XML risk matrix matches configured system matrix**

---

## 7. API & System Integration Requirements

### Internal APIs Used

**Study Management API:**
- `POST /api/phastudy/create` - Create new study from import
- `POST /api/phastudy/{studyId}/nodes` - Add nodes to study
- `POST /api/phastudy/{studyId}/worksheet` - Add worksheet rows

**Reference Data API:**
- `GET /api/reference/methodologies` - Validate methodology
- `GET /api/reference/riskmatrix` - Validate risk matrix
- `GET /api/reference/guidewords` - Map guidewords

**Audit API:**
- `POST /api/audit/log` - Log import event
- `GET /api/audit/logs?action=IMPORT` - Retrieve import audit logs

### External Dependencies

**None - All import logic resides in PHA backend services**

According to technical decisions documented in comments:
- Import extraction logic implemented in PHA backend services (Phase 1)
- No separate Azure Function App used
- Performance and stability monitored for potential future migration to Function App

---

## 8. Non-Functional Requirements

### Performance SLAs
- XML file upload and import: < 30 seconds for typical file (< 10 MB)
- Large file import (10-50 MB): < 60 seconds
- Search/canonical matching per field: < 100 ms
- Concurrent import handling: Support 5+ simultaneous uploads
- Sequential batch processing: No degradation across 20+ batch items

### Reliability & Availability
- 99.5% availability for import service
- Graceful failure handling (no partial imports)
- Automatic retry for transient failures (3 attempts)
- Complete audit trail for all import operations

### Security Requirements
- File upload size limit: 50 MB maximum
- Virus/malware scanning on uploaded files (pre-processing)
- User authentication required for import
- Audit logging with user attribution
- Encrypted transmission (HTTPS/TLS)
- No sensitive data exposure in error messages

### Scalability
- Support XML files up to 50 MB
- Support studies with up to 1000 worksheet rows
- Handle concurrent batch imports without degradation
- Support multiple concurrent users

---

## 9. Implementation Considerations

### Technical Notes
1. Canonical search implementation should use fuzzy string matching algorithms (Levenshtein distance, Jaro-Winkler)
2. Import processing should be transactional - all or nothing approach
3. Error handling should be specific and actionable for end-users
4. Performance monitoring should track import duration and file sizes for optimization
5. Consider implementing async processing for very large files (> 50 MB) with background queue

### Phase 1 Implementation (Current)
- All import logic in PHA backend services
- Real-time processing (synchronous)
- Performance monitored for decision on Phase 2 migration to Function App

### Future Enhancements (Out of Scope)
- Excel and Word file import
- Manual field mapping UI
- Automatic risk matrix adjustment
- Partial study merging
- Batch template/profile creation

---

## 10. Success Criteria

✅ **Specification is successful if:**
- [x] All acceptance criteria are clear and testable
- [x] Test scenarios cover all acceptance criteria
- [x] Edge cases and exploratory tests documented
- [x] Data schema requirements defined
- [x] API and integration requirements documented
- [x] Non-functional requirements specified
- [x] Performance SLAs defined
- [x] Implementation considerations noted
- [x] Risk matrix validation rules clear
- [x] Audit trail requirements specified
- [x] Security requirements documented
- [x] Ready for test case generation

---

## 11. Glossary & References

**Canonical Search:** Intelligent matching algorithm that identifies equivalent field names and structures despite naming variations

**Methodology:** PHA analysis approach (HAZID or HAZOP) used in the study

**Risk Matrix:** Grid mapping probability and severity to risk levels

**Guidewords:** Standard HAZOP/HAZID question prompts (e.g., "No", "More", "Less")

**Deviation:** Identified deviation from intended design or operation

**Azure DevOps Reference:** https://dev.azure.com/enablon/7977ed3d-15c4-4782-b1f7-d1f70660ff0c/_apis/wit/workItems/768248

**Productboard Reference:** https://enablon.productboard.com/entity-detail/features/15e26453-6fbb-4086-a83d-26c89d0a5b54

---

## Document Information

**Document Status:** DRAFT - Ready for Review  
**Created Date:** 6/1/2026  
**Last Updated:** 6/1/2026  
**Version:** 1.0  
**Author:** AI Assistant (GitHub Copilot)  
**Reviewer:** [Pending - Assign to: Product Manager, Technical Lead]

---

**Next Steps:**
1. QA Lead to review and approve specification
2. Generate comprehensive test cases (75-100 tests) using test-case-generator SKILL.md
3. Create test case document: `.github/analysis/FE768248-testcases.md`
4. Initialize development implementation plan
5. Begin automation test script development
