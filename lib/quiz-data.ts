export interface QuizOption {
  text: string
  score: number
}

export interface Question {
  id: number
  dimension: "traction" | "team" | "prep"
  text: string
  options: QuizOption[]
}

export interface Dimension {
  label: string
  color: string
  questions: number[]
  weight: number
}

export interface Stage {
  min: number
  max: number
  key: string
  label: string
  sub: string
  diagnosisClass: "red" | "amber" | "green"
  scoreColor: string
  badgeBg: string
  badgeColor: string
  diagnosisTitle: string
  diagnosisBody: string
  ctaEyebrow: string
  ctaEyebrowBg: string
  ctaEyebrowColor: string
  ctaHeadline: string
  ctaNote: string
  features: string[]
  ctaButton: string
  ctaButtonClass: "rose" | "teal"
  plan: "grow" | "raise"
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    dimension: "traction",
    text: "What stage is your product at today?",
    options: [
      { text: "Just an idea or sketch on paper.", score: 0 },
      { text: "Building the MVP or prototype.", score: 3 },
      { text: "MVP launched with beta users or early tests.", score: 6 },
      { text: "Final product launched and operating in the market.", score: 10 },
    ],
  },
  {
    id: 2,
    dimension: "traction",
    text: "What is your current revenue or monetization status?",
    options: [
      { text: "No revenue and no monetization model defined yet.", score: 0 },
      { text: "Model defined, but no recurring revenue yet.", score: 3 },
      { text: "First paying customers — validating willingness to pay.", score: 7 },
      { text: "Consistent recurring revenue growing month over month (validated MRR).", score: 10 },
    ],
  },
  {
    id: 3,
    dimension: "traction",
    text: "How do you prove customer retention or engagement?",
    options: [
      { text: "No retention or engagement data yet.", score: 0 },
      { text: "Positive qualitative feedback, but few structured metrics.", score: 4 },
      { text: "We track CAC, LTV, churn — but numbers still fluctuate.", score: 7 },
      { text: "Solid retention (low churn) and highly engaged returning users.", score: 10 },
    ],
  },
  {
    id: 4,
    dimension: "traction",
    text: "How well do you know your Total Addressable Market (TAM)?",
    options: [
      { text: "I haven't formally calculated the TAM yet.", score: 0 },
      { text: 'Estimated broadly (e.g., "The global beauty market").', score: 3 },
      { text: "Structured calculation (TAM, SAM, SOM) focused on my niche.", score: 7 },
      { text: "Proven billion-dollar market with clear annual growth data.", score: 10 },
    ],
  },
  {
    id: 5,
    dimension: "team",
    text: "How is your founding team structured?",
    options: [
      { text: "Solo founder — no technical or business team.", score: 0 },
      { text: "Solo founder working with freelancers or agencies.", score: 4 },
      { text: "Co-founders but with overlapping skill sets.", score: 7 },
      { text: "Complementary co-founders (e.g., CEO + CTO), both full-time.", score: 10 },
    ],
  },
  {
    id: 6,
    dimension: "team",
    text: "What is your team's prior experience in this sector? (Founder-Market Fit)",
    options: [
      { text: "No prior experience in this sector.", score: 0 },
      { text: "Some indirect or academic experience.", score: 4 },
      { text: "Worked in this sector for years — know the problem deeply.", score: 7 },
      { text: "Sector experts with proven track record or deep technical knowledge.", score: 10 },
    ],
  },
  {
    id: 7,
    dimension: "team",
    text: "What is the state of your advisory board and governance?",
    options: [
      { text: "No formal mentors or advisory board.", score: 0 },
      { text: "Informal conversations with a few mentors.", score: 3 },
      { text: "1–2 formal advisors actively involved in strategy.", score: 7 },
      { text: "Strong advisory board with recognized names in the sector.", score: 10 },
    ],
  },
  {
    id: 8,
    dimension: "team",
    text: "Is your company formally incorporated with a clean Cap Table?",
    options: [
      { text: "No — operating informally for now.", score: 0 },
      { text: "Yes, but the Cap Table is messy or has many small shareholders.", score: 4 },
      { text: "Yes — incorporated, clean Cap Table, founders hold the vast majority.", score: 10 },
    ],
  },
  {
    id: 9,
    dimension: "traction",
    text: "Who is your primary customer and what's your typical deal size?",
    options: [
      { text: "B2C or very small transactions (MRR below €1k).", score: 0 },
      { text: "B2B SMB — contracts €1k–€5k MRR.", score: 5 },
      { text: "B2B Mid-Market — contracts €5k–€20k MRR.", score: 8 },
      { text: "B2B Enterprise — contracts above €20k MRR.", score: 10 },
    ],
  },
  {
    id: 10,
    dimension: "prep",
    text: "What is the current state of your Pitch Deck?",
    options: [
      { text: "I don't have a Pitch Deck.", score: 0 },
      { text: "I have a draft or a client-focused presentation.", score: 3 },
      { text: "Investor-focused deck, but not yet tested or reviewed.", score: 6 },
      { text: "Professional deck, reviewed by experts, tailored to the current round.", score: 10 },
    ],
  },
  {
    id: 11,
    dimension: "prep",
    text: "Do you have a Financial Model with clear 3–5 year projections?",
    options: [
      { text: "No financial projections at all.", score: 0 },
      { text: "Basic costs and revenue spreadsheet.", score: 3 },
      { text: "Complete financial model, but struggle to defend all assumptions.", score: 7 },
      { text: "Robust model, stress-tested, with clear unit economics.", score: 10 },
    ],
  },
  {
    id: 12,
    dimension: "prep",
    text: "How clear is your \"Ask\" — how much to raise and for what exactly?",
    options: [
      { text: "I don't know exactly how much I need.", score: 0 },
      { text: "I know the amount but use of funds is vague.", score: 4 },
      { text: "Amount defined with clear allocation tied to specific milestones.", score: 10 },
    ],
  },
  {
    id: 13,
    dimension: "prep",
    text: "Do you have a Data Room ready for investor Due Diligence?",
    options: [
      { text: "I don't know what a Data Room is.", score: 0 },
      { text: "Documents scattered across Google Drive folders.", score: 4 },
      { text: "Structured Data Room, updated and ready to share immediately.", score: 10 },
    ],
  },
]

