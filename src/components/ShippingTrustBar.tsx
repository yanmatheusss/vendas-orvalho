import React, { useState, useEffect } from 'react';
import { ShieldCheck, Truck, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const HIGHLIGHTS = [
  {
    id: 'segura',
    title: 'Compra Segura',
    mobileTitle: 'Compra Segura',
    subtitle: 'Atendimento direto pelo WhatsApp',
    icon: ShieldCheck,
    iconColor: '#434F2A',
    iconBg: 'bg-[#6D7833]/15',
  },
  {
    id: 'envio',
    title: 'Enviamos p/ Todo Brasil',
    mobileTitle: 'Enviamos p/ Todo Brasil',
    subtitle: 'Consulte frete para sua cidade',
    icon: Truck,
    iconColor: '#B96940',
    iconBg: 'bg-[#B96940]/15',
  },
  {
    id: 'entrega-sabados',
    title: 'Entrega Grátis aos Sábados',
    mobileTitle: 'Grátis para OPO - RO',
    subtitle: 'Para Ouro Preto do Oeste - RO',
    icon: MapPin,
    iconColor: '#434F2A',
    iconBg: 'bg-[#434F2A]/15',
    isAccent: true,
  },
];

export const ShippingTrustBar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto rotation
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HIGHLIGHTS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentItem = HIGHLIGHTS[activeIndex];
  const CurrentIcon = currentItem.icon;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev === 0 ? HIGHLIGHTS.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % HIGHLIGHTS.length);
  };

  return (
    <motion.section
      aria-label="Informações de Entrega e Segurança"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full max-w-4xl mx-auto mb-4 sm:mb-6"
    >
      {/* ========================================================
          DESKTOP VIEW: ULTRA SLIM & REFINADO
          - Altura reduzida e compacta
          - 3 itens em linha única com divisores elegantes
         ======================================================== */}
      <div className="hidden md:flex items-center justify-between bg-white/70 backdrop-blur-xs border border-[#6D7833]/20 rounded-full px-5 py-2 shadow-2xs">
        {/* Item 1: Compra Segura */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#6D7833]/15 text-[#434F2A] flex items-center justify-center shrink-0">
            <ShieldCheck size={14} className="text-[#434F2A]" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#434F2A]">
            Compra Segura
          </span>
          <span className="text-[11px] text-[#434F2A]/70">
            • Atendimento direto no WhatsApp
          </span>
        </div>

        <div className="h-4 w-px bg-[#6D7833]/20" />

        {/* Item 2: Enviamos p/ Todo Brasil */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#B96940]/15 text-[#B96940] flex items-center justify-center shrink-0">
            <Truck size={14} className="text-[#B96940]" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#434F2A]">
            Enviamos p/ Todo Brasil
          </span>
          <span className="text-[11px] text-[#434F2A]/70">
            • Consulte o frete
          </span>
        </div>

        <div className="h-4 w-px bg-[#6D7833]/20" />

        {/* Item 3: Entrega Grátis */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#434F2A]/15 text-[#434F2A] flex items-center justify-center shrink-0">
            <MapPin size={14} className="text-[#434F2A]" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#434F2A]">
            Entrega Grátis aos Sábados
          </span>
          <span className="text-[11px] text-[#B96940] font-semibold">
            • Ouro Preto do Oeste
          </span>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW: ULTRA SLIM (FAIXA COMPACTA COM CARROSSEL)
          - Ocupa pouquíssima altura vertical na tela
          - Transição suave entre os itens
         ======================================================== */}
      <div
        className="md:hidden bg-white/75 backdrop-blur-md border border-[#6D7833]/20 rounded-full px-2 py-1.5 shadow-2xs flex items-center justify-between gap-1"
        onTouchStart={() => setIsAutoPlaying(false)}
      >
        {/* Seta Esquerda Compacta */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Item anterior"
          className="w-7 h-7 rounded-full flex items-center justify-center text-[#434F2A]/70 hover:text-[#434F2A] hover:bg-[#6D7833]/10 active:scale-90 transition-all shrink-0"
        >
          <ChevronLeft size={16} />
        </button>

        {/* Conteúdo Central Slim em Linha */}
        <div className="flex-1 min-w-0 overflow-hidden px-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentItem.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="flex items-center justify-center gap-2 text-center"
            >
              <div
                className={`w-6 h-6 rounded-full ${currentItem.iconBg} flex items-center justify-center shrink-0`}
              >
                <CurrentIcon size={14} style={{ color: currentItem.iconColor }} />
              </div>
              <div className="min-w-0 truncate text-center">
                <span className={`text-xs font-bold uppercase tracking-wider ${
                  currentItem.isAccent ? 'text-[#B96940]' : 'text-[#434F2A]'
                }`}>
                  {currentItem.mobileTitle}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Seta Direita Compacta */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Próximo item"
          className="w-7 h-7 rounded-full flex items-center justify-center text-[#434F2A]/70 hover:text-[#434F2A] hover:bg-[#6D7833]/10 active:scale-90 transition-all shrink-0"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </motion.section>
  );
};
