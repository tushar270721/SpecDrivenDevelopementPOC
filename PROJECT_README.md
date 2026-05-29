# Spec-Driven Development Project - Complete Guide

## 📌 Project Overview

This project implements a **Spec-Driven Development (SDD) workflow** using **Spec Kit**, **GitHub Copilot Skills**, and **Azure DevOps integration** to deliver high-quality, well-tested features with complete traceability.

**Core Principles:**
- ✅ Specifications first, implementation second
- ✅ Automated work item creation with review staging
- ✅ Separate development and automation testing phases
- ✅ Quality gates at every step (PR reviews, test reports)
- ✅ Complete traceability from feature → spec → stories → tests → code → reports

---

## 🎯 End-to-End Workflow

### **PHASE 1: Setup (One-Time)**

```
Step 1: Create Constitution.md
├─ Project governing principles
├─ Quality standards & requirements
├─ Testing requirements & guidelines
├─ Development standards
└─ Centralized reference for all features

Step 2: Create Plan.md
├─ Tech stack & architecture decisions
├─ Implementation approach
├─ Development environment setup
├─ Azure DevOps project configuration
├─ CI/CD pipeline overview
└─ Centralized reference for all features
```

**Frequency:** One-time activity  
**Owner:** Technical Lead / Architect

---

### **PHASE 2: Feature Planning & Design**

```
Step 3: Feature Created in Azure DevOps
├─ Business requirements
├─ Acceptance criteria
├─ Linked to Epic/Release
└─ Assigned Feature ID (e.g., AB#12345)

Step 4: System Fetches Feature & Creates SPECIFICATION.md
├─ [SKILL: fetch-feature-from-azure]
├─ Retrieves feature details from Azure DevOps
├─ Passes to next skill
└─ Generates: specs/feature-{id}/SPECIFICATION.md

Step 5: System Creates Draft Work Items
├─ [SKILL: create-work-items-draft]
├─ Parses acceptance criteria
├─ Generates User Stories (draft)
├─ Generates Test Cases (draft)
├─ Saves to: work-items-draft.md (NOT directly in Azure)
└─ Status: DRAFT MODE (ready for review)

Step 6: Team Reviews & Approves Drafts
├─ Team reviews in UI (draft items dashboard)
├─ Comments & suggestions (draft mode)
├─ Approves when ready
└─ Status: APPROVED (ready to push)

Step 7: Push Approved Items to Azure DevOps
├─ [SKILL: push-draft-to-azure]
├─ Moves approved items from draft
├─ Creates in Azure DevOps
├─ Links to original feature
├─ Updates: test-cases.md with Azure IDs
└─ Status: READY FOR DEVELOPMENT

Step 8: System Organizes Test Cases
├─ [SKILL: manage-test-cases]
├─ Updates: test-cases.md (centralized)
├─ Segregates by: E2E, Integration, Database, Edge Cases
├─ Marks: Manual vs Automated
└─ Maintains traceability to Azure IDs
```

**Frequency:** Per new feature  
**Owner:** Product Manager / Developer / Tester (Steps 3, 6) → Copilot Skills (Steps 4, 5, 7, 8)  
**Duration:** 1-2 days

---

### **PHASE 3: Development**

```
Step 9: Create Tasks with Spec Kit
├─ [spec-kit] Create tasks from SPECIFICATION.md
├─ Tasks derived from acceptance criteria
├─ Structured & estimated
└─ Ready for implementation

Step 10: Implement Feature Code
├─ [Spec Kit Agent / Coding Agent]
├─ Implement tasks created in Step 9
├─ Follow Constitution & Plan standards
├─ Code pushed to feature branch
└─ Status: READY FOR PR

Step 11: Create Pull Request
├─ Developer pushes code to GitHub
├─ PR created from feature branch → main
├─ PR title links to feature ID
└─ Status: AWAITING REVIEW

Step 12: Development PR Code Review
├─ [SKILL: make-a-pr-review] 
├─ Analyzes code against:
│   ├─ Constitution requirements
│   ├─ Best practices
│   ├─ Test coverage
│   └─ Framework standards
├─ Generates violation report
└─ Status: REVIEW_READY

Step 13: Add PR Review Comments
├─ [SKILL: add-pr-comments]
├─ Posts inline comments for violations
├─ References standards & best practices
├─ Keeps review in PENDING state
└─ Status: AWAITING_DEVELOPER_RESPONSE

Step 14: Developer Addresses Feedback
├─ Developer fixes issues
├─ Pushes changes
├─ Loop back to Step 12 until approved
└─ Status: QUALITY_APPROVED

Step 15: Human Final Review & Approval
├─ Senior dev reviews changes
├─ Approves PR
└─ Status: APPROVED

Step 16: Code Merged to Main Branch
├─ Code merged to main
├─ Feature branch deleted
├─ Status: MERGED_TO_MAIN
└─ Development phase complete ✓
```

