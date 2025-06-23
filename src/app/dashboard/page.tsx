"use client";

import { Button } from "@/components/ui/button";
import { BugIcon, AlertTriangleIcon } from "lucide-react";

export default function DashboardPage() {
  const triggerError = () => {
    throw new Error("Este é um erro de teste do dashboard!");
  };

  const triggerAsyncError = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    throw new Error("Este é um erro assíncrono de teste!");
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-foreground mb-2 text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Página de exemplo para testar o tratamento de erros
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Card para testar erros síncronos */}
        <div className="bg-card rounded-lg border p-6">
          <div className="mb-3 flex items-center gap-2">
            <BugIcon className="text-destructive size-5" />
            <h2 className="text-lg font-semibold">Teste de Erro Síncrono</h2>
          </div>
          <p className="text-muted-foreground mb-4 text-sm">
            Clique no botão abaixo para simular um erro síncrono e ver como
            nossa página de erro funciona.
          </p>
          <Button onClick={triggerError} variant="destructive" size="sm">
            Gerar Erro Síncrono
          </Button>
        </div>

        {/* Card para testar erros assíncronos */}
        <div className="bg-card rounded-lg border p-6">
          <div className="mb-3 flex items-center gap-2">
            <AlertTriangleIcon className="size-5 text-orange-500" />
            <h2 className="text-lg font-semibold">Teste de Erro Assíncrono</h2>
          </div>
          <p className="text-muted-foreground mb-4 text-sm">
            Clique no botão abaixo para simular um erro assíncrono (com delay de
            1 segundo).
          </p>
          <Button onClick={triggerAsyncError} variant="destructive" size="sm">
            Gerar Erro Assíncrono
          </Button>
        </div>
      </div>

      {/* Seção de estatísticas mockadas */}
      <div className="mt-8">
        <h2 className="mb-4 text-xl font-semibold">
          Estatísticas do Dashboard
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="bg-card rounded-lg border p-4">
            <h3 className="text-primary text-2xl font-bold">1,234</h3>
            <p className="text-muted-foreground text-sm">Total de Usuários</p>
          </div>
          <div className="bg-card rounded-lg border p-4">
            <h3 className="text-2xl font-bold text-green-600">98.5%</h3>
            <p className="text-muted-foreground text-sm">Uptime</p>
          </div>
          <div className="bg-card rounded-lg border p-4">
            <h3 className="text-2xl font-bold text-blue-600">4.8</h3>
            <p className="text-muted-foreground text-sm">Avaliação Média</p>
          </div>
        </div>
      </div>
    </div>
  );
}
