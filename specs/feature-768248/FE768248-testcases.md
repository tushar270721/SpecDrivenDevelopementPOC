# Test Cases: FE#768248 - Import XML PHA Studies with Canonical Search

**Feature:** Import XML PHA Studies into Enablon PHA with Canonical Search  
**Feature ID:** FE#768248  
**Total Test Cases:** 75  
**Created:** 6/1/2026  
**Status:** DRAFT - Ready for QA Lead Review  

---

# FUNCTIONAL TEST CASES

---

# TC-FE768248-001

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-001 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator can upload valid XML file for PHA study import

## Preconditions

1. User is logged in as System Administrator
2. Valid HAZID XML study file is available (sample_hazid_study.xml)
3. Import Studies page is accessible

## Test Data

| Field | Value |
|---|---|
| File | sample_hazid_study.xml (5 KB) |
| Methodology | HAZID |
| Study Name | Pump Failure Analysis |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator navigates to Import Studies page | Page loads successfully with upload interface visible |
| 2 | System Administrator clicks "Choose File" button | File browser dialog opens |
| 3 | System Administrator selects sample_hazid_study.xml | File path displayed in upload field |
| 4 | System Administrator clicks "Upload" button | File uploaded successfully; Success message displayed |
| 5 | System Administrator waits for file processing | System validates XML structure and format |
| 6 | System Administrator views validation result | System confirms file is valid and ready for import |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-002

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-002 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator can upload valid HAZOP XML file with multiple nodes

## Preconditions

1. User is logged in as System Administrator
2. Valid HAZOP XML file with 5 nodes is available
3. Import Studies page is accessible

## Test Data

| Field | Value |
|---|---|
| File | hazop_study_5nodes.xml (8 KB) |
| Methodology | HAZOP |
| Nodes | 5 |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator navigates to Import Studies page | Page displays upload interface |
| 2 | System Administrator selects hazop_study_5nodes.xml | File selected in browser dialog |
| 3 | System Administrator initiates upload | File transmission begins |
| 4 | System Administrator waits for completion | Upload completes; System processes file |
| 5 | System Administrator views file summary | Display shows: 5 nodes, HAZOP methodology, 45 worksheet rows |
| 6 | System Administrator confirms ready for import | System displays import confirmation screen |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-003

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-003 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator receives error when uploading non-XML file

## Preconditions

1. User is logged in as System Administrator
2. Non-XML file exists (e.g., sample.txt, sample.pdf)
3. Import Studies page is accessible

## Test Data

| Field | Value |
|---|---|
| File | sample_document.txt |
| File Type | Text file |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator navigates to Import Studies page | Page loads successfully |
| 2 | System Administrator selects sample_document.txt | File selected for upload |
| 3 | System Administrator initiates upload | System processes file |
| 4 | System Administrator waits for validation | System analyzes file format |
| 5 | System Administrator views error message | Error displayed: "File must be XML format" |
| 6 | System Administrator sees upload reverted | File removed from upload queue; Original interface restored |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-004

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-004 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator receives error when uploading XML file with multiple methodologies

## Preconditions

1. User is logged in as System Administrator
2. XML file containing both HAZID and HAZOP studies is available
3. Import Studies page is accessible

## Test Data

| Field | Value |
|---|---|
| File | mixed_methodologies.xml |
| Contains | 1 HAZID study and 1 HAZOP study |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator navigates to Import Studies page | Page displays |
| 2 | System Administrator uploads mixed_methodologies.xml | File uploaded successfully |
| 3 | System Administrator waits for validation | System validates XML structure |
| 4 | System Administrator waits for methodology check | System checks methodology uniqueness |
| 5 | System Administrator views validation result | System identifies multiple methodologies |
| 6 | System Administrator sees error message | Error: "XML contains multiple methodologies. Only HAZID or HAZOP per import" |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-005

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-005 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator receives error when uploading empty XML file

## Preconditions

1. User is logged in as System Administrator
2. Empty or minimal XML file exists
3. Import Studies page is accessible

## Test Data

| Field | Value |
|---|---|
| File | empty_study.xml |
| Size | 0 bytes or XML declaration only |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator navigates to Import Studies page | Page loads |
| 2 | System Administrator uploads empty_study.xml | File accepted initially |
| 3 | System Administrator waits for content validation | System reads file and finds no study data |
| 4 | System Administrator observes validation failure | System detects empty content |
| 5 | System Administrator views error message | Error: "XML file is empty or contains no study data" |
| 6 | System Administrator sees upload state reset | Upload interface cleared for next attempt |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-006

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-006 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator receives error when uploading XML file exceeding 50MB size limit

## Preconditions

1. User is logged in as System Administrator
2. XML file larger than 50 MB exists
3. Import Studies page is accessible

## Test Data

| Field | Value |
|---|---|
| File | large_study.xml |
| Size | 75 MB |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator navigates to Import Studies page | Page displays |
| 2 | System Administrator initiates file upload | File browser opens |
| 3 | System Administrator selects large_study.xml | File selected |
| 4 | System Administrator clicks upload button | System initiates upload |
| 5 | System Administrator observes upload progress | System validates file size before processing |
| 6 | System Administrator sees error message | Error: "File exceeds 50 MB limit. Maximum allowed size: 50 MB" |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-007

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-007 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator successfully uploads XML with single HAZID methodology

## Preconditions

1. User is logged in as System Administrator
2. XML file with only HAZID studies is available
3. Import Studies page is accessible

## Test Data

| Field | Value |
|---|---|
| File | hazid_only_study.xml |
| Methodology | HAZID |
| Studies | 1 HAZID study with 3 nodes |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator navigates to Import Studies page | Upload interface displays |
| 2 | System Administrator uploads hazid_only_study.xml | File uploaded successfully |
| 3 | System Administrator waits for validation | System validates XML structure |
| 4 | System Administrator waits for methodology validation | System confirms HAZID methodology |
| 5 | System Administrator observes validation success | No multiple methodologies detected |
| 6 | System Administrator sees ready state | File accepted; Ready for import |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-008

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-008 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator successfully uploads XML with single HAZOP methodology

## Preconditions

1. User is logged in as System Administrator
2. XML file with only HAZOP studies is available
3. Import Studies page is accessible

## Test Data

| Field | Value |
|---|---|
| File | hazop_only_study.xml |
| Methodology | HAZOP |
| Nodes | 5 |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator navigates to Import Studies page | Page loads with upload interface |
| 2 | System Administrator selects hazop_only_study.xml | File selected |
| 3 | System Administrator clicks upload | File transmission begins |
| 4 | System Administrator waits for system processing | System validates XML structure |
| 5 | System Administrator waits for methodology check | System confirms single HAZOP methodology |
| 6 | System Administrator observes ready state | File validated; Ready for import |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-009

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-009 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator uploads XML with special characters in study names

## Preconditions

1. User is logged in as System Administrator
2. XML file with special characters in study names exists
3. Import Studies page is accessible

## Test Data

| Field | Value |
|---|---|
| File | special_chars_study.xml |
| Study Name | "Pump & Compressor Analysis (Phase-2)" |
| Characters | &, (, ), -, numbers |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator navigates to Import Studies page | Upload interface loads |
| 2 | System Administrator uploads special_chars_study.xml | File accepted |
| 3 | System Administrator waits for processing | System processes XML with special characters |
| 4 | System Administrator observes validation | System correctly interprets special characters |
| 5 | System Administrator views parsed study name | Display shows: "Pump & Compressor Analysis (Phase-2)" |
| 6 | System Administrator confirms ready state | File validated successfully; Ready for import |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-010

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-010 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator uploads XML with unicode characters in worksheet data

