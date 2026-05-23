import { motion } from 'framer-motion';
import { Flame, Clock, Leaf, Star, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../components/SectionTitle';
import { PizzaCard } from '../components/PizzaCard';
import { pizzas } from '../data/pizzas';

export const Home = () => {
  const highlights = pizzas.slice(0, 6);

  const features = [
    {
      icon: <Flame className="w-8 h-8 text-primary" />,
      title: "Forno a Lenha",
      description: "Assadas em forno a lenha a 450°C para aquela massa perfeita com borda vulcânica."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Delivery Rápido",
      description: "Entrega em até 40 minutos para garantir que sua pizza chegue quente e fumegante."
    },
    {
      icon: <Leaf className="w-8 h-8 text-primary" />,
      title: "Ingredientes Frescos",
      description: "Selecionados diariamente, usamos apenas tomates pelati e farinha 00 importada."
    }
  ];

  const testimonials = [
    {
      name: "Mariana Silva",
      photo: "https://ui-avatars.com/api/?name=Mariana+Silva&background=C0392B&color=fff",
      review: "A melhor pizza que já comi no Brasil. A massa é incrivelmente leve e os ingredientes são de primeiríssima qualidade. Recomendo a Margherita!"
    },
    {
      name: "João Pedro Costa",
      photo: "https://ui-avatars.com/api/?name=Joao+Costa&background=1A1A1A&color=fff",
      review: "Delivery sempre pontual. A pizza chega quentinha, parece que saiu do forno direto para a minha mesa. A de Pepperoni é sensacional."
    },
    {
      name: "Camila Fernandes",
      photo: "https://ui-avatars.com/api/?name=Camila+Fernandes&background=D4A853&color=fff",
      review: "Ambiente do restaurante maravilhoso e o delivery mantém a mesma qualidade. Massa fina e borda recheada perfeita."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544982503-9f984c14501a?q=80&w=2787&auto=format&fit=crop"
            alt="Pizza baking in wood fired oven"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="container relative z-10 px-4 text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <span className="font-accent text-accent uppercase tracking-[0.3em] text-sm md:text-base font-semibold block mb-4">
              Tradizione dal 2008
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              A pizza mais autêntica <br className="hidden md:block" />
              de Nápoles.
            </h1>
            <p className="text-gray-200 text-lg md:text-2xl font-body mb-10 max-w-2xl mx-auto font-light">
              Massa artesanal de longa fermentação, molho italiano e ingredientes frescos, entregues na sua porta.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/cardapio" className="btn btn-primary text-lg px-8 py-4 w-full sm:w-auto">
                Ver Cardápio
              </Link>
              <Link to="/unidades" className="btn btn-outline border-white text-white hover:bg-white hover:text-black text-lg px-8 py-4 w-full sm:w-auto">
                Nossas Unidades
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50"
        >
          <div className="w-[30px] h-[50px] border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Features Strip */}
      <section className="bg-surface py-20 border-b border-gray-100 relative z-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="font-display font-bold text-2xl mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-24 bg-theme relative">
        <div className="grain-overlay"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex justify-between items-end mb-12">
            <SectionTitle title="Nossas Favoritas" subtitle="Cardápio" centered={false} />
            <Link to="/cardapio" className="hidden md:flex items-center gap-2 text-primary font-accent font-medium hover:text-[#A93226] transition-colors mb-6">
              Ver todo o cardápio <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((pizza, idx) => (
              <motion.div
                key={pizza.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <PizzaCard pizza={pizza} />
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link to="/cardapio" className="btn btn-outline border-gray-300 text-text hover:border-primary hover:bg-primary hover:text-white">
              Ver todo o cardápio
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#F2EDE4]">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle title="O que dizem sobre nós" subtitle="Depoimentos" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white p-8 rounded-3xl shadow-sm relative"
              >
                <div className="flex gap-1 mb-6 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-8 italic text-lg leading-relaxed">"{testimonial.review}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <img src={testimonial.photo} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                  <div>
                    <h4 className="font-bold text-text font-accent">{testimonial.name}</h4>
                    <span className="text-sm text-gray-400">Cliente Local</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Baixe nosso app e ganhe <span className="text-accent">20% OFF</span> na primeira entrega!
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Disponível para iOS e Android. Acompanhe seu pedido em tempo real, junte pontos e troque por pizzas grátis.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-black hover:bg-gray-900 text-white rounded-xl px-8 py-4 flex items-center justify-center gap-3 transition-colors">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.19 2.31-.88 3.5-.8 1.53.11 2.76.67 3.53 1.76-2.91 1.72-2.39 5.82.72 6.96-.69 1.77-1.6 3.48-2.83 4.25zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-300">Baixar na</div>
                <div className="font-bold text-lg leading-none">App Store</div>
              </div>
            </button>
            <button className="bg-black hover:bg-gray-900 text-white rounded-xl px-8 py-4 flex items-center justify-center gap-3 transition-colors">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 15.341l-2.846-1.65a1.503 1.503 0 00-1.503 0l-2.845 1.65A1.5 1.5 0 009.578 16.64v3.3a1.5 1.5 0 001.5 1.5h1.845a1.5 1.5 0 001.5-1.5v-3.3a1.502 1.502 0 00-.751-1.3zm0 0M11.954 5.378l2.845 1.65a1.5 1.5 0 01.752 1.3v3.3a1.502 1.502 0 01-1.5 1.5h-1.846a1.502 1.502 0 01-1.5-1.5v-3.3a1.5 1.5 0 01.75-1.3l2.846-1.65c.46-.266.993-.266 1.453 0z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-300">Disponível no</div>
                <div className="font-bold text-lg leading-none">Google Play</div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-surface/90 backdrop-blur-md border-t border-gray-200 z-40 lg:hidden">
        <Link to="/cardapio" className="btn btn-primary w-full text-lg py-4 shadow-xl">
          Pedir Agora
        </Link>
      </div>
    </div>
  );
};
