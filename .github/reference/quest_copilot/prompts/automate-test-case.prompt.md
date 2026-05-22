# Automate Test Case

## Purpose
Transform Azure DevOps Test Case into working Gherkin scenario with step definitions and page objects, maximizing reuse of existing framework elements.

## Input Parameters
- **TEST_CASE_ID**: Azure DevOps test case identifier to automate (number)
- **REFERENCE_TEST_CASE_ID**: (Optional) Reference test case ID for pattern analysis (number)

## Steps to Execute

### Research Phase
1. **System Configuration Analysis**: Check if test case requires config file changes, user credentials, feature flags
2. **Exhaustive Step Research**: Search existing scenarios using multiple approaches (keywords, synonyms, business domain)
3. **Business Logic Understanding**: Map test case terminology to existing framework elements
4. **Page Object Method Validation**: Verify all needed methods exist before planning new steps
5. **Pattern Analysis**: Study 5+ similar scenarios to understand vocabulary and flow patterns

### Implementation Phase
6. **Retrieve Test Case**: Get work item details from Azure DevOps
7. **Find Reference Scenario** (if REFERENCE_TEST_CASE_ID provided): Locate existing automated scenario and analyze its step patterns
8. **Generate Gherkin**: Create feature file scenario following framework patterns and reusing similar steps
9. **System Configuration**: Apply required config file changes, add constants, setup users
10. **Create Step Definitions**: Generate JavaScript step implementations only for truly new steps (justify why existing insufficient)
11. **Update Page Objects**: Add required page object methods only if confirmed selectors exist
12. **Apply Changes**: Create/update actual files in the repository

## System Configuration Requirements

Before creating scenarios, analyze if the test case requires:
1. **Configuration file changes** (*.config.xml, settings files) - Look for terms like "configured", "specificAuthorityProperties", "setup"
2. **New user credentials** or test data setup in globals.json
3. **Feature flags** or system properties enabling specific behaviors
4. **Constants additions** (SignatureType, UsersFullName, ModalTitle enums)
5. **Database setup** or API configurations

Search the test case description for technical indicators:
- "configured", "setup", "properties", "authority", "roles"
- Specific signature names, user types, system behaviors
- References to enforcement, validation rules, or constraints

## File Location Rules
- Feature files: `tests/features/web/<domain>/<featureName>.feature`
- Step definitions: `tests/step_definitions/<domain>/<file>.js`
- Page objects: `pages/<domain>/<pageName>.js`
- Domain derived from Area Path (e.g., "Control of Work" → "controlOfWork")

## Gherkin Generation Rules

### Tags
- First tag: `@<TEST_CASE_ID>` (work item ID)
- Add 2-4 classification tags based on functionality

### Scenario Title
- Use Test Case Title

### Step Research Process (MANDATORY - Do This First)

**Exhaustive Search Strategy**:
1. Search for exact keywords from test case actions
2. Search for synonyms and variations (e.g., "sign" vs "approve", "authority" vs "user")
3. Search by business domain (signatures, permits, authorities, validation)
4. Search by UI elements mentioned in test steps
5. Use grep_search with regex patterns to find similar step implementations

**Pattern Analysis**: When you find similar scenarios:
- Analyze the COMPLETE flow, not just individual steps
- Note what constants/enums are used (SignatureType, UsersFullName)
- Identify the business objects involved
- Map test case actions to existing step vocabulary

**Step Validation**: Before creating ANY new step:
- Verify 3+ existing scenarios couldn't be adapted with different parameters
- Check if the validation already exists with different wording
- Confirm page object methods exist for any new steps
- Document why existing steps are insufficient

### Business Logic Analysis

1. **Read Test Case Holistically**: Don't just translate steps - understand the business scenario
2. **Identify Key Entities**: What signatures, certificates, users, roles are involved?
3. **Map Technical Terms**: 
   - "Test signature text message" → Look for TEST_SIGNATURE_TEXT_MESSAGE constant
   - "specificAuthorityProperties" → System configuration requirement
   - "enforcing signatures" → Validation flow, not just creation
4. **Question Test Case Logic**: What is the test REALLY testing?
   - Not just "can we sign" but "does the enforcement work correctly"
   - Focus on the validation/enforcement aspect, not just the happy path

### Step Mapping
- **Given**: Setup and preconditions
- **When**: User actions and interactions  
- **Then**: Validations and expected results
- Use data tables for multiple field inputs
- **Prioritize reusing existing steps** with similar meanings over creating new ones
- **Map test case actions to existing step patterns** even if wording differs

### Step Matching Strategy
When REFERENCE_TEST_CASE_ID is provided:
1. Find the corresponding automated scenario in feature files using grep_search for @<REFERENCE_TEST_CASE_ID>
2. Analyze the step patterns and vocabulary used
3. Map similar actions from the new test case to existing step implementations
4. Adapt the wording to match existing patterns rather than creating new steps
5. Only create new steps when no existing step can reasonably cover the action
6. **Study the complete business flow** - understand what the reference test validates

