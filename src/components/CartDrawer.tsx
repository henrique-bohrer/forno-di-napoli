import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

export const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, total } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCartOpen(false);
    // In a real app, this would navigate to a checkout page
    alert('Redirecionando para finalização do pedido...');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-surface z-50 flex flex-col shadow-2xl"
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-primary" />
                <h2 className="font-display font-bold text-2xl text-text">Seu Pedido</h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-text"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center text-gray-500 space-y-4">
                  <ShoppingBag className="w-16 h-16 text-gray-200" />
                  <p className="text-lg">Seu carrinho está vazio.</p>
                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      navigate('/cardapio');
                    }}
                    className="btn btn-outline"
                  >
                    Ver Cardápio
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={`${item.pizza.id}-${item.size}`} className="flex gap-4 pb-6 border-b border-gray-50 last:border-0 last:pb-0">
                    <img
                      src={item.pizza.image}
                      alt={item.pizza.name}
                      className="w-20 h-20 object-cover rounded-xl"
                    />
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-text">{item.pizza.name}</h4>
                        <button
                          onClick={() => removeFromCart(item.pizza.id, item.size)}
                          className="text-gray-400 hover:text-primary transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-sm text-gray-500 font-accent uppercase tracking-wider mb-2">
                        Tamanho {item.size}
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                          <button
                            onClick={() => updateQuantity(item.pizza.id, item.size, item.quantity - 1)}
                            className="p-1 hover:bg-white rounded shadow-sm text-gray-600"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-accent w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.pizza.id, item.size, item.quantity + 1)}
                            className="p-1 hover:bg-white rounded shadow-sm text-gray-600"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <span className="font-accent font-bold text-primary">
                          R$ {(item.pizza.price * item.quantity).toFixed(2).replace('.', ',')}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 bg-gray-50 border-t border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-600 font-accent uppercase tracking-wider">Subtotal</span>
                  <span className="font-display font-bold text-2xl text-text">
                    R$ {total.toFixed(2).replace('.', ',')}
                  </span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="btn btn-primary w-full text-lg shadow-xl shadow-primary/20"
                >
                  Finalizar Pedido
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
