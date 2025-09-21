import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Preciso ter experiência prévia?",
      answer: "Não! O curso foi criado especialmente para iniciantes. Explicamos tudo desde o básico, com linguagem simples e sem jargões técnicos."
    },
    {
      question: "Vou precisar investir em anúncios?",
      answer: "Sim, mas você aprende como começar com pouco investimento. Mostramos estratégias para começar com orçamentos pequenos e ir escalando conforme os resultados aparecem."
    },
    {
      question: "Em quanto tempo consigo lançar meu produto?",
      answer: "Depende do seu ritmo de implementação, mas seguindo nosso método passo a passo, em poucas semanas é possível estar com sua campanha ativa e vendendo."
    },
    {
      question: "O conteúdo é atualizado?",
      answer: "Sim! Você terá acesso a todas as atualizações do curso sem custo adicional. Sempre mantemos o conteúdo atual com as melhores práticas do mercado."
    },
    {
      question: "Funciona para qualquer nicho?",
      answer: "Sim! Nosso método é aplicável para qualquer área de conhecimento. Já tivemos sucesso com consultores, coaches, designers, professores e muitos outros profissionais."
    },
    {
      question: "E se eu não conseguir implementar?",
      answer: "Oferecemos suporte completo para tirar suas dúvidas. Além disso, você tem 7 dias de garantia total. Se não ficar satisfeito, devolvemos 100% do valor."
    },
    {
      question: "Quanto posso ganhar com isso?",
      answer: "Os resultados variam de pessoa para pessoa, mas nossos alunos têm conseguido desde algumas centenas até milhares de reais por mês com seus produtos digitais."
    },
    {
      question: "Preciso de conhecimento técnico?",
      answer: "Não precisa! Mostramos ferramentas simples e práticas que qualquer pessoa consegue usar, mesmo sem experiência técnica."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Tire suas principais dúvidas sobre o método
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-card p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
              <h3 className="text-xl font-bold text-secondary mb-3">
                Ainda tem dúvidas?
              </h3>
              <p className="text-muted-foreground mb-4">
                Nossa equipe de suporte está pronta para ajudar você!
              </p>
              <p className="text-sm text-primary font-medium">
                📧 suporte@axitech.com.br
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;