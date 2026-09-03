import { useState } from 'react';
import { STORE_CONFIG, INITIAL_PRODUCTS } from './config';
import { Header } from './components/Header';
import { ShippingTrustBar } from './components/ShippingTrustBar';
import { ProductItem } from './components/ProductItem';
import { WholesaleSection } from './components/WholesaleSection';
import { Footer } from './components/Footer';
import { Truck, ArrowDown } from 'lucide-react';

export default function App() {
  const [products] = useState(INITIAL_PRODUCTS);

  return (
    <div className="min-h-screen bg-[#F4EEE1] text-[#434F2A] flex flex-col selection:bg-[#6D7833]/30 selection:text-[#434F2A]">
      {/* Top Banner with Delivery Policy */}
      <div className="w-full bg-[#434F2A] text-[#F4EEE1] py-2 px-4 text-center">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 text-xs font-medium leading-relaxed">
          <Truck size={15} className="text-[#B96940] shrink-0 inline" />
          <span>
            Enviamos para todo o Brasil
          </span>
        </div>
      </div>

      {/* Main Container */}
      <div className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Header with LOGO (grande e em destaque) */}
        <Header />

        {/* 2. Security & Shipping Highlights (Ultra Slim) */}
        <ShippingTrustBar />

        {/* 3. Chamada Cativante para Conhecer o Catálogo */}
        <section className="text-center max-w-2xl mx-auto pt-3 pb-6 sm:pt-4 sm:pb-8 px-2 sm:px-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif-brand text-[#434F2A] tracking-tight leading-snug">
            Conheça Nosso Catálogo Botânico
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#434F2A]/85 leading-relaxed font-sans max-w-lg mx-auto">
            Feitos à mão com óleos nobres, argilas puras e a força dos bioativos da Amazônia. Explore nossas fórmulas abaixo e escolha o cuidado perfeito para sua pele:
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
