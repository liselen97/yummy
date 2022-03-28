let carousel=["desayuno_3.jpg",  "cupcakes.jpg", "postre_1.jpg", "fiestas.jpg"]

let trufasVeg={
    id: 0, 
    nombre: 'Trufas crudiveganas',
    categoria: ['Postres', 'Saludables'],
    tiempo_total:'5 min' ,
    raciones: 14,
    ingredientes: [
        {
            cantidad: 115,
            unidad: "gr",
            ingrediente: "de nueces"
        },

        { 
            cantidad: 200, 
            unidad:"gr",
            ingrediente:"de dátiles Medjool"
        }, 

        {
            cantidad: 2,
            unidad: "cucharada(s)",
            ingrediente: "de cacao en polvo crudo"
        }
    ],
    puntuacion: 3,
    total_puntos: 6,
    cant_votos: 2,
    preparacion:["Echa las nueces en el procesador de alimentos y bate durante unos segundos hasta que estén desmenuzadas.", "Añade los dátiles (sin hueso) y el cacao. Vuelve a batir hasta obtener la consistencia perfecta.", "Haz bolitas con tus manos.", "Guarda las trufas en un recipiente hermético a temperatura ambiente o en la nevera."],
    folder: 'trufas_crudiveganas',
    imagenes: ["trufasCrudiveganas.jpg", "trufasCrudiveganas_1.jpg", "trufasCrudiveganas_2.jpg", "trufasCrudiveganas_3.jpg"]
}

let galletasVeg={
    id: 1, 
    nombre:'Galletas veganas',
    categoria: ['Desayuno o Merienda', 'Saludables'],
    tiempo_total:'30 min',
    raciones: 18,
    ingredientes:[
        {
            cantidad: 105,
            unidad: "gr",
            ingrediente: "aceite de coco sin derretir"
        },
        {   cantidad: 135, 
            unidad: "gr" ,
            ingrediente: "azucar moreno, de caña o de coco"
        },
        {
            cantidad: 190, 
            unidad: "ml" ,
            ingrediente: "leche vegetal sin endulzar (o leche de soja)"
        },
        {
            cantidad: 40, 
            unidad: "gr" ,
            ingrediente: "cacao en polvo sin azúcar"
        },
        {
            cantidad: 1, 
            unidad: "cucharadita(s)" ,
            ingrediente: "bicarbonato"
        },
        {
            cantidad: 1/4, 
            unidad: "cucharadita(s)" ,
            ingrediente: "sal"
        },
        {
            cantidad: 210, 
            unidad: "gr",
            ingrediente: "harina de trigo integral"
        },
        {
            cantidad: 90, 
            unidad: "gr",
            ingrediente: "chips de chocolate veganas"
        },
        {
            cantidad: 2, 
            unidad: "cucharada(s)" ,
            ingrediente: "chips de chocolate veganas (para decorar)"
        },
    ],
    puntuacion: 4,
    total_puntos: 16,
    cant_votos: 4,
    preparacion: ['Precalienta el horno a 180ºC ó 350ºF.', 'Echa el aceite de coco y el azúcar en un bol y aplasta la mezcla con ayuda de un tenedor para que el aceite de coco se suavice y se integre completamente con el azúcar hasta que se forme una pasta.', 'Cuando ya no haya tropezones de coco, puedes añadir el extracto de vainilla, la leche vegetal y el cacao. Remueve hasta que se hayan integrado completamente.', 'Añade el bicarbonato y la sal y vuelve a remover hasta que se integren por completo.', 'Si hace calor, guarda la mezcla en la nevera durante 15-30 minutos para que se solidifique un poco. Si hace frío, puedes seguir con el siguiente paso.', 'Echa la harina y remueve hasta que esté más o menos integrada. Luego añade las chips de chocolate y remueve hasta que se integren por completo y obtengas una mezcla homogénea.', 'Haz bolas con tus manos y colócalas sobre una bandeja para horno con papel de hornear. Aplástalas con las manos para darles forma de galletas y deja unos 5 cm ó 2 pulgadas entre cada una porque van a expandirse en el horno. Puedes colocar algunas chips de chocolate por encima una vez que ya tengas tus galletas en la bandeja y antes de hornearlas, pero es opcional.', 'Hornea durante unos 12-15 minutos (en mi horno estuvieron listas en 15 minutos) o hasta que la parte de arriba de las galletas esté seca y se doren ligeramente. Deja reposar las galletas 5 minutos en la bandeja y luego traspásalas a una rejilla para que se enfríen completamente. Si no tienes rejilla, puedes usar un plato.', 'Guarda las galletas en un recipiente hermético a temperatura ambiente o en la nevera durante 1 semana aproximadamente o en el congelador durante un mes.'],
    folder: 'galletas_veganas',
    imagenes: ['galletasVeganas.jpg', 'galletasVeganas_1.jpg', 'galletasVeganas_2.jpg', 'galletasVeganas_3.jpg']
}