## Preconditions

1. User is logged in as System Administrator
2. XML file containing unicode characters (Chinese, Arabic, etc.)
3. Import Studies page is accessible

## Test Data

| Field | Value |
|---|---|
| File | unicode_study.xml |
| Content | Chinese characters, Arabic script |
| Encoding | UTF-8 |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator navigates to Import Studies page | Page displays |
| 2 | System Administrator uploads unicode_study.xml | File accepted |
| 3 | System Administrator waits for content validation | System processes UTF-8 encoded content |
| 4 | System Administrator observes character handling | System correctly interprets unicode |
| 5 | System Administrator views imported data | Worksheet displays unicode characters correctly |
| 6 | System Administrator confirms import readiness | System ready to proceed with import |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-011

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-011 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator can view file upload progress indicator

## Preconditions

1. User is logged in as System Administrator
2. Large XML file (5-10 MB) available
3. Import Studies page is accessible

## Test Data

| Field | Value |
|---|---|
| File | large_valid_study.xml |
| Size | 7 MB |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator navigates to Import Studies page | Upload interface displays |
| 2 | System Administrator selects large_valid_study.xml | File selected |
| 3 | System Administrator initiates upload | File transmission begins |
| 4 | System Administrator observes progress indicator | Progress bar shows upload percentage |
| 5 | System Administrator waits for completion | Progress reaches 100% |
| 6 | System Administrator sees completion message | "Upload completed successfully" message displays |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-012

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-012 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator can cancel in-progress file upload

## Preconditions

1. User is logged in as System Administrator
2. Large XML file (5+ MB) available
3. Upload in progress

## Test Data

| Field | Value |
|---|---|
| File | large_study.xml |
| Size | 8 MB |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator navigates to Import Studies page | Upload interface displays |
| 2 | System Administrator selects large_study.xml | File selected |
| 3 | System Administrator initiates upload | File transmission begins |
| 4 | System Administrator clicks "Cancel" button during upload | System stops transmission |
| 5 | System Administrator observes cancellation | Upload halted; Progress bar stops |
| 6 | System Administrator sees interface reset | Upload interface cleared; Ready for new upload |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-013

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-013 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator receives validation summary showing study details after upload

## Preconditions

1. User is logged in as System Administrator
2. Valid XML file uploaded successfully
3. File validation completed

## Test Data

| Field | Value |
|---|---|
| File | complete_hazop_study.xml |
| Methodology | HAZOP |
| Studies | 1 |
| Nodes | 5 |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator uploads valid XML | File uploaded and processed |
| 2 | System Administrator waits for validation completion | System analyzes file |
| 3 | System Administrator views summary screen | Summary displays study details |
| 4 | System Administrator reviews study metadata | Shows: Study name, Methodology, Node count |
| 5 | System Administrator reviews data statistics | Shows: Number of worksheets, rows, columns |
| 6 | System Administrator confirms information accuracy | All data displayed correctly |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-014

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-014 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator can re-upload file if validation fails

## Preconditions

1. User is logged in as System Administrator
2. Invalid XML file previously uploaded
3. Valid replacement XML file available

## Test Data

| Field | Value |
|---|---|
| Invalid File | malformed.xml |
| Valid File | corrected_study.xml |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator views validation error | Previous file rejection displayed |
| 2 | System Administrator clicks "Upload New File" button | File browser opens |
| 3 | System Administrator selects corrected_study.xml | New file selected |
| 4 | System Administrator initiates upload | File transmission begins |
| 5 | System Administrator waits for validation | System validates new file |
| 6 | System Administrator sees success message | New file validated successfully |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-015

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-015 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator receives timeout error if upload exceeds 5 minute limit

## Preconditions

1. User is logged in as System Administrator
2. Simulated network condition causing slow upload
3. Upload exceeds 5 minute duration

## Test Data

| Field | Value |
|---|---|
| File | large_study.xml |
| Network Condition | Simulated 5-minute delay |
| Timeout Limit | 5 minutes |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator initiates large file upload | File transmission begins |
| 2 | System Administrator observes upload progress | Upload proceeds slowly |
| 3 | System Administrator waits for timeout threshold | 5 minutes elapse |
| 4 | System Administrator sees timeout error | Error message: "Upload timeout. Please try again." |
| 5 | System Administrator observes interface state | Upload cancelled; Interface reset |
| 6 | System Administrator can retry upload | Upload interface available for new attempt |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-016

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-016 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator receives error when uploading XML with malformed structure

## Preconditions

1. User is logged in as System Administrator
2. XML file with malformed structure exists (unclosed tags, invalid nesting)
3. Import Studies page is accessible

## Test Data

| Field | Value |
|---|---|
| File | malformed_structure.xml |
| Issue | Unclosed XML tags |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator navigates to Import Studies page | Upload interface displays |
| 2 | System Administrator uploads malformed_structure.xml | File accepted initially |
| 3 | System Administrator waits for parsing | System attempts to parse XML |
| 4 | System Administrator observes parsing failure | System detects malformed structure |
| 5 | System Administrator views error message | Error: "XML structure invalid. Check tags and nesting." |
| 6 | System Administrator sees upload state cleared | Interface ready for new upload |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-017

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-017 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator receives error when uploading XML with missing required methodology element

## Preconditions

1. User is logged in as System Administrator
2. XML file missing required methodology element
3. Import Studies page is accessible

## Test Data

| Field | Value |
|---|---|
| File | missing_methodology.xml |
| Missing Element | Methodology tag |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator navigates to Import Studies page | Page displays |
| 2 | System Administrator uploads missing_methodology.xml | File uploaded |
| 3 | System Administrator waits for validation | System validates required elements |
| 4 | System Administrator observes validation failure | System detects missing methodology |
| 5 | System Administrator views error message | Error: "Required element 'Methodology' not found in XML" |
| 6 | System Administrator sees interface reset | Upload cleared; Ready for new file |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-018

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-018 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator uploads XML and system automatically detects methodology type

## Preconditions

1. User is logged in as System Administrator
2. Valid XML file with explicit methodology declaration
3. Import Studies page is accessible

## Test Data

| Field | Value |
|---|---|
| File | auto_detect_study.xml |
| Methodology | HAZID |
| Auto-Detection | Enabled |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator navigates to Import Studies page | Upload interface displays |
| 2 | System Administrator uploads auto_detect_study.xml | File uploaded |
| 3 | System Administrator waits for analysis | System analyzes XML structure |
| 4 | System Administrator observes detection | System auto-detects HAZID methodology |
| 5 | System Administrator views detected type | Display shows: "Methodology detected: HAZID" |
| 6 | System Administrator confirms detection | System ready to proceed with identified methodology |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-019

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-019 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator uploads XML and verifies all worksheet rows are counted correctly

## Preconditions

1. User is logged in as System Administrator
2. XML file with known worksheet row count available
3. Import Studies page is accessible

## Test Data

| Field | Value |
|---|---|
| File | precise_count_study.xml |
| Expected Rows | 127 |
| Expected Columns | 8 |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator navigates to Import Studies page | Page displays |
| 2 | System Administrator uploads precise_count_study.xml | File uploaded |
| 3 | System Administrator waits for processing | System analyzes worksheet structure |
| 4 | System Administrator views summary | System displays row and column count |
| 5 | System Administrator verifies count | Display shows: "127 rows, 8 columns" |
| 6 | System Administrator confirms accuracy | Count matches expected values exactly |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-020

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-020 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator uploads XML and system validates all study references are valid

## Preconditions

