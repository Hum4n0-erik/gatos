// Hace que el menu-head se ancle arriba al pasar el scroll de 80px
window.addEventListener('scroll', function () {
    const header = document.getElementById('head-main');
    const body = this.document.getElementById('cuerpo');
    const ventanaMedida = 80;
    if (window.scrollY > ventanaMedida) {
        header.classList.add('scrolled');
        body.classList.add('margen');
    } else {
        header.classList.remove('scrolled');
        body.classList.remove('margen');
    }
});
// Cambia de Perro a gato y vicebersa
let animal = true;
let imagenes = [
    document.getElementById("img1"),
    document.getElementById("img2"),
    document.getElementById("img3"),
    document.getElementById("img4"),
    document.getElementById("img5"),
    document.getElementById("img6"),
    document.getElementById("img7"),
    document.getElementById("img8")
];
let razas = [
    document.getElementById("textoRaza5"),
    document.getElementById("textoRaza6"),
    document.getElementById("textoRaza7"),
    document.getElementById("textoRaza8"),
    document.getElementById("raza1"),
    document.getElementById("raza2"),
    document.getElementById("raza3"),
    document.getElementById("raza4"),
];
function cambio() {
    imagenes.forEach(img => img.style.opacity = 0);
    razas.forEach(p => p.style.opacity = 0);
    document.getElementById("titulo-galeria").style.opacity = 0;
    setTimeout(() => {
        if (animal) { // PERROS
            document.getElementById("icono").href = "./img/perro/logoperro.png";
            document.getElementById("titulo-web").innerText = "Perros";
            document.getElementById("animal-tipo").innerText = "Otros tipos de perro";
            document.getElementById("animal").innerText = "Gatos";
            document.getElementById("titulo-galeria").innerText = "Galeria Perros"
            imagenes[0].src = "./img/perro/perro1.png";
            imagenes[1].src = "./img/perro/perro2.png";
            imagenes[2].src = "./img/perro/perro3.png";
            imagenes[3].src = "./img/perro/perro4.png";
            imagenes[4].src = "./img/perro/raza1.png";
            imagenes[5].src = "./img/perro/raza2.png";
            imagenes[6].src = "./img/perro/raza3.png";
            imagenes[7].src = "./img/perro/raza4.png";
            // Texto Razas
            razas[0].innerText = "El bulldog es un perro tenaz y valiente, aunque también algo bobalicón. A lo largo de los años, esta raza ha sido el símbolo universal de la dureza, probablemente por ello era habitual verlo en colegios y empresas de todo el mundo. Sin embargo, pese a que se le retrata como un perro fiero, en realidad el bulldog es muy afectuoso y amable, además de valiente. El bulldog es muy adaptable y le encantan las siestas y las golosinas, pero también es bastante tozudo, por lo que constituirá un gran compañero para quien ya tenga alguna experiencia y sepa cuidarlo como necesita.";
            razas[1].innerText = "El beagle es una de las razas de sabuesos más conocidas y queridas. Es un perro inteligente, alegre y extrovertido, pero también tiene una naturaleza bastante traviesa, por lo que puede meterse en problemas con bastante frecuencia, especialmente si se queda solo durante mucho tiempo. Sin embargo, con el adiestramiento adecuado y, sobre todo, las golosinas adecuadas, se puede incentivar a un beagle para que se porte bien.";
            razas[2].innerText = "El border collie, el pastor de los pastores, es un perro de tamaño mediano y bien proporcionado que se reconoce con facilidad tanto en el trabajo como en las competiciones de deportes caninos. Esta raza, famosa por su energía interminable, resistencia y afán por trabajar, es una de las más activas y siempre desea agradar. Pese a su aspecto atlético y musculoso, el border collie es un perro de carácter dulce y cariñoso, que siempre está dispuesto a que lo achuchen. Será el mejor amigo peludo del mundo para cualquier persona que sea capaz de igualar su energía.";
            razas[3].innerText = "Este perro tipo Spitz mediano (de doble manto, pelaje tupido, orejas erguidas y cola curvada hacia el lomo) tiene el cuerpo ligero, corto y compacto. Los machos adultos miden 45 cm de altura y, las hembras, algo menos. Ambos sexos pesan entre 14 y 18 kilos. El manto inferior lanoso está cubierto por un pelaje grueso y liso que puede ser de color beis, negro, rojo o grisáceo.";
            razas[4].innerText = "Bulldog";
            razas[5].innerText = "Beagle";
            razas[6].innerText = "Border collie";
            razas[7].innerText = "Buhund noruego";
        } else { // GATOS
            document.getElementById("icono").href = "./img/gato/logoGato.png";
            document.getElementById("titulo-web").innerText = "Gatitos";
            document.getElementById("animal-tipo").innerText = "Otros tipos de gatos";
            document.getElementById("animal").innerText = "Perros";
            document.getElementById("titulo-galeria").innerText = "Galeria Gatos"
            imagenes[0].src = "./img/gato/gato1.png";
            imagenes[1].src = "./img/gato/gato2.png";
            imagenes[2].src = "./img/gato/gato3.png";
            imagenes[3].src = "./img/gato/gato4.png";
            imagenes[4].src = "./img/gato/raza1.png";
            imagenes[5].src = "./img/gato/raza2.png";
            imagenes[6].src = "./img/gato/raza3.png";
            imagenes[7].src = "./img/gato/raza4.png";
            // Texto Razas
            razas[0].innerText = "Largo y ágil, palabras como elegante y grácil se inventaron para definir al gato siamés. Se trata de una raza llamativa y reconocible, hasta para quienes no saben nada de gatos o incluso no les tienen demasiado aprecio. El siamés es afectuoso y sociable, y puede adaptarse sin problemas a la vida familiar. No obstante, también es muy curioso y activo, así que más vale que lo mantengas entretenido con juegos en los que tenga que ir a buscar objetos que le lances o con largos paseos por el barrio. ";
            razas[1].innerText = "El gato siberiano es un animal afectuoso y leal que resulta un gran compañero, ya que se lleva realmente bien con todo el mundo, incluidos niños y otras mascotas. Además de su aspecto imponente, le encantan los arrumacos. Tiene una personalidad tan dulce que hace que quieras tenerlo cerca todo el rato. ";
            razas[2].innerText = "El birmano, o gato sagrado de birmania, es un gato de pelo semilargo de color más oscuro hacia las marcas distales, la cara, las patas, las orejas y la cola, y algo más claro en el resto del cuerpo. Es un gato relativamente grande, con un cuerpo rechoncho y de patas cortas. El birmano tiene los ojos azules y las cuatro zarpas de color blanco puro. Los «calcetines» delanteros cubren solo las falanges, pero los traseros son más largos. La cabeza es ancha y redonda, con orejas de tamaño medio. Los birmanos presentan muchos colores distintos, aunque el gato birmano blanco es el más conocido. ";
            razas[3].innerText = "El gato munchkin, también llamado monkey, es de tamaño mediano con patas extremadamente cortas y la columna vertebral larga. Debido a su cuerpo alargado y sus patas cortas (paticorto), muchas personas lo comparan con los perros salchicha, por lo que a veces se le conoce como un gato de raza salchicha.";
            razas[4].innerText = "Siamés";
            razas[5].innerText = "Bosque de Siberia";
            razas[6].innerText = "Birmano";
            razas[7].innerText = "Munchkin";
        }
        animal = !animal;
        document.getElementById("titulo-galeria").style.opacity = 1;
        imagenes.forEach(img => img.style.opacity = 1);
        razas.forEach(p => p.style.opacity = 1);
        razas.forEach(h1 => h1.style.opacity = 1);
    }, 750);
}




// Modificara el css del index para pasar a otro color 
let color = true;
function CambioColor() {
    if (color) {
        color = false;
        document.getElementById("color").innerText = "☀️";
        document.getElementById("css").href = "./css/indexClaro.css";
    } else {
        color = true;
        document.getElementById("color").innerText = "🌙";
        document.getElementById("css").href = "./css/indexOscuro.css";
    }
}