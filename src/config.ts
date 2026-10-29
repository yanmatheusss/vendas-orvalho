import { Product, StoreConfig } from './types';
import soap1 from './assets/images/artisan_soap_1_1788391357804.jpg';
import soap2 from './assets/images/artisan_soap_2_1788391371832.jpg';
import soap3 from './assets/images/artisan_soap_3_1788391387019.jpg';
import soap4 from './assets/images/artisan_soap_4_1788391400296.jpg';
import coquetelImg from './assets/images/coquetel_amazonico_bottle_1793042917461.jpg';

/**
 * =========================================================================
 * ARQUIVO DE CONFIGURAÇÃO FÁCIL & MANUTENÇÃO RÁPIDA
 * =========================================================================
 * Altere aqui as informações da sua marca, logotipo, WhatsApp e estoque.
 * Não requer painel complexo: basta alterar os valores abaixo!
 */

export const STORE_CONFIG: StoreConfig = {
  nomeLoja: "AROMAS & ESSÊNCIA",
  subtitulo: "Bioativos Puros da Amazônia • Base Glicerinada 100% Vegetal",
  
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
    descricao: "Produção artesanal em base glicerinada 100% vegetal enriquecida com os mais nobres óleos e bioativos puros da floresta amazônica. Feito sem soda cáustica e sem prensagem industrial, para um cuidado suave e restaurador da pele.",
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
    id: "ouro-da-floresta-blend",
    nome: "OURO DA FLORESTA - BLEND AMAZÔNICO",
    descricao: "Lançamento da linha Ouro da Floresta de produtos amazônicos de copaíba. Frasco de 20ml com conta-gotas com blend de óleo de copaíba, coco e óleo essencial de melaleuca. Formulado para uso capilar e couro cabeludo: combate a caspa, hidratação profunda e crescimento saudável.",
    beneficios: ["Óleo de Copaíba & Coco", "Óleo Essencial de Melaleuca", "Uso Capilar & Anticaspa", "20ml com Conta-gotas"],
    preco: "Em breve estoque e detalhes",
    peso: "Frasco 20ml (Conta-gotas)",
    aroma: "Melaleuca & Copaíba Balsâmico",
    imagem: coquetelImg,
    disponivel: false,
    isLancamento: true,
    statusBadge: "Sob encomenda"
  },
  {
    id: "copaiba-amazonica",
    nome: "COPAÍBA AMAZÔNICA",
    descricao: "Feito em base glicerinada 100% vegetal com puro óleo-resina de copaíba da Amazônia, rico em beta-cariofileno, e casca da copaíba na composição. Ação anti-inflamatória e cicatrizante que purifica os poros, combate a acne e equilibra a oleosidade com suavidade.",
    beneficios: ["Óleo-Resina & Casca de Copaíba", "Base Glicerinada 100% Vegetal", "Sem Soda Cáustica"],
    preco: "Consulte via WhatsApp",
    peso: "110g",
    aroma: "Amadeirado Balsâmico & Suave",
    imagem: soap1,
    disponivel: false // Ainda não disponível / Sob encomenda
  },
  {
    id: "andiroba-amazonica",
    nome: "ANDIROBA AMAZÔNICA",
    descricao: "Feito em base glicerinada 100% vegetal com puro óleo de andiroba da floresta amazônica, rico em limonoides e ômegas 6 e 9. Potente restaurador tecidual que acalma irritações, combate o ressecamento e renova a maciez da pele.",
    beneficios: ["Óleo de Andiroba da Amazônia", "Base Glicerinada 100% Vegetal", "Sem Soda Cáustica"],
    preco: "Consulte via WhatsApp",
    peso: "115g",
    aroma: "Herbal Terroso & Reconfortante",
    imagem: soap2,
    disponivel: false // Ainda não disponível / Sob encomenda
  },
  {
    id: "ouro-da-floresta-xampu",
    nome: "OURO DA FLORESTA - XAMPU SÓLIDO ANTICASPA",
    descricao: "Feito em base glicerinada 100% vegetal com óleo de copaíba da Amazônia, cascas do tronco da árvore e óleo de coco vegetal. Xampu sólido anticaspa com o mesmo propósito para o cabelo, podendo ser usado junto em um tratamento com o Blend Amazônico ou separadamente.",
    beneficios: ["Copaíba & Cascas do Tronco", "Xampu Sólido Anticaspa", "Base Glicerinada 100% Vegetal"],
    preco: "Consulte via WhatsApp",
    peso: "110g",
    aroma: "Balsâmico Terapêutico & Amadeirado",
    imagem: soap3,
    disponivel: false // Ainda não disponível / Sob encomenda
  },
  {
    id: "argilas-amazonicas",
    nome: "ARGILAS AMAZÔNICAS",
    descricao: "Feito em base glicerinada 100% vegetal com argilas minerais puras da bacia amazônica, ricas em oligoelementos. Detox natural inteligente que desobstrui os poros e equilibra a oleosidade sem ressecar, deixando a pele aveludada.",
    beneficios: ["Argilas Minerais da Amazônia", "Base Glicerinada 100% Vegetal", "Sem Soda Cáustica"],
    preco: "Consulte via WhatsApp",
    peso: "120g",
    aroma: "Mineral Puro & Refrescante",
    imagem: soap4,
    disponivel: false // Ainda não disponível / Sob encomenda
  }
];
