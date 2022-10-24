const peliculasBuenas = [
    {
        id:"Adaptation", 
        foto: "https://pics.filmaffinity.com/adaptation-325572039-large.jpg", 
        nombre: "Adaptation (2002)", 
        descripcion: "Surrealismo y chistes meta en un guionazo de Charlie Kaufman.",
        precio: 200,
    },
    {
        id:"Pig", 
        foto: "https://pics.filmaffinity.com/Pig-271208833-large.jpg", 
        nombre: "Pig (2021)", 
        descripcion: "Tremendo drama sobre el aferro al amor perdido.",
        precio: 200
    },
    {
        id:"TUWOMT", 
        foto: "https://pics.filmaffinity.com/the_unbearable_weight_of_massive_talent-978504688-large.jpg",  
        nombre: "The Unbearable Weight of Massive Talent (2022)", 
        descripcion: "Un homenaje a toda la carrera de Nicolas Cage en tono de comedia ochentera.",
        precio: 200
    },
    {
        id:"BOTD", 
        foto: "https://m.media-amazon.com/images/M/MV5BMDMyMjEyYzEtODVlZC00OWY0LTkxZjItNjJmOWRjNzQxMGNmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",  
        nombre: "Bringing Out the Dead (1999)", 
        descripcion: "Drama oscurísimo sobre la 'vida' de un conductor de ambulancia en el Nueva York de fines de los 90s.",
        precio: 200
    },
    {
        id:"RA", 
        foto: "https://pics.filmaffinity.com/raising_arizona-704161404-large.jpg",  
        nombre: "Raising Arizona (1987)", 
        descripcion: "Una comedia lisérgica como solo a los hermanos Coen se les podría ocurrir.",
        precio: 200
    },
    {
        id:"LOW", 
        foto: "https://pics.filmaffinity.com/lord_of_war-604520828-large.jpg",  
        nombre: "Lord Of War (2005)", 
        descripcion: "Drama con onda sobre el tráfico ilegal de armas.",
        precio: 200
    },
    {
        id:"Mandy", 
        foto: "https://pics.filmaffinity.com/mandy-202165874-large.jpg",  
        nombre: "Mandy (2018)", 
        descripcion: "Es una cosa rara y hermosa, lerda al principio pero levanta.",
        precio: 200
    },
    {
        id:"DL", 
        foto: "https://www.themoviedb.org/t/p/original/zRULXsd0rb1lVfnSyQkYPi2nLcB.jpg",  
        nombre: "Bad Lieutenant: Port of Call New Orleans (2009)", 
        descripcion: "Por que un director Avant Garde se junta con un actor de hollywood para hacer un policial negro? No hay por que.",
        precio: 200
    },
    {
        id:"LLV",
        foto: "./media/peliculas/Leaving-las-vegas.jpg",
        nombre: "Leaving Las Vegas (1995)",
        descripcion: "Un guionista alcohólico se va a Las Vegas literalmente a tomarse la vida. Si, es un bajón.",
        precio: 200
    },
    {
        id:"RRW",
        foto: "./media/peliculas/red-rock-west.jpg",
        nombre: "Red Rock West (1993)",
        descripcion: "No la vi pero internet dice que es buena :D",
        precio: 200
    },
    {
        id:"moonstruck",
        foto: "./media/peliculas/moonstruck.jpg",
        nombre: "Moonstruck (1987)",
        descripcion: "No la ví pero esta Cher (?",
        precio: 200
    },
    {
        id:"joe",
        foto: "./media/peliculas/joe.jpg",
        nombre: "Joe (2013)",
        descripcion: "Nic Cage con barba",
        precio: 200
    },
    
];
const peliculasMalas = [
    {
        id:"LB", 
        foto: "https://pics.filmaffinity.com/left_behind-390787424-large.jpg", 
        nombre: "Left Behind (2014)", 
        descripcion: "Nic interpreta a un piloto de avion durante el rapture, <a href='https://www.youtube.com/watch?v=tuJSQ3Aejzs' target='_blank'>es basura</a>'",
        precio: 100
    },
    {
        id:"TSA", 
        foto: "https://pics.filmaffinity.com/the_sorcerer_s_apprentice-565549347-large.jpg", 
        nombre: "The Sorcerer's Apprentice (2010)", 
        descripcion: "Piratas del Caribe pero sin lo divertido",
        precio: 100
    },
    {
        id:"Rage", 
        foto: "https://pics.filmaffinity.com/rage_tokarev-344559908-large.jpg",  
        nombre: "Rage/Tokarev (2014)", 
        descripcion: "Un embole atómico con un final todavía peor",
        precio: 100
    },
    {
        id:"Next", 
        foto: "https://pics.filmaffinity.com/next-247262667-large.jpg",  
        nombre: "Next (2007)", 
        descripcion: "Ni <a href='https://i.imgflip.com/3120zm.jpg' target='_blank'>el meme</a> alcanza para que valga la pena verla",
        precio: 100
    },
    {
        id:"COA", 
        foto: "https://www.lavanguardia.com/peliculas-series/images/movie/poster/1998/4/w1280/6QGGsTvbeNvQ5kNcshnAIDBSbn.jpg",  
        nombre: "City of Angels (1998)", 
        descripcion: "Un angel se enamora de Meg Ryan y decide renunciar a ser angel porque la eternidad es casi tan aburrida como la pelicula.",
        precio: 100
    },
    {
        id:"BD", 
        foto: "https://pics.filmaffinity.com/bangkok_dangerous-898462695-large.jpg",  
        nombre: "Bangkok Dangerous (2008)", 
        descripcion: "Solo me acuerdo de que es mala",
        precio: 100
    },
    {
        id:"GR", 
        foto: "https://pics.filmaffinity.com/Ghost_Rider_El_motorista_fantasma-857214601-large.jpg",  
        nombre: "Ghost Rider (2007)", 
        descripcion: "Nic la pega en el palo haciendo Marvel justo antes de que les salga bien la formula del universo cinematografico.",
        precio: 100
    },
    {
        id:"TWM", 
        foto: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/32cb9d55254fd137553f5992ce2fc9302a3e60a81557091924de5b6849591a5b._RI_V_TTW_.jpg",  
        nombre: "The Wicker Man (2006)", 
        descripcion: "Mira Marge, no voy a mentirte, todavía no junte las fuerzas para ver esta pero <a href='https://www.youtube.com/watch?v=EVCrmXW6-Pk' target='_blank'>not the bees!</a>",
        precio: 100
    }
];
const peliculasFeas = [
    {
        id:"Rock", 
        foto: "https://pics.filmaffinity.com/the_rock-858467513-large.jpg", 
        nombre: "The Rock (1996)", 
        descripcion: "Un clasicaso pochoclero, increible que sea de Michael Bay",
        precio: 150
    },
    {
        id:"ConAir", 
        foto: "https://pics.filmaffinity.com/con_air-637990007-large.jpg", 
        nombre: "Con Air (1997)", 
        descripcion: "Otro clasicaso pochoclero pero en un avion",
        precio: 150
    },
    {
        id:"WW", 
        foto: "https://pics.filmaffinity.com/willy_s_wonderland-610969353-large.jpg",  
        nombre: "Willy's Wonderland (2021)", 
        descripcion: "Una bizarreada de bajo presupuesto que entretiene si no le pedis mucho",
        precio: 150
    },
    {
        id:"NT", 
        foto: "https://pics.filmaffinity.com/national_treasure-804428271-large.jpg",  
        nombre: "National Treasure (2004)", 
        descripcion: "Piratas del Caribe pero con lo divertido y sin piratas",
        precio: 150
    },
    {
        id:"FO", 
        foto: "https://m.media-amazon.com/images/M/MV5BYzFjNzIxMmEtMzY5NS00YTgzLTkwYWEtN2FjMmY0NmNkZWY3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",  
        nombre: "Face/Off (1997)", 
        descripcion: "Un delirio que quedó en la historia, es ver para creer",
        precio: 150
    },
    {
        id:"GISS", 
        foto: "https://3.bp.blogspot.com/-66RcL960WGE/UBHjCTM9kCI/AAAAAAAAFx8/UnbR1SuvNt4/s1600/Gone+in+Sixty+Seconds+%282000%29.jpg",  
        nombre: "Gone in Sixty Seconds (2000)", 
        descripcion: "Nic tiene que robar 50 autos de lujo en una noche, parece que va a ser peor que las de Rapido y Furioso pero entretiene!",
        precio: 150
    },
    {
        id:"WaH", 
        foto: "https://m.media-amazon.com/images/I/91uS74wouML._SL1500_.jpg",  
        nombre: "Wild at Heart (1990)", 
        descripcion: "David Lynch, Nicolas Cage... y Maggie rió, todo fue una confusión.",
        precio: 150
    },
    {
        id:"Deadfall", 
        foto: "https://flxt.tmsimg.com/assets/p15177_p_v8_ad.jpg",  
        nombre: "Deadfall (1993)", 
        descripcion: "Tendría que ir en las malas pero la pelicula se da cuenta y pega un 180° cuando mete al Nicolas Cage mas bizarro hasta la fecha.",
        precio: 150
    }
];