1. User is logged in as System Administrator
2. XML file with cross-references between studies
3. Import Studies page is accessible

## Test Data

| Field | Value |
|---|---|
| File | cross_ref_study.xml |
| Contains | Study references and links |
| Reference Type | Internal study IDs |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator navigates to Import Studies page | Upload interface visible |
| 2 | System Administrator uploads cross_ref_study.xml | File uploaded |
| 3 | System Administrator waits for validation | System analyzes study references |
| 4 | System Administrator observes reference check | System validates all cross-references |
| 5 | System Administrator views validation result | All references validated successfully |
| 6 | System Administrator confirms readiness | System ready for import with valid references |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-021

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-021 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator uploads XML and receives detailed validation report

## Preconditions

1. User is logged in as System Administrator
2. Valid XML file uploaded
3. Validation completed successfully

## Test Data

| Field | Value |
|---|---|
| File | detailed_report_study.xml |
| Report Level | Detailed |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator uploads valid XML | File processed successfully |
| 2 | System Administrator waits for validation completion | System completes analysis |
| 3 | System Administrator clicks "View Detailed Report" | Report page opens |
| 4 | System Administrator reviews validation sections | Report shows: Structure, Methodology, Content, Cross-references |
| 5 | System Administrator views each section | All sections display detailed validation results |
| 6 | System Administrator confirms all passed | All validation checks show "Passed" status |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-022

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-022 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator uploads XML and system identifies deprecated field names

## Preconditions

1. User is logged in as System Administrator
2. XML file with deprecated field names exists
3. Canonical search mapping available

## Test Data

| Field | Value |
|---|---|
| File | deprecated_fields.xml |
| Deprecated Field | "Guide Words" |
| Canonical Name | "GuideWords" |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator navigates to Import Studies page | Page displays |
| 2 | System Administrator uploads deprecated_fields.xml | File uploaded |
| 3 | System Administrator waits for field analysis | System scans XML for field names |
| 4 | System Administrator observes deprecation detection | System identifies deprecated field names |
| 5 | System Administrator views mapping suggestion | System displays: "Guide Words" → "GuideWords" |
| 6 | System Administrator confirms mapping | System ready to apply canonical mapping |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-023

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-023 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator uploads XML with incomplete optional fields and system accepts file

## Preconditions

1. User is logged in as System Administrator
2. XML with required fields but missing optional fields
3. Import Studies page is accessible

## Test Data

| Field | Value |
|---|---|
| File | incomplete_optional.xml |
| Required Fields | All present |
| Optional Fields | Partially missing |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator navigates to Import Studies page | Upload interface visible |
| 2 | System Administrator uploads incomplete_optional.xml | File accepted |
| 3 | System Administrator waits for validation | System checks required vs optional fields |
| 4 | System Administrator observes field analysis | System confirms all required fields present |
| 5 | System Administrator views validation result | File accepted despite missing optional fields |
| 6 | System Administrator confirms import readiness | System ready to proceed with import |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-024

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-024 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator uploads XML and system displays warnings for non-critical issues

## Preconditions

1. User is logged in as System Administrator
2. XML with valid structure but minor issues (unused elements, etc.)
3. Import Studies page is accessible

## Test Data

| Field | Value |
|---|---|
| File | warning_issues.xml |
| Issues | Unused elements, deprecated attributes |
| Severity | Non-critical |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator navigates to Import Studies page | Page displays |
| 2 | System Administrator uploads warning_issues.xml | File uploaded |
| 3 | System Administrator waits for validation | System validates file |
| 4 | System Administrator observes warning detection | System identifies non-critical issues |
| 5 | System Administrator views warning list | Display shows: List of warnings with explanations |
| 6 | System Administrator sees success with warnings | File accepted; Warnings noted; Ready for import |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-025

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-025 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator uploads XML and verifies file digest for integrity verification

## Preconditions

1. User is logged in as System Administrator
2. Valid XML file with known MD5 hash
3. Import Studies page is accessible

## Test Data

| Field | Value |
|---|---|
| File | integrity_check.xml |
| MD5 Hash | a1b2c3d4e5f6g7h8i9j0 |
| Verification | Enabled |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator navigates to Import Studies page | Upload interface displays |
| 2 | System Administrator uploads integrity_check.xml | File transmitted |
| 3 | System Administrator waits for processing | System calculates file hash |
| 4 | System Administrator observes integrity check | System verifies file integrity |
| 5 | System Administrator views integrity result | Display shows: File digest matches expected value |
| 6 | System Administrator confirms integrity | File validated; No corruption detected |

## Reviewer Comments

*To be completed during review.*

---

# ROLE-BASED & ACCESS CONTROL TEST CASES

---

# TC-FE768248-026

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-026 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator can access Import Studies page and PHA Facilitator cannot

## Preconditions

1. System Administrator and PHA Facilitator accounts exist
2. Both users are logged in via separate sessions
3. Import Studies page configured with Admin-only access

## Test Data

| Field | Value |
|---|---|
| Admin User | System Administrator |
| Restricted User | PHA Facilitator |
| Page | Import Studies |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator navigates to Import Studies page | Page loads successfully |
| 2 | System Administrator views upload interface | Upload controls visible and active |
| 3 | PHA Facilitator attempts to navigate to Import Studies page | Access denied |
| 4 | PHA Facilitator sees error message | Error: "You do not have permission to access this page" |
| 5 | PHA Facilitator is redirected | Redirected to permitted pages only |
| 6 | System Administrator retains access | Can still upload files without interruption |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-027

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-027 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator can view uploaded file history and other users cannot

## Preconditions

1. Multiple uploaded files exist with different administrators
2. System Administrator and Read-Only User accounts active
3. Audit trail feature enabled

## Test Data

| Field | Value |
|---|---|
| Admin User | System Administrator |
| Limited User | Read-Only User |
| Audit Trail | Enabled |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator navigates to File History page | Upload history displays |
| 2 | System Administrator reviews all uploaded files | All files visible with details |
| 3 | Read-Only User attempts to view File History | Access denied or filtered view |
| 4 | Read-Only User sees limited information | Only data relevant to their role shown |
| 5 | System Administrator confirms full access | Can view all uploads, dates, and administrators |
| 6 | Read-Only User confirms limited access | Cannot view sensitive upload metadata |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-028

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-028 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

API Consumer can upload XML file via API endpoint and System Administrator cannot

## Preconditions

1. API Consumer with API key credentials configured
2. System Administrator account without API permissions
3. Import API endpoint enabled

## Test Data

| Field | Value |
|---|---|
| API Consumer | API key: consumer_key_12345 |
| Admin User | System Administrator (no API key) |
| Endpoint | /api/import/studies |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | API Consumer calls /api/import/studies with valid credentials | API accepts request |
| 2 | API Consumer uploads XML file via API | File uploaded successfully |
| 3 | System Administrator attempts API call without API key | API rejects request |
| 4 | System Administrator receives error | Error: "API key required. Authentication failed." |
| 5 | API Consumer receives success response | API returns 200 OK with file ID |
| 6 | File appears in system | Uploaded file accessible via UI |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-029

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-029 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Read-Only User cannot initiate file uploads but can view import status

## Preconditions

1. Read-Only User account configured
2. System Administrator previously uploaded files
3. Import Studies and Status pages accessible

## Test Data

| Field | Value |
|---|---|
| User | Read-Only User |
| Access Level | View-only |
| Uploads | Performed by other users |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | Read-Only User navigates to Import Studies page | Page displays without upload controls |
| 2 | Read-Only User attempts to click upload button | Button disabled or hidden |
| 3 | Read-Only User navigates to Import Status page | Status information displays |
| 4 | Read-Only User views recent uploads | Can see upload history and status |
| 5 | Read-Only User attempts to modify file metadata | Cannot edit; Fields read-only |
| 6 | Read-Only User confirms view-only access | Viewing permitted; Modifications denied |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-030

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-030 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Reviewer user can approve/reject uploads but not modify source XML

