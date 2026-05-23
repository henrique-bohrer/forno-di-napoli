import { useState } from 'react';
import { Briefcase, MapPin, CheckCircle } from 'lucide-react';
import { Badge } from './Badge';

interface JobCardProps {
  title: string;
  location: string;
  type: string;
  description: string;
}

export const JobCard = ({ title, location, type, description }: JobCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <div className="bg-surface border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
        <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
          <div>
            <h3 className="font-display font-bold text-xl text-text mb-2">{title}</h3>
            <div className="flex flex-wrap gap-3 text-sm text-gray-500">
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {location}</span>
              <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {type}</span>
            </div>
          </div>
          <Badge variant="outline">Vaga Aberta</Badge>
        </div>
        <p className="text-gray-600 mb-6 line-clamp-2">{description}</p>
        <button onClick={() => setIsModalOpen(true)} className="btn btn-outline w-full sm:w-auto">
          Candidatar-se
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-surface rounded-2xl w-full max-w-lg p-6 md:p-8 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-display font-bold text-2xl">Candidatura</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-text text-2xl">&times;</button>
            </div>

            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="font-display text-xl font-bold mb-2">Candidatura Enviada!</h4>
                <p className="text-gray-600">Obrigado pelo interesse. Nossa equipe entrará em contato em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Vaga</label>
                  <input type="text" value={`${title} - ${location}`} disabled className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo *</label>
                  <input type="text" required className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">E-mail *</label>
                    <input type="email" required className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Telefone *</label>
                    <input type="tel" required className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn URL</label>
                  <input type="url" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Currículo (PDF) *</label>
                  <input type="file" accept=".pdf" required className="w-full p-3 border border-gray-200 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20" />
                </div>
                <button type="submit" className="btn btn-primary w-full mt-6">
                  Enviar Candidatura
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};
