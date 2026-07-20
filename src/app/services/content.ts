export type ServiceCategory = { name: string; items: string[] };
export type ServiceGroup = { heading?: string; categories: ServiceCategory[] };
export type ServiceContent = {
  eyebrow: string;
  title: string;
  intro: string;
  groups: ServiceGroup[];
};

export const accounting: ServiceContent = {
  eyebrow: "Accounting",
  title: "Accounting Services",
  intro:
    "Strong financial management is the foundation of every successful business. At IntegriLytics, we provide accounting solutions that support businesses through every stage of growth, from establishing accurate financial systems to managing complex accounting needs. Whether you're launching a new company, maintaining day-to-day financial operations, or navigating specialized accounting challenges, our services are designed to deliver accuracy, compliance, and meaningful financial insight.",
  groups: [
    {
      heading: "Core Accounting Services",
      categories: [
        {
          name: "New Company Accounting Setup",
          items: [
            "Creating a customized chart of accounts tailored to your business type and industry",
            "Establishing accounting policies, procedures, and reporting structures",
            "Setting up bank feeds, vendors, customers, products, and services",
            "Configuring accounts payable and receivable workflows",
            "Integrating accounting software with related applications such as POS or CRM systems",
            "Preparing opening balances and reconciliations for all accounts",
            "Creating customized financial reports and templates",
            "Providing training and documentation for maintaining accurate records",
            "Conducting a post-setup review to ensure everything is working smoothly",
          ],
        },
        {
          name: "Accounting Clean-up",
          items: [
            "Reviewing and correcting account classifications",
            "Clearing duplicate or incorrect transactions",
            "Adjusting balances to match source documentation",
            "Conducting informal internal audits to verify financial statement accuracy",
            "Providing forensic accounting support to trace errors or irregular activity, if needed",
          ],
        },
        {
          name: "Full-Cycle Bookkeeping / Accounting",
          items: [
            "Entering and reconciling daily transactions and maintaining the general ledger",
            "Producing monthly, quarterly, and annual financial statements",
            "Managing accounts payable and receivable, and closing books at period-end",
            "Organizing project or product costs, tracking progress, billing, and job costing",
            "Understanding costs, improving efficiency, setting prices, and forecasting projects",
            "Managing business or trust assets, tracking disbursements, and supporting accountability",
            "Creating separate accounts and reports for multiple projects or funds",
            "Providing clear, easy-to-read statements and customized reports for better decisions",
            "Tracking income, expenses, cash flow, and key performance metrics",
            "Simplifying accounting systems and improving efficiency with technology",
          ],
        },
        {
          name: "Software Integration & Training",
          items: [
            "Evaluating and recommending accounting software solutions",
            "Migrating data from old systems or spreadsheets",
            "Customizing the setup to match your company's workflows and reporting needs",
            "Integrating accounting systems with payroll, POS, or CRM applications",
            "Providing one-on-one or group training sessions for your team",
          ],
        },
        {
          name: "Sales Tax Setup & Filing",
          items: [
            "Registering for sales tax accounts in one or multiple states",
            "Setting up the correct tax rates in your accounting software",
            "Tracking taxable versus non-taxable sales",
            "Preparing and filing monthly, quarterly, and annual sales tax returns",
            "Assisting with notices or resolving discrepancies from state agencies",
          ],
        },
        {
          name: "Payroll & Payroll Tax Filing",
          items: [
            "Setting up payroll for employees in one or multiple states",
            "Calculating wages, deductions, and benefits",
            "Preparing and filing payroll tax reports at state and federal levels",
            "Reconciling payroll accounts to ensure accuracy",
            "Maintaining compliance with varying state payroll laws",
          ],
        },
        {
          name: "Income Tax Preparation & Planning",
          items: [
            "Business income tax return preparation",
            "Tax research, planning, analysis, and consulting",
            "IRS and state representation",
            "Tax notice resolution",
            "Litigation and expert witness support services",
          ],
        },
      ],
    },
    {
      heading: "Specialized Accounting Services",
      categories: [
        {
          name: "Cost Accounting",
          items: [
            "Job Costing",
            "Project Accounting",
            "Inventory Costing",
            "Manufacturing Cost Accounting",
            "Standard & Actual Costing",
            "Work-in-Progress (WIP) Accounting",
            "Overhead Allocation",
            "Variance Analysis",
            "Cost Analysis & Profitability Reporting",
          ],
        },
        {
          name: "Fixed Asset Accounting",
          items: [
            "Fixed Asset Tracking",
            "Asset Capitalization",
            "Depreciation & Amortization",
            "Asset Additions & Disposals",
            "Fixed Asset Reconciliations",
            "Asset Register Maintenance",
            "Capital Expenditure (CapEx) Tracking",
            "Fixed Asset Reporting",
          ],
        },
        {
          name: "Non-Profit Accounting",
          items: [
            "Fund Accounting",
            "Grant Accounting",
            "Restricted & Unrestricted Fund Tracking",
            "Donor & Board Financial Reporting",
            "Program & Grant Budget Tracking",
            "Form 990 Financial Support",
            "Nonprofit Financial Statement Preparation",
          ],
        },
        {
          name: "Trust Accounting",
          items: [
            "Fiduciary Accounting",
            "Attorney Trust (IOLTA) Accounting",
            "Escrow Account Management",
            "Estate & Trust Accounting",
            "Client Trust Reconciliations",
            "Trust Compliance & Recordkeeping",
          ],
        },
        {
          name: "Forensic Accounting",
          items: [
            "Fraud Detection & Investigation",
            "Financial Analysis",
            "Litigation Support",
            "Expert Witness Support",
            "Financial Record Reconstruction",
            "Asset Tracing & Transaction Analysis",
          ],
        },
        {
          name: "Internal Auditing",
          items: [
            "Internal Control Evaluations",
            "Process & Workflow Reviews",
            "Compliance Assessments",
            "Risk Assessments",
            "Policy & Procedure Reviews",
            "Operational Audit Support",
            "Audit Readiness & Documentation Support",
          ],
        },
        {
          name: "Multi-Entity Accounting",
          items: [
            "Parent & Subsidiary Accounting",
            "Intercompany Transactions",
            "Consolidated Financial Reporting",
            "Multi-Location Accounting",
            "Holding Company Accounting",
            "Entity-Level Financial Reporting",
          ],
        },
      ],
    },
  ],
};

