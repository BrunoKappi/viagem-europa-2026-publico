import { FileText, Download, ShieldCheck, HeartPulse, Plane, Search, User, Briefcase, Hotel } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { FileActionModal } from "@/components/FileActionModal"
import { useTranslation } from "react-i18next"

export type Document = {
  id: string;
  name: string;
  type: string;
  owner: string;
  fileLink: string;
}

export const brunoDocuments: Document[] = [
  { id: '1', name: 'Carteira Nacional de Vacinação Digital', type: 'Saúde', owner: 'Bruno', fileLink: '/Fontes/ExampleDocument.pdf' },
  { id: '2', name: 'Carteira de Habilitação', type: 'Identificação', owner: 'Bruno', fileLink: '/Fontes/ExampleDocument.pdf' },
  { id: '3', name: 'Carteira de Identidade', type: 'Identificação', owner: 'Bruno', fileLink: '/Fontes/ExampleDocument.pdf' },
  { id: '4', name: 'Carteira de Trabalho Digital', type: 'Identificação', owner: 'Bruno', fileLink: '/Fontes/ExampleDocument.pdf' },
  { id: '5', name: 'Carteira de Vacinação', type: 'Saúde', owner: 'Bruno', fileLink: '/Fontes/ExampleDocument.pdf' },
  { id: '6', name: 'Certidão de Nascimento', type: 'Identificação', owner: 'Bruno', fileLink: '/Fontes/ExampleDocument.pdf' },
  { id: '7', name: 'Certificado Internacional de Febre Amarela', type: 'Saúde', owner: 'Bruno', fileLink: '/Fontes/ExampleDocument.pdf' },
  { id: '8', name: 'Certificado de Vacinação COVID', type: 'Saúde', owner: 'Bruno', fileLink: '/Fontes/ExampleDocument.pdf' },
  { id: '9', name: 'Passaporte', type: 'Viagem', owner: 'Bruno', fileLink: '/Fontes/ExampleDocument.pdf' },
  { id: '10', name: 'Seguro Viagem', type: 'Viagem', owner: 'Bruno', fileLink: '/Fontes/ExampleDocument.pdf' },
  { id: '11', name: 'Visto ETA', type: 'Viagem', owner: 'Bruno', fileLink: '/Fontes/ExampleDocument.pdf' },
];

export const eduardaDocuments: Document[] = [
  { id: '12', name: 'Carteira Nacional de Vacinação Digital', type: 'Saúde', owner: 'Eduarda', fileLink: '/Fontes/ExampleDocument.pdf' },
  { id: '13', name: 'Carteira de Identidade', type: 'Identificação', owner: 'Eduarda', fileLink: '/Fontes/ExampleDocument.pdf' },
  { id: '14', name: 'Carteira de Trabalho Digital', type: 'Identificação', owner: 'Eduarda', fileLink: '/Fontes/ExampleDocument.pdf' },
  { id: '15', name: 'Certidão de Nascimento', type: 'Identificação', owner: 'Eduarda', fileLink: '/Fontes/ExampleDocument.pdf' },
  { id: '16', name: 'Certificado Internacional de Febre Amarela', type: 'Saúde', owner: 'Eduarda', fileLink: '/Fontes/ExampleDocument.pdf' },
  { id: '17', name: 'Passaporte', type: 'Viagem', owner: 'Eduarda', fileLink: '/Fontes/ExampleDocument.pdf' },
  { id: '18', name: 'Seguro Viagem', type: 'Viagem', owner: 'Eduarda', fileLink: '/Fontes/ExampleDocument.pdf' },
  { id: '19', name: 'Visto ETA', type: 'Viagem', owner: 'Eduarda', fileLink: '/Fontes/ExampleDocument.pdf' },
];