**Frequency:** Per new feature  
**Owner:** Developer (Steps 10, 14) → Copilot Skills (Steps 12, 13) → Senior Dev (Step 15)  
**Duration:** 2-5 days (including iterations)

---

### **PHASE 4: Automation Testing (NEW FEATURE ONLY)**

```
Step 17: Create Automation Branch
├─ Developer creates branch from main
├─ Branch name: automation/feature-{id}
├─ Contains: All previous features' automation code + ready for new tests
└─ Status: READY_FOR_AUTOMATION

Step 18: Create E2E Automation Tests
├─ [SKILL: create-automation-tests]
├─ Reads test-cases.md (Feature {id} tests only)
├─ Generates E2E test scripts for Feature {id}
├─ Skips: Integration tests, DB tests, previous features' tests
├─ Saves to: automation/e2e-tests/tests/feature-{id}-tests.js
└─ Status: AUTOMATION_CODE_READY

Step 19: Execute E2E Automation Tests (Feature Only)
├─ [SKILL: run-automation-tests]
├─ Runs ONLY: feature-{id}-tests.js 
├─ Against: Stable main branch code
├─ Collects: Pass/Fail, logs, screenshots, timing
├─ Updates: test-cases.md with results
└─ Status: TESTS_EXECUTED

Step 20: Generate Test Execution Report
├─ [SKILL: generate-test-report]
├─ Creates formatted report including:
│   ├─ Total tests: Passed / Failed / Skipped
│   ├─ Test coverage % for Feature {id}
│   ├─ Execution time
│   ├─ Failed test details with screenshots
│   ├─ Logs
│   └─ Feature-specific metrics
├─ Saves: reports/test-report-{date}.md & .html
├─ Links results to Azure test cases
└─ Status: REPORT_GENERATED

Step 21: Create PR for Automation Code
├─ Developer pushes automation code
├─ PR created from automation/feature-{id} → main
├─ PR title: "Automation tests for Feature {id}"
└─ Status: AUTOMATION_PR_READY

Step 22: Automated PR Code Review (Automation)
├─ [SKILL: make-a-pr-review] 
├─ Reviews: Test code quality, best practices
├─ Validates: Against test automation standards
└─ Status: AUTOMATION_REVIEW_READY

Step 23: Add Automation PR Comments
├─ [SKILL: add-pr-comments] 
├─ Posts feedback on test code
├─ Suggests improvements
└─ Status: AWAITING_DEV_RESPONSE

Step 24: Tester Addresses Feedback
├─ Tester fixes test issues
├─ Pushes changes
├─ Loop back to Step 22 until approved
└─ Status: AUTOMATION_QUALITY_APPROVED

Step 25: Human Final Review & Approval (Automation)
├─ QA Lead or Senior QA reviews
├─ Approves automation code
└─ Status: AUTOMATION_APPROVED

Step 26: Merge Automation Code to Main
├─ Automation code merged to main
├─ Main now has: Dev code + Feature {id} automation tests
├─ Automation branch deleted
└─ Status: MERGED_TO_MAIN ✓
```

**Frequency:** Per new feature (after dev merge)  
**Owner:** QA Engineer (Steps 18, 24) → Copilot Skills (Steps 19, 20, 22, 23) → QA Lead (Step 25)  
**Duration:** 3-5 days (including iterations)  
**Execution Time:** ~5-10 minutes per test run ⚡

---

### **PHASE 5: Reporting & Closure**

