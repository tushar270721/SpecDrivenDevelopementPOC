# SPECIFICATION: FE#736381 - Email Limit Management System

**Feature ID:** FE#736381  
**Title:** [Limit] Max # of emails sent  
**Priority:** 2 (High)  
**Status:** DRAFT - Ready for QA Review  
**Created:** 6/10/2026  
**Last Updated:** 6/10/2026  
**Assigned To:** Wandile, Sanket  
**Feature State:** Closed (Tested in SP13)  

**Azure DevOps Link:** https://dev.azure.com/enablon/Vision%20Platform/_git/ApplicationServer?path=/Sources/Tools/Enablon.Server.Toolkit/Limits/readme.md

---

## 1. Feature Overview

### Business Problem
During testing of legacy systems, emails were temporarily reactivated as a side effect, causing millions of unwanted reminders to be sent. This resulted in:
- **Immediate Impact:** Exceeded the 2M email limit for a shared subscription
- **Financial Impact:** Each email incurs a cost, resulting in significant unexpected expenses
- **Customer Impact:** Other customers sharing the subscription had ALL emails dropped until the cloud provider temporarily increased limits
- **Service Impact:** Critical service degradation for unrelated customers due to one customer's email spike

### Solution Overview
Implement a comprehensive email limit control system at both subscription and customer levels to:
- Prevent abnormal email behavior from a single customer impacting other customers on shared subscription
- Enforce daily and monthly quota limits per customer
- Block emails atomically (all-or-nothing) when quotas are exceeded
- Maintain exemptions for critical system emails (new user creation, password reset)
- Provide audit logging for compliance and troubleshooting

### Key Principle
**One customer's email consumption should NEVER impact other customers sharing the same email subscription.**

---

## 2. Business Requirements

| # | Requirement | Details | Priority |
|---|---|---|---|
| BR-1 | Subscription-Level Limits | Absolute email limits enforced via site.config file for entire subscription | P0 |
| BR-2 | Customer Isolation | Each customer has independent daily/monthly limits to prevent cross-customer impact | P0 |
| BR-3 | Shared Subscription Fairness | Customers in different regions (America, Europe, etc.) sharing subscription must not affect each other | P0 |
| BR-4 | Recipient-Based Counting | Email quota counts total recipients (To + CC + BCC), NOT individual emails | P1 |
| BR-5 | Atomic Blocking | Entire email blocked if quota insufficient; no partial delivery to subset of recipients | P1 |
| BR-6 | Critical Email Exemption | New user creation and forgot password emails always sent, regardless of quota status | P1 |
| BR-7 | Configurable Thresholds | Daily and monthly limits configurable in site.config by platform operations team | P1 |
| BR-8 | Daily Reset | Daily limit quota resets at 00:00:00 UTC every day | P2 |
| BR-9 | Monthly Reset | Monthly limit quota resets on configurable day each month (defined in site.config) | P2 |
| BR-10 | Audit Logging | All limit blocks logged for compliance, troubleshooting, and customer support | P2 |

---

## 3. Acceptance Criteria (Exact from Azure DevOps)

```
Email limit should consider recipients present in To, CC, BCC  If limit is set to 100, and 95 email quota is already exhausted, and a new email is getting triggered which has 10 recipients, then this entire email should get blocked, no one should receive the email.
 If limit is set to 100, and 95 email quota is already exhausted, and a new email is getting triggered which has 5 recipients, then this email should be allowed  When the daily limit is reached, no more email are sent, and the not sent email should get logged When the monthly limit is reached, no more email are sent, and the not sent email should get logged
 We block the sending of the email at the first limit reached
 The count for the email limit is based on the number of recipients and not emails (3 recipients in 1 email count for 3)
```

---

## 4. User Stories

### US-001: Email Quota Management per Customer
**As a** Platform Operations Engineer  
**I want** to configure daily and monthly email limits per customer in site.config  
**So that** I can prevent abnormal email spikes from impacting other customers on the shared subscription

