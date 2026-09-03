import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Sparkles, Calendar, Eye, EyeOff, Instagram, Clock } from 'lucide-react';
import { STORE_CONFIG } from '../config';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

// Data alvo de lançamento: 22 de Outubro de 2026 às 00:00:00
const TARGET_DATE = new Date('2026-10-22T00:00:00').getTime();

export const LaunchCountdownScreen: React.FC = () => {
  // Permite ao dono do site alternar a visualização para conferir o site sem editar código
  const [previewMode, setPreviewMode] = useState(false);

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = TARGET_DATE - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isComplete: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Bloqueia o scroll do body quando a tela de lançamento estiver ativa, evitando que o fundo vaze no celular
  useEffect(() => {
    if (!previewMode) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      const originalBg = document.body.style.backgroundColor;

      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.body.style.backgroundColor = '#F4EEE1';

      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
        document.body.style.backgroundColor = originalBg;
      };
    }
  }, [previewMode]);

  const whatsappMessage = encodeURIComponent(
    'Olá! Vi a contagem regressiva para a nova logo e novo catálogo de sabonetes artesanais e gostaria de receber novidades e tirar dúvidas!'
  );
  const whatsappUrl = `https://wa.me/${STORE_CONFIG.whatsapp.numero}?text=${whatsappMessage}`;

  // Se o usuário clicar em "Ver prévia do site", ocultamos a tela e mostramos apenas uma barra flutuante discreta
  if (previewMode) {
    return (
      <div data-launch-screen="true" className="fixed bottom-4 right-4 z-50">
        <button
          type="button"
          onClick={() => setPreviewMode(false)}
          className="flex items-center gap-2 bg-[#434F2A] hover:bg-[#343e20] text-[#F4EEE1] px-4 py-2.5 rounded-full text-xs font-semibold shadow-xl border border-[#F4EEE1]/30 transition-all hover:scale-105 cursor-pointer"
        >
          <EyeOff size={15} className="text-[#B96940]" />
          <span>Voltar à tela de lançamento</span>
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Estilos isolados para garantir que nada da página de baixo vaze ou borre no celular */}
      <style>{`
        html, body {
          overflow: hidden !important;
          height: 100% !important;
          background-color: #F4EEE1 !important;
          overscroll-behavior: none !important;
        }
        #root > div > *:not([data-launch-screen]) {
          display: none !important;
        }
      `}</style>

      <div
        data-launch-screen="true"
        className="fixed inset-0 z-[9999] overflow-y-auto overscroll-none bg-[#F4EEE1] text-[#434F2A] w-full min-h-[100dvh] h-[100dvh] selection:bg-[#6D7833]/30"
        style={{
          backgroundColor: '#F4EEE1',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <div className="min-h-[100dvh] w-full flex flex-col justify-between bg-[#F4EEE1]">
          {/* Faixa superior discreta */}
          <header className="w-full bg-[#434F2A] text-[#F4EEE1] py-2.5 px-4 text-center shrink-0">
            <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 text-xs font-medium">
              <Sparkles size={14} className="text-[#B96940]" />
              <span>Grande Lançamento • Nova Identidade Visual e Sabonetes Artesanais</span>
            </div>
          </header>

          {/* Conteúdo Principal Centralizado */}
          <main className="flex-1 flex flex-col items-center justify-center px-4 py-8 sm:py-12 max-w-3xl mx-auto text-center w-full bg-[#F4EEE1]">
          {/* Selo de anúncio */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#6D7833]/15 text-[#434F2A] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-5 border border-[#6D7833]/25"
          >
            <Calendar size={14} className="text-[#B96940]" />
            <span>22 de Outubro de 2026</span>
          </motion.div>

          {/* Título Principal em Syne */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif-brand text-[#434F2A] tracking-tight leading-tight max-w-2xl"
          >
            Algo especial e botânico está sendo preparado
          </motion.h1>

          {/* Texto de Apoio em Poppins */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 text-base sm:text-lg text-[#434F2A]/85 max-w-xl mx-auto leading-relaxed font-sans"
          >
            Estamos finalizando os detalhes da nossa <strong className="font-semibold text-[#434F2A]">nova logomarca</strong>, 
            identidade visual e a coleção de <strong className="font-semibold text-[#434F2A]">sabonetes artesanais naturais</strong> enriquecidos com bioativos nobres da Amazônia.
          </motion.p>

          {/* Bloco da Contagem Regressiva */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 sm:mt-10 w-full max-w-xl"
          >
            <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-[#6D7833] uppercase tracking-widest mb-3">
              <Clock size={13} className="text-[#B96940]" />
              <span>Contagem regressiva para a estreia</span>
            </div>

            <div className="grid grid-cols-4 gap-2 sm:gap-4">
              {/* Dias */}
              <div className="bg-[#434F2A] text-[#F4EEE1] rounded-2xl p-3 sm:p-5 shadow-lg border border-[#434F2A] flex flex-col items-center justify-center">
                <span className="text-2xl sm:text-4xl md:text-5xl font-black font-serif-brand tracking-tight">
                  {String(timeLeft.days).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-[#F4EEE1]/70 mt-1">
                  Dias
                </span>
              </div>

              {/* Horas */}
              <div className="bg-[#434F2A] text-[#F4EEE1] rounded-2xl p-3 sm:p-5 shadow-lg border border-[#434F2A] flex flex-col items-center justify-center">
                <span className="text-2xl sm:text-4xl md:text-5xl font-black font-serif-brand tracking-tight">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-[#F4EEE1]/70 mt-1">
                  Horas
                </span>
              </div>

              {/* Minutos */}
              <div className="bg-[#434F2A] text-[#F4EEE1] rounded-2xl p-3 sm:p-5 shadow-lg border border-[#434F2A] flex flex-col items-center justify-center">
                <span className="text-2xl sm:text-4xl md:text-5xl font-black font-serif-brand tracking-tight">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-[#F4EEE1]/70 mt-1">
                  Minutos
                </span>
              </div>

              {/* Segundos */}
              <div className="bg-[#B96940] text-white rounded-2xl p-3 sm:p-5 shadow-lg border border-[#B96940] flex flex-col items-center justify-center">
                <span className="text-2xl sm:text-4xl md:text-5xl font-black font-serif-brand tracking-tight">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-white/80 mt-1">
                  Segundos
                </span>
              </div>
            </div>
          </motion.div>

          {/* Ações e Contato */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-[#434F2A] hover:bg-[#343e20] text-[#F4EEE1] px-6 py-3.5 rounded-full font-semibold text-sm transition-all hover:shadow-md active:scale-95 cursor-pointer"
            >
              <MessageCircle size={18} className="text-[#B96940]" />
              <span>Fale Conosco no WhatsApp</span>
            </a>

            {STORE_CONFIG.rodape.instagram && (
              <a
                href={`https://instagram.com/${STORE_CONFIG.rodape.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/70 hover:bg-white text-[#434F2A] border border-[#6D7833]/30 px-5 py-3.5 rounded-full font-semibold text-sm transition-all hover:shadow-xs active:scale-95"
              >
                <Instagram size={17} className="text-[#B96940]" />
                <span>{STORE_CONFIG.rodape.instagram}</span>
              </a>
            )}
          </motion.div>

          {/* Botão de Prévia para o Dono do Site */}
          <div className="mt-8 pt-4 border-t border-[#6D7833]/15 w-full max-w-sm">
            <button
              type="button"
              onClick={() => setPreviewMode(true)}
              className="inline-flex items-center gap-1.5 text-xs text-[#434F2A]/60 hover:text-[#434F2A] transition-colors cursor-pointer py-1 px-3 rounded-full hover:bg-[#6D7833]/10"
              title="Permite navegar pelo site completo para conferir o visual e funcionamento"
            >
              <Eye size={14} />
              <span>Ver prévia do site completo</span>
            </button>
          </div>
        </main>

          {/* Rodapé da tela de lançamento com safe-area para celulares */}
          <footer className="w-full py-4 pb-[max(1.5rem,calc(env(safe-area-inset-bottom)+1.25rem))] text-center text-xs text-[#434F2A]/60 px-4 bg-[#F4EEE1] shrink-0">
            <p>Orvalho da Amazônia • Produção Artesanal e Sustentável</p>
          </footer>
        </div>
      </div>
    </>
  );
};
