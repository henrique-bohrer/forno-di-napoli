import { MapPin, Clock, Phone, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface UnitCardProps {
  name: string;
  address: string;
  hours: string;
  phone: string;
}

export const UnitCard = ({ name, address, hours, phone }: UnitCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-surface rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg border border-gray-100 transition-all"
    >
      <h3 className="font-display font-bold text-2xl text-text mb-6">{name}</h3>

      <div className="space-y-4 mb-8">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <p className="text-gray-600 leading-relaxed">{address}</p>
        </div>
        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <p className="text-gray-600">{hours}</p>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-primary shrink-0" />
          <p className="text-gray-600 font-accent tracking-wider">{phone}</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline flex-1 flex items-center justify-center gap-2"
        >
          <ExternalLink className="w-4 h-4" />
          Ver no Mapa
        </a>
        <a href="/cardapio" className="btn btn-primary flex-1 text-center">
          Pedir Delivery
        </a>
      </div>
    </motion.div>
  );
};
