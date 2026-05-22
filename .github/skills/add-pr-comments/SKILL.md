---
name: add-pr-comments
description: Add inline PR review comments on GitHub for code violations and suggestions. Trigger: "Add PR comments", "Post review feedback", "Comment on PR"
argument-hint: "Provide PR review results (from make-a-pr-review skill)"
---

## When to Use
Activate after make-a-pr-review skill completes and violations identified.
This skill will post detailed, actionable inline comments on the PR for developer feedback.

## Preconditions
- PR exists on GitHub
- Review completed by make-a-pr-review skill
- Violations list available
- GitHub MCP configured
- User has write permissions to repository
- Review status determined (CHANGES_REQUESTED or APPROVE_WITH_SUGGESTIONS)

## Workflow

1. **Step 1: Receive Review Results**
   - Receive: PR ID, violations list, review status
   - Extract: All violations with line numbers and severity
   - Extract: Suggestions and fix recommendations
   - Extract: Summary violations count
   - Status: REVIEW_RESULTS_RECEIVED

2. **Step 2: Organize Comments by File**
   - Group violations by: File path
   - Sort by: Line number within each file
   - Group by: Severity (Critical first)
   - Add: Context (which standard violated)
   - Status: COMMENTS_ORGANIZED

3. **Step 3: Post Inline Comments**
   - Use GitHub MCP: `mcp_github_create_review_comment`
   - For each violation:
     - File: File path with violation
     - Line: Specific line number
     - Comment body:
       - Severity: [Critical/High/Medium/Low]
       - Issue: Clear description of violation
       - Standard: Reference to Constitution.md, Plan.md, or quest_copilot
       - Suggestion: How to fix
       - Example: If applicable, show corrected code
     - Status: POSTED
   - Track: All posted comments
   - Status: ALL_INLINE_COMMENTS_POSTED

4. **Step 4: Post Summary Comment**
   - Create: Summary comment on PR conversation
   - Include:
     - Review Status: CHANGES_REQUESTED / APPROVE_WITH_SUGGESTIONS / APPROVED
     - Statistics: Total violations by severity
     - Summary: Overview of main issues
     - Critical Issues: List of must-fix items (if any)
     - Guidelines: Link to Constitution.md and Plan.md
     - Next Steps: What developer should do
   - Format: Professional, clear, actionable
   - Status: SUMMARY_POSTED

5. **Step 5: Set PR Status**
   - Use GitHub MCP: Set PR status
   - If CHANGES_REQUESTED: Request changes (block merge)
   - If APPROVE_WITH_SUGGESTIONS: Approve but keep comments visible
   - If APPROVED: Approve without changes needed
   - Status: PR_STATUS_SET

6. **Step 6: Notify Development Team**
   - Add: Mention relevant team members
   - Include: Link to violation discussion (if needed)
   - Status: TEAM_NOTIFIED

7. **Step 7: Return Results**
   - Return: PR ID and title
   - Return: Review status
   - Return: Number of comments posted
   - Return: Comment locations (file/line)
   - Return: Next step instructions for developer
   - Status: Comments posted, PR awaiting developer response

## Notes
- Each comment includes: Issue, Standard, Suggestion, Example
- Critical violations must be fixed (block merge)
- High violations should be fixed (strong recommendation)
- Medium/Low violations are suggestions (nice to have)
- Comments are constructive, not judgmental
- Developer can reply to comments or push fixes
- After fixes: Developer re-requests review
- Loop: make-a-pr-review → add-pr-comments → developer fixes → repeat
- Once approved: Can proceed to merge (human final approval)