let cakepop={
    id:2,
    nombre:'Cakepops Navidad',
    categoria: ['Festejos'],
    tiempo_total:' 1h 30 min',
    raciones: 11,
    ingredientes:[
        {
            cantidad: 200,
            unidad: "gr",
            ingrediente: "turrón blando (Jijona)."
        },
        {   cantidad: 2, 
            unidad: "unidad(es)" ,
            ingrediente: "huevo"
        },
        {
            cantidad: 70, 
            unidad: "gr" ,
            ingrediente: "harina de repostería."
        },
        {
            cantidad: 50, 
            unidad: "gr" ,
            ingrediente: "azúcar"
        },
        {
            cantidad: 50, 
            unidad: "gr" ,
            ingrediente: "mantequilla"
        },
        {
            cantidad: 150, 
            unidad: "gr" ,
            ingrediente: "chocolate blanco para cobertura"
        },
        {
            cantidad: 0, 
            unidad: "",
            ingrediente: "Nonpareils rojos (Granel)."
        },
        {
            cantidad: 0, 
            unidad: "",
            ingrediente: "decoración de acebo (Granel)."
        },
    ],
    puntuacion: 4.33,
    total_puntos: 13,
    cant_votos: 3,
    preparacion: ['Para empezar vamos a coger el turrón y vamos a triturarlo. Una vez triturado lo vamos a reservar mientras preparamos el siguiente paso.', 'Ahora cogemos un cuenco y ponemos el azúcar y la mantequilla y con ayuda de una batidora de varillas eléctrica lo batimos hasta que quede una mezcla blanquecina.', 'Cuando ya lo,tengamos añadimos un huevo y volvemos a batir hasta que quede totalmente integrado.', 'Ahora añadimos el siguiente huevo y volvemos a batir.', 'A continuación cogemos el turrón triturado y sin dejar de batir lo vamos añadiendo poco a poco hasta que quede bien integrado.', 'Ahora lo reservamos unos segunditos ya que vamos a coger la harina y la vamos a tamizar con ayuda de un colador.', 'Una vez tamizada la vamos a ir añadiendo poco a poco a la mezcla anterior. Esta vez mezclaremos con una cuchara mezcladora y con movimientos envolventes.','Cuando ya lo tengamos cogemos el Decomax y lo rellenamos con la mezcla.', 'Ahora cogemos nuestro molde para cake pops y lo vamos rellenando.', 'Mientras pre calentamos el horno a 170°C y cuando este caliente lo introducimos a esta misma temperatura durante 15-20 min. (depende de cada horno).', 'Transcurrido este tiempo los sacaremos del horno y los dejaremos entibiar.', 'Cuando ya no quemen los desmoldamos con cuidado. Si nos han quedado irregularidades, con ayuda de unas tijeras vamos cortándolas con cuidado hasta que nos queden perfectos.', 'Ahora vamos a poner a fundir al baño María el chocolate, una vez este fundido lo retiramos del cuenco.', 'Cogemos un palito, lo introducimos en el chocolate y de ahí lo introducimos en el centro de nuestro cale pop con cuidadín de no atravesarlo.', 'Cuando ya los tengamos todos con su palito los introducimos en el congelador 10 min para que el chocolate endurezca.', 'Ahora cogemos el cake pop y lo sumergimos un poco en el chocolate blanco y nos ayudamos de una cucharita para cubrirlo bien.Una vez cubierto damos unos golpecitos para que caiga el exceso de chocolate.', 'Los dejamos secar un poquito y vamos preparando la decoración.', 'Cogemos la parte de nuestro molde Lékué y introducimos un poquito el cake pop por el agujerito, introducimos Nonpareils en el agujerito, bajamos el cake pop y lo giramos un poquito para que se pegen en la base de nuestro cake pop. Si no tenéis este molde, no pasa nada, lo pones sobre la base con la mano.', 'Ahora le damos la vuelta y lo ponemos sobre los nonpareils para que quede como un gorrito.', 'Ahora cogemos los adornos de acebo y los vamos poniendo en la parte blanca que nos habrá quedado en el centro del cake pop.'],
    folder: 'cakepop_navidad',
    imagenes:['cakepopNavidad.jpg', 'cakepopNavidad_1.jpg', 'cakepopNavidad_2.jpg' ]

}

let caramelCupcake={
    id:3,
    nombre:'Caramel Cupcake ',
    categoria: ['Desayuno o Merienda', 'Postres' ],
    tiempo_total: "40 min",
    raciones: 18, 
    comentarios: ["Muy ricos, me gustaron mucho", "Probe la receta y quedaron deliciosos"],
    ingredientes:[
        {
            cantidad: 120,
            unidad: "gr",
            ingrediente: "manteca"
        },

        {
            cantidad: 200,
            unidad: "gr",
            ingrediente: "azúcar moreno"
        },

        {
            cantidad: 100,
            unidad: "gr",
            ingrediente: "azúcar"
        },

        {
            cantidad: 2,
            unidad: "unidad(es)",
            ingrediente: "huevo"
        },

        {
            cantidad: 15,
            unidad: "ml",
            ingrediente: "esencia de vainilla"
        },

        {
            cantidad: 120,
            unidad: "cc",
            ingrediente: "leche"
        },

        {
            cantidad: 3,
            unidad: "gr",
            ingrediente: "sal"
        },

        {
            cantidad: 10,
            unidad: "gr",
            ingrediente: "polvo de hornear"
        },

        {
            cantidad: 190,
            unidad: "gr",
            ingrediente: "harina 0000"
        },

        {
            cantidad: 200,
            unidad: "cc",
            ingrediente: "crema de leche"
        },

        {
            cantidad: 150,
            unidad: "gr",
            ingrediente: "azúcar (glaseado)"
        },

        {
            cantidad: 100,
            unidad: "gr",
            ingrediente: "manteca (glaseado)"
        },

        {
            cantidad: 80,
            unidad: "gr",
            ingrediente: "azúcar impalpable"
        }
    ], 
    puntuacion: 4,
    total_puntos: 4,
    cant_votos: 1,
    preparacion: ['Batir la manteca junto con los azúcares, hasta cremar.', 'Añadir la esencia de vainilla y huevos de a uno.', 'Tamizar los secos: harina, polvo de hornear y sal.', 'Incorporar los secos y la leche alternadamente. Secos - húmedos - secos - húmedos - secos.', 'Disponer en moldes hasta la mitad.', 'Hornear a 180° 15 minutos o hasta pinchar un palillo y este salga seco.', 'Hacer un caramelo rubio sobre la ornalla (para glaseado).', 'Entibiar la crema de leche y volcarla, revolviendo constantemente para que no se formen grumos (para glaseado).', 'Dejar enfriar 1 hs en heladera. Incorporar la manteca a punto pomada y azúcar (para glaseado).', 'Batir hasta que se encuentre consistente. Decorar con manga y pico cada cupcake (para glaseado).'],
    folder: 'caramel_cupcake',
    imagenes:['caramelCupcake.jpg', 'caramelCupcake.jpg',  'caramelCupcake_1.jpg', 'caramelCupcake_2.jpg']


}