## Preconditions

1. Reviewer account configured
2. Uploaded file pending review
3. Review workflow configured

## Test Data

| Field | Value |
|---|---|
| User | Reviewer |
| File | uploaded_study.xml |
| Status | Pending Review |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | Reviewer navigates to Review Queue | Pending files displayed |
| 2 | Reviewer opens uploaded_study.xml for review | File details visible |
| 3 | Reviewer clicks "Approve" button | File marked as approved |
| 4 | Reviewer attempts to edit XML content | Edit button disabled |
| 5 | Reviewer can add review comments | Comments field active and saveable |
| 6 | Reviewer cannot modify source file | File stored unchanged; Only comments modified |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-031

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-031 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Support Lead can view all uploads across all users for troubleshooting

## Preconditions

1. Support Lead account configured with cross-user visibility
2. Multiple uploads from various System Administrators
3. Audit trail system active

## Test Data

| Field | Value |
|---|---|
| User | Support Lead |
| Access | All-user audit trail |
| Uploads | Multiple from various admins |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | Support Lead navigates to Audit Trail | System displays all uploads |
| 2 | Support Lead filters by user | Can see uploads from all System Administrators |
| 3 | Support Lead filters by date range | Upload history by date displays |
| 4 | Support Lead views upload details | File metadata, timestamps, user info shown |
| 5 | Support Lead cannot approve/reject | Review controls not available |
| 6 | Support Lead can add support notes | Notes field for troubleshooting available |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-032

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-032 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Security Manager can view import audit trail but cannot modify data

## Preconditions

1. System Security Manager account configured
2. Multiple uploads and imports completed
3. Audit logging enabled

## Test Data

| Field | Value |
|---|---|
| User | System Security Manager |
| Access | Audit trail view only |
| Modifications | None permitted |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Security Manager navigates to Audit Trail | Full audit log displays |
| 2 | System Security Manager reviews all upload records | All import activities visible |
| 3 | System Security Manager views user actions | User IDs, timestamps, IP addresses shown |
| 4 | System Security Manager attempts to delete audit entry | Delete button disabled |
| 5 | System Security Manager attempts to modify records | Modification blocked |
| 6 | System Security Manager can export audit logs | Export function available for security review |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-033

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-033 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Multi-tenant System Administrator can only see uploads for their tenant

## Preconditions

1. Multi-tenant system configured with Tenant A and Tenant B
2. System Administrator for Tenant A logged in
3. Uploads exist for both tenants

## Test Data

| Field | Value |
|---|---|
| Admin | Tenant A System Administrator |
| Tenant A Files | 5 uploads |
| Tenant B Files | 3 uploads |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | Tenant A Admin navigates to File History | Files display |
| 2 | Tenant A Admin views upload list | Only Tenant A uploads visible (5 files) |
| 3 | Tenant A Admin cannot see Tenant B files | Tenant B uploads not in list |
| 4 | Tenant A Admin attempts to access Tenant B file | Access denied |
| 5 | Tenant A Admin views metadata | Only Tenant A study details shown |
| 6 | System enforces isolation | Tenant data completely isolated |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-034

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-034 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

User with expired session cannot complete file upload

## Preconditions

1. System Administrator logged in
2. File upload in progress
3. Session timeout configured for 15 minutes

## Test Data

| Field | Value |
|---|---|
| User | System Administrator |
| File | large_study.xml (10 MB) |
| Session Timeout | 15 minutes |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator starts large file upload | Upload begins |
| 2 | System Administrator's session expires | 15 minutes pass without activity |
| 3 | System Administrator waits for upload completion | Upload continues but exceeds idle threshold |
| 4 | System Administrator views error | Error: "Your session has expired. Please login again." |
| 5 | System Administrator is redirected | Login page displays |
| 6 | Upload is cancelled | Incomplete upload removed; Must restart |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-035

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-035 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System prevents uploading file by user who lacks "Import Studies" permission

## Preconditions

1. User account exists without "Import Studies" permission
2. Import Studies page is accessible but permission-restricted
3. Permission system configured

## Test Data

| Field | Value |
|---|---|
| User | Restricted User |
| Permission Missing | Import Studies |
| File | valid_study.xml |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | Restricted User navigates to Import Studies page | Page displays but controls hidden |
| 2 | Restricted User attempts to upload file | Upload blocked at interface level |
| 3 | Restricted User sees message | "You lack permission to perform imports" |
| 4 | Restricted User attempts API call directly | API rejects request |
| 5 | API returns error | Error: "User does not have 'Import Studies' permission" |
| 6 | File not uploaded | No import recorded; No permission escalation |

## Reviewer Comments

*To be completed during review.*

---

# EDGE CASES & EXPLORATORY TEST CASES

---

# TC-FE768248-036

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-036 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator uploads XML with extremely long field values (1000+ characters)

## Preconditions

1. User is logged in as System Administrator
2. XML with field values exceeding 1000 characters
3. Import Studies page is accessible

## Test Data

| Field | Value |
|---|---|
| File | long_values_study.xml |
| Field | Description with 1500 characters |
| Max Field Length | 1000 characters |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator navigates to Import Studies page | Page displays |
| 2 | System Administrator uploads long_values_study.xml | File accepted |
| 3 | System Administrator waits for processing | System parses XML |
| 4 | System Administrator observes field length handling | System truncates or handles gracefully |
| 5 | System Administrator views summary | Long values handled appropriately |
| 6 | System Administrator confirms import status | System either truncates with notice or rejects |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-037

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-037 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator uploads XML with null/empty values in required fields

## Preconditions

1. User is logged in as System Administrator
2. XML with empty required fields exists
3. Import Studies page is accessible

## Test Data

| Field | Value |
|---|---|
| File | empty_required_fields.xml |
| Empty Field | Study Name (required) |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator navigates to Import Studies page | Upload interface displays |
| 2 | System Administrator uploads empty_required_fields.xml | File uploaded |
| 3 | System Administrator waits for validation | System checks required fields |
| 4 | System Administrator observes missing value detection | System identifies empty required field |
| 5 | System Administrator views error | Error: "Required field 'Study Name' is empty" |
| 6 | System Administrator sees validation failure | Upload rejected with clear message |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-038

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-038 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator uploads XML with very large number of nodes (5000+)

## Preconditions

1. User is logged in as System Administrator
2. XML with 5000+ nodes available (large study structure)
3. Import Studies page is accessible

## Test Data

| Field | Value |
|---|---|
| File | large_nodes_study.xml |
| Nodes | 5000 |
| Size | 45 MB |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator navigates to Import Studies page | Page displays |
| 2 | System Administrator uploads large_nodes_study.xml | File accepted |
| 3 | System Administrator waits for processing | System processes large structure |
| 4 | System Administrator observes performance | Processing completes within SLA (<60 seconds) |
| 5 | System Administrator views summary | All 5000 nodes counted correctly |
| 6 | System Administrator confirms readiness | System handles large structures efficiently |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-039

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-039 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator uploads XML with binary/image data embedded

## Preconditions

1. User is logged in as System Administrator
2. XML with embedded binary data (base64 encoded)
3. Import Studies page is accessible

## Test Data