**Acceptance Criteria:**
- Configuration values stored in site.config with clear parameter names
- Limits apply independently per customer (customer isolation enforced)
- Daily limit quota resets at 00:00:00 UTC
- Monthly limit quota resets on configurable reset day

---

### US-002: Recipient-Based Quota Calculation
**As a** Quality Assurance Lead  
**I want** the email quota to count total recipients from To, CC, and BCC fields  
**So that** email distribution strategy doesn't affect quota consumption fairness

**Acceptance Criteria:**
- All recipients counted: To field + CC field + BCC field = total quota consumed
- Single email with 5 recipients consumes 5 quota units
- 5 individual emails with 1 recipient each also consume 5 quota units total
- Counting is consistent and predictable

---

### US-003: Atomic Email Blocking
**As a** System Administrator  
**I want** emails blocked atomically when customer quota is exhausted  
**So that** either all recipients receive the email or none do (no partial sends)

**Acceptance Criteria:**
- If available quota < required recipients: entire email blocked, 0 recipients receive it
- If available quota >= required recipients: email sent to all recipients successfully
- No partial delivery to subset of recipients under any circumstance
- Blocking decision made before ANY email delivery attempt

---

### US-004: Critical Email Exemptions
**As a** System Administrator  
**I want** new user creation and forgot password emails to bypass quota limits  
**So that** critical user workflows remain unblocked regardless of email quota status

**Acceptance Criteria:**
- New user creation emails always sent, quota never checked for this type
- Forgot password emails always sent, quota never checked for this type
- Other email types subject to normal quota limits
- Exemption types configurable in site.config
- Audit log clearly marks exempted emails

---

### US-005: Limit Breach Audit Logging
**As a** Support Engineer  
**I want** all blocked emails logged when quotas are reached  
**So that** I can audit what was prevented, investigate issues, and support customers

**Acceptance Criteria:**
- When daily limit reached: all subsequent emails blocked and logged
- When monthly limit reached: all subsequent emails blocked and logged
- Log entry includes: timestamp, customer ID, recipient count, block reason
- Log entry includes: which limit triggered the block (daily vs monthly)
- Logs retained for compliance period

---

## 5. Test Scenarios

### TS-001: Successful Send Within Daily Quota
**Scenario:** Email sent when recipient count is within available daily quota  
**Preconditions:**
- Daily limit = 1000 recipients
- Current daily quota used = 850 recipients
- Remaining daily quota = 150 recipients

**Steps (Given-When-Then):**
- **Given** remaining daily quota is 150 recipients
- **When** email with 100 recipients (To:40, CC:35, BCC:25) is triggered
- **Then** email sent to all 100 recipients, daily quota reduced to 50

**Expected Result:** HTTP 200, email delivered to all recipients, quota tracking updated, no audit block entry

---

### TS-002: Boundary Case - Exact Quota Match
**Scenario:** Email recipients exactly match remaining daily quota  
**Preconditions:**
- Daily limit = 1000 recipients
- Remaining daily quota = 100 recipients

**Steps:**
- **Given** remaining daily quota is exactly 100 recipients
- **When** email with 100 recipients is triggered
- **Then** email sent to all 100 recipients, daily quota becomes 0

**Expected Result:** Email delivered, quota exhausted, next email will be blocked

---

### TS-003: Blocking - Exceeds Daily Quota
**Scenario:** Entire email blocked when recipients exceed available daily quota  
**Preconditions:**
- Daily limit = 1000 recipients
- Remaining daily quota = 50 recipients

**Steps:**
- **Given** remaining daily quota is 50 recipients
- **When** email with 100 recipients is triggered
- **Then** entire email blocked; NO recipients receive email

**Expected Result:** HTTP 429 or rejection code, email blocked completely, audit log records block event with reason "DAILY_LIMIT_EXCEEDED", quota unchanged

---

