import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

interface CopyableTextProps {
  value: string
  label?: string
  className?: string
  iconClassName?: string
}

export default function CopyableText({ value, label, className, iconClassName }: CopyableTextProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent triggering parent click handlers (like opening details modal)
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      toast.success(label ? `${label} copiado!` : "Copiado para a área de transferência!")
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      toast.error("Erro ao copiar!")
    }
  }

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "group inline-flex items-center space-x-2 hover:text-primary transition-colors cursor-pointer text-left",
        className
      )}
      title="Clique para copiar"
    >
      <span className="truncate">{value}</span>
      <div className={cn(
        "p-1 rounded-md bg-muted/50 group-hover:bg-primary/10 transition-colors flex-shrink-0",
        iconClassName
      )}>
        {copied ? (
          <Check className="w-3 h-3 text-green-500" />
        ) : (
          <Copy className="w-3 h-3 text-muted-foreground group-hover:text-primary" />
        )}
      </div>
    </button>
  )
}