| Field | Value |
|---|---|
| File | embedded_image.xml |
| Embedded | Base64 encoded image (100 KB) |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator navigates to Import Studies page | Upload interface visible |
| 2 | System Administrator uploads embedded_image.xml | File accepted |
| 3 | System Administrator waits for processing | System processes XML with embedded data |
| 4 | System Administrator observes handling | System either preserves or strips embedded binary |
| 5 | System Administrator views result | System handles gracefully; No corruption |
| 6 | System Administrator confirms import status | File validated; Ready for import or rejected with reason |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-040

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-040 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator uploads XML with circular references between studies

## Preconditions

1. User is logged in as System Administrator
2. XML with circular study references (Study A → Study B → Study A)
3. Import Studies page is accessible

## Test Data

| Field | Value |
|---|---|
| File | circular_refs.xml |
| Reference Pattern | A→B→A |
| Depth | 2 levels |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator navigates to Import Studies page | Page displays |
| 2 | System Administrator uploads circular_refs.xml | File uploaded |
| 3 | System Administrator waits for validation | System analyzes references |
| 4 | System Administrator observes circular detection | System detects circular reference pattern |
| 5 | System Administrator views handling | System either rejects or handles gracefully |
| 6 | System Administrator sees result | Clear error message or validation pass based on allowance |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-041

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-041 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator uploads XML with conflicting field definitions

## Preconditions

1. User is logged in as System Administrator
2. XML with field definitions that conflict with canonical schema
3. Import Studies page is accessible

## Test Data

| Field | Value |
|---|---|
| File | conflicting_fields.xml |
| Conflict | Field defined as both text and numeric |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator navigates to Import Studies page | Upload interface visible |
| 2 | System Administrator uploads conflicting_fields.xml | File uploaded |
| 3 | System Administrator waits for analysis | System analyzes field types |
| 4 | System Administrator observes conflict detection | System identifies conflicting definitions |
| 5 | System Administrator views error | Error: "Field has conflicting type definitions" |
| 6 | System Administrator sees resolution needed | System prompts for conflict resolution |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-042

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-042 |
| Priority | Medium |
| Automatable | No |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |
| Reason | Requires manual verification of schema version compatibility across multiple legacy systems |

## Title

System Administrator uploads XML with deprecated schema version and system applies appropriate migration

## Preconditions

1. User is logged in as System Administrator
2. XML file using deprecated schema version 1.0 (current: 2.5)
3. Schema migration mapping configured

## Test Data

| Field | Value |
|---|---|
| File | legacy_schema_v1.xml |
| Schema Version | 1.0 (deprecated) |
| Current Version | 2.5 |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator navigates to Import Studies page | Page displays |
| 2 | System Administrator uploads legacy_schema_v1.xml | File accepted |
| 3 | System Administrator waits for processing | System detects schema version |
| 4 | System Administrator observes version detection | System identifies v1.0 schema |
| 5 | System Administrator views migration | System applies schema migration to v2.5 |
| 6 | System Administrator confirms migration result | File successfully migrated; Ready for import |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-043

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-043 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator uploads same XML file twice and system handles duplicate correctly

## Preconditions

1. User is logged in as System Administrator
2. Same XML file uploaded previously exists
3. Duplicate detection configured

## Test Data

| Field | Value |
|---|---|
| File | study_v1.xml |
| First Upload | 9:00 AM |
| Second Upload | 9:05 AM (duplicate) |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator navigates to Import Studies page | Upload interface displays |
| 2 | System Administrator uploads study_v1.xml first time | File uploaded and processed |
| 3 | System Administrator waits for first import to complete | First import succeeds |
| 4 | System Administrator uploads study_v1.xml again | System detects duplicate |
| 5 | System Administrator sees duplicate notice | Warning: "This file was previously uploaded at 9:00 AM" |
| 6 | System Administrator confirms action | System asks to proceed or cancel |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-044

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-044 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator uploads XML containing SQL injection attempts and system sanitizes

## Preconditions

1. User is logged in as System Administrator
2. XML file with SQL injection strings in field values
3. Import Studies page is accessible

## Test Data

| Field | Value |
|---|---|
| File | sql_injection_test.xml |
| Injection String | '; DROP TABLE studies; -- |
| Location | Study Description field |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator navigates to Import Studies page | Page displays |
| 2 | System Administrator uploads sql_injection_test.xml | File uploaded |
| 3 | System Administrator waits for processing | System parses and sanitizes content |
| 4 | System Administrator observes sanitization | System removes or escapes SQL strings |
| 5 | System Administrator views sanitized data | Study description shows escaped value |
| 6 | System Administrator confirms security | No SQL execution; Data safe |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-045

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-045 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System automatically maps canonical field names with different casing (GuideWords vs guidewords)

## Preconditions

1. XML contains field with "guidewords" (lowercase)
2. Canonical name is "GuideWords" (camelCase)
3. Canonical search enabled

## Test Data

| Field | Value |
|---|---|
| File | case_variation.xml |
| XML Field | guidewords |
| Canonical | GuideWords |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator navigates to Import Studies page | Upload interface displays |
| 2 | System Administrator uploads case_variation.xml | File uploaded |
| 3 | System Administrator waits for field matching | System analyzes field names |
| 4 | System Administrator observes case-insensitive match | System matches "guidewords" to "GuideWords" |
| 5 | System Administrator views mapping | System displays: "guidewords" → "GuideWords" |
| 6 | System Administrator confirms mapping applied | Canonical name applied; Import ready |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-046

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-046 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System matches field with whitespace variations (Guide Words vs GuideWords)

## Preconditions

1. XML contains "Guide Words" (with space)
2. Canonical field is "GuideWords" (no space)
3. Canonical search enabled

## Test Data

| Field | Value |
|---|---|
| File | whitespace_variation.xml |
| XML Field | Guide Words |
| Canonical | GuideWords |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator navigates to Import Studies page | Page displays |
| 2 | System Administrator uploads whitespace_variation.xml | File uploaded |
| 3 | System Administrator waits for parsing | System analyzes field structure |
| 4 | System Administrator observes whitespace handling | System matches despite space difference |
| 5 | System Administrator views mapping result | System displays: "Guide Words" → "GuideWords" |
| 6 | System Administrator confirms canonical applied | Mapping successful; Import ready |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-047

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-047 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System matches field with underscore vs camelCase (guide_words vs guideWords vs GuideWords)

## Preconditions

1. XML contains multiple field naming variations
2. All refer to same canonical field "GuideWords"
3. Canonical search fuzzy matching enabled

## Test Data

| Field | Value |
|---|---|
| File | naming_variations.xml |
| Variations | guide_words, guideWords, GuideWords, Guide_Words |
| Canonical | GuideWords |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator navigates to Import Studies page | Upload interface visible |
| 2 | System Administrator uploads naming_variations.xml | File uploaded |
| 3 | System Administrator waits for analysis | System analyzes field name patterns |
| 4 | System Administrator observes fuzzy matching | System recognizes all as same field |
| 5 | System Administrator views all mappings | All variations mapped to "GuideWords" |
| 6 | System Administrator confirms canonical applied | All fields standardized; Import ready |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-048

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-048 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System handles abbreviated field names and maps to canonical (GW vs GuideWords)

## Preconditions

1. XML contains abbreviated field "GW"
2. Canonical field is "GuideWords"
3. Abbreviation mapping configured

## Test Data

| Field | Value |
|---|---|
| File | abbreviation_test.xml |
| XML Field | GW |
| Canonical | GuideWords |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator navigates to Import Studies page | Page displays |
| 2 | System Administrator uploads abbreviation_test.xml | File uploaded |
| 3 | System Administrator waits for pattern matching | System analyzes field names |
| 4 | System Administrator observes abbreviation handling | System attempts to match abbreviation |
| 5 | System Administrator views mapping result | System displays: "GW" → "GuideWords" or prompts for confirmation |
| 6 | System Administrator confirms mapping | User confirms or denies abbreviation mapping |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-049

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-049 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator uploads XML and system identifies unmappable custom fields