let dedosHalloween={
    id:4,
    nombre: 'Dedos Halloween',
    categoria: ['Festejos'],
    tiempo_total: "1 hr",
    raciones: 10, 
    ingredientes:[
        {
            cantidad: 125,
            unidad: "gr",
            ingrediente: "margarina Tulipán"
        },

        {
            cantidad: 175,
            unidad: "gr",
            ingrediente: "harina"
        },

        {
            cantidad: 145,
            unidad: "gr",
            ingrediente: "fécula de maíz (maicena)"
        },

        {
            cantidad: 125,
            unidad: "gr",
            ingrediente: "azúcar"
        },

        {
            cantidad: 0,
            unidad: "",
            ingrediente: "Almendras crudas enteras"
        },

        {
            cantidad: 2,
            unidad: "yema(s)",
            ingrediente: "huevo"
        },

        {
            cantidad: 0,
            unidad: "",
            ingrediente: "Esencia de almendra"
        },

        {
            cantidad: 0,
            unidad: "",
            ingrediente: "Colorante verde en gel"
        }

    ],
    puntuacion: 3.5,
    total_puntos: 3.5,
    cant_votos: 1,
    preparacion:['Para empezar la receta vamos a poner en un cuenco la margarina Tulipán® junto con el azúcar y batimos con una batidora de varillas hasta que quede una mezcla cremosa y blanquecina.', 'A continuación añadimos las yemas y la esencia de almendra y batimos hasta que quede una mezcla uniforme.', 'Seguidamente añadimos las harinas y vamos mezclando hasta que nos quede una masa lisa que no se pegue.', 'A continuación envolvemos la masa en papel film y dejamos que coja consistencia en la nevera durante 30 min.', 'Ahora vamos a colorear masa. Así que la amasamos un poco y ponemos el colorante en el centro y vamos a ir amasando hasta conseguir un tono uniforme y de nuestro agrado.', 'Ahora vamos a poner a calentar el horno a 150ºC y mientras, vamos a ir dándole forma a los dedos.', 'Cuando tengamos los dedos vamos a ponerlos sobre un tapete de cocción con bastante separación entre ellos.', 'Cuando ya los tengamos sobre el tapete cogemos las almendras y las vamos colocando en modo de uña en el borde de la masa. Hay que presionar un poco para que queden pegadas.', 'Ahora con ayuda de un palillo vamos a ir simulando las líneas y nudillos de un dedo. |Una vez los tenemos con la forma los dejamos enfriar en la nevera 15 min.', 'Ya solo nos queda hornearlos durante 10 minutos. Una vez horneados los sacamos del horno y los dejamos enfriar por completo.', 'Si queréis darle un toque más terrorífico podéis despegar la almendra cuando sale del horno, poner un poquito de sirope rojo en el sitio de la almendra y después pegarla sobre el sirope.'],
    folder: 'dedos_halloween',
    imagenes:['dedosHalloween.jpg', 'dedosHalloween.jpg', 'dedosHalloween_1.jpg', 'dedosHalloween_2.jpg']
}

let gofresVeganos={
    id:5,
    nombre: 'Gofres Veganos (Sin gluten)',
    categoria: ['Saludables', 'Desayuno o Merienda'],
    tiempo_total: "40 min",
    raciones: 6, 
    ingredientes:[
        {
            cantidad: 3,
            unidad: "taza(s)",
            ingrediente: "copos de avena"
        },

        {
            cantidad: 250,
            unidad: "ml",
            ingrediente: "leche de avena"
        },

        {
            cantidad: 4,
            unidad: "cucharada(s)",
            ingrediente: "cacao sin azúcar "
        },

        {
            cantidad: 4,
            unidad: "cucharada(s)",
            ingrediente: "sirope de agave"
        }     
    ],
    puntuacion: 3.5,
    total_puntos: 14,
    cant_votos: 4,
    preparacion:['Pon a precalentar la gofrera. Mientras, bate todos los ingredientes en la batidora.', 'Echa la masa en la gofrera con la ayuda de una cuchara y cocina durante unos 7 minutos (lee el apartado de consejos).', 'Sirve con tus toppings preferidos. Nosotros le echamos plátano, cacao nibs y sirope de agave.'],
    folder: 'gofres_veganos',
    imagenes:['gofresVeganos.jpg', 'gofresVeganos_1.jpg', 'gofresVeganos_2.jpg', 'gofresVeganos_3.jpg']

}

//CAMBIAR IMAGENES DESDE ACA HASTA ABAJO YA OPTIMIZADAS

let  donasChocolate={
    id:6,
    nombre: 'Donas de chocolate (sin gluten)',
    categoria: ['Saludables', 'Desayuno o Merienda'],
    tiempo_total: "40 min",
    raciones: 12, 
    ingredientes:[
        {
            cantidad: 2,
            unidad: "unidad(es)",
            ingrediente: "boniato/s grande/s"
        },

        {
            cantidad: 2,
            unidad: "unidad(es)",
            ingrediente: "huevo/s grande/s"
        },

        {
            cantidad: 1/4,
            unidad: "taza/s",
            ingrediente: " aceite líquido, de coco o girasol" 
        },

        {
            cantidad: 3/4,
            unidad: "taza/s",
            ingrediente: "harina de coco"
        },
        
        {
            cantidad: 3/4,
            unidad: "taza/s",
            ingrediente: "cacao en polvo"
        },
        
        {
            cantidad: 3/4,
            unidad: "taza/s",
            ingrediente: "azúcar mascabo o de coco"
        },

        {
            cantidad: 1/4,
            unidad: "taza/s",
            ingrediente: "café expresso"
        },        

        {
            cantidad: 1,
            unidad: "cucharadita/s",
            ingrediente: "extracto de vainilla"
        },  
    
        {
            cantidad: 2,
            unidad: "cucharadita/s",
            ingrediente: "polvo de hornear"
        },  
    
        {
            cantidad: 1/2,
            unidad: "cucharadita/s",
            ingrediente: "sal marina"
        },

        {
            cantidad: 50,
            unidad: "gr",
            ingrediente: "chocolate amargo 80% cacao (glaseado)"
        },

        {
            cantidad: 1/4,
            unidad: "taza/s",
            ingrediente: "aceite de coco, líquido (glaseado)"
        },

        {
            cantidad: 1/4,
            unidad: "taza/s",
            ingrediente: "cacao en polvo (glaseado)"
        },
    
        {
            cantidad: 1/4,
            unidad: "taza/s",
            ingrediente: "miel o sirope de maple (glaseado)"
        },
    ],
    puntuacion: 5,
    total_puntos: 5,
    cant_votos: 1,
    preparacion:['Precalentar el horno a 180°C.', 'Lavar, pelar y cortar en cubos los boniatos. Luego ponerlos en una procesadora y procesar hasta que queden bien picados, sin grandes pedacitos', 'Agregar el resto de los ingredientes y procesar hasta que este todo integrado. Repartir la mezcla en 12 moldes de donas (antiadherentes o con un poquito de aceite) y hornear durante 25-30 minutos o hasta que esten firmes y completamente cocidos. No deben quedar secas', 'Desmoldar y dejar enfriar', 'Derretir el chocolate, el aceite de coco y calentar la miel. En un bowl mezclar estos 3 ingredientes y agregar el cacao. Meaclar y poner sobre cada una de las donas. Mantener en la heladera (glaseado)'],
    folder: 'donas_chocolate',
    imagenes:['donasChocolateCafe.jpg', 'donasChocolateCafe.jpg', 'donasChocolateCafe_1.jpg', 'donasChocolateCafe_2.jpg']

}

