import { Link } from 'react-router-dom';
import { Flame, Instagram, Facebook, MessageCircle } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-secondary text-surface pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2">
              <Flame className="w-8 h-8 text-primary" />
              <span className="font-display font-bold text-2xl tracking-tight">Forno di Napoli</span>
            </Link>
            <p className="text-gray-400 font-body leading-relaxed mt-2">
              A autêntica experiência da pizza napolitana no Brasil. Massa de longa fermentação e ingredientes selecionados com amor.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-accent text-lg mb-6 uppercase tracking-wider text-accent">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><Link to="/cardapio" className="text-gray-400 hover:text-white transition-colors">Cardápio</Link></li>
              <li><Link to="/unidades" className="text-gray-400 hover:text-white transition-colors">Nossas Unidades</Link></li>
              <li><Link to="/trabalhe-conosco" className="text-gray-400 hover:text-white transition-colors">Trabalhe Conosco</Link></li>
              <li><Link to="/fale-conosco" className="text-gray-400 hover:text-white transition-colors">Fale Conosco</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-accent text-lg mb-6 uppercase tracking-wider text-accent">Contato</h4>
            <ul className="space-y-3 text-gray-400">
              <li>contato@fornodinapoli.com.br</li>
              <li>(41) 3030-4040</li>
              <li>Matriz: Curitiba, PR</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-accent text-lg mb-6 uppercase tracking-wider text-accent">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Forno di Napoli. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
