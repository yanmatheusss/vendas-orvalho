import React from 'react';
import { Product } from '../types';
import { STORE_CONFIG } from '../config';
import { MessageCircle, CheckCircle2, Clock } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductItemProps {
  product: Product;
  index: number;
}

export const ProductItem: React.FC<ProductItemProps> = ({
  product,
  index,
}) => {
  // Alternating wireframe layout:
  // Even index (0, 2): Text on left, Image on right
  // Odd index (1, 3): Image on left, Text on right
  const isImageOnLeft = index % 2 === 1;

  // Build WhatsApp message
  const whatsappNumber = STORE_CONFIG.whatsapp.numero.replace(/\D/g, '');
  const rawMessage = product.disponivel
    ? STORE_CONFIG.whatsapp.mensagemPadrao
        .replace('{NOME}', product.nome)
        .replace('{PRECO}', product.preco)
    : STORE_CONFIG.whatsapp.mensagemIndisponivel
        .replace('{NOME}', product.nome);

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(rawMessage)}`;

  // Column with Product Name and Description
  const TextContent = (
    <div className="flex flex-col justify-center space-y-3 md:space-y-4 px-1 sm:px-4 text-center md:text-left">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
        <h2
          id={`product-title-${product.id}`}
          className="text-lg sm:text-xl md:text-2xl font-bold tracking-wider uppercase text-[#434F2A] leading-snug"
        >
          {product.nome}
        </h2>
      </div>

      <p className="text-sm sm:text-base text-[#434F2A]/85 leading-relaxed font-normal">
        {product.descricao}
      </p>

      {/* Meta info: Peso & Aroma */}
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 pt-1 text-xs sm:text-sm">
        {product.peso && (
          <span className="text-[#434F2A] font-semibold bg-[#434F2A]/10 px-2.5 py-1 rounded-md text-xs">
            {product.peso}
          </span>
        )}
        {product.aroma && (
          <span className="text-[#6D7833] text-xs font-medium">
            • Aroma: {product.aroma}
          </span>
        )}
      </div>

      {/* Stock badge & Value discovery notice */}
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-0.5">
        {product.disponivel ? (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#434F2A] bg-[#6D7833]/15 px-2.5 py-1 rounded-full">
            <CheckCircle2 size={12} className="text-[#6D7833]" /> Pronta entrega
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#B96940] bg-[#B96940]/15 px-2.5 py-1 rounded-full">
            <Clock size={12} className="text-[#B96940]" /> Sob encomenda
          </span>
        )}
        <span className="text-[11px] text-[#B96940] font-semibold">
          • Consulte o valor via WhatsApp
        </span>
      </div>
    </div>
  );

  // Column with Soap Image
  const ImageContent = (
    <div className="flex items-center justify-center p-2 sm:p-4">
      <div className="relative w-full max-w-[260px] sm:max-w-[320px] md:max-w-[360px] aspect-square rounded-2xl overflow-hidden shadow-md border-2 border-[#6D7833]/20 bg-[#6D7833]/10 group">
        <img
          src={product.imagem}
          alt={product.nome}
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {!product.disponivel && (
          <div className="absolute inset-0 bg-[#434F2A]/60 backdrop-blur-xs flex items-center justify-center p-4 text-center">
            <span className="bg-[#F4EEE1] text-[#434F2A] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
              Sob Encomenda
            </span>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <motion.article
      id={`product-item-${product.id}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.55, ease: 'easeOut', delay: index % 2 === 0 ? 0 : 0.1 }}
      className="w-full max-w-4xl mx-auto py-8 md:py-14 border-b border-[#6D7833]/15 last:border-b-0"
    >
      {/* 2-Column Grid matching exactly the wireframe layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
        {isImageOnLeft ? (
          <>
            {/* Desktop: Image on left, Text on right (Mobile: Image first then text) */}
            <div className="order-1 md:order-1">{ImageContent}</div>
            <div className="order-2 md:order-2">{TextContent}</div>
          </>
        ) : (
          <>
            {/* Desktop: Text on left, Image on right (Mobile: Image first on small screens for visual impact) */}
            <div className="order-2 md:order-1">{TextContent}</div>
            <div className="order-1 md:order-2">{ImageContent}</div>
          </>
        )}
      </div>

      {/* Call to Action Button centered below the columns (as in wireframe: "adquirir agora") */}
      <div className="mt-6 md:mt-10 flex flex-col items-center justify-center">
        <a
          id={`btn-order-${product.id}`}
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:px-10 sm:py-4 rounded-full font-bold text-sm sm:text-base tracking-wide uppercase shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 ${
            product.disponivel
              ? 'bg-[#B96940] hover:bg-[#a55a33] text-[#F4EEE1] shadow-[#B96940]/25'
              : 'bg-[#6D7833] hover:bg-[#434F2A] text-[#F4EEE1] shadow-[#6D7833]/25'
          }`}
        >
          <MessageCircle size={18} className="transition-transform group-hover:scale-110" />
          <span>{product.disponivel ? 'adquirir agora' : 'consultar no chat'}</span>
        </a>
        <span className="text-[11px] text-[#434F2A]/70 mt-2 font-medium tracking-tight text-center">
          {product.disponivel ? 'Consulte valores e frete direto no WhatsApp' : 'Verifique disponibilidade e prazo no WhatsApp'}
        </span>
      </div>
    </motion.article>
  );
};
