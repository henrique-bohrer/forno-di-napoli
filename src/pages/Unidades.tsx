import { SectionTitle } from '../components/SectionTitle';
import { UnitCard } from '../components/UnitCard';

const units = [
  {
    name: 'Forno di Napoli — Curitiba Centro',
    address: 'Rua das Pizzas, 123 - Centro, Curitiba - PR',
    hours: 'Seg–Sex: 18h–23h | Sab–Dom: 17h–00h',
    phone: '(41) 3030-4041'
  },
  {
    name: 'Forno di Napoli — Curitiba Batel',
    address: 'Av. do Batel, 456 - Batel, Curitiba - PR',
    hours: 'Ter–Dom: 18h–00h',
    phone: '(41) 3030-4042'
  },
  {
    name: 'Forno di Napoli — São José dos Pinhais',
    address: 'Rua das Araucárias, 789 - Centro, SJP - PR',
    hours: 'Qua–Dom: 18h–23h',
    phone: '(41) 3030-4043'
  },
  {
    name: 'Forno di Napoli — Londrina',
    address: 'Av. Madre Leônia Milito, 101 - Gleba Palhano, Londrina - PR',
    hours: 'Ter–Dom: 18h–23h30',
    phone: '(43) 3333-4040'
  }
];

export const Unidades = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-theme">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle
          title="Nossas Unidades"
          subtitle="Onde nos encontrar"
        />
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
          Estamos presentes em 4 cidades do Paraná, sempre levando a autêntica experiência da pizza napolitana para mais perto de você.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {units.map((unit, idx) => (
            <UnitCard key={idx} {...unit} />
          ))}
        </div>
      </div>
    </div>
  );
};
