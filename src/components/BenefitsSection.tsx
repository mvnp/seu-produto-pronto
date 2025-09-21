import { Check } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    "Transforme seu conhecimento em um produto digital pronto para vender.",
    "Tenha um passo a passo simples, sem precisar de experiência anterior.",
    "Coloque suas primeiras campanhas no ar com segurança e clareza.",
    "Ganhe independência digital sem depender de agências ou freelas.",
    "Aprenda a validar suas ideias antes de investir tempo e dinheiro.",
    "Domine as métricas essenciais para otimizar seus resultados."
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
            Aumente Seu Faturamento
          </h2>
          <p className="text-xl text-muted-foreground">
            Descubra como transformar seu conhecimento em resultados concretos
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-card hover:shadow-primary transition-all duration-300 hover:scale-105"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-primary-foreground" />
              </div>
              <p className="text-lg text-card-foreground leading-relaxed">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;