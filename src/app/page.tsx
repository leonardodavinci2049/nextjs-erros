import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, BugIcon, ShieldAlertIcon } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center text-center">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Hero Section */}
        <div className="space-y-4">
          <h1 className="from-primary to-primary/60 bg-gradient-to-r bg-clip-text text-4xl font-extrabold text-transparent md:text-6xl">
            Next.js Error Handling
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
            Demonstração de tratamento de erros no Next.js 15 com páginas de
            erro personalizadas e experiência do usuário otimizada.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="bg-card hover:bg-accent/5 rounded-lg border p-6 transition-colors">
            <div className="mb-4 flex items-center gap-3">
              <div className="bg-primary/10 rounded-md p-2">
                <BugIcon className="text-primary size-5" />
              </div>
              <h2 className="text-xl font-semibold">Teste de Erros</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Acesse o dashboard para testar diferentes tipos de erros e ver
              como são tratados pela aplicação.
            </p>
            <Button asChild className="w-full">
              <Link href="/dashboard">
                Ir para Dashboard
                <ArrowRightIcon className="ml-2 size-4" />
              </Link>
            </Button>
          </div>

          <div className="bg-card hover:bg-accent/5 rounded-lg border p-6 transition-colors">
            <div className="mb-4 flex items-center gap-3">
              <div className="bg-destructive/10 rounded-md p-2">
                <ShieldAlertIcon className="text-destructive size-5" />
              </div>
              <h2 className="text-xl font-semibold">Página de Erro</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Visualize como uma página de erro personalizada é exibida quando
              algo dá errado na aplicação.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/error">
                Ver Página de Erro
                <ArrowRightIcon className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Features List */}
        <div className="border-border mt-16 border-t pt-8">
          <h3 className="mb-6 text-lg font-semibold">
            Funcionalidades Implementadas
          </h3>
          <div className="text-muted-foreground grid gap-3 text-sm md:grid-cols-2">
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-green-500"></div>
              Páginas de erro personalizadas
            </div>
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-green-500"></div>
              Tratamento de erros síncronos e assíncronos
            </div>
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-green-500"></div>
              Design responsivo e acessível
            </div>
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-green-500"></div>
              Informações técnicas em desenvolvimento
            </div>
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-green-500"></div>
              Ações de recuperação intuitivas
            </div>
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-green-500"></div>
              Tema claro e escuro
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
