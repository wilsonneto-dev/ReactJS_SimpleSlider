interface ApiMovieItem {
  Childs: Array<any>;
  FullTitle: string;
  Id: number;
  Images: Array<{ TypeId: number; Url: string }>;
  ImdbId?: string;
  Metadata?: {
    UniqueUrl?: string;
  };
  Type: number;
  SerieInfo: any;
  ParentId?: number;
}

const data: Array<Array<ApiMovieItem>> = [
  [
    {
      Childs: [],
      FullTitle: "Zuzu Angel",
      Id: 1451,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/wr.001451/0001451_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/wr.001451/looke_4001.jpg?852879403",
        },
      ],
      ImdbId: "tt0481254",
      Metadata: {
        UniqueUrl: "zuzu-angel",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zumbis - Os Sobreviventes",
      Id: 62748,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/a2.062748/0062748_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/a2.062748/looke_4001.jpg?852879403",
        },
      ],
      ImdbId: "tt4969672",
      Metadata: {
        UniqueUrl: "zumbis-os-sobreviventes",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zumbiologia - Aproveite Essa Noite",
      Id: 55915,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/cdc.055915/0055915_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/cdc.055915/looke_4001.jpg?852879403",
        },
      ],
      ImdbId: "tt6220406",
      Metadata: {
        UniqueUrl: "zumbiologia-aproveite-essa-noite",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zumbilênio - Parque dos Monstros",
      Id: 63698,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/uni.063698/0063698_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/uni.063698/looke_4001.jpg?852879403",
        },
      ],
      ImdbId: "tt5313906",
      Metadata: {
        UniqueUrl: "zumbilenio-parque-dos-monstros",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zumbilândia - Atire Duas Vezes",
      Id: 67651,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/so.067651/0067651_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/so.067651/looke_4001.jpg?852879403",
        },
      ],
      ImdbId: "tt1560220",
      Metadata: {
        UniqueUrl: "zumbilandia-atire-duas-vezes",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zumbilândia",
      Id: 4537,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/so.004537/0004537_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/so.004537/looke_4001.jpg?852879403",
        },
      ],
      ImdbId: "tt1156398",
      Metadata: {
        UniqueUrl: "zumbilandia",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Vaso Sanitário / Pasta de Dente / Mangueira / Pá",
      Id: 36981,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036981/0036981_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036981/looke_4001.jpg?852879403",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-vaso-sanitario-pasta-de-dente-mangueira-pa",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Vaso Sanitário / Pasta de Dente / Mangueira / Pá",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Tartaruga / Telefone / Pote de Café / Palhaço",
      Id: 36932,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036932/0036932_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036932/looke_4001.jpg?852879403",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-tartaruga-telefone-pote-de-cafe-palhaco",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Tartaruga / Telefone / Pote de Café / Palhaço",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Sofá / Skis / Guarda-Chuva / Boneco de Neve",
      Id: 36979,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036979/0036979_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036979/looke_4001.jpg?852879403",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-sofa-skis-guarda-chuva-boneco-de-neve",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Sofá / Skis / Guarda-Chuva / Boneco de Neve",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Sled / Bengala / Snowboard / Balanço",
      Id: 36983,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036983/0036983_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036983/looke_4001.jpg?852879403",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-sled-bengala-snowboard-balanco",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Sled / Bengala / Snowboard / Balanço",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Sapo / Cama / Calças / Boneca",
      Id: 36933,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036933/0036933_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036933/looke_4001.jpg?852879403",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-sapo-cama-calcas-boneca",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Sapo / Cama / Calças / Boneca",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Relógio / Panda / Peixe / Submarino",
      Id: 36931,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036931/0036931_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036931/looke_4001.jpg?852879403",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-relogio-panda-peixe-submarino",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Relógio / Panda / Peixe / Submarino",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle:
        "Zumbers - Regador / Travesseiro / Controle Remoto / Botas de Esqui",
      Id: 36982,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036982/0036982_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036982/looke_4001.jpg?852879403",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-regador-travesseiro-controle-remoto-botas-de-esqui",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Regador / Travesseiro / Controle Remoto / Botas de Esqui",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Quebra-Cabeça / Peixe-Espada / Polvo / Brasão",
      Id: 36955,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036955/0036955_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036955/looke_4001.jpg?852879403",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-quebra-cabeca-peixe-espada-polvo-brasao",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Quebra-Cabeça / Peixe-Espada / Polvo / Brasão",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Pregos / Computador / Rinoceronte / Pipa",
      Id: 36946,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036946/0036946_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036946/looke_4001.jpg?852879403",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-pregos-computador-rinoceronte-pipa",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Pregos / Computador / Rinoceronte / Pipa",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Porta / Tubarão / Imagem / Patins",
      Id: 36980,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036980/0036980_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036980/looke_4001.jpg?852879403",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-porta-tubarao-imagem-patins",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Porta / Tubarão / Imagem / Patins",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Pera / Burro / Banco / Coelho",
      Id: 36941,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036941/0036941_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036941/looke_4001.jpg?852879403",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-pera-burro-banco-coelho",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Pera / Burro / Banco / Coelho",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Pente / Pinguim / Camisa / Gato",
      Id: 36936,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036936/0036936_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036936/looke_4001.jpg?852879403",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-pente-pinguim-camisa-gato",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Pente / Pinguim / Camisa / Gato",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Pássaro / Bota / Maçã / Porco",
      Id: 36940,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036940/0036940_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036940/looke_4001.jpg?852879403",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-passaro-bota-maca-porco",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Pássaro / Bota / Maçã / Porco",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Óculos / Elefante / Coelho de Pelúcia / Poço",
      Id: 36978,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036978/0036978_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036978/looke_4001.jpg?852879403",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-oculos-elefante-coelho-de-pelucia-poco",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Óculos / Elefante / Coelho de Pelúcia / Poço",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Minhoca / Cenoura / Relógio / Búfalo",
      Id: 36977,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036977/0036977_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036977/looke_4001.jpg?852879403",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-minhoca-cenoura-relogio-bufalo",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Minhoca / Cenoura / Relógio / Búfalo",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Meia / Cachorro / Violão / Cadeira",
      Id: 36944,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036944/0036944_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036944/looke_4001.jpg?852879403",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-meia-cachorro-violao-cadeira",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Meia / Cachorro / Violão / Cadeira",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Martelo / Folha / Carneiros / Chave de Fenda",
      Id: 36943,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036943/0036943_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036943/looke_4001.jpg?852879403",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-martelo-folha-carneiros-chave-de-fenda",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Martelo / Folha / Carneiros / Chave de Fenda",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Luvas / Água-Viva / Chapéu / Caranguejo",
      Id: 36954,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036954/0036954_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036954/looke_4001.jpg?852879403",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-luvas-agua-viva-chapeu-caranguejo",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Luvas / Água-Viva / Chapéu / Caranguejo",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Livro / Sol / Concha / Frango",
      Id: 36953,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036953/0036953_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036953/looke_4001.jpg?852879403",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-livro-sol-concha-frango",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Livro / Sol / Concha / Frango",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Leão / Colchão de Ar / Baleia / Lenço",
      Id: 36956,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036956/0036956_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036956/looke_4001.jpg?852879403",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-leao-colchao-de-ar-baleia-lenco",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Leão / Colchão de Ar / Baleia / Lenço",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Joaninha / Tomate / Frigideira / Cereja",
      Id: 36939,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036939/0036939_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036939/looke_4001.jpg?852879403",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-joaninha-tomate-frigideira-cereja",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Joaninha / Tomate / Frigideira / Cereja",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Girafa / Óculos de Sol / Vaca / Queijo",
      Id: 36947,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036947/0036947_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036947/looke_4001.jpg?852879403",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-girafa-oculos-de-sol-vaca-queijo",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Girafa / Óculos de Sol / Vaca / Queijo",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Galochas / Vaso / Balança / Gaveta",
      Id: 36935,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036935/0036935_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036935/looke_4001.jpg?852879403",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-galochas-vaso-balanca-gaveta",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Galochas / Vaso / Balança / Gaveta",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Flores / Golfinhos / Borboleta / Casa",
      Id: 36930,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036930/0036930_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036930/looke_4001.jpg?852879403",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-flores-golfinhos-borboleta-casa",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Flores / Golfinhos / Borboleta / Casa",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Faca / Aranha / Televisão / Leopardo",
      Id: 36951,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036951/0036951_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036951/looke_4001.jpg?852879403",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-faca-aranha-televisao-leopardo",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Faca / Aranha / Televisão / Leopardo",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Escorregador / Bicicleta / Carrinho de Bebê / Bebê",
      Id: 36984,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036984/0036984_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036984/looke_4001.jpg?852879403",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-escorregador-bicicleta-carrinho-de-bebe-bebe",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Escorregador / Bicicleta / Carrinho de Bebê / Bebê",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Colher / Zebra / Prendedor de Roupas / Esquilo",
      Id: 36942,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036942/0036942_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036942/looke_4001.jpg?852879403",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-colher-zebra-prendedor-de-roupas-esquilo",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Colher / Zebra / Prendedor de Roupas / Esquilo",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Chupeta / Bule / Carro / Trem",
      Id: 36934,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036934/0036934_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036934/looke_4001.jpg?852879403",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-chupeta-bule-carro-trem",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Chupeta / Bule / Carro / Trem",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle:
        "Zumbers - Cavalo Marinho / Galo / Jornal / Estrela do Mar / Limão",
      Id: 36976,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036976/0036976_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036976/looke_4001.jpg?852879403",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-cavalo-marinho-galo-jornal-estrela-do-mar-limao",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Cavalo Marinho / Galo / Jornal / Estrela do Mar / Limão",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Cavalo / Banco / Rato / Balão",
      Id: 36945,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036945/0036945_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036945/looke_4001.jpg?852879403",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-cavalo-banco-rato-balao",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Cavalo / Banco / Rato / Balão",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Camisolas / Saia / Crocodilo / Banheira",
      Id: 36938,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036938/0036938_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036938/looke_4001.jpg?852879403",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-camisolas-saia-crocodilo-banheira",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Camisolas / Saia / Crocodilo / Banheira",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Camelo / Bolacha / Raposa / Geléia / Papagaio",
      Id: 36985,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036985/0036985_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036985/looke_4001.jpg?852879403",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-camelo-bolacha-raposa-geleia-papagaio",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Camelo / Bolacha / Raposa / Geléia / Papagaio",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Bola / Macaco / Celular / Avestruz",
      Id: 36950,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036950/0036950_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036950/looke_4001.jpg?852879403",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-bola-macaco-celular-avestruz",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Bola / Macaco / Celular / Avestruz",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Barco / Cabra / Tesoura / Pato",
      Id: 36952,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036952/0036952_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036952/looke_4001.jpg?852879403",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-barco-cabra-tesoura-pato",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Barco / Cabra / Tesoura / Pato",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Banana / Torradeira / Lâmpada / Panela",
      Id: 36937,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036937/0036937_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036937/looke_4001.jpg?852879403",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-banana-torradeira-lampada-panela",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Banana / Torradeira / Lâmpada / Panela",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Árvore / Pincel / Forquilha / Hipopótamo",
      Id: 36948,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036948/0036948_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036948/looke_4001.jpg?852879403",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-arvore-pincel-forquilha-hipopotamo",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Árvore / Pincel / Forquilha / Hipopótamo",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Abelha / Tigre / Máquina de Lavar / Serpente",
      Id: 36949,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036949/0036949_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036949/looke_4001.jpg?852879403",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-abelha-tigre-maquina-de-lavar-serpente",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Abelha / Tigre / Máquina de Lavar / Serpente",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers",
      Id: 36929,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036929/0036929_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036929/looke_4001.jpg?852879403",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers",
      },
      ParentId: 36928,
      SerieInfo: {
        SeasonName: "Zumbers",
      },
      Type: 2,
    },
    {
      Childs: [],
      FullTitle: "Zulu",
      Id: 43318,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/amz.043318/0043318_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/amz.043318/looke_4001.jpg?852879403",
        },
      ],
      ImdbId: "tt0058777",
      Metadata: {
        UniqueUrl: "zulu",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zoró - Bichos Esquisitos - Zeca Baleiro e Convidados",
      Id: 44898,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/zer.044898/0044898_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/zer.044898/looke_4001.jpg?852879403",
        },
      ],
      Metadata: {
        UniqueUrl: "zoro-bichos-esquisitos-zeca-baleiro-e-convidados",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zoorquestra - Volume 1",
      Id: 46803,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/emo.046803/0046803_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/emo.046803/looke_4001.jpg?852879403",
        },
      ],
      Metadata: {
        UniqueUrl: "zoorquestra-volume-1",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zooparky",
      Id: 66589,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/zop.066589/0066589_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/zop.066589/looke_4001.jpg?852879403",
        },
      ],
      Metadata: {
        UniqueUrl: "zooparky",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zoobabu - Zoobabu",
      Id: 40392,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/brb.040392/0040392_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/brb.040392/looke_4001.jpg?852879403",
        },
      ],
      Metadata: {
        UniqueUrl: "zoobabu-zoobabu",
      },
      ParentId: 40390,
      SerieInfo: {
        SeasonName: "Zoobabu",
      },
      Type: 2,
    },
    {
      Childs: [],
      FullTitle:
        "Zoobabu - Ep. 17 - Espadarte / Cavalo Marinho / Morsa / Escorpião / Gato / Panda / Beija-Flor",
      Id: 40407,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/brb.040407/0040407_335.jpg?852879403",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/brb.040407/looke_4001.jpg?852879403",
        },
      ],
      Metadata: {
        UniqueUrl:
          "zoobabu-ep-17-espadarte-cavalo-marinho-morsa-escorpiao-gato-panda-beija-flor",
      },
      ParentId: 40392,
      SerieInfo: {
        EpisodeName:
          "Ep. 17 - Espadarte / Cavalo Marinho / Morsa / Escorpião / Gato / Panda / Beija-Flor",
        SeasonName: "Zoobabu - Zoobabu",
      },
      Type: 4,
    },
  ],
  [
    {
      Childs: [],
      FullTitle: "Zuzu Angel",
      Id: 1451,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/wr.001451/0001451_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/wr.001451/looke_4001.jpg?2031923617",
        },
      ],
      ImdbId: "tt0481254",
      Metadata: {
        UniqueUrl: "zuzu-angel",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zumbis - Os Sobreviventes",
      Id: 62748,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/a2.062748/0062748_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/a2.062748/looke_4001.jpg?2031923617",
        },
      ],
      ImdbId: "tt4969672",
      Metadata: {
        UniqueUrl: "zumbis-os-sobreviventes",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zumbiologia - Aproveite Essa Noite",
      Id: 55915,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/cdc.055915/0055915_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/cdc.055915/looke_4001.jpg?2031923617",
        },
      ],
      ImdbId: "tt6220406",
      Metadata: {
        UniqueUrl: "zumbiologia-aproveite-essa-noite",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zumbilênio - Parque dos Monstros",
      Id: 63698,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/uni.063698/0063698_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/uni.063698/looke_4001.jpg?2031923617",
        },
      ],
      ImdbId: "tt5313906",
      Metadata: {
        UniqueUrl: "zumbilenio-parque-dos-monstros",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zumbilândia - Atire Duas Vezes",
      Id: 67651,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/so.067651/0067651_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/so.067651/looke_4001.jpg?2031923617",
        },
      ],
      ImdbId: "tt1560220",
      Metadata: {
        UniqueUrl: "zumbilandia-atire-duas-vezes",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zumbilândia",
      Id: 4537,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/so.004537/0004537_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/so.004537/looke_4001.jpg?2031923617",
        },
      ],
      ImdbId: "tt1156398",
      Metadata: {
        UniqueUrl: "zumbilandia",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Vaso Sanitário / Pasta de Dente / Mangueira / Pá",
      Id: 36981,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036981/0036981_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036981/looke_4001.jpg?2031923617",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-vaso-sanitario-pasta-de-dente-mangueira-pa",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Vaso Sanitário / Pasta de Dente / Mangueira / Pá",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Tartaruga / Telefone / Pote de Café / Palhaço",
      Id: 36932,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036932/0036932_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036932/looke_4001.jpg?2031923617",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-tartaruga-telefone-pote-de-cafe-palhaco",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Tartaruga / Telefone / Pote de Café / Palhaço",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Sofá / Skis / Guarda-Chuva / Boneco de Neve",
      Id: 36979,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036979/0036979_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036979/looke_4001.jpg?2031923617",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-sofa-skis-guarda-chuva-boneco-de-neve",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Sofá / Skis / Guarda-Chuva / Boneco de Neve",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Sled / Bengala / Snowboard / Balanço",
      Id: 36983,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036983/0036983_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036983/looke_4001.jpg?2031923617",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-sled-bengala-snowboard-balanco",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Sled / Bengala / Snowboard / Balanço",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Sapo / Cama / Calças / Boneca",
      Id: 36933,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036933/0036933_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036933/looke_4001.jpg?2031923617",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-sapo-cama-calcas-boneca",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Sapo / Cama / Calças / Boneca",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Relógio / Panda / Peixe / Submarino",
      Id: 36931,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036931/0036931_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036931/looke_4001.jpg?2031923617",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-relogio-panda-peixe-submarino",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Relógio / Panda / Peixe / Submarino",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle:
        "Zumbers - Regador / Travesseiro / Controle Remoto / Botas de Esqui",
      Id: 36982,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036982/0036982_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036982/looke_4001.jpg?2031923617",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-regador-travesseiro-controle-remoto-botas-de-esqui",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Regador / Travesseiro / Controle Remoto / Botas de Esqui",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Quebra-Cabeça / Peixe-Espada / Polvo / Brasão",
      Id: 36955,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036955/0036955_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036955/looke_4001.jpg?2031923617",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-quebra-cabeca-peixe-espada-polvo-brasao",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Quebra-Cabeça / Peixe-Espada / Polvo / Brasão",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Pregos / Computador / Rinoceronte / Pipa",
      Id: 36946,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036946/0036946_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036946/looke_4001.jpg?2031923617",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-pregos-computador-rinoceronte-pipa",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Pregos / Computador / Rinoceronte / Pipa",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Porta / Tubarão / Imagem / Patins",
      Id: 36980,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036980/0036980_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036980/looke_4001.jpg?2031923617",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-porta-tubarao-imagem-patins",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Porta / Tubarão / Imagem / Patins",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Pera / Burro / Banco / Coelho",
      Id: 36941,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036941/0036941_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036941/looke_4001.jpg?2031923617",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-pera-burro-banco-coelho",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Pera / Burro / Banco / Coelho",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Pente / Pinguim / Camisa / Gato",
      Id: 36936,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036936/0036936_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036936/looke_4001.jpg?2031923617",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-pente-pinguim-camisa-gato",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Pente / Pinguim / Camisa / Gato",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Pássaro / Bota / Maçã / Porco",
      Id: 36940,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036940/0036940_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036940/looke_4001.jpg?2031923617",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-passaro-bota-maca-porco",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Pássaro / Bota / Maçã / Porco",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Óculos / Elefante / Coelho de Pelúcia / Poço",
      Id: 36978,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036978/0036978_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036978/looke_4001.jpg?2031923617",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-oculos-elefante-coelho-de-pelucia-poco",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Óculos / Elefante / Coelho de Pelúcia / Poço",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Minhoca / Cenoura / Relógio / Búfalo",
      Id: 36977,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036977/0036977_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036977/looke_4001.jpg?2031923617",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-minhoca-cenoura-relogio-bufalo",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Minhoca / Cenoura / Relógio / Búfalo",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Meia / Cachorro / Violão / Cadeira",
      Id: 36944,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036944/0036944_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036944/looke_4001.jpg?2031923617",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-meia-cachorro-violao-cadeira",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Meia / Cachorro / Violão / Cadeira",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Martelo / Folha / Carneiros / Chave de Fenda",
      Id: 36943,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036943/0036943_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036943/looke_4001.jpg?2031923617",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-martelo-folha-carneiros-chave-de-fenda",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Martelo / Folha / Carneiros / Chave de Fenda",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Luvas / Água-Viva / Chapéu / Caranguejo",
      Id: 36954,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036954/0036954_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036954/looke_4001.jpg?2031923617",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-luvas-agua-viva-chapeu-caranguejo",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Luvas / Água-Viva / Chapéu / Caranguejo",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Livro / Sol / Concha / Frango",
      Id: 36953,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036953/0036953_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036953/looke_4001.jpg?2031923617",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-livro-sol-concha-frango",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Livro / Sol / Concha / Frango",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Leão / Colchão de Ar / Baleia / Lenço",
      Id: 36956,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036956/0036956_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036956/looke_4001.jpg?2031923617",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-leao-colchao-de-ar-baleia-lenco",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Leão / Colchão de Ar / Baleia / Lenço",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Joaninha / Tomate / Frigideira / Cereja",
      Id: 36939,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036939/0036939_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036939/looke_4001.jpg?2031923617",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-joaninha-tomate-frigideira-cereja",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Joaninha / Tomate / Frigideira / Cereja",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Girafa / Óculos de Sol / Vaca / Queijo",
      Id: 36947,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036947/0036947_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036947/looke_4001.jpg?2031923617",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-girafa-oculos-de-sol-vaca-queijo",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Girafa / Óculos de Sol / Vaca / Queijo",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Galochas / Vaso / Balança / Gaveta",
      Id: 36935,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036935/0036935_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036935/looke_4001.jpg?2031923617",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-galochas-vaso-balanca-gaveta",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Galochas / Vaso / Balança / Gaveta",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Flores / Golfinhos / Borboleta / Casa",
      Id: 36930,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036930/0036930_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036930/looke_4001.jpg?2031923617",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-flores-golfinhos-borboleta-casa",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Flores / Golfinhos / Borboleta / Casa",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Faca / Aranha / Televisão / Leopardo",
      Id: 36951,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036951/0036951_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036951/looke_4001.jpg?2031923617",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-faca-aranha-televisao-leopardo",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Faca / Aranha / Televisão / Leopardo",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Escorregador / Bicicleta / Carrinho de Bebê / Bebê",
      Id: 36984,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036984/0036984_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036984/looke_4001.jpg?2031923617",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-escorregador-bicicleta-carrinho-de-bebe-bebe",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Escorregador / Bicicleta / Carrinho de Bebê / Bebê",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Colher / Zebra / Prendedor de Roupas / Esquilo",
      Id: 36942,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036942/0036942_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036942/looke_4001.jpg?2031923617",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-colher-zebra-prendedor-de-roupas-esquilo",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Colher / Zebra / Prendedor de Roupas / Esquilo",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Chupeta / Bule / Carro / Trem",
      Id: 36934,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036934/0036934_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036934/looke_4001.jpg?2031923617",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-chupeta-bule-carro-trem",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Chupeta / Bule / Carro / Trem",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle:
        "Zumbers - Cavalo Marinho / Galo / Jornal / Estrela do Mar / Limão",
      Id: 36976,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036976/0036976_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036976/looke_4001.jpg?2031923617",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-cavalo-marinho-galo-jornal-estrela-do-mar-limao",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Cavalo Marinho / Galo / Jornal / Estrela do Mar / Limão",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Cavalo / Banco / Rato / Balão",
      Id: 36945,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036945/0036945_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036945/looke_4001.jpg?2031923617",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-cavalo-banco-rato-balao",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Cavalo / Banco / Rato / Balão",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Camisolas / Saia / Crocodilo / Banheira",
      Id: 36938,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036938/0036938_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036938/looke_4001.jpg?2031923617",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-camisolas-saia-crocodilo-banheira",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Camisolas / Saia / Crocodilo / Banheira",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Camelo / Bolacha / Raposa / Geléia / Papagaio",
      Id: 36985,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036985/0036985_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036985/looke_4001.jpg?2031923617",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-camelo-bolacha-raposa-geleia-papagaio",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Camelo / Bolacha / Raposa / Geléia / Papagaio",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Bola / Macaco / Celular / Avestruz",
      Id: 36950,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036950/0036950_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036950/looke_4001.jpg?2031923617",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-bola-macaco-celular-avestruz",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Bola / Macaco / Celular / Avestruz",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Barco / Cabra / Tesoura / Pato",
      Id: 36952,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036952/0036952_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036952/looke_4001.jpg?2031923617",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-barco-cabra-tesoura-pato",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Barco / Cabra / Tesoura / Pato",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Banana / Torradeira / Lâmpada / Panela",
      Id: 36937,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036937/0036937_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036937/looke_4001.jpg?2031923617",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-banana-torradeira-lampada-panela",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Banana / Torradeira / Lâmpada / Panela",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Árvore / Pincel / Forquilha / Hipopótamo",
      Id: 36948,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036948/0036948_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036948/looke_4001.jpg?2031923617",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-arvore-pincel-forquilha-hipopotamo",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Árvore / Pincel / Forquilha / Hipopótamo",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Abelha / Tigre / Máquina de Lavar / Serpente",
      Id: 36949,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036949/0036949_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036949/looke_4001.jpg?2031923617",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-abelha-tigre-maquina-de-lavar-serpente",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Abelha / Tigre / Máquina de Lavar / Serpente",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers",
      Id: 36929,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036929/0036929_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036929/looke_4001.jpg?2031923617",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers",
      },
      ParentId: 36928,
      SerieInfo: {
        SeasonName: "Zumbers",
      },
      Type: 2,
    },
    {
      Childs: [],
      FullTitle: "Zulu",
      Id: 43318,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/amz.043318/0043318_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/amz.043318/looke_4001.jpg?2031923617",
        },
      ],
      ImdbId: "tt0058777",
      Metadata: {
        UniqueUrl: "zulu",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zoró - Bichos Esquisitos - Zeca Baleiro e Convidados",
      Id: 44898,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/zer.044898/0044898_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/zer.044898/looke_4001.jpg?2031923617",
        },
      ],
      Metadata: {
        UniqueUrl: "zoro-bichos-esquisitos-zeca-baleiro-e-convidados",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zoorquestra - Volume 1",
      Id: 46803,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/emo.046803/0046803_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/emo.046803/looke_4001.jpg?2031923617",
        },
      ],
      Metadata: {
        UniqueUrl: "zoorquestra-volume-1",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zooparky",
      Id: 66589,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/zop.066589/0066589_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/zop.066589/looke_4001.jpg?2031923617",
        },
      ],
      Metadata: {
        UniqueUrl: "zooparky",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zoobabu - Zoobabu",
      Id: 40392,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/brb.040392/0040392_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/brb.040392/looke_4001.jpg?2031923617",
        },
      ],
      Metadata: {
        UniqueUrl: "zoobabu-zoobabu",
      },
      ParentId: 40390,
      SerieInfo: {
        SeasonName: "Zoobabu",
      },
      Type: 2,
    },
    {
      Childs: [],
      FullTitle:
        "Zoobabu - Ep. 17 - Espadarte / Cavalo Marinho / Morsa / Escorpião / Gato / Panda / Beija-Flor",
      Id: 40407,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/brb.040407/0040407_335.jpg?2031923617",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/brb.040407/looke_4001.jpg?2031923617",
        },
      ],
      Metadata: {
        UniqueUrl:
          "zoobabu-ep-17-espadarte-cavalo-marinho-morsa-escorpiao-gato-panda-beija-flor",
      },
      ParentId: 40392,
      SerieInfo: {
        EpisodeName:
          "Ep. 17 - Espadarte / Cavalo Marinho / Morsa / Escorpião / Gato / Panda / Beija-Flor",
        SeasonName: "Zoobabu - Zoobabu",
      },
      Type: 4,
    },
  ],
  [
    {
      Childs: [],
      FullTitle: "Zuzu Angel",
      Id: 1451,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/wr.001451/0001451_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/wr.001451/looke_4001.jpg?1522919700",
        },
      ],
      ImdbId: "tt0481254",
      Metadata: {
        UniqueUrl: "zuzu-angel",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zumbis - Os Sobreviventes",
      Id: 62748,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/a2.062748/0062748_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/a2.062748/looke_4001.jpg?1522919700",
        },
      ],
      ImdbId: "tt4969672",
      Metadata: {
        UniqueUrl: "zumbis-os-sobreviventes",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zumbiologia - Aproveite Essa Noite",
      Id: 55915,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/cdc.055915/0055915_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/cdc.055915/looke_4001.jpg?1522919700",
        },
      ],
      ImdbId: "tt6220406",
      Metadata: {
        UniqueUrl: "zumbiologia-aproveite-essa-noite",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zumbilênio - Parque dos Monstros",
      Id: 63698,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/uni.063698/0063698_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/uni.063698/looke_4001.jpg?1522919700",
        },
      ],
      ImdbId: "tt5313906",
      Metadata: {
        UniqueUrl: "zumbilenio-parque-dos-monstros",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zumbilândia - Atire Duas Vezes",
      Id: 67651,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/so.067651/0067651_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/so.067651/looke_4001.jpg?1522919700",
        },
      ],
      ImdbId: "tt1560220",
      Metadata: {
        UniqueUrl: "zumbilandia-atire-duas-vezes",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zumbilândia",
      Id: 4537,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/so.004537/0004537_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/so.004537/looke_4001.jpg?1522919700",
        },
      ],
      ImdbId: "tt1156398",
      Metadata: {
        UniqueUrl: "zumbilandia",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Vaso Sanitário / Pasta de Dente / Mangueira / Pá",
      Id: 36981,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036981/0036981_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036981/looke_4001.jpg?1522919700",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-vaso-sanitario-pasta-de-dente-mangueira-pa",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Vaso Sanitário / Pasta de Dente / Mangueira / Pá",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Tartaruga / Telefone / Pote de Café / Palhaço",
      Id: 36932,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036932/0036932_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036932/looke_4001.jpg?1522919700",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-tartaruga-telefone-pote-de-cafe-palhaco",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Tartaruga / Telefone / Pote de Café / Palhaço",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Sofá / Skis / Guarda-Chuva / Boneco de Neve",
      Id: 36979,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036979/0036979_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036979/looke_4001.jpg?1522919700",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-sofa-skis-guarda-chuva-boneco-de-neve",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Sofá / Skis / Guarda-Chuva / Boneco de Neve",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Sled / Bengala / Snowboard / Balanço",
      Id: 36983,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036983/0036983_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036983/looke_4001.jpg?1522919700",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-sled-bengala-snowboard-balanco",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Sled / Bengala / Snowboard / Balanço",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Sapo / Cama / Calças / Boneca",
      Id: 36933,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036933/0036933_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036933/looke_4001.jpg?1522919700",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-sapo-cama-calcas-boneca",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Sapo / Cama / Calças / Boneca",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Relógio / Panda / Peixe / Submarino",
      Id: 36931,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036931/0036931_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036931/looke_4001.jpg?1522919700",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-relogio-panda-peixe-submarino",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Relógio / Panda / Peixe / Submarino",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle:
        "Zumbers - Regador / Travesseiro / Controle Remoto / Botas de Esqui",
      Id: 36982,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036982/0036982_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036982/looke_4001.jpg?1522919700",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-regador-travesseiro-controle-remoto-botas-de-esqui",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Regador / Travesseiro / Controle Remoto / Botas de Esqui",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Quebra-Cabeça / Peixe-Espada / Polvo / Brasão",
      Id: 36955,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036955/0036955_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036955/looke_4001.jpg?1522919700",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-quebra-cabeca-peixe-espada-polvo-brasao",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Quebra-Cabeça / Peixe-Espada / Polvo / Brasão",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Pregos / Computador / Rinoceronte / Pipa",
      Id: 36946,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036946/0036946_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036946/looke_4001.jpg?1522919700",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-pregos-computador-rinoceronte-pipa",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Pregos / Computador / Rinoceronte / Pipa",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Porta / Tubarão / Imagem / Patins",
      Id: 36980,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036980/0036980_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036980/looke_4001.jpg?1522919700",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-porta-tubarao-imagem-patins",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Porta / Tubarão / Imagem / Patins",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Pera / Burro / Banco / Coelho",
      Id: 36941,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036941/0036941_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036941/looke_4001.jpg?1522919700",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-pera-burro-banco-coelho",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Pera / Burro / Banco / Coelho",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Pente / Pinguim / Camisa / Gato",
      Id: 36936,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036936/0036936_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036936/looke_4001.jpg?1522919700",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-pente-pinguim-camisa-gato",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Pente / Pinguim / Camisa / Gato",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Pássaro / Bota / Maçã / Porco",
      Id: 36940,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036940/0036940_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036940/looke_4001.jpg?1522919700",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-passaro-bota-maca-porco",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Pássaro / Bota / Maçã / Porco",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Óculos / Elefante / Coelho de Pelúcia / Poço",
      Id: 36978,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036978/0036978_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036978/looke_4001.jpg?1522919700",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-oculos-elefante-coelho-de-pelucia-poco",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Óculos / Elefante / Coelho de Pelúcia / Poço",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Minhoca / Cenoura / Relógio / Búfalo",
      Id: 36977,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036977/0036977_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036977/looke_4001.jpg?1522919700",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-minhoca-cenoura-relogio-bufalo",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Minhoca / Cenoura / Relógio / Búfalo",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Meia / Cachorro / Violão / Cadeira",
      Id: 36944,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036944/0036944_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036944/looke_4001.jpg?1522919700",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-meia-cachorro-violao-cadeira",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Meia / Cachorro / Violão / Cadeira",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Martelo / Folha / Carneiros / Chave de Fenda",
      Id: 36943,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036943/0036943_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036943/looke_4001.jpg?1522919700",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-martelo-folha-carneiros-chave-de-fenda",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Martelo / Folha / Carneiros / Chave de Fenda",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Luvas / Água-Viva / Chapéu / Caranguejo",
      Id: 36954,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036954/0036954_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036954/looke_4001.jpg?1522919700",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-luvas-agua-viva-chapeu-caranguejo",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Luvas / Água-Viva / Chapéu / Caranguejo",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Livro / Sol / Concha / Frango",
      Id: 36953,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036953/0036953_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036953/looke_4001.jpg?1522919700",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-livro-sol-concha-frango",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Livro / Sol / Concha / Frango",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Leão / Colchão de Ar / Baleia / Lenço",
      Id: 36956,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036956/0036956_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036956/looke_4001.jpg?1522919700",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-leao-colchao-de-ar-baleia-lenco",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Leão / Colchão de Ar / Baleia / Lenço",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Joaninha / Tomate / Frigideira / Cereja",
      Id: 36939,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036939/0036939_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036939/looke_4001.jpg?1522919700",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-joaninha-tomate-frigideira-cereja",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Joaninha / Tomate / Frigideira / Cereja",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Girafa / Óculos de Sol / Vaca / Queijo",
      Id: 36947,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036947/0036947_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036947/looke_4001.jpg?1522919700",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-girafa-oculos-de-sol-vaca-queijo",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Girafa / Óculos de Sol / Vaca / Queijo",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Galochas / Vaso / Balança / Gaveta",
      Id: 36935,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036935/0036935_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036935/looke_4001.jpg?1522919700",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-galochas-vaso-balanca-gaveta",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Galochas / Vaso / Balança / Gaveta",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Flores / Golfinhos / Borboleta / Casa",
      Id: 36930,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036930/0036930_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036930/looke_4001.jpg?1522919700",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-flores-golfinhos-borboleta-casa",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Flores / Golfinhos / Borboleta / Casa",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Faca / Aranha / Televisão / Leopardo",
      Id: 36951,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036951/0036951_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036951/looke_4001.jpg?1522919700",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-faca-aranha-televisao-leopardo",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Faca / Aranha / Televisão / Leopardo",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Escorregador / Bicicleta / Carrinho de Bebê / Bebê",
      Id: 36984,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036984/0036984_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036984/looke_4001.jpg?1522919700",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-escorregador-bicicleta-carrinho-de-bebe-bebe",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Escorregador / Bicicleta / Carrinho de Bebê / Bebê",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Colher / Zebra / Prendedor de Roupas / Esquilo",
      Id: 36942,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036942/0036942_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036942/looke_4001.jpg?1522919700",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-colher-zebra-prendedor-de-roupas-esquilo",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Colher / Zebra / Prendedor de Roupas / Esquilo",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Chupeta / Bule / Carro / Trem",
      Id: 36934,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036934/0036934_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036934/looke_4001.jpg?1522919700",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-chupeta-bule-carro-trem",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Chupeta / Bule / Carro / Trem",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle:
        "Zumbers - Cavalo Marinho / Galo / Jornal / Estrela do Mar / Limão",
      Id: 36976,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036976/0036976_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036976/looke_4001.jpg?1522919700",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-cavalo-marinho-galo-jornal-estrela-do-mar-limao",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Cavalo Marinho / Galo / Jornal / Estrela do Mar / Limão",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Cavalo / Banco / Rato / Balão",
      Id: 36945,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036945/0036945_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036945/looke_4001.jpg?1522919700",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-cavalo-banco-rato-balao",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Cavalo / Banco / Rato / Balão",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Camisolas / Saia / Crocodilo / Banheira",
      Id: 36938,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036938/0036938_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036938/looke_4001.jpg?1522919700",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-camisolas-saia-crocodilo-banheira",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Camisolas / Saia / Crocodilo / Banheira",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Camelo / Bolacha / Raposa / Geléia / Papagaio",
      Id: 36985,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036985/0036985_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036985/looke_4001.jpg?1522919700",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-camelo-bolacha-raposa-geleia-papagaio",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Camelo / Bolacha / Raposa / Geléia / Papagaio",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Bola / Macaco / Celular / Avestruz",
      Id: 36950,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036950/0036950_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036950/looke_4001.jpg?1522919700",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-bola-macaco-celular-avestruz",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Bola / Macaco / Celular / Avestruz",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Barco / Cabra / Tesoura / Pato",
      Id: 36952,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036952/0036952_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036952/looke_4001.jpg?1522919700",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-barco-cabra-tesoura-pato",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Barco / Cabra / Tesoura / Pato",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Banana / Torradeira / Lâmpada / Panela",
      Id: 36937,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036937/0036937_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036937/looke_4001.jpg?1522919700",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-banana-torradeira-lampada-panela",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Banana / Torradeira / Lâmpada / Panela",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Árvore / Pincel / Forquilha / Hipopótamo",
      Id: 36948,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036948/0036948_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036948/looke_4001.jpg?1522919700",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-arvore-pincel-forquilha-hipopotamo",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Árvore / Pincel / Forquilha / Hipopótamo",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Abelha / Tigre / Máquina de Lavar / Serpente",
      Id: 36949,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036949/0036949_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036949/looke_4001.jpg?1522919700",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-abelha-tigre-maquina-de-lavar-serpente",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Abelha / Tigre / Máquina de Lavar / Serpente",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers",
      Id: 36929,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036929/0036929_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036929/looke_4001.jpg?1522919700",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers",
      },
      ParentId: 36928,
      SerieInfo: {
        SeasonName: "Zumbers",
      },
      Type: 2,
    },
    {
      Childs: [],
      FullTitle: "Zulu",
      Id: 43318,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/amz.043318/0043318_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/amz.043318/looke_4001.jpg?1522919700",
        },
      ],
      ImdbId: "tt0058777",
      Metadata: {
        UniqueUrl: "zulu",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zoró - Bichos Esquisitos - Zeca Baleiro e Convidados",
      Id: 44898,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/zer.044898/0044898_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/zer.044898/looke_4001.jpg?1522919700",
        },
      ],
      Metadata: {
        UniqueUrl: "zoro-bichos-esquisitos-zeca-baleiro-e-convidados",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zoorquestra - Volume 1",
      Id: 46803,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/emo.046803/0046803_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/emo.046803/looke_4001.jpg?1522919700",
        },
      ],
      Metadata: {
        UniqueUrl: "zoorquestra-volume-1",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zooparky",
      Id: 66589,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/zop.066589/0066589_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/zop.066589/looke_4001.jpg?1522919700",
        },
      ],
      Metadata: {
        UniqueUrl: "zooparky",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zoobabu - Zoobabu",
      Id: 40392,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/brb.040392/0040392_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/brb.040392/looke_4001.jpg?1522919700",
        },
      ],
      Metadata: {
        UniqueUrl: "zoobabu-zoobabu",
      },
      ParentId: 40390,
      SerieInfo: {
        SeasonName: "Zoobabu",
      },
      Type: 2,
    },
    {
      Childs: [],
      FullTitle:
        "Zoobabu - Ep. 17 - Espadarte / Cavalo Marinho / Morsa / Escorpião / Gato / Panda / Beija-Flor",
      Id: 40407,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/brb.040407/0040407_335.jpg?1522919700",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/brb.040407/looke_4001.jpg?1522919700",
        },
      ],
      Metadata: {
        UniqueUrl:
          "zoobabu-ep-17-espadarte-cavalo-marinho-morsa-escorpiao-gato-panda-beija-flor",
      },
      ParentId: 40392,
      SerieInfo: {
        EpisodeName:
          "Ep. 17 - Espadarte / Cavalo Marinho / Morsa / Escorpião / Gato / Panda / Beija-Flor",
        SeasonName: "Zoobabu - Zoobabu",
      },
      Type: 4,
    },
  ],
  [
    {
      Childs: [],
      FullTitle: "Zuzu Angel",
      Id: 1451,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/wr.001451/0001451_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/wr.001451/looke_4001.jpg?628831129",
        },
      ],
      ImdbId: "tt0481254",
      Metadata: {
        UniqueUrl: "zuzu-angel",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zumbis - Os Sobreviventes",
      Id: 62748,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/a2.062748/0062748_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/a2.062748/looke_4001.jpg?628831129",
        },
      ],
      ImdbId: "tt4969672",
      Metadata: {
        UniqueUrl: "zumbis-os-sobreviventes",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zumbiologia - Aproveite Essa Noite",
      Id: 55915,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/cdc.055915/0055915_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/cdc.055915/looke_4001.jpg?628831129",
        },
      ],
      ImdbId: "tt6220406",
      Metadata: {
        UniqueUrl: "zumbiologia-aproveite-essa-noite",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zumbilênio - Parque dos Monstros",
      Id: 63698,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/uni.063698/0063698_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/uni.063698/looke_4001.jpg?628831129",
        },
      ],
      ImdbId: "tt5313906",
      Metadata: {
        UniqueUrl: "zumbilenio-parque-dos-monstros",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zumbilândia - Atire Duas Vezes",
      Id: 67651,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/so.067651/0067651_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/so.067651/looke_4001.jpg?628831129",
        },
      ],
      ImdbId: "tt1560220",
      Metadata: {
        UniqueUrl: "zumbilandia-atire-duas-vezes",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zumbilândia",
      Id: 4537,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/so.004537/0004537_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/so.004537/looke_4001.jpg?628831129",
        },
      ],
      ImdbId: "tt1156398",
      Metadata: {
        UniqueUrl: "zumbilandia",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Vaso Sanitário / Pasta de Dente / Mangueira / Pá",
      Id: 36981,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036981/0036981_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036981/looke_4001.jpg?628831129",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-vaso-sanitario-pasta-de-dente-mangueira-pa",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Vaso Sanitário / Pasta de Dente / Mangueira / Pá",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Tartaruga / Telefone / Pote de Café / Palhaço",
      Id: 36932,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036932/0036932_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036932/looke_4001.jpg?628831129",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-tartaruga-telefone-pote-de-cafe-palhaco",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Tartaruga / Telefone / Pote de Café / Palhaço",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Sofá / Skis / Guarda-Chuva / Boneco de Neve",
      Id: 36979,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036979/0036979_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036979/looke_4001.jpg?628831129",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-sofa-skis-guarda-chuva-boneco-de-neve",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Sofá / Skis / Guarda-Chuva / Boneco de Neve",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Sled / Bengala / Snowboard / Balanço",
      Id: 36983,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036983/0036983_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036983/looke_4001.jpg?628831129",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-sled-bengala-snowboard-balanco",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Sled / Bengala / Snowboard / Balanço",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Sapo / Cama / Calças / Boneca",
      Id: 36933,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036933/0036933_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036933/looke_4001.jpg?628831129",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-sapo-cama-calcas-boneca",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Sapo / Cama / Calças / Boneca",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Relógio / Panda / Peixe / Submarino",
      Id: 36931,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036931/0036931_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036931/looke_4001.jpg?628831129",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-relogio-panda-peixe-submarino",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Relógio / Panda / Peixe / Submarino",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle:
        "Zumbers - Regador / Travesseiro / Controle Remoto / Botas de Esqui",
      Id: 36982,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036982/0036982_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036982/looke_4001.jpg?628831129",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-regador-travesseiro-controle-remoto-botas-de-esqui",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Regador / Travesseiro / Controle Remoto / Botas de Esqui",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Quebra-Cabeça / Peixe-Espada / Polvo / Brasão",
      Id: 36955,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036955/0036955_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036955/looke_4001.jpg?628831129",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-quebra-cabeca-peixe-espada-polvo-brasao",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Quebra-Cabeça / Peixe-Espada / Polvo / Brasão",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Pregos / Computador / Rinoceronte / Pipa",
      Id: 36946,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036946/0036946_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036946/looke_4001.jpg?628831129",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-pregos-computador-rinoceronte-pipa",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Pregos / Computador / Rinoceronte / Pipa",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Porta / Tubarão / Imagem / Patins",
      Id: 36980,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036980/0036980_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036980/looke_4001.jpg?628831129",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-porta-tubarao-imagem-patins",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Porta / Tubarão / Imagem / Patins",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Pera / Burro / Banco / Coelho",
      Id: 36941,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036941/0036941_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036941/looke_4001.jpg?628831129",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-pera-burro-banco-coelho",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Pera / Burro / Banco / Coelho",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Pente / Pinguim / Camisa / Gato",
      Id: 36936,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036936/0036936_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036936/looke_4001.jpg?628831129",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-pente-pinguim-camisa-gato",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Pente / Pinguim / Camisa / Gato",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Pássaro / Bota / Maçã / Porco",
      Id: 36940,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036940/0036940_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036940/looke_4001.jpg?628831129",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-passaro-bota-maca-porco",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Pássaro / Bota / Maçã / Porco",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Óculos / Elefante / Coelho de Pelúcia / Poço",
      Id: 36978,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036978/0036978_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036978/looke_4001.jpg?628831129",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-oculos-elefante-coelho-de-pelucia-poco",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Óculos / Elefante / Coelho de Pelúcia / Poço",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Minhoca / Cenoura / Relógio / Búfalo",
      Id: 36977,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036977/0036977_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036977/looke_4001.jpg?628831129",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-minhoca-cenoura-relogio-bufalo",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Minhoca / Cenoura / Relógio / Búfalo",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Meia / Cachorro / Violão / Cadeira",
      Id: 36944,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036944/0036944_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036944/looke_4001.jpg?628831129",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-meia-cachorro-violao-cadeira",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Meia / Cachorro / Violão / Cadeira",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Martelo / Folha / Carneiros / Chave de Fenda",
      Id: 36943,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036943/0036943_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036943/looke_4001.jpg?628831129",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-martelo-folha-carneiros-chave-de-fenda",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Martelo / Folha / Carneiros / Chave de Fenda",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Luvas / Água-Viva / Chapéu / Caranguejo",
      Id: 36954,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036954/0036954_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036954/looke_4001.jpg?628831129",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-luvas-agua-viva-chapeu-caranguejo",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Luvas / Água-Viva / Chapéu / Caranguejo",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Livro / Sol / Concha / Frango",
      Id: 36953,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036953/0036953_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036953/looke_4001.jpg?628831129",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-livro-sol-concha-frango",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Livro / Sol / Concha / Frango",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Leão / Colchão de Ar / Baleia / Lenço",
      Id: 36956,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036956/0036956_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036956/looke_4001.jpg?628831129",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-leao-colchao-de-ar-baleia-lenco",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Leão / Colchão de Ar / Baleia / Lenço",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Joaninha / Tomate / Frigideira / Cereja",
      Id: 36939,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036939/0036939_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036939/looke_4001.jpg?628831129",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-joaninha-tomate-frigideira-cereja",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Joaninha / Tomate / Frigideira / Cereja",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Girafa / Óculos de Sol / Vaca / Queijo",
      Id: 36947,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036947/0036947_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036947/looke_4001.jpg?628831129",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-girafa-oculos-de-sol-vaca-queijo",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Girafa / Óculos de Sol / Vaca / Queijo",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Galochas / Vaso / Balança / Gaveta",
      Id: 36935,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036935/0036935_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036935/looke_4001.jpg?628831129",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-galochas-vaso-balanca-gaveta",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Galochas / Vaso / Balança / Gaveta",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Flores / Golfinhos / Borboleta / Casa",
      Id: 36930,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036930/0036930_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036930/looke_4001.jpg?628831129",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-flores-golfinhos-borboleta-casa",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Flores / Golfinhos / Borboleta / Casa",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Faca / Aranha / Televisão / Leopardo",
      Id: 36951,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036951/0036951_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036951/looke_4001.jpg?628831129",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-faca-aranha-televisao-leopardo",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Faca / Aranha / Televisão / Leopardo",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Escorregador / Bicicleta / Carrinho de Bebê / Bebê",
      Id: 36984,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036984/0036984_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036984/looke_4001.jpg?628831129",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-escorregador-bicicleta-carrinho-de-bebe-bebe",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Escorregador / Bicicleta / Carrinho de Bebê / Bebê",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Colher / Zebra / Prendedor de Roupas / Esquilo",
      Id: 36942,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036942/0036942_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036942/looke_4001.jpg?628831129",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-colher-zebra-prendedor-de-roupas-esquilo",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Colher / Zebra / Prendedor de Roupas / Esquilo",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Chupeta / Bule / Carro / Trem",
      Id: 36934,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036934/0036934_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036934/looke_4001.jpg?628831129",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-chupeta-bule-carro-trem",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Chupeta / Bule / Carro / Trem",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle:
        "Zumbers - Cavalo Marinho / Galo / Jornal / Estrela do Mar / Limão",
      Id: 36976,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036976/0036976_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036976/looke_4001.jpg?628831129",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-cavalo-marinho-galo-jornal-estrela-do-mar-limao",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Cavalo Marinho / Galo / Jornal / Estrela do Mar / Limão",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Cavalo / Banco / Rato / Balão",
      Id: 36945,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036945/0036945_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036945/looke_4001.jpg?628831129",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-cavalo-banco-rato-balao",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Cavalo / Banco / Rato / Balão",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Camisolas / Saia / Crocodilo / Banheira",
      Id: 36938,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036938/0036938_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036938/looke_4001.jpg?628831129",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-camisolas-saia-crocodilo-banheira",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Camisolas / Saia / Crocodilo / Banheira",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Camelo / Bolacha / Raposa / Geléia / Papagaio",
      Id: 36985,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036985/0036985_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036985/looke_4001.jpg?628831129",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-camelo-bolacha-raposa-geleia-papagaio",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Camelo / Bolacha / Raposa / Geléia / Papagaio",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Bola / Macaco / Celular / Avestruz",
      Id: 36950,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036950/0036950_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036950/looke_4001.jpg?628831129",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-bola-macaco-celular-avestruz",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Bola / Macaco / Celular / Avestruz",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Barco / Cabra / Tesoura / Pato",
      Id: 36952,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036952/0036952_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036952/looke_4001.jpg?628831129",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-barco-cabra-tesoura-pato",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Barco / Cabra / Tesoura / Pato",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Banana / Torradeira / Lâmpada / Panela",
      Id: 36937,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036937/0036937_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036937/looke_4001.jpg?628831129",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-banana-torradeira-lampada-panela",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Banana / Torradeira / Lâmpada / Panela",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Árvore / Pincel / Forquilha / Hipopótamo",
      Id: 36948,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036948/0036948_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036948/looke_4001.jpg?628831129",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-arvore-pincel-forquilha-hipopotamo",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Árvore / Pincel / Forquilha / Hipopótamo",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Abelha / Tigre / Máquina de Lavar / Serpente",
      Id: 36949,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036949/0036949_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036949/looke_4001.jpg?628831129",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-abelha-tigre-maquina-de-lavar-serpente",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Abelha / Tigre / Máquina de Lavar / Serpente",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers",
      Id: 36929,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036929/0036929_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036929/looke_4001.jpg?628831129",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers",
      },
      ParentId: 36928,
      SerieInfo: {
        SeasonName: "Zumbers",
      },
      Type: 2,
    },
    {
      Childs: [],
      FullTitle: "Zulu",
      Id: 43318,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/amz.043318/0043318_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/amz.043318/looke_4001.jpg?628831129",
        },
      ],
      ImdbId: "tt0058777",
      Metadata: {
        UniqueUrl: "zulu",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zoró - Bichos Esquisitos - Zeca Baleiro e Convidados",
      Id: 44898,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/zer.044898/0044898_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/zer.044898/looke_4001.jpg?628831129",
        },
      ],
      Metadata: {
        UniqueUrl: "zoro-bichos-esquisitos-zeca-baleiro-e-convidados",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zoorquestra - Volume 1",
      Id: 46803,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/emo.046803/0046803_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/emo.046803/looke_4001.jpg?628831129",
        },
      ],
      Metadata: {
        UniqueUrl: "zoorquestra-volume-1",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zooparky",
      Id: 66589,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/zop.066589/0066589_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/zop.066589/looke_4001.jpg?628831129",
        },
      ],
      Metadata: {
        UniqueUrl: "zooparky",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zoobabu - Zoobabu",
      Id: 40392,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/brb.040392/0040392_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/brb.040392/looke_4001.jpg?628831129",
        },
      ],
      Metadata: {
        UniqueUrl: "zoobabu-zoobabu",
      },
      ParentId: 40390,
      SerieInfo: {
        SeasonName: "Zoobabu",
      },
      Type: 2,
    },
    {
      Childs: [],
      FullTitle:
        "Zoobabu - Ep. 17 - Espadarte / Cavalo Marinho / Morsa / Escorpião / Gato / Panda / Beija-Flor",
      Id: 40407,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/brb.040407/0040407_335.jpg?628831129",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/brb.040407/looke_4001.jpg?628831129",
        },
      ],
      Metadata: {
        UniqueUrl:
          "zoobabu-ep-17-espadarte-cavalo-marinho-morsa-escorpiao-gato-panda-beija-flor",
      },
      ParentId: 40392,
      SerieInfo: {
        EpisodeName:
          "Ep. 17 - Espadarte / Cavalo Marinho / Morsa / Escorpião / Gato / Panda / Beija-Flor",
        SeasonName: "Zoobabu - Zoobabu",
      },
      Type: 4,
    },
  ],
  [
    {
      Childs: [],
      FullTitle: "Zuzu Angel",
      Id: 1451,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/wr.001451/0001451_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/wr.001451/looke_4001.jpg?2029062286",
        },
      ],
      ImdbId: "tt0481254",
      Metadata: {
        UniqueUrl: "zuzu-angel",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zumbis - Os Sobreviventes",
      Id: 62748,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/a2.062748/0062748_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/a2.062748/looke_4001.jpg?2029062286",
        },
      ],
      ImdbId: "tt4969672",
      Metadata: {
        UniqueUrl: "zumbis-os-sobreviventes",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zumbiologia - Aproveite Essa Noite",
      Id: 55915,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/cdc.055915/0055915_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/cdc.055915/looke_4001.jpg?2029062286",
        },
      ],
      ImdbId: "tt6220406",
      Metadata: {
        UniqueUrl: "zumbiologia-aproveite-essa-noite",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zumbilênio - Parque dos Monstros",
      Id: 63698,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/uni.063698/0063698_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/uni.063698/looke_4001.jpg?2029062286",
        },
      ],
      ImdbId: "tt5313906",
      Metadata: {
        UniqueUrl: "zumbilenio-parque-dos-monstros",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zumbilândia - Atire Duas Vezes",
      Id: 67651,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/so.067651/0067651_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/so.067651/looke_4001.jpg?2029062286",
        },
      ],
      ImdbId: "tt1560220",
      Metadata: {
        UniqueUrl: "zumbilandia-atire-duas-vezes",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zumbilândia",
      Id: 4537,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/so.004537/0004537_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/so.004537/looke_4001.jpg?2029062286",
        },
      ],
      ImdbId: "tt1156398",
      Metadata: {
        UniqueUrl: "zumbilandia",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Vaso Sanitário / Pasta de Dente / Mangueira / Pá",
      Id: 36981,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036981/0036981_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036981/looke_4001.jpg?2029062286",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-vaso-sanitario-pasta-de-dente-mangueira-pa",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Vaso Sanitário / Pasta de Dente / Mangueira / Pá",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Tartaruga / Telefone / Pote de Café / Palhaço",
      Id: 36932,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036932/0036932_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036932/looke_4001.jpg?2029062286",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-tartaruga-telefone-pote-de-cafe-palhaco",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Tartaruga / Telefone / Pote de Café / Palhaço",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Sofá / Skis / Guarda-Chuva / Boneco de Neve",
      Id: 36979,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036979/0036979_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036979/looke_4001.jpg?2029062286",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-sofa-skis-guarda-chuva-boneco-de-neve",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Sofá / Skis / Guarda-Chuva / Boneco de Neve",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Sled / Bengala / Snowboard / Balanço",
      Id: 36983,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036983/0036983_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036983/looke_4001.jpg?2029062286",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-sled-bengala-snowboard-balanco",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Sled / Bengala / Snowboard / Balanço",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Sapo / Cama / Calças / Boneca",
      Id: 36933,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036933/0036933_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036933/looke_4001.jpg?2029062286",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-sapo-cama-calcas-boneca",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Sapo / Cama / Calças / Boneca",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Relógio / Panda / Peixe / Submarino",
      Id: 36931,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036931/0036931_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036931/looke_4001.jpg?2029062286",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-relogio-panda-peixe-submarino",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Relógio / Panda / Peixe / Submarino",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle:
        "Zumbers - Regador / Travesseiro / Controle Remoto / Botas de Esqui",
      Id: 36982,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036982/0036982_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036982/looke_4001.jpg?2029062286",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-regador-travesseiro-controle-remoto-botas-de-esqui",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Regador / Travesseiro / Controle Remoto / Botas de Esqui",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Quebra-Cabeça / Peixe-Espada / Polvo / Brasão",
      Id: 36955,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036955/0036955_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036955/looke_4001.jpg?2029062286",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-quebra-cabeca-peixe-espada-polvo-brasao",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Quebra-Cabeça / Peixe-Espada / Polvo / Brasão",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Pregos / Computador / Rinoceronte / Pipa",
      Id: 36946,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036946/0036946_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036946/looke_4001.jpg?2029062286",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-pregos-computador-rinoceronte-pipa",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Pregos / Computador / Rinoceronte / Pipa",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Porta / Tubarão / Imagem / Patins",
      Id: 36980,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036980/0036980_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036980/looke_4001.jpg?2029062286",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-porta-tubarao-imagem-patins",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Porta / Tubarão / Imagem / Patins",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Pera / Burro / Banco / Coelho",
      Id: 36941,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036941/0036941_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036941/looke_4001.jpg?2029062286",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-pera-burro-banco-coelho",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Pera / Burro / Banco / Coelho",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Pente / Pinguim / Camisa / Gato",
      Id: 36936,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036936/0036936_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036936/looke_4001.jpg?2029062286",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-pente-pinguim-camisa-gato",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Pente / Pinguim / Camisa / Gato",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Pássaro / Bota / Maçã / Porco",
      Id: 36940,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036940/0036940_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036940/looke_4001.jpg?2029062286",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-passaro-bota-maca-porco",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Pássaro / Bota / Maçã / Porco",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Óculos / Elefante / Coelho de Pelúcia / Poço",
      Id: 36978,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036978/0036978_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036978/looke_4001.jpg?2029062286",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-oculos-elefante-coelho-de-pelucia-poco",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Óculos / Elefante / Coelho de Pelúcia / Poço",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Minhoca / Cenoura / Relógio / Búfalo",
      Id: 36977,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036977/0036977_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036977/looke_4001.jpg?2029062286",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-minhoca-cenoura-relogio-bufalo",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Minhoca / Cenoura / Relógio / Búfalo",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Meia / Cachorro / Violão / Cadeira",
      Id: 36944,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036944/0036944_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036944/looke_4001.jpg?2029062286",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-meia-cachorro-violao-cadeira",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Meia / Cachorro / Violão / Cadeira",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Martelo / Folha / Carneiros / Chave de Fenda",
      Id: 36943,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036943/0036943_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036943/looke_4001.jpg?2029062286",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-martelo-folha-carneiros-chave-de-fenda",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Martelo / Folha / Carneiros / Chave de Fenda",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Luvas / Água-Viva / Chapéu / Caranguejo",
      Id: 36954,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036954/0036954_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036954/looke_4001.jpg?2029062286",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-luvas-agua-viva-chapeu-caranguejo",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Luvas / Água-Viva / Chapéu / Caranguejo",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Livro / Sol / Concha / Frango",
      Id: 36953,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036953/0036953_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036953/looke_4001.jpg?2029062286",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-livro-sol-concha-frango",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Livro / Sol / Concha / Frango",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Leão / Colchão de Ar / Baleia / Lenço",
      Id: 36956,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036956/0036956_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036956/looke_4001.jpg?2029062286",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-leao-colchao-de-ar-baleia-lenco",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Leão / Colchão de Ar / Baleia / Lenço",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Joaninha / Tomate / Frigideira / Cereja",
      Id: 36939,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036939/0036939_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036939/looke_4001.jpg?2029062286",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-joaninha-tomate-frigideira-cereja",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Joaninha / Tomate / Frigideira / Cereja",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Girafa / Óculos de Sol / Vaca / Queijo",
      Id: 36947,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036947/0036947_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036947/looke_4001.jpg?2029062286",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-girafa-oculos-de-sol-vaca-queijo",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Girafa / Óculos de Sol / Vaca / Queijo",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Galochas / Vaso / Balança / Gaveta",
      Id: 36935,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036935/0036935_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036935/looke_4001.jpg?2029062286",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-galochas-vaso-balanca-gaveta",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Galochas / Vaso / Balança / Gaveta",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Flores / Golfinhos / Borboleta / Casa",
      Id: 36930,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036930/0036930_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036930/looke_4001.jpg?2029062286",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-flores-golfinhos-borboleta-casa",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Flores / Golfinhos / Borboleta / Casa",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Faca / Aranha / Televisão / Leopardo",
      Id: 36951,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036951/0036951_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036951/looke_4001.jpg?2029062286",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-faca-aranha-televisao-leopardo",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Faca / Aranha / Televisão / Leopardo",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Escorregador / Bicicleta / Carrinho de Bebê / Bebê",
      Id: 36984,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036984/0036984_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036984/looke_4001.jpg?2029062286",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-escorregador-bicicleta-carrinho-de-bebe-bebe",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Escorregador / Bicicleta / Carrinho de Bebê / Bebê",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Colher / Zebra / Prendedor de Roupas / Esquilo",
      Id: 36942,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036942/0036942_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036942/looke_4001.jpg?2029062286",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-colher-zebra-prendedor-de-roupas-esquilo",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Colher / Zebra / Prendedor de Roupas / Esquilo",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Chupeta / Bule / Carro / Trem",
      Id: 36934,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036934/0036934_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036934/looke_4001.jpg?2029062286",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-chupeta-bule-carro-trem",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Chupeta / Bule / Carro / Trem",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle:
        "Zumbers - Cavalo Marinho / Galo / Jornal / Estrela do Mar / Limão",
      Id: 36976,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036976/0036976_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036976/looke_4001.jpg?2029062286",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-cavalo-marinho-galo-jornal-estrela-do-mar-limao",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Cavalo Marinho / Galo / Jornal / Estrela do Mar / Limão",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Cavalo / Banco / Rato / Balão",
      Id: 36945,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036945/0036945_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036945/looke_4001.jpg?2029062286",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-cavalo-banco-rato-balao",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Cavalo / Banco / Rato / Balão",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Camisolas / Saia / Crocodilo / Banheira",
      Id: 36938,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036938/0036938_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036938/looke_4001.jpg?2029062286",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-camisolas-saia-crocodilo-banheira",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Camisolas / Saia / Crocodilo / Banheira",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Camelo / Bolacha / Raposa / Geléia / Papagaio",
      Id: 36985,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036985/0036985_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036985/looke_4001.jpg?2029062286",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-camelo-bolacha-raposa-geleia-papagaio",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Camelo / Bolacha / Raposa / Geléia / Papagaio",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Bola / Macaco / Celular / Avestruz",
      Id: 36950,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036950/0036950_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036950/looke_4001.jpg?2029062286",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-bola-macaco-celular-avestruz",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Bola / Macaco / Celular / Avestruz",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Barco / Cabra / Tesoura / Pato",
      Id: 36952,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036952/0036952_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036952/looke_4001.jpg?2029062286",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-barco-cabra-tesoura-pato",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Barco / Cabra / Tesoura / Pato",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Banana / Torradeira / Lâmpada / Panela",
      Id: 36937,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036937/0036937_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036937/looke_4001.jpg?2029062286",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-banana-torradeira-lampada-panela",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Banana / Torradeira / Lâmpada / Panela",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Árvore / Pincel / Forquilha / Hipopótamo",
      Id: 36948,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036948/0036948_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036948/looke_4001.jpg?2029062286",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-arvore-pincel-forquilha-hipopotamo",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Árvore / Pincel / Forquilha / Hipopótamo",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Abelha / Tigre / Máquina de Lavar / Serpente",
      Id: 36949,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036949/0036949_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036949/looke_4001.jpg?2029062286",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-abelha-tigre-maquina-de-lavar-serpente",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Abelha / Tigre / Máquina de Lavar / Serpente",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers",
      Id: 36929,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036929/0036929_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036929/looke_4001.jpg?2029062286",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers",
      },
      ParentId: 36928,
      SerieInfo: {
        SeasonName: "Zumbers",
      },
      Type: 2,
    },
    {
      Childs: [],
      FullTitle: "Zulu",
      Id: 43318,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/amz.043318/0043318_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/amz.043318/looke_4001.jpg?2029062286",
        },
      ],
      ImdbId: "tt0058777",
      Metadata: {
        UniqueUrl: "zulu",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zoró - Bichos Esquisitos - Zeca Baleiro e Convidados",
      Id: 44898,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/zer.044898/0044898_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/zer.044898/looke_4001.jpg?2029062286",
        },
      ],
      Metadata: {
        UniqueUrl: "zoro-bichos-esquisitos-zeca-baleiro-e-convidados",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zoorquestra - Volume 1",
      Id: 46803,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/emo.046803/0046803_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/emo.046803/looke_4001.jpg?2029062286",
        },
      ],
      Metadata: {
        UniqueUrl: "zoorquestra-volume-1",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zooparky",
      Id: 66589,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/zop.066589/0066589_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/zop.066589/looke_4001.jpg?2029062286",
        },
      ],
      Metadata: {
        UniqueUrl: "zooparky",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zoobabu - Zoobabu",
      Id: 40392,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/brb.040392/0040392_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/brb.040392/looke_4001.jpg?2029062286",
        },
      ],
      Metadata: {
        UniqueUrl: "zoobabu-zoobabu",
      },
      ParentId: 40390,
      SerieInfo: {
        SeasonName: "Zoobabu",
      },
      Type: 2,
    },
    {
      Childs: [],
      FullTitle:
        "Zoobabu - Ep. 17 - Espadarte / Cavalo Marinho / Morsa / Escorpião / Gato / Panda / Beija-Flor",
      Id: 40407,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/brb.040407/0040407_335.jpg?2029062286",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/brb.040407/looke_4001.jpg?2029062286",
        },
      ],
      Metadata: {
        UniqueUrl:
          "zoobabu-ep-17-espadarte-cavalo-marinho-morsa-escorpiao-gato-panda-beija-flor",
      },
      ParentId: 40392,
      SerieInfo: {
        EpisodeName:
          "Ep. 17 - Espadarte / Cavalo Marinho / Morsa / Escorpião / Gato / Panda / Beija-Flor",
        SeasonName: "Zoobabu - Zoobabu",
      },
      Type: 4,
    },
  ],
  [
    {
      Childs: [],
      FullTitle: "Zuzu Angel",
      Id: 1451,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/wr.001451/0001451_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/wr.001451/looke_4001.jpg?1464497436",
        },
      ],
      ImdbId: "tt0481254",
      Metadata: {
        UniqueUrl: "zuzu-angel",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zumbis - Os Sobreviventes",
      Id: 62748,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/a2.062748/0062748_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/a2.062748/looke_4001.jpg?1464497436",
        },
      ],
      ImdbId: "tt4969672",
      Metadata: {
        UniqueUrl: "zumbis-os-sobreviventes",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zumbiologia - Aproveite Essa Noite",
      Id: 55915,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/cdc.055915/0055915_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/cdc.055915/looke_4001.jpg?1464497436",
        },
      ],
      ImdbId: "tt6220406",
      Metadata: {
        UniqueUrl: "zumbiologia-aproveite-essa-noite",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zumbilênio - Parque dos Monstros",
      Id: 63698,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/uni.063698/0063698_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/uni.063698/looke_4001.jpg?1464497436",
        },
      ],
      ImdbId: "tt5313906",
      Metadata: {
        UniqueUrl: "zumbilenio-parque-dos-monstros",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zumbilândia - Atire Duas Vezes",
      Id: 67651,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/so.067651/0067651_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/so.067651/looke_4001.jpg?1464497436",
        },
      ],
      ImdbId: "tt1560220",
      Metadata: {
        UniqueUrl: "zumbilandia-atire-duas-vezes",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zumbilândia",
      Id: 4537,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/so.004537/0004537_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/so.004537/looke_4001.jpg?1464497436",
        },
      ],
      ImdbId: "tt1156398",
      Metadata: {
        UniqueUrl: "zumbilandia",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Vaso Sanitário / Pasta de Dente / Mangueira / Pá",
      Id: 36981,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036981/0036981_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036981/looke_4001.jpg?1464497436",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-vaso-sanitario-pasta-de-dente-mangueira-pa",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Vaso Sanitário / Pasta de Dente / Mangueira / Pá",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Tartaruga / Telefone / Pote de Café / Palhaço",
      Id: 36932,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036932/0036932_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036932/looke_4001.jpg?1464497436",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-tartaruga-telefone-pote-de-cafe-palhaco",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Tartaruga / Telefone / Pote de Café / Palhaço",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Sofá / Skis / Guarda-Chuva / Boneco de Neve",
      Id: 36979,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036979/0036979_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036979/looke_4001.jpg?1464497436",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-sofa-skis-guarda-chuva-boneco-de-neve",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Sofá / Skis / Guarda-Chuva / Boneco de Neve",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Sled / Bengala / Snowboard / Balanço",
      Id: 36983,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036983/0036983_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036983/looke_4001.jpg?1464497436",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-sled-bengala-snowboard-balanco",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Sled / Bengala / Snowboard / Balanço",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Sapo / Cama / Calças / Boneca",
      Id: 36933,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036933/0036933_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036933/looke_4001.jpg?1464497436",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-sapo-cama-calcas-boneca",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Sapo / Cama / Calças / Boneca",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Relógio / Panda / Peixe / Submarino",
      Id: 36931,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036931/0036931_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036931/looke_4001.jpg?1464497436",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-relogio-panda-peixe-submarino",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Relógio / Panda / Peixe / Submarino",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle:
        "Zumbers - Regador / Travesseiro / Controle Remoto / Botas de Esqui",
      Id: 36982,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036982/0036982_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036982/looke_4001.jpg?1464497436",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-regador-travesseiro-controle-remoto-botas-de-esqui",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Regador / Travesseiro / Controle Remoto / Botas de Esqui",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Quebra-Cabeça / Peixe-Espada / Polvo / Brasão",
      Id: 36955,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036955/0036955_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036955/looke_4001.jpg?1464497436",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-quebra-cabeca-peixe-espada-polvo-brasao",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Quebra-Cabeça / Peixe-Espada / Polvo / Brasão",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Pregos / Computador / Rinoceronte / Pipa",
      Id: 36946,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036946/0036946_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036946/looke_4001.jpg?1464497436",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-pregos-computador-rinoceronte-pipa",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Pregos / Computador / Rinoceronte / Pipa",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Porta / Tubarão / Imagem / Patins",
      Id: 36980,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036980/0036980_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036980/looke_4001.jpg?1464497436",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-porta-tubarao-imagem-patins",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Porta / Tubarão / Imagem / Patins",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Pera / Burro / Banco / Coelho",
      Id: 36941,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036941/0036941_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036941/looke_4001.jpg?1464497436",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-pera-burro-banco-coelho",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Pera / Burro / Banco / Coelho",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Pente / Pinguim / Camisa / Gato",
      Id: 36936,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036936/0036936_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036936/looke_4001.jpg?1464497436",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-pente-pinguim-camisa-gato",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Pente / Pinguim / Camisa / Gato",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Pássaro / Bota / Maçã / Porco",
      Id: 36940,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036940/0036940_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036940/looke_4001.jpg?1464497436",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-passaro-bota-maca-porco",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Pássaro / Bota / Maçã / Porco",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Óculos / Elefante / Coelho de Pelúcia / Poço",
      Id: 36978,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036978/0036978_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036978/looke_4001.jpg?1464497436",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-oculos-elefante-coelho-de-pelucia-poco",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Óculos / Elefante / Coelho de Pelúcia / Poço",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Minhoca / Cenoura / Relógio / Búfalo",
      Id: 36977,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036977/0036977_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036977/looke_4001.jpg?1464497436",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-minhoca-cenoura-relogio-bufalo",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Minhoca / Cenoura / Relógio / Búfalo",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Meia / Cachorro / Violão / Cadeira",
      Id: 36944,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036944/0036944_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036944/looke_4001.jpg?1464497436",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-meia-cachorro-violao-cadeira",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Meia / Cachorro / Violão / Cadeira",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Martelo / Folha / Carneiros / Chave de Fenda",
      Id: 36943,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036943/0036943_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036943/looke_4001.jpg?1464497436",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-martelo-folha-carneiros-chave-de-fenda",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Martelo / Folha / Carneiros / Chave de Fenda",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Luvas / Água-Viva / Chapéu / Caranguejo",
      Id: 36954,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036954/0036954_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036954/looke_4001.jpg?1464497436",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-luvas-agua-viva-chapeu-caranguejo",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Luvas / Água-Viva / Chapéu / Caranguejo",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Livro / Sol / Concha / Frango",
      Id: 36953,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036953/0036953_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036953/looke_4001.jpg?1464497436",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-livro-sol-concha-frango",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Livro / Sol / Concha / Frango",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Leão / Colchão de Ar / Baleia / Lenço",
      Id: 36956,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036956/0036956_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036956/looke_4001.jpg?1464497436",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-leao-colchao-de-ar-baleia-lenco",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Leão / Colchão de Ar / Baleia / Lenço",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Joaninha / Tomate / Frigideira / Cereja",
      Id: 36939,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036939/0036939_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036939/looke_4001.jpg?1464497436",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-joaninha-tomate-frigideira-cereja",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Joaninha / Tomate / Frigideira / Cereja",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Girafa / Óculos de Sol / Vaca / Queijo",
      Id: 36947,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036947/0036947_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036947/looke_4001.jpg?1464497436",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-girafa-oculos-de-sol-vaca-queijo",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Girafa / Óculos de Sol / Vaca / Queijo",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Galochas / Vaso / Balança / Gaveta",
      Id: 36935,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036935/0036935_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036935/looke_4001.jpg?1464497436",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-galochas-vaso-balanca-gaveta",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Galochas / Vaso / Balança / Gaveta",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Flores / Golfinhos / Borboleta / Casa",
      Id: 36930,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036930/0036930_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036930/looke_4001.jpg?1464497436",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-flores-golfinhos-borboleta-casa",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Flores / Golfinhos / Borboleta / Casa",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Faca / Aranha / Televisão / Leopardo",
      Id: 36951,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036951/0036951_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036951/looke_4001.jpg?1464497436",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-faca-aranha-televisao-leopardo",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Faca / Aranha / Televisão / Leopardo",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Escorregador / Bicicleta / Carrinho de Bebê / Bebê",
      Id: 36984,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036984/0036984_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036984/looke_4001.jpg?1464497436",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-escorregador-bicicleta-carrinho-de-bebe-bebe",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Escorregador / Bicicleta / Carrinho de Bebê / Bebê",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Colher / Zebra / Prendedor de Roupas / Esquilo",
      Id: 36942,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036942/0036942_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036942/looke_4001.jpg?1464497436",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-colher-zebra-prendedor-de-roupas-esquilo",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Colher / Zebra / Prendedor de Roupas / Esquilo",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Chupeta / Bule / Carro / Trem",
      Id: 36934,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036934/0036934_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036934/looke_4001.jpg?1464497436",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-chupeta-bule-carro-trem",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Chupeta / Bule / Carro / Trem",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle:
        "Zumbers - Cavalo Marinho / Galo / Jornal / Estrela do Mar / Limão",
      Id: 36976,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036976/0036976_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036976/looke_4001.jpg?1464497436",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-cavalo-marinho-galo-jornal-estrela-do-mar-limao",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Cavalo Marinho / Galo / Jornal / Estrela do Mar / Limão",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Cavalo / Banco / Rato / Balão",
      Id: 36945,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036945/0036945_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036945/looke_4001.jpg?1464497436",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-cavalo-banco-rato-balao",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Cavalo / Banco / Rato / Balão",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Camisolas / Saia / Crocodilo / Banheira",
      Id: 36938,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036938/0036938_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036938/looke_4001.jpg?1464497436",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-camisolas-saia-crocodilo-banheira",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Camisolas / Saia / Crocodilo / Banheira",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Camelo / Bolacha / Raposa / Geléia / Papagaio",
      Id: 36985,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036985/0036985_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036985/looke_4001.jpg?1464497436",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-camelo-bolacha-raposa-geleia-papagaio",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Camelo / Bolacha / Raposa / Geléia / Papagaio",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Bola / Macaco / Celular / Avestruz",
      Id: 36950,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036950/0036950_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036950/looke_4001.jpg?1464497436",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-bola-macaco-celular-avestruz",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Bola / Macaco / Celular / Avestruz",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Barco / Cabra / Tesoura / Pato",
      Id: 36952,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036952/0036952_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036952/looke_4001.jpg?1464497436",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-barco-cabra-tesoura-pato",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Barco / Cabra / Tesoura / Pato",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Banana / Torradeira / Lâmpada / Panela",
      Id: 36937,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036937/0036937_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036937/looke_4001.jpg?1464497436",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-banana-torradeira-lampada-panela",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Banana / Torradeira / Lâmpada / Panela",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Árvore / Pincel / Forquilha / Hipopótamo",
      Id: 36948,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036948/0036948_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036948/looke_4001.jpg?1464497436",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-arvore-pincel-forquilha-hipopotamo",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Árvore / Pincel / Forquilha / Hipopótamo",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Abelha / Tigre / Máquina de Lavar / Serpente",
      Id: 36949,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036949/0036949_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036949/looke_4001.jpg?1464497436",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-abelha-tigre-maquina-de-lavar-serpente",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Abelha / Tigre / Máquina de Lavar / Serpente",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers",
      Id: 36929,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036929/0036929_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036929/looke_4001.jpg?1464497436",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers",
      },
      ParentId: 36928,
      SerieInfo: {
        SeasonName: "Zumbers",
      },
      Type: 2,
    },
    {
      Childs: [],
      FullTitle: "Zulu",
      Id: 43318,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/amz.043318/0043318_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/amz.043318/looke_4001.jpg?1464497436",
        },
      ],
      ImdbId: "tt0058777",
      Metadata: {
        UniqueUrl: "zulu",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zoró - Bichos Esquisitos - Zeca Baleiro e Convidados",
      Id: 44898,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/zer.044898/0044898_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/zer.044898/looke_4001.jpg?1464497436",
        },
      ],
      Metadata: {
        UniqueUrl: "zoro-bichos-esquisitos-zeca-baleiro-e-convidados",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zoorquestra - Volume 1",
      Id: 46803,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/emo.046803/0046803_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/emo.046803/looke_4001.jpg?1464497436",
        },
      ],
      Metadata: {
        UniqueUrl: "zoorquestra-volume-1",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zooparky",
      Id: 66589,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/zop.066589/0066589_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/zop.066589/looke_4001.jpg?1464497436",
        },
      ],
      Metadata: {
        UniqueUrl: "zooparky",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zoobabu - Zoobabu",
      Id: 40392,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/brb.040392/0040392_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/brb.040392/looke_4001.jpg?1464497436",
        },
      ],
      Metadata: {
        UniqueUrl: "zoobabu-zoobabu",
      },
      ParentId: 40390,
      SerieInfo: {
        SeasonName: "Zoobabu",
      },
      Type: 2,
    },
    {
      Childs: [],
      FullTitle:
        "Zoobabu - Ep. 17 - Espadarte / Cavalo Marinho / Morsa / Escorpião / Gato / Panda / Beija-Flor",
      Id: 40407,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/brb.040407/0040407_335.jpg?1464497436",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/brb.040407/looke_4001.jpg?1464497436",
        },
      ],
      Metadata: {
        UniqueUrl:
          "zoobabu-ep-17-espadarte-cavalo-marinho-morsa-escorpiao-gato-panda-beija-flor",
      },
      ParentId: 40392,
      SerieInfo: {
        EpisodeName:
          "Ep. 17 - Espadarte / Cavalo Marinho / Morsa / Escorpião / Gato / Panda / Beija-Flor",
        SeasonName: "Zoobabu - Zoobabu",
      },
      Type: 4,
    },
  ],
  [
    {
      Childs: [],
      FullTitle: "Zuzu Angel",
      Id: 1451,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/wr.001451/0001451_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/wr.001451/looke_4001.jpg?1328856226",
        },
      ],
      ImdbId: "tt0481254",
      Metadata: {
        UniqueUrl: "zuzu-angel",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zumbis - Os Sobreviventes",
      Id: 62748,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/a2.062748/0062748_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/a2.062748/looke_4001.jpg?1328856226",
        },
      ],
      ImdbId: "tt4969672",
      Metadata: {
        UniqueUrl: "zumbis-os-sobreviventes",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zumbiologia - Aproveite Essa Noite",
      Id: 55915,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/cdc.055915/0055915_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/cdc.055915/looke_4001.jpg?1328856226",
        },
      ],
      ImdbId: "tt6220406",
      Metadata: {
        UniqueUrl: "zumbiologia-aproveite-essa-noite",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zumbilênio - Parque dos Monstros",
      Id: 63698,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/uni.063698/0063698_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/uni.063698/looke_4001.jpg?1328856226",
        },
      ],
      ImdbId: "tt5313906",
      Metadata: {
        UniqueUrl: "zumbilenio-parque-dos-monstros",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zumbilândia - Atire Duas Vezes",
      Id: 67651,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/so.067651/0067651_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/so.067651/looke_4001.jpg?1328856226",
        },
      ],
      ImdbId: "tt1560220",
      Metadata: {
        UniqueUrl: "zumbilandia-atire-duas-vezes",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zumbilândia",
      Id: 4537,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/so.004537/0004537_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/so.004537/looke_4001.jpg?1328856226",
        },
      ],
      ImdbId: "tt1156398",
      Metadata: {
        UniqueUrl: "zumbilandia",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Vaso Sanitário / Pasta de Dente / Mangueira / Pá",
      Id: 36981,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036981/0036981_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036981/looke_4001.jpg?1328856226",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-vaso-sanitario-pasta-de-dente-mangueira-pa",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Vaso Sanitário / Pasta de Dente / Mangueira / Pá",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Tartaruga / Telefone / Pote de Café / Palhaço",
      Id: 36932,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036932/0036932_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036932/looke_4001.jpg?1328856226",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-tartaruga-telefone-pote-de-cafe-palhaco",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Tartaruga / Telefone / Pote de Café / Palhaço",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Sofá / Skis / Guarda-Chuva / Boneco de Neve",
      Id: 36979,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036979/0036979_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036979/looke_4001.jpg?1328856226",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-sofa-skis-guarda-chuva-boneco-de-neve",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Sofá / Skis / Guarda-Chuva / Boneco de Neve",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Sled / Bengala / Snowboard / Balanço",
      Id: 36983,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036983/0036983_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036983/looke_4001.jpg?1328856226",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-sled-bengala-snowboard-balanco",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Sled / Bengala / Snowboard / Balanço",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Sapo / Cama / Calças / Boneca",
      Id: 36933,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036933/0036933_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036933/looke_4001.jpg?1328856226",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-sapo-cama-calcas-boneca",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Sapo / Cama / Calças / Boneca",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Relógio / Panda / Peixe / Submarino",
      Id: 36931,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036931/0036931_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036931/looke_4001.jpg?1328856226",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-relogio-panda-peixe-submarino",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Relógio / Panda / Peixe / Submarino",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle:
        "Zumbers - Regador / Travesseiro / Controle Remoto / Botas de Esqui",
      Id: 36982,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036982/0036982_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036982/looke_4001.jpg?1328856226",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-regador-travesseiro-controle-remoto-botas-de-esqui",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Regador / Travesseiro / Controle Remoto / Botas de Esqui",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Quebra-Cabeça / Peixe-Espada / Polvo / Brasão",
      Id: 36955,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036955/0036955_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036955/looke_4001.jpg?1328856226",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-quebra-cabeca-peixe-espada-polvo-brasao",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Quebra-Cabeça / Peixe-Espada / Polvo / Brasão",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Pregos / Computador / Rinoceronte / Pipa",
      Id: 36946,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036946/0036946_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036946/looke_4001.jpg?1328856226",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-pregos-computador-rinoceronte-pipa",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Pregos / Computador / Rinoceronte / Pipa",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Porta / Tubarão / Imagem / Patins",
      Id: 36980,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036980/0036980_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036980/looke_4001.jpg?1328856226",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-porta-tubarao-imagem-patins",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Porta / Tubarão / Imagem / Patins",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Pera / Burro / Banco / Coelho",
      Id: 36941,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036941/0036941_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036941/looke_4001.jpg?1328856226",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-pera-burro-banco-coelho",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Pera / Burro / Banco / Coelho",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Pente / Pinguim / Camisa / Gato",
      Id: 36936,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036936/0036936_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036936/looke_4001.jpg?1328856226",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-pente-pinguim-camisa-gato",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Pente / Pinguim / Camisa / Gato",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Pássaro / Bota / Maçã / Porco",
      Id: 36940,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036940/0036940_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036940/looke_4001.jpg?1328856226",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-passaro-bota-maca-porco",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Pássaro / Bota / Maçã / Porco",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Óculos / Elefante / Coelho de Pelúcia / Poço",
      Id: 36978,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036978/0036978_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036978/looke_4001.jpg?1328856226",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-oculos-elefante-coelho-de-pelucia-poco",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Óculos / Elefante / Coelho de Pelúcia / Poço",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Minhoca / Cenoura / Relógio / Búfalo",
      Id: 36977,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036977/0036977_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036977/looke_4001.jpg?1328856226",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-minhoca-cenoura-relogio-bufalo",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Minhoca / Cenoura / Relógio / Búfalo",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Meia / Cachorro / Violão / Cadeira",
      Id: 36944,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036944/0036944_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036944/looke_4001.jpg?1328856226",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-meia-cachorro-violao-cadeira",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Meia / Cachorro / Violão / Cadeira",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Martelo / Folha / Carneiros / Chave de Fenda",
      Id: 36943,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036943/0036943_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036943/looke_4001.jpg?1328856226",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-martelo-folha-carneiros-chave-de-fenda",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Martelo / Folha / Carneiros / Chave de Fenda",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Luvas / Água-Viva / Chapéu / Caranguejo",
      Id: 36954,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036954/0036954_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036954/looke_4001.jpg?1328856226",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-luvas-agua-viva-chapeu-caranguejo",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Luvas / Água-Viva / Chapéu / Caranguejo",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Livro / Sol / Concha / Frango",
      Id: 36953,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036953/0036953_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036953/looke_4001.jpg?1328856226",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-livro-sol-concha-frango",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Livro / Sol / Concha / Frango",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Leão / Colchão de Ar / Baleia / Lenço",
      Id: 36956,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036956/0036956_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036956/looke_4001.jpg?1328856226",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-leao-colchao-de-ar-baleia-lenco",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Leão / Colchão de Ar / Baleia / Lenço",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Joaninha / Tomate / Frigideira / Cereja",
      Id: 36939,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036939/0036939_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036939/looke_4001.jpg?1328856226",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-joaninha-tomate-frigideira-cereja",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Joaninha / Tomate / Frigideira / Cereja",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Girafa / Óculos de Sol / Vaca / Queijo",
      Id: 36947,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036947/0036947_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036947/looke_4001.jpg?1328856226",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-girafa-oculos-de-sol-vaca-queijo",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Girafa / Óculos de Sol / Vaca / Queijo",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Galochas / Vaso / Balança / Gaveta",
      Id: 36935,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036935/0036935_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036935/looke_4001.jpg?1328856226",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-galochas-vaso-balanca-gaveta",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Galochas / Vaso / Balança / Gaveta",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Flores / Golfinhos / Borboleta / Casa",
      Id: 36930,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036930/0036930_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036930/looke_4001.jpg?1328856226",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-flores-golfinhos-borboleta-casa",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Flores / Golfinhos / Borboleta / Casa",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Faca / Aranha / Televisão / Leopardo",
      Id: 36951,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036951/0036951_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036951/looke_4001.jpg?1328856226",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-faca-aranha-televisao-leopardo",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Faca / Aranha / Televisão / Leopardo",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Escorregador / Bicicleta / Carrinho de Bebê / Bebê",
      Id: 36984,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036984/0036984_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036984/looke_4001.jpg?1328856226",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-escorregador-bicicleta-carrinho-de-bebe-bebe",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Escorregador / Bicicleta / Carrinho de Bebê / Bebê",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Colher / Zebra / Prendedor de Roupas / Esquilo",
      Id: 36942,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036942/0036942_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036942/looke_4001.jpg?1328856226",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-colher-zebra-prendedor-de-roupas-esquilo",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Colher / Zebra / Prendedor de Roupas / Esquilo",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Chupeta / Bule / Carro / Trem",
      Id: 36934,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036934/0036934_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036934/looke_4001.jpg?1328856226",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-chupeta-bule-carro-trem",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Chupeta / Bule / Carro / Trem",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle:
        "Zumbers - Cavalo Marinho / Galo / Jornal / Estrela do Mar / Limão",
      Id: 36976,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036976/0036976_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036976/looke_4001.jpg?1328856226",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-cavalo-marinho-galo-jornal-estrela-do-mar-limao",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Cavalo Marinho / Galo / Jornal / Estrela do Mar / Limão",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Cavalo / Banco / Rato / Balão",
      Id: 36945,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036945/0036945_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036945/looke_4001.jpg?1328856226",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-cavalo-banco-rato-balao",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Cavalo / Banco / Rato / Balão",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Camisolas / Saia / Crocodilo / Banheira",
      Id: 36938,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036938/0036938_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036938/looke_4001.jpg?1328856226",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-camisolas-saia-crocodilo-banheira",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Camisolas / Saia / Crocodilo / Banheira",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Camelo / Bolacha / Raposa / Geléia / Papagaio",
      Id: 36985,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036985/0036985_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036985/looke_4001.jpg?1328856226",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-camelo-bolacha-raposa-geleia-papagaio",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Camelo / Bolacha / Raposa / Geléia / Papagaio",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Bola / Macaco / Celular / Avestruz",
      Id: 36950,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036950/0036950_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036950/looke_4001.jpg?1328856226",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-bola-macaco-celular-avestruz",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Bola / Macaco / Celular / Avestruz",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Barco / Cabra / Tesoura / Pato",
      Id: 36952,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036952/0036952_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036952/looke_4001.jpg?1328856226",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-barco-cabra-tesoura-pato",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Barco / Cabra / Tesoura / Pato",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Banana / Torradeira / Lâmpada / Panela",
      Id: 36937,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036937/0036937_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036937/looke_4001.jpg?1328856226",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-banana-torradeira-lampada-panela",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Banana / Torradeira / Lâmpada / Panela",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Árvore / Pincel / Forquilha / Hipopótamo",
      Id: 36948,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036948/0036948_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036948/looke_4001.jpg?1328856226",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-arvore-pincel-forquilha-hipopotamo",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Árvore / Pincel / Forquilha / Hipopótamo",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers - Abelha / Tigre / Máquina de Lavar / Serpente",
      Id: 36949,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036949/0036949_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036949/looke_4001.jpg?1328856226",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers-abelha-tigre-maquina-de-lavar-serpente",
      },
      ParentId: 36929,
      SerieInfo: {
        EpisodeName: "Abelha / Tigre / Máquina de Lavar / Serpente",
        SeasonName: "Zumbers",
      },
      Type: 4,
    },
    {
      Childs: [],
      FullTitle: "Zumbers",
      Id: 36929,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/mot.036929/0036929_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/mot.036929/looke_4001.jpg?1328856226",
        },
      ],
      Metadata: {
        UniqueUrl: "zumbers",
      },
      ParentId: 36928,
      SerieInfo: {
        SeasonName: "Zumbers",
      },
      Type: 2,
    },
    {
      Childs: [],
      FullTitle: "Zulu",
      Id: 43318,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/amz.043318/0043318_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/amz.043318/looke_4001.jpg?1328856226",
        },
      ],
      ImdbId: "tt0058777",
      Metadata: {
        UniqueUrl: "zulu",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zoró - Bichos Esquisitos - Zeca Baleiro e Convidados",
      Id: 44898,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/zer.044898/0044898_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/zer.044898/looke_4001.jpg?1328856226",
        },
      ],
      Metadata: {
        UniqueUrl: "zoro-bichos-esquisitos-zeca-baleiro-e-convidados",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zoorquestra - Volume 1",
      Id: 46803,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/emo.046803/0046803_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/emo.046803/looke_4001.jpg?1328856226",
        },
      ],
      Metadata: {
        UniqueUrl: "zoorquestra-volume-1",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zooparky",
      Id: 66589,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/zop.066589/0066589_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/zop.066589/looke_4001.jpg?1328856226",
        },
      ],
      Metadata: {
        UniqueUrl: "zooparky",
      },
      SerieInfo: {},
      Type: 8,
    },
    {
      Childs: [],
      FullTitle: "Zoobabu - Zoobabu",
      Id: 40392,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/brb.040392/0040392_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/brb.040392/looke_4001.jpg?1328856226",
        },
      ],
      Metadata: {
        UniqueUrl: "zoobabu-zoobabu",
      },
      ParentId: 40390,
      SerieInfo: {
        SeasonName: "Zoobabu",
      },
      Type: 2,
    },
    {
      Childs: [],
      FullTitle:
        "Zoobabu - Ep. 17 - Espadarte / Cavalo Marinho / Morsa / Escorpião / Gato / Panda / Beija-Flor",
      Id: 40407,
      Images: [
        {
          TypeId: -1,
          Url:
            "http://ottvsimg.ottvs.com.br/cov/brb.040407/0040407_335.jpg?1328856226",
        },
        {
          TypeId: 4001,
          Url:
            "http://ottvsimg.ottvs.com.br/ban/brb.040407/looke_4001.jpg?1328856226",
        },
      ],
      Metadata: {
        UniqueUrl:
          "zoobabu-ep-17-espadarte-cavalo-marinho-morsa-escorpiao-gato-panda-beija-flor",
      },
      ParentId: 40392,
      SerieInfo: {
        EpisodeName:
          "Ep. 17 - Espadarte / Cavalo Marinho / Morsa / Escorpião / Gato / Panda / Beija-Flor",
        SeasonName: "Zoobabu - Zoobabu",
      },
      Type: 4,
    },
  ],
];

export default data;
