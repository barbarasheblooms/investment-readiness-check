"use client"

import { RadarChart } from "./radar-chart"
import { DIMENSIONS, getStage, getJourneyStage, type ScoreResult } from "@/lib/quiz-data"

interface ResultsScreenProps {
  result: ScoreResult
  onRetake: () => void
}

export function ResultsScreen({ result, onRetake }: ResultsScreenProps) {
  const { total, breakdown } = result
  const stage = getStage(total)
  const journeyStage = getJourneyStage(total)

  const handleCTA = () => {
    const urls: Record<string, string> = {
      grow: "https://buy.stripe.com/eVqeVd87y9ST3XFaiQ1kA01",
      raise: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0ahOOMJy2vYURbWfVkZ50FQEZVTWj5mjELf8UZR2d09-6tETZjcbZkh1qq-KtAQpY6aUojMXIt",
    }
    window.open(urls[stage.plan], "_blank")
  }

  const diagnosisStyles = {
    red: "bg-[#fef2f2] border-[#fecaca]",
    amber: "bg-[#fffbeb] border-[#fde68a]",
    green: "bg-[#f0fdf4] border-[#bbf7d0]",
  }

  const diagnosisTitleStyles = {
    red: "text-[#991b1b]",
    amber: "text-[#92400e]",
    green: "text-[#14532d]",
  }

  const diagnosisTextStyles = {
    red: "text-[#b91c1c]",
    amber: "text-[#b45309]",
    green: "text-[#15803d]",
  }

  return (
    <div>
      {/* Hero Card */}
      <div className="bg-white border border-gray-200 rounded-xl p-8 pt-10 shadow-sm text-center mb-4">
        <div className="text-[11px] font-medium tracking-widest uppercase text-gray-400 mb-2">Your Readiness Score</div>

        <div
          className="font-serif text-[clamp(96px,20vw,128px)] font-normal leading-none tracking-tighter mb-1"
          style={{ color: stage.scoreColor }}
        >
          {total}
        </div>

        <div className="text-sm text-gray-400 mb-5">out of 100</div>

        <span
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[15px] font-medium mb-1"
          style={{ backgroundColor: stage.badgeBg, color: stage.badgeColor }}
        >
          {stage.label}
        </span>

        <div className="text-sm text-gray-400 mb-6">{stage.sub}</div>

        {/* Radar Chart */}
        <div className="flex justify-center mb-2">
          <RadarChart breakdown={breakdown} color={stage.scoreColor} />
        </div>

        {/* Dimension Cards */}
        <div className="grid grid-cols-3 gap-2 mt-5">
          {Object.entries(DIMENSIONS).map(([dim, { label, color }]) => (
            <div key={dim} className="bg-gray-50 border border-gray-200 rounded-lg p-3">
              <div className="text-[10px] font-medium tracking-wider uppercase text-gray-400 mb-1">{label}</div>
              <div className="text-xl font-medium mb-1.5" style={{ color }}>
                {breakdown[dim as keyof typeof breakdown]}
              </div>
              <div className="h-0.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${breakdown[dim as keyof typeof breakdown]}%`,
                    backgroundColor: color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Diagnosis Box */}
      <div className={`rounded-xl border p-5 mb-4 ${diagnosisStyles[stage.diagnosisClass]}`}>
        <div className={`font-medium text-[15px] mb-1.5 ${diagnosisTitleStyles[stage.diagnosisClass]}`}>
          {stage.diagnosisTitle}
        </div>
        <div className={`text-sm leading-relaxed ${diagnosisTextStyles[stage.diagnosisClass]}`}>
          {stage.diagnosisBody}
        </div>
      </div>

      {/* Journey Stage Block */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 mb-4 shadow-sm">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-full bg-[#eef0ff] flex items-center justify-center flex-shrink-0">
            <span className="text-[13px] font-medium text-[#3730a3]">{journeyStage.number}</span>
          </div>
          <div>
            <div className="text-[11px] font-medium tracking-widest uppercase text-gray-400">Sua posição na Jornada SheBlooms</div>
            <div className="text-[15px] font-medium text-gray-900">Stage {journeyStage.number} — {journeyStage.title}</div>
          </div>
        </div>

        <p className="text-sm text-gray-500 leading-relaxed mb-4">{journeyStage.description}</p>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-[11px] font-medium tracking-wider uppercase text-gray-400 mb-2.5">
            Gates que você precisa fechar para avançar
          </div>
          <div className="flex flex-col gap-2">
            {journeyStage.gates.map((gate, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0 mt-1.5" />
                <span className="text-sm text-gray-600 leading-snug">{gate}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-gray-100 text-sm text-gray-500 leading-relaxed">
          <span className="font-medium text-gray-700">Próximo passo: </span>
          {journeyStage.nextStep}
        </div>
      </div>

      {/* CTA Box */}
      <div className="bg-white border border-gray-200 rounded-xl p-7 text-center shadow-sm">
        <span
          className="inline-block text-[11px] font-medium tracking-wider uppercase px-3 py-1 rounded-full mb-3"
          style={{ backgroundColor: stage.ctaEyebrowBg, color: stage.ctaEyebrowColor }}
        >
          {stage.ctaEyebrow}
        </span>

        <h3 className="font-serif text-xl font-normal tracking-tight mb-2">{stage.ctaHeadline}</h3>

        <p className="text-sm text-gray-500 leading-relaxed mb-5">{stage.ctaNote}</p>

        <div className="flex flex-wrap gap-1.5 justify-center mb-5">
          {stage.features.map((feat) => (
            <span
              key={feat}
              className="text-xs px-3 py-1 rounded-full border border-gray-200 text-gray-500 bg-gray-50"
            >
              {feat}
            </span>
          ))}
        </div>

        <button
          onClick={handleCTA}
          className={`block w-full py-3.5 border-none rounded-lg text-[15px] font-medium cursor-pointer transition-all hover:opacity-90 hover:-translate-y-0.5 ${
            stage.ctaButtonClass === "rose" ? "bg-brand text-white" : "bg-[#15803d] text-white"
          }`}
        >
          {stage.ctaButton}
        </button>
      </div>

      {/* Retake Button */}
      <button
        onClick={onRetake}
        className="block mx-auto mt-4 bg-none border-none text-sm text-gray-400 cursor-pointer underline underline-offset-3 hover:text-gray-600"
      >
        Retake the quiz
      </button>
    </div>
  )
}