```
Step 27: Link Test Results to Azure DevOps
├─ Test report linked to Feature ID
├─ Test case results updated in Azure
├─ Test execution linked to User Stories
└─ Status: TRACEABILITY_COMPLETE

Step 28: Feature Cycle Complete
├─ Feature in Azure: READY FOR DEPLOYMENT
├─ Development code: In main branch
├─ Automation tests: In main branch
├─ Test report: Generated and linked
├─ All work items: Linked and traceable
└─ Status: ✓ FEATURE_COMPLETE
```

---

## 📁 Project Structure

```
project-root/
      Requirement from PO - Requirement Analysis Skill 
│
├── 📄 Constitution.md                 ← Centralized (one-time)
│   ├─ Governing principles
│   ├─ Quality standards
│   ├─ Testing requirements
│   ├─ Development guidelines
│   └─ Centralized reference
│
├── 📄 Plan.md                         ← Centralized (one-time)
│   ├─ Tech stack
│   ├─ Architecture decisions
│   ├─ Implementation approach
│   ├─ Environment setup
│   └─ Centralized reference
│
├── 📄 README.md                       ← This file
│
├── 📄 work-items-draft.md             ← Draft staging
│   ├─ All draft User Stories
│   ├─ All draft Test Cases
│   ├─ Status: DRAFT → APPROVED → PUSHED
│   └─ Reviewed before pushing to Azure
│
├── 📄 test-cases.md                   ← Centralized test registry
│   ├─ End-to-End Tests
│   │   ├─ Positive Scenarios (Manual & Automated)
│   │   ├─ Negative Scenarios (Manual & Automated)
│   │   └─ Edge Cases (Automated)
│   ├─ Integration Tests (tracked, not auto-run)
│   ├─ Database Tests (tracked, not auto-run)
│   ├─ Test Status: Ready / In-Progress / Passed / Failed
│   ├─ Azure DevOps IDs: TC#12345
│   └─ Auto-maintained by manage-test-cases skill
│
├── 📁 specs/                          ← Feature-specific
│   ├── feature-001/
│   │   └── SPECIFICATION.md           ← Auto-generated per feature
│   │       ├─ Feature Overview
│   │       ├─ User Stories
│   │       ├─ Acceptance Criteria
│   │       ├─ Test Scenarios (with IDs)
│   │       ├─ Edge Cases
│   │       ├─ Data Requirements
│   │       └─ API Requirements
│   ├── feature-002/
│   │   └── SPECIFICATION.md
│   └── feature-{id}/
│       └── SPECIFICATION.md
│
├── 📁 src/                            ← Development code
│   ├── features/
│   │   ├── feature-001/
│   │   ├── feature-002/
│   │   └── feature-{id}/
│   ├── shared/
│   ├── utils/
│   ├── config/
│   └── ...
│
├── 📁 automation/                     ← Automation test code
│   ├── e2e-tests/
│   │   ├── tests/
│   │   │   ├── feature-001-tests.js   ← Previous feature tests
│   │   │   ├── feature-002-tests.js   ← Previous feature tests
│   │   │   └── feature-{id}-tests.js  ← New feature tests only
│   │   ├── page-objects/
│   │   │   ├── login-page.js
│   │   │   ├── dashboard-page.js
│   │   │   └── feature-{id}-page.js   ← New page object
│   │   ├── fixtures/
│   │   │   └── test-data.js
│   │   └── config.js
│   │
│   └── test-reports/
│       ├── test-report-2026-05-21.md
│       ├── test-report-2026-05-21.html
│       └── ...
│
├── 📁 reports/                        ← Generated reports
│   ├── execution/
│   │   ├── automation-report-*.md
│   │   └── automation-report-*.html
│   └── coverage/
│
├── 📁 .github/
│   ├── workflows/
│   │   └── (CI/CD pipelines)
│   └── skills/                        ← Copilot Skills
│       ├── fetch-feature-from-azure/
│       │   └── SKILL.md
│       ├── create-specification-file/
│       │   └── SKILL.md
│       ├── create-work-items-draft/
│       │   └── SKILL.md
│       ├── push-draft-to-azure/
│       │   └── SKILL.md
│       ├── manage-test-cases/
│       │   └── SKILL.md
│       ├── create-automation-tests/
│       │   └── SKILL.md
│       ├── run-automation-tests/
│       │   └── SKILL.md
│       ├── generate-test-report/
│       │   └── SKILL.md
│       ├── make-a-pr-review/          ← Existing (reused)
│       │   └── SKILL.md
│       └── add-pr-comments/           ← Existing (reused)
│           └── SKILL.md
│
├── 📁 docs/                           ← Optional documentation
│   ├── setup-guide.md
│   ├── workflow-guide.md
│   └── troubleshooting.md
│
├── .gitignore
├── package.json
├── tsconfig.json
└── ...
```