let galletasArañas={
    id:7,
    nombre: 'Galletas Halloween',
    categoria: ['Postres', 'Festejos'],
    tiempo_total: "45 min",
    raciones: 20, 
    ingredientes:[
        {
            cantidad: 125,
            unidad: "gr",
            ingrediente: "mantequilla sin sal muy fría"
        },

        {
            cantidad: 250,
            unidad: "gr",
            ingrediente: "harina de repostería"
        },

        {
            cantidad: "",
            unidad: "",
            ingrediente: "sal" 
        },

        {
            cantidad: 70,
            unidad: "gr",
            ingrediente: "azúcar"
        },
        
        {
            cantidad: 10,
            unidad: "gr",
            ingrediente: "azúcar vainillado"
        },
        
        {
            cantidad: 1,
            unidad: "unidad(es)",
            ingrediente: "huevo(s)"
        },

        {
            cantidad: 20,
            unidad: "",
            ingrediente: "bombon(es) relleno(s) de chocolate"
        },        

        {
            cantidad: 40,
            unidad: "",
            ingrediente: "ojos de azúcar"
        }
    ],
    puntuacion: 5,
    total_puntos: 15,
    cant_votos: 3,
    preparacion:['Cortar la mantequilla fría en cubitos pequeños y colocar en el procesador con la harina, la sal, el azúcar vainillado, el azúcar y el huevo. Triturar hasta tener una consistencia homogénea. Si el procesador es pequeño podemos dejar el huevo y el azúcar para el final.', 'Echar la masa a la superficie de trabajo limpia y terminar de trabajar con las manos hasta dejarla lisa. Debería ser suave y homogénea, casi nada pegajosa. Envolver en plástico film y dejar 30 minutos en la nevera. Si hace frío, quizá no haga ni falta el reposo.', 'Precalentar el horno a 180º C y preparar un par de bandejas con papel sulfurizado, o engrasarlas. Para hacer las arañas grandes necesitaremos porciones de unos 20 g de masa, aunque se pueden hacer un poco a ojo. Formar bolitas y distribuirlas en las bandejas, un poco separadas.', 'Aplanar con la mano para dejar forma de discos gruesos y, con el dedo, el extremo del mango de un cucharón de madera o un mazo de mortero pequeño, formar pequeños agujeros en el centro. Hornear durante unos 10 minutos, sacar con cuidado y repasar el agujero apretando con suavidad. Debe estar ajustado al diámetro de los bombones, aproximadamente.', 'Devolver al horno hast aque se hayan dorado, unos 10 minutos más. Esperar un poco antes de llevar las galletas a una rejilla. Podemos apovechar cuando siguen calientes para poner los bombones, así se derretirá un poco la base y se pegarán. Cuidado, si están muy calientes tendremos arañas derretidas. Llevar a la nevera para que se enfríe bien el chocolate.', 'Para terminar la decoración solo hace falta derretir una tableta de chocolate negro y, con ayuda de una manga pastelera o lápiz de repostería, pegar los ojos y dibujar las patitas, cuatro por cada lado. Si no tenemos ojos de azúcar podemos improvisarlos derritiendo también chocolate blanco. '],
    folder: 'galletas_arañas',
    imagenes:['galletasArañas.jpg', 'galletasArañas_1.jpg']

}

let macarons={
    id:8,
    nombre: 'Macarons',
    categoria: ['Postres', 'Desayuno o Merienda'],
    tiempo_total: "40 min",
    raciones: 30, 
    ingredientes:[
        {
            cantidad: 150,
            unidad: "gr",
            ingrediente: "harina de almendras"
        },

        {
            cantidad: 150,
            unidad: "gr",
            ingrediente: "azúcar impalpable"
        },

        {
            cantidad: 4,
            unidad: "unidad(es)",
            ingrediente: "clara(s)" 
        },

        {
            cantidad: 50,
            unidad: "cc",
            ingrediente: "agua"
        },
        
        {
            cantidad: 150,
            unidad: "gr",
            ingrediente: "azúcar"
        },
        
        {
            cantidad: 250,
            unidad: "gr",
            ingrediente: "chocolate blanco (relleno)"
        },

        {
            cantidad: 125,
            unidad: "cc",
            ingrediente: "crema de leche (relleno)"
        },        

        {
            cantidad: 1,
            unidad: "",
            ingrediente: "limon(es) rallado(s) (relleno)"
        }
    ],
    puntuacion: 5,
    total_puntos: 15,
    cant_votos: 3,
    preparacion:['Triturar el harina de almendras junto con el azúcar impalpable. Tamizar tres veces más.', 'Mezclar con dos claras envejecidas hasta conseguir una pasta.', 'Hacer un merengue italiano. Colocar el agua y 120 gr azúcar en una cacerola, hasta obtener un almíbar de 118ºC.', 'Batir las claras restantes a punto nieve con los 30 gr de azúcar restantes. Volcar el almíbar sobre el borde del recipiente. Batir hasta enfriar.', 'Unir ambas preparaciones y empezar con el Macaroneage. Integrar de forma envolvente hasta conseguir el punto cinta.', 'Colocar en manga con pico redondo mediano, trazando círculos con el patrón por debajo del papel manteca. Golpear para sacar las burbujas de aire.', 'Dejar orear 2 hs o más, hasta tocar con la yema de los dedos y que no se pegue.Hornear de 10 a 12 minutos a 150ºC.', 'Pasar un cuchillo liso y afilado para despegar del papel manteca.', 'Calentar la crema con la ralladura de limón y picar el chocolate. Verter sobre el mismo y homogeneizar. (relleno)', 'Dejar enfriar y rellenar. (relleno)'],
    folder: 'macarons',
    imagenes:['macarons.jpg', 'macarons_1.jpg', 'macarons_2.jpg', 'macarons_3.jpg']

}

