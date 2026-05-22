# Test Case Coverage Verification

## Purpose
Verify if the automated scenario covers all steps and checks from the corresponding manual test case, ensuring complete test coverage with zero tolerance for missing functional steps.

## Input Parameters
- **TEST_CASE_ID**: Azure DevOps test case identifier (number)

### Task:
1. **Retrieve test case** using `mcp_ado_wit_get_work_item` tool
2. **Locate the automated scenario**: Find the scenario tagged with `@[TEST_CASE_ID]` in the E2E testing framework
3. **Extract scenario details**: Show me the complete scenario including all steps, data tables, and assertions
4. **Provide coverage analysis**: Compare the automated scenario against the manual test case requirements retrieved from Azure

### Coverage Verification Checklist:

#### 1. **Preconditions & Setup** ℹ️ **Note: Can be pre-configured in test environment**
- [ ] Are critical preconditions covered (or documented as pre-configured)?
- [ ] Is the correct user role/permissions set up (or available in test env)?
- [ ] Is the initial application state configured correctly (or baseline established)?

#### 2. **Test Steps Coverage** ⚠️ **CRITICAL - Any missing step is a major issue**
- [ ] Are ALL manual test steps represented in the automation? (100% required)
- [ ] Are user interactions (navigation, form filling, clicks) covered?
- [ ] Are business workflow transitions properly tested?
- [ ] Is the step sequence and order matching the manual test case?
- [ ] Are conditional steps and branching paths covered?

#### 3. **Data & Input Validation**
- [ ] Are all required field inputs covered?
- [ ] Are data tables comprehensive and realistic?
- [ ] Are edge cases and boundary conditions included?

#### 4. **Assertions & Verifications** ⚠️ **CRITICAL - Missing validations are major gaps**
- [ ] Are ALL expected results from manual test case validated? (100% required)
- [ ] Are UI state changes verified?
- [ ] Are business rule validations included?
- [ ] Are error conditions and messages checked?
- [ ] Are success confirmations and feedback messages validated?

#### 5. **Functional Coverage**
- [ ] Are all main functional paths covered?
- [ ] Are alternative flows included?
- [ ] Are exception handling scenarios tested?

#### 6. **Step-by-Step Coverage Analysis** ⚠️ **MANDATORY SECTION**
- [ ] Create a detailed mapping table: Manual Step → Automated Step(s)
- [ ] Identify any manual steps with NO automation coverage
- [ ] Verify step sequence and logical flow matches manual test case
- [ ] Confirm all decision points and branches are covered

### Expected Output:
Please provide:
1. **Manual Test Case Details**: Complete test case information retrieved from Azure including:
   - Test case title and description
   - Test steps with expected results
   - Preconditions and setup requirements
   - Acceptance criteria
2. **Scenario Location**: File path and line number of the automated scenario
3. **Complete Scenario**: Full Gherkin scenario text
4. **Coverage Assessment**: Analysis against each checklist item comparing manual vs automated
5. **Gap Analysis**: Specific missing steps, validations, or test data when comparing manual test case to automation
6. **Recommendations**: Prioritized suggestions for improvement based on manual test case requirements
7. **Coverage Score**: Overall assessment (1-10) with justification and **MANDATORY step coverage breakdown**
8. **Step Coverage Matrix**: Detailed mapping of each manual test step to automated scenario step(s)

### ⚠️ **CRITICAL COVERAGE REQUIREMENTS** ⚠️

**ZERO TOLERANCE for missing test steps**: Any manual test step not covered in automation automatically reduces the coverage score to MAXIMUM 4/10, regardless of other factors.

**Step Coverage Severity Levels**:
- **CRITICAL FAILURE**: Missing any core functional step = Max score 4/10
- **MAJOR ISSUE**: Missing validation or assertion step = Max score 6/10  
- **MODERATE ISSUE**: Missing edge case or error handling = Max score 8/10
- **MINOR ISSUE**: Missing non-critical UI validation or precondition = Max score 9/10

### Coverage Rating Scale:
- **9-10**: **COMPLETE** step coverage (100% of manual steps covered) + comprehensive validations
- **7-8**: **COMPLETE** step coverage (100% of manual steps covered) + some gaps in edge cases
- **5-6**: **COMPLETE** step coverage (100% of manual steps covered) + missing important validations  
- **3-4**: **INCOMPLETE** step coverage (missing 1+ core functional steps) + other gaps
- **1-2**: **SEVERELY INCOMPLETE** step coverage (missing multiple core steps) + major rework needed

### ⚠️ **SCORING RULES**:
1. **Automatic ceiling of 4/10** if ANY manual test step is missing from automation
2. **Automatic ceiling of 6/10** if ANY expected result validation is missing  
3. **Automatic ceiling of 8/10** if ANY critical error handling is missing
4. Only scenarios with 100% step coverage can score above 6/10
5. **Preconditions**: Missing preconditions are considered MINOR if they can be pre-configured in test environment

---

## Example Usage:
Replace `[TEST_CASE_ID]` with `558972` to analyze the "Discard functionality works with different kinds of fields" scenario.

## Notes:
- **Always start by retrieving the manual test case from Azure** using MCP tools before analyzing automation coverage
- **ZERO TOLERANCE**: Any missing test step automatically caps coverage at 4/10
- **Step Coverage is MANDATORY**: Must provide detailed step-by-step mapping
- **Preconditions are flexible**: Test environment may have pre-configured setups (document assumptions)
- Focus on business logic coverage, not just UI automation
- Consider both positive and negative test scenarios from the manual test case
- Evaluate test data realism and variety against manual test case requirements
- Assess maintainability and clarity of the automated steps
- Compare automation steps directly against manual test case steps for accuracy
- Ensure all manual test case acceptance criteria are covered in automation
- **Flag any missing functional step as a CRITICAL ISSUE requiring immediate attention**

---

## Step Coverage Analysis Template

When analyzing coverage, provide the following detailed breakdown:

### 🔍 **STEP-BY-STEP COVERAGE MATRIX**
| Manual Test Step | Expected Result | Automated Step(s) | Coverage Status | Impact |
|------------------|-----------------|-------------------|-----------------|---------|
| 1. [Manual step] | [Expected result] | [Automated step or "❌ MISSING"] | ✅ Covered / ❌ Missing / ℹ️ Pre-configured | Critical/Major/Minor |
| 2. [Manual step] | [Expected result] | [Automated step or "❌ MISSING"] | ✅ Covered / ❌ Missing / ℹ️ Pre-configured | Critical/Major/Minor |

*Note: Use "ℹ️ Pre-configured" status for preconditions that are established in the test environment*

### 🚨 **MISSING STEPS REPORT**
List all manual test steps that have NO automation coverage:
- **Step X**: [Description] - **IMPACT**: [Critical/Major/Minor]
- **Step Y**: [Description] - **IMPACT**: [Critical/Major/Minor]

### 📊 **COVERAGE METRICS**
- **Total Manual Steps**: [X]
- **Covered Steps**: [Y] 
- **Missing Steps**: [Z]
- **Step Coverage Percentage**: [Y/X * 100]%
- **Critical Missing Steps**: [Count]
- **Major Missing Steps**: [Count]

### ⚠️ **FINAL COVERAGE SCORE CALCULATION**
1. **Base Score**: [1-10] 
2. **Step Coverage Penalty**: -[points] (for missing steps)
3. **Validation Coverage Penalty**: -[points] (for missing assertions)
4. **Final Score**: [X/10] 

**Score Justification**: [Explain why this score was assigned based on missing steps and validation gaps]
