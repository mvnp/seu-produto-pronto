import { AlertTriangle, CheckCircle } from "lucide-react";

const ProblemSolutionSection = () => {
  return (
    <section className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Problema */}
            <div className="bg-white rounded-2xl p-8 shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-2xl font-bold text-secondary">O Problema</h3>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A maioria dos iniciantes ficam travados entre ter uma ideia e conseguir vender.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ou criam conteúdo sem estratégia, ou nunca saem do lugar.
              </p>
              
              <div className="mt-8 p-4 bg-destructive/5 rounded-lg border-l-4 border-destructive">
                <p className="text-sm text-destructive font-medium">
                  Resultado: Frustração, tempo perdido e dinheiro desperdiçado
                </p>
              </div>
            </div>
            
            {/* Solução */}
            <div className="bg-success rounded-2xl p-8 shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-success-foreground">A Solução</h3>
              </div>
              
              <p className="text-lg text-success-foreground/80 leading-relaxed mb-6">
                Com o <strong className="text-success-foreground">Seu Produto Digital Pronto</strong>, 
                você não fica perdido.
              </p>
              
              <p className="text-lg text-success-foreground/80 leading-relaxed">
                Nós pegamos na sua mão e mostramos exatamente o que fazer: 
                da ideia ao anúncio publicado.
              </p>
              
              <div className="mt-8 p-4 bg-primary/10 rounded-lg border-l-4 border-primary">
                <p className="text-sm text-success-foreground font-medium">
                  Resultado: Clareza, direção e resultados em poucas semanas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;