import { useState } from 'react';
import { STORE_CONFIG, INITIAL_PRODUCTS } from './config';
import { Header } from './components/Header';
import { ShippingTrustBar } from './components/ShippingTrustBar';
import { ProductItem } from './components/ProductItem';
import { WholesaleSection } from './components/WholesaleSection';
import { Footer } from './components/Footer';
import { InstagramCampaignBanner } from './components/InstagramCampaignBanner';
import { Truck, ArrowDown, Instagram } from 'lucide-react';

export default function App() {
  const [products] = useState(INITIAL_PRODUCTS);
  const instagramHandle = STORE_CONFIG.rodape.instagram.replace('@', '');
  const instagramUrl = `https://www.instagram.com/${instagramHandle}/`;

  return (
    <div className="min-h-screen bg-[#F4EEE1] text-[#434F2A] flex flex-col selection:bg-[#6D7833]/30 selection:text-[#434F2A]">
      {/* Top Banner with Instagram Campaign Announcement & Delivery Info */}
      <div className="w-full bg-[#434F2A] text-[#F4EEE1] border-b border-[#6D7833]/30 overflow-hidden select-none">
        {/* Versão Desktop: Centralizada em linha única */}
        <div className="hidden sm:flex max-w-4xl mx-auto py-2 px-4 items-center justify-center gap-3 text-xs font-medium leading-relaxed">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-[#F4EEE1] hover:text-[#B96940] transition-colors"
          >
            <Instagram size={14} className="text-[#B96940] shrink-0" />
            <span>Acompanhe no Instagram oficial de 22 a 30 de outubro</span>
          </a>
          <span className="text-[#F4EEE1]/40">•</span>
          <span className="inline-flex items-center gap-1.5 text-[#F4EEE1]/85">
            <Truck size={14} className="text-[#B96940] shrink-0" />
            <span>Enviamos para todo o Brasil</span>
          </span>
        </div>

        {/* Versão Celular: Letreiro contínuo (Marquee) ultra-slim em linha única */}
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="sm:hidden flex items-center py-2 overflow-hidden text-xs font-medium leading-none focus:outline-none"
          title="Toque para abrir o Instagram oficial"
        >
          <div className="animate-marquee flex items-center shrink-0">
            {/* Bloco 1 */}
            <div className="flex items-center gap-3 px-3 shrink-0">
              <span className="inline-flex items-center gap-1.5 font-semibold text-[#F4EEE1]">
                <Instagram size={13} className="text-[#B96940] shrink-0" />
                <span>Acompanhe no Instagram oficial de 22 a 30 de outubro</span>
              </span>
              <span className="text-[#F4EEE1]/40">•</span>
              <span className="inline-flex items-center gap-1.5 text-[#F4EEE1]/90">
                <Truck size={13} className="text-[#B96940] shrink-0" />
                <span>Enviamos para todo o Brasil</span>
              </span>
              <span className="text-[#F4EEE1]/40">•</span>
            </div>

            {/* Bloco 2 (duplicata idêntica para loop infinito sem cortes) */}
            <div className="flex items-center gap-3 px-3 shrink-0">
              <span className="inline-flex items-center gap-1.5 font-semibold text-[#F4EEE1]">
                <Instagram size={13} className="text-[#B96940] shrink-0" />
                <span>Acompanhe no Instagram oficial de 22 a 30 de outubro</span>
              </span>
              <span className="text-[#F4EEE1]/40">•</span>
              <span className="inline-flex items-center gap-1.5 text-[#F4EEE1]/90">
                <Truck size={13} className="text-[#B96940] shrink-0" />
                <span>Enviamos para todo o Brasil</span>
              </span>
              <span className="text-[#F4EEE1]/40">•</span>
            </div>
          </div>
        </a>
      </div>

      {/* Main Container */}
      <div className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Header with LOGO */}
        <Header />

        {/* 2. Destaque Oficial: Acompanhe as postagens no Instagram (22 a 30 de Outubro) */}
        <InstagramCampaignBanner />

        {/* 3. Security & Shipping Highlights (Ultra Slim) */}
        <ShippingTrustBar />

        {/* 3. Chamada Cativante para Conhecer o Catálogo */}
        <section className="text-center max-w-2xl mx-auto pt-3 pb-6 sm:pt-4 sm:pb-8 px-2 sm:px-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif-brand text-[#434F2A] tracking-tight leading-snug">
            Conheça Nosso Catálogo Botânico
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#434F2A]/85 leading-relaxed font-sans max-w-lg mx-auto">
            Elaborados em base glicerinada 100% vegetal com bioativos e óleos nobres puros da Amazônia — sem soda cáustica e sem prensagem industrial. Cuidado suave, puro e hidratante para a sua pele:
          </p>
          <div className="flex items-center justify-center gap-1.5 mt-3 text-xs font-semibold text-[#B96940]">
            <span>Role para baixo e confira cada barra</span>
            <ArrowDown size={14} className="animate-bounce" />
          </div>
        </section>

        {/* 4. Product Catalog (Alternating layout matching wireframe) */}
        <main id="catalogo-sabonetes" className="w-full">
          <div className="divide-y divide-[#6D7833]/15">
            {products.map((product, index) => (
              <ProductItem
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </div>

          {/* 5. Opção Simplificada de Chamada para Ação para Revenda & Parcerias */}
          <WholesaleSection
            whatsappNumber={STORE_CONFIG.whatsapp.numero}
          />

          {/* 6. Wireframe Pre-Footer text: "proximo lançamento em breve" */}
          <div className="w-full max-w-4xl mx-auto pt-6 pb-4 text-right px-2 sm:px-4">
            <p
              id="teaser-proximo-lancamento"
              className="text-xs sm:text-sm md:text-base font-semibold tracking-wider lowercase text-[#434F2A]/85 hover:text-[#B96940] transition-colors"
            >
              {STORE_CONFIG.proximoLancamento}
            </p>
          </div>
        </main>
      </div>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}
