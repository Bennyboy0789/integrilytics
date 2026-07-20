// Combined content from the old site's "Why Choose Us" pages:
// Who We Are, What We Do, How We Do It, Who We Support, Where We Meet.

export const whoWeAre = {
  headline: "We Eat Chaos For Breakfast",
  intro:
    "Let's be honest. Business gets messy. Books fall behind, payroll gets complicated, processes break, and sometimes it feels like everything is happening at once. That's where we come in. Whether you need help with a single task or support across your entire operation, we'll help you untangle the chaos and get your business moving forward again.",
  integrity:
    "Our name begins with what defines our approach: integrity. Integrity is more than a principle to us, it is the standard behind every decision, recommendation, and client relationship. We believe in honest communication, ethical business practices, and doing what is right, not just what is easy. Our clients trust us to provide guidance that is transparent, thoughtful, and always aligned with their best interests and long-term success.",
  analytics:
    "The second half of our name, analytics, reflects the way we work. We do more than process numbers, we interpret data, identify patterns, and connect what is happening financially to the bigger picture across your entire business. By turning information into insight, we help support, refine, and create processes across departments, strengthening operations, improving decision-making, and building systems that allow your business to grow with intention.",
};

export const whatWeDo = {
  intro:
    "Running a business means juggling a hundred moving parts. Whether you need a little help or a lot, we're here to bring it all together with accounting, human resources, and operational support tailored to your business.",
  services: [
    {
      title: "Accounting",
      href: "/services/accounting",
      body: 'From everyday bookkeeping to "How did THAT happen?" moments, we\'ll get your numbers back under control.',
    },
    {
      title: "Human Resources",
      href: "/services/hr",
      body: 'Because "winging it" is a terrible HR strategy. We\'ll help you hire smarter, manage better, and sleep easier.',
    },
    {
      title: "Operational Oversight",
      href: "/services/operations",
      body: 'We\'ll turn "this is how we\'ve always done it" into "why didn\'t we do this sooner?" with smarter systems and streamlined processes.',
    },
  ],
};

export type ProcessGroup = { name: string; items: string[] };
export type ProcessPhase = { step: string; desc: string; groups: ProcessGroup[] };

export const process = {
  headline: "Engineered Around Your Goals",
  intro:
    "Every business is different. Together, we strengthen the systems behind your business by designing practical solutions that support your team, your goals, and your long-term success. Here is our process.",
  phases: [
    {
      step: "Let's Talk",
      desc: "We learn about your business, understand your goals, and identify what's most important to you.",
      groups: [
        { name: "Initial Conversation", items: ["Your business", "Current challenges", "Your goals", "General service needs"] },
        { name: "Mutual Fit", items: ["Decide on mutual fit", "Recommended approach", "Discuss scope and timeline", "Obtain project approval"] },
        { name: "Client Onboarding", items: ["Client portal access", "Client agreements", "Upload requested files", "Receive your next steps"] },
      ],
    },
    {
      step: "Assess",
      desc: "We evaluate your systems, processes, and performance to identify opportunities for improvement.",
      groups: [
        { name: "Accounting Review", items: ["Financial records", "Chart of accounts", "Reporting", "Internal controls", "Accounting software"] },
        { name: "Human Resources Review", items: ["Hiring process", "Employee records", "Policies", "Payroll practices", "HR compliance"] },
        { name: "Compliance Review", items: ["Regulations", "Licensing", "Recordkeeping", "Risk exposure", "Required filings"] },
        { name: "Operations Review", items: ["Daily workflows", "Business systems", "Automation", "Communication", "Process efficiency"] },
        { name: "Define Goals & Priorities", items: ["Business objectives", "Key priorities", "Success metrics", "Project scope", "Desired outcomes"] },
      ],
    },
    {
      step: "Design",
      desc: "We design a custom strategy and operational framework for success.",
      groups: [
        { name: "Develop Solutions", items: ["Strategic recommendations", "Process improvements", "Workflow design", "System enhancements", "Risk mitigation"] },
        { name: "Estimate & Approval", items: ["Plan review", "Budget approval", "Timeline confirmation", "Final adjustments", "Project authorization"] },
        { name: "Plan Implementation", items: ["Project timeline", "Key milestones", "Assigned responsibilities", "Resource planning", "Communication plan"] },
      ],
    },
    {
      step: "Implement",
      desc: "We begin implementing your customized strategy, transforming plans into progress.",
      groups: [
        { name: "Project Setup", items: ["Project kickoff", "Timeline review", "Team coordination", "Resource allocation", "Communication plan"] },
        { name: "System Implementation", items: ["Software setup", "Process updates", "Workflow improvements", "System integrations", "Configuration"] },
        { name: "Team Transition", items: ["Staff training", "Process guidance", "Documentation", "Change management", "Ongoing support"] },
      ],
    },
    {
      step: "Grow",
      desc: "We provide ongoing support, refinement, and strategic guidance as your business grows.",
      groups: [
        { name: "Ongoing Support", items: ["Accounting oversight", "HR guidance", "Operational support", "Compliance assistance", "Questions & troubleshooting"] },
        { name: "Review & Adjust", items: ["Monitor progress", "Measure results", "Refine processes", "Address new challenges", "Continuous improvement"] },
        { name: "Optimize", items: ["Process improvements", "Workflow refinement", "Software optimization", "Performance reviews", "Efficiency gains"] },
        { name: "Scale", items: ["Growth planning", "System expansion", "Team development", "New initiatives", "Strategic guidance"] },
      ],
    },
  ] as ProcessPhase[],
};