## Preconditions

1. XML contains custom fields with no canonical mapping
2. System Administrator logged in
3. Strict field matching configured

## Test Data

| Field | Value |
|---|---|
| File | custom_fields.xml |
| Custom Fields | CustomAnalysisField, LegacyMetadata |
| Canonical Fields | No matches |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator navigates to Import Studies page | Upload interface displays |
| 2 | System Administrator uploads custom_fields.xml | File uploaded |
| 3 | System Administrator waits for field analysis | System scans for canonical mappings |
| 4 | System Administrator observes unmapped detection | System identifies custom fields |
| 5 | System Administrator views report | System displays: "CustomAnalysisField", "LegacyMetadata" (unmapped) |
| 6 | System Administrator sees handling | System either rejects or allows with warning |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-050

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-050 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator uploads XML with invalid canonical field mapping and system corrects

## Preconditions

1. XML declares incorrect mapping (field1 → WrongCanonical)
2. System has correct mapping (field1 → CorrectCanonical)
3. Mapping validation enabled

## Test Data

| Field | Value |
|---|---|
| File | incorrect_mapping.xml |
| XML Declares | field1 → WrongCanonical |
| Correct Mapping | field1 → CorrectCanonical |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator navigates to Import Studies page | Page displays |
| 2 | System Administrator uploads incorrect_mapping.xml | File uploaded |
| 3 | System Administrator waits for validation | System validates mappings |
| 4 | System Administrator observes conflict | System detects incorrect mapping |
| 5 | System Administrator views correction | System prompts: Use XML mapping or apply correct mapping? |
| 6 | System Administrator confirms resolution | System applies correction and proceeds |

## Reviewer Comments

*To be completed during review.*

---

# INTEGRATION TEST CASES

---

# TC-FE768248-051

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-051 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System integrates imported studies into existing Enablon PHA database without duplicating

## Preconditions

1. Enablon PHA database contains existing studies
2. System Administrator uploaded compatible XML
3. Import process initiated

## Test Data

| Field | Value |
|---|---|
| Existing Studies | 10 studies in database |
| Import File | new_study.xml (1 new study) |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator initiates import from uploaded file | Import process begins |
| 2 | System analyzes existing database for duplicates | System queries existing studies |
| 3 | System Administrator waits for integration | System integrates new studies |
| 4 | System Administrator verifies database | Database now contains 11 studies |
| 5 | System Administrator confirms uniqueness | No duplicates; All studies distinct |
| 6 | System Administrator verifies data integrity | Existing studies unmodified; New study added |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-052

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-052 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System maintains referential integrity when importing related studies across multiple files

## Preconditions

1. Two XML files with related studies uploaded sequentially
2. System Administrator managing imports
3. Database referential integrity enabled

## Test Data

| Field | Value |
|---|---|
| File 1 | parent_study.xml |
| File 2 | child_study.xml (references parent) |
| Relationship | Parent-child link |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator uploads parent_study.xml | File 1 imported |
| 2 | System Administrator verifies parent import | Parent study in database |
| 3 | System Administrator uploads child_study.xml | File 2 imported |
| 4 | System verifies relationship integrity | Child references parent correctly |
| 5 | System Administrator checks links | Parent-child relationship intact |
| 6 | System Administrator confirms integrity | No orphaned references; All links valid |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-053

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-053 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System logs all import activities to audit trail with timestamp and user information

## Preconditions

1. System Administrator uploaded and imported XML
2. Audit logging enabled
3. Import completed successfully

## Test Data

| Field | Value |
|---|---|
| File | audit_test.xml |
| User | System Administrator |
| Timestamp | 2026-06-01 10:30:45 |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator completes import | Import finalized |
| 2 | System creates audit log entry | Audit record written |
| 3 | System Administrator navigates to Audit Trail | Logs display |
| 4 | System Administrator views import entry | Entry shows: Timestamp, Admin name, File name, Status |
| 5 | System Administrator reviews details | Timestamp: 2026-06-01 10:30:45; User: System Administrator |
| 6 | System Administrator confirms logging | All required information logged correctly |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-054

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-054 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System sends notification to relevant stakeholders upon successful import completion

## Preconditions

1. Import completed successfully
2. Notification system configured
3. Stakeholder email list configured

## Test Data

| Field | Value |
|---|---|
| File | notify_test.xml |
| Stakeholders | 3 recipients |
| Notification Type | Email |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator completes import | Import finalized |
| 2 | System triggers notification | System prepares notifications |
| 3 | System sends emails | Email service processes messages |
| 4 | Stakeholders receive notification | All 3 recipients receive email |
| 5 | System Administrator verifies email | Email contains: File name, Timestamp, Status, Study details |
| 6 | System Administrator confirms delivery | All notifications successfully sent |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-055

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-055 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System maintains consistency between Enablon PHA and external API endpoints after import

## Preconditions

1. External API configured for data synchronization
2. Import completed successfully
3. API endpoints active

## Test Data

| Field | Value |
|---|---|
| File | api_sync_test.xml |
| External API | /api/studies endpoint |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator completes import | Import finalized |
| 2 | System queries Enablon database | New studies visible in database |
| 3 | System makes API call to /api/studies | Retrieves study list |
| 4 | System compares data | Database and API data match |
| 5 | System Administrator verifies consistency | All studies appear in both systems |
| 6 | System Administrator confirms sync | Data consistency maintained across systems |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-056

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-056 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System correctly applies tenant isolation during multi-tenant import operation

## Preconditions

1. Multi-tenant system with Tenant A and Tenant B
2. Both tenants importing simultaneously
3. Tenant isolation enforced

## Test Data

| Field | Value |
|---|---|
| Tenant A File | tenant_a_study.xml |
| Tenant B File | tenant_b_study.xml |
| Isolation Level | Complete |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | Tenant A Admin uploads tenant_a_study.xml | File uploaded to Tenant A |
| 2 | Tenant B Admin uploads tenant_b_study.xml | File uploaded to Tenant B |
| 3 | System processes imports in parallel | Both imports execute |
| 4 | System maintains isolation | Tenant A data separate from Tenant B |
| 5 | System Administrator verifies separation | Each tenant sees only own studies |
| 6 | System confirms isolation | No data leakage between tenants |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-057

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-057 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System maintains data consistency if import is interrupted and automatically resumes

## Preconditions

1. Large import in progress (>10 MB file)
2. Network interruption occurs
3. Resume capability enabled

## Test Data

| Field | Value |
|---|---|
| File | large_import.xml |
| Size | 20 MB |
| Checkpoint | 50% progress |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator initiates large import | Import begins processing |
| 2 | System processes 50% of file | Checkpoint reached at 10 MB |
| 3 | Network interruption occurs | Connection lost |
| 4 | System detects failure | Import paused at checkpoint |
| 5 | System Administrator resumes import | Resume operation initiated |
| 6 | Import completes successfully | Remaining 50% imported; Data consistent |

## Reviewer Comments

*To be completed during review.*

---

# SECURITY & ACCESSIBILITY TEST CASES

---

# TC-FE768248-058

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-058 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System validates HMAC signature on uploaded XML file for integrity verification

## Preconditions

1. XML file with accompanying HMAC-SHA256 signature
2. System Administrator uploading
3. Signature validation enabled

## Test Data

