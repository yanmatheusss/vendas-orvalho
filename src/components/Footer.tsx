import React from 'react';
import { STORE_CONFIG } from '../config';
import { MessageCircle, Instagram, Clock, Truck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const whatsappNumber = STORE_CONFIG.whatsapp.numero.replace(/\D/g, '');
  const contactWhatsAppUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Olá! Gostaria de tirar dúvidas sobre os sabonetes artesanais.'
  )}`;

  return (
    <footer id="footer-section" className="w-full bg-[#434F2A] text-[#F4EEE1] pt-12 pb-8 px-4 sm:px-6 md:px-12 mt-12">
      <div className="max-w-4xl mx-auto">
        {/* Top Header inside Footer */}
        <div className="border-b border-[#F4EEE1]/20 pb-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B96940] block mb-1">
                Ateliê da Amazônia
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-wide uppercase font-serif-brand">
                {STORE_CONFIG.rodape.titulo}
              </h3>
              <p className="text-xs sm:text-sm text-[#F4EEE1]/80 max-w-xl mt-2 leading-relaxed">
                {STORE_CONFIG.rodape.descricao}
              </p>
            </div>

            {/* Quick WhatsApp Contact in Footer */}
            <a
              id="footer-whatsapp-btn"
              href={contactWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#B96940] hover:bg-[#a55a33] text-[#F4EEE1] px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md shrink-0"
            >
              <MessageCircle size={16} /> Falar no WhatsApp
            </a>
          </div>
        </div>

        {/* Quick Highlights / Info Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-4 text-xs sm:text-sm border-b border-[#F4EEE1]/15 mb-8">
          <a
            href={`https://www.instagram.com/${STORE_CONFIG.rodape.instagram.replace('@', '')}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group hover:opacity-90 transition-opacity"
          >
            <div className="w-9 h-9 rounded-full bg-[#6D7833]/40 group-hover:bg-[#B96940] transition-colors flex items-center justify-center shrink-0">
              <Instagram size={18} className="text-[#F4EEE1]" />
            </div>
            <div>
              <p className="font-semibold group-hover:text-[#B96940] transition-colors">Instagram Oficial</p>
              <span className="text-[#F4EEE1]/80 underline decoration-[#B96940]/40 underline-offset-2">
                {STORE_CONFIG.rodape.instagram}
              </span>
            </div>
          </a>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#6D7833]/40 flex items-center justify-center shrink-0">
              <Clock size={18} className="text-[#F4EEE1]" />
            </div>
            <div>
              <p className="font-semibold">Atendimento</p>
              <span className="text-[#F4EEE1]/70">{STORE_CONFIG.rodape.horarioAtendimento}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#6D7833]/40 flex items-center justify-center shrink-0">
              <Truck size={18} className="text-[#F4EEE1]" />
            </div>
            <div>
              <p className="font-semibold">Entregas</p>
              <span className="text-[#F4EEE1]/70">{STORE_CONFIG.rodape.localizacao}</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F4EEE1]/60 text-center sm:text-left">
          <p>{STORE_CONFIG.rodape.direitos}</p>
          <p className="flex items-center gap-1">
            Produzido artesanalmente com amor <Heart size={12} className="text-[#B96940] inline fill-current" />
          </p>
        </div>
      </div>
    </footer>
  );
};
