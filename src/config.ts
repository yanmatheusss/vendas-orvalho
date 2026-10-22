import { Product, StoreConfig } from './types';
import soap1 from './assets/images/artisan_soap_1_1788391357804.jpg';
import soap2 from './assets/images/artisan_soap_2_1788391371832.jpg';
import soap3 from './assets/images/artisan_soap_3_1788391387019.jpg';
import soap4 from './assets/images/artisan_soap_4_1788391400296.jpg';

/**
 * =========================================================================
 * ARQUIVO DE CONFIGURAÇÃO FÁCIL & MANUTENÇÃO RÁPIDA
 * =========================================================================
 * Altere aqui as informações da sua marca, logotipo, WhatsApp e estoque.
 * Não requer painel complexo: basta alterar os valores abaixo!
 */

export const STORE_CONFIG: StoreConfig = {
  nomeLoja: "AROMAS & ESSÊNCIA",
  subtitulo: "Sabonetes Artesanais 100% Naturais",
  
  // 🌿 SUA LOGO:
  logoUrl: "https://blogger.googleusercontent.com/img/a/AVvXsEj8AbSFseqdEpplIk4SuyPaB-3IIjHBMkn1SURb_Y5xw7y9HxDzL0x23KIYVx43QyOi0OlWkfByJls2XGWkle8bsVY5vCSBin0-By0R5y2lNU0cuI-ttH1J3IOK9COCejSilATGtTSNYVUUaI_RmsPfJmm67dmDlFdhUyk2KoufyxCbP_GEHxRPWlC-nJoz",

  // 📱 CONFIGURAÇÃO DO WHATSAPP:
  whatsapp: {
    // Insira o número com DDI (55) e DDD, apenas dígitos:
    numero: "5569992943143",
    // Mensagem enviada quando o sabonete está DISPONÍVEL (valores informados via WhatsApp):
    mensagemPadrao: "Olá! Gostaria de saber os valores e combinar o pedido do sabonete artesanal *{NOME}*. Poderia me passar mais informações?",
    // Mensagem enviada quando o sabonete está INDISPONÍVEL / SOB ENCOMENDA:
    mensagemIndisponivel: "Olá! Vi o sabonete artesanal *{NOME}* no catálogo e gostaria de consultar o valor e a disponibilidade para encomenda."
  },

  // 📦 OPÇÃO PARA REVENDA, LOJISTAS & PARCERIAS:
  revenda: {
    titulo: "REVENDA & PARCERIAS",
    subtitulo: "Tem uma loja, espaço de bem-estar ou deseja revender nossos sabonetes botânicos? Escolha suas variedades, quantidades, frete e tire todas as dúvidas de valores e parceria diretamente pelo WhatsApp.",
    mensagemWhatsapp: "Olá! Gostaria de consultar valores, frete e condições especiais para REVENDA / ATACADO ou PARCERIA com os sabonetes artesanais botânicos."
  },

  // ⏳ Chamada antes do rodapé (conforme o modelo da imagem)
  proximoLancamento: "próximo lançamento em breve",

  // 🍃 RODAPÉ EDITÁVEL FÁCIL:
  rodape: {
    titulo: "ORVALHO DA AMAZÔNIA",
    descricao: "Produção artesanal botânica com óleos vegetais nobres, argilas puras e óleos essenciais terapêuticos. Cuidado suave e sustentável para a sua pele.",
    instagram: "@orvalhodaamazonia",
    horarioAtendimento: "Segunda a Sábado, das 09h às 19h",
    localizacao: "Enviamos para todo o Brasil • Entrega grátis todos os sábados para Ouro Preto do Oeste - RO",
    direitos: "Todos os direitos reservados. Feito com respeito à natureza."
  }
};

/**
 * =========================================================================
 * CATÁLOGO DE SABONETES ARTESANAIS
 * =========================================================================
 * Para marcar se está disponível ou não, basta alterar:
 * disponivel: true   (disponível para entrega imediata)
 * disponivel: false  (esgotado / sob encomenda no chat)
 */
export const INITIAL_PRODUCTS: Product[] = [
  {
    id: "copaiba-amazonica",
    nome: "COPAÍBA AMAZÔNICA",
    descricao: "Formulado com o precioso óleo-resina de copaíba da Amazônia. Tradicionalmente conhecido por suas propriedades regeneradoras e calmantes, limpa profundamente respeitando a barreira natural da pele.",
    beneficios: ["Regenerador Natural", "Calmante & Anti-inflamatório", "Biodiversidade Amazônica"],
    preco: "Consulte via WhatsApp",
    peso: "110g",
    aroma: "Amadeirado & Bálsamo Natural",
    imagem: soap1,
    disponivel: false // Ainda não disponível / Sob encomenda
  },
  {
    id: "andiroba-amazonica",
    nome: "ANDIROBA AMAZÔNICA",
    descricao: "Enriquecido com puro óleo de andiroba prensado a frio, colhido de forma sustentável nas florestas tropicais. Proporciona nutrição intensa, alívio e sensação de frescor restaurador para o corpo.",
    beneficios: ["Nutrição Intensa", "Propriedades Terapêuticas", "Toque Aveludado"],
    preco: "Consulte via WhatsApp",
    peso: "115g",
    aroma: "Herbal Terroso & Suave",
    imagem: soap2,
    disponivel: false // Ainda não disponível / Sob encomenda
  },
  {
    id: "ouro-da-floresta",
    nome: "OURO DA FLORESTA",
    descricao: "Uma fórmula nobre inspirada na riqueza e nos óleos dourados da floresta. Restaura a maciez, devolve o viço natural da pele e proporciona uma espuma densa, cremosa e aromática.",
    beneficios: ["Revitalização e Viço", "Hidratação Profunda", "Espuma Densa e Cremosa"],
    preco: "Consulte via WhatsApp",
    peso: "110g",
    aroma: "Quente & Botânico Nobre",
    imagem: soap3,
    disponivel: false // Ainda não disponível / Sob encomenda
  },
  {
    id: "argilas-amazonicas",
    nome: "ARGILAS AMAZÔNICAS",
    descricao: "Composição mineral rica em argilas nativas da região amazônica. Oferece limpeza purificante suave, absorve impurezas e desintoxica a pele preservando sua hidratação essencial.",
    beneficios: ["Detox Mineral", "Equilíbrio Suave", "Renovação Cutânea"],
    preco: "Consulte via WhatsApp",
    peso: "120g",
    aroma: "Mineral & Refrescante",
    imagem: soap4,
    disponivel: false // Ainda não disponível / Sob encomenda
  }
];
