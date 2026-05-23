import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import type { Pizza } from '../types';
import { Badge } from './Badge';

export const PizzaCard = ({ pizza }: { pizza: Pizza }) => {
  const [selectedSize, setSelectedSize] = useState<'P' | 'M' | 'G'>('M');
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(pizza, selectedSize);
  };

  // Base price adjustment based on size
  const priceMultiplier = { P: 0.8, M: 1, G: 1.3 };
  const displayPrice = pizza.price * priceMultiplier[selectedSize];

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border border-gray-100 group flex flex-col h-full"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={pizza.image}
          alt={pizza.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        {pizza.badge && (
          <div className="absolute top-4 left-4">
            <Badge variant="accent">{pizza.badge}</Badge>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display font-bold text-xl text-text">{pizza.name}</h3>
        </div>
        <p className="text-gray-500 text-sm mb-6 line-clamp-2 flex-grow">{pizza.description}</p>

        <div className="flex gap-2 mb-6">
          {(['P', 'M', 'G'] as const).map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-10 h-10 rounded-full font-accent text-sm transition-colors ${
                selectedSize === size
                  ? 'bg-secondary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 uppercase tracking-wider font-accent">A partir de</span>
            <span className="font-accent font-bold text-2xl text-primary">
              R$ {displayPrice.toFixed(2).replace('.', ',')}
            </span>
          </div>
          <button
            onClick={handleAdd}
            className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-[#A93226] transition-colors shadow-md hover:shadow-lg"
            aria-label={`Adicionar ${pizza.name} ao carrinho`}
          >
            <Plus className="w-6 h-6" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
