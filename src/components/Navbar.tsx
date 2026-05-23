import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Flame, Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { AnimatePresence, motion } from 'framer-motion';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount, setIsCartOpen } = useCart();
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Cardápio', path: '/cardapio' },
    { name: 'Unidades', path: '/unidades' },
    { name: 'Fale Conosco', path: '/fale-conosco' },
    { name: 'Trabalhe Conosco', path: '/trabalhe-conosco' },
  ];

  const headerClasses = `fixed w-full z-40 transition-all duration-300 ${
    isScrolled || !isHome
      ? 'bg-surface/95 backdrop-blur-md shadow-sm text-text py-3'
      : 'bg-transparent text-surface py-5'
  }`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Flame className={`w-8 h-8 ${isScrolled || !isHome ? 'text-primary' : 'text-accent'} group-hover:scale-110 transition-transform`} />
          <span className="font-display font-bold text-2xl tracking-tight">Forno di Napoli</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-accent text-sm uppercase tracking-wider hover:text-accent transition-colors ${
                location.pathname === link.path ? 'text-accent font-medium' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 hover:bg-black/5 rounded-full transition-colors"
            aria-label="Open cart"
          >
            <ShoppingBag className="w-6 h-6" />
            {itemCount > 0 && (
              <span className="absolute top-0 right-0 w-5 h-5 bg-primary text-white text-xs flex items-center justify-center rounded-full font-accent">
                {itemCount}
              </span>
            )}
          </button>
          <Link to="/cardapio" className="btn btn-primary text-sm px-5 py-2.5">
            Pedir Agora
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center gap-4">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2"
          >
            <ShoppingBag className="w-6 h-6" />
            {itemCount > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-white text-[10px] flex items-center justify-center rounded-full font-accent">
                {itemCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-surface z-50 flex flex-col lg:hidden shadow-2xl"
            >
              <div className="flex justify-between items-center p-6 border-b border-gray-100 text-text">
                <div className="flex items-center gap-2">
                  <Flame className="w-6 h-6 text-primary" />
                  <span className="font-display font-bold text-xl">Forno di Napoli</span>
                </div>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex flex-col p-6 gap-4 text-text">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-accent text-lg uppercase tracking-wide py-2 border-b border-gray-50"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto p-6 text-text">
                <Link
                  to="/cardapio"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn btn-primary w-full"
                >
                  Pedir Agora
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
