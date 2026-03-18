---
name: SOC 2 Compliance
description: Guide organizations through SOC 2 readiness and audit preparation based on AICPA Trust Service Criteria
category: Compliance & Legal
attribution: Original -- Datatide MIT
---

# SOC 2 Compliance

Guide organizations through SOC 2 readiness and audit preparation. SOC 2 is a framework developed by the AICPA for managing customer data based on five Trust Service Criteria.

## Trust Service Criteria (TSC)

### Security (Common Criteria -- required)
- Logical and physical access controls.
- Network and application firewalls, intrusion detection.
- Multi-factor authentication for production systems.
- Encryption of data at rest and in transit.

### Availability
- Uptime SLAs and monitoring.
- Disaster recovery and business continuity plans.
- Incident response procedures with defined RTO and RPO.
- Capacity planning and performance monitoring.

### Processing Integrity
- Input validation and error handling.
- Quality assurance processes for data processing.
- Reconciliation procedures to verify completeness and accuracy.

### Confidentiality
- Classification of confidential information.
- Access restricted to authorized personnel.
- Secure disposal of confidential data.
- NDA and contractual protections with third parties.

### Privacy
- Collection limited to stated purposes.
- Consent and notice requirements.
- Retention and disposal policies.
- Aligns closely with GDPR obligations for EU data.

## Type I vs Type II

- **Type I** -- Evaluates the design of controls at a single point in time. Useful as a first step to demonstrate intent and design.
- **Type II** -- Evaluates the operating effectiveness of controls over a period (typically 3-12 months). Required by most enterprise customers.

Start with a Type I audit to validate control design, then proceed to a Type II audit to demonstrate sustained compliance.

## Evidence Collection

Organize evidence by control objective. Common evidence types:

- **Policies and procedures** -- Written, version-controlled, and reviewed annually.
- **System configurations** -- Screenshots or exports showing security settings.
- **Access reviews** -- Quarterly reviews of user access with sign-off.
- **Change management logs** -- Ticketed, reviewed, and approved changes.
- **Monitoring and alerting** -- Dashboard exports, alert configurations, incident logs.
- **Training records** -- Security awareness training completion records.

## Control Implementation Checklist

- Maintain an asset inventory of all systems processing customer data.
- Enforce least-privilege access and review quarterly.
- Log all access to production systems with centralized log management.
- Conduct annual risk assessments and document findings.
- Perform background checks for employees with access to customer data.
- Establish a vendor management program for third-party risk.
- Test incident response and disaster recovery plans at least annually.
- Track exceptions and remediation with target dates.

## Audit Timeline

1. **Readiness assessment** (4-8 weeks) -- Gap analysis against chosen TSC.
2. **Remediation** (4-12 weeks) -- Implement missing controls and gather initial evidence.
3. **Observation period** (3-12 months for Type II) -- Operate controls and collect evidence.
4. **Audit fieldwork** (2-4 weeks) -- Auditor reviews evidence and interviews staff.
5. **Report issuance** (2-4 weeks) -- Final SOC 2 report delivered.
