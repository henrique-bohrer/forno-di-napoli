import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';
import { ContactForm } from '../components/ContactForm';
import { motion } from 'framer-motion';

export const FaleConosco = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2574&auto=format&fit=crop"
            alt="Restaurant interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white mt-16 px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">Fale Conosco</h1>
            <p className="font-body text-xl text-gray-200">Estamos aqui para ouvir você.</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-theme flex-grow">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <SectionTitle title="Entre em Contato" subtitle="Atendimento" centered={false} />
              <p className="text-gray-600 mb-10 text-lg">
                Tem alguma dúvida, sugestão ou elogio? Utilize os canais abaixo ou preencha o formulário para falar com nossa equipe.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-accent font-bold text-lg mb-1">E-mail</h4>
                    <a href="mailto:contato@fornodinapoli.com.br" className="text-gray-600 hover:text-primary transition-colors">
                      contato@fornodinapoli.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-accent font-bold text-lg mb-1">Telefone</h4>
                    <p className="text-gray-600 font-accent tracking-wide">(41) 3030-4040</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-[#25D366]/10 rounded-2xl flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div>
                    <h4 className="font-accent font-bold text-lg mb-1">WhatsApp</h4>
                    <a
                      href="https://wa.me/5541999990000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#25D366] transition-colors font-accent tracking-wide"
                    >
                      (41) 99999-0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-accent font-bold text-lg mb-1">Sede Administrativa</h4>
                    <p className="text-gray-600">Curitiba, PR<br/>Segunda a Sexta, das 9h às 18h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