let miniCheesecake={
    id:9,
    nombre: 'Mini cheesecake vegano',
    categoria: ['Postres', 'Saludables'],
    tiempo_total: "20 min",
    raciones: 8, 
    ingredientes:[
        {
            cantidad: 100,
            unidad: "gr",
            ingrediente: "dátiles"
        },

        {
            cantidad: 100,
            unidad: "gr",
            ingrediente: "almendras"
        },

        {
            cantidad: 140,
            unidad: "gr",
            ingrediente: "anacardos" 
        },

        {
            cantidad: 200,
            unidad: "ml",
            ingrediente: "leche de coco"
        },
        
        {
            cantidad: 1/2,
            unidad: "",
            ingrediente: "limón exprimido"
        },
        
        {
            cantidad: 110,
            unidad: "gr",
            ingrediente: "sirope de agave"
        },

        {
            cantidad: 2,
            unidad: "cucharada(s)",
            ingrediente: "aceite de coco"
        },        

        {
            cantidad: 1,
            unidad: "cucharadita(s)",
            ingrediente: "esencia de vainilla"
        },
        
        {
            cantidad: 125,
            unidad: "gr",
            ingrediente: "fresas"
        }
    ],
    puntuacion: 4,
    total_puntos: 24,
    cant_votos: 6,
    preparacion:['Para hacer la base, empezaremos poniendo los dátiles en remojo en agua caliente durante 10 minutos. Mientras, vamos picando las almendras en un procesador de alimentos. Cuando esté hecha casi polvo, añadimos los dátiles al procesador de alimentos (después de quitarles el agua) y procesamos.', 'Ponemos moldes de cupcakes (los típicos de papel) en un molde de muffins y colocamos la base de dátiles y almendras con ayuda de las manos. Metemos en el congelador.', 'En una batidora de vaso, añadimos el resto de ingredientes (excepto las fresas) y batimos. Añadimos las fresas congeladas y volvemos a batir.', 'Añadimos esta mezcla a los moldes y metemos en el congelador durante al menos 5 horas.', 'Decoramos nuestros mini cheesecakes, ¡y a disfrutar! Nosotros pusimos un poco de mermelada de fresa y media fresa encima de cada cheesecake.'],
    folder: 'mini_cheesecake',
    imagenes:['miniCheesecake.jpg', 'miniCheesecake_1.jpg', 'miniCheesecake_2.jpg', 'miniCheesecake_3.jpg']

}

let tortaAngel={
    id:10,
    nombre: 'Torta Angel',
    categoria: ['Postres', 'Festejos'],
    tiempo_total: "50 min",
    raciones: 12, 
    ingredientes:[
        {
            cantidad: 1.5,
            unidad: "taza(s)",
            ingrediente: "clara de huevo temperatura ambiente"
        },

        {
            cantidad: 1.25,
            unidad: "cucharadita(s)",
            ingrediente: "cremor tartaro"
        },

        {
            cantidad: 1,
            unidad: "cucharadita(s)",
            ingrediente: "extracto de vainilla" 
        },

        {
            cantidad: 1/2,
            unidad: "cucharadita(s)",
            ingrediente: "extracto de almendra"
        },
        
        {
            cantidad: 1.25,
            unidad: "taza(s)",
            ingrediente: "azúcar blanca"
        },
        
        {
            cantidad: 1/4,
            unidad: "cucharadita(s)",
            ingrediente: "sal"
        },

        {
            cantidad: 1,
            unidad: "taza(s)",
            ingrediente: "harina de repostería tamizada"
        },        

        {
            cantidad: 1/2,
            unidad: "taza(s)",
            ingrediente: "azúcar glas"
        },        

        {
            cantidad: 1,
            unidad: "taza(s)",
            ingrediente: "mascarpone (para el mascarpone y miel)"
        },        

        {
            cantidad: 1.25,
            unidad: "taza(s)",
            ingrediente: "crema (para el mascarpone y miel)"
        },        

        {
            cantidad: 1/2,
            unidad: "cucharadita(s)",
            ingrediente: "vainilla (para el mascarpone y miel)"
        },

        {
            cantidad: 1,
            unidad: "taza(s)",
            ingrediente: "conservas de fresa de Bonne Maman (topping)"
        }, 

        {
            cantidad: 1,
            unidad: "taza(s)",
            ingrediente: "fresas cortadas (topping)"
        },       

        {
            cantidad: "",
            unidad: "",
            ingrediente: "Flores comestibles (topping)"
        }
    ],
    puntuacion: 3,
    total_puntos: 15,
    cant_votos: 5,
    preparacion:['Precalienta el horno a 350F y coloca la rejilla en la parte mas baja del horno.', 'En el envase de una batidora, a velocidad media, bate las claras de huevo y el cremor tartaro hasta formar picos suaves. Agrega sal, vainilla y extracto de almendra y bate hasta combinar todo muy bien.', 'Aumenta la velocidad a alta, y añade el azúcar blanca una cucharada a la vez. Bate hasta que consigas picos duros y la mezcla este brillante.', 'En un envase aparte, tamiza el azúcar glas y la harina de repostería. Añadela a la mezcla húmeda, mezclando a mano con una espátula.', 'Vierte la mezcla en un molde de torta angel, sin engrasar. Con una espátula mueve la mezcla suavemente para eliminar huecos de aire. Y ademas, usando la espátula, nivela el tope de la mezcla', 'Cocina por unos 30-35 minutos, hasta que el tope se dore y las rajas no se sientan pegajosas.','Retira del horno e inmediatamente voltea la torta. Si el molde no tiene “patas”, utiliza una botella de vidrio (de vino, por ejemplo) y coloca la torta boca abajo sujetada al cuello de la botella. Deja enfriar por 2 horas.', 'Cuando la torta este lista y enfriada, córtala por la mitad horizontalmente usando un cuchillo o un nivelador de torta.', 'En un envase de batidora, combina todos los ingredientes y bate hasta conseguir una mezcla homogénea y suave. Refrigera hasta utilizar. (para la crema de mascarpone y miel)', 'Para armarla, coloca la mitad de abajo en una base, añade una capa de mascarpone seguida de una capa de conservas de fresa de Bonne Maman y fresas frescas cortadas en cuartos. Coloca la siguiente capa y repite los pasos anteriores. Para decorar utilice flores comestibles. (para armar la torta)'], 
    folder: 'torta_angel',
    imagenes:['tortaAngel.jpg', 'tortaAngel_1.jpg', 'tortaAngel_2.jpg', 'tortaAngel_3.jpg']

}