---

## 🔄 Git Branching Strategy

```
main (Production)
├── Merge: Only approved dev code + automation code
├── Branch history: Clean, organized
└── CI/CD: Runs on merge

feature/feature-{id} (Development)
├── Created from: main
├── Used for: Feature development
├── PR Target: main
├── Review: Automated + Human
├── Merged to: main
└── Deleted after: Merge

automation/feature-{id} (Automation Testing)
├── Created from: main (after dev merge)
├── Used for: E2E automation tests
├── PR Target: main
├── Review: Automated + Human
├── Merged to: main
└── Deleted after: Merge

Example Timeline:
├─ Feature 001 dev branch → merge to main
├─ Feature 001 automation branch → merge to main
├─ Feature 002 dev branch → merge to main
├─ Feature 002 automation branch → merge to main
├─ ...
└─ All code accumulates cleanly in main
```

---

## 📊 Skills Required (10 New)

### **NEW SKILLS TO BUILD**

| # | Skill | Purpose | Trigger | Complexity |
|---|-------|---------|---------|------------|
| 1 | fetch-feature-from-azure | Get feature from Azure DevOps | "Start feature from Azure" | ⭐⭐ |
| 2 | create-specification-file | Generate SPECIFICATION.md | "Create specification" | ⭐⭐⭐ |
| 3 | create-work-items-draft | Create draft work items file | "Create draft work items" | ⭐⭐ |
| 4 | push-draft-to-azure | Push approved items to Azure | "Push to Azure" (UI button) | ⭐⭐ |
| 5 | manage-test-cases | Maintain test-cases.md | "Organize test cases" | ⭐⭐ |
| 6 | create-automation-tests | Create E2E tests for feature | "Create automation tests" | ⭐⭐⭐ |
| 7 | run-automation-tests | Execute E2E tests (feature only) | "Run automation tests" | ⭐⭐ |
| 8 | generate-test-report | Generate test execution report | "Generate test report" | ⭐⭐ |
| 9 | make-a-pr-review | Automated PR code review | TestingFramework-Copilot repo |
| 10 | add-pr-comments | Add PR comments | TestingFramework-Copilot repo |

**Total Skills: 10**

---

## 🎯 Key Features & Benefits

### **Centralized Reference Documents**
- ✅ **Constitution.md** - One source of truth for quality standards
- ✅ **Plan.md** - One source of truth for architecture & tech stack
- ✅ Used by all features, no duplication

### **Draft Staging System**
- ✅ Work items created in draft mode (not directly in Azure)
- ✅ Review & approve before committing
- ✅ Prevents Azure clutter with incomplete items
- ✅ Stakeholders can see draft items in UI dashboard

### **Centralized Test Registry**
- ✅ **test-cases.md** - Single file for all test cases
- ✅ Organized by type: E2E, Integration, Database, Edge Cases
- ✅ Marked: Manual vs Automated
- ✅ Linked to Azure test case IDs
- ✅ Auto-updated with execution results

### **Per-Feature Specifications**
- ✅ **SPECIFICATION.md** - Created per feature
- ✅ Contains requirements, user stories, test scenarios
- ✅ Auto-generated from feature details
- ✅ Single source of truth for feature details

### **Fast Automation Execution**
- ✅ Option 1: Run only new feature tests (5-10 min) ⚡ RECOMMENDED
- ✅ New tests added to main, previous tests unchanged
- ✅ Cumulative test coverage over time
- ✅ Optional: Full regression before release

