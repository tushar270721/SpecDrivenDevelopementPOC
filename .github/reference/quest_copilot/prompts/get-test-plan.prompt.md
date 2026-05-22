# Export Azure DevOps Test Plan

## Purpose
Retrieve and save the complete test plan from Azure DevOps, including all test suites and test cases, to a local file for analysis, documentation, and offline reference.

## Input Parameters
- **Project Name**:
- **Test Plan ID**: 
- **Parent Test Suite ID**: 

OR extract them from provided URL

## Execution Workflow

### Step 1: Export Test Plan with Authentication
Execute the testing-framework-get-test-plan command which automatically retrieves the Azure DevOps token and exports the test plan:

**Single Command**:
```powershell
$token = (az account get-access-token --query accessToken -o tsv); npx testing-framework-get-test-plan --azureDevOpsToken $token --azureDevOpsOrganisationURL 'https://dev.azure.com/enablon' --azureDevOpsProjectName '<PROJECT_NAME>' --azureDevOpsTestPlanId <TEST_PLAN_ID> --azureDevOpsParentTestSuiteId <PARENT_SUITE_ID>
```

**Parameter Breakdown**:
- `$token = (az account get-access-token --query accessToken -o tsv)`: Retrieves the Azure DevOps access token and stores it in a variable
- `--azureDevOpsToken $token`: Uses the token for authentication
- `--azureDevOpsOrganisationURL`: Azure DevOps organization URL (typically `https://dev.azure.com/enablon`)
- `--azureDevOpsProjectName`: The project name from input parameters
- `--azureDevOpsTestPlanId`: The test plan ID from input parameters
- `--azureDevOpsParentTestSuiteId`: The parent suite ID from input parameters

### Step 2: Wait for Command Completion
After executing the command, wait for it to complete. Monitor the console output for the following progress indicators:

- Setting up Azure DevOps connection
- Successfully connected  
- Fetching test plan...

The command may take several seconds to minutes depending on the size of the test plan. Do not proceed until you see confirmation that the export has finished and the file has been created.

### Step 3: Verify Output
After successful execution:
1. Check that the file was created at the default location: `artifacts/testPlan/test-plan-<testPlanId>.md`
2. Verify the file contains the complete hierarchy with:
   - Test plan name and ID
   - Hierarchical suite structure (marked with 📁)
   - Test cases within each suite (marked with 📄)
   - Suite and test case IDs

### Step 4: Confirm Completion
Provide feedback to the user:
- File location where the Test Plan was saved
- Summary of the exported structure (number of suites and test cases)
- Any errors or warnings encountered during export

## Prerequisites

### Required Tools
- **Azure CLI**: Must be installed and configured
  - Verify: `az --version`
  - Login: `az login`
  - Set account: `az account set --subscription <subscription-id>`

- **Node.js & npm**: Required for npx command
  - Verify: `node --version` and `npm --version`

- **Testing Framework Core**: Must be installed in the project
  - Verify: Check `node_modules/@evision/testing-framework-core` exists
  - Install if needed: `npm install`

### Required Permissions
- Read access to Azure DevOps test plans in the specified project
- Valid Azure subscription with appropriate role assignments

## Error Handling

### Common Issues and Solutions

1. **Authentication Failure**:
   - **Error**: `az account get-access-token` fails
   - **Solution**: Run `az login` and ensure you're logged into the correct account

2. **Invalid Project Name**:
   - **Error**: Project not found
   - **Solution**: Verify the project name matches exactly (case-sensitive, including spaces)

3. **Invalid Test Plan or Suite ID**:
   - **Error**: Test plan or suite not found
   - **Solution**: Verify IDs in Azure DevOps web interface

4. **Permission Denied**:
   - **Error**: Access denied to test plan
   - **Solution**: Request appropriate permissions from Azure DevOps administrator

5. **Command Not Found**:
   - **Error**: `npx testing-framework-get-test-plan` not found
   - **Solution**: 
   1. Check the version of `@evision/testing-framework-core` with `npm list @evision/testing-framework-core`.
   2. If the version is not 7.5.0 or higher, upgrade it by running `npm update @evision/testing-framework-core` or update your `package.json` to specify a version >=7.5.0 and then run `npm install` or `yarn`.

## Usage Tips

### When to Use This Prompt
- **Initial setup**: Creating the test plan file for the first time
- **Regular updates**: Refreshing the test plan after test plan changes
- **Documentation**: Generating up-to-date test plan documentation
- **Analysis**: Offline analysis of test coverage and organization
- **Integration**: Enabling other prompts (like `find-related-tcs.prompt.md`) to use the test plan

## Notes for AI Assistants

### Execution Steps
1. **Always** authenticate first with `az account get-access-token`
2. **Extract** the `accessToken` field from the JSON response
3. **Execute** the npx command with all required parameters
4. **Verify** the output file was created successfully
5. **Report** back to the user with confirmation and summary

### Command Execution Notes
- Use PowerShell syntax for variable handling (`$token`, etc.)
- Ensure the Azure DevOps organization URL is properly quoted
- Token should be passed as-is without additional quotes

### Success Criteria
- Command executes without errors
- File `artifacts/testPlan/test-plan-<testPlanId>.md` is created or updated
- File contains hierarchical structure with suites and test cases
- User receives confirmation with file location and summary

### Error Recovery
- If authentication fails, guide user through `az login` process
- If command fails, check for missing parameters or typos
- If file is not created, verify write permissions