let tortaChocolateCerezas={
    id:11,
    nombre: 'Torta chocolate y cerezas',
    categoria: ['Postres', 'Festejos'],
    tiempo_total: "2 hrs",
    raciones: 10, 
    ingredientes:[
        {
            cantidad: "",
            unidad: "",
            ingrediente: "Cerezas en almíbar"
        },

        {
            cantidad: "",
            unidad: "",
            ingrediente: "Cerezas frescas"
        },

        {
            cantidad: "",
            unidad: "",
            ingrediente: "Cacao en polvo" 
        },

        {
            cantidad: "",
            unidad: "",
            ingrediente: "Virutas de chocolate"
        },
        
        {
            cantidad: 155,
            unidad: "gr",
            ingrediente: "harina (para bizcochuelo)"
        },
        
        {
            cantidad: 35,
            unidad: "gr",
            ingrediente: "maicena (para bizcochuelo)"
        },

        {
            cantidad: 225,
            unidad: "gr",
            ingrediente: "azúcar (para bizcochuelo)"
        },        

        {
            cantidad: 105,
            unidad: "gr",
            ingrediente: "café caliente (para bizcochuelo)"
        },        

        {
            cantidad: 105,
            unidad: "gr",
            ingrediente: "agua fría (para bizcochuelo)"
        },        

        {
            cantidad: 45,
            unidad: "gr",
            ingrediente: "cacao puro en polvo (para bizcochuelo)"
        },        

        {
            cantidad: 1,
            unidad: "cucharadita(s)",
            ingrediente: "bicarbonato (para bizcochuelo)"
        },

        {
            cantidad: 1/4,
            unidad: "cucharadita(s)",
            ingrediente: "levadura química (para bizcochuelo)"
        }, 

        {
            cantidad: 115,
            unidad: "gr",
            ingrediente: "mantequilla punto pomada (para bizcochuelo)"
        },       

        {
            cantidad: 2,
            unidad: "unidad(es)",
            ingrediente: "huevos (para bizcochuelo)"
        },       

        {
            cantidad: 1,
            unidad: "cucharadita(s)",
            ingrediente: "extracto vainilla (para bizcochuelo)"
        },       

        {
            cantidad: "",
            unidad: "",
            ingrediente: "Sal (para bizcochuelo)"
        },       

        {
            cantidad: 250,
            unidad: "gr",
            ingrediente: "queso mascarpone (para la crema mascarpone)"
        },       

        {
            cantidad: 200,
            unidad: "ml",
            ingrediente: "nata para montar (para la crema mascarpone)"
        },       

        {
            cantidad: 60,
            unidad: "gr",
            ingrediente: "azúcar glass (para la crema mascarpone)"
        }
    ],
    puntuacion: 5,
    total_puntos: 5,
    cant_votos: 1,
    preparacion:['Empezaremos con el bizcocho de chocolate. Usaremos un molde de 20cm, obtendremos un bizcocho que cortaremos obteniendo al final 2 bizcochos. Por lo tanto los engrasamos bien para cuando los vayamos a usar. Ya sabéis, untar con mantequilla y espolvorear harina.', 'Lo primero que necesitamos es café recién hecho. En cuanto esté, aun caliente, le añadimos el cacao en polvo y removemos bien para que se disuelva. Ahora ponemos el agua fría. Encendemos el horno a 170ºC.', 'En un bol tamizamos la harina, la maicena, el bicarbonato, la levadura y la sal.', 'Por otro lado batimos el azúcar con la mantequilla que tiene que estar a temperatura ambiente. Cuando tengamos una mezcla cremosa iremos añadiendo los huevos uno a uno, no añadimos el segundo hasta integrar bien el primero. Éstos a temperatura ambiente también. Ponemos la esencia de vainilla. Cuando esté todo bien integrado empezamos a añadir los ingredientes secos que teníamos apartados: harina, levadura, maicena…y el café con el agua y el cacao. Lo hacemos a tandas, una parte de secos, una parte de líquidos y así hasta acabar mezclándolo todo.', 'Ya tenemos nuestra masa de bizcocho de chocolate preparada. Ahora al molde ya engrasado y nos lo llevamos al horno durante 1 hora aproximadamente. Pinchamos con una brocheta para asegurarnos de que está bien cocido.', 'Mientras tenemos el bizcocho en el horno, nos pondremos a hacer el almíbar de cerezas y ron. Almíbar de cerezas y ron.', 'Por otro lado tenemos que hacer la crema de queso mascarpone. Para ello primero montamos la nata, que tiene que estar bien fría junto con el azúcar. En un bol amplio incorporar a la nata montada el mascarpone con movimientos envolventes. Así de esta manera conseguiremos que la crema de queso y nata esté esponjosa y cremosa, sin que la nata se nos baje. Meter en la nevera y reservar.', 'Cortar por la mitad  el bizcocho de chocolate, aplanar la parte superior si hubiera salido un copete, pero podéis dejarlo tal cual!', 'Poner una plancha de bizcocho sobre el plato en el que lo vamos a presentar y con la ayuda de una cuchara emborrachar el bizcocho con el almíbar de cerezas ya frío ¡No os cortéis con esto de empapar el bizcocho!', 'Sobre la capa de bizcocho añadimos algo más dela mitad de la crema mascarpone y nata, repartir por el bizcocho. Encima de la crema ponemos unas cuantas cerezas en almíbar, eso al gusto pero os va a encantar encontrarlas así que si miedo!!', 'Cubrir con la otra plancha de bizcocho y repetir operación con el almíbar y la crema.', 'Para acabar disponer cerezas frescas con hueso sobre la crema para decorar, espolvorear cacao en polvo y poner lascas de chocolate.'], 
    folder: 'torta_chocolate_cerezas',
    imagenes:['tartaChocolateCereza.jpg', 'tartaChocolateCereza_1.jpg', 'tartaChocolateCereza_2.jpg', 'tartaChocolateCereza.jpg']

}