export const hr: ServiceContent = {
  eyebrow: "Human Resources",
  title: "Human Resources",
  intro:
    "People are at the heart of every successful business. At IntegriLytics, we provide human resources solutions that help businesses build compliant, organized, and productive workplaces. Whether you're hiring your first employee, developing policies, managing employee relations, or strengthening your HR processes, our services are designed to reduce administrative burdens, support compliance, and help your team succeed.",
  groups: [
    {
      heading: "Human Resource Solutions",
      categories: [
        {
          name: "Talent Acquisition & Management",
          items: [
            "Developing and updating job descriptions",
            "Workforce planning and staffing strategies",
            "Recruiting, interviewing, and candidate selection",
            "Managing pre-employment screening and background checks",
            "Coordinating new hire onboarding and orientation",
            "Creating structured onboarding programs for long-term success",
            "Developing succession planning strategies",
            "Supporting employee retention initiatives",
          ],
        },
        {
          name: "Employee Relations",
          items: [
            "Workforce planning and talent acquisition strategies",
            "Position development and job description creation",
            "Recruiting, interviewing, and candidate selection",
            "Pre-employment screening and hiring support",
            "New hire onboarding and orientation",
            "Employee retention strategies",
            "Succession planning and workforce continuity",
            "Employer branding and hiring process improvement",
          ],
        },
        {
          name: "Compensation & Benefits",
          items: [
            "Developing competitive compensation strategies",
            "Designing and administering employee compensation and benefits programs",
            "Conducting compensation benchmarking and market analysis",
            "Supporting salary structure development and pay equity initiatives",
            "Advising on incentive, bonus, and employee retention programs",
            "Coordinating employee benefits administration and enrollment",
            "Assisting with leave administration, including FMLA and other applicable leave programs",
            "Collaborating with payroll to support accurate compensation reporting",
          ],
        },
        {
          name: "HR Compliance",
          items: [
            "Supporting compliance with federal, state, and local employment requirements",
            "Developing, reviewing, and maintaining HR policies and procedures",
            "Managing employee records and personnel documentation",
            "Conducting HR compliance audits and identifying areas for improvement",
            "Supporting regulatory reporting and employment recordkeeping",
            "Assisting with workplace documentation and record management",
            "Supporting wage and hour, leave administration, and equal employment compliance",
            "Monitoring HR regulatory updates and implementing best practices",
          ],
        },
        {
          name: "Workplace Safety",
          items: [
            "Developing and implementing workplace safety programs and policies",
            "Supporting OSHA requirements, documentation, and reporting",
            "Coordinating workplace safety training and emergency preparedness",
            "Managing workplace incident reporting and documentation",
            "Supporting workers' compensation administration and return-to-work coordination",
            "Promoting a culture of workplace health, safety, and risk awareness",
            "Assisting with workplace safety assessments and continuous improvement",
          ],
        },
        {
          name: "Training & Development",
          items: [
            "Assessing organizational training and professional development needs",
            "Designing and implementing employee onboarding and orientation programs",
            "Developing leadership and management training initiatives",
            "Creating employee development and career growth programs",
            "Supporting succession planning and workforce development",
            "Coordinating compliance and role-specific training programs",
            "Tracking training completion, certifications, and development progress",
            "Promoting continuous learning and organizational growth",
          ],
        },
      ],
    },
  ],
};

