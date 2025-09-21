import { Button } from "@/components/ui/button";
import { Check, Gift, Shield, Clock } from "lucide-react";

const OfferSection = () => {
  const bonuses = [
    "📋 Checklists completos para cada etapa",
    "📊 Planilhas de acompanhamento e resultados", 
    "🎯 Modelos de campanhas testados e aprovados",
    "💬 Templates de copy para redes sociais",
    "🔥 Estratégias de lançamento que funcionam"
  ];

  return (
    <section className="py-20 bg-background-secondary overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
            Oferta Irresistível
          </h2>
          <p className="text-xl text-muted-foreground">
            Tudo que você precisa para transformar sua ideia em vendas
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
            {/* Preço Principal */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-4 md:p-8 shadow-card border-2 border-primary w-full box-border">
                <div className="text-center mb-8">
                  <div className="text-lg text-muted-foreground mb-2">Preço de entrada acessível</div>
                  <div className="flex items-center justify-center gap-2 md:gap-4 mb-4">
                    <span className="text-lg md:text-2xl text-muted-foreground line-through">R$ 997</span>
                    <span className="text-3xl md:text-5xl font-bold text-primary">R$ 297</span>
                  </div>
                  <div className="text-lg text-muted-foreground">ou 12x de R$ 29,70</div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>15 agentes práticos passo a passo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Videoaulas completas e didáticas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Templates e modelos prontos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Tutoriais guiados</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Suporte completo</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => window.open('https://pay.hotmart.com/M102011987K', '_blank')}
                >
                  🚀 Quero meu produto pronto
                </Button>
              </div>
            </div>
            
            {/* Bônus e Garantia */}
            <div className="space-y-4 lg:space-y-6">
              {/* Bônus */}
              <div className="bg-success rounded-xl p-4 lg:p-6 w-full box-border">
                <div className="flex items-center gap-3 mb-4">
                  <Gift className="w-6 h-6 text-success-foreground" />
                  <h3 className="text-xl font-bold text-success-foreground">Bônus Exclusivos</h3>
                </div>
                
                <div className="space-y-3">
                  {bonuses.map((bonus, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-success-foreground/80 text-sm leading-relaxed">
                        {bonus}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 p-3 bg-success-foreground/10 rounded-lg">
                  <p className="text-success-foreground font-semibold text-sm">
                    Valor total dos bônus: R$ 497
                  </p>
                </div>
              </div>
              
              {/* Garantia */}
              <div className="bg-primary/10 rounded-xl p-4 lg:p-6 w-full box-border">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-secondary">Garantia Total</h3>
                </div>
                
                <p className="text-secondary/80 mb-4">
                  <strong>7 dias</strong> de satisfação ou seu dinheiro de volta.
                </p>
                
                <p className="text-secondary/70 text-sm">
                  Teste o método completo. Se não ficar satisfeito, devolvemos 100% do valor.
                </p>
              </div>
              
              {/* Urgência */}
              <div className="bg-destructive/10 rounded-xl p-4 lg:p-6 border border-destructive/20 w-full box-border">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-destructive" />
                  <h3 className="text-xl font-bold text-destructive">Oferta Limitada</h3>
                </div>
                
                <p className="text-destructive/80 text-sm">
                  Preço promocional válido apenas para as próximas 48 horas!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;