export const DIMENSIONS: Record<string, Dimension> = {
  traction: {
    label: "Traction",
    color: "#5b75fe",
    questions: [1, 2, 3, 4, 9],
    weight: 0.4,
  },
  team: {
    label: "Team",
    color: "#7c3aed",
    questions: [5, 6, 7, 8],
    weight: 0.3,
  },
  prep: {
    label: "Readiness",
    color: "#059669",
    questions: [10, 11, 12, 13],
    weight: 0.3,
  },
}

export const STAGES: Stage[] = [
  {
    min: 0,
    max: 35,
    key: "not-ready",
    label: "Not Investment-Ready",
    sub: "Foundation phase — focus on traction first",
    diagnosisClass: "red",
    scoreColor: "#dc2626",
    badgeBg: "#fef2f2",
    badgeColor: "#991b1b",
    diagnosisTitle: "Your startup is still in its foundation phase.",
    diagnosisBody:
      "Investors fund execution, not ideas. You have critical gaps in traction, team, or preparation. Reaching out to VCs now risks burning bridges before you're ready. The right move is closing these gaps first with a structured plan.",
    ctaEyebrow: "Plan Grow",
    ctaEyebrowBg: "#eef0ff",
    ctaEyebrowColor: "#3730a3",
    ctaHeadline: "Build your foundation with Plan Grow",
    ctaNote:
      "Get the Validation Roadmap, Cap Table Template, and no-code MVP workshops — designed to take you from idea to traction.",
    features: ["Validation Roadmap", "Cap Table Template", "No-Code MVP Workshop", "Founder Coaching"],
    ctaButton: "Get Plan Grow — €35/month →",
    ctaButtonClass: "rose",
    plan: "grow",
  },
  {
    min: 36,
    max: 55,
    key: "pre-seed",
    label: "Pre-Seed Ready",
    sub: "Early signals — gaps to close before Seed",
    diagnosisClass: "amber",
    scoreColor: "#d97706",
    badgeBg: "#fffbeb",
    badgeColor: "#92400e",
    diagnosisTitle: "You're positioned for Pre-Seed — not Seed yet.",
    diagnosisBody:
      "You have early validation, but your team structure, financials, or pitch materials need strengthening before institutional Seed investors take notice. This is the moment to build with intention.",
    ctaEyebrow: "Plan Grow",
    ctaEyebrowBg: "#eef0ff",
    ctaEyebrowColor: "#3730a3",
    ctaHeadline: "Get Seed-ready with Plan Grow",
    ctaNote:
      "SheBlooms AI identifies the exact gaps in your business model. Join monthly Pitch Practices and access our curated database of 1,436 investors actively seeking your stage.",
    features: ["AI Gap Analysis", "Monthly Pitch Practice", "1,436-Investor Database", "Pitch Deck Review"],
    ctaButton: "Get Plan Grow — €35/month →",
    ctaButtonClass: "rose",
    plan: "grow",
  },
  {
    min: 56,
    max: 75,
    key: "seed",
    label: "Seed-Stage Ready",
    sub: "Ready to run a Seed round",
    diagnosisClass: "green",
    scoreColor: "#16a34a",
    badgeBg: "#f0fdf4",
    badgeColor: "#14532d",
    diagnosisTitle: "Your fundamentals are solid enough for a Seed round.",
    diagnosisBody:
      "You have validated traction, a capable team, and credible materials. The next step is getting in front of the right Seed investors. Cold outreach to VCs converts below 2% — warm introductions are the only playbook that works.",
    ctaEyebrow: "Program Raise",
    ctaEyebrowBg: "#f0fdf4",
    ctaEyebrowColor: "#14532d",
    ctaHeadline: "Close your Seed round with Program Raise",
    ctaNote:
      "We make warm introductions directly to fund partners, review your Data Room end-to-end, and co-negotiate the Term Sheet alongside you. We only win when you close.",
    features: ["Warm VC Introductions", "Full Data Room Review", "Term Sheet Co-Negotiation", "Partner Access"],
    ctaButton: "Book your Raise call →",
    ctaButtonClass: "teal",
    plan: "raise",
  },
  {
    min: 76,
    max: 100,
    key: "series-a",
    label: "Series A Ready",
    sub: "Ready for institutional investment",
    diagnosisClass: "green",
    scoreColor: "#16a34a",
    badgeBg: "#f0fdf4",
    badgeColor: "#14532d",
    diagnosisTitle: "You are ready for institutional investment.",
    diagnosisBody:
      "Your metrics, team, and materials signal full fundraising maturity. The risk is not your business — it's your outreach strategy. Cold emails to Series A VCs convert below 2%. Warm introductions to the right partners are the only playbook at this stage.",
    ctaEyebrow: "Program Raise",
    ctaEyebrowBg: "#f0fdf4",
    ctaEyebrowColor: "#14532d",
    ctaHeadline: "Close your Series A with Program Raise",
    ctaNote:
      "We make warm introductions directly to fund partners, review your Data Room end-to-end, and co-negotiate the Term Sheet alongside you. We only win when you close.",
    features: ["Warm VC Introductions", "Full Data Room Review", "Term Sheet Co-Negotiation", "Partner Access"],
    ctaButton: "Book your Raise call →",
    ctaButtonClass: "teal",
    plan: "raise",
  },
]

export const CTA_URLS = {
  grow: "https://buy.stripe.com/eVqeVd87y9ST3XFaiQ1kA01",
  raise: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0ahOOMJy2vYURbWfVkZ50FQEZVTWj5mjELf8UZR2d09-6tETZjcbZkh1qq-KtAQpY6aUojMXIt",
}

export function getStage(score: number): Stage {
  return STAGES.find((s) => score >= s.min && score <= s.max) || STAGES[0]
}

export interface ScoreBreakdown {
  traction: number
  team: number
  prep: number
}

export interface ScoreResult {
  total: number
  breakdown: ScoreBreakdown
}

export function calculateScore(answers: Record<number, number>): ScoreResult {
  let total = 0
  const breakdown: ScoreBreakdown = { traction: 0, team: 0, prep: 0 }

  for (const [dim, { questions, weight }] of Object.entries(DIMENSIONS)) {
    const scores = questions.map((id) => answers[id] ?? 0)
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length
    breakdown[dim as keyof ScoreBreakdown] = Math.round(avg * 10)
    total += avg * weight * 10
  }

  return { total: Math.round(total), breakdown }
}
