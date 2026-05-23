import type { Pizza } from '../types';

export const pizzas: Pizza[] = [
  {
    id: '1',
    name: 'Margherita Clássica',
    description: 'Molho de tomate pelati, mozzarella de búfala fresca, manjericão e azeite extravirgem.',
    price: 68.00,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1469&auto=format&fit=crop',
    category: 'Tradicionais',
    badge: 'Mais Vendida'
  },
  {
    id: '2',
    name: 'Pepperoni Premium',
    description: 'Molho de tomate pelati, mozzarella, fatias generosas de pepperoni artesanal e orégano.',
    price: 75.00,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=1480&auto=format&fit=crop',
    category: 'Tradicionais',
    badge: 'Popular'
  },
  {
    id: '3',
    name: 'Quatro Queijos',
    description: 'Mozzarella, gorgonzola doce, provolone, parmesão ralado e toque de pimenta preta.',
    price: 82.00,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1470&auto=format&fit=crop',
    category: 'Tradicionais'
  },
  {
    id: '4',
    name: 'Napolitana',
    description: 'Molho de tomate pelati, alho assado em lâminas, orégano, azeitonas pretas e azeite.',
    price: 65.00,
    image: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?q=80&w=1470&auto=format&fit=crop',
    category: 'Tradicionais'
  },
  {
    id: '5',
    name: 'Funghi Trifolati',
    description: 'Mix de cogumelos frescos (shimeji, paris, portobello) salteados no azeite, mozzarella e alho-poró.',
    price: 88.00,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1381&auto=format&fit=crop',
    category: 'Vegetarianas',
    badge: 'Novidade'
  },
  {
    id: '6',
    name: 'Mozzarella di Bufala',
    description: 'Pesto de manjericão, mozzarella de búfala, tomatinhos confit e lascas de parmesão.',
    price: 85.00,
    image: 'https://images.unsplash.com/photo-1573821663912-6df460f9c684?q=80&w=1374&auto=format&fit=crop',
    category: 'Especiais'
  },
  {
    id: '7',
    name: 'Parma e Rúcula',
    description: 'Mozzarella, presunto cru (Parma), rúcula fresca, tomatinhos cereja e lascas de grana padano.',
    price: 98.00,
    image: 'https://images.unsplash.com/photo-1555072956-7758afb20e8f?q=80&w=1287&auto=format&fit=crop',
    category: 'Especiais',
    badge: 'Premium'
  },
  {
    id: '8',
    name: 'Caprese',
    description: 'Molho de tomate, fatias de tomate caqui, rodela de mozzarella de búfala, pesto de azeitona preta.',
    price: 78.00,
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a30536?q=80&w=1374&auto=format&fit=crop',
    category: 'Vegetarianas'
  },
  {
    id: '9',
    name: 'Abobrinha com Gorgonzola',
    description: 'Lâminas finas de abobrinha marinada no limão siciliano, gorgonzola doce e alho torrado.',
    price: 76.00,
    image: 'https://images.unsplash.com/photo-1541745537411-b8046f4d6567?q=80&w=1288&auto=format&fit=crop',
    category: 'Vegetarianas'
  },
  {
    id: '10',
    name: 'Trufada',
    description: 'Creme de ricota, mozzarella, cogumelos paris, finalizada com azeite de trufas brancas.',
    price: 110.00,
    image: 'https://images.unsplash.com/photo-1564936281291-294551497d81?q=80&w=1452&auto=format&fit=crop',
    category: 'Especiais'
  },
  {
    id: '11',
    name: 'Nutella com Morangos',
    description: 'Massa tradicional, generosa camada de Nutella, morangos frescos fatiados e leite em pó.',
    price: 70.00,
    image: 'https://images.unsplash.com/photo-1601314167099-232775b3eb51?q=80&w=1474&auto=format&fit=crop',
    category: 'Doces'
  },
  {
    id: '12',
    name: 'Doce de Leite e Nozes',
    description: 'Massa com borda fina, doce de leite argentino, nozes chilenas picadas e flor de sal.',
    price: 68.00,
    image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=1287&auto=format&fit=crop',
    category: 'Doces'
  }
];
