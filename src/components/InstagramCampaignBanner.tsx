import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Calendar, Sparkles, ExternalLink } from 'lucide-react';
import { STORE_CONFIG } from '../config';

export const InstagramCampaignBanner: React.FC = () => {
  const instagramHandle = STORE_CONFIG.rodape.instagram.replace('@', '');
  const instagramUrl = `https://www.instagram.com/${instagramHandle}/`;

  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full max-w-4xl mx-auto my-4 sm:my-6 px-2 sm:px-0"
      aria-label="Acompanhe as postagens no Instagram Oficial"
    >
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#434F2A] via-[#35401F] to-[#2B3519] text-[#F4EEE1] p-5 sm:p-7 shadow-lg border border-[#6D7833]/40">
        {/* Efeito decorativo sutil de fundo */}
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#B96940]/15 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[#6D7833]/25 blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
          {/* Lado Esquerdo: Datas e Chamada */}
          <div className="flex-1 space-y-2.5">
            {/* Tag de Destaque com Ícone de Calendário e Faixa de Datas */}
            <div className="inline-flex items-center gap-2 bg-[#B96940] text-[#F4EEE1] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-xs">
              <Calendar size={13} className="shrink-0" />
              <span>22 a 30 de Outubro</span>
              <Sparkles size={13} className="shrink-0" />
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif-brand tracking-tight leading-snug">
              Acompanhe as postagens no nosso Instagram oficial!
            </h3>

            <p className="text-xs sm:text-sm md:text-base text-[#F4EEE1]/90 max-w-2xl leading-relaxed">
              Durante os dias <strong>22 a 30 de outubro</strong>, confira publicações exclusivas com a apresentação de cada sabonete artesanal, nossos bioativos da Amazônia e os bastidores da nova identidade visual.
            </p>
          </div>

          {/* Lado Direito: Botão de Ação Direta para o Instagram */}
          <div className="shrink-0 w-full md:w-auto flex flex-col sm:flex-row md:flex-col items-center justify-center gap-2.5">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#B96940] via-[#c77348] to-[#B96940] hover:from-[#a75d37] hover:to-[#a75d37] text-[#F4EEE1] px-6 py-3.5 rounded-full font-bold text-sm sm:text-base tracking-wide shadow-md hover:shadow-lg transition-all transform active:scale-95 group"
            >
              <Instagram size={20} className="transition-transform group-hover:scale-110" />
              <span>Acompanhar no Instagram</span>
              <ExternalLink size={15} className="opacity-80" />
            </a>

            <span className="text-[11px] sm:text-xs text-[#F4EEE1]/75 tracking-wider font-medium">
              {STORE_CONFIG.rodape.instagram}
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
