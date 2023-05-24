const companyTypes = [
  {
    type: 'Brokerage Company',
    subTypes: [
      {
        title: 'Real Estate Brokerage Services',
        items: [
          'Buying & selling residential properties',
          'Buying & selling commercial properties',
          'Leasing residential properties',
          'Leasing commercial properties',
          'Property valuations & appraisals',
          'Property management & rental services',
          'Investment & development advisory'
        ]
      },
      {
        title: 'Stock Brokerage Services',
        items: [
          'Buying & selling stocks & securities',
          'Portfolio management',
          'Investment advisory & analysis',
          'Retirement planning & IRA management',
          'Tax planning & analysis',
          'Wealth management & estate planning',
          'Margin trading & options trading'
        ]
      },
      {
        title: 'Insurance Brokerage Services',
        items: [
          'Auto insurance',
          'Homeowners insurance',
          'Life insurance',
          'Health insurance',
          'Business insurance',
          'Liability insurance',
          "Workers' compensation insurance",
          'Specialty insurance (e.g. aviation, marine, cyber)'
        ]
      },
      {
        title: 'Freight Brokerage Services',
        items: [
          'Freight forwarding & transportation management',
          'Load matching & carrier selection',
          'Shipment tracking & reporting',
          'Customs brokerage & compliance',
          'Warehousing & distribution management',
          'Risk management & insurance services',
          'Freight rate negotiation & analysis'
        ]
      },
      {
        title: 'Mortgage Brokerage Services',
        items: [
          'Mortgage refinancing',
          'Mortgage origination & application assistance',
          'Loan rate comparison & analysis',
          'Credit counseling & repair services',
          'Pre-qualification & pre-approval services',
          'Loan processing & underwriting assistance',
          'Down payment assistance programs'
        ]
      }
    ]
  },
  {
    type: 'Management Company',
    subTypes: [
      {
        title: 'Property Management Services',
        items: [
          'Tenant management & leasing',
          'Rent collection & accounting',
          'Property maintenance & repairs',
          'Marketing & advertising',
          'Lease negotiation & renewal',
          'Tenant screening & background checks',
          'Property inspections',
          'Eviction & legal services'
        ]
      },
      {
        title: 'Association Management Services',
        items: [
          'Board of Directors support',
          'Financial management & reporting',
          'Community communications',
          'Administrative support',
          'Vendor management & contract negotiation',
          'Common area maintenance & repairs',
          'Rules enforcement & compliance',
          'Reserve fund management & planning'
        ]
      },
      {
        title: 'Facilities Management Services',
        items: [
          'Landscaping & grounds maintenance',
          'Energy management & sustainability',
          'Security & safety management',
          'Parking & transportation services',
          'Space planning & utilization',
          'Equipment & asset management'
        ]
      },
      {
        title: 'Project Management Services',
        items: [
          'Project planning & scheduling',
          'Budgeting & cost control',
          'Contract negotiation & management',
          'Design & construction management',
          'Permitting & regulatory compliance',
          'Quality control & assurance',
          'Change order management',
          'Risk management & mitigation'
        ]
      },
      {
        title: 'Hospitality Management Services',
        items: [
          'Hotel operations management',
          'Revenue management & pricing strategy',
          'Guest services & satisfaction',
          'Food & beverage operations',
          'Sales & marketing',
          'Staff training & development',
          'Brand management & loyalty programs',
          'Financial management & reporting'
        ]
      }
    ]
  },
  {
    type: 'Maintenance Company',
    subTypes: [
      {
        title: 'Building Maintenance Services',
        items: [
          'HVAC system maintenance',
          'Plumbing & electrical repairs',
          'Roof & gutter maintenance',
          'Painting & wall repairs',
          'Flooring repairs & replacement',
          'Door & window repairs',
          'Lighting & fixture maintenance',
          'Exterior building maintenance'
        ]
      },
      {
        title: 'Grounds Maintenance Services',
        items: [
          'Lawn care & maintenance',
          'Tree & shrub care',
          'Fertilization & pest control',
          'Irrigation system maintenance',
          'Snow & ice removal',
          'Landscape design & installation',
          'Parking lot maintenance',
          'Hardscaping & masonry'
        ]
      },
      {
        title: 'Equipment Maintenance Services',
        items: [
          'Industrial equipment maintenance & repair',
          'Heavy equipment maintenance & repair',
          'Power tool maintenance & repair',
          'Computer & office equipment maintenance',
          'Elevator & escalator maintenance',
          'Generator & backup power system maintenance',
          'Vehicle maintenance & repair'
        ]
      },
      {
        title: 'Janitorial & Cleaning Services',
        items: [
          'Office cleaning & maintenance',
          'Restroom cleaning & restocking',
          'Floor cleaning & maintenance',
          'Carpet & upholstery cleaning',
          'Window cleaning',
          'Pressure washing',
          'Trash & recycling removal',
          'Special event cleaning'
        ]
      },
      {
        title: 'Preventive Maintenance Services',
        items: [
          'Routine inspections & maintenance',
          'Equipment lubrication & adjustments',
          'Scheduled maintenance services',
          'Preventive maintenance planning & scheduling',
          'Equipment & asset management',
          'Condition-based maintenance services',
          'Predictive maintenance services'
        ]
      },
      {
        title: 'Emergency Maintenance Services',
        items: [
          '24/7 emergency maintenance response',
          'Emergency equipment repairs & replacement',
          'Disaster response & recovery services',
          'Emergency building repairs & restoration',
          'Emergency grounds maintenance services',
          'Emergency cleaning & janitorial services'
        ]
      }
    ]
  },
  {
    type: 'Bank & Mortgage Companies',
    subTypes: [
      {
        title: 'Banking Services',
        items: [
          'Credit & debit cards',
          'Personal loans',
          'Business loans',
          'Lines of credit',
          'Merchant services',
          'Foreign currency exchange',
          'Safe deposit boxes'
        ]
      },
      {
        title: 'Investment Services',
        items: [
          'Stocks & bonds trading',
          'Mutual funds & exchange-traded funds (ETFs)',
          'Retirement planning',
          'Wealth management',
          'Financial planning',
          'Trust & estate planning',
          'Private banking'
        ]
      },
      {
        title: 'Mortgage Services',
        items: [
          'Home purchase loans',
          'Refinance loans',
          'Home equity loans',
          'Jumbo loans',
          'Fixed-rate mortgages',
          'Adjustable-rate mortgages (ARMs)',
          'FHA loans',
          'VA loans'
        ]
      },
      {
        title: 'Insurance Services',
        items: [
          'Renters insurance',
          'Auto insurance',
          'Life insurance',
          'Health insurance',
          'Disability insurance',
          'Long-term care insurance'
        ]
      },
      {
        title: 'Online & Mobile Banking Services',
        items: [
          'Online account management',
          'Online bill payment',
          'Mobile check deposit',
          'Automated transfers & payments',
          'Mobile wallet services',
          'Financial management tools'
        ]
      },
      {
        title: 'Small Business Banking Services',
        items: [
          'Business checking & savings accounts',
          'Business loans & lines of credit',
          'Merchant services',
          'Payroll services',
          'Cash management services',
          'Business credit cards'
        ]
      }
    ]
  },
  {
    type: 'Evaluation Companies',
    subTypes: [
      {
        title: 'Program Evaluation Services',
        items: [
          'Needs assessment & analysis',
          'Program design & development',
          'Program monitoring & evaluation',
          'Outcome & impact evaluation',
          'Cost-benefit analysis',
          'Logic model development'
        ]
      },
      {
        title: 'Policy Evaluation Services',
        items: [
          'Policy analysis & assessment',
          'Policy implementation evaluation',
          'Policy impact evaluation',
          'Cost-effectiveness analysis',
          'Policy recommendations'
        ]
      },
      {
        title: 'Organizational Evaluation Services',
        items: [
          'Organizational assessment',
          'Organizational effectiveness evaluation',
          'Organizational performance evaluation',
          'Organizational capacity building',
          'Organizational change management',
          'Organizational strategy development'
        ]
      },
      {
        title: 'Performance Measurement Services',
        items: [
          'Key performance indicator development',
          'Data collection & analysis',
          'Benchmarking',
          'Dashboard development & reporting',
          'Performance improvement planning',
          'Performance evaluation & reporting'
        ]
      },
      {
        title: 'Evaluation Capacity Building Services',
        items: [
          'Evaluation training & coaching',
          'Evaluation standards & frameworks development',
          'Evaluation system development & implementation',
          'Evaluation tool development',
          'Evaluation quality assurance & improvement',
          'Evaluation report writing & dissemination'
        ]
      },
      {
        title: 'Social Impact Measurement & Evaluation Services',
        items: [
          'Social impact assessment & analysis',
          'Social return on investment (SROI) analysis',
          'Impact measurement & evaluation',
          'Social enterprise evaluation',
          'Social impact reporting',
          'Stakeholder engagement & participation'
        ]
      }
    ]
  }
];

export default companyTypes;
