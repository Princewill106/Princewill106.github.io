/* =====================================================================
   SITE CONTENT: edit this file to update your website.
   Everything visitors read lives here; you never need to touch the code.
   ===================================================================== */
window.SITE = {
  name: "Ogbu Princewill",
  role: "AI Automation Consultant & Robotics Engineer",
  location: "Lagos, Nigeria",

  // Photos live in /assets. Swap in any picture from your "My Pictures" Drive folder.
  photo: "assets/princewill-hero.jpg",     // About section (large portrait)
  photo2: "assets/princewill-suit.jpg",    // Contact section

  contact: {
    email: "ogbu106@gmail.com",
    whatsapp: "2349039404716",           // international format, digits only
    booking: "",                          // e.g. "https://cal.com/princewill/30min" (leave "" to use WhatsApp)
    linkedin: "https://www.linkedin.com/in/ugochukwu-ogbu-653a0816a",
    github: "https://github.com/Princewill106",
    tiktok: "https://www.tiktok.com/@ogbu.princewill",
    instagram: "https://www.instagram.com/ogbu.princewill",
    cv: "assets/Princewill-Ogbu-CV.pdf"   // your CV (PDF) in /assets
  },

  facts: [
    { value: "500+", label: "people trained across Africa" },
    { value: "50", label: "open-source AI automation builds" },
    { value: "Since 2022", label: "teaching robotics and coding in Lagos schools" },
    { value: "Codeavour 6.0", label: "represented Nigeria in Qatar" }
  ],

  services: [
    {
      id: "automation",
      name: "Business automation setup",
      lede: "I find where your team loses hours, build the automation, and train your people to run it.",
      includes: ["Process audit and a ranked list of what to automate first",
                 "Workflows in n8n, Make, Zapier or Python",
                 "WhatsApp, email, Google Sheets, CRM and payment integrations",
                 "Handover session and written runbook for your team"],
      ask: "Hi Princewill, I'd like to automate part of my business.",
      cta: "Plan my automation"
    },
    {
      id: "tools",
      name: "AI tool setup",
      lede: "Tools adapted from my open-source build library, set up on your accounts and adjusted to how your business works.",
      includes: ["WhatsApp support and order-status agent",
                 "Invoice and receipt processing",
                 "Lead scoring and follow-up",
                 "School admissions and result sheets"],
      ask: "Hi Princewill, I'm interested in one of your AI tools.",
      cta: "Ask about AI tools"
    },
    {
      id: "video",
      name: "AI video creation",
      lede: "Short-form videos, explainers and adverts made with AI: script, voice, visuals and edit.",
      includes: ["Product and brand videos for Instagram, TikTok and WhatsApp",
                 "Course and explainer videos for schools and trainers",
                 "AI avatars and voiceovers",
                 "One-day training so your team can make its own"],
      ask: "Hi Princewill, I'd like an AI video made.",
      cta: "Order an AI video"
    },
    {
      id: "robotics",
      name: "Robotics & IoT solutions",
      lede: "Sensors, controllers and robots that work in real conditions, from farms to pharmacies to classrooms.",
      includes: ["Monitoring systems: cold chain, soil, energy, security",
                 "Arduino, ESP32, Raspberry Pi, Jetson Nano and ROS builds",
                 "Robotics and coding programmes for schools",
                 "Prototypes for competitions and product ideas"],
      ask: "Hi Princewill, I need a robotics / IoT solution.",
      cta: "Discuss a robotics project"
    }
  ],

  /* SELECTED PROJECTS: shown as short case studies near the top.
     type: be precise. Use one of "Client deployment", "Working prototype", "Open-source template", "Teaching project".
     These four are open-source templates: they run end to end on sample data, but have not yet been
     measured with a client. When one goes live with a client, change the type and add a real outcome. */
  caseStudies: [
    { slug: "whatsapp-support-agent", type: "Open-source template", area: "Customer support",
      problem: "Small businesses answer WhatsApp by hand and reply hours late, but a bot that invents a delivery date is worse than a slow human.",
      built: "Designed and coded the full flow: intent classification, answers taken only from the business's own FAQ, real order lookup by order number, and a human handover queue with every message logged. Includes a webhook server for the WhatsApp Cloud API and an importable n8n workflow.",
      evidence: ["[order_status|AUTO    ] Where is my order 10234?", "   -> Order 10234 is out for delivery, expected today before 6pm.", "[complaint   |HANDOVER] I received the wrong item and I'm not happy", "   -> Passed to a member of our team, who will reply shortly."],
      proves: "The demo runs offline on sample messages and shows each type of question routed correctly: answered from the FAQ, answered from order data, or handed to a person." },
    { slug: "invoice-processing-automation", type: "Open-source template", area: "Finance",
      problem: "Retyping supplier invoices is slow, and the errors that slip through (a misread total, the same invoice paid twice) cost real money.",
      built: "Built extraction plus the checks that make it safe: arithmetic and VAT validation, duplicate detection, unknown-supplier flags, and a review queue so only clean invoices are posted.",
      evidence: ["Processed 6 invoices: 3 ready to post, 3 need review", "  REVIEW  INV-1042   duplicate of invoice INV-1042", "  REVIEW  QF-9       unknown supplier 'QuickFix Generators'", "  REVIEW  APL-556    subtotal + VAT ≠ stated total"],
      proves: "On the sample batch it posts the three clean invoices and stops all three planted problems (a duplicate, an unknown supplier and a wrong total) before they reach the accounts." },
    { slug: "school-admissions-automation", type: "Open-source template", area: "Education",
      problem: "Schools lose weeks to admissions admin: missing documents found late, and parents calling because nobody told them anything.",
      built: "Built completeness checks, weighted scoring against each class's seat limit, offers and waiting lists, and a personalised parent message at every stage, plus an officer queue for decisions.",
      evidence: ["== JSS1 (seats: 2) ==", "  A004 David Okon                 INCOMPLETE  (asks for the 2 missing documents)", "  A002 Ebuka Nnadi     score 81.0  OFFERED", "  A003 Zara Musa       score 57.5  WAITLISTED (position 1)"],
      proves: "Every applicant in the sample gets the right status and a clear message, and offers never exceed the seats available." },
    { slug: "delivery-route-optimizer", type: "Open-source template", area: "Logistics",
      problem: "Dispatchers often send riders out in the order orders arrived, zig-zagging across Lagos and missing delivery windows.",
      built: "Built a capacity-aware planner that splits parcels across vehicles, orders each route with nearest-neighbour then improves it with 2-opt, and outputs a Google Maps link per rider.",
      evidence: ["Vehicle 1: 14 parcels, 91.8 km", "Vehicle 2: 10 parcels, 42.0 km", "One vehicle in order received: 315.9 km", "Optimised plan total:          133.9 km"],
      proves: "On a 12-stop Lagos sample, the planned routes total 133.9 km against 315.9 km for one vehicle driving in arrival order. This is a simulation using straight-line distances with a road-allowance factor, not a measured client result." }
  ],

  /* VIDEOS from Google Drive.
     1. In Drive set sharing to "Anyone with the link: Viewer".
     2. Copy each video's link: https://drive.google.com/file/d/THIS_PART_IS_THE_ID/view
     3. Add an entry: { id: "THE_ID", title: "…", kind: "AI video" }
        (thumb is optional: without it the site uses Drive's own thumbnail)
     Or set driveFolder to the folder link to show the whole folder. */
  driveFolder: "https://drive.google.com/drive/folders/1jiOwE8-WoNM-DDkb4nwVYb6HH5aTkkBA",
  /* Fill these in for each video when you can (they show under the player):
       work:  "Client work" or "Personal sample"
       brief: one line on the audience and purpose, e.g. "30-second Instagram ad for a Lagos restaurant launch"
       made:  what you did, e.g. "Script, AI visuals, voiceover and edit" */
  videos: [
    { id: "1DVwt8CCUI9985nw2FSUP5LaA4Qamasoj", title: "Air Wine Opener", kind: "Product ad", duration: "0:39", poster: "assets/poster/air-wine-opener.jpg", thumb: "assets/reel/air-wine-opener.jpg",
      work: "", brief: "", made: "" },
    { id: "1GHQZ8gaZFGLH38B4Ze1Vm-narZV1Uefx", title: "Ajebi Herbal Center", kind: "Product ad", duration: "0:34", poster: "assets/poster/ajebi-herbal.jpg", thumb: "assets/reel/ajebi-herbal.jpg",
      work: "", brief: "", made: "" },
    { id: "1P2sugMboCYFrIlLUiwW-6Ewt9EKyFkxL", title: "Smartrob Technologies", kind: "Brand film", duration: "0:57", poster: "assets/poster/smartrob-tech-2.jpg", thumb: "assets/reel/smartrob-tech-2.jpg",
      work: "", brief: "", made: "" },
    { id: "1HfzbcWH0rjTwh7JJD7JpOIlJry0LGnYX", title: "4Tree Farm", kind: "Promo", duration: "0:51", poster: "assets/poster/4tree-farm.jpg", thumb: "assets/reel/4tree-farm.jpg",
      work: "", brief: "", made: "" },
    { id: "1sZioAO9oXw2qu3oKgWu6hf1tnGx-dSgr", title: "AI presenter", kind: "AI avatar", duration: "0:33", poster: "assets/poster/ai-presenter.jpg", thumb: "assets/reel/ai-presenter.jpg",
      work: "", brief: "", made: "" },
    { id: "1HDnn0SDXaAL9c9RiQUKGt2L_1l8ruN3Y", title: "De-Daveman inverter", kind: "Product ad", duration: "0:45", poster: "assets/poster/daveman-tech.jpg", thumb: "assets/reel/daveman-tech.jpg",
      work: "", brief: "", made: "" },
    { id: "1SCgSlCkR1DFNS_JqiRztkCaUaB4wfDpb", title: "From blueprint to home", kind: "Explainer", duration: "1:01", poster: "assets/poster/pivot.jpg", thumb: "assets/reel/pivot.jpg",
      work: "", brief: "", made: "" },
    { id: "1_2Oy9tO0l3IPxFd1vbDKXBHvZ1Gu7gYe", title: "Still wishing?", kind: "Ad hook", duration: "1:15", poster: "assets/poster/smartrob-tech.jpg", thumb: "assets/reel/smartrob-tech.jpg",
      work: "", brief: "", made: "" },
    { id: "1ITOhV9X4r5tT1_sv-vOkR660zOotaLqn", title: "Luvifly", kind: "UGC-style ad", duration: "0:38", poster: "assets/poster/luvifly.jpg", thumb: "assets/reel/luvifly.jpg",
      work: "", brief: "", made: "" },
    { id: "1G6Z77gRNReR8VWMEocVALxpY7tGxItlT", title: "The Great Swap", kind: "Promo", duration: "0:43", poster: "assets/poster/great-swap.jpg", thumb: "assets/reel/great-swap.jpg",
      work: "", brief: "", made: "" },
    { id: "1zSmVIyIJmhu3fFmVIbWAQ6jVVZzptRu1", title: "Lekki Bistro", kind: "Food advert", duration: "0:21", poster: "assets/poster/lekki-bistro.jpg", thumb: "assets/reel/lekki-bistro.jpg",
      work: "", brief: "", made: "" },
    { id: "1SVyY9eg2XhYaH9aa7uRpnfYX4QyEhdZ3", title: "The reveal", kind: "Teaser", duration: "0:28", poster: "assets/poster/reveal-teaser.jpg", thumb: "assets/reel/reveal-teaser.jpg",
      work: "", brief: "", made: "" }
  ],


  // Shown in the video reel until you add Drive videos above (titles from your TikTok posts).
  robotics: [
    { kind: "Open-source build", title: "Smart irrigation controller", link: "https://github.com/Princewill106/smart-irrigation-controller",
      detail: "ESP32 firmware that takes the median of three soil sensors, uses crop-stage thresholds, skips watering when rain is forecast, and keeps a manual override for the farmer." },
    { kind: "Open-source build", title: "Cold chain monitor", link: "https://github.com/Princewill106/cold-chain-monitor",
      detail: "Writes every temperature reading to the ESP32's flash before syncing, so Wi-Fi outages don't lose data (with a battery backup it keeps logging through power cuts). Alarms go to a supervisor if nobody acknowledges within 10 minutes." },
    { kind: "Open-source build", title: "Vision pick-and-place", link: "https://github.com/Princewill106/vision-pick-and-place",
      detail: "Part detection, camera-to-arm calibration by least squares, and a check that each part landed where it should." },
    { kind: "Class project", title: "Face detection with ROS", link: "https://github.com/Princewill106/Robotics-Class",
      detail: "Face detection running on ROS, built for a robotics class." }
  ],

  // Awards and competitions. Add the year, your role and a photo or link when you have them.
  awards: [
    { title: "Best AI Project", event: "Battle of the Bots", year: "2024", detail: "Award for an AI-driven robotic system." },
    { title: "Represented Nigeria", event: "Codeavour 6.0, Qatar", year: "", detail: "Showcased AI and data-driven robotic systems." },
    { title: "1st Place", event: "STEMite Zone Competition", year: "", detail: "" },
    { title: "Entrepreneur of the Year", event: "Student Union Government, FUTO", year: "2019", detail: "" }
  ],

  /* EXPERIENCE. Keep titles and dates the same as your CV and LinkedIn.
     type: "Full-time", "Part-time", "Contract", "Consulting" or "Freelance" (leave "" if you'd rather not say). */
  timeline: [
    { when: "Current", what: "AI Automation Consultant", where: "Bitmine Robotics & Codeworld Concepts", type: "Consulting",
      did: "Advise both companies on AI automation and set up automated workflows for their teams." },
    { when: "May 2026 – Present", what: "AI Automation Lead", where: "Utiva", type: "", place: "Remote",
      did: "Lead 12-week AI automation cohorts; learners ship working systems such as a Resume Analysis Agent and an HMO Performance System." },
    { when: "Aug 2025 – Present", what: "Head Curriculum Developer", where: "Nigenius, Lagos", type: "",
      did: "Lead curriculum design across robotics, AI, coding and STEM, and coordinate instructors and content teams." },
    { when: "Mar 2025 – Present", what: "STEM Program Manager", where: "Tech Talent Academy", type: "",
      did: "Design and evaluate robotics, coding, AI and data science programmes reaching 500+ students a year; run Battle of the Bots." },
    { when: "Jan 2025 – Present", what: "AI and Machine Learning Tutor", where: "Africa Agility Foundation", type: "",
      did: "Teach ML algorithms, neural networks and data preprocessing through image recognition, chatbot and prediction projects." },
    { when: "Dec 2024 – Present", what: "Robotics Software Engineer", where: "Tingo Media", type: "", place: "Victoria Island, Lagos",
      did: "Program robots on Arduino, ESP32, Raspberry Pi and micro:bit, including smart irrigation and voice-controlled robots, with tuned PID control." },
    { when: "Feb 2022 – Present", what: "Coding and Robotics Engineer", where: "Nigenius, Lagos", type: "",
      did: "Run robotics and coding programmes in Lagos schools and train teachers to bring robotics into STEM lessons." },
    { when: "Jun – Dec 2018", what: "Technology Advisory Intern", where: "KPMG Nigeria, on a First Bank of Nigeria project", type: "Internship",
      did: "CRM and data migration: data cleansing and validation." }
  ],

  education: "Geoscience (Geophysics option), Federal University of Technology Owerri, 2019 · Second Class Upper",
  certifications: ["Python Programming Essentials, Rice University", "Data Representation with Python, Rice University",
                   "Web Development with HTML, CSS and JavaScript Essentials, Coursera, 2023", "African Girls in Tech Cohort 6.0, Africa Agility Foundation, 2023"],

  workshop: {
    title: "AI-Enabled School Workshop",
    detail: "A virtual programme for school leaders and teachers, run over one to three days, from AI foundations to redesigning admin, lessons and assessment."
  },

  testimonials: [],

  projects: [
 {
  "n": 1,
  "slug": "invoice-processing-automation",
  "title": "Invoice Processing Automation",
  "tagline": "Turn invoice text from email, WhatsApp photos or folder drops into checked, ready-to-post accounting entries.",
  "area": "Finance",
  "n8n": true
 },
 {
  "n": 2,
  "slug": "loan-application-triage",
  "title": "Loan Application Triage",
  "tagline": "Hard rules first, affordability scoring second, and a written reason for every decision.",
  "area": "Finance",
  "n8n": true
 },
 {
  "n": 3,
  "slug": "kyc-verification-pipeline",
  "title": "KYC Verification Pipeline",
  "tagline": "Verified, rejected with a fixable reason, or referred to a human: verification in minutes, not days.",
  "area": "Finance",
  "n8n": true
 },
 {
  "n": 4,
  "slug": "expense-receipt-categorizer",
  "title": "Expense Receipt Categorizer",
  "tagline": "Drop in receipts, get categorised expenses, policy flags and a monthly summary.",
  "area": "Finance",
  "n8n": true
 },
 {
  "n": 5,
  "slug": "bank-statement-analyzer",
  "title": "Bank Statement Analyzer",
  "tagline": "Turn a raw statement export into income, spending, recurring obligations and red flags in seconds.",
  "area": "Finance",
  "n8n": true
 },
 {
  "n": 6,
  "slug": "payment-reminder-bot",
  "title": "Payment Reminder Bot",
  "tagline": "Polite on day 1, firm on day 14, escalated on day 30, without anyone remembering to chase.",
  "area": "Finance",
  "n8n": true
 },
 {
  "n": 7,
  "slug": "fraud-transaction-flagger",
  "title": "Fraud Transaction Flagger",
  "tagline": "Rules catch the known patterns; per-customer statistics catch the strange ones.",
  "area": "Finance",
  "n8n": true
 },
 {
  "n": 8,
  "slug": "whatsapp-support-agent",
  "title": "WhatsApp Support Agent",
  "tagline": "Answers routine customer questions in seconds from your own FAQ and order data, and hands complaints to a person with the full context.",
  "area": "Sales & Support",
  "n8n": true
 },
 {
  "n": 9,
  "slug": "lead-qualification-agent",
  "title": "Lead Qualification Agent",
  "tagline": "Score every inbound lead on budget, authority, need and timing, then route it before it goes cold.",
  "area": "Sales & Support",
  "n8n": true
 },
 {
  "n": 10,
  "slug": "crm-followup-automation",
  "title": "CRM Follow-up Automation",
  "tagline": "Finds the deals going quiet and drafts the follow-up before they die.",
  "area": "Sales & Support",
  "n8n": true
 },
 {
  "n": 11,
  "slug": "customer-feedback-analyzer",
  "title": "Customer Feedback Analyzer",
  "tagline": "Hundreds of reviews in, a one-page 'what to fix first' report out.",
  "area": "Sales & Support",
  "n8n": true
 },
 {
  "n": 12,
  "slug": "sales-report-generator",
  "title": "Automated Sales Report Generator",
  "tagline": "Every Monday at 8am: last week's numbers, what changed, and why, written for the MD.",
  "area": "Data & ML",
  "n8n": true
 },
 {
  "n": 13,
  "slug": "email-triage-assistant",
  "title": "Email Triage Assistant",
  "tagline": "Sorts the inbox into act now, reply today, read later and ignore, and drafts the replies.",
  "area": "Operations & HR",
  "n8n": true
 },
 {
  "n": 14,
  "slug": "abandoned-cart-recovery",
  "title": "Abandoned Cart Recovery",
  "tagline": "A three-step recovery sequence that stops the moment the customer buys.",
  "area": "Sales & Support",
  "n8n": true
 },
 {
  "n": 15,
  "slug": "social-comment-moderator",
  "title": "Social Media Comment Moderator",
  "tagline": "Hide the scams, answer the questions, flag the angry customers, before your followers see the mess.",
  "area": "Sales & Support",
  "n8n": true
 },
 {
  "n": 16,
  "slug": "product-description-generator",
  "title": "Product Description Generator",
  "tagline": "Spec sheet in, store-ready title, description, bullets, Instagram caption and SEO tags out.",
  "area": "Sales & Support",
  "n8n": true
 },
 {
  "n": 17,
  "slug": "resume-analysis-agent",
  "title": "Resume Analysis Agent",
  "tagline": "Compares a CV to a job description and returns the gaps, the matches and exactly what to fix.",
  "area": "Operations & HR",
  "n8n": true
 },
 {
  "n": 18,
  "slug": "interview-scheduler",
  "title": "Interview Scheduler",
  "tagline": "Finds a slot that works for the candidate and every panel member, books it, and sends the invites.",
  "area": "Operations & HR",
  "n8n": true
 },
 {
  "n": 19,
  "slug": "employee-onboarding-workflow",
  "title": "Employee Onboarding Workflow",
  "tagline": "One new-hire record creates every onboarding task with an owner and a deadline, and chases the ones running late.",
  "area": "Operations & HR",
  "n8n": true
 },
 {
  "n": 20,
  "slug": "leave-request-approval-bot",
  "title": "Leave Request Approval Bot",
  "tagline": "Checks balance, team coverage and blackout dates, then auto-approves the easy ones and routes the rest.",
  "area": "Operations & HR",
  "n8n": true
 },
 {
  "n": 21,
  "slug": "hr-policy-qa-bot",
  "title": "HR Policy Q&A Bot",
  "tagline": "Staff ask in plain English; the bot answers from the handbook and cites the section, or says it doesn't know.",
  "area": "Operations & HR",
  "n8n": true
 },
 {
  "n": 22,
  "slug": "school-admissions-automation",
  "title": "School Admissions Automation",
  "tagline": "The office stops being a call centre in January, and the school stops losing applicants who gave up waiting.",
  "area": "Education",
  "n8n": true
 },
 {
  "n": 23,
  "slug": "ai-quiz-generator",
  "title": "AI Quiz Generator",
  "tagline": "Paste lesson notes, get a ready-to-use quiz with answers, distractors and a printable answer key.",
  "area": "Education",
  "n8n": true
 },
 {
  "n": 24,
  "slug": "student-performance-predictor",
  "title": "Student Performance Predictor",
  "tagline": "Flags at-risk students by mid-term, while there's still time to help, with the reasons a teacher can act on.",
  "area": "Education",
  "n8n": true
 },
 {
  "n": 25,
  "slug": "attendance-alert-system",
  "title": "Attendance Alert System",
  "tagline": "Spots absence patterns early and tells the right parent, teacher or HR person, in that order.",
  "area": "Education",
  "n8n": true
 },
 {
  "n": 26,
  "slug": "assignment-feedback-assistant",
  "title": "Assignment Feedback Assistant",
  "tagline": "Rubric-based first-pass marking with specific, kind feedback, so teachers review instead of starting from zero.",
  "area": "Education",
  "n8n": true
 },
 {
  "n": 27,
  "slug": "lesson-plan-generator",
  "title": "Lesson Plan Generator",
  "tagline": "Topic, class and duration in; a timed, structured lesson plan with objectives, activities and assessment out.",
  "area": "Education",
  "n8n": true
 },
 {
  "n": 28,
  "slug": "result-sheet-automation",
  "title": "Result Sheet Automation",
  "tagline": "Continuous assessment and exam scores in; grades, positions, class statistics and report-card comments out.",
  "area": "Education",
  "n8n": true
 },
 {
  "n": 29,
  "slug": "hmo-performance-system",
  "title": "HMO Performance System",
  "tagline": "Turns raw claims data into the five numbers an HMO manager needs every week, and the providers to look at first.",
  "area": "Healthcare",
  "n8n": true
 },
 {
  "n": 30,
  "slug": "appointment-reminder-system",
  "title": "Appointment Reminder System",
  "tagline": "Reminders at 48 hours and 2 hours, one-tap confirm or reschedule, and freed slots offered to the waitlist.",
  "area": "Healthcare",
  "n8n": true
 },
 {
  "n": 31,
  "slug": "clinic-intake-router",
  "title": "Clinic Intake Router",
  "tagline": "Routes patient messages to the right desk fast, and sends anything that sounds urgent straight to a human.",
  "area": "Healthcare",
  "n8n": true
 },
 {
  "n": 32,
  "slug": "pharmacy-inventory-alerts",
  "title": "Pharmacy Inventory Alerts",
  "tagline": "Know what will run out, what will expire, and what to reorder, before it costs you a sale or a write-off.",
  "area": "Healthcare",
  "n8n": true
 },
 {
  "n": 33,
  "slug": "logistics-exception-alerts",
  "title": "Logistics Exception Alerts",
  "tagline": "Don't watch a dashboard all day. Get told about the delivery that's going wrong, with everything you need to act.",
  "area": "Logistics",
  "n8n": true
 },
 {
  "n": 34,
  "slug": "delivery-route-optimizer",
  "title": "Delivery Route Optimizer",
  "tagline": "Orders the day's stops to cut kilometres, with a nearest-neighbour start and 2-opt improvement.",
  "area": "Logistics",
  "n8n": true
 },
 {
  "n": 35,
  "slug": "inventory-reorder-forecaster",
  "title": "Inventory Reorder Forecaster",
  "tagline": "Forecasts next month's demand per SKU, compares three methods, and tells you exactly when and how much to reorder.",
  "area": "Logistics",
  "n8n": true
 },
 {
  "n": 36,
  "slug": "fleet-maintenance-scheduler",
  "title": "Fleet Maintenance Scheduler",
  "tagline": "Services each vehicle by kilometres or days, whichever comes first, and never takes too many off the road at once.",
  "area": "Logistics",
  "n8n": true
 },
 {
  "n": 37,
  "slug": "loan-default-prediction",
  "title": "Loan Default Prediction",
  "tagline": "Logistic regression from scratch, with the metrics a credit committee actually asks about.",
  "area": "Data & ML",
  "n8n": false
 },
 {
  "n": 38,
  "slug": "energy-use-forecasting",
  "title": "Energy Use Forecasting",
  "tagline": "Forecasts tomorrow's hourly electricity load and sizes the generator and diesel you'll actually need.",
  "area": "Data & ML",
  "n8n": false
 },
 {
  "n": 39,
  "slug": "data-cleaning-pipeline",
  "title": "Data Cleaning Pipeline",
  "tagline": "Messy spreadsheet in; clean, validated data and a report of every change out.",
  "area": "Data & ML",
  "n8n": true
 },
 {
  "n": 40,
  "slug": "automated-kpi-dashboard",
  "title": "Automated KPI Dashboard",
  "tagline": "One command turns a CSV into a self-contained, shareable HTML dashboard with KPIs, trends and charts.",
  "area": "Data & ML",
  "n8n": true
 },
 {
  "n": 41,
  "slug": "meeting-notes-summarizer",
  "title": "Meeting Notes Summarizer",
  "tagline": "Turns a meeting transcript into decisions, action items with owners and due dates, and open questions.",
  "area": "Operations & HR",
  "n8n": true
 },
 {
  "n": 42,
  "slug": "document-qa-rag",
  "title": "Document Q&A (RAG from Scratch)",
  "tagline": "Ask questions across a folder of documents and get answers with the exact source and passage, built without frameworks so you can see every step.",
  "area": "Data & ML",
  "n8n": true
 },
 {
  "n": 43,
  "slug": "content-repurposing-engine",
  "title": "Content Repurposing Engine",
  "tagline": "Write one LinkedIn post; get an X thread, an Instagram carousel, a TikTok script and a WhatsApp status from it.",
  "area": "Sales & Support",
  "n8n": true
 },
 {
  "n": 44,
  "slug": "video-transcript-summarizer",
  "title": "Video Transcript Summarizer",
  "tagline": "Turns a long video or class recording transcript into chapters with timestamps, key points and a study guide.",
  "area": "Education",
  "n8n": true
 },
 {
  "n": 45,
  "slug": "price-monitor-scraper",
  "title": "Competitor Price Monitor",
  "tagline": "Tracks competitor prices across stores, keeps the history, and alerts you when someone undercuts you.",
  "area": "Data & ML",
  "n8n": true
 },
 {
  "n": 46,
  "slug": "news-digest-bot",
  "title": "News Digest Bot",
  "tagline": "Reads your RSS feeds, drops the noise and duplicates, and sends one short morning digest of what matters to you.",
  "area": "Data & ML",
  "n8n": true
 },
 {
  "n": 47,
  "slug": "contract-clause-extractor",
  "title": "Contract Clause Extractor",
  "tagline": "Pulls the parties, dates, money, termination, liability and renewal terms out of a contract and flags the risky ones.",
  "area": "Operations & HR",
  "n8n": true
 },
 {
  "n": 48,
  "slug": "smart-irrigation-controller",
  "title": "Smart Irrigation Controller (ESP32)",
  "tagline": "Waters on soil data and the weather forecast, not on a timer, with a manual override any farmer can use.",
  "area": "Robotics & IoT",
  "n8n": true
 },
 {
  "n": 49,
  "slug": "cold-chain-monitor",
  "title": "Cold Chain Temperature Monitor (ESP32)",
  "tagline": "Logs locally first, syncs when it can, and escalates until a human acknowledges, because failures happen when the network is down.",
  "area": "Robotics & IoT",
  "n8n": true
 },
 {
  "n": 50,
  "slug": "vision-pick-and-place",
  "title": "Vision Pick-and-Place Calibration",
  "tagline": "The AI is the easy part. This is the part that decides whether a pick-and-place arm actually works: detection, camera-to-arm calibration and verification.",
  "area": "Robotics & IoT",
  "n8n": false
 }
]
};
