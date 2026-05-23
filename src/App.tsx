import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';

import { Home } from './pages/Home';
import { Cardapio } from './pages/Cardapio';
import { Unidades } from './pages/Unidades';
import { FaleConosco } from './pages/FaleConosco';
import { TrabalheConosco } from './pages/TrabalheConosco';
import ScrollToTop from './components/ScrollToTop';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col relative font-body text-text">
    <div className="grain-overlay"></div>
    <Navbar />
    <main className="flex-grow">{children}</main>
    <Footer />
    <CartDrawer />
  </div>
);

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cardapio" element={<Cardapio />} />
            <Route path="/unidades" element={<Unidades />} />
            <Route path="/fale-conosco" element={<FaleConosco />} />
            <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
