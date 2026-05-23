export interface Pizza {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'Tradicionais' | 'Especiais' | 'Vegetarianas' | 'Doces';
  badge?: string;
}

export interface CartItem {
  pizza: Pizza;
  size: 'P' | 'M' | 'G';
  quantity: number;
}
