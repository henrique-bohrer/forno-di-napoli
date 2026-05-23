import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';
import { PizzaCard } from '../components/PizzaCard';
import { pizzas } from '../data/pizzas';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = ['Todas', 'Tradicionais', 'Especiais', 'Vegetarianas', 'Doces'];

export const Cardapio = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todas');

  const filteredPizzas = useMemo(() => {
    return pizzas.filter((pizza) => {
      const matchesSearch = pizza.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            pizza.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'Todas' || pizza.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-theme">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle title="Nosso Cardápio" subtitle="Faça seu pedido" />

        {/* Search and Filters */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex overflow-x-auto w-full md:w-auto pb-2 md:pb-0 gap-2 hide-scrollbar">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full font-accent text-sm whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72 shrink-0">
            <input
              type="text"
              placeholder="Buscar pizza..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-transparent rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPizzas.length > 0 ? (
              filteredPizzas.map((pizza) => (
                <motion.div
                  key={pizza.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <PizzaCard pizza={pizza} />
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-20 text-center"
              >
                <p className="text-xl text-gray-500 font-accent">Nenhuma pizza encontrada para "{searchTerm}".</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('Todas');
                  }}
                  className="mt-4 text-primary hover:underline font-accent"
                >
                  Limpar busca
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
