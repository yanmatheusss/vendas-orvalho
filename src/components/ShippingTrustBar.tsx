import React, { useState, useEffect } from 'react';
import { ShieldCheck, Truck, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const HIGHLIGHTS = [
  {
    id: 'segura',
    title: 'Compra Segura',
    subtitle: 'Atendimento direto e confiável pelo WhatsApp',
    icon: ShieldCheck,
    iconColor: '#434F2A',
    iconBg: 'bg-[#6D7833]/15',
  },
  {
    id: 'envio',
    title: 'Enviamos p/ Todo Brasil',
    subtitle: 'Consulte frete e prazos para a sua cidade',
    icon: Truck,
    iconColor: '#B96940',
    iconBg: 'bg-[#B96940]/15',
  },
  {
    id: 'entrega-sabados',
    title: 'Entrega Grátis aos Sábados',
    subtitle: 'Exclusivo para Ouro Preto do Oeste - RO',
    icon: MapPin,
    iconColor: '#434F2A',
    iconBg: 'bg-[#434F2A]/15',
    isAccent: true,
  },
];

export const ShippingTrustBar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto rotation with comfortable time
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HIGHLIGHTS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentItem = HIGHLIGHTS[activeIndex];
  const CurrentIcon = currentItem.icon;

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev === 0 ? HIGHLIGHTS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % HIGHLIGHTS.length);
  };

  return (
    <motion.section
      aria-label="Informações de Entrega e Segurança"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full max-w-4xl mx-auto mb-8 sm:mb-12"
    >
      {/* ========================================================
          DESKTOP VIEW: Mantido exatamente com a estrutura perfeita
         ======================================================== */}
      <div className="hidden md:block bg-white/60 backdrop-blur-xs border border-[#6D7833]/25 rounded-2xl p-4 sm:p-5 shadow-xs">
        <div className="grid grid-cols-3 gap-4 divide-x divide-[#6D7833]/20">
          {/* Item 1: Compra Segura */}
          <div className="flex items-center gap-3.5 pr-2">
            <div className="w-10 h-10 rounded-xl bg-[#6D7833]/15 text-[#434F2A] flex items-center justify-center shrink-0">
              <ShieldCheck size={20} className="text-[#434F2A]" />
            </div>
            <div className="min-w-0">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#434F2A]">
                Compra Segura
              </h3>
              <p className="text-[11px] text-[#434F2A]/75 leading-tight mt-0.5">
                Atendimento direto e confiável pelo WhatsApp
              </p>
            </div>
          </div>

          {/* Item 2: Envio para todo o Brasil */}
          <div className="flex items-center gap-3.5 pl-4 pr-2">
            <div className="w-10 h-10 rounded-xl bg-[#B96940]/15 text-[#B96940] flex items-center justify-center shrink-0">
              <Truck size={20} className="text-[#B96940]" />
            </div>
            <div className="min-w-0">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#434F2A]">
                Enviamos p/ Todo Brasil
              </h3>
              <p className="text-[11px] text-[#434F2A]/75 leading-tight mt-0.5">
                Entre em contato para saber o valor do frete
              </p>
            </div>
          </div>

          {/* Item 3: Entrega Grátis aos Sábados */}
          <div className="flex items-center gap-3.5 pl-4">
            <div className="w-10 h-10 rounded-xl bg-[#434F2A]/15 text-[#434F2A] flex items-center justify-center shrink-0">
              <MapPin size={20} className="text-[#434F2A]" />
            </div>
            <div className="min-w-0">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#434F2A]">
                Entrega Grátis aos Sábados
              </h3>
              <p className="text-[11px] text-[#B96940] font-semibold leading-tight mt-0.5">
                Para Ouro Preto do Oeste - RO
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW: TOTALMENTE DESAFOGADO E ESPAÇOSO
          - O texto agora tem 100% da largura livre para respirar
          - Sem tags comprimindo o título "Entrega Grátis aos Sábados"
          - Tipografia limpa, fluida e com espaçamento harmônico
         ======================================================== */}
      <div
        className="md:hidden bg-white/80 backdrop-blur-md border border-[#6D7833]/25 rounded-3xl p-5 shadow-sm transition-all duration-300"
        onTouchStart={() => setIsAutoPlaying(false)}
        onMouseEnter={() => setIsAutoPlaying(false)}
      >
        {/* Main Content Area */}
        <div className="min-h-[86px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentItem.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="flex items-center gap-4 w-full"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-2xl ${currentItem.iconBg} flex items-center justify-center shrink-0 shadow-xs`}
              >
                <CurrentIcon size={24} style={{ color: currentItem.iconColor }} />
              </div>

              {/* Text content - completely unconstrained and free to breathe */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-extrabold uppercase tracking-wide text-[#434F2A] leading-snug">
                  {currentItem.title}
                </h3>
                <p
                  className={`text-xs sm:text-sm mt-1 leading-relaxed ${
                    currentItem.isAccent
                      ? 'text-[#B96940] font-semibold'
                      : 'text-[#434F2A]/85 font-normal'
                  }`}
                >
                  {currentItem.subtitle}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desafogado Navigation Bar */}
        <div className="flex items-center justify-between pt-3.5 mt-2 border-t border-[#6D7833]/15">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Benefício anterior"
            className="flex items-center gap-1 text-xs font-semibold text-[#434F2A]/70 hover:text-[#434F2A] active:scale-95 transition-all py-1 px-2 rounded-lg"
          >
            <ChevronLeft size={16} />
            <span>Anterior</span>
          </button>

          {/* Center Pill Indicators */}
          <div className="flex items-center gap-2">
            {HIGHLIGHTS.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setIsAutoPlaying(false);
                  setActiveIndex(idx);
                }}
                aria-label={`Ir para ${item.title}`}
                className="py-1.5 px-1 focus:outline-hidden"
              >
                <span
                  className={`block h-2 rounded-full transition-all duration-300 ${
                    activeIndex === idx
                      ? 'w-6 bg-[#B96940] shadow-xs'
                      : 'w-2 bg-[#6D7833]/25 hover:bg-[#6D7833]/50'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Próximo benefício"
            className="flex items-center gap-1 text-xs font-semibold text-[#434F2A]/70 hover:text-[#434F2A] active:scale-95 transition-all py-1 px-2 rounded-lg"
          >
            <span>Próximo</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </motion.section>
  );
};
