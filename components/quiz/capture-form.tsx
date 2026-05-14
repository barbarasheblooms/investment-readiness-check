"use client"

import { useState } from "react"
import { CheckCircle } from "lucide-react"

interface CaptureFormProps {
  onSubmit: (name: string, email: string) => void
}

export function CaptureForm({ onSubmit }: CaptureFormProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [touched, setTouched] = useState(false)
  const [emailError, setEmailError] = useState("")

  const validateEmail = (value: string): boolean => {
    // Regex para validação de email mais robusta
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(value)
  }

  const isValidEmail = validateEmail(email)

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
    
    if (touched) {
      if (!value) {
        setEmailError("Por favor, insira seu email")
      } else if (!validateEmail(value)) {
        setEmailError("Por favor, insira um email válido")
      } else {
        setEmailError("")
      }
    }
  }

  const handleEmailBlur = () => {
    setTouched(true)
    if (!email) {
      setEmailError("Por favor, insira seu email")
    } else if (!validateEmail(email)) {
      setEmailError("Por favor, insira um email válido")
    } else {
      setEmailError("")
    }
  }

  const handleSubmit = () => {
    setTouched(true)
    
    if (!email) {
      setEmailError("Por favor, insira seu email")
      return
    }
    
    if (!isValidEmail) {
      setEmailError("Por favor, insira um email válido")
      return
    }
    
    onSubmit(name, email)
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm max-w-[440px] mx-auto">
      <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center mb-5">
        <CheckCircle className="w-6 h-6 text-brand" />
      </div>

      <h2 className="font-serif text-2xl font-normal tracking-tight mb-2">Your score is ready.</h2>

      <p className="text-[15px] text-gray-500 leading-relaxed mb-7">
        Where should we send your full investment readiness report?
      </p>

      <label className="block text-sm font-medium text-gray-700 mb-1.5">Name</label>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoComplete="name"
        className="w-full p-3 border border-gray-200 rounded-lg text-[15px] text-gray-900 bg-white mb-3.5 outline-none transition-all focus:border-brand focus:ring-3 focus:ring-brand/10 placeholder:text-gray-400"
      />

      <label className="block text-sm font-medium text-gray-700 mb-1.5">Work email</label>
      <input
        type="email"
        placeholder="you@company.com"
        value={email}
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
        autoComplete="email"
        className={`w-full p-3 border rounded-lg text-[15px] text-gray-900 bg-white outline-none transition-all placeholder:text-gray-400 ${
          emailError 
            ? "border-error focus:border-error focus:ring-3 focus:ring-error/10" 
            : "border-gray-200 focus:border-brand focus:ring-3 focus:ring-brand/10"
        } ${emailError ? "mb-1" : "mb-3.5"}`}
      />
      {emailError && (
        <p className="text-error text-xs mb-2.5">{emailError}</p>
      )}

      <button
        onClick={handleSubmit}
        disabled={!isValidEmail}
        className="w-full bg-brand text-white border-none rounded-lg py-3.5 text-[15px] font-medium cursor-pointer transition-all hover:bg-brand-hover disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-default mt-1"
      >
        Reveal my Readiness Score →
      </button>

      <p className="text-xs text-gray-400 text-center mt-2.5">
        By continuing you create a free SheBlooms account. No spam, ever.
      </p>
    </div>
  )
}
