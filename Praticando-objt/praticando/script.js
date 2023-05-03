const reviews = [
    {
        name: "Susan Smith",
        job: "Web Developer",
        image: "https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up",
    },

    {
        name: "Jason momoa",
        job: "Ator",
        image: "https://akns-images.eonline.com/eol_images/Entire_Site/2018630/rs_600x600-180730133438-600-jason-momoa-073018.jpg?fit=around%7C600:600&output-quality=90&crop=600:600;center,top",
        text: "é um ator, modelo, roteirista, diretor e produtor norte-americano. Filho único de pai havaiano e mãe de ascendência alemã e irlandesa, foi criado em Norwalk, Iowa, por sua mãe. Seu tio é o famoso surfista Brian Keaulana. Jason Momoa é conhecido pelos seus papéis como Jason Ioane em Baywatch Hawaii, Khal Drogo em Game of Thrones, Ronon Dex em Stargate Atlantis, o guerreiro cimério Conan, em Conan the Barbarian e o herói Aquaman no Universo Estendido DC.",
    },

    {
        name: "Robert",
        job: "Ator",
        image: "https://i0.wp.com/oquartonerd.com.br/wp-content/uploads/2021/04/Robert-Downey-Jr.-em-5-filmes-O-Quarto-Nerd.jpg?w=1050&ssl=1",
        text: "Downey nunca teve uma formação dramática acadêmica, mas os contatos do pai abriram portas desde aí. Stélvio Trafalgar T foi o seu mentor na carreira profissional.[5] Participou com 5 e 7 anos dos filmes Pound e Greaser's Palace, respectivamente. Aos 19 anos, fez uma ponta no filme de Michael Apted, Firstborn.",
    },

    {
        name: "Chris Evans",
        job: "Ator",
        image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chris-evans-attends-the-lightyear-uk-premiere-at-cineworld-news-photo-1667909478.jpg?crop=0.666xw:1.00xh;0.155xw,0&resize=640:*",
        text: "Evans nasceu em Boston, Massachusetts,[6] e foi criado na cidade de Sudbury.[7] Sua mãe, Lisa Marie (nascida Capuano), é diretora artística do Concord Youth Theatre,[8][9] e seu pai, G. Robert Evans III, é dentista.[10] Sua mãe é descendente de italianos e irlandeses, enquanto o pai tem ascendência britânica e alemã.[10][11][12][13] Seus pais divorciaram-se em 1999.[14]",
    },
    {
        name: "Maicon",
        job: "Ator",
        image: "https://i0.wp.com/media.ghgossip.com/wp-content/uploads/2022/11/10130807/michael-b-jordan.jpg",
        text: "Ele lançou sua carreira como ator profissional em 1999, quando apareceu brevemente em episódios individuais da série de televisão Cosby e The Sopranos.[6] Seu primeiro papel principal no cinema ocorreu em 2001, quando ele apareceu em Hardball, estrelado por Keanu Reeves. Em 2002, ele ganhou mais atenção ao interpretar Wallace na primeira temporada de The Wire da HBO.",
    },
];

let i = 0
function butaoD(){
    i++
    document.getElementById('name').innerHTML = reviews[i].name
    document.getElementById('job').innerHTML = reviews[i].job
    document.getElementById('description').innerHTML = reviews[i].text
    document.getElementById('img').setAttribute('src', reviews[i].image)
}
function butaoE(){
    i--
    document.getElementById('name').innerHTML = reviews[i].name
    document.getElementById('job').innerHTML = reviews[i].job
    document.getElementById('description').innerHTML = reviews[i].text
    document.getElementById('img').setAttribute('src', reviews[i].image)
}