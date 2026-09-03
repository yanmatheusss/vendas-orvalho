export interface Product {
  id: string;
  nome: string;
  descricao: string;
  beneficios?: string[];
  preco: string;
  imagem: string;
  disponivel: boolean; // Altere para false quando esgotar o estoque
  peso?: string;
  aroma?: string;
}

export interface StoreConfig {
  nomeLoja: string;
  subtitulo?: string;
  // Coloque aqui o link direto da imagem da sua logo (ou deixe vazio para usar o texto padrão estilizado)
  logoUrl: string;
  // Número do WhatsApp com código do país (55) e DDD (ex: 5511999999999)
  whatsapp: {
    numero: string;
    mensagemPadrao: string;
    mensagemIndisponivel: string;
  };
  revenda: {
    titulo: string;
    subtitulo: string;
    mensagemWhatsapp: string;
  };
  proximoLancamento: string;
  rodape: {
    titulo: string;
    descricao: string;
    instagram: string;
    horarioAtendimento: string;
    localizacao: string;
    direitos: string;
  };
}
