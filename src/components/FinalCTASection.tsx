import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-secondary-foreground leading-tight">
            A decisão é sua...
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Opção 1 - Continuar perdido */}
            <div className="bg-secondary-foreground/5 rounded-xl p-6 border border-secondary-foreground/20">
              <h3 className="text-2xl font-bold text-destructive mb-4">😔 Continuar perdido</h3>
              <ul className="space-y-3 text-secondary-foreground/70 text-left">
                <li>• Ficar entre ideias soltas sem direção</li>
                <li>• Perder mais tempo tentando descobrir sozinho</li>
                <li>• Continuar dependendo de agências caras</li>
                <li>• Ver outros tendo sucesso enquanto você fica parado</li>
              </ul>
            </div>
            
            {/* Opção 2 - Começar hoje */}
            <div className="bg-primary/10 rounded-xl p-6 border-2 border-primary">
              <h3 className="text-2xl font-bold text-primary mb-4">🚀 Começar hoje mesmo</h3>
              <ul className="space-y-3 text-secondary-foreground text-left">
                <li>• Ter um produto digital pronto e vendendo</li>
                <li>• Seguir um método comprovado passo a passo</li>
                <li>• Ganhar independência digital total</li>
                <li>• Fazer parte do grupo de pessoas que saem do lugar</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-secondary-foreground/5 rounded-2xl p-8 mb-12">
            <h3 className="text-3xl font-bold text-secondary-foreground mb-6">
              Você pode continuar perdido entre ideias soltas, ou pode dar seu primeiro passo hoje mesmo para ter um produto digital pronto e vendendo.
            </h3>
            
            <p className="text-xl text-secondary-foreground/80 mb-8">
              A escolha é sua. Mas lembre-se: cada dia que passa é uma oportunidade perdida.
            </p>
          </div>
          
          <div className="space-y-6">
            <Button 
              variant="hero" 
              size="hero"
              className="w-full md:w-auto text-lg md:text-2xl px-8 md:px-16 py-6 h-20"
              onClick={() => window.open('https://pay.hotmart.com/M102011987K', '_blank')}
            >
              <ArrowRight className="w-8 h-8 mr-4" />
              Quero meu produto pronto
            </Button>
            
            <div className="flex items-center justify-center gap-4 text-secondary-foreground/60">
              <Clock className="w-5 h-5" />
              <span>Oferta válida por tempo limitado</span>
            </div>
            
            <div className="text-secondary-foreground/50 text-sm">
              Acesso imediato • Garantia de 7 dias • Suporte incluso
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;