export const operations: ServiceContent = {
  eyebrow: "Operational Oversight",
  title: "Operational Oversight",
  intro:
    "Well-run businesses don't happen by accident. They are built on organized systems, efficient processes, and consistent day-to-day operations. At IntegriLytics, our Operational Oversight services help businesses establish structure, improve efficiency, and create practical solutions that support long-term growth. Whether you're organizing a new office, developing standard operating procedures, implementing business systems, improving workflows, or strengthening daily operations, we provide hands-on operational support tailored to the way your business works.",
  groups: [
    {
      heading: "Operational Oversight Solutions",
      categories: [
        {
          name: "Business Operations",
          items: [
            "Providing day-to-day operational support tailored to your business",
            "Coordinating cross-functional business activities",
            "Strengthening organizational structure and accountability",
            "Supporting business continuity and operational consistency",
            "Identifying operational challenges and practical solutions",
            "Improving communication across teams and departments",
          ],
        },
        {
          name: "Office Administration",
          items: [
            "Office setup and administrative organization",
            "Physical and digital filing systems",
            "Document management and record retention procedures",
            "Business forms, templates, and letterhead development",
            "Administrative policies and office procedures",
            "Workflow organization and administrative best practices",
            "Vendor coordination and office administration",
            "Business documentation standards",
          ],
        },
        {
          name: "Process Improvement",
          items: [
            "Evaluating and improving business workflows",
            "Developing and implementing standard operating procedures (SOPs)",
            "Streamlining administrative and operational processes",
            "Eliminating inefficiencies and workflow bottlenecks",
            "Improving process consistency and accountability",
            "Creating scalable business procedures",
          ],
        },
        {
          name: "Systems & Technology",
          items: [
            "Business software selection and implementation",
            "System integration and workflow automation",
            "CRM, ERP, and business application support",
            "Technology optimization and process alignment",
            "Software training and user adoption",
            "Evaluating technology solutions to improve efficiency",
          ],
        },
        {
          name: "Planning & Strategy",
          items: [
            "Developing short- and long-term business strategies",
            "Supporting organizational growth and expansion planning",
            "Establishing measurable business goals and objectives",
            "Business assessments and operational planning",
            "Organizational restructuring and transition support",
            "Strategic decision support for business owners",
          ],
        },
        {
          name: "Performance Improvement",
          items: [
            "Developing key performance indicators (KPIs)",
            "Monitoring operational performance and business trends",
            "Creating management reports and operational dashboards",
            "Measuring progress toward business objectives",
            "Identifying opportunities for increased efficiency",
            "Recommending operational improvements based on performance data",
          ],
        },
      ],
    },
  ],
};

// One-line summaries shown collapsed in the expandable service lists.
export const serviceSummaries: Record<string, string> = {
  "New Company Accounting Setup": "Launch your books the right way, from a tailored chart of accounts to trained staff.",
  "Accounting Clean-up": "Untangle messy or behind books and get back to accurate, reliable numbers.",
  "Full-Cycle Bookkeeping / Accounting": "Everyday bookkeeping through period-end close, handled start to finish.",
  "Software Integration & Training": "The right accounting tools, set up to fit your workflows and taught to your team.",
  "Sales Tax Setup & Filing": "Registered, calculated, and filed correctly in every state you sell in.",
  "Payroll & Payroll Tax Filing": "On-time payroll and every state and federal filing that comes with it.",
  "Income Tax Preparation & Planning": "Business returns, year-round planning, and representation when you need it.",
  "Cost Accounting": "Know what every job, project, and unit actually costs you.",
  "Fixed Asset Accounting": "Track, depreciate, and report on your assets with confidence.",
  "Non-Profit Accounting": "Fund, grant, and board-ready reporting built for how nonprofits work.",
  "Trust Accounting": "Compliant, reconciled trust and fiduciary accounting you can stand behind.",
  "Forensic Accounting": "Follow the money and find the answers when something does not add up.",
  "Internal Auditing": "An independent look at your controls, processes, and risk.",
  "Multi-Entity Accounting": "Clean books and consolidated reporting across every entity you run.",
  "Talent Acquisition & Management": "Find, hire, onboard, and keep the right people.",
  "Employee Relations": "Handle the people side of the business before small issues become big ones.",
  "Compensation & Benefits": "Competitive, fair pay and benefits, designed and administered for you.",
  "HR Compliance": "Stay on the right side of every federal, state, and local employment rule.",
  "Workplace Safety": "OSHA-ready programs that protect your team and your business.",
  "Training & Development": "Grow your people with onboarding and training that actually sticks.",
  "Business Operations": "Steady, hands-on support that keeps the day-to-day moving.",
  "Office Administration": "Organized files, forms, and procedures for an office that runs itself.",
  "Process Improvement": "Find the bottlenecks and build simpler, more consistent ways to work.",
  "Systems & Technology": "The right software, integrated, automated, and actually adopted.",
  "Planning & Strategy": "Clear goals, measurable objectives, and a plan to reach them.",
  "Performance Improvement": "Measure what matters and turn the numbers into action.",
};