let tortaLimon={
    id:12,
    nombre: 'Torta de limon, frutilla y crema',
    categoria: ['Postres', 'Desayuno o Merienda'],
    tiempo_total: "50 min",
    raciones: 10, 
    ingredientes:[
        {
            cantidad: 5,
            unidad: "taza(s)",
            ingrediente: "avena instantánea, procesada hasta que sea harina (para bizcocho)"
        },

        {
            cantidad: 1/2,
            unidad: "taza(s)",
            ingrediente: "maicena (para bizcocho)"
        },

        {
            cantidad: 1,
            unidad: "taza(s)",
            ingrediente: "azúcar mascabo o de coco (para bizcocho)" 
        },

        {
            cantidad: 1,
            unidad: "cucharada(s)",
            ingrediente: "polvo de hornear (para bizcocho)"
        },
        
        {
            cantidad: 1.5,
            unidad: "cucharadita(s)",
            ingrediente: "bicarbonato de sodio (para bizcocho)"
        },
        
        {
            cantidad: 5,
            unidad: "",
            ingrediente: "limones rallados (para bizcocho)"
        },

        {
            cantidad: 2,
            unidad: "unidad(es)",
            ingrediente: "huevos o reemplazos (para bizcocho)"
        },        

        {
            cantidad: 1.25,
            unidad: "taza(s)",
            ingrediente: "leche de tu elección (para bizcocho)"
        },        

        {
            cantidad: 1/2,
            unidad: "taza(s)",
            ingrediente: "aceite de coco derretido o de girasol (para bizcocho)"
        },        

        {
            cantidad: 2,
            unidad: "taza(s)",
            ingrediente: "castañas de cajú crudas, remojadas 4 horas (relleno)"
        },        

        {
            cantidad: 1/3,
            unidad: "taza(s)",
            ingrediente: "crema de coco o yogurt natural sin azúcar (relleno)"
        },

        {
            cantidad: 1/2,
            unidad: "(s)",
            ingrediente: "sirope de maple o miel (relleno)"
        }, 

        {
            cantidad: 1/4,
            unidad: "taza(s)",
            ingrediente: "aceite de coco derretido (relleno)"
        },       

        {
            cantidad: 2,
            unidad: "cucharadita(s)",
            ingrediente: "extracto de vainilla (relleno)"
        },       

        {
            cantidad: 2,
            unidad: "cucharada(s)",
            ingrediente: "jugo de limón (relleno)"
        },       

        {
            cantidad: 1,
            unidad: "taza(s)",
            ingrediente: "mermelada de frutilla sin azúcar (relleno)"
        },       

        {
            cantidad: 1,
            unidad: "taza(s)",
            ingrediente: "frutillas frescas picadas (relleno)"
        }
    ],
    puntuacion: 5,
    total_puntos: 15,
    cant_votos: 3,
    preparacion:['En un bowl grande mezclar los ingredientes secos y por otro lado mezclar los húmedos. Verter la mezcla húmeda sobre los secos y batir hasta que este bien integrado. (bizcocho)', 'Poner la mezcla en dos moldes redondos de 22 cm de diámetro y hornear a 200°C durante 20-22 minutos o hasta que esten dorados por encima y al insertar un palito de brocette este salga seco. (bizcocho)', 'Dejar enfriar. (bizcocho)', 'Escurrir las castañas de cajú y procesarlas junto con el resto de los ingredientes del relleno menos la mermelada y las frutillas. (relleno)', 'Montar la torta, bizcocho, 3/4 partes de la crema de vainilla, la mermelada, arriba las frutillas, el otro bizcocho y cubrir con la crema restante. Dejar enfriar y disfrutar. Mantener en la heladera. (relleno)'], 
    folder: 'torta_limon_frutilla_crema',
    imagenes:['tortaFrutillaLimon.jpg', 'tortaFrutillaLimon_1.jpg', 'tortaFrutillaLimon_2.jpg', 'tortaFrutillaLimon.jpg']

}

let galletasNavideñas={
    id:13,
    nombre: 'Galletas navideñas',
    categoria: ['Festejos', 'Desayuno o Merienda'],
    tiempo_total: "28 min",
    raciones: 35, 
    ingredientes:[
        {
            cantidad: 200,
            unidad: "gr",
            ingrediente: "azúcar"
        },

        {
            cantidad: 125,
            unidad: "gr",
            ingrediente: "mantequilla sin sal"
        },

        {
            cantidad: 1,
            unidad: "unidad(es)",
            ingrediente: "huevo" 
        },

        {
            cantidad: 1,
            unidad: "cucharadita(s)",
            ingrediente: "extracto de vainilla"
        },
        
        {
            cantidad: 250 ,
            unidad: "gr",
            ingrediente: "harina"
        },
        
        {
            cantidad: 1/2,
            unidad: "cucharadita(s)",
            ingrediente: "levadura en polvo"
        },

        {
            cantidad: 1/2,
            unidad: "cucharadita(s)",
            ingrediente: "sal"
        },        

        {
            cantidad: "",
            unidad: "",
            ingrediente: "Colorante rojo en gel(opcional)"
        },        

        {
            cantidad: "",
            unidad: "",
            ingrediente: "Colorante verde en gel(opcional)"
        }
    ],
    puntuacion: 4,
    total_puntos: 16,
    cant_votos: 4,
    preparacion:['En un bol amplio poner el azúcar y la mantequilla cortada en trocitos preferiblemente reblandecida. Batir con la batidora ',
    'Añadir el huevo y mezclar.', 'Poner la vainilla, ya sea líquida o en polvo y mezclar.',
    'Mezclar la harina con la levadura y la sal. Tamizar encima de la mezcla anterior poco a poco e ir mezclando con una cuchara de madera.',
    'Enharinar una superficie de trabajo y amasar con las manos hasta que esté todo bien integrado. Si no se quiere usar colorantes, hacer una bola y guardar en el frigorífico mínimo 30 min.',
    'Si se quiere usar los colorantes, separar la masa en tres, añadir poco a poco el colorante verde a una de las partes y amasar hasta dar con el color deseado. Envolver en papel film y guardar en la nevera.',
    ' Limpiar bien la mesa de trabajo, volver a enharinar, y hacer lo mismo con otro trozo de masa y añadir poco a poco el colorante rojo hasta que nos guste el color. Envolver en papel film y guardar en el frigorífico. Dejar la última parte de la masa sin colorear. Guardar en la nevera un mínimo de 30 min.',
    'Amasar parte de la masa roja y estirar con ayuda de un rodillo. Hacer lo mismo con la verde. Poner una encima de la otra y cortar los sobrantes con un cuchillo afilado. (galletas en espiral)',
    ' Formar un rollo, envolver en papel film y volver a guardar en la nevera 15 min. (galletas en espiral)',
    'Sacar de la nevera, cortar los extremos y desechar. Cortar rodajas finas. Si las queréis colgar en el árbol, hacer un agujero en un extremo con el palo de una brocheta de madera y colocar un trozo de papel de aluminio en el agujero para que al hornear no se cierre. Poner en una bandeja de horno con papel parafinado separadas entre si y cocer en horno precalentado a 170º C con calor arriba y abajo entre 5-8 min. Dejar enfriar en una rejilla y retirar el papel de aluminio con cuidado. Pasar una cinta por él para poder colgarlas en el árbol de navidad. (galletas en espiral)',
    'Hacer unas tiras redondeadas con la masa roja y otras con la verde. Enrollar ambas y cortar según se quieran hacer de grandes. Doblar un extremo para que parezca el mango de un bastón. Poner en una bandeja de horno con papel parafinado separadas entre si y cocer en horno precalentado a 170º C con calor arriba y abajo entre 5-8 min. dejar Enfriar en una rejilla. (bastones)', 'Enharinar la mesa de trabajo, estirar la masa que no tenía colorante y cortar con ayuda de un cortapastas redondo o rectangular. Cortar la masa de colores con cortapastas más pequeños y con motivos navideños las figuras que se desee. Pegar encima de las galletas sin color con un poco de agua. Hacer las figuras que más os gusten. Si las queréis colgar en el árbol, hacer un agujero en un extremo con el palo de una brocheta de madera y colocar un trozo de papel de aluminio en el agujero para que al hornear no se cierre. Poner en una bandeja de horno con papel parafinado separadas entre si y cocer en horno precalentado a 170º C con calor arriba y abajo entre 5-8 min. Dejar enfriar en una rejilla y retirar el papel de aluminio con cuidado. Pasar una cinta por él para poder colgarlas en el árbol de navidad. (galletitas)'], 
    folder: 'galletas_navideñas',
    imagenes:['galletasNavideñas.jpg', 'galletasNavideñas_1.jpg', 'galletasNavideñas_2.jpg', 'galletasNavideñas_3.jpg']

}