## Page Object Method Validation (REQUIRED)

Before using any page object methods in new steps:
1. **Search for existing methods** in the page object files using grep_search
2. **Verify method signatures** match your usage pattern
3. **Check similar implementations** in existing step definitions
4. **If method doesn't exist**: Either find alternative existing method or document what page object changes are needed
5. **Test selectors exist**: Don't assume UI elements exist without verification

## Constants and System Setup

1. **Check Required Constants**: Search constants/ folder for:
   - SignatureType entries for any signature names mentioned
   - UsersFullName entries for specific users
   - Modal titles and system enums
2. **Add Missing Constants**: If test case mentions specific technical names, add them to appropriate constant files
3. **User Credentials**: Check if test requires specific users in globals.json with proper roles/permissions
4. **System Configuration**: Look for *.config.xml files that need updates for business rules

## Implementation Process

After analyzing the test case, **automatically create and update files**:

1. **Retrieve test case** using `mcp_ado_wit_get_work_item` tool
2. **System configuration analysis** - check for config file changes needed
3. **Find reference scenario** (if REFERENCE_TEST_CASE_ID provided) by searching for @<REFERENCE_TEST_CASE_ID> in feature files
4. **Analyze reference patterns** to understand step vocabulary and structure used in similar scenarios
5. **Search existing features** extensively to find appropriate feature file location and similar step implementations
6. **Add required constants** and user credentials if needed
7. **Create/update feature file** with new scenario, prioritizing reuse of existing step patterns
8. **Apply system configuration changes** (*.config.xml files, etc.)
9. **Generate step definitions** only for truly new steps that cannot be covered by existing implementations
10. **Update page objects** with required methods (only if selectors confirmed to exist)
11. **Report completion** with summary of changes made and step reuse statistics

## Quality Requirements

### Framework Compliance Checklist (Before Implementation)
- [ ] **90%+ step reuse achieved** (count existing vs new steps)
- [ ] **System configuration changes identified** and implemented (*.config.xml, etc.)
- [ ] **All required constants added** (SignatureType, UsersFullName, etc.)
- [ ] **User credentials and test data setup** completed in globals.json
- [ ] **All new steps have confirmed page object method support**
- [ ] **Technical terms from test case mapped** to framework elements
- [ ] **Business logic understood** - test validates enforcement/rules, not just happy path
- [ ] **Use data tables for multi-field inputs**

### Technical Debt Prevention
**STOP and reconsider if you're creating:**
- New step definitions when similar validations exist with different wording
- Page object methods without confirming the selectors exist in the UI
- Hard-coded values that should be constants
- Complex scenarios that could be simplified with better test data setup

**Remember**: The best automation requires the least new code while providing maximum business value.

### Original Quality Requirements
- No hardcoded waits or selectors in steps
- Business-semantic step names (not UI mechanics)
- **Reuse existing steps where possible** - prefer adapting wording to match existing patterns
- Use data tables for multi-field inputs
- **Minimize new step creation** - only when no existing step can reasonably be adapted

### Avoid: Creating New Steps When Existing Ones Work
```gherkin
# DON'T create new steps like:
Then Signature 'TYPE' label contains authority name 'USER'
Then User ID field shows 'USER' and is read-only

# DO use existing patterns:
Then Signature 'TYPE' has label with value 'Expected Text'
Then User ID field value is 'Expected' and is not editable
```

## Execution Instructions
When this prompt is invoked:
1. **Research Phase**:
   - Get test case details from Azure DevOps
   - Analyze for system configuration requirements
   - Search extensively for existing similar scenarios and step patterns
   - Map all technical terms to framework elements
   - Validate that any planned page object methods exist
2. **Implementation Phase**:
   - If REFERENCE_TEST_CASE_ID provided, find and analyze the reference scenario's patterns
   - Apply required system configuration changes (*.config.xml, constants, users)
   - Generate Gherkin scenario with maximum step reuse (target 90%+)
   - **Only create new step definitions if absolutely necessary** (justify why existing insufficient)
   - **Actually create/modify the files** using available file editing tools
3. **Reporting**:
   - Report what files were created/modified
   - Document step reuse statistics (X existing vs Y new steps)
   - List any system configuration changes applied
   - Note any missing page object methods that would need implementation

**Critical Success Factors:**
- Understanding the business logic, not just translating test steps
- Maximum reuse of existing framework elements
- Proper system configuration for the test scenario to actually work
- Minimal new code creation while achieving full test coverage

**Do not just provide output - make the actual code changes to implement the test automation with proper system configuration.**

