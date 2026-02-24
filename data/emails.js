// data/emails.js

export const emails = [
    {
        id: 1,
        sender: "IT-Support@company-secure.net",
        senderName: "IT Support",
        subject: "URGENT: Password Verification Required",
        preview: "Your account will be locked in 24 hours. Click here to verify your credentials immediately...",
        time: "Today at 9:45 AM",
        body: `We have detected unusual activity on your company email account. For security purposes, you must verify your password within the next 24 hours to prevent your account from being locked.

Click here to verify your credentials: http://company-secure.net/verify-account

If you do not complete this verification, your email access will be suspended and all emails will be permanently deleted.

This is an automated security measure. Please do not reply to this email.

Thank you,
IT Security Team`,
        suspicious: true,
        letter: "C",
        hasAttachment: false
    },
    {
        id: 2,
        sender: "s.johnson@company.com",
        senderName: "Sarah Johnson",
        subject: "Q4 Budget Meeting - Thursday 2PM",
        preview: "Hi team, just confirming our quarterly budget review meeting scheduled for this Thursday at 2PM in Conference Room B...",
        time: "Today at 9:12 AM",
        body: `Hi team,

Just confirming our quarterly budget review meeting scheduled for this Thursday at 2PM in Conference Room B.

Please bring your departmental reports and any budget proposals for Q1 2025. We'll be reviewing current spending and planning for next quarter's allocations.

Looking forward to seeing everyone there!

Best regards,
Sarah Johnson
Finance Manager`,
        suspicious: false,
        letter: "X",
        hasAttachment: false
    },
    {
        id: 3,
        sender: "r.chen@company-mail.com",
        senderName: "Robert Chen CEO",
        subject: "Re: Urgent Wire Transfer Needed",
        preview: "I'm in a meeting and need you to process an urgent wire transfer. I'll send details shortly. Keep this confidential...",
        time: "Today at 8:54 AM",
        body: `Hi,

I'm currently in an important board meeting and cannot make calls right now. I need you to process an urgent wire transfer for a confidential acquisition we're finalizing.

The amount is $47,500 and needs to be sent today before market close. I'll send you the wire instructions in a separate email shortly.

Please keep this completely confidential - only senior management is aware of this deal at this stage.

I'll call you when I'm out of the meeting to confirm.

Thanks,
Robert Chen
CEO`,
        suspicious: true,
        letter: "Y",
        hasAttachment: false
    },
    {
        id: 4,
        sender: "hr-notifications@companyhr.net",
        senderName: "HR Department",
        subject: "Updated Employee Handbook 2024.pdf",
        preview: "Please review the attached updated employee handbook. All staff must acknowledge receipt by end of week...",
        time: "Today at 8:33 AM",
        body: `Dear Employees,

The updated 2024 Employee Handbook is now available. Please review the attached document as it contains important policy changes that take effect immediately.

All employees must acknowledge receipt of this handbook by end of week. Failure to do so may result in compliance violations.

Key updates include:
- Remote work policies
- Updated vacation accrual rates
- New cybersecurity requirements
- Benefits enrollment procedures

Please download and review the attached PDF.

Human Resources Department`,
        suspicious: true,
        letter: "B",
        hasAttachment: true,
        attachmentName: "Employee_Handbook_2024.pdf",
        attachmentSize: "2.4 MB"
    },
    {
        id: 5,
        sender: "marketing@company.com",
        senderName: "Marketing Team",
        subject: "New Product Launch Materials Ready",
        preview: "The marketing materials for next month's product launch are ready for review in the shared drive...",
        time: "Yesterday at 4:22 PM",
        body: `Hi everyone,

Great news! The marketing materials for next month's product launch are now ready for your review.

Everything has been uploaded to the shared drive in the "Q4 Product Launch" folder:
- Product brochures
- Social media assets
- Press release draft
- Presentation deck

Please review by Friday and share any feedback in the team channel. We're on track for the November 20th launch date!

Thanks,
Marketing Team`,
        suspicious: false,
        letter: "Q",
        hasAttachment: false
    },
    {
        id: 6,
        sender: "security@linkedin-verify.com",
        senderName: "LinkedIn Security",
        subject: "Unusual sign-in activity detected",
        preview: "We detected a sign-in from an unrecognized device in Russia. If this wasn't you, secure your account now...",
        time: "Yesterday at 2:18 PM",
        body: `Hello,

We detected a sign-in to your LinkedIn account from an unrecognized device:

Device: Windows PC
Location: Moscow, Russia
Time: November 3, 2024 - 14:07 GMT

If this wasn't you, your account may be compromised. Secure your account immediately by clicking below:

Secure My Account Now: http://linkedin-verify.com/secure

If you don't take action within 24 hours, your account may be permanently suspended for security reasons.

LinkedIn Security Team`,
        suspicious: true,
        letter: "E",
        hasAttachment: false
    },
    {
        id: 7,
        sender: "noreply@microsofft-support.com",
        senderName: "Microsoft365 Team",
        subject: "Your subscription expires today",
        preview: "Your Microsoft 365 subscription expires in 6 hours. Renew now to avoid service interruption and data loss...",
        time: "Yesterday at 11:44 AM",
        body: `Important Notice

Your Microsoft 365 Business subscription will expire in 6 hours.

Subscription Details:
- Account: j.smith@company.com
- Expires: November 3, 2024 at 11:59 PM
- Current Plan: Business Premium

After expiration:
✗ Access to all Office applications will be disabled
✗ All OneDrive files will be deleted permanently
✗ Email service will be terminated

RENEW NOW to avoid service interruption and data loss.

Click here to renew: http://microsofft-support.com/renew

Microsoft Corporation`,
        suspicious: true,
        letter: "R",
        hasAttachment: false
    },
    {
        id: 8,
        sender: "d.martinez@company.com",
        senderName: "David Martinez",
        subject: "Great job on the presentation!",
        preview: "Really impressive work on yesterday's client presentation. The team was very pleased with the results...",
        time: "2 days ago",
        body: `Hey,

Just wanted to say really impressive work on yesterday's client presentation. The way you handled their technical questions was excellent, and they were clearly impressed with our proposed solution.

The team feedback has been very positive as well. Looking forward to working with you on the implementation phase!

Keep up the great work!

Best,
David Martinez
Senior Project Manager`,
        suspicious: false,
        letter: "M",
        hasAttachment: false
    },
    {
        id: 9,
        sender: "ap@vendor-solutions.org",
        senderName: "Accounts Payable",
        subject: "Invoice #8847 - Payment Details Updated",
        preview: "Our banking information has changed. Please update your records with new payment details attached...",
        time: "2 days ago",
        body: `Dear Valued Customer,

This is to inform you that our banking information has recently been updated. Please update your payment records immediately to avoid any delays in processing.

Invoice #8847 for services rendered is now due. 

NEW PAYMENT DETAILS:
Bank: International Commerce Bank
Account Name: Vendor Solutions LLC
Account Number: 847392847
Routing Number: 021000021
SWIFT: ICBKUS33

Please remit payment of $12,450.00 using the updated banking information above. Previous banking details are no longer valid.

For questions, contact our AP department.

Vendor Solutions
Accounts Payable Department`,
        suspicious: true,
        letter: "S",
        hasAttachment: false
    },
    {
        id: 10,
        sender: "tracking@fedex-delivery.net",
        senderName: "FedEx Delivery",
        subject: "Package delivery failed - Action required",
        preview: "We attempted to deliver package #FX847392 but no one was available. Reschedule delivery or package will be returned...",
        time: "3 days ago",
        body: `Delivery Notification

We attempted to deliver your package but no one was available to receive it.

Tracking Number: FX847392847
Delivery Address: 425 Market St, San Francisco, CA
Attempted: November 1, 2024 at 2:35 PM

Your package contains important documents and requires signature confirmation. 

IMPORTANT: You must reschedule delivery within 48 hours or your package will be returned to sender and additional storage fees will apply.

Reschedule Delivery: http://fedex-delivery.net/reschedule?id=FX847392847

Package Details:
- Sender: Legal Department
- Weight: 2.5 lbs
- Service: Overnight Priority

FedEx Customer Service`,
        suspicious: true,
        letter: "E",
        hasAttachment: false
    },
    {
        id: 11,
        sender: "training@company.com",
        senderName: "Training Coordinator",
        subject: "Reminder: Compliance Training Due Friday",
        preview: "This is a reminder that annual compliance training must be completed by Friday, November 15th...",
        time: "3 days ago",
        body: `Hello Team,

This is a friendly reminder that annual compliance training must be completed by Friday, November 15th.

The training covers:
- Data privacy and GDPR compliance
- Workplace safety procedures
- Anti-harassment policies
- Information security best practices

To complete your training:
1. Log into the company learning portal
2. Navigate to "Required Training"
3. Complete all modules
4. Acknowledge completion

The training takes approximately 2 hours. You may complete it in multiple sessions.

Thank you for your cooperation!

Training & Development Team`,
        suspicious: false,
        letter: "Z",
        hasAttachment: false
    },
    {
        id: 12,
        sender: "no-reply@dropbox-share.com",
        senderName: "Dropbox Team",
        subject: "Shared file: Q4_Financial_Report.xlsx",
        preview: "John Anderson shared 'Q4_Financial_Report.xlsx' with you. Click to view file before it expires in 24 hours...",
        time: "4 days ago",
        body: `You have a new shared file

John Anderson (j.anderson@company.com) has shared a file with you on Dropbox.

File Name: Q4_Financial_Report.xlsx
Shared: October 30, 2024
Expires: November 2, 2024 (24 hours remaining)

This file contains sensitive financial data and will expire soon for security purposes.

View File Now: http://dropbox-share.com/file/q4-financial-847392

Important: This is a time-sensitive share. After expiration, you will need to request access again from the sender.

The Dropbox Team`,
        suspicious: true,
        letter: "C",
        hasAttachment: false
    }
];
