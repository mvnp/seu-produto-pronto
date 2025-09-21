import { Zap, Users, Download, HeadphonesIcon } from "lucide-react";

const ExtraBenefitsSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Linguagem simples",
      description: "Pensada especialmente para iniciantes, sem jargões técnicos complicados"
    },
    {
      icon: Users,
      title: "Zero experiência necessária",
      description: "Não precisa ter conhecimento técnico prévio para começar"
    },
    {
      icon: Download,
      title: "Templates prontos",
      description: "Modelos que aceleram seu processo e garantem resultados profissionais"
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte completo",
      description: "Tire todas suas dúvidas e não deixe nada te travar no caminho"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
            Benefícios Secundários + Diferenciais
          </h2>
          <p className="text-xl text-muted-foreground">
            Tudo pensado para garantir seu sucesso desde o primeiro dia
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-10 h-10 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-bold text-secondary mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-success rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-success-foreground mb-4">
              ✨ Garantia Total de Qualidade
            </h3>
            <p className="text-lg text-success-foreground/80">
              Nosso método já foi testado e aprovado por centenas de pessoas que saíram do zero 
              e hoje faturam com seus produtos digitais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtraBenefitsSection;