import { expenses } from "@/data/tripData"
import { CreditCard, DollarSign, PieChart, TrendingUp, CheckCircle2, Search, ArrowUpDown, ChevronUp, ChevronDown, AlertTriangle } from "lucide-react"
import { usePrivacy } from "@/context/PrivacyContext"
import { useState, useMemo } from "react"
import { useTranslation } from "react-i18next"

type SortField = 'name' | 'category' | 'amount'
type SortOrder = 'asc' | 'desc' | null

export default function Expenses() {
  const { t } = useTranslation()
  const { formatCurrency } = usePrivacy()
  const [searchTerm, setSearchTerm] = useState("")
  const [sortField, setSortField] = useState<SortField | null>(null)
  const [sortOrder, setSortOrder] = useState<SortOrder>(null)

  const totalAmount = expenses.reduce((acc, exp) => acc + exp.amount, 0)
  const totalPaidCount = expenses.filter(exp => exp.paid).length

  const categoryTotals = expenses.reduce((acc, exp) => {
    acc[exp.category] = (acc[exp.category] || 0) + exp.amount
    return acc
  }, {} as Record<string, number>)

  const sortedCategories = Object.entries(categoryTotals).sort((a, b) => b[1] - a[1])

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      if (sortOrder === 'asc') setSortOrder('desc')
      else if (sortOrder === 'desc') { setSortField(null); setSortOrder(null) }
    } else {
      setSortField(field)
      setSortOrder('asc')
    }
  }

  const filteredAndSortedExpenses = useMemo(() => {
    let result = expenses.filter(exp =>
      exp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exp.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
    if (sortField && sortOrder) {
      result = [...result].sort((a, b) => {
        let aValue = a[sortField], bValue = b[sortField]
        if (typeof aValue === 'string') { aValue = aValue.toLowerCase(); bValue = (bValue as string).toLowerCase() }
        if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1
        if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1
        return 0
      })
    }
    return result
  }, [searchTerm, sortField, sortOrder])

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return <ArrowUpDown className="w-3 h-3 ml-1 opacity-50" />
    return sortOrder === 'asc' ? <ChevronUp className="w-3 h-3 ml-1" /> : <ChevronDown className="w-3 h-3 ml-1" />
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 page-transition">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-4xl font-black uppercase tracking-tight flex items-center text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/60">
            <DollarSign className="w-10 h-10 mr-4 text-primary" />
            {t("expenses.title")}
          </h1>
          <p className="text-muted-foreground mt-2 text-lg italic">{t("expenses.subtitle")}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass p-8 rounded-3xl border shadow-xl flex flex-col items-center justify-center space-y-4">
          <div className="p-5 rounded-2xl bg-primary/10 text-primary"><TrendingUp className="w-10 h-10" /></div>
          <div className="text-center">
            <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{t("expenses.total_estimated")}</p>
            <h4 className="text-4xl font-black">{formatCurrency(totalAmount)}</h4>
          </div>
        </div>
        <div className="glass p-8 rounded-3xl border shadow-xl flex flex-col items-center justify-center space-y-4">
          <div className="p-5 rounded-2xl bg-green-500/10 text-green-500"><CheckCircle2 className="w-10 h-10" /></div>
          <div className="text-center">
            <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{t("expenses.paid_items")}</p>
            <h4 className="text-4xl font-black text-green-500">{totalPaidCount} / {expenses.length}</h4>
          </div>
        </div>
        <div className="glass p-8 rounded-3xl border shadow-xl flex flex-col items-center justify-center space-y-4">
          <div className="p-5 rounded-2xl bg-purple-500/10 text-purple-500"><PieChart className="w-10 h-10" /></div>
          <div className="text-center">
            <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{t("expenses.by_category")}</p>
            <h4 className="text-4xl font-black">{sortedCategories.length}</h4>
          </div>
        </div>
      </div>

      {/* Simulated Values Warning */}
      <div className="bg-amber-500/10 border-2 border-amber-500/20 rounded-3xl p-6 flex flex-col md:flex-row items-center gap-4 shadow-lg shadow-amber-500/5">
        <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center shrink-0">
          <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400" />
        </div>
        <p className="text-sm font-bold text-amber-800 dark:text-amber-200 text-center md:text-left leading-relaxed">
          {t("expenses.simulated_values_warning")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          <div className="glass p-4 rounded-2xl border shadow-lg flex items-center bg-muted/30">
            <Search className="w-5 h-5 text-muted-foreground mr-3" />
            <input
              type="text"
              placeholder={t("expenses.search_placeholder")}
              className="bg-transparent border-none outline-none w-full text-sm font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="glass rounded-3xl border overflow-hidden shadow-xl">
            <div className="bg-muted/50 px-8 py-6 border-b flex items-center justify-between">
              <h3 className="text-2xl font-black uppercase tracking-tight">{t("expenses.detail")}</h3>
              <CreditCard className="w-6 h-6 text-muted-foreground" />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[600px]">
                <thead>
                  <tr className="bg-muted/30 text-muted-foreground text-xs font-black uppercase tracking-widest">
                    <th className="px-8 py-4 cursor-pointer hover:text-primary transition-colors select-none" onClick={() => handleSort('name')}>
                      <div className="flex items-center">{t("expenses.column_item")} <SortIcon field="name" /></div>
                    </th>
                    <th className="px-6 py-4 cursor-pointer hover:text-primary transition-colors select-none" onClick={() => handleSort('category')}>
                      <div className="flex items-center">{t("expenses.column_category")} <SortIcon field="category" /></div>
                    </th>
                    <th className="px-8 py-4 text-right cursor-pointer hover:text-primary transition-colors select-none" onClick={() => handleSort('amount')}>
                      <div className="flex items-center justify-end">{t("expenses.column_value")} <SortIcon field="amount" /></div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-muted">
                  {filteredAndSortedExpenses.map((exp) => (
                    <tr key={exp.id} className="hover:bg-muted/20 transition-all font-medium">
                      <td className="px-8 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {exp.paid ? <CheckCircle2 className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" /> : <div className="w-4 h-4 mr-3 border rounded-full border-muted-foreground flex-shrink-0" />}
                          <span className="truncate max-w-[250px]">{exp.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-block px-3 py-1 rounded-full bg-muted text-muted-foreground font-semibold text-xs whitespace-nowrap">{exp.category}</span>
                      </td>
                      <td className="px-8 py-4 text-right font-black whitespace-nowrap">{formatCurrency(exp.amount)}</td>
                    </tr>
                  ))}
                  {filteredAndSortedExpenses.length === 0 && (
                    <tr>
                      <td colSpan={3} className="px-8 py-12 text-center text-muted-foreground italic">
                        {t("expenses.no_results")} "{searchTerm}"
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="glass p-8 rounded-3xl border shadow-xl">
            <h3 className="text-2xl font-black uppercase tracking-tight mb-8">{t("expenses.per_category")}</h3>
            <div className="space-y-6">
              {sortedCategories.map(([cat, val], i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between items-end gap-4">
                    <span className="text-sm font-black uppercase tracking-widest text-muted-foreground truncate">{cat}</span>
                    <span className="text-lg font-black whitespace-nowrap">{formatCurrency(val)}</span>
                  </div>
                  <div className="h-4 bg-muted rounded-full overflow-hidden shadow-inner border border-muted-foreground/10">
                    <div className="h-full bg-primary rounded-full shadow-lg shadow-primary/20 transition-all duration-1000" style={{ width: `${(val / totalAmount) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
