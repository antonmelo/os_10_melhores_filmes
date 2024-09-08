let dados = [
    {
        titulo: "1. Los Angeles: Cidade Proibida",
        ano: 1997,
        diretor: "Curtis Hanson",
        resumo: "Los Angeles: Cidade Proibida, lançado em 1997 e dirigido por Curtis Hanson, é um neo-noir que reimagina o gênero clássico, ambientado na Los Angeles dos anos 1950. O filme mergulha em um universo de corrupção policial, assassinatos e conspirações, explorando os bastidores da cidade dos anjos.",
        genero: "crime, drama, noir",
        atores: "Russell Crowe, Guy Pearce, Kevin Spacey",
        plataforma: "https://www.disneyplus.com/pt-br/movies/la-confidential/hGZKxA8d9aI5",
        link: "https://www.rottentomatoes.com/m/la_confidential",
        tags: "corrupção, policial, noir, los angeles"
    },
    {
        titulo: "2. O Poderoso Chefão",
        ano: 1972,
        diretor: "Francis Ford Coppola",
        resumo: "O Poderoso Chefão, lançado em 1972 e dirigido por Francis Ford Coppola, é um marco na história do cinema. A obra, adaptada do romance homônimo de Mario Puzo, narra a saga da família Corleone, uma poderosa máfia italiana em Nova York.",
        genero: "crime, drama",
        atores: "Marlon Brando, Al Pacino, James Caan",
        plataforma: "https://qr.netflix.com/br/title/60011152",
        link: "https://www.rottentomatoes.com/m/the_godfather",
        tags: "máfia, família, poder, itália"
    },
    {
        titulo: "3. Casablanca",
        ano: 1942,
        diretor: "Michael Curtiz",
        resumo: "Um drama romântico ambientado na Segunda Guerra Mundial, estrelado por Humphrey Bogart e Ingrid Bergman. O filme, lançado em 1942 e dirigido por Michael Curtiz, narra a história de um americano que possui um café em Casablanca e se envolve em uma trama de amor e espionagem.",
        genero: "drama, romântico, guerra",
        atores: "Humphrey Bogart, Ingrid Bergman, Paul Henreid",
        plataforma: "https://www.max.com/br/pt/movies/casablanca/83b99ff6-56a0-4696-aa68-fdd6d3f31efa",
        link: "https://www.rottentomatoes.com/m/1003707-casablanca",
        tags: "Segunda Guerra Mundial, amor, resistência, Casablanca"
    },
    {
        titulo: "4. Os Sete Samurais",
        ano: 1954,
        diretor: "Akira Kurosawa",
        resumo: "Os Sete Samurais, lançado em 1954 e dirigido pelo lendário Akira Kurosawa, é um dos filmes mais influentes da história do cinema. A obra, que se passa no Japão feudal, narra a história de uma vila que, cansada de ser constantemente atacada por bandidos, decide contratar sete samurais para defendê-la.",
        genero: "ação, aventura, drama, histórico",
        atores: "Toshirô Mifune, Takashi Shimura, Keiko Tsushima",
        plataforma: "https://www.clarotvmais.com.br/filme/os-sete-samurais/2930951",
        link: "https://www.rottentomatoes.com/m/seven_samurai_1956",
        tags: "samurai, japão feudal, heroísmo, trabalho em equipe"
    },
    {
        titulo: "5. Parasita",
        ano: 2019,
        diretor: "Bong Joon-ho",
        resumo: "Parasita (Gisaengchung, em coreano), lançado em 2019 e dirigido pelo aclamado Bong Joon-ho, é um filme sul-coreano que conquistou o mundo ao levar para casa o Oscar de Melhor Filme. A obra é uma sátira social que explora as disparidades de classe de forma inteligente e provocativa.",
        genero: "thriller, drama social",
        atores: "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong, Park So-dam",
        plataforma: "https://globoplay.globo.com/parasita/t/nNRCJg5rkJ/",
        link: "https://www.rottentomatoes.com/m/parasite_2019",
        tags: "desigualdade social, classe social, sátira, suspense, coréia do sul"
    },
    {
        titulo: "6. A Lista de Schindler",
        ano: 1993,
        diretor: "Steven Spielberg",
        resumo: "A Lista de Schindler, lançado em 1993 e dirigido por Steven Spielberg, é um poderoso drama histórico que retrata a história real de Oskar Schindler, um empresário alemão que salvou mais de mil judeus do Holocausto.",
        genero: "drama histórico, guerra, holocausto",
        atores: "Liam Neeson, Ben Kingsley, Ralph Fiennes",
        plataforma: "https://qr.netflix.com/br/title/60036359",
        link: "https://www.rottentomatoes.com/m/schindlers_list",
        tags: "holocausto, segunda guerra mundial, heroísmo, resistência, indústria",
    },
    {
        titulo: "7. Top Gun: Maverick",
        ano: 2022,
        diretor: "Joseph Kosinski",
        resumo: "Top Gun: Maverick (2022), dirigido por Joseph Kosinski, é a aguardada sequência do clássico dos anos 80, 'Top Gun - Ases Indomáveis'. O filme traz de volta o icônico personagem Pete 'Maverick' Mitchell, interpretado por Tom Cruise, mais de 30 anos após os acontecimentos do primeiro filme.",
        genero: "ação, aventura, drama",
        atores: "Tom Cruise, Miles Teller, Jennifer Connelly",
        plataforma: "https://www.paramountplus.com/br/",
        link: "https://www.rottentomatoes.com/m/top_gun_maverick",
        tags: "avião de caça, força aérea, amizade, superação, nostalgia"
    },
    {
        titulo: "8. Toy Story 2",
        ano: 1999,
        diretor: "John Lasseter, Ash Brannon, Lee Unkrich",
        resumo: "Toy Story 2 (1999), dirigido por John Lasseter, é a emocionante continuação da animação que revolucionou o cinema. Quatro anos após a primeira aventura, Woody, o caubói de pano, é sequestrado por um colecionador de brinquedos que pretende vendê-lo para um museu no Japão.",
        genero: "animação, aventura, comédia, infantil",
        atores: "Tom Hank, Tim Allen, Joan Cusack", // vozes originais
        plataforma: "https://www.disneyplus.com/movies/toy-story-2-em-busca-de-woody/6eunXQzaXkGr",
        link: "https://www.rottentomatoes.com/m/toy_story_2",
        tags: "brinquedos, amizade, Pixar, animação, franquia Toy Story"
    },
    {
        titulo: "9. Chinatown",
        ano: 1974,
        diretor: "Roman Polanski",
        resumo: "Chinatown (1974), dirigido pelo mestre do suspense Roman Polanski, é um filme noir neoclássico que mergulha nas profundezas da corrupção e da intriga em Los Angeles. A trama se desenrola em um cenário árido e sombrio, onde um detetive particular, J.J. Gittes, é contratado para investigar um caso de adultério que se revela muito mais complexo do que aparenta.",
        genero: "neo-noir",
        atores: "Jack Nicholson, Faye Dunaway, John Huston",
        plataforma: "https://tv.apple.com/br/movie/chinatown/umc.cmc.2fu6smvsot08y0ebs5gatspfb",
        link: "https://www.rottentomatoes.com/m/chinatown",
        tags: "corrupção, Los Angeles, água, família, trama complexa"
    },
    {
        titulo: "10. Sindicato de Ladrões",
        ano: 1954,
        diretor: "Elia Kazan",
        resumo: "Sindicato de Ladrões, lançado em 1954 e dirigido por Elia Kazan, é um clássico do cinema que explora a corrupção nos sindicatos trabalhistas americanos dos anos 1950.",
        genero: "drama, crime, noir",
        atores: "Marlon Brando, Karl Malden, Eva Marie Saint",
        plataforma: "https://www.max.com/br/pt/movies/sindicato-de-ladroes/851a9b49-0409-4704-bf17-b16530a6b5af",
        link: "https://www.rottentomatoes.com/m/on_the_waterfront",
        tags: "sindicato, corrupção, trabalhadores, cais, nova york"
    },
];