let tartaMantequilla={
    id:14,
    nombre: 'Tarta de mantequilla de mani',
    categoria: ['Postres', 'Saludables'],
    tiempo_total: "20 min",
    raciones: 8, 
    ingredientes:[
        {
            cantidad: 1,
            unidad: "taza(s)",
            ingrediente: "harina de almendras (base)"
        },

        {
            cantidad: 1,
            unidad: "taza(s)",
            ingrediente: "harina de coco (base)"
        },

        {
            cantidad: 1/4,
            unidad: "taza(s)",
            ingrediente: "jarabe de agave o miel (base)" 
        },

        {
            cantidad: 1/4,
            unidad: "taza(s)",
            ingrediente: "aceite de coco derretido (base)"
        },
        
        {
            cantidad: 2,
            unidad: "taza(s)",
            ingrediente: "leche de coco o yogurt natural sin azúcar (relleno)"
        },
        
        {
            cantidad: 1,
            unidad: "taza(s)",
            ingrediente: "mantequilla de mani sin sal (relleno)"
        },

        {
            cantidad: 1/3,
            unidad: "taza(s)",
            ingrediente: "aceite de coco derretido (relleno)"
        },        

        {
            cantidad: 3/4,
            unidad: "taza(s)",
            ingrediente: "jarabe de agave o miel (relleno)"
        },        

        {
            cantidad: 1,
            unidad: "cucharadita(s)",
            ingrediente: "extracto de vainilla"
        },        

        {
            cantidad: 1/4,
            unidad: "cucharadita(s)",
            ingrediente: "sal marina"
        },        

        {
            cantidad: "",
            unidad: "",
            ingrediente: "Chocolate amargo para decorar (relleno)"
        }
    ],
    puntuacion: 3.4,
    total_puntos: 17,
    cant_votos: 5,
    preparacion:['En un bowl grande mezclar las harinas con el resto de los ingredientes de la base hasta integrar, pasar la mezcla a un molde redondo de 20cm de diámetro con papel manteca. Presionar bien contra la base y los bordes, dejar a un lado.(base)', 'Licuar todos los ingredientes del relleno hasta obtener una mezcla homogénea, cremosa y suave. Verter sobre la base y llevar a la heladera hasta que esté firma (2 horas aprox). (relleno)', 'Retirar la torta de la heladera y decorar con hilos de chocolate derretido y de mantequilla de maní. Disfrutar y mantener en la heladera hasta 1 semana. (relleno)'],
    folder: 'tarta_mantequillamani',
    imagenes:['tartaMantequilla.jpg', 'tartaMantequilla_1.jpg', 'tartaMantequilla_2.jpg', 'tartaMantequilla.jpg']

}

let miniRogel={
    id:15,
    nombre: 'Mini rogel',
    categoria: ['Postres', 'Festejos'],
    tiempo_total: "1h 8min",
    raciones: 15, 
    ingredientes:[
        {
            cantidad: 3,
            unidad: "unidad(es)",
            ingrediente: "yema de huevo. (masa)"
        },

        {
            cantidad: 40,
            unidad: "gr",
            ingrediente: "manteca (masa)"
        },

        {
            cantidad: 55,
            unidad: "cc",
            ingrediente: "agua (masa)" 
        },

        {
            cantidad: 1,
            unidad: "cucharadita(s)",
            ingrediente: "alcohol etílico (masa)"
        },
        
        {
            cantidad: 240,
            unidad: "gr",
            ingrediente: "harina 0000 (masa)"
        },
        
        {
            cantidad: 700,
            unidad: "gr",
            ingrediente: " dulce de leche repostero (masa)"
        },

        {
            cantidad: 80,
            unidad: "gr",
            ingrediente: "claras (merengue)"
        },        

        {
            cantidad: 160,
            unidad: "gr",
            ingrediente: "azúcar (merengue)"
        },        

        {
            cantidad: 70,
            unidad: "cc",
            ingrediente: "agua (merengue)"
        },        

        {
            cantidad: 1/4,
            unidad: "cucharadita(s)",
            ingrediente: "sal marina"
        }
    ],
    puntuacion: 3.4,
    total_puntos: 17,
    cant_votos: 5,
    preparacion:['Tamizar y realizar una corona de harina.(masa)', 'En un cuenco combinar el agua junto con la manteca. Calentar hasta fundir en microondas 45 segundos. Verter en su centro. Añadir el alcohol.(masa)', 'Incorporar del centro hacia los costados, poco a poco hasta formar una masa. (masa)', 'Dividir en cuatro. Abollar y dejar descansar 1hs a temperatura ambiente enfilmados.(masa)', 'Estirar los bollos lo mas fino posible, cortar con un cortante de 10 cm de diámentro.(masa)', 'Colocar en una placa limpia. Pinchar.(masa)', 'Hornear a 190°C aproximadamente 8 minutos. Dar vuelta y seguir su cocción 1 minuto más o hasta que notes que esten levemente dorados e inflados.(masa)', 'Enfriar y rellenar cono dulce de leche repostero.(masa)', 'Disponer en una cacerola a fuego medio el azúcar cubierta por agua. (merengue)', 'Calentar hasta formar un almibar punto bola blando o hasta alcanzar los 118°C. (merengue)', 'Verter sobre el borde del bowl a las claras ya espumadas. (merengue)', 'Batir hasta que el bowl se enfrie y obtengamos un merengue liso, brilloso y que forme picos. (merengue)', 'Colocar en manga con pico rizado. Decorar a gusto. (merengue)'],
    folder: 'mini_rogel',
    imagenes:['miniRogel.png', 'miniRogel_1.png', 'miniRogel.png', 'miniRogel_1.png']

}
let recetas=[trufasVeg, galletasVeg, cakepop, caramelCupcake, dedosHalloween, gofresVeganos, donasChocolate, galletasArañas, macarons, miniCheesecake, tortaAngel, tortaChocolateCerezas, tortaLimon, galletasNavideñas, tartaMantequilla, miniRogel ]