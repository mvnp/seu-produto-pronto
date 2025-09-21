import { BookOpen, Video, FileText, Target, Settings, Rocket } from "lucide-react";

const ProductDetailsSection = () => {
  const features = [
    {
      icon: Target,
      title: "Definição de ideia e público",
      description: "Descubra exatamente qual produto criar e para quem vender"
    },
    {
      icon: BookOpen,
      title: "Criação do produto digital",
      description: "Estruture e desenvolva seu produto com templates prontos"
    },
    {
      icon: FileText,
      title: "Estrutura de vendas",
      description: "Monte sua página de vendas que converte visitantes em clientes"
    },
    {
      icon: Settings,
      title: "Configuração do gerenciador de anúncios",
      description: "Configure corretamente sua conta de anúncios do Facebook"
    },
    {
      icon: Rocket,
      title: "Lançamento da primeira campanha",
      description: "Coloque sua primeira campanha no ar com segurança total"
    },
    {
      icon: Video,
      title: "Videoaulas + modelos prontos",
      description: "Tutoriais guiados e templates para acelerar seu processo"
    }
  ];

  return (
    <section className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
            Detalhes da Oferta
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Conjunto de <span className="font-bold text-primary">15 agentes práticos</span> que conduzem cada etapa
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-card hover:shadow-primary transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-secondary mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="bg-primary/5 rounded-2xl p-8 border-2 border-primary/20">
            <h3 className="text-2xl font-bold text-secondary mb-4">
              O que você recebe:
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-secondary">Videoaulas práticas</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-secondary">Modelos prontos</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-secondary">Tutoriais guiados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsSection;