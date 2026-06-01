# A2P 10DLC Submission Package — Revenue Engine

**Purpose:** everything carriers / Twilio's TCR (The Campaign Registry) will look at, written to address the three prior rejections. Review every section. Anything in `[FILL: …]` needs your input before submitting.

**Site state as of this draft:** widget live (commit `3dc1edc`), dual-surface disclaimer mirrored across form + privacy (commit `6d3a9a5`), legal pages SSR-rendered at `/privacy` and `/terms`.

---

## 1. Brand registration

If your TCR brand is already registered, skip this section — but confirm the brand fields below match what's on file. Mismatches between the brand record and the campaign submission are a common silent-rejection cause.

| Field | Value |
|---|---|
| Legal company name | `[FILL: exact name on EIN docs — not "Revenue Engine" if your LLC is "Revenue Engine LLC" or similar]` |
| DBA / brand name | Revenue Engine |
| Country | US |
| Entity type | `[FILL: Sole Proprietor / LLC / S-Corp / etc.]` |
| EIN | `[FILL: 9 digits]` |
| EIN-issuing country | US |
| Vertical | Professional Services |
| Stock exchange / ticker | N/A |
| Brand website | https://revenue-engine-ai.com |
| Support email | futureceo.52@gmail.com |
| Support phone | `[FILL: same number you're registering with Twilio]` |
| Address | `[FILL: street address — Nashville, TN ZIP]` |

**Sole-prop note:** if you're registering as a Sole Proprietor brand, you're limited to Low Volume Standard campaigns and one phone number per brand. If you expect to scale beyond ~3,000 segments/day or run >1 number, register as an LLC first — re-registering a brand later is painful.

---

## 2. Campaign

### Use case

**Primary:** Low Volume Mixed
**Why not Customer Care or Marketing alone:** the same number handles (a) responses to prospect inquiries from the lead form, (b) appointment scheduling and reminders, (c) service updates to active clients, and (d) occasional follow-ups that touch promotional content (founding-client offer). Mixed is the honest classification and carriers reject "Customer Care" if any message could be read as promotional.

If Twilio's TCR offers "Low Volume Mixed" specifically (it does for sole-prop and standard brands sending <2,000 msgs/day), pick that. Otherwise pick "Mixed."

### Campaign description (paste this verbatim into the TCR description field)

> Revenue Engine is an AI lead-generation consultancy based in Nashville, TN that builds custom voice-agent, SMS-bot, and CRM systems for service businesses (med spas, dental, home services, professional services). This campaign sends conversational SMS to people who explicitly opt in on revenue-engine-ai.com — either by submitting the lead form with the SMS consent checkbox checked, or by initiating a conversation through the GoHighLevel chat widget embedded site-wide. Messages cover: (1) responses to inquiries the prospect initiated, (2) appointment scheduling for the strategy call, (3) reminders and follow-ups for booked calls, and (4) operational updates for existing clients. No purchased lists. No third-party data. No marketing to non-opted-in numbers.

### Message flow (paste verbatim into the "describe the call-to-action / message flow" field)

> End users opt in via one of three surfaces:
>
> **Surface 1 — Lead form (primary):** at https://revenue-engine-ai.com on the homepage, a lead form collects name, business, phone, email, monthly revenue range, and free-text problem description. Above the submit button is a required, unchecked checkbox labeled: "I agree to receive SMS messages from Revenue Engine (required to book)." Directly below the submit button is the TCPA disclosure: "By submitting, you consent to receive SMS messages and calls from Revenue Engine at the number provided on this form or through our website chat widget, including via automated systems. Message frequency varies. Msg & data rates may apply. Reply STOP to opt out, HELP for help. Consent is not a condition of purchase. See our Privacy Policy." The Privacy Policy link points to https://revenue-engine-ai.com/privacy, which includes a "No Mobile Data Sharing" clause and a "SMS Communications" section explicitly naming both opt-in surfaces. The form will not submit without the checkbox checked (client-side AND server-side validation via Zod `z.literal(true)`).
>
> **Surface 2 — Chat widget:** a GoHighLevel chat widget (`widgets.leadconnectorhq.com`, widget ID `6a18670796c166bea6959fdb`) is embedded site-wide via the root layout. When a visitor initiates a conversation and provides a phone number, the widget displays GHL's built-in consent prompt before sending any SMS. The same TCPA disclosure on the form, and the SMS Communications section of the privacy policy, both explicitly cover this surface.
>
> **Surface 3 — Verbal consent on calls:** during strategy calls (booked via the Cal.com / GoHighLevel widget at https://revenue-engine-ai.com/#book), the founder asks for verbal opt-in before sending any follow-up SMS. Consent is logged in the CRM with timestamp and call recording reference.
>
> Across all three surfaces, consent records (timestamp, IP, surface, exact disclosure text shown) are stored in GoHighLevel and retained for at least 4 years.

### Sample messages

Provide at least 2; carriers prefer 3–5 covering the breadth of what you'll send. Every sample must end with a recognizable opt-out mechanism (`Reply STOP to opt out` or equivalent). Include a brand identifier (`Revenue Engine`) in the first message of any conversation.

**Sample 1 — Inquiry response (Surface 1: form submission)**

> Hi {{first_name}}, this is Tim from Revenue Engine — thanks for the audit request for {{business}}. I'll review your numbers tonight and reply tomorrow morning with the 3 highest-leverage moves we'd make. If it's urgent, grab a 25-min strategy call here: https://revenue-engine-ai.com/#book — Reply STOP to opt out, HELP for help.

**Sample 2 — Chat-widget inquiry response (Surface 2)**

> Hey {{first_name}} — Tim from Revenue Engine here, following up on the chat you started on revenue-engine-ai.com. What's the single biggest revenue leak in your business right now? Reply STOP to opt out, HELP for help.

**Sample 3 — Appointment reminder**

> Reminder: your Revenue Engine strategy call is tomorrow at {{time}} CT. Zoom link: {{link}}. Need to reschedule? Reply RESCHEDULE. Reply STOP to opt out, HELP for help.

**Sample 4 — Founder follow-up to a no-show**

> {{first_name}}, missed you on the call today — happens. Want to grab another slot or should I send the audit by email instead? Reply STOP to opt out.

**Sample 5 — Founding-client offer follow-up (the only sample that touches promotional content; this is why use case is Mixed)**

> {{first_name}}, founding-client pricing for Revenue Engine closes once we sign 10 Nashville businesses. {{spots_left}} spots left. Want me to send the offer details? Reply STOP to opt out, HELP for help.

### Opt-in keywords / auto-reply

| Field | Value |
|---|---|
| Opt-in keywords | None (consent is captured by checkbox + form submission, not by SMS keyword) |
| Opt-in message (auto-reply confirming opt-in) | None required — first agent message after form/chat opt-in is the confirmation, per Sample 1 / Sample 2 |

If TCR forces an opt-in keyword (some campaign templates do), use `START` as the resubscribe keyword paired with this auto-reply:

> You're back in. Revenue Engine SMS resumed. Msg frequency varies. Msg & data rates may apply. Reply STOP to opt out, HELP for help.

### STOP / opt-out

| Field | Value |
|---|---|
| Opt-out keywords | STOP, STOPALL, UNSUBSCRIBE, CANCEL, END, QUIT |
| Opt-out message (auto-reply on STOP) | You're unsubscribed from Revenue Engine SMS. You will receive no further messages. Reply START to resubscribe. |

Configure these in Twilio Messaging Service → Opt-Out Management. Twilio handles STOP automatically once enabled — do not implement a custom STOP handler in GHL that bypasses Twilio's, or you'll get suspended for "STOP not honored."

### HELP

| Field | Value |
|---|---|
| Help keywords | HELP, INFO |
| Help message | Revenue Engine: AI lead gen for service businesses. Questions? futureceo.52@gmail.com. Reply STOP to opt out. Msg & data rates may apply. |

---

## 3. Why this should clear the three prior rejections

State the rejections briefly if TCR offers a "previous rejection reason / what changed" field. If they don't, this is for your own QA.

| Prior rejection | What's now true on the site |
|---|---|
| Missing/insufficient privacy policy or SMS disclosure | `/privacy` ships SSR-rendered with an explicit "SMS Communications" section, a "No Mobile Data Sharing" clause that uses the exact carrier-required language ("excluded from all third-party sharing"), and a 4-year consent-retention commitment. Verify: `curl -sS https://revenue-engine-ai.com/privacy \| grep "No Mobile Data Sharing"` |
| Multi-opt-in failure (form + chat widget = two surfaces without a unified disclosure) | Same TCPA wording on the form disclaimer and in the privacy policy SMS section, both naming form + chat widget explicitly. Verify both surfaces with the curl commands in §5. |
| Consent text or site copy inconsistent with the brand profile / testimonial reality conflict | Three named testimonials replaced with a "Founding Clients" offer block — no contradiction between "first Nashville clients" positioning and the displayed proof. "150+ clients served" → "150+ tax clients served" so the prior-business stat doesn't conflict. |

---

## 4. Twilio Messaging Service — config checklist

These are operational settings, not part of the TCR submission itself, but they matter for the post-approval audit.

- [ ] Opt-Out Management enabled (Twilio-handled STOP)
- [ ] Sticky Sender enabled (same Twilio number replies to same lead)
- [ ] Phone numbers added to the Messaging Service AFTER campaign approval (not before)
- [ ] `data-source="WEB_USER"` on the chat widget tags those conversations so you can audit them separately in GHL
- [ ] Consent records logged in GHL with: timestamp, IP, surface (form/chat/verbal), exact disclosure text shown
- [ ] Test STOP from your own cell on the registered number before "going live" with any real campaign send
- [ ] Test HELP from your own cell — confirm the HELP auto-reply matches what's in §2 above

---

## 5. Verification — run these against the live site before submitting

```bash
# 1. Privacy policy renders SSR with all required clauses
curl -sS https://revenue-engine-ai.com/privacy | grep -E "No Mobile Data Sharing|Reply STOP|chat widget|excluded from all third-party"

# 2. Terms render SSR
curl -sS https://revenue-engine-ai.com/terms | grep -E "Tennessee law|consent to SMS|Privacy Policy"

# 3. Lead form disclaimer is in the homepage HTML
curl -sS https://revenue-engine-ai.com/ | grep -E "on this form or through our website chat widget|required to book"

# 4. Chat widget loader is in the HTML
curl -sS https://revenue-engine-ai.com/ | grep -oE "widgets\.leadconnectorhq\.com[^\"]*" | sort -u
```

All four should print matching lines. If any return nothing, fix the site before submitting — TCR will fetch your URLs and see the same thing.

---

## 6. Screenshots to attach (if the submission form lets you)

Carriers love screenshots. Take and attach:

1. The homepage with the lead form visible, **including the SMS consent checkbox** and the TCPA disclaimer below the submit button. Make sure both are in the same frame.
2. The chat widget open in the corner of any page, with the consent prompt visible (you may need to start a conversation to make this appear).
3. The `/privacy` page scrolled to the SMS Communications section.
4. The "I agree to receive SMS messages" checkbox in its **unchecked** state on first page load (proves it's not pre-checked — that's a separate rejection reason).

---

## 7. Open items I need from you before this can be submitted

- `[ ]` Legal entity name (exact, as on EIN docs)
- `[ ]` Entity type (sole prop / LLC / etc.)
- `[ ]` EIN
- `[ ]` Street address (Nashville, TN ZIP)
- `[ ]` The phone number you're registering with Twilio (so support phone matches)
- `[ ]` Confirm: did the prior three rejections all come from TCR/the carriers, or did any come from Twilio's pre-submission review? If Twilio rejected before it reached TCR, the rejection text usually tells us exactly which field they want changed — paste the exact language and I'll target it specifically.
- `[ ]` Expected message volume (msgs/day average and peak). Sole-prop caps at ~1,000 msgs/day; Standard Brand goes higher. Affects use-case classification.
- `[ ]` Are you sending from one number or multiple? (Affects brand type — sole-prop = 1 number max.)

---

## 8. Final checklist before clicking submit

- [ ] Brand record fields match the campaign record fields (esp. company name, website, support email)
- [ ] All 5 sample messages copy-pasted **without edits** into TCR's sample fields
- [ ] Use case = **Low Volume Mixed** (or Mixed)
- [ ] Embedded link allowed = **Yes**
- [ ] Embedded phone allowed = **Yes**
- [ ] Affiliate marketing = **No**
- [ ] Age-gated content = **No**
- [ ] Subscriber opt-in = **Yes**, described per §2 "Message flow"
- [ ] Subscriber opt-out = **Yes**, STOP keyword
- [ ] Subscriber help = **Yes**, HELP keyword
- [ ] Direct lending or loan arrangement = **No**
- [ ] Privacy policy URL = `https://revenue-engine-ai.com/privacy`
- [ ] Terms of service URL = `https://revenue-engine-ai.com/terms`
- [ ] §5 verification commands all return matches