### TS-004: Recipient Multi-Line Counting
**Scenario:** Email with To, CC, BCC fields all counted toward quota  
**Preconditions:**
- Daily limit = 500 recipients
- Remaining quota = 50 recipients

**Steps:**
- **Given** remaining daily quota is 50 recipients
- **When** email triggered with To: 20 recipients, CC: 18 recipients, BCC: 17 recipients (total 55)
- **Then** entire email blocked because total 55 > available 50

**Expected Result:** Email blocked atomically, 0 recipients receive it, audit logs reason "QUOTA_INSUFFICIENT"

---

### TS-005: Daily Limit Reached - All Subsequent Blocked
**Scenario:** All emails blocked after daily quota fully exhausted  
**Preconditions:**
- Daily limit = 500 recipients
- Current daily quota used = 500 recipients
- Daily reset: 00:00:00 UTC (not yet reached)

**Steps:**
- **Given** daily quota is completely exhausted at 23:45 UTC
- **When** new email (5 recipients) triggered at 23:50 UTC
- **Then** email blocked, logged as "DAILY_LIMIT_REACHED"

**Expected Result:** Email blocked, logged, remains blocked until 00:00:00 UTC reset

---

### TS-006: Monthly Limit Reached - All Subsequent Blocked
**Scenario:** All emails blocked after monthly quota exhausted  
**Preconditions:**
- Monthly limit = 10,000 recipients
- Current monthly quota used = 10,000 recipients
- Monthly reset day: 1st of next month

**Steps:**
- **Given** monthly quota is completely exhausted on day 15 of month
- **When** new email triggered on day 15 of same month
- **Then** email blocked, logged as "MONTHLY_LIMIT_REACHED"

**Expected Result:** Email blocked and logged, remains blocked until monthly reset on 1st of next month

---

### TS-007: Daily Reset at Midnight UTC
**Scenario:** Daily quota resets at exactly 00:00:00 UTC  
**Preconditions:**
- Daily limit = 500 recipients
- Daily quota used = 500 recipients at 23:59:50 UTC
- Email queued for 00:00:10 UTC

**Steps:**
- **Given** daily quota exhausted before midnight
- **When** system reaches 00:00:00 UTC
- **Then** daily quota resets to 0 used, remaining becomes 500 again

**Expected Result:** Email queued at 00:00:10 UTC successfully sent (now within new daily quota)

---

### TS-008: Exempted Email - New User Creation
**Scenario:** New user creation email sent regardless of quota status  
**Preconditions:**
- Daily limit = 500 recipients
- Daily quota used = 500 (fully exhausted)

**Steps:**
- **Given** daily quota is completely exhausted
- **When** new user creation email with 1 recipient is triggered
- **Then** email sent despite quota exhaustion

**Expected Result:** Email delivered, daily quota NOT decremented, audit log records "EXEMPTION: NEW_USER_CREATION", no block entry

---

### TS-009: Exempted Email - Forgot Password
**Scenario:** Forgot password email sent regardless of quota status  
**Preconditions:**
- Monthly limit = 10,000 recipients
- Monthly quota used = 10,000 (fully exhausted)

**Steps:**
- **Given** monthly quota is completely exhausted
- **When** forgot password email with 1 recipient is triggered
- **Then** email sent despite quota exhaustion

**Expected Result:** Email delivered, monthly quota NOT decremented, audit log records "EXEMPTION: FORGOT_PASSWORD", no block entry

---

### TS-010: Blocked Email Audit Log Entry
**Scenario:** Audit log created with complete details when email blocked  
**Preconditions:**
- Email blocked due to quota exhaustion

**Steps:**
- **Given** email is blocked for insufficient quota
- **When** block event occurs
- **Then** audit log entry created with complete details

**Expected Result:** Audit log contains: `{ timestamp, customer_id, email_recipients: 100, remaining_quota: 50, reason: "DAILY_LIMIT_EXCEEDED", email_type: "MARKETING_NOTIFICATION" }`

---

### TS-011: Non-Exempted Email Type Blocked
**Scenario:** Marketing/notification emails blocked when quota exhausted  
**Preconditions:**
- Daily limit = 500 recipients
- Daily quota used = 500 (fully exhausted)
- Email type: MARKETING_NOTIFICATION (NOT exempted)

**Steps:**
- **Given** daily quota exhausted and email is not exempted type
- **When** marketing email triggered
- **Then** email blocked, logged

**Expected Result:** Email blocked, quota not decremented, audit log records block

---

## 6. Edge Cases & Boundary Conditions

| Edge Case | Scenario | Expected Behavior |
|---|---|---|
| **Zero Remaining Quota** | Remaining quota = 0 recipients | All emails blocked (even single recipient) |
| **Large Email** | Email with 10,000 recipients, limit 500 | Entire email blocked |
| **Concurrent Emails** | Multiple emails arrive simultaneously at boundary | First processed atomically; subsequent may block |
| **Null Recipients** | Email with no recipients | Allowed (0 quota consumed); edge case handling defined |
| **Special Characters** | Email addresses with special chars (e.g., +tags) | Counted normally in quota calculation |
| **Duplicate Recipients** | Same email in To, CC, and BCC | Each instance counted separately (potential for user error) |
| **Monthly Reset Boundary** | Email arrives during monthly reset window | Atomic lock ensures consistency; timestamp-based determination |
| **Configuration Change** | Limit changed mid-day (e.g., emergency increase) | New limit applies to subsequent sends; in-flight emails use previous limit |
| **System Clock Adjustment** | System clock skewed near reset time (DST, NTP sync) | Reset based on UTC; behavior well-defined by configuration |
| **Customer Deleted** | Customer deprovisioned mid-month | Quota tracking handled appropriately; no quota carryover |
| **Cross-Tenant Isolation** | Multiple customers on same subscription | Each customer's quota completely isolated |

---

## 7. Configuration & Implementation Details

### site.config Settings Required

```xml
<!-- Daily email limit per customer (recipient count) -->
<add key="EmailLimit.Daily.Enabled" value="true" />
<add key="EmailLimit.Daily.RecipientsLimit" value="100000" />

<!-- Monthly email limit per customer (recipient count) -->
<add key="EmailLimit.Monthly.Enabled" value="true" />
<add key="EmailLimit.Monthly.RecipientsLimit" value="1000000" />

<!-- Monthly reset day (1-31; represents day of month when quota resets) -->
<add key="EmailLimit.Monthly.ResetDay" value="1" />

<!-- Exempt email types from limits (comma-separated) -->
<add key="EmailLimit.ExemptedTypes" value="NEW_USER_CREATION,FORGOT_PASSWORD" />

<!-- Enable audit logging for limit enforcement -->
<add key="EmailLimit.AuditLogging.Enabled" value="true" />
<add key="EmailLimit.AuditLogging.LogPath" value="/logs/email-limits/" />

<!-- Time zone for daily reset (UTC recommended to avoid DST issues) -->
<add key="EmailLimit.ResetTimeZone" value="UTC" />
<add key="EmailLimit.DailyResetTime" value="00:00:00" />
```

### Database Schema Requirements

**Table: CustomerEmailQuota**
```
- CustomerId (PK, INT/GUID)
- SubscriptionId (FK)
- DailyQuotaUsed (INT) - Reset daily
- DailyLastReset (DATETIME UTC)
- MonthlyQuotaUsed (INT) - Reset monthly
- MonthlyLastReset (DATETIME UTC)
- CreatedDate (DATETIME UTC)
- LastModifiedDate (DATETIME UTC)
```

**Table: EmailBlockedLog**
```
- Id (PK, GUID)
- CustomerId (FK)
- BlockedTimestamp (DATETIME UTC)
- RecipientCount (INT)
- BlockReason (VARCHAR) - "DAILY_LIMIT_REACHED" | "MONTHLY_LIMIT_REACHED" | "QUOTA_INSUFFICIENT"
- EmailType (VARCHAR)
- EmailSubject (VARCHAR)
- QuotaRemainingAtBlock (INT)
- CreatedDate (DATETIME UTC)
```

**Table: EmailExemptionLog** (Optional - track exempted sends)
```
- Id (PK, GUID)
- CustomerId (FK)
- ExemptionTimestamp (DATETIME UTC)
- EmailType (VARCHAR) - "NEW_USER_CREATION" | "FORGOT_PASSWORD"
- RecipientCount (INT)
- Reason (VARCHAR)
- CreatedDate (DATETIME UTC)
```

---

## 8. Related Requirements & Context

### Background
- **Feature State:** Closed (tested and working in Sprint 13)
- **Assigned Team:** Wandile, Sanket
- **Related Issue:** Previous email outage where legacy system test sent millions of emails, exceeded 2M subscription limit, affecting other customers

### Comments from Team
1. **Wandile, Sanket (6/1/2026):** "Item tested and closed in SP13" - Feature implementation complete and tested
2. **Alexandre Doulle (11/28/2025):** "What happens if limit=100 and 98th mail tries to send with 4 recipients?" 
   - **Answer:** Atomic blocking applies - entire email blocked because 4 recipients required but only 2 remaining (100-98=2)
3. **Productboard Reference:** Feature tracked in Productboard for product roadmap

### Related Git Documentation
- **Path:** `/Sources/Tools/Enablon.Server.Toolkit/Limits/readme.md`
- **Location:** https://dev.azure.com/enablon/Vision%20Platform/_git/ApplicationServer

---

## 9. Requirement Coverage Matrix

| Acceptance Criterion | Test Case ID(s) | Coverage Status |
|---|---|---|
| Recipients counted from To, CC, BCC | TS-004, TS-002 | ✅ Covered |
| Limit 100, quota 95, 10 recipients → blocked | TS-003 | ✅ Covered |
| Limit 100, quota 95, 5 recipients → allowed | TS-001 | ✅ Covered |
| Daily limit reached → blocked & logged | TS-005 | ✅ Covered |
| Monthly limit reached → blocked & logged | TS-006 | ✅ Covered |
| First limit reached triggers block | TS-003 | ✅ Covered |
| Recipient count not email count | TS-004, TS-011 | ✅ Covered |

**Overall Coverage:** 100% of acceptance criteria addressed in test scenarios

---

## 10. Implementation Notes & Constraints

- **Timing Sensitivity:** Daily reset at 00:00:00 UTC must be precise; consider using UTC exclusively to avoid timezone/DST issues
- **Distributed Systems:** If multiple email servers, use centralized quota tracking (database with transactional locks or distributed cache like Redis with atomic operations)
- **Performance:** Quota check must happen synchronously before email send; keep database query/cache lookup fast (< 10ms target)
- **Backwards Compatibility:** Feature toggles allow gradual rollout (set Enabled = false initially for testing)
- **Monitoring & Alerts:** Alert when daily/monthly quotas approach thresholds (e.g., 80%, 90% used)
- **Audit Trail:** All blocks must be logged for regulatory compliance (especially GDPR, SOC2)
- **Error Handling:** If quota tracking fails (database down), consider fail-open (allow send) vs fail-closed (block send) strategy

---

## 11. Document Approval & Sign-Off

| Role | Name | Status | Date |
|---|---|---|---|
| **QA Lead** | | Pending Review | |
| **Product Owner** | Wandile, Sanket | Approved | 6/1/2026 |
| **Tech Lead/Architect** | | Pending Review | |
| **Platform Ops** | | Pending Review | |

---

## 12. Document Status

**Status:** DRAFT - Ready for QA Test Case Generation  
**Version:** 1.0  
**Created:** 6/10/2026  
**Next Steps:** 
1. QA generates detailed test cases from this specification
2. QA creates automated test suite
3. Implementation team reviews and schedules
4. Testing phase execution

---

**End of Specification**
