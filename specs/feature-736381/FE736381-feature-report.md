# Feature Report: FE#736381

**Generated:** 6/10/2026, 3:34:55 PM

## Metadata

| Property | Value |
|---|---|
| ID | 736381 |
| Title | [Limit] Max # of emails sent |
| State | Closed |
| Priority | 2 |
| Type | Feature |
| Assigned To | Wandile, Sanket |
| Created | 11/27/2025, 7:35:30 PM |
| Updated | 6/1/2026, 12:16:54 PM |
| URL | https://dev.azure.com/enablon/14963647-fcdd-47d8-af45-7343e976fde6/_apis/wit/workItems/736381 |

## Description

### User Story

**Context**: an outage has occurred when a test has been done on an "old" solution and emails were temporary reactivated. The side effect has been to send tons of reminders due to "old" data, where the tests was on a different module. Many millions of emails has been sent. The 2M limit of total email of the subscription has been quickly reached. First impact has been on the cost because each email has a cost. Second most important impact has been on other customers linked to this subscription have been blocked and all emails have been dropped until Cloud increased the limit temporary for the day.  **Description**: We want to add some controls to: based on an standard usage (number to be found), we need to ensure we stay under this limit to block any abnormal behavior as we are sharing a subscription (e.g. America, Europe, ...) we need to guarantee one customer will not impact another customer of the same subscription.   **Implementation** A absolute limit needs to be implemented in site.config file. This will ensure that we are able to put limit to the emails that are sent for each customer on daily and monthly basis. We need to ensure that customers which are sharing the subscription are not getting hampered due to each other's email consumption This configuration will done by platform ops team. The daily limit will be reset at 00:00:00 hrs The monthly limit will be reset basis the number of days which will be defined in the site.config. Email related to new user creation and forgot password, should be exempted from the limit threshold
https://dev.azure.com/enablon/Vision%20Platform/_git/ApplicationServer?path=/Sources/Tools/Enablon.Server.Toolkit/Limits/readme.md&_a=preview

## Acceptance Criteria

```
Email limit should consider recipients present in To, CC, BCC  If limit is set to 100, and 95 email quota is already exhausted, and a new email is getting triggered which has 10 recipients, then this entire email should get blocked, no one should receive the email.
 If limit is set to 100, and 95 email quota is already exhausted, and a new email is getting triggered which has 5 recipients, then this email should be allowed  When the daily limit is reached, no more email are sent, and the not sent email should get logged When the monthly limit is reached, no more email are sent, and the not sent email should get logged
 We block the sending of the email at the first limit reached
 The count for the email limit is based on the number of recipients and not emails (3 recipients in 1 email count for 3)
```

## Comments (3)

### Comment 1
**By:** Wandile, Sanket
**Date:** 6/1/2026, 12:14:13 PM

This item is tested and closed in SP13

### Comment 2
**By:** Doulle, Alexandre
**Date:** 11/28/2025, 3:20:48 PM

what happens if the limit is set to 100 and the 98th mail is trying to be send with 4 recipients?

### Comment 3
**By:** EU-s-productboard
**Date:** 11/27/2025, 7:35:30 PM

Productboard referencehttps://enablon.productboard.com/entity-detail/features/6d3176a9-5445-4cbf-bd83-fc798e6de96f

