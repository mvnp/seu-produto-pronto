import { Award, BookOpen, Users, TrendingUp } from "lucide-react";

const AuthoritySection = () => {
  const achievements = [
    {
      icon: Users,
      number: "500+",
      label: "Alunos transformados"
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "Taxa de sucesso"
    },
    {
      icon: BookOpen,
      number: "15",
      label: "Produtos digitais criados"
    },
    {
      icon: Award,
      number: "5+",
      label: "Anos de experiência"
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Foto e informações do autor */}
            <div className="text-center lg:text-left">
              <div className="w-48 h-48 mx-auto lg:mx-0 mb-8 rounded-full overflow-hidden bg-primary/20 flex items-center justify-center">
                <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary-foreground">MP</span>
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary-foreground">
                Marcos Pereira
              </h2>
              
              <p className="text-xl text-secondary-foreground/80 mb-6">
                Desenvolvedor e Estrategista Digital
              </p>
              
              <p className="text-lg text-secondary-foreground/70 leading-relaxed">
                Com anos de experiência em tecnologia, automações e lançamentos online, 
                Marcos transformou seu conhecimento em produtos digitais de sucesso e agora 
                ensina iniciantes a fazerem o mesmo sem complicação.
              </p>
            </div>
            
            {/* Conquistas e números */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div 
                    key={index}
                    className="bg-secondary-foreground/10 rounded-xl p-6 text-center hover:bg-secondary-foreground/20 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    
                    <div className="text-3xl font-bold text-primary mb-2">
                      {achievement.number}
                    </div>
                    
                    <div className="text-secondary-foreground/80 text-sm">
                      {achievement.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="mt-16 bg-secondary-foreground/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-secondary-foreground mb-6 text-center">
              Autoridade Comprovada
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-bold text-secondary-foreground mb-2">Especialista em Tecnologia</h4>
                <p className="text-secondary-foreground/70 text-sm">Anos desenvolvendo soluções digitais</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-bold text-secondary-foreground mb-2">Resultados Comprovados</h4>
                <p className="text-secondary-foreground/70 text-sm">Múltiplos lançamentos de sucesso</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-bold text-secondary-foreground mb-2">Mentor Reconhecido</h4>
                <p className="text-secondary-foreground/70 text-sm">Centenas de alunos transformados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;