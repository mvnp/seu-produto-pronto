import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section 
      className="hero-section min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="hero-content container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Crie, lance e venda o seu primeiro{" "}
            <span className="text-primary bg-white/10 px-4 py-2 rounded-lg inline-block">
              produto digital
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            mesmo que você comece do absoluto zero.
          </p>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Método passo a passo para sair da ideia e chegar às suas primeiras campanhas 
              rodando no Facebook Ads em poucas semanas.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="hero" 
              size="hero"
              className="w-full sm:w-auto"
            >
              🚀 Quero começar agora!
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-secondary"
            >
              Ver demonstração
            </Button>
          </div>
          
          <div className="mt-16 flex justify-center items-center gap-8 text-white/60">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span>Método comprovado</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span>Passo a passo</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span>Resultados rápidos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;