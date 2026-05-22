---
name: make-a-pr-review
description: Automated code review for pull requests checking quality standards and best practices. Trigger: "Review PR", "Check code quality", "Validate PR"
argument-hint: "Provide PR URL or repository context (applies to active PR)"
---

## When to Use
Activate when a pull request is created (from development or automation branch) and needs automated quality review.
This skill will analyze code against Constitution.md standards and best practices.

## Preconditions
- Pull request exists on GitHub
- PR has changed files (code to review)
- Constitution.md and Plan.md standards defined
- quest_copilot framework standards available
- Code review tools accessible

## Workflow

1. **Step 1: Get PR Information**
   - Identify: PR number and URL
   - Extract: PR title and description
   - Extract: PR branch name (feature/... or automation/...)
   - Extract: Changed files list
   - Determine: PR type (development code or automation code)
   - Status: PR_IDENTIFIED

2. **Step 2: Analyze Condition**
   - If PR from `feature/*` branch: proceed with **Path A** (Development Code Review)
   - If PR from `automation/*` branch: proceed with **Path B** (Automation Code Review)
   - If other branch: proceed with **Path C** (General Code Review)

### Path A - Development Code Review

**Step A.1:** Check Against Constitution Standards
- Verify: Code follows project principles from Constitution.md
- Check: Code quality standards met
- Check: Testing requirements addressed
- Check: Performance guidelines followed
- Collect: Any violations with references to Constitution
- Status: CONSTITUTION_CHECKED

**Step A.2:** Check Implementation Quality
- Check: Best practices followed
- Check: No hardcoded values (use config.js)
- Check: Proper error handling
- Check: Code organization and structure
- Check: Naming conventions consistent
- Check: No code duplications
- Collect: Violations and suggestions
- Status: QUALITY_CHECKED

**Step A.3:** Check Test Coverage
- Verify: Unit tests written for new functions
- Verify: Test coverage meets requirements (80%+)
- Verify: Edge cases tested
- Verify: Error cases tested
- Collect: Coverage details and gaps
- Status: TEST_COVERAGE_CHECKED

**Step A.4:** Check Security
- Check: No hardcoded secrets/credentials
- Check: Input validation present
- Check: SQL injection prevention (if DB)
- Check: XSS prevention (if UI)
- Check: Authentication/authorization correct
- Collect: Security issues
- Status: SECURITY_CHECKED

**Step A.5:** Generate Violations Report
- Compile: All violations with severity (Critical, High, Medium, Low)
- Include: Specific line references
- Include: References to standards
- Include: Suggestions for fixes
- Create: Structured violation list for commenting
- Status: VIOLATIONS_COMPILED

### Path B - Automation Code Review

**Step B.1:** Check Against quest_copilot Standards
- Verify: Follows Page Object Model patterns
- Verify: Layer separation maintained (Feature/Step/Page)
- Verify: No hardcoded waits in code
- Verify: Assertions only in test steps
- Verify: No UI selectors in step definitions
- Verify: Naming conventions followed
- Collect: Violations with references to quest_copilot
- Status: FRAMEWORK_STANDARDS_CHECKED

**Step B.2:** Check Test Quality
- Verify: Test cases cover acceptance criteria
- Verify: Tests are independent (can run in any order)
- Verify: Proper data setup and teardown
- Verify: No duplicate test logic
- Verify: Edge cases and negative cases included
- Collect: Quality issues
- Status: TEST_QUALITY_CHECKED

**Step B.3:** Check Best Practices
- Verify: Meaningful assertions with error messages
- Verify: Page objects properly organized
- Verify: Components reused where applicable
- Verify: Rate limit validation included (if API test)
- Verify: Stable selectors used (data-testid, id)
- Collect: Best practice issues
- Status: BEST_PRACTICES_CHECKED

**Step B.4:** Check Performance
- Verify: No unnecessary waits
- Verify: Test execution time reasonable
- Verify: Parallel test capability considered
- Verify: Performance benchmarks met
- Collect: Performance concerns
- Status: PERFORMANCE_CHECKED

**Step B.5:** Generate Violations Report
- Compile: All violations with severity
- Include: Framework standard references
- Include: Specific code locations
- Include: Suggestions for improvements
- Create: Structured violation list for commenting
- Status: VIOLATIONS_COMPILED

### Path C - General Code Review

**Step C.1:** Check General Standards
- Apply Path A or B standards based on file types
- Check: Consistency with existing code
- Check: Documentation/comments present
- Collect: Violations
- Status: GENERAL_REVIEW_COMPLETE

---

3. **Step 3: Review Summary**
   - Count: Total violations by severity
   - Identify: Critical issues (must fix)
   - Identify: High issues (should fix)
   - Identify: Medium/Low issues (nice to fix)
   - Create: Summary for comment
   - Status: REVIEW_SUMMARY_CREATED

4. **Step 4: Determine Review Status**
   - If Critical violations: Status = "CHANGES_REQUESTED"
   - If High violations only: Status = "CHANGES_REQUESTED"
   - If Medium/Low only: Status = "APPROVE_WITH_SUGGESTIONS"
   - If no violations: Status = "APPROVED"
   - Status: STATUS_DETERMINED

5. **Step 5: Return Review Results**
   - Return: PR ID and title
   - Return: Review status (CHANGES_REQUESTED / APPROVE_WITH_SUGGESTIONS / APPROVED)
   - Return: Total violations by severity
   - Return: List of violations for commenting step
   - Return: Ready for add-pr-comments skill
   - Status: Review complete, ready for commenting

## Notes
- Review focused on standards adherence, not subjective style
- All violations reference specific standards (Constitution, Plan, quest_copilot)
- Suggestions are constructive and actionable
- Review status determines need for developer fixes
- If violations too many: Mark for senior dev discussion
- Review score/percentage can be calculated
- References Constitution.md for development standards
- References quest_copilot standards for automation code
