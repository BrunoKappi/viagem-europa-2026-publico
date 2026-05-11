import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Download, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FileActionModalProps {
  fileLink: string;
  triggerClassName?: string;
  triggerText?: string;
  triggerIcon?: React.ReactNode;
}

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.885m8.538-17.096A11.956 11.956 0 0 0 12.051 1.26h-.004a11.97 11.97 0 0 0-10.3 17.9L.308 23.684l4.633-1.215a11.95 11.95 0 0 0 7.106 2.31h.005c6.602 0 11.97-5.367 11.973-11.976a11.91 11.91 0 0 0-3.486-8.51" />
  </svg>
);

export function FileActionModal({ fileLink, triggerClassName, triggerText = "Baixar", triggerIcon }: FileActionModalProps) {
  const shareFile = async () => {
    try {
      const response = await fetch(fileLink);
      const blob = await response.blob();
      const fileName = fileLink.split('/').pop() || 'documento.pdf';
      const file = new File([blob], fileName, { type: blob.type || 'application/pdf' });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: fileName,
          text: 'Aqui está o arquivo da viagem.'
        });
      } else {
        const absoluteUrl = new URL(fileLink, window.location.origin).href;
        window.open(`https://wa.me/?text=${encodeURIComponent(`Segue o arquivo da viagem:\n\n${absoluteUrl}`)}`, '_blank');
      }
    } catch (e) {
      console.error("Erro ao compartilhar arquivo:", e);
      const absoluteUrl = new URL(fileLink, window.location.origin).href;
      window.open(`https://wa.me/?text=${encodeURIComponent(`Segue o arquivo da viagem:\n\n${absoluteUrl}`)}`, '_blank');
    }
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className={cn("outline-none", triggerClassName)}
          title="Opções de arquivo"
        >
          {triggerIcon || <Download className="w-4 h-4 mr-2" />}
          {triggerText}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="center"
          sideOffset={8}
          className="z-[200] min-w-[220px] bg-background border shadow-2xl rounded-2xl p-2 animate-in fade-in zoom-in-95"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-1">
            <DropdownMenu.Item asChild>
              <a 
                href={fileLink}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center px-4 py-3 hover:bg-primary/10 hover:text-primary rounded-xl cursor-pointer transition-colors font-bold uppercase tracking-widest text-xs outline-none focus:bg-primary/10 focus:text-primary"
              >
                <Eye className="w-4 h-4 mr-3" />
                Navegador
              </a>
            </DropdownMenu.Item>

            <DropdownMenu.Item asChild>
              <button 
                onClick={shareFile}
                className="w-full flex items-center px-4 py-3 hover:bg-green-500/10 hover:text-green-600 dark:hover:text-green-500 rounded-xl cursor-pointer transition-colors font-bold uppercase tracking-widest text-xs outline-none focus:bg-green-500/10 focus:text-green-600"
              >
                <WhatsAppIcon className="w-4 h-4 mr-3 text-green-500" />
                WhatsApp / App
              </button>
            </DropdownMenu.Item>
            
            <DropdownMenu.Item asChild>
              <a 
                href={fileLink}
                download
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center px-4 py-3 bg-primary text-primary-foreground hover:bg-primary/90 focus:bg-primary/90 rounded-xl cursor-pointer transition-colors font-bold uppercase tracking-widest text-xs outline-none mt-1"
              >
                <Download className="w-4 h-4 mr-3" />
                Baixar o Arquivo
              </a>
            </DropdownMenu.Item>
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
