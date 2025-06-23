"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangleIcon, RefreshCwIcon, ArrowLeftIcon } from "lucide-react";

interface DashboardErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function DashboardError({ error, reset }: DashboardErrorProps) {
  useEffect(() => {
    console.error("Erro no dashboard:", error);
  }, [error]);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-4">
      <div className="mx-auto max-w-md text-center">
        {/* Ícone de erro */}
        <div className="mb-6 flex justify-center">
          <div className="bg-destructive/10 rounded-full p-3">
            <AlertTriangleIcon className="text-destructive size-8" />
          </div>
        </div>

        {/* Título específico para dashboard */}
        <h1 className="text-foreground mb-2 text-2xl font-bold">
          Erro no Dashboard
        </h1>

        {/* Descrição */}
        <p className="text-muted-foreground mb-6 leading-relaxed">
          Ocorreu um problema ao carregar os dados do dashboard. Tente
          recarregar a página ou volte em alguns minutos.
        </p>

        {/* Informações técnicas (apenas em desenvolvimento) */}
        {process.env.NODE_ENV === "development" && (
          <div className="bg-muted/50 mb-6 rounded-lg border p-4 text-left">
            <h3 className="text-foreground mb-2 text-sm font-semibold">
              Detalhes do erro:
            </h3>
            <code className="text-muted-foreground text-xs break-all">
              {error.message}
            </code>
          </div>
        )}

        {/* Ações específicas do dashboard */}
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            onClick={reset}
            variant="default"
            className="flex items-center gap-2"
          >
            <RefreshCwIcon className="size-4" />
            Recarregar dashboard
          </Button>

          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="flex items-center gap-2"
          >
            <ArrowLeftIcon className="size-4" />
            Voltar
          </Button>
        </div>

        {/* Informações de suporte */}
        <div className="border-border mt-8 border-t pt-6">
          <p className="text-muted-foreground text-sm">
            Se o erro persistir, verifique sua conexão ou entre em contato com o{" "}
            <a
              href="mailto:admin@exemplo.com"
              className="text-primary hover:underline"
            >
              administrador
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