### **Quality Gates**
- ✅ Automated PR reviews (code quality, best practices)
- ✅ Multiple review cycles (dev fixes issues, re-review)
- ✅ Human approval before merge
- ✅ Applied to both dev code AND automation code

### **Complete Traceability**
- ✅ Feature → SPECIFICATION.md → User Stories → Test Cases → Code → Test Results
- ✅ Everything linked back to Azure DevOps
- ✅ Clear audit trail for compliance

### **Separation of Concerns**
- ✅ Dev phase → Automation phase (separate)
- ✅ Allows parallel feature development
- ✅ Clear ownership (Dev team vs QA team)
- ✅ Each feature's automation independent

---

## 📋 File Checklist - What You Actually Need

### **MUST HAVE** (Non-negotiable)
- ✅ Constitution.md (centralized, one-time)
- ✅ Plan.md (centralized, one-time)
- ✅ test-cases.md (centralized, auto-maintained)
- ✅ SPECIFICATION.md (per feature, auto-generated)
- ✅ work-items-draft.md (staging, auto-maintained)
- ✅ Feature branch code (src/)
- ✅ Automation branch code (automation/)

### **NOT NEEDED** (Skip These)
- ❌ Separate test plan documents (tracked in test-cases.md)
- ❌ Separate specification docs per story (in SPECIFICATION.md)
- ❌ Manual test case files (in test-cases.md)
- ❌ Redundant architecture docs (in Plan.md)
- ❌ Multiple reporting tools (use generated reports)

**Result: Minimal, focused file structure** ✨

---

## 👥 Team Responsibilities

| Role | Responsibility | Phase |
|------|-----------------|-------|
| **Business Analyst** | Create features in Azure DevOps | Planning |
| **Product Manager** | Review & approve draft work items | Planning |
| **Developer** | Implement feature code, address PR feedback | Development |
| **Copilot Skills** | Automate all data flows & reviews | All phases |
| **QA Engineer** | Create & execute automation tests | Testing |
| **QA Lead** | Approve automation code, final sign-off | Testing |
| **Senior Dev** | Final code review & approval | Development |
| **DevOps** | CI/CD pipelines, environment setup | Setup |

---

## 🚀 Getting Started

1. ✅ **Review this README** with your team
2. ✅ **Confirm all decisions** (branching strategy, automation approach, file structure)
3. ✅ **Identify any additions/modifications** needed
4. ✅ **Assign ownership** for skills, documentation, infrastructure
5. ✅ **Proceed to practical implementation** (create Constitution, Plan, build skills)

---

## 📞 Questions for Team Review

Before starting implementation, confirm:

1. **Draft Work Items UI**
   - Do you have UI/dashboard for managing draft work items?
   - Or should we build a simple one?

2. **Azure DevOps Configuration**
   - Which Azure DevOps project(s) will be used?
   - What naming conventions for features, stories, test cases?

3. **Test Automation Environment**
   - Where will automation tests run? (Local, CI/CD, cloud?)
   - What testing framework? (Playwright, Cypress, Selenium?)

4. **Reporting**
   - Where should test reports be stored? (GitHub, Azure, S3?)
   - Who needs access to reports?

5. **Stakeholder Approval**
   - Who approves draft work items before pushing to Azure?
   - Who approves automation test code?

---

## ✅ Success Criteria

Your project is successful when:

- ✅ Constitution & Plan are centralized reference documents
- ✅ Every feature has SPECIFICATION.md with clear requirements
- ✅ Work items reviewed in draft before Azure commitment
- ✅ Development & automation phases are separate but linked
- ✅ Both dev and automation code undergo quality gates
- ✅ All test results link back to Azure test cases
- ✅ Team understands and follows the workflow
- ✅ Execution time per feature is predictable (~5-7 days)

---

## 📚 Next Steps

1. **Review with team** - Get feedback on workflow and structure
2. **Confirm decisions** - Document any changes
3. **Setup infrastructure** - Create project folders, configure Azure DevOps
4. **Build Constitution.md** - First centralized document
5. **Build Plan.md** - Second centralized document
6. **Start building skills** - Begin with fetch-feature-from-azure

---

**Version:** 1.0  
**Created:** May 21, 2026  
**Status:** Ready for team review

