import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type PrivacyContextType = {
  isPrivate: boolean
  togglePrivacy: () => void
  formatCurrency: (value: number) => string
}

const PrivacyContext = createContext<PrivacyContextType>({
  isPrivate: true,
  togglePrivacy: () => {},
  formatCurrency: () => "",
})

export function PrivacyProvider({ children }: { children: ReactNode }) {
  const [isPrivate, setIsPrivate] = useState(() => {
    const saved = localStorage.getItem("privacy")
    return saved !== null ? saved === "true" : true // Default to true (hidden)
  })

  useEffect(() => {
    localStorage.setItem("privacy", isPrivate.toString())
  }, [isPrivate])

  const togglePrivacy = () => setIsPrivate((prev) => !prev)

  const formatCurrency = (value: number) => {
    if (isPrivate) return "R$ •••••"
    return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value)
  }

  return (
    <PrivacyContext.Provider value={{ isPrivate, togglePrivacy, formatCurrency }}>
      {children}
    </PrivacyContext.Provider>
  )
}

export const usePrivacy = () => useContext(PrivacyContext)
