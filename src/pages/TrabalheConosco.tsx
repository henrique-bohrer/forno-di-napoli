import { TrendingUp, Users, Heart } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';
import { JobCard } from '../components/JobCard';
import { motion } from 'framer-motion';

const jobs = [
  {
    title: 'Pizzaiolo Sênior',
    location: 'Curitiba - Centro',
    type: 'CLT - Presencial',
    description: 'Buscamos um profissional com experiência comprovada em forno a lenha e massas de longa fermentação para liderar a produção na nossa unidade matriz.'
  },
  {
    title: 'Atendente de Delivery',
    location: 'São José dos Pinhais',
    type: 'CLT - Presencial',
    description: 'Responsável pelo atendimento aos clientes via telefone e aplicativos, garantindo a agilidade e a qualidade no despacho dos pedidos.'
  },
  {
    title: 'Auxiliar de Cozinha',
    location: 'Londrina',
    type: 'CLT - Presencial',
    description: 'Auxiliar no preparo de ingredientes (mise en place), organização e limpeza da área de produção.'
  },
  {
    title: 'Gerente de Unidade',
    location: 'Curitiba - Batel',
    type: 'PJ - Presencial',
    description: 'Gestão completa da operação: equipe, estoque, qualidade de atendimento e resultados financeiros da unidade do Batel.'
  }
];

export const TrabalheConosco = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-secondary text-surface pt-32 pb-20 px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
          <span className="font-accent text-accent uppercase tracking-[0.2em] mb-4 block text-sm">Carreiras</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Faça parte do time <br/><span className="text-primary">Forno di Napoli</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-body font-light">
            Estamos sempre em busca de pessoas apaixonadas por gastronomia, qualidade e excelência em atendimento.
          </p>
        </motion.div>
      </section>

      {/* Culture */}
      <section className="py-20 bg-theme">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle title="Nossa Cultura" subtitle="Por que trabalhar conosco?" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-primary">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-3">Crescimento</h3>
              <p className="text-gray-600">Oferecemos plano de carreira e treinamentos constantes para que você se desenvolva junto com a marca.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-primary">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-3">Ambiente Colaborativo</h3>
              <p className="text-gray-600">Acreditamos que os melhores resultados vêm do trabalho em equipe, com respeito e diversidade.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-primary">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-3">Benefícios</h3>
              <p className="text-gray-600">Pacote competitivo, alimentação no local e, claro, desconto nas nossas deliciosas pizzas!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle title="Vagas Abertas" subtitle="Junte-se a nós" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {jobs.map((job, idx) => (
              <JobCard key={idx} {...job} />
            ))}
          </div>

          <div className="mt-16 text-center max-w-2xl mx-auto bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h4 className="font-display font-bold text-xl mb-2">Não encontrou sua vaga?</h4>
            <p className="text-gray-600 mb-6">
              Envie seu currículo para nosso banco de talentos e entraremos em contato quando surgir uma oportunidade com o seu perfil.
            </p>
            <a href="mailto:rh@fornodinapoli.com.br" className="text-primary font-accent font-medium hover:underline">
              rh@fornodinapoli.com.br
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
