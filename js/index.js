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

// Listas con las imagenes de los textos e imagenes que cambiaran
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

// Cambio de IDIOMA
let animal = true;
let lenguaje = true;
function cambioIdioma() {
    if (lenguaje) { // INGLES
        if(!animal) { // DOGS
            document.getElementById("icono").href = "./img/perro/logoperro.png";
            document.getElementById("titulo-web").innerText = "Dogs";
            document.getElementById("animal-tipo").innerText = "Other types of dogs";
            document.getElementById("animal").innerText = "Cats";
            document.getElementById("titulo-galeria").innerText = "Galery of Dogs"
            imagenes[0].src = "./img/perro/perro1.png";
            imagenes[1].src = "./img/perro/perro2.png";
            imagenes[2].src = "./img/perro/perro3.png";
            imagenes[3].src = "./img/perro/perro4.png";
            imagenes[4].src = "./img/perro/raza1.png";
            imagenes[5].src = "./img/perro/raza2.png";
            imagenes[6].src = "./img/perro/raza3.png";
            imagenes[7].src = "./img/perro/raza4.png";
            // Texto Razas
            razas[0].innerText = "The bulldog is a tenacious and courageous dog, although also somewhat silly. Over the years, this breed has been the universal symbol of toughness, probably why it was commonly seen in schools and businesses around the world. However, despite being portrayed as a fierce dog, the bulldog is actually very affectionate and friendly, as well as courageous. The bulldog is very adaptable and loves naps and treats, but it is also quite stubborn, making it a great companion for someone with some experience who knows how to care for it properly.";
            razas[1].innerText = "The beagle is one of the most well-known and beloved hound breeds. It's an intelligent, cheerful, and outgoing dog, but it also has a rather mischievous nature, so it can get into trouble quite often, especially if left alone for long periods of time. However, with proper training and, above all, the right treats, a beagle can be encouraged to behave.";
            razas[2].innerText = "The Border Collie, the shepherd of shepherds, is a medium-sized, well-proportioned dog that is easily recognized both at work and in dog sports competitions. Known for its endless energy, stamina, and eagerness to work, this breed is one of the most active and always eager to please. Despite its athletic and muscular appearance, the Border Collie is a sweet-natured and affectionate dog, always ready to be cuddled. It will be the best furry friend in the world for anyone who can match its energy.";
            razas[3].innerText = "This medium-sized Spitz-type dog (double-coated, with a dense coat, erect ears, and a tail curled back) has a light, short, and compact body. Adult males measure 45 cm in height, while females are slightly less. Both sexes weigh between 14 and 18 kg. The woolly undercoat is covered by a thick, smooth undercoat that can be beige, black, red, or grayish.";
            razas[4].innerText = "Bulldog";
            razas[5].innerText = "Beagle";
            razas[6].innerText = "Border collie";
            razas[7].innerText = "Norwegian Buhund";
        } else { // Cats
            document.getElementById("icono").href = "./img/gato/logoGato.png";
            document.getElementById("titulo-web").innerText = "Cats";
            document.getElementById("animal-tipo").innerText = "Other types of felines";
            document.getElementById("animal").innerText = "Dogs";
            document.getElementById("titulo-galeria").innerText = "Galery of Cats"
            imagenes[0].src = "./img/gato/gato1.png";
            imagenes[1].src = "./img/gato/gato2.png";
            imagenes[2].src = "./img/gato/gato3.png";
            imagenes[3].src = "./img/gato/gato4.png";
            imagenes[4].src = "./img/gato/raza1.png";
            imagenes[5].src = "./img/gato/raza2.png";
            imagenes[6].src = "./img/gato/raza3.png";
            imagenes[7].src = "./img/gato/raza4.png";
            // Texto Razas
            razas[0].innerText = "Long and agile, words like elegant and graceful were coined to describe the Siamese cat. This is a striking and recognizable breed, even for those who know nothing about cats or don't even care much for them. The Siamese is affectionate and sociable, and can adapt easily to family life. However, it's also very curious and active, so it's best to keep it entertained with games that involve fetching objects you throw or with long walks around the neighborhood.";
            razas[1].innerText = "The Siberian cat is an affectionate and loyal animal that makes a great companion, as it gets along really well with everyone, including children and other pets. Besides its impressive appearance, it loves cuddles. Its sweet personality makes you want to have it around all the time.";
            razas[2].innerText = 'The Burmese, or Sacred Cat of Burma, is a semi-longhaired cat, darker in color toward the distal markings, face, legs, ears, and tail, and somewhat lighter in color on the rest of the body. It is a relatively large cat, with a stocky body and short legs. The Burmese has blue eyes and four pure white paws. The front "socks" cover only the toes, but the hind paws are longer. The head is broad and round, with medium-sized ears. Burmese come in many different colors, although the white Burmese cat is the best known.';
            razas[3].innerText = "The Munchkin cat, also known as the Monkey, is a medium-sized cat with extremely short legs and a long backbone. Because of its elongated body and short legs (short-legged), many people compare it to a dachshund, which is why it is sometimes referred to as a sausage cat.";
            razas[4].innerText = "Siamese";
            razas[5].innerText = "Siberian Forest";
            razas[6].innerText = "Burmese";
            razas[7].innerText = "Munchkin";
        }
        document.getElementById("idioma").innerText = "English";
    } else { // ESPAÑOL
        if (!animal) { // PERROS
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
        document.getElementById("idioma").innerText = "Español";
    }
    lenguaje = !lenguaje;
}

// CAMBIO DE ANIMAL
function cambio() {
    imagenes.forEach(img => img.style.opacity = 0);
    razas.forEach(p => p.style.opacity = 0);
    document.getElementById("titulo-galeria").style.opacity = 0;
    setTimeout(() => {
        if (!lenguaje) {
            if(animal) { // DOGS
                document.getElementById("icono").href = "./img/perro/logoperro.png";
                document.getElementById("titulo-web").innerText = "Dogs";
                document.getElementById("animal-tipo").innerText = "Other types of dogs";
                document.getElementById("animal").innerText = "Cats";
                document.getElementById("titulo-galeria").innerText = "Galery of Dogs"
                imagenes[0].src = "./img/perro/perro1.png";
                imagenes[1].src = "./img/perro/perro2.png";
                imagenes[2].src = "./img/perro/perro3.png";
                imagenes[3].src = "./img/perro/perro4.png";
                imagenes[4].src = "./img/perro/raza1.png";
                imagenes[5].src = "./img/perro/raza2.png";
                imagenes[6].src = "./img/perro/raza3.png";
                imagenes[7].src = "./img/perro/raza4.png";
                // Texto Razas
                razas[0].innerText = "The bulldog is a tenacious and courageous dog, although also somewhat silly. Over the years, this breed has been the universal symbol of toughness, probably why it was commonly seen in schools and businesses around the world. However, despite being portrayed as a fierce dog, the bulldog is actually very affectionate and friendly, as well as courageous. The bulldog is very adaptable and loves naps and treats, but it is also quite stubborn, making it a great companion for someone with some experience who knows how to care for it properly.";
                razas[1].innerText = "The beagle is one of the most well-known and beloved hound breeds. It's an intelligent, cheerful, and outgoing dog, but it also has a rather mischievous nature, so it can get into trouble quite often, especially if left alone for long periods of time. However, with proper training and, above all, the right treats, a beagle can be encouraged to behave.";
                razas[2].innerText = "The Border Collie, the shepherd of shepherds, is a medium-sized, well-proportioned dog that is easily recognized both at work and in dog sports competitions. Known for its endless energy, stamina, and eagerness to work, this breed is one of the most active and always eager to please. Despite its athletic and muscular appearance, the Border Collie is a sweet-natured and affectionate dog, always ready to be cuddled. It will be the best furry friend in the world for anyone who can match its energy.";
                razas[3].innerText = "This medium-sized Spitz-type dog (double-coated, with a dense coat, erect ears, and a tail curled back) has a light, short, and compact body. Adult males measure 45 cm in height, while females are slightly less. Both sexes weigh between 14 and 18 kg. The woolly undercoat is covered by a thick, smooth undercoat that can be beige, black, red, or grayish.";
                razas[4].innerText = "Bulldog";
                razas[5].innerText = "Beagle";
                razas[6].innerText = "Border collie";
                razas[7].innerText = "Norwegian Buhund";
            } else { // Cats
                document.getElementById("icono").href = "./img/gato/logoGato.png";
                document.getElementById("titulo-web").innerText = "Cats";
                document.getElementById("animal-tipo").innerText = "Other types of felines";
                document.getElementById("animal").innerText = "Dogs";
                document.getElementById("titulo-galeria").innerText = "Galery of Cats"
                imagenes[0].src = "./img/gato/gato1.png";
                imagenes[1].src = "./img/gato/gato2.png";
                imagenes[2].src = "./img/gato/gato3.png";
                imagenes[3].src = "./img/gato/gato4.png";
                imagenes[4].src = "./img/gato/raza1.png";
                imagenes[5].src = "./img/gato/raza2.png";
                imagenes[6].src = "./img/gato/raza3.png";
                imagenes[7].src = "./img/gato/raza4.png";
                // Texto Razas
                razas[0].innerText = "Long and agile, words like elegant and graceful were coined to describe the Siamese cat. This is a striking and recognizable breed, even for those who know nothing about cats or don't even care much for them. The Siamese is affectionate and sociable, and can adapt easily to family life. However, it's also very curious and active, so it's best to keep it entertained with games that involve fetching objects you throw or with long walks around the neighborhood.";
                razas[1].innerText = "The Siberian cat is an affectionate and loyal animal that makes a great companion, as it gets along really well with everyone, including children and other pets. Besides its impressive appearance, it loves cuddles. Its sweet personality makes you want to have it around all the time.";
                razas[2].innerText = 'The Burmese, or Sacred Cat of Burma, is a semi-longhaired cat, darker in color toward the distal markings, face, legs, ears, and tail, and somewhat lighter in color on the rest of the body. It is a relatively large cat, with a stocky body and short legs. The Burmese has blue eyes and four pure white paws. The front "socks" cover only the toes, but the hind paws are longer. The head is broad and round, with medium-sized ears. Burmese come in many different colors, although the white Burmese cat is the best known.';
                razas[3].innerText = "The Munchkin cat, also known as the Monkey, is a medium-sized cat with extremely short legs and a long backbone. Because of its elongated body and short legs (short-legged), many people compare it to a dachshund, which is why it is sometimes referred to as a sausage cat.";
                razas[4].innerText = "Siamese";
                razas[5].innerText = "Siberian Forest";
                razas[6].innerText = "Burmese";
                razas[7].innerText = "Munchkin";
            }
        } else {
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