export const whereWeMeet = {
  intro:
    "Every business is different, and so is every partnership. Whether we work together remotely, on-site, or through a combination of both, we'll tailor our approach to fit your business, your goals, and the way you work.",
  modes: [
    {
      title: "Remote Collaboration",
      body: "Virtual meetings, secure file sharing, and real-time collaboration keep us connected, no matter where you're located.",
    },
    {
      title: "On-Site Support",
      body: "We come to you. Being on-site allows us to see your operations firsthand and build stronger, more effective solutions.",
    },
    {
      title: "Nationwide Availability",
      body: "For projects that require in-person attention beyond our local area, we're ready to travel, wherever your business takes you.",
    },
  ],
  meetingOptions: ["Video conference", "Phone call", "On-site meeting"],
  travelNote:
    "Travel expenses are billed separately and must be approved and paid before travel arrangements are finalized.",
};

export const whoWeSupport = {
  props: [
    {
      title: "Small Tasks or Big Projects",
      body: "From daily bookkeeping and payroll to financial reporting and strategic guidance, our accounting services are designed to keep your business running smoothly and confidently.",
    },
    {
      title: "Our Team or Yours",
      body: "Need an extra set of experienced hands? We work alongside your existing team or provide fractional accounting, HR, and operational leadership tailored to your business.",
    },
    {
      title: "Businesses at Every Stage",
      body: "Whether you're launching a new business, rebuilding after years of change, or planning for what's next, we provide the guidance and support you need at every stage of your journey.",
    },
  ],
  tagline:
    "Every business is unique. Whether you need assistance with small tasks or large overhauls, our services are designed to meet you where you are and grow with you.",
  noIndustryNote: "Give us a call. Industries may differ, but strong foundations are universal.",
  industries: [
    {
      name: "Construction & Skilled Trades",
      items: ["General Contractors", "Commercial Construction", "Residential Construction", "Custom Home Builders", "Developers", "Electrical Contractors", "Plumbing Contractors", "HVAC Contractors", "Roofing Companies", "Concrete Contractors", "Excavation & Site Work", "Landscaping Companies", "Painting Contractors", "Flooring Contractors", "Framing Contractors", "Drywall Contractors", "Masonry Contractors", "Cabinet & Millwork Companies", "Glass & Glazing Contractors", "Remodeling & Renovation Companies", "Specialty Trade Contractors"],
    },
    {
      name: "Healthcare",
      items: ["Medical Practices", "Primary Care Practices", "Specialty Practices", "Dental Practices", "Orthodontic Practices", "Oral Surgery Practices", "Veterinary Practices", "Animal Hospitals", "Mental Health Practices", "Therapy Practices", "Counseling Practices", "Chiropractic Offices", "Physical Therapy Clinics", "Occupational Therapy Providers", "Speech Therapy Providers", "Home Healthcare Providers", "Hospice Providers", "Healthcare Service Organizations", "Medical Billing Companies"],
    },
    {
      name: "Professional Services",
      items: ["Law Firms", "Consulting Firms", "Accounting Firms", "Tax Firms", "Bookkeeping Firms", "Engineering Firms", "Architecture Firms", "Surveying Firms", "Marketing Agencies", "Creative Agencies", "Advertising Agencies", "Public Relations Firms", "IT Service Providers", "Managed Service Providers (MSPs)", "Financial Service Firms", "Insurance Agencies", "Business Consultants", "Recruiting Firms", "Staffing Agencies"],
    },
    {
      name: "Retail, Hospitality & Food Service",
      items: ["Retail Stores", "Boutique Shops", "E-Commerce Businesses", "Online Retailers", "Restaurants", "Coffee Shops", "Bakeries", "Food Trucks", "Catering Companies", "Breweries", "Wineries", "Bars", "Hotels", "Motels", "Bed & Breakfasts", "Event Venues", "Hospitality Businesses"],
    },
    {
      name: "Real Estate & Property Services",
      items: ["Property Management Companies", "Commercial Property Management", "Residential Property Management", "Homeowners Associations", "Real Estate Agencies", "Real Estate Teams", "Commercial Real Estate", "Residential Real Estate", "Vacation Rentals", "Maintenance Companies", "Facility Management Companies"],
    },
    {
      name: "Manufacturing, Distribution & Logistics",
      items: ["Manufacturers", "Fabricators", "Assemblers", "Distributors", "Wholesalers", "Warehousing Operations", "Fulfillment Centers", "Logistics Companies", "Transportation Companies", "Freight Companies", "Shipping Companies", "Supply Chain Businesses", "Import/Export Businesses"],
    },
    {
      name: "Government & Defense Contractors",
      items: ["Government Contractors", "Defense Contractors", "Prime Contractors", "Subcontractors", "Federal Contractors", "State Contractors", "Municipal Contractors", "Military Support Contractors", "Grant-Funded Organizations"],
    },
    {
      name: "Nonprofits, Associations & Community Organizations",
      items: ["Nonprofit Organizations", "Foundations", "Charitable Organizations", "Associations", "Membership Organizations", "Trade Associations", "Chambers of Commerce", "Churches", "Religious Organizations", "Community Organizations", "Educational Organizations"],
    },
    {
      name: "Franchises & Multi-Location Businesses",
      items: ["Franchise Owners", "Franchise Groups", "Multi-Location Businesses", "Regional Operations", "Expanding Organizations", "Multi-Entity Organizations"],
    },
    {
      name: "Technology & Digital Businesses",
      items: ["Software Companies", "SaaS Businesses", "Technology Startups", "App Developers", "Web Development Companies", "Cybersecurity Firms", "Digital Service Businesses", "Online Businesses"],
    },
    {
      name: "Personal & Consumer Services",
      items: ["Salons", "Spas", "Barbershops", "Fitness Studios", "Gyms", "Yoga Studios", "Personal Training Businesses", "Daycares", "Childcare Centers", "Tutoring Centers", "Education Providers", "Cleaning Companies", "Event Companies", "Photography Businesses", "Pet Services", "Marina Services", "Repair Businesses"],
    },
    {
      name: "Agriculture & Environmental Services",
      items: ["Farms", "Agricultural Operations", "Nurseries", "Greenhouses", "Forestry Operations", "Environmental Service Companies", "Waste Management Companies"],
    },
    {
      name: "Transportation & Automotive",
      items: ["Auto Repair Shops", "Fleet Operations", "Trucking Companies", "Transportation Providers", "Delivery Services", "Towing Companies", "Equipment Rental Businesses"],
    },
  ],
};
