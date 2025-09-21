import { Facebook, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Empresa */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-secondary-foreground mb-4">
                Seu Produto Digital Pronto
              </h3>
              <p className="text-secondary-foreground/70 mb-6 leading-relaxed">
                Transformamos sua expertise em produtos digitais de sucesso. 
                Método comprovado para sair da ideia e chegar às primeiras vendas.
              </p>
              
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors">
                  <Facebook className="w-5 h-5 text-primary-foreground" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors">
                  <Instagram className="w-5 h-5 text-primary-foreground" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors">
                  <Youtube className="w-5 h-5 text-primary-foreground" />
                </a>
              </div>
            </div>
            
            {/* Links Úteis */}
            <div>
              <h4 className="text-lg font-semibold text-secondary-foreground mb-4">
                Links Úteis
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                    Política de Reembolso
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Contato */}
            <div>
              <h4 className="text-lg font-semibold text-secondary-foreground mb-4">
                Contato
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-secondary-foreground/70 text-sm">
                    suporte@axitech.com.br
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-secondary-foreground/70 text-sm">
                    (48) 99189-3313
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-secondary-foreground/70 text-sm">
                    Palhoça, SC<br />
                    Brasil
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Dados da Empresa */}
          <div className="border-t border-secondary-foreground/20 pt-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h5 className="font-semibold text-secondary-foreground mb-2">
                  AXITECH Negócios Digitais LTDA
                </h5>
                <p className="text-secondary-foreground/70 text-sm">
                  CNPJ: 33.240.999/0001-03<br />
                  Endereço: Rua Padova, 175 - Palhoça, SC
                </p>
              </div>
              
              <div className="text-center md:text-right">
                <p className="text-secondary-foreground/50 text-sm">
                  © 2025 Seu Produto Digital Pronto.
                </p>
                <p className="text-secondary-foreground/50 text-sm">
                  Todos os direitos reservados.
                </p>
              </div>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-secondary-foreground/5 rounded-lg">
            <p className="text-secondary-foreground/60 text-xs leading-relaxed text-center">
              <strong>Aviso Legal:</strong> Os resultados apresentados não garantem que você terá os mesmos resultados. 
              Seus resultados podem ser maiores, menores ou inexistentes. Seus resultados dependerão de sua dedicação, 
              conhecimento prévio, trabalho, mercado e outros fatores. Como em qualquer atividade comercial, 
              você assume todos os riscos relacionados ao investimento e dinheiro.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;