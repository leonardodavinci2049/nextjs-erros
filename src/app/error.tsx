"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangleIcon, RefreshCwIcon, HomeIcon } from "lucide-react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log do erro para monitoramento
    console.error("Erro na aplicação:", error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <div className="mx-auto max-w-md text-center">
        {/* Ícone de erro */}
        <div className="mb-6 flex justify-center">
          <div className="bg-destructive/10 rounded-full p-3">
            <AlertTriangleIcon className="text-destructive size-8" />
          </div>
        </div>

        {/* Título */}
        <h1 className="text-foreground mb-2 text-2xl font-bold">
          Ops! Algo deu errado
        </h1>

        {/* Descrição */}
        <p className="text-muted-foreground mb-6 leading-relaxed">
          Encontramos um problema inesperado. Nossa equipe foi notificada e está
          trabalhando para resolver isso o mais rápido possível.
        </p>

        {/* Informações técnicas (apenas em desenvolvimento) */}
        {process.env.NODE_ENV === "development" && (
          <div className="bg-muted/50 mb-6 rounded-lg border p-4 text-left">
            <h3 className="text-foreground mb-2 text-sm font-semibold">
              Detalhes técnicos:
            </h3>
            <code className="text-muted-foreground text-xs break-all">
              {error.message}
            </code>
          </div>
        )}

        {/* Ações */}
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            onClick={reset}
            variant="default"
            className="flex items-center gap-2"
          >
            <RefreshCwIcon className="size-4" />
            Tentar novamente
          </Button>

          <Button
            variant="outline"
            onClick={() => (window.location.href = "/")}
            className="flex items-center gap-2"
          >
            <HomeIcon className="size-4" />
            Voltar ao início
          </Button>
        </div>

        {/* Informações de contato */}
        <div className="border-border mt-8 border-t pt-6">
          <p className="text-muted-foreground text-sm">
            Se o problema persistir, entre em contato com nosso{" "}
            <a
              href="mailto:suporte@exemplo.com"
              className="text-primary hover:underline"
            >
              suporte técnico
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