| Field | Value |
|---|---|
| File | signed_study.xml |
| Signature | HMAC-SHA256 |
| Secret | API shared secret |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator uploads signed_study.xml | File transmitted with signature |
| 2 | System Administrator provides signature | HMAC signature provided |
| 3 | System validates signature | System recalculates HMAC-SHA256 |
| 4 | System compares signatures | Calculated signature matches provided signature |
| 5 | System Administrator sees validation result | Signature validated; Integrity confirmed |
| 6 | System Administrator confirms security | File accepted; No tampering detected |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-059

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-059 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System rejects file with invalid HMAC signature indicating tampering

## Preconditions

1. XML file with tampered content and outdated HMAC
2. System Administrator attempting upload
3. Signature validation enabled

## Test Data

| Field | Value |
|---|---|
| File | tampered_study.xml |
| Content | Modified after signing |
| Signature | No longer valid |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator uploads tampered_study.xml | File transmitted |
| 2 | System Administrator provides signature | Invalid HMAC provided |
| 3 | System validates signature | System recalculates HMAC-SHA256 |
| 4 | System compares signatures | Calculated signature does NOT match |
| 5 | System Administrator sees error | Error: "File signature invalid. File may be tampered." |
| 6 | System rejects import | File rejected; Import prevented |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-060

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-060 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System scans uploaded XML file for malware before processing

## Preconditions

1. Antivirus/malware scanner configured
2. XML file uploaded
3. Scanning enabled

## Test Data

| Field | Value |
|---|---|
| File | potential_malware.xml |
| Scanner | ClamAV or equivalent |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator uploads potential_malware.xml | File received |
| 2 | System initiates malware scan | Scanner analyzes file |
| 3 | System Administrator waits for scan completion | Scan processes file content |
| 4 | System Administrator observes scan result | Scan completes; No threats detected |
| 5 | System Administrator sees file approved | File cleared by scanner |
| 6 | System Administrator confirms security | File safe; Processing continues |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-061

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-061 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System enforces encryption in transit for uploaded XML files (HTTPS/TLS)

## Preconditions

1. Upload occurs via HTTPS connection
2. TLS 1.2 or higher configured
3. System Administrator accessing

## Test Data

| Field | Value |
|---|---|
| Protocol | HTTPS |
| TLS Version | 1.2+ |
| Certificate | Valid SSL/TLS certificate |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator navigates to Import Studies page | HTTPS connection established |
| 2 | System Administrator uploads file | File transmitted over encrypted connection |
| 3 | Network capture tool observes traffic | File content encrypted in transit |
| 4 | System Administrator observes browser | Lock icon indicates secure connection |
| 5 | System Administrator uploads completes | File received encrypted |
| 6 | System Administrator confirms encryption | HTTPS/TLS used; Data encrypted in transit |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-062

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-062 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System masks sensitive data in error messages to prevent information disclosure

## Preconditions

1. Validation error occurs during import
2. XML contains sensitive credentials or data
3. Error logging enabled

## Test Data

| Field | Value |
|---|---|
| File | sensitive_data.xml |
| Contains | Database credentials, API keys |
| Error | Validation failure |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator uploads sensitive_data.xml | File with sensitive content uploaded |
| 2 | System encounters validation error | Error occurs during processing |
| 3 | System Administrator views error message | Error message displayed |
| 4 | System Administrator checks error log | Error logs reviewed |
| 5 | System Administrator confirms masking | Sensitive data masked in logs and messages |
| 6 | System confirms security | No credentials or keys exposed |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-063

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-063 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System is accessible and functional for users with screen readers and keyboard navigation

## Preconditions

1. WCAG 2.1 Level AA compliance configured
2. Screen reader capability available
3. Keyboard navigation enabled

## Test Data

| Field | Value |
|---|---|
| Screen Reader | NVDA or JAWS |
| Page | Import Studies |
| Compliance Level | WCAG 2.1 AA |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | User with visual impairment launches screen reader | NVDA/JAWS initializes |
| 2 | User navigates to Import Studies page | Page loads and screen reader announces content |
| 3 | User tabs through form elements | All buttons and fields are focusable |
| 4 | User hears button labels | Screen reader announces: "Choose File button", "Upload button" |
| 5 | User selects and uploads file | File upload completes via keyboard only |
| 6 | User hears status message | Screen reader announces upload status |

## Reviewer Comments

*To be completed during review.*

---

# PERFORMANCE & RELIABILITY TEST CASES

---

# TC-FE768248-064

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-064 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System validates 10MB XML file upload within 30 second SLA

## Preconditions

1. Valid XML file of 10 MB size
2. System Administrator uploading
3. Performance monitoring enabled

## Test Data

| Field | Value |
|---|---|
| File | performance_test_10mb.xml |
| Size | 10 MB |
| SLA | <30 seconds |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator starts upload timer | Timer initiated |
| 2 | System Administrator uploads 10 MB file | File transmission begins |
| 3 | System Administrator monitors progress | File uploads and processes |
| 4 | System Administrator observes completion | System completes validation |
| 5 | System Administrator checks elapsed time | Time recorded: 28 seconds |
| 6 | System Administrator confirms SLA | Upload and validation within 30 second SLA |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-065

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-065 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System validates 50MB XML file upload within 60 second SLA

## Preconditions

1. Valid XML file of 50 MB size (maximum allowed)
2. System Administrator uploading
3. Performance monitoring enabled

## Test Data

| Field | Value |
|---|---|
| File | performance_test_50mb.xml |
| Size | 50 MB |
| SLA | <60 seconds |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator starts upload timer | Timer initiated |
| 2 | System Administrator uploads 50 MB file | Large file transmission begins |
| 3 | System Administrator monitors progress | File uploads and processes |
| 4 | System Administrator observes completion | System completes validation |
| 5 | System Administrator checks elapsed time | Time recorded: 58 seconds |
| 6 | System Administrator confirms SLA | Upload and validation within 60 second SLA |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-066

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-066 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System handles concurrent uploads from multiple administrators without performance degradation

## Preconditions

1. Multiple System Administrator accounts active
2. Multiple valid XML files ready
3. Load testing enabled

## Test Data

| Field | Value |
|---|---|
| Concurrent Users | 5 administrators |
| Files per User | 1 file (5 MB each) |
| Total Load | 25 MB simultaneous upload |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator 1 starts upload | Upload begins |
| 2 | System Administrator 2 starts upload | Second upload begins |
| 3 | System Administrator 3 starts upload | Third upload begins |
| 4 | System Administrator 4 starts upload | Fourth upload begins |
| 5 | System Administrator 5 starts upload | Fifth upload begins simultaneously |
| 6 | System Administrator observes performance | All 5 uploads complete within SLA |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-067

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-067 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System maintains 99.5% availability for import functionality over 24-hour period

## Preconditions

1. Import system deployed and operational
2. Monitoring and alerting configured
3. 24-hour monitoring period

## Test Data

| Field | Value |
|---|---|
| Monitoring Period | 24 hours |
| Availability Target | 99.5% |
| Acceptable Downtime | 7.2 minutes |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator monitors uptime | Monitoring active for 24 hours |
| 2 | System records availability metrics | System tracks availability continuously |
| 3 | System Administrator checks logs | Logs show all attempts and success/failure |
| 4 | System Administrator calculates availability | (Successful requests / Total requests) × 100 |
| 5 | System Administrator reviews result | Availability calculated: 99.6% |
| 6 | System Administrator confirms SLA | 99.6% exceeds 99.5% target |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-068

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-068 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System recovers gracefully from database connection failure during import

## Preconditions

1. Import in progress
2. Database connection intentionally severed
3. Automatic recovery configured

