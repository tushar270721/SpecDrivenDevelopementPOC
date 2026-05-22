---
name: generate-test-report
description: Generate formatted test execution reports (Markdown and HTML) with metrics and traceability. Trigger: "Generate test report", "Create report", "Report results"
argument-hint: "Provide test execution results (passed from run-automation-tests)"
---

## When to Use
Activate after automation tests execute and results are collected.
This skill will generate formatted, professional reports with metrics and analytics.

## Preconditions
- Test execution results available (from run-automation-tests)
- Test execution logs collected
- Screenshots captured for failed tests
- test-cases.md file exists for linking
- Feature ID known
- reports/ directory exists or will be created

## Workflow

1. **Step 1: Receive Execution Results**
   - Receive: Test results from run-automation-tests skill
   - Extract: Feature ID, Test scope (new-only or full-regression)
   - Extract: Total tests, Passed count, Failed count, Skipped count
   - Extract: Execution duration
   - Extract: Failed test details with messages
   - Extract: Screenshot paths
   - Status: RESULTS_RECEIVED

2. **Step 2: Calculate Metrics**
   - Calculate: Pass rate % = (Passed / Total) × 100
   - Calculate: Failure rate % = (Failed / Total) × 100
   - Calculate: Skip rate % = (Skipped / Total) × 100
   - Calculate: Average test execution time
   - Calculate: Slowest and fastest tests
   - Extract: Test execution timeline
   - Status: METRICS_CALCULATED

3. **Step 3: Organize Report Data**
   - Create: Summary section (overview)
   - Create: Detailed results section (all tests)
   - Create: Failed tests section (with screenshots)
   - Create: Test breakdown by category (E2E, Integration, API)
   - Create: Performance metrics section
   - Create: Feature traceability links
   - Status: REPORT_DATA_ORGANIZED

4. **Step 4: Generate Markdown Report**
   - Create: `reports/test-report-{date}-{feature-id}.md`
   - Include:
     - Header: Feature ID, Title, Test Scope, Execution Date/Time
     - Summary: Total, Passed, Failed, Skipped, Pass Rate %
     - Execution Timeline: Start time, End time, Duration
     - Test Results Table: Test ID, Test Name, Status, Duration, Category
     - Failed Tests Section: Test name, Error message, Screenshot link, Suggestion
     - Category Breakdown: E2E results, Integration results, API results
     - Metrics: Charts data (ASCII or markdown table format)
     - Links: Link to Azure test cases and feature
   - Format: Clean, readable markdown
   - Status: MARKDOWN_REPORT_CREATED

5. **Step 5: Generate HTML Report**
   - Create: `reports/test-report-{date}-{feature-id}.html`
   - Include:
     - Same sections as markdown report
     - Professional HTML layout
     - Interactive elements (collapsible failed tests)
     - Charts: Pass rate pie chart, Results bar chart
     - Screenshots: Embedded in report for failed tests
     - Styling: Professional CSS
     - Print-friendly: Can print to PDF
   - Format: Professional, stakeholder-ready
   - Status: HTML_REPORT_CREATED

6. **Step 6: Create Report Summary**
   - Generate: Summary text for team notification
   - Include: Feature ID, Pass rate %, Failed count
   - Include: Key findings or issues
   - Include: Report file links
   - Include: Next steps (fix failures, merge, etc.)
   - Status: SUMMARY_CREATED

7. **Step 7: Link Results to Azure DevOps**
   - Get: Azure test case IDs from test-cases.md
   - For each test:
     - Link: Test result to Azure Test Case
     - Update: Test Case status in Azure (Passed/Failed/Blocked)
     - Add: Link to report in Azure
   - Status: AZURE_LINKED

8. **Step 8: Return Results**
   - Return: Markdown report path
   - Return: HTML report path
   - Return: Summary statistics
   - Return: Failed tests summary (if any)
   - Return: Links to Azure updates
   - Status: Report generated and published

## Notes
- Report file naming: `test-report-YYYY-MM-DD-HHmmss-feature-{id}.md/html`
- Include feature ID for easy filtering
- Failed test screenshots embedded in HTML for quick review
- Reports are permanent artifacts, not deleted
- Each test run creates new report (historical tracking)
- Summary email can reference report links
- Pass rate trends tracked over time
- Reports linked to Azure DevOps for traceability
