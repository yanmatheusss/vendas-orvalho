import { useState } from 'react';
import { STORE_CONFIG, INITIAL_PRODUCTS } from './config';
import { Header } from './components/Header';
import { ShippingTrustBar } from './components/ShippingTrustBar';
import { ProductItem } from './components/ProductItem';
import { WholesaleSection } from './components/WholesaleSection';
import { Footer } from './components/Footer';
import { ShoppingBag, Truck } from 'lucide-react';

export default function App() {
  const [products] = useState(INITIAL_PRODUCTS);

  return (
    <div className="min-h-screen bg-[#F4EEE1] text-[#434F2A] flex flex-col selection:bg-[#6D7833]/30 selection:text-[#434F2A]">
      {/* Top Banner with Delivery Policy & Reseller Anchor */}
      <div className="w-full bg-[#434F2A] text-[#F4EEE1] py-2.5 sm:py-2 px-4 text-center">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-xs">
          <div className="flex items-center justify-center sm:justify-start gap-2 font-medium text-xs text-center sm:text-left leading-relaxed">
            <Truck size={15} className="text-[#B96940] shrink-0 inline" />
            <span>
              Todos os sábados <strong className="text-[#F4EEE1] underline decoration-[#B96940] underline-offset-2 font-bold">entrega grátis</strong> para Ouro Preto do Oeste - RO • Enviamos para todo o Brasil
            </span>
          </div>
          <a
            href="#secao-revenda"
            className="text-[#F4EEE1]/90 hover:text-[#B96940] font-bold flex items-center gap-1.5 text-xs transition-colors shrink-0 bg-[#F4EEE1]/10 px-3 py-1 rounded-full sm:bg-transparent sm:p-0"
          >
            <ShoppingBag size={13} className="text-[#B96940]" />
            <span>Revenda & Parcerias</span>
          </a>
        </div>
      </div>

      {/* Main Container */}
      <div className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Header with LOGO (grande e em destaque) */}
        <Header />

        {/* 2. Security & Shipping Highlights */}
        <ShippingTrustBar />

        {/* 3. Product Catalog (Alternating layout matching wireframe) */}
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

          {/* 4. Opção Simplificada de Chamada para Ação para Revenda & Parcerias */}
          <WholesaleSection
            whatsappNumber={STORE_CONFIG.whatsapp.numero}
          />

          {/* 5. Wireframe Pre-Footer text: "proximo lançamento em breve" */}
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

      {/* 6. Footer */}
      <Footer />
    </div>
  );
}
