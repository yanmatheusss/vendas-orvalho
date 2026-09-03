import React from 'react';
import { STORE_CONFIG } from '../config';
import { MessageCircle, ShoppingBag, Truck, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';

interface WholesaleSectionProps {
  whatsappNumber: string;
}

export const WholesaleSection: React.FC<WholesaleSectionProps> = ({
  whatsappNumber,
}) => {
  const cleanPhone = whatsappNumber.replace(/\D/g, '');
  const wholesaleWhatsAppUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    STORE_CONFIG.revenda.mensagemWhatsapp
  )}`;

  return (
    <motion.section
      id="secao-revenda"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full max-w-4xl mx-auto my-10 sm:my-14 pt-6 border-t-2 border-dashed border-[#6D7833]/30"
    >
      <div className="bg-[#434F2A]/6 border border-[#6D7833]/30 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xs transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Text Content */}
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#B96940] bg-[#B96940]/10 px-3 py-1 rounded-full">
              <ShoppingBag size={13} /> Lojistas, Revendedores & Parcerias
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#434F2A]">
              {STORE_CONFIG.revenda.titulo}
            </h2>

            <p className="text-xs sm:text-sm text-[#434F2A]/85 leading-relaxed">
              {STORE_CONFIG.revenda.subtitulo}
            </p>

            {/* Quick Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-left">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#434F2A]">
                <Sparkles size={15} className="text-[#B96940] shrink-0" />
                <span>Condições e valores especiais no atacado</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#434F2A]">
                <Truck size={15} className="text-[#6D7833] shrink-0" />
                <span>Cotação de frete e prazos sob medida</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#434F2A]">
                <HeartHandshake size={15} className="text-[#B96940] shrink-0" />
                <span>Monte seu lote com as variedades que preferir</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#434F2A]">
                <ShieldCheck size={15} className="text-[#6D7833] shrink-0" />
                <span>Atendimento humanizado direto no WhatsApp</span>
              </div>
            </div>
          </div>

          {/* CTA Action Column */}
          <div className="flex flex-col items-center md:items-end justify-center shrink-0 w-full md:w-auto pt-2 md:pt-0">
            <a
              id="btn-whatsapp-revenda"
              href={wholesaleWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-extrabold text-xs sm:text-sm uppercase tracking-wider bg-[#B96940] hover:bg-[#a55a33] text-[#F4EEE1] shadow-md shadow-[#B96940]/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-center"
            >
              <MessageCircle size={19} className="shrink-0" />
              <span>Falar sobre Revenda no WhatsApp</span>
            </a>
            <span className="text-[11px] text-[#434F2A]/70 mt-2 font-medium text-center md:text-right">
              Defina quantidades, modelos e frete com nossa equipe
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
