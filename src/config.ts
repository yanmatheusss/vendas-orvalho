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
  subtitulo: "Sabonetes 100% Naturais da Amazônia • Base Glicerinada Vegetal",
  
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
    descricao: "Produção artesanal 100% natural da Amazônia em base glicerinada vegetal, sem soda cáustica e sem prensagem industrial. Elaborada com bioativos nobres da floresta para um cuidado suave e restaurador da pele.",
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
    descricao: "Sabonete 100% natural da Amazônia formulado em base glicerinada vegetal com o puro óleo-resina de copaíba. Não fabricado com soda cáustica ou prensagem, proporciona limpeza suave, ação calmante e hidratação que respeita a barreira cutânea.",
    beneficios: ["100% Natural da Amazônia", "Base Glicerinada Vegetal", "Sem Soda Cáustica"],
    preco: "Consulte via WhatsApp",
    peso: "110g",
    aroma: "Amadeirado & Bálsamo Natural",
    imagem: soap1,
    disponivel: false // Ainda não disponível / Sob encomenda
  },
  {
    id: "andiroba-amazonica",
    nome: "ANDIROBA AMAZÔNICA",
    descricao: "Elaborado em base glicerinada vegetal 100% natural da Amazônia com o puro óleo de andiroba da floresta tropical. Sem soda cáustica e sem prensagem mecânica agressiva, oferece nutrição profunda, conforto restaurador e toque aveludado.",
    beneficios: ["100% Natural da Amazônia", "Base Glicerinada Vegetal", "Sem Soda Cáustica"],
    preco: "Consulte via WhatsApp",
    peso: "115g",
    aroma: "Herbal Terroso & Suave",
    imagem: soap2,
    disponivel: false // Ainda não disponível / Sob encomenda
  },
  {
    id: "ouro-da-floresta",
    nome: "OURO DA FLORESTA",
    descricao: "Composição 100% natural da Amazônia em nobre base glicerinada vegetal enriquecida com óleos dourados da floresta. Sem soda cáustica e sem prensagem, restaura a maciez e o viço natural com uma espuma cremosa e reconfortante.",
    beneficios: ["100% Natural da Amazônia", "Base Glicerinada Vegetal", "Sem Soda Cáustica"],
    preco: "Consulte via WhatsApp",
    peso: "110g",
    aroma: "Quente & Botânico Nobre",
    imagem: soap3,
    disponivel: false // Ainda não disponível / Sob encomenda
  },
  {
    id: "argilas-amazonicas",
    nome: "ARGILAS AMAZÔNICAS",
    descricao: "Formulado em base glicerinada vegetal com argilas minerais puras colhidas na região amazônica. Sabonete 100% natural, sem soda cáustica e sem prensagem, promove purificação delicada e renovação cutânea mantendo a hidratação essencial.",
    beneficios: ["100% Natural da Amazônia", "Base Glicerinada Vegetal", "Sem Soda Cáustica"],
    preco: "Consulte via WhatsApp",
    peso: "120g",
    aroma: "Mineral & Refrescante",
    imagem: soap4,
    disponivel: false // Ainda não disponível / Sob encomenda
  }
];
