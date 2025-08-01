import { base } from '$app/paths';

class Post {
	name: string;
	title: string;
	subtitle: string;
	htmlPreview: string;
	metaDescription: string;
	author: string;
	date: string; // TODO Convertir a date
	visible: boolean;
	customHtml: boolean;
	slug: string;
	content: string;

	public constructor(name: string, title: string, subtitle: string, htmlPreview: string, metaDescription: string, author: string, date: string, visible: boolean, customHtml: boolean, slug: string, content: string) {
		this.name = name;
		this.title = title;
		this.subtitle = subtitle;
		this.htmlPreview = htmlPreview;
		this.metaDescription = metaDescription;
		this.author = author;
		this.date = date;
		this.visible = visible;
		this.customHtml = customHtml;
		this.slug = slug;
		this.content = content;
	  }
}

/* To use {base} doing a .replaceAll("{base}", base) is needed*/

// TODO crear función que dado un post lo devuelva formateado con el author para el listado 

// TODO convertir a tipo Post List
export const posts = [
	{
		title: "Post Template",
		subtitle: "",
		htmlPreview: 
		`
			<p>Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe, a round earth in which all the directions eventually meet...</p>
		`,
		metaDescription: "",
		author: "",
		date: "20230101",
		visible: false,
		customHtml: false,
		slug: 'post-template',
		content:
		`
			<p>Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe, a round earth in which all the directions eventually meet, in which there is no center because every point, or none, is center — an equal earth which all men occupy as equals. The airman's earth, if free men make it, will be truly round: a globe in practice, not in theory.</p>
			<p>Science cuts two ways, of course; its products can be used for both good and evil. But there's no turning back from science. The early warnings about technological dangers also come from science.</p>
			<p>What was most significant about the lunar voyage was not that man set foot on the Moon but that they set eye on the earth.</p>
			<p>A Chinese tale tells of some men sent to harm a young girl who, upon seeing her beauty, become her protectors rather than her violators. That's how I felt seeing the Earth for the first time. I could not help but love and cherish her.</p>
			<p>For those who have seen the Earth from space, and for the hundreds and perhaps thousands more who will, the experience most certainly changes your perspective. The things that we share in our world are far more valuable than those which divide us.</p>
			<h2 class="section-heading">The Final Frontier</h2>
			<p>There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.</p>
			<p>There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.</p>
			<blockquote class="blockquote">The dreams of yesterday are the hopes of today and the reality of tomorrow. Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next ten.</blockquote>
			<p>Spaceflights cannot be stopped. This is not the work of any one man or even a group of men. It is a historical process which mankind is carrying out in accordance with the natural laws of human development.</p>
			<h2 class="section-heading">Reaching for the Stars</h2>
			<p>As we got further and further away, it [the Earth] diminished in size. Finally it shrank to the size of a marble, the most beautiful you can imagine. That beautiful, warm, living object looked so fragile, so delicate, that if you touched it with a finger it would crumble and fall apart. Seeing this has to change a man.</p>
			<a href="#!"><img class="img-fluid" src="{base}/img/posts/template/post-sample-image.jpg" alt="..." /></a>
			<span class="caption text-muted">To go places and do things that have never been done before – that’s what living is all about.</span>
			<p>Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before.</p>
			<p>As I stand out here in the wonders of the unknown at Hadley, I sort of realize there’s a fundamental truth to our nature, Man must explore, and this is exploration at its greatest.</p>
			<p>
				Placeholder text by
				<a class="link-underlined" href="http://spaceipsum.com/">Space Ipsum</a>
				&middot; Images by
				<a class="link-underlined" href="https://www.flickr.com/photos/nasacommons/">NASA on The Commons</a>
			</p>
		`.replaceAll("{base}", base)
	},
	{
		title: "Gallery Template",
		subtitle: "",
		htmlPreview: 
		`
			
		`,
		metaDescription: "",
		author: "",
		date: "20230101",
		visible: false,
		customHtml: false,
		slug: 'gallery-template',
		content:
		`
			<div class="lightbox">
				<div class="row">
					<div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
						<img
							src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/1.webp"
							srcset="https://mdbcdn.b-cdn.net/img/Photos/Slides/1.webp"
							class="w-100 shadow-1-strong rounded mb-4"
							alt="Boat on Calm Water"
						/>
					
						<img
							src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/2.webp"
							srcset="https://mdbcdn.b-cdn.net/img/Photos/Slides/2.webp"
							class="w-100 shadow-1-strong rounded mb-4"
							alt="Wintry Mountain Landscape"
						/>
					</div>
				
					<div class="col-lg-4 mb-4 mb-lg-0">
						<img
							src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/3.webp"
							srcset="https://mdbcdn.b-cdn.net/img/Photos/Slides/3.webp"
							class="w-100 shadow-1-strong rounded mb-4"
							alt="Mountains in the Clouds"
						/>
					
						<img
							src="{base}/img/posts/template/post-sample-image.jpg"
							class="w-100 shadow-1-strong rounded mb-4"
							alt="Boat on Calm Water"
						/>
					</div>
				
					<div class="col-lg-4 mb-4 mb-lg-0">
						<img
							src="{base}/img/posts/template/post-bg.jpg"
							class="w-100 shadow-1-strong rounded mb-4"
							alt="Waves at Sea"
						/>
					
						<img
							src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/4.webp"
							srcset="https://mdbcdn.b-cdn.net/img/Photos/Slides/4.webp"
							class="w-100 shadow-1-strong rounded mb-4"
							alt="Yosemite National Park"
						/>
					</div>
				</div>
			</div>
		`.replaceAll("{base}", base)
	},
	{
		title: "Vuelta a empezar",
        subtitle: "",
		htmlPreview: 
		`
			<p>¿qué es el amor?</p>
		`,
		metaDescription: "¿qué es el amor?",
        author: "Sergio Benito",
        date: "20190430",
        visible: true,
		customHtml: false,
		slug: 'vuelta-a-empezar',
		content:
		`
			<p>eras mi vida
			<br>ahora
			<br>solo una mentira</p>

			<p>¿qué es el amor?
			<br>dices mientras clavas en mi herida
			<br>tu silencio desgarrador</p>

			<p>estás solo
			<br>te quejas</p>

			<p>me conoces</p>

			<p>al oído
			<br>me dices</p>
			
			<p>te quiero</p>

			<p>tu silencio
			<br>son rejas</p>

			<p>me dejas
			<br>herido</p>

			<p>no tengo ningún motivo para seguir</p>

			<p>no esperaré con ganas que llegue el fin de semana
			<br>para verte</p>

			<p>daré mil vueltas en la cama
			<br>antes de dormirme</p>

			<p>suplicaré al mundo sentir tu piel junto a mi piel
			<br>mientras me miento diciendo que no pasa nada
			<br>repitiendo que todo saldrá bien</p>

			<p>te quería
			<br>me querías</p>

			<p>no existía el mañana</p>

			<p>eras mi vida
			<br>ahora</p>

			<p>te odio
			<br>te olvido</p>

			<p>pronto</p>

			<p>desconocidos</p>
		`
	},
	{
		title: "December 24th",
        subtitle: "",
		htmlPreview: 
		`
			<p>Este no es mi guion
			<br>What am I doing this for?</p>
		`,
		metaDescription: "Este no es mi guion. What am I doing this for?",
        author: "Sergio Benito",
        date: "20221224",
        visible: true,
		customHtml: false,
		slug: 'december-24',
		content:
		`
			<p>December 24th
			<br>Este no es mi guion
			<br>What am I doing this for?</p>

			<p>It's bittersweet
			<br>I remember myself ten years ago
			<br>Jugando en noche buena con mi ordenador
			<br>Mi madre haciendo la cena y mi padre viendo el televisor</p>

			<p>Es hora de cortar el jamón
			<br>Mi padre se levanta y también yo
			<br>Le robo un trozo de refilón y
			<br>Ayudo a mi madre a cortar el champiñón</p>

			<p>What am I doing this for?
			<br>What do I want?
			<br>Love?</p>

			<p>Este no es mi guión
			<br>Esta noche buena escribiré en mi ordenador
			<br>Comeré jamón y cortaré champiñón</p>

			<p>No es lo que quiero pero es mejor
			<br>Mejor que lo que encuentro hoy en el exterior
			<br>I should do some work</p>

			<p>My head hurts
			<br>My heart</p>

			<p>What am I doing this for?</p>
		`
	},
	{
		title: "Aféitame",
        subtitle: "",
		htmlPreview: 
		`
			<p>Otra vez mi mente ha pensado algo bello y al ir a escribirlo se me ha olvidado.</p>
		`,
		metaDescription: "Otra vez mi mente ha pensado algo bello y al ir a escribirlo se me ha olvidado.",
        author: "Sergio Benito",
        date: "20230526",
        visible: true,
		customHtml: false,
		slug: 'afeitame',
		content:
		`
			<p>Otra vez mi mente ha pensado algo bello y al ir a escribirlo se me ha olvidado. Ese tipo de cosas que me vienen a la cabeza son las que más hablan de mí porque me salen de forma inconsciente, pero nadie las escucha.</p>

			<p>Mi vida entera si me pidieras afeitarme. No es que me fie de tí y no tenga miedo de que me puedas cortar, sino que cualquier oportunidad de que tu cara esté a cinco centímetros de la mía merece la pena. Si tengo que hacerme un corte en el labio no se me ocurre una situación mejor. Me pone pensar en ello y me baja un subidón desde el cuello si me imagino que tu mano fría lo toca.</p>

			<p>¿Dónde estás? Eres un contacto que no encuentro en mi agenda, eres la más bella persona sin rostro, eres la idea que me vuelve loco y la que me cura la locura.</p>
		`
	},
	{
		title: "Cogerte de la mano",
		subtitle: "",
		htmlPreview: 
		`
			<p>Ahora que estoy sentado en la cama, escribiendo estas palabras...</p>
		`,
		metaDescription: "Ahora que estoy sentado en la cama, escribiendo estas palabras...",
        author: "Sergio Benito",
        date: "20230804",
        visible: true,
		customHtml: false,
		slug: 'cogerte-de-la-mano',
		content:
		`
			<p>Otro día más que me despierto a tu lado, salvo porque tras tres segundos empiezo a darme cuenta de que estoy soñando despierto otra vez, y tras dos segundos más el sueño se rompe del todo, y me siento peor que al principio.</p>
			<p>Yo solo quiero cogerte de la mano y darte un beso en la mejilla, y no sentir que algo me mete el dedo en el corazón y lo retuerce, un par de veces al día. Aunque en realidad si es solo un par de veces, sería un día bueno.</p>
			<p>¿Cuál es la causa de una herida que duele tanto? No quiero pensar más en ello, ya no me aporta hacerlo. ¿Cómo se sana una herida así? No quiero seguir imaginando un pasado o un futuro. Tengo que hacer cualquier cosa, cualquiera, excepto hacer esa herida más grande. Cuando no pienso, y consigo vivir el presente, me hallo feliz.</p>
			<p>Aquí y ahora.</p>
			<p>Ahora que mi culo empuja el suelo, mi cabeza apunta al cielo y una mosca se posa en mi rodilla. Ahora que huele a incienso, una bicicleta pasa por el camino y el viento me acaricia el pelo.</p>
			<p>Ahora que no nos besamos, ni despacio, ni deprisa. Ahora que todavía no me he apuntado a bailes de salón, ni me saludan las floristas, ni te desnudo, ni me desnudas, ni muchas de esas cosas que dice Sabina en aquella canción.</p>
			<p>Ahora que estoy sentado en la cama, escribiendo estas palabras, lo tengo claro. Te quiero, y los momentos que hemos vivido, los de verdad, han sido tan especiales para mí, y los quiero tal y como son. Estoy tan agradecido por nosotros, y el mundo parece tan bonito y emocionante, que voy a seguir luchando por estar aquí y ahora.</p>
		`
	},
	{
		title: "Hunger",
        subtitle: "",
		htmlPreview: 
		`
			<p>Some thoughts from a hot summer afternoon</p>
		`,
		metaDescription: "Some thoughts from a hot summer afternoon",
        author: "Sergio Benito",
        date: "20230810",
        visible: true,
		customHtml: false,
		slug: 'hunger',
		content:
		`
			<blockquote class="blockquote">I'm starving. Omg. Look at that pizza, it looks delicious. I'm gonna eat three of them. I, I, I’m idealizing it, ok, it's true. But I am so hungry.</blockquote>
			<p>In the end, I ate a hole pizza, I felt bad, I didn't really want to do it, but I was so hungry. Except, pizza is you, and food is love. I’m starving, of love.</p>
			<p>When I have a little bit of love, romantic, couple, partner, sexual, passionate, intimate, especial, intense love, I’m not that hungry for several days.</p>
			<p>I would like to have a little bit of that every now and then. Ok, I'm gonna be honest. I would love to have a fair amount of that every day, at least for a while. Seems a little bit like if I have a slice of pizza every day for one year, maybe I will never have a craving for pizza that intense never again.</p>
			<p>I’ve been starving for ten years, and I’ve been idealizing that kind of love and relationships.</p>
			<p>It's difficult for me when I have a little bit to not want more. Does it mean I wouldn't be in a relationship with someone who cannot give me that level of time, dedication and intensity that I want?</p>
			<p>I you’re starving would you decline a slice of pizza every now and then because you would like to eat a hole pizza? Wtf, of course not.</p>
			<p>And also, those pizza slices are people. People that you love. So it is a little bit more complicated.</p>
			<p>But yeah, when I find someone, whom I love, and whom I get some love from, I cannot afford not trying to be my best version, keep that, and if there is a possibility of having a little bit more, and being something or being together, I cannot afford not doing it. I just simply can't afford it. I'm still starving.</p>
			<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6Ju28M6P8Y8sLjBgWjyUUD?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
		`	
	},
	{
		title: "The impulse to survive",
        subtitle: "",
		htmlPreview: 
		`
			<p>The measure of a society is how it treats its weakest members.</p>
		`,
		metaDescription: "The measure of a society is how it treats its weakest members.",
        author: "Sergio Benito",
        date: "20230927",
        visible: true,
		customHtml: false,
		slug: 'the-impulse-to-survive',
		content:
		`
			<p>We are all animals and so we all have an impulse to survive. From the rich and businessmen that make use of the work force to perpetuate their patrimony and power. But humankind makes the same using its power over animals, to feed them and killing them in order to eat them.</p> 
			<blockquote class="blockquote">The measure of a society is how it treats its weakest members.</blockquote>
			<p>I think we cannot blame our ancestors for doing so, because they were following their instinct to survive, and livestock or hunting were efficient ways to do so. But nowadays, it is possible to survive without using animals for that purpose. And animals will be animals, and some will kill others to eat them, and we can´t change or interfere in that, but we humans are at a point in which we can choose.</p>
			<p>The same goes with plants, of course on a different level, but it can be applied. We make use of plants for our survival, and non living creatures, and in last instance, of our planet. The difference is that nowadays, the thousand of millions of humans that habitate our planet, cannot survive without this use. Who knows, maybe in the future we will be able to make all the good we need from a laboratory, without the need of interfering or making use of other living creatures.</p> 
			<p>I would like to include myself on that group of people that decided to stop making use of animals, and stop speciesism, because we can actually do it. But personally I am not completely there, yet.</p>
			<p>In any case, if we have to, or we just make use of something, I think a good attitude towards life would always be being thankful for all we’ve got and all the things we make use of for our survival or enjoy. It has to be. Saying thanks to animals, plants, the sun, and the moon, is cute.</p>
		`
	},
	{
		title: "Some pictures taken in Amsterdam",
		subtitle: "",
		htmlPreview: 
		`
			<img class="img-fluid w-100 shadow-1-strong rounded mb-4" src="{base}/img/posts/20231007/amsterdam-street-01-02-p.jpg" alt="" />
		`.replaceAll("{base}", base),
		metaDescription: "",
		author: "Sergio Benito",
		date: "20231007",
		visible: true,
		customHtml: false,
		slug: 'some-pictures-taken-in-amsterdam',
		content:
		`
			<div class="lightbox">
				<div class="row">
					<div class="col-lg-12 col-md-12 mb-4 mb-lg-0">
						<img src="{base}/img/posts/20231007/amsterdam-street-01-01-t.jpg" srcset="{base}/img/posts/20231007/amsterdam-street-01-01-f.jpg" class="w-100 shadow-1-strong rounded mb-4" alt="" />
						<img src="{base}/img/posts/20231007/amsterdam-street-01-02-t.jpg" srcset="{base}/img/posts/20231007/amsterdam-street-01-02-f.jpg" class="w-100 shadow-1-strong rounded mb-4" alt="" />
						<img src="{base}/img/posts/20231007/amsterdam-street-01-03-t.jpg" srcset="{base}/img/posts/20231007/amsterdam-street-01-03-f.jpg" class="w-100 shadow-1-strong rounded mb-4" alt="" />
						<img src="{base}/img/posts/20231007/amsterdam-street-01-04-t.jpg" srcset="{base}/img/posts/20231007/amsterdam-street-01-04-f.jpg" class="w-100 shadow-1-strong rounded mb-4" alt="" />
						<img src="{base}/img/posts/20231007/amsterdam-street-01-05-t.jpg" srcset="{base}/img/posts/20231007/amsterdam-street-01-05-f.jpg" class="w-100 shadow-1-strong rounded mb-4" alt="" />
						<img src="{base}/img/posts/20231007/amsterdam-street-01-06-t.jpg" srcset="{base}/img/posts/20231007/amsterdam-street-01-06-f.jpg" class="w-100 shadow-1-strong rounded mb-4" alt="" />
						<img src="{base}/img/posts/20231007/amsterdam-street-01-07-t.jpg" srcset="{base}/img/posts/20231007/amsterdam-street-01-07-f.jpg" class="w-100 shadow-1-strong rounded mb-4" alt="" />
						<img src="{base}/img/posts/20231007/amsterdam-street-01-08-t.jpg" srcset="{base}/img/posts/20231007/amsterdam-street-01-08-f.jpg" class="w-100 shadow-1-strong rounded mb-4" alt="" />
						<img src="{base}/img/posts/20231007/amsterdam-street-01-09-t.jpg" srcset="{base}/img/posts/20231007/amsterdam-street-01-09-f.jpg" class="w-100 shadow-1-strong rounded mb-4" alt="" />
						<img src="{base}/img/posts/20231007/amsterdam-street-01-10-t.jpg" srcset="{base}/img/posts/20231007/amsterdam-street-01-10-f.jpg" class="w-100 shadow-1-strong rounded mb-4" alt="" />
					</div>
				</div>
			</div>
		`.replaceAll("{base}", base)
	},
	{
		title: "Lo que pasa por mi mente",
        subtitle: "",
		htmlPreview: 
		`
			<p>Me gritas desde el final de las escaleras. Y entonces bajo corriendo.</p>
		`,
		metaDescription: "Me gritas desde el final de las escaleras. Y entonces bajo corriendo.",
        author: "Sergio Benito",
        date: "20231130",
        visible: true,
		customHtml: false,
		slug: 'lo-que-pasa-por-mi-mente',
		content:
		`
			<p>Por las blancas y empinadas escaleras, que dan bajando al mar azul, caminas. Un mar azul puro, azul claro, azul oscuro, y de todas las tonalidades de azul que junto con el blanco de la espuma, hacen que no pueda imaginar una forma más bonita para su composición. Y me quedo mirando el mar durante más tiempo, para no mirarte a ti en exceso.</p>
			<p>Aunque es lo que deseo. Aferrarme a todo lo que me gusta de ti, y mirarte como miro al mar. Igual que miro al mar sin temer que por hacerlo vaya a mirarme él mal.</p>
			<p><b><i>¡Vamos!</i></b></p>
			<p>Me gritas desde el final de las escaleras. Y entonces bajo corriendo.</p>
			<p style="opacity: 0.6">¿Por qué parece que solo me doy el permiso de amarte por un instante, aunque deseo quedarme en esta playa, parar el tiempo, besar tu espalda.</p>
			<p>Mierda. Sí que están empinadas las escaleras.</p>
			<p style="opacity: 0.45">¿Y si no pienso, y digo lo que siento, y te adoro? A riesgo de ser un cursi, y un hombre que replica actitudes que nacen de su apego ansioso, embadurnado de un mundo turbio en el que intento no zambullirme pero es imposible que te salpique.</p>
			<p>Qué calor. Quiero meterme en el mar. En este mar cristalino.</p>
			<p style="opacity: 0.30">¿Y si dejo las fantasías, y dejo de soñar despierto? Y te beso. A riesgo de que no te guste y me veas con otros ojos. A riesgo de que la verdad nos quite cualquier protección que quede, nos deje paso libre, y el viento no sea de nuestro agrado.</p>
			<p>Esta brisa me encanta. Me da la vida.</p>
			<p style="opacity: 0.30">¿Y si soy más egoista? Con la inevitable consecuencia de complacer a menos gente, y de ser repudiado por algunos, pero amado de forma más autentica por unos pocos.</p>
			<p style="opacity: 0.45">¿Y si te escribo un mensaje y te digo que te pienso y me muero por estrujarte, comerte a besos, olerte, y sentir como nos pasamos mutuamente una corriente por la piel.</p>
			<p style="opacity: 0.6">Y decirte lo que quiero, lo que de verdad quiero, sin ninguna intención más que la de que sepas lo que pasa por mi mente.</p>
			<p><b><i>¡Hey!</i></b></p>
		`
	},
	{
		title: "Love, Stan",
        subtitle: "",
		htmlPreview: 
		`
			<p>Did you travel to Rome in summer?</p>
		`,
		metaDescription: "Did you travel to Rome in summer?",
        author: "Sergio Benito",
        date: "20240106",
        visible: true,
		customHtml: false,
		slug: 'love-stan',
		content:
		`
			<p>Dear Kim, I miss you
			<br>These months in Vermont
			<br>have been crazy</p>

			<p>I thought I found my place
			<br>but didn't quite do
			<br>It was fun at the beginning
			<br>but as soon the rush stopped
			<br>I started to feel alone</p>

			<p>The streets are sad when it rains
			<br>the weekend plans are just okay
			<br>the food is awful and expensive
			<br>and the fucking job is the same
			<br>a big shit</p>

			<p>Days just skip themselves</p>

			<p>But I'm tired of that shit
			<br>What about you?
			<br>How's your life?
			<br>What are you up to?</p>

			<p>Did you travel to Rome in summer?
			<br>I bet you're taking a lot of pictures
			<br>You have to show them
			<br>make a blog or something
			<br>That'd be awesome
			<br>I would read you</p>

			<p>Anyways
			<br>I hope you're doing great
			<br>And if not, that's okay
			<br>I'm neither
			<br>But you can always count on me
			<br>if you need it
			<br>I hope you get to read this</p>

			<p>Love, Stan</p>
		`
	},
	{
		title: "jvnweo0ijfkn cnvrej8493-023nk mcskdk nhfdjri jfookldnsd",
        subtitle: "",
		htmlPreview: 
		`
			<p>Solo estoy yo, y estas líneas que estoy escribiendo.</p>
		`,
		metaDescription: "Solo estoy yo, y estas líneas que estoy escribiendo.",
        author: "Sergio Benito",
        date: "20240214",
        visible: true,
		customHtml: false,
		slug: 'jvnweo0ijfkn',
		content:
		`
			<p>Siempre me lo pongo difícil, y busco mil vueltas para no acabar haciendo lo que quiero. Lo que quiero en el presente. Por pensar en el futuro. Por mirar al pasado y lamentarme.</p>

			<p>El futuro no existe. El pasado tampoco.</p>

			<p>Solo estoy yo, y estas líneas que estoy escribiendo. El mundo es mi habitación ambientada con una luz roja comprada por internet. La vida no tiene fin, no tiene sentido. No soy un lienzo en blanco, pero quien soy y como he llegado hasta aquí es difuso. No me apetece rebuscar. Me gustaría quedarme en este estado por un tiempo, un poco más de lo que las necesidades mortales y humanas me permitirán. Creo.</p>

			<p>¿Es todo parte de mi imaginación? Al menos, todo ocurre en mi mente. ¿Verdad? Pero a veces es tan bonito cuando parece que no es así, sino que nuestra mente y la de otra persona se miran, y se sonríen. Todos estamos metidos en este juego que llamamos vida. Está guay, está entretenido. Está gracioso, a veces, cuando nuestra mente tiene un poco de aire para disfrutar de su existencialidad.</p>

			<p>Las teclas de este teclado son tan suaves. jvnweo0ijfkn cnvrej8493-023nk mcskdk nhfdjri jfookldnsd</p>

			<p>Mi pulgar es un clítoris. Mi uña es un ano. Los pelos de mis nudillos son el bigote de un adolescente. Mis manos son un arbol, y mis dedos son unas ramas secas. Tan secas que se parten al doblarlas. Mi cuello es una gran roca de mármol resquebrajado. Mis pies son una nube. Mis ojos se quieren cerrar.</p>

			<p>Hace mucho que no me fumo un porro. Hace mucho que no me emborracho. Hace mucho que no le como la boca a alguien y me pierdo entre sus labios.</p>

			<p>Hace no mucho que cené, y me acabo de lavar los dientes, pero me comería unos macarrones de con tomate de los que hacía mi madre.</p>

			<p>Me siento solo. Mi cuerpo quiere cerrar los ojos, y mi mente quiere imaginar que mi amor está a mi lado, nuestras mentes se entienden por telepatía, y me acaricia el cuerpo, hasta quedar dormidos abrazados.</p>
		`
	},
	{
		title: "Estoy vivo",
        subtitle: "",
		htmlPreview: 
		`
			<p>Por no se cuantas veces ya, me siento delante de un papel en blanco...</p>
		`,
		metaDescription: "Por no se cuantas veces ya, me siento delante de un papel en blanco...",
        author: "Sergio Benito",
        date: "20240504",
        visible: true,
		customHtml: false,
		slug: 'estoy-vivo',
		content:
		`
			<p>Por no se cuantas veces ya, me siento delante de un papel en blanco, cruzando unos dedos imaginarios, para que esta vez consiga seguir escribiendo, supere mis miedos, y deje salir lo que sea que haya.</p>
			<p>Para qué fingir que mis palabras hablan de un personaje ficticio, si todos sabemos que los artistas hablan de ellos mismos, con alguna decoración o licencia poética, y yo no soy una excepción.</p>
			<p>Me he llamado artista, algo que no me permití decir de mí hasta hace no mucho.</p>
			<p>El miedo es una mierda, porque no me escucho, y hago lo más horrible que puedes hacer. No ser tú mismo.</p>
			<p>Estoy vivo, o al menos creo que estoy vivo por ahora. Lo siento en el corazón, y me vienen no como palabras, sino como sensaciones, mil cosas que quiero compartir, que quiero seguir escribiendo.</p>
			<p>Quiero seguir siendo yo mismo.</p>
		`
	},
	{
		title: "Some colors captured in 2024",
		subtitle: "",
		htmlPreview: 
		`
			<img class="img-fluid w-100 shadow-1-strong rounded mb-4" src="{base}/img/posts/20241110/colors-01-01-p.jpg" alt="" />
		`.replaceAll("{base}", base),
		metaDescription: "",
		author: "Sergio Benito",
		date: "20241110",
		visible: true,
		customHtml: false,
		slug: 'some-colors-captured-in-2024',
		content:
		`
			<div class="lightbox">
				<div class="row">
					<div class="col-lg-12 col-md-12 mb-4 mb-lg-0">
						<img src="{base}/img/posts/20241110/colors-01-01-f.jpg" srcset="{base}/img/posts/20241110/colors-01-01-f.jpg" class="w-100 shadow-1-strong rounded mb-4" alt="" />
						<img src="{base}/img/posts/20241110/colors-01-02-f.jpg" srcset="{base}/img/posts/20241110/colors-01-02-f.jpg" class="w-100 shadow-1-strong rounded mb-4" alt="" />
						<img src="{base}/img/posts/20241110/colors-01-03-f.jpg" srcset="{base}/img/posts/20241110/colors-01-03-f.jpg" class="w-100 shadow-1-strong rounded mb-4" alt="" />
						<img src="{base}/img/posts/20241110/colors-01-04-f.jpg" srcset="{base}/img/posts/20241110/colors-01-04-f.jpg" class="w-100 shadow-1-strong rounded mb-4" alt="" />
						<img src="{base}/img/posts/20241110/colors-01-05-f.jpg" srcset="{base}/img/posts/20241110/colors-01-05-f.jpg" class="w-100 shadow-1-strong rounded mb-4" alt="" />
						<img src="{base}/img/posts/20241110/colors-01-06-f.jpg" srcset="{base}/img/posts/20241110/colors-01-06-f.jpg" class="w-100 shadow-1-strong rounded mb-4" alt="" />
						<img src="{base}/img/posts/20241110/colors-01-07-f.jpg" srcset="{base}/img/posts/20241110/colors-01-07-f.jpg" class="w-100 shadow-1-strong rounded mb-4" alt="" />
						<img src="{base}/img/posts/20241110/colors-01-08-f.jpg" srcset="{base}/img/posts/20241110/colors-01-08-f.jpg" class="w-100 shadow-1-strong rounded mb-4" alt="" />
						<img src="{base}/img/posts/20241110/colors-01-09-f.jpg" srcset="{base}/img/posts/20241110/colors-01-09-f.jpg" class="w-100 shadow-1-strong rounded mb-4" alt="" />
					</div>
				</div>
			</div>
		`.replaceAll("{base}", base)
	},
	{
		title: "The balcony in the opposite building",
		subtitle: "A short made by me for class",
		htmlPreview: 
		`
			<img class="img-fluid w-100 shadow-1-strong rounded mb-4" src="{base}/img/posts/20250328/balcony-01.jpg" alt="" />
		`.replaceAll("{base}", base),
		metaDescription: "",
		author: "Sergio Benito",
		date: "20250328",
		visible: true,
		customHtml: false,
		slug: 'the-balcony-in-the-opposite-building',
		content:
		`
			<p>A short made by me for class</p>
			<div style="padding:56.25% 0 0 0;position:relative;">
				<iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube-nocookie.com/embed/NaA2ncaCv4g?si=AbXYEQb_UOl0wDgv" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
			</div>
		`.replaceAll("{base}", base)
	},
	{
		title: "Mi universo particular",
		subtitle: "A short made by me for class",
		htmlPreview: 
		`
			<p>La señora de enfrente tampoco es que me transmita paz precisamente.</p>
		`,
		metaDescription: "",
		author: "Sergio Benito",
		date: "20250401",
		visible: true,
		customHtml: false,
		slug: 'mi-universo-particular',
		content:
		`
			<p>Me incomoda un poco que la señora de al lado hunda repetidas e interminables veces sus dedos nerviosos en la pantalla de su teléfono móvil. La señora de enfrente tampoco es que me transmita paz precisamente. Sus ojos no están enrojecidos pero siento que se le van a salir de un momento a otro, y que el único motivo por el que no lo hacen es porque por cada milímetro que salen, su cuello cae un milímetro para compensar el movimiento.</p>

			<p>El señor al otro lado del pasillo del vagón, y el señor que tiene enfrente, parecen un poco menos perturbados, y sus espaldas y cuellos un poco menos encorvados, pero igualmente no separan su mirada del universo particular de sus teléfonos móviles.</p>

			<p>La señora que está a mí lado se acaba de guardar el móvil en la chaqueta. Pero antes de que me diera tiempo a escribir la frase anterior, ya lo ha vuelto a coger entre sus manos. Después, eso sí, de mirarse las uñas tres veces en el lapso de siete u ocho segundos.</p>

			<p>Sería pretencioso afirmar que todo el vagón está perdido en su móvil, pero hasta donde me alcanza la vista, y me he girado hacia atrás y asomado hacia delante, no he podido encontrar ninguna excepción.</p>

			<p>De repente, y después de una hora y media desde que me desperté, yo mismo siento la urgencia de escuchar una canción, de comprobar si tengo algún mensaje, o de hundir mis dedos repetidas veces en busca de algo en mi teléfono móvil. De perderme en mi universo particular, al menos uno de ellos, probablemente uno de los más tontamente adictivos, al menos por un rato.</p>

			<p>Sin embargo lo que realmente me gustaría hacer es caminar por una pradera verde en un día soleado. Soleado pero no caluroso. Acariciar a un caballo que se ha separado de su grupo, acercándose a mí por curiosidad. Bajar por la pradera hasta un arroyo de agua cristalina, y beber de él. Cruzar el arroyo para llegar al bosque que está al otro lado, y al cruzar, sentir el agua fría pasar por los dedos de mis pies, y sentir el impulso de querer meter mi cuerpo completo en el agua.</p>

			<p>Bañarme en el arroyo, mientras un par de caballos se acercan a beber. Al levantarme, recibir de nuevo el calor del sol en mi piel. Darme media vuelta hacia el bosque, y sentir como su profundidad me llama. Entrar en el bosque y perderme en mi universo particular.</p>
		`
	},
	{
		title: "Tree Bark",
		subtitle: "Your whole life in boxes",
		htmlPreview: 
		`
			<img class="img-fluid w-100 shadow-1-strong rounded mb-4" src="{base}/img/posts/20250626/tree-bark-01.jpg" alt="" />
		`.replaceAll("{base}", base),
		metaDescription: "",
		author: "Sergio Benito",
		date: "20250626",
		visible: true,
		customHtml: false,
		slug: 'tree-bark',
		content:
		`
			<p>Another short made with the guidance of my teacher</p>
			<div style="padding:56.25% 0 0 0;position:relative;">
				<iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube-nocookie.com/embed/8c3yAeOoqgw?si=3boOxs7q3cWzOIDW" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
			</div>
		`.replaceAll("{base}", base)
	},
	{
		title: "test",
        subtitle: "",
		htmlPreview: 
		`
			<p>this is an special experience</p>
		`,
		metaDescription: "",
        author: "Sergio Benito",
        date: "20251212",
        visible: false,
		customHtml: true,
		dynamic: false,
		slug: 'experience-test',
		content: null
	}
].sort((a, b) => (a.date < b.date) ? 1 : -1);

// .sort((a, b) => (a.date < b.date) ? 1 : (a.date === b.date) ? ((a.file < b.file) ? 1 : -1) : -1);