## Test Data

| Field | Value |
|---|---|
| File | recovery_test.xml |
| Failure Type | Database connection lost |
| Recovery Timeout | 30 seconds |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator initiates import | Import begins processing |
| 2 | System Administrator monitors progress | Import proceeds normally |
| 3 | Database connection drops | Connection interrupted |
| 4 | System detects failure | Automatic reconnection attempted |
| 5 | Database connection restored | Connection re-established within 30 seconds |
| 6 | Import completes successfully | Import continues and completes; Data consistent |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-069

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-069 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System memory usage remains stable during large batch import operations

## Preconditions

1. Large batch import of 10 files (5 MB each)
2. Memory monitoring enabled
3. System metrics collection active

## Test Data

| Field | Value |
|---|---|
| Files | 10 XML files |
| Size per File | 5 MB |
| Total | 50 MB batch |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator monitors memory baseline | Initial memory usage: 512 MB |
| 2 | System Administrator starts batch import | Import of 10 files begins |
| 3 | System processes files sequentially | Files imported one after another |
| 4 | System Administrator monitors memory during import | Memory tracked throughout |
| 5 | System Administrator checks memory after completion | Final memory usage: 520 MB |
| 6 | System Administrator confirms stability | Memory increase minimal (8 MB); Stable |

## Reviewer Comments

*To be completed during review.*

---

# END-TO-END TEST CASES

---

# TC-FE768248-070

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-070 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator can complete entire XML import workflow from upload to database confirmation

## Preconditions

1. System Administrator logged in
2. Valid XML file ready (single HAZID study)
3. Import Studies page accessible

## Test Data

| Field | Value |
|---|---|
| File | complete_workflow.xml |
| Methodology | HAZID |
| Size | 3 MB |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator navigates to Import Studies page | Page loads with upload interface |
| 2 | System Administrator selects complete_workflow.xml | File selected in browser |
| 3 | System Administrator uploads file | File transmitted successfully |
| 4 | System Administrator waits for validation | System validates XML structure and content |
| 5 | System Administrator reviews validation summary | All checks passed; Ready to import |
| 6 | System Administrator clicks "Proceed with Import" | Import process completes; Study now in database |
| 7 | System Administrator verifies in database | New study visible in Enablon PHA |
| 8 | System Administrator confirms end-to-end success | Complete workflow successful |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-071

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-071 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

API Consumer can complete entire import workflow via REST API endpoints

## Preconditions

1. API Consumer with valid credentials
2. XML file ready for import
3. Import API endpoints operational

## Test Data

| Field | Value |
|---|---|
| API Endpoint | /api/v1/import/studies |
| Auth | Bearer token |
| File | api_workflow.xml |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | API Consumer prepares API request | Request headers and body configured |
| 2 | API Consumer calls POST /api/v1/import/studies | Request transmitted |
| 3 | System authenticates request | Bearer token validated |
| 4 | API Consumer uploads XML file | File received by API |
| 5 | System validates file content | Validation completes successfully |
| 6 | System persists to database | Study imported into database |
| 7 | API Consumer receives success response | HTTP 201 Created with study ID |
| 8 | API Consumer queries GET /api/v1/studies/{id} | New study retrieved via API |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-072

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-072 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator can resolve mapping conflicts and complete import after manual field reconciliation

## Preconditions

1. XML with non-standard field names uploaded
2. Automatic mapping identified conflicts
3. Manual reconciliation UI available

## Test Data

| Field | Value |
|---|---|
| File | mapping_conflicts.xml |
| Conflicts | 3 unmapped fields |
| Resolution | Manual mapping |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator uploads mapping_conflicts.xml | File uploaded; Conflicts detected |
| 2 | System Administrator views conflict report | 3 unmapped fields displayed |
| 3 | System Administrator maps "Field1" to "CanonicalField1" | First mapping confirmed |
| 4 | System Administrator maps "Field2" to "CanonicalField2" | Second mapping confirmed |
| 5 | System Administrator maps "Field3" to "CanonicalField3" | Third mapping confirmed |
| 6 | System Administrator clicks "Complete Import" | All mappings applied |
| 7 | System validates with mappings | File validates successfully |
| 8 | System Administrator confirms import | Study successfully imported |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-073

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-073 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Reviewer can approve uploaded XML file and System Administrator can proceed with import

## Preconditions

1. XML file uploaded and validated
2. Review workflow configured
3. Reviewer and System Administrator available

## Test Data

| Field | Value |
|---|---|
| File | review_workflow.xml |
| Reviewer | QA Reviewer |
| Admin | System Administrator |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator uploads review_workflow.xml | File uploaded successfully |
| 2 | Reviewer navigates to Review Queue | Pending file displayed |
| 3 | Reviewer opens file for inspection | File details and validation results shown |
| 4 | Reviewer adds comments | "Approved for import - all validations passed" |
| 5 | Reviewer clicks "Approve" button | File marked as approved |
| 6 | System Administrator views approval status | File shows "Approved by Reviewer" |
| 7 | System Administrator clicks "Import Approved File" | Import process initiated |
| 8 | System Administrator confirms completion | Study successfully imported into database |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-074

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-074 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator can cancel import in-flight and retain uploaded file for future retry

## Preconditions

1. Large import in progress
2. System Administrator decides to stop
3. Retry capability enabled

## Test Data

| Field | Value |
|---|---|
| File | cancel_workflow.xml |
| Size | 15 MB |
| Progress | 40% complete |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator initiates import | Import begins processing |
| 2 | System Administrator monitors progress | Progress shows 40% complete |
| 3 | System Administrator clicks "Cancel Import" | Cancellation initiated |
| 4 | System stops processing | Import halted; Changes rolled back |
| 5 | System Administrator views file status | File retained as "Uploaded, not imported" |
| 6 | System Administrator later clicks "Retry Import" | Same file available for import |
| 7 | System Administrator confirms retry | Import proceeds from beginning |
| 8 | System Administrator confirms completion | Study imported successfully |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE768248-075

## Metadata

| Field | Value |
|---|---|
| Test Case ID | TC-FE768248-075 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator receives comprehensive import summary report with statistics

## Preconditions

1. Large import completed (5 studies, 500+ rows)
2. System Administrator viewing results
3. Report generation enabled

## Test Data

| Field | Value |
|---|---|
| File | summary_report.xml |
| Studies Imported | 5 |
| Total Rows | 542 |
| Processing Time | 45 seconds |

## Test Steps

| Step | Action | Expected Result |
|---|---|---|
| 1 | System Administrator completes import | Import finalized |
| 2 | System generates import report | Report created automatically |
| 3 | System Administrator navigates to Report page | Report displays |
| 4 | System Administrator views header | Shows: File name, Import timestamp, User |
| 5 | System Administrator reviews statistics | Shows: 5 studies, 542 rows, 8 columns |
| 6 | System Administrator views performance metrics | Shows: Processing time (45 seconds), Size (8.5 MB) |
| 7 | System Administrator views success status | All items successfully imported |
| 8 | System Administrator downloads report | PDF report generated and downloaded |

## Reviewer Comments

*To be completed during review.*

---

## Summary Statistics

| Metric | Value |
|--------|-------|
| Total Test Cases | 75 |
| Functional Tests | 25 |
| Role-Based & Access Control | 10 |
| Edge Cases & Exploratory | 15 |
| Integration Tests | 7 |
| Security & Accessibility | 6 |
| Performance & Reliability | 6 |
| End-to-End Tests | 6 |

---

**Document Status:** DRAFT - Ready for QA Lead Review  
**Created:** 6/1/2026  
**Last Updated:** 6/1/2026