export const otherDocuments: Document[] = [
  { id: '20', name: 'Chip Virtual Lyca Mobile', type: 'Outros', owner: 'Geral', fileLink: '/Fontes/ExampleDocument.pdf' },
  { id: '21', name: 'Email Confirmação - WOT Patio Social Lisboa', type: 'Hospedagem', owner: 'Geral', fileLink: '/Fontes/ExampleDocument.pdf' },
  { id: '22', name: 'Email Confirmação - The Hat Madrid', type: 'Hospedagem', owner: 'Geral', fileLink: '/Fontes/ExampleDocument.pdf' },
  { id: '23', name: 'Email Dúvida Pagamento - The Hat Madrid', type: 'Outros', owner: 'Geral', fileLink: '/Fontes/ExampleDocument.pdf' },
  { id: '24', name: 'Email Confirmação - Tourist Inn Amsterdam', type: 'Hospedagem', owner: 'Geral', fileLink: '/Fontes/ExampleDocument.pdf' },
  { id: '25', name: 'Email Confirmação - B&B Hotel Luxembourg', type: 'Hospedagem', owner: 'Geral', fileLink: '/Fontes/ExampleDocument.pdf' },
  { id: '26', name: 'Email Confirmação - Ibis Brussels Centre Gare Midi', type: 'Hospedagem', owner: 'Geral', fileLink: '/Fontes/ExampleDocument.pdf' },
  { id: '27', name: 'Email Confirmação - Ibis Koeln Centrum', type: 'Hospedagem', owner: 'Geral', fileLink: '/Fontes/ExampleDocument.pdf' },
  { id: '28', name: 'Email Confirmação - Ibis Budget Paris Porte de Montmartre', type: 'Hospedagem', owner: 'Geral', fileLink: '/Fontes/ExampleDocument.pdf' },
  { id: '29', name: 'Email Confirmação - Ibis Budget London Whitechapel', type: 'Hospedagem', owner: 'Geral', fileLink: '/Fontes/ExampleDocument.pdf' },
];

const allDocuments = [...brunoDocuments, ...eduardaDocuments];

const getIcon = (type: string) => {
  switch (type) {
    case 'Saúde': return <HeartPulse className="w-5 h-5" />;
    case 'Identificação': return <ShieldCheck className="w-5 h-5" />;
    case 'Viagem': return <Plane className="w-5 h-5" />;
    case 'Hospedagem': return <Hotel className="w-5 h-5" />;
    case 'Outros': return <Briefcase className="w-5 h-5" />;
    default: return <FileText className="w-5 h-5" />;
  }
}

type PersonSectionProps = {
  docs: Document[];
  owner: string;
  icon?: React.ReactNode;
  accentColor: string;
  bgAccent: string;
  borderAccent: string;
  badgeBg: string;
  badgeText: string;
  downloadAccent: string;
}

function PersonSection({ docs, owner, icon, accentColor, bgAccent, borderAccent, badgeBg, badgeText, downloadAccent }: PersonSectionProps) {
  const { t } = useTranslation()
  if (docs.length === 0) return null;
  return (
    <div className={cn("rounded-3xl border-2 overflow-hidden", borderAccent)}>
      {/* Section Header */}
      <div className={cn("px-6 py-5 flex items-center gap-4", bgAccent)}>
        <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner", badgeBg)}>
          {icon || <User className={cn("w-6 h-6", badgeText)} />}
        </div>
        <div>
          <h2 className="text-2xl font-black uppercase tracking-tight">{owner}</h2>
          <p className="text-xs font-black uppercase text-muted-foreground tracking-widest">{t('documents.documents_count', { count: docs.length })}</p>
        </div>
      </div>

      {/* Docs Grid */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-background/50">
        {docs.map((doc) => (
          <div
            key={doc.id}
            className="group relative bg-white/50 dark:bg-black/20 backdrop-blur-md rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
          >
            <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
              <FileText className="w-24 h-24 rotate-12" />
            </div>

            <div className="p-5 flex-1 flex flex-col relative z-10">
              <div className="flex items-start justify-between mb-4 gap-2">
                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0", badgeBg)}>
                  <span className={badgeText}>{getIcon(doc.type)}</span>
                </div>
                <span className={cn("px-2 py-0.5 text-[9px] font-black uppercase rounded-full tracking-widest shrink-0", badgeBg, badgeText)}>
                  {doc.type}
                </span>
              </div>

              <h3 className="text-sm font-bold mb-4 line-clamp-2 leading-snug flex-1">
                {doc.name}
              </h3>

              <FileActionModal
                  fileLink={doc.fileLink}
                  triggerClassName={cn(
                    "flex items-center justify-center w-full py-2.5 rounded-xl font-bold uppercase tracking-widest text-xs transition-all duration-200 hover:scale-[1.02] mt-auto",
                    downloadAccent,
                    accentColor
                  )}
                  triggerText={t('documents.download')}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Documents() {
  const { t } = useTranslation()
  const [filterTerm, setFilterTerm] = useState('')

  const normalizeString = (str: string) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
  }

  const filteredBruno = brunoDocuments.filter(doc => {
    const term = normalizeString(filterTerm);
    return normalizeString(doc.name).includes(term) || normalizeString(doc.type).includes(term) || !filterTerm;
  });

  const filteredEduarda = eduardaDocuments.filter(doc => {
    const term = normalizeString(filterTerm);
    return normalizeString(doc.name).includes(term) || normalizeString(doc.type).includes(term) || !filterTerm;
  });

  const filteredOther = otherDocuments.filter(doc => {
    const term = normalizeString(filterTerm);
    return normalizeString(doc.name).includes(term) || normalizeString(doc.type).includes(term) || !filterTerm;
  });

  const totalFiltered = filteredBruno.length + filteredEduarda.length + filteredOther.length;

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl page-transition">
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-2 text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/60">
          {t('documents.title')}
        </h1>
        <p className="text-muted-foreground text-lg mb-6">
          {t('documents.subtitle')}
        </p>

        <div className="relative max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border border-muted-foreground/20 rounded-xl leading-5 bg-white/50 dark:bg-black/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm backdrop-blur-sm transition-all"
            placeholder={t('documents.search_placeholder')}
            value={filterTerm}
            onChange={(e) => setFilterTerm(e.target.value)}
          />
        </div>
      </div>

      {totalFiltered === 0 ? (
        <div className="text-center py-16 text-muted-foreground bg-muted/20 rounded-2xl border-dashed border-2">
          <FileText className="w-12 h-12 mx-auto mb-4 opacity-20" />
          <p className="text-lg font-bold">{t('documents.no_results')} "{filterTerm}"</p>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Bruno Section */}
          <PersonSection
            docs={filteredBruno}
            owner="Bruno"
            accentColor="text-blue-50"
            bgAccent="bg-blue-600/10 dark:bg-blue-500/10"
            borderAccent="border-blue-500/30"
            badgeBg="bg-blue-600/15 dark:bg-blue-500/15"
            badgeText="text-blue-600 dark:text-blue-400"
            downloadAccent="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500"
          />

          {/* Eduarda Section */}
          <PersonSection
            docs={filteredEduarda}
            owner="Eduarda"
            accentColor="text-pink-50"
            bgAccent="bg-pink-600/10 dark:bg-pink-500/10"
            borderAccent="border-pink-500/30"
            badgeBg="bg-pink-600/15 dark:bg-pink-500/15"
            badgeText="text-pink-600 dark:text-pink-400"
            downloadAccent="bg-pink-600 hover:bg-pink-700 dark:bg-pink-600 dark:hover:bg-pink-500"
          />

          {/* Other Section */}
          <PersonSection
            docs={filteredOther}
            owner={t('documents.other_documents')}
            icon={<FileText className="w-6 h-6 text-amber-600 dark:text-amber-400" />}
            accentColor="text-amber-50"
            bgAccent="bg-amber-600/10 dark:bg-amber-500/10"
            borderAccent="border-amber-500/30"
            badgeBg="bg-amber-600/15 dark:bg-amber-500/15"
            badgeText="text-amber-600 dark:text-amber-400"
            downloadAccent="bg-amber-600 hover:bg-amber-700 dark:bg-amber-600 dark:hover:bg-amber-500"
          />
        </div>
      )}
    </div>
  )
}
