# Requirement Analysis Skill

## Purpose
Perform comprehensive requirement analysis on a feature fetched from Azure DevOps. Identify gaps, clarify ambiguities, validate completeness, and prepare the feature for specification creation.

## Trigger Phrases
- "Analyze feature requirements"
- "Perform requirement analysis for FE#12345"
- "Validate feature FE#12345"
- "Analyze FE#12345 and create questions for PO"

## Input Requirements
- Feature ID (e.g., FE#816692)
- Fetched feature data (title, description, acceptance criteria)

## Workflow Phases

### PHASE 1: FETCH FEATURE DATA
**Goal:** Get complete feature information from Azure DevOps

```
✅ Fetch feature using: node .github/config/azure-mcp/fetch-feature.js FE#<ID>
✅ Retrieve: Title, Description, Acceptance Criteria, Comments
✅ Extract all metadata: Priority, State, Assigned To, Created/Updated dates
```

**Questions to Ask:**
- Feature ID valid? (FE#\d+)
- All required fields present?
- Description is complete?

---

### PHASE 2: COMPLETENESS VALIDATION
**Goal:** Verify feature has all critical information

#### Check 1: User Role & Persona
```
Validation:
- [ ] Feature description mentions a user role/persona?
- [ ] Role is clearly identifiable (e.g., "Admin", "PHA User", "Technical PM")?
- [ ] Multiple roles mentioned if applicable?

If FAILED:
→ Question for PO: "Who is the primary user/role for this feature?"
→ Question for PO: "Are there secondary user roles?"
```

#### Check 2: User Action & Goal
```
Validation:
- [ ] Feature describes what user wants to do (action)?
- [ ] Feature describes why they want it (business benefit)?
- [ ] Action is clear and specific (not vague like "improve")?

If FAILED:
→ Question for PO: "What is the primary action users will perform?"
→ Question for PO: "What business problem does this solve?"
```

#### Check 3: Business Context
```
Validation:
- [ ] Why is this feature needed now?
- [ ] What's the business driver (revenue, cost, compliance)?
- [ ] Problem statement clearly stated?

If FAILED:
→ Question for PO: "What is the business context for this feature?"
→ Question for PO: "Why is this a priority now?"
```

#### Check 4: Success Metrics
```
Validation:
- [ ] Success criteria/KPIs defined?
- [ ] How will we measure if feature is successful?
- [ ] Quantifiable metrics present?

If FAILED:
→ Question for PO: "How will we measure success for this feature?"
→ Question for PO: "What are the KPIs?"
```

---

### PHASE 3: ACCEPTANCE CRITERIA VALIDATION
**Goal:** Verify acceptance criteria are complete, clear, and testable

#### Check 1: Criteria Presence
```
Validation:
- [ ] Acceptance criteria exists and non-empty?
- [ ] At least 3+ criteria?
- [ ] Criteria cover main functionality?

If FAILED:
→ Question for PO: "What are the acceptance criteria for this feature?"
→ Question for PO: "How will we know when this is complete?"
```

#### Check 2: Criteria Clarity
```
Validation:
- [ ] Each criterion is independently testable?
- [ ] Criteria use specific language (not vague)?
- [ ] No "and/or" ambiguity (each criterion is atomic)?
- [ ] Performance requirements specified (if applicable)?
- [ ] Data constraints specified (if applicable)?

Example of GOOD AC: "User can search safeguards by name and the search returns results in <100ms"
Example of BAD AC: "Safeguards should be searchable and performant"

If FAILED:
→ Question for PO: "Can you clarify this criterion: [criterion]?"
→ Question for PO: "What are the performance expectations?"
```

#### Check 3: Edge Cases & Error Handling
```
Validation:
- [ ] Error scenarios covered?
- [ ] Edge cases considered?
- [ ] Boundary conditions specified?

If FAILED:
→ Question for PO: "What should happen when [error scenario]?"
→ Question for PO: "Are there edge cases we should handle?"
```

---

### PHASE 4: SCOPE CLARIFICATION
**Goal:** Identify what's in/out of scope to prevent scope creep

```
Validation:
- [ ] Scope boundaries clearly defined?
- [ ] Out-of-scope items identified?
- [ ] Related/future enhancements called out?

Questions for PO:
- [ ] "What is explicitly OUT of scope for this feature?"
- [ ] "Are there Phase 2 enhancements planned?"
- [ ] "Are there related features we should consider?"
```

---

### PHASE 5: DEPENDENCY & INTEGRATION VALIDATION
**Goal:** Identify technical dependencies and integration points

```
Validation:
- [ ] API integrations required?
- [ ] Database/schema changes needed?
- [ ] Third-party services involved?
- [ ] Related features/dependencies identified?
- [ ] Backwards compatibility concerns?

Questions for PO:
- [ ] "Does this integrate with any external systems?"
- [ ] "Are there data model changes required?"
- [ ] "What about backward compatibility?"
- [ ] "Are there dependent features?"
```

---

### PHASE 6: EXISTING FUNCTIONALITY REVIEW
**Goal:** Check for conflicts and alignment with current system

```
Validation:
- [ ] Does this duplicate existing features?
- [ ] Conflicts with current workflows?
- [ ] Aligns with current UI patterns?
- [ ] Naming conventions followed?
- [ ] Can we extend existing modules?

Questions for PO:
- [ ] "Does this replace or extend existing functionality?"
- [ ] "Are there workflow conflicts with current processes?"
- [ ] "Should we consolidate with existing features?"
```

---

### PHASE 7: NON-FUNCTIONAL REQUIREMENTS VALIDATION
**Goal:** Verify security, performance, compliance, accessibility requirements

```
Validation Checklist:

PERFORMANCE:
- [ ] Response time/latency requirements specified?
- [ ] Throughput/scalability requirements?
- [ ] Data volume expectations?

SECURITY:
- [ ] Authentication requirements clear?
- [ ] Authorization/permissions defined?
- [ ] Data protection requirements?
- [ ] Sensitive data handling specified?

COMPLIANCE:
- [ ] GDPR requirements?
- [ ] SOC2 requirements?
- [ ] Other regulatory compliance needs?

ACCESSIBILITY:
- [ ] WCAG accessibility requirements?
- [ ] Screen reader support needed?
- [ ] Keyboard navigation required?

Questions for PO (if any missing):
- [ ] "What are the security requirements?"
- [ ] "Are there compliance requirements?"
- [ ] "What about accessibility needs?"
- [ ] "Performance targets?"
```

---

### PHASE 8: RISK & ASSUMPTIONS VALIDATION
**Goal:** Identify risks and validate assumptions

```
Validation:
- [ ] Key assumptions documented?
- [ ] Potential risks identified?
- [ ] Mitigation strategies for risks?
- [ ] Rollback strategy defined?
- [ ] Data migration strategy (if needed)?

Questions for PO:
- [ ] "What assumptions are we making?"
- [ ] "What could go wrong?"
- [ ] "What's our rollback plan?"
- [ ] "How do we handle data migration?"
```

---

### PHASE 9: USER STORY EXTRACTION
**Goal:** Create user story from feature description

```
USER STORY TEMPLATE:
As a [ROLE],
I want [ACTION],
so that [BENEFIT/VALUE]

EXTRACTION RULES:
1. Identify user role from feature description
2. Extract primary action/goal
3. Identify business benefit

Example:
Feature: "Deploy Embassy gateway within our Enablon network"

Extracted User Story:
As a technical product manager,
I want the Embassy gateway to be deployed within Enablon infrastructure through IaC,
so that traffic latency is minimized and the gateway is trusted as an internal component.

Questions for PO (if unclear):
- [ ] "Who is the primary user for this feature?"
- [ ] "Are there multiple user stories to extract?"
```

---

### PHASE 10: GAP ANALYSIS & QUESTIONS FOR PO
**Goal:** Compile all clarification questions and gaps

**Output Document Structure:**
```
GAPS IDENTIFIED:

[ ] Missing Information
    Question: [question for PO]
    Impact: [why this matters]
    Priority: [High/Medium/Low]

[ ] Ambiguities
    Item: [what's unclear]
    Current: [current description]
    Needed: [what's needed]
    Question: [question for PO]

[ ] Assumptions
    Assumption: [what we're assuming]
    Validate: [how to validate with PO]

[ ] Risks
    Risk: [identified risk]
    Mitigation: [how to mitigate]
    Owner: [who owns this]
```

---

### PHASE 11: READINESS ASSESSMENT
**Goal:** Determine if feature is ready for specification creation

**Readiness Criteria:**
```
✅ READY FOR SPEC CREATION if:
- User role/persona is clear
- Main action/benefit is clear
- Success metrics defined
- Acceptance criteria complete and testable
- Scope boundaries defined
- Key questions answered by PO
- No blocking risks identified
- No major ambiguities

⚠️ NEEDS CLARIFICATION if:
- Multiple critical questions remain unanswered
- Scope is unclear or too broad
- Acceptance criteria are vague
- Major risks identified without mitigation
- Conflicts with existing features
- Dependencies unclear

❌ NOT READY if:
- PO approval not obtained
- > 50% of critical information missing
- Major blocking technical concerns
- Regulatory/compliance issues unresolved
```

**Output:**
```
READINESS STATUS: [READY | NEEDS CLARIFICATION | NOT READY]

Summary:
- Total Validations: X
- Passed: Y
- Failed/Gaps: Z
- Ready Percentage: Y/X%

Recommendation: [Action to take]
```

---

### PHASE 12: GENERATE ANALYSIS REPORT
**Goal:** Create comprehensive requirement analysis document

**Report Includes:**
```
1. EXECUTIVE SUMMARY
   - Feature ID, Title, PO, Assigned To
   - Readiness Status
   - Key Gaps (if any)

2. EXTRACTED USER STORY
   - As a [role], I want [action], so that [benefit]

3. FEATURE COMPLETENESS
   - Validation results for each section
   - Pass/Fail status

4. ACCEPTANCE CRITERIA ANALYSIS
   - Current criteria listed
   - Clarity assessment
   - Missing criteria identified

5. SCOPE ANALYSIS
   - In-scope items
   - Out-of-scope items
   - Future considerations

6. DEPENDENCY MAP
   - Related features
   - API integrations
   - Data model changes

7. RISK ASSESSMENT
   - Identified risks
   - Mitigation strategies

8. QUESTIONS FOR PO
   - High Priority (blocker)
   - Medium Priority (important)
   - Low Priority (nice to have)

9. RECOMMENDATIONS
   - Next steps
   - Approvals needed
   - Readiness status
```

---

## Output Artifacts

### 1. Requirement Analysis Report (Markdown)
- Location: `.github/analysis/FE#<ID>-requirement-analysis.md`
- Contents: All validation results, gaps, questions for PO

### 2. Questions for PO (Extracted)
- High priority clarifications needed before proceeding
- Medium priority refinements
- Low priority enhancements

### 3. Readiness Checklist
- Clear GO/NO-GO decision for specification creation
- Conditions for approval (if any)

---

## Success Criteria

✅ **Analysis is successful if:**
- All critical information gaps identified
- Clear questions prepared for PO
- Readiness status determined
- No ambiguity about next steps
- Feature is validated and ready for specification OR gaps clearly identified

---

## Integration with SDD Workflow

**Previous Step:** Fetch feature from Azure (fetch-feature-from-azure skill)
**This Step:** Requirement analysis and validation
**Next Step:** Create specification (create-specification-file skill) - ONLY if readiness = READY

---

## Notes

- This skill is NOT about implementation - it's about validating requirements
- The goal is to catch gaps EARLY before writing specification
- Questions for PO should be specific and actionable
- Document assumptions - they may become constraints later
- Existing workflow review prevents scope creep and conflicts
