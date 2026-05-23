import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-surface rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 text-center flex flex-col items-center justify-center h-full min-h-[400px]">
        <CheckCircle className="w-20 h-20 text-green-500 mb-6" />
        <h3 className="font-display font-bold text-3xl mb-4">Mensagem Enviada!</h3>
        <p className="text-gray-600 text-lg">
          Obrigado por entrar em contato. Responderemos em breve.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-surface rounded-2xl p-6 md:p-10 shadow-sm border border-gray-100">
      <h3 className="font-display font-bold text-2xl mb-8">Envie sua Mensagem</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-accent uppercase tracking-wider text-gray-500 mb-2">Nome Completo *</label>
          <input
            type="text"
            required
            className="w-full p-4 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            placeholder="Seu nome"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-accent uppercase tracking-wider text-gray-500 mb-2">E-mail *</label>
            <input
              type="email"
              required
              className="w-full p-4 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              placeholder="seu@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-accent uppercase tracking-wider text-gray-500 mb-2">Telefone</label>
            <input
              type="tel"
              className="w-full p-4 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              placeholder="(00) 00000-0000"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-accent uppercase tracking-wider text-gray-500 mb-2">Assunto *</label>
          <select
            required
            className="w-full p-4 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none"
          >
            <option value="" disabled selected>Selecione um assunto</option>
            <option value="duvida">Dúvida</option>
            <option value="elogio">Elogio</option>
            <option value="reclamacao">Reclamação</option>
            <option value="sugestao">Sugestão</option>
            <option value="outros">Outros</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-accent uppercase tracking-wider text-gray-500 mb-2">Mensagem *</label>
          <textarea
            required
            rows={5}
            className="w-full p-4 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
            placeholder="Como podemos ajudar?"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className={`btn btn-primary w-full text-lg ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {status === 'submitting' ? 'Enviando...' : 'Enviar Mensagem'}
        </button>
      </form>
    </div>
  );
};
