// Based on a script by Kathie Decora : katydecorah.com/code/lunr-and-jekyll/

//Create the lunr index for the search

var index = elasticlunr(function () {
  this.addField('section')
  this.addField('subtitle')
  this.addField('layout')
  this.addField('content')
  this.setRef('id')
});

//Add to this index the proper metadata from the Jekyll content



index.addDoc({
  section: "Paratextos",
  subtitle: "página iii",
  chapter: "Dedicatoria",
  layout: "textoporpagina",
  content: "\n\t\n\n Dedicatoria \n\nA don Alonso Pérez de Guzmán, el bueno, mi Señor; Duque de Medina Sidonia, Conde de Niebla, etcétera\n\nAunque el discurso de largos años suele causar las más veces en la memoria de los hombres mudanzas y olvido de las obligaciones pasadas, no se podrá decir semejante razón de Alonso Riquelme de Guzmán, mi padre, hijo de Rui Díaz de Guzmán, mi abuelo, vecino de Jerez de la Frontera, antiguo servidor de esa ilustrísima casa, en la cual, habiéndose mi padre criado desde su niñez hasta los 22 años de su edad, sirvió de paje y secretario del Excelentísimo señor don Juan Alarcón de Guzmán, y mi señora la Duquesa doña Ana de Aragón, dignísimos abuelos de vuestra Excelencia, de donde el año de 1540 pasó a las Indias con el Adelantado Alvar Núñez Cabeza de Vaca, su tío, gobernador del Río de la Plata, a quien sucediendo las cosas más adversas que favorables, fue preso y llevado a España, quedando mi padre en esta provincia donde fue forzoso asentar casa, tomando estado de matrimonio con doña Úrsula de Irala, mi madre, hija del gobernador Domingo Martínez de Irala.\n\nY continuando el real servicio, al cabo de 50 años falleció de esta vida, dejándome con la misma obligación como a primogénito suyo, la cual de mi parte siempre he tenido presente, en el reconocimiento y digno respeto de su memorable fama. De donde vine a tomar atrevimiento de ofrecer a Vuestra Excelencia este humilde y pequeño libro, que compuse en medio de las vigilias de mi profesión, sirviendo a Su Majestad desde mi puericia hasta ahora. Y puesto que el tratado es de cosas menores, y falto de toda erudición y elegancia, al fin es materia que toca a nuestros\n\t\n\n\t\n\t\t\n\t\t\n\t\t\n\n\t\n\n\n",
  id: 0
});
index.addDoc({
  section: "Paratextos",
  subtitle: "página iv",
  chapter: "Dedicatoria",
  layout: "textoporpagina",
  content: "\n\t\n\nnuestros españoles, que con valor y suerte emprendieron aquel descubrimiento, población y conquista, en la cual sucedieron algunas cosas dignas de memoria, aunque en tierra miserable y pobre; y basta haber sido Nuestro Señor servido de extender tan largamente en aquella provincia la predicación evangélica, con gran fruto y conversión de sus naturales, que es el principal intento de los Católicos Reyes nuestros señores.\n\nA Vuestra Excelencia humildemente suplico se digne de recibir y aceptar este pobre servicio, como fruta primera de tierra tan inculta y estéril, y falta de educación y disciplina; no mirando la bajeza de sus quilates, sino la alta fineza de la voluntad con que es ofrecida, para ser amparado debajo del soberano nombre de Vuestra Excelencia, a quien la Majestad Divina guarde con la felicidad que merece, y yo su menor vasallo deseo.\n\nQue es fecha en la ciudad de la Plata, provincia de las Charcas, en 25 de julio de 1612.\n\nRui Díaz de Guzmán.\n\n\t\n\n\t\n\n\n\n\n\n\t\n\n\n",
  id: 1
});
index.addDoc({
  section: "Paratextos",
  subtitle: "página v",
  chapter: "Prólogo",
  layout: "textoporpagina",
  content: "\n\t\n\n Prólogo y argumento al benigno lector\n\nNo sin falta de justa consideración, discreto lector, me moví a un intento tan ajeno de mi profesión, que es militar, tomando la pluma para escribir estos anales del descubrimiento, población y conquista de las provincias del Río de la Plata, donde en diversas armadas pasaron más de cuatro mil españoles, y entre ellos muchos nobles y personas de buena calidad, todos los cuales acabaron sus vidas en aquellas tierras, con las mayores miserias, hambres y guerras, de cuantas se han padecido en las Indias; no quedando de ellos más memoria que una fama común y confusa de su lamentable tradición, sin que hasta ahora haya habido quien por sus escritos nos dejase alguna noticia de las cosas sucedidas en 82 años, que hace comenzó esta conquista. \n\nDe que recibí tan afectuoso sentimiento, como era razón, por aquella obligación que cada uno debe a su misma patria, que luego me dispuse a inquirir los sucesos de más momento que me fue posible, tomando relación de algunos antiguos conquistadores, y personas de crédito, con otras de que fui testigo, hallándome en ellas, en continuación de lo que mis padres y abuelos hicieron en acrecentamiento de la Real Corona. Con que vine a recopilar este libro, tan corto y humilde, cual lo es mi entendimiento y bajo estilo; solo con celo de natural amor, y de que el tiempo no consumiese la memoria de aquellos que con tanta fortaleza fueron merecedores de ella, dejando su propia quietud y patria por conseguir empresas tan dificultosas. \n\nEn todo he procurado satisfacer esta deuda con la narración más fidedigna que me fue posible: por lo cual suplico humildemente a todos los que la leyeren, reciban mi buena intención, y suplan con discreción las muchas faltas que en ella se ofrecieren.\n\n\t\n\n\t\n\n\n\n\n\n\t\n\n\n",
  id: 2
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 1",
  chapter: "Capítulo I",
  layout: "textoporpagina",
  content: "\n\t\n\n Libro I \n\n\nDel descubrimiento y descripción de las provincias del Río de la Plata, desde el año de 1512 que lo descubrió Juan Díaz de Solís, hasta que por muerte del general Juan de Oyolas, quedó con la superior gobernación el capitán Domingo Martínez de Irala.\n\n\n\nCapítulo I\n\n¿Quién fue el primer descubridor de estas provincias del Río de la Plata? \n\n\nDespués que el Adelantado Pedro de Vera, mi rebisabuelo, por orden de los Reyes Católicos don Fernando y doña Isabel, conquistó las islas de la Gran Canaria, que antiguamente se dijeron Fortunadas, luego el Rey de Portugal mandó poblar las islas de Cabo Verde, que están de aquel cabo de la equinoccial, y cursar el comercio de las minas de Guinea; y por el consiguiente, el año de 1493 salió de Lisboa un capitán llamado Américo Vespucio, por orden del mismo Rey don Juan, a hacer navegación al occidente, al mismo tiempo que Cristóbal Colón volvió a España del descubrimiento de las Indias.\n\nEste capitán Américo, llegó a Cabo Verde, y continuando su jornada, pasó la equinoccial de este cabo del Polo Antártico hacia el Oeste y Mediodía; de manera que llegó a reconocer la tierra y costa del Brasil junto al Cabo de San Agustín, que está ocho grados de la parte de la línea. De donde, corriendo aquella costa, descubrió muchos puertos y ríos caudalosos, y toda ella muy poblada de gentes caribes y carniceras. Los más septentrionales se llaman Tobaiaras y Tamoios; los australes se dicen Tupinambás y Tupinás: son muy belicosos, y hablan todos casi una lengua, aunque con alguna diferencia: andan todos desnudos, en especial los varones, así por el calor de la tierra, como por ser antigua costumbre de ellos. \n\nY como de este descubrimiento naciese entre los Reyes de Castilla\n\t\n\n\t\n\n\n\n\n\n\t\n\n\n",
  id: 3
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 2",
  chapter: "Capítulo I",
  layout: "textoporpagina",
  content: "\n\t\n\nReyes de Castilla y de Portugal cierta diferencia y controversia, el Papa Alejandro Sexto hizo nueva división, para que cada uno de los Reyes continuase sus navegaciones y conquista: los cuales aprobaron la dicha concesión en Tordesillas, en 7 días del mes de junio de 1494, y con esta demarcación los portugueses pusieron su padrón y término en la Isla de Santa Catalina, plantando allí una columna de mármol con las quinas y armas de su rey, que están en 28 grados poco más de la equinoccial, distante cien leguas del Río de la Plata para el Brasil. Y así comenzaron los dichos portugueses a cruzar esta costa, por haber en aquella tierra mucho palo del Brasil, y malagüeta, y algunas esmeraldas que hallaron entre los indios. De donde llevaron para Portugal mucha plumería de diversos colores, papagayos y monos diferentes de los de África; demás de ser tierra muy fértil y saludable, de buenos y seguros puertos. \n\nQuiso el Rey don Manuel dar orden que se poblase, y así el año de 1503 dio y repartió estas costas a ciertos caballeros, concediéndoles la propiedad y capitanía de ellas; como fue la que le cupo a Martín Alfonso de Sosa, que es la que hoy llaman San Vicente, la cual pobló el año de 506. Y repartiéndose lo demás a otros caballeros, hasta dar vuelta a la otra parte del Cabo de San Agustín, se le dio y cupo por suerte a un caballero llamado Alfonso de Albuquerque, donde pobló la villa de Olinda, que es la que hoy llaman Pernambuco, por estar sitiada de un brazo de mar que allí hace, que los naturales llaman Paranambú, de donde se le dio esta nominación. Está de la equinoccial ocho grados, el más populoso y rico lugar de todo el Brasil: comercio y contratación de muchos reinos y provincias, así de naturales como de extranjeros. \n\nDespués de lo cual, el año de 1512 salió de Castilla Juan Díaz de Solís, vecino de la villa de Lebrija, para las Indias Occidentales: este era piloto mayor del Rey, y con su licencia, aunque a su propia costa, siguió esta navegación, que en aquel tiempo llamaban de los Pinzones, por dos hermanos que fueron compañeros de Cristóbal Colón en el descubrimiento de las Indias. Y continuando su derrota llegó al Cabo de San Agustín; y costeando por la vía meridional, vino a navegar 700 leguas, hasta ponerse en 40 grados, y retrocediendo a mano derecha descubrió la boca de este gran Río de la Plata, a quien los naturales llaman Paraná guazú, que quiere decir río como mar, a diferencia de otro de este nombre Paraná, que así este lo es de forma, que es uno de los más caudalosos del mundo.\nPor el cual Juan Díaz de Solís entró algunas jornadas, hasta \n\n\t\n\n\t\n\t  \n\t\n\n\n\n",
  id: 4
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 3",
  chapter: "Capítulo I",
  layout: "textoporpagina",
  content: "\n\t\n\t\t\ntomar puerto en su territorio, donde pareciéndole muy bien, puso muchas cruces, como quien tomaba posesión en los arenales, que en aquella tierra son muy grandes; y teniendo comunicación con los naturales, le recibieron con buen acogimiento, admirándose de ver gente tan nueva y extraña. Y al cabo de pocos días sobreviniéndole una tormenta, por no haber acertado a tomar puerto conveniente, salió derrotado al ancho mar, y se volvió a España con la relación de su jornada, llevando de camino mucho brasil, y otras cosas de aquella costa de que fue cargado.\n\nEl año de 1519 Hernando de Magallanes, por orden de Su Majestad, salió a descubrir el estrecho, que de su nombre se dice de Magallanes, para entrar en el mar del Sud en busca de las Islas Malucas: ofreciéndose este eminente piloto, de nación portugués, a descubrir diferente camino del que los portugueses habían hallado, que fuese más breve y fácil; y armando cinco navíos a costa de Su Majestad, metió en ellos 200 soldados de mucho valor, y partió de San Lúcar en 20 días del mes de septiembre. Y llegando a Cabo Verde, atravesó con buen viaje el Cabo de San Agustín, entre el Poniente y Sur, donde estuvieron muchos días, comiendo él y sus soldados cañas de azúcar y unos animales como vacas, que llaman antas, aunque no tienen cuernos.\n\nDe aquí partió el siguiente año, último de marzo, para el mediodía, y llegó a una bahía que está en 40 grados, haciendo allí su invernada. Y reconocido el Río de la Plata, fueron costeando lo que dista para el estrecho hasta 50 grados, donde saltando siete arcabuceros a tierra, hallaron unos gigantes de monstruosa magnitud, y trayendo consigo tres de ellos, los llevaron a las naos, de donde se les huyeron los dos. Y metiendo el uno en la capitana, fue bien tratado de Magallanes, asentando con él algunas cosas, aunque con rostro triste: tuvo temor de verse en un espejo. Y por ver las fuerzas que tenía, le hicieron que tomase a cuestas una pipa de agua, el cual se la llevó como si fuera una botija perulera. Y queriendo huirse, cargaron de él ocho o diez soldados, y tuvieron bien que hacer para atarlo; de lo cual se disgustó tanto que no quiso comer, y de puro coraje murió. Tenía de altura trece pies, y algunos dicen quince. \n\nDe aquí pasó adelante Magallanes a tomar el estrecho, haciendo aquella navegación tan peregrina en que perdió la vida en las Malucas, quedando en su lugar Juan Sebastián Cano, natural de Guetaria, el cual anduvo, según todos dicen 14.000 leguas en la nao Victoria: de donde se le dio un globo por armas, en que tenía puestos los pies, con una letra que decía: primus circumdedisti me; y no pudiéndole\n\n\t\n\n\t\n\t  \n\t\n\n\n",
  id: 5
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 4",
  chapter: "Capítulo II",
  layout: "textoporpagina",
  content: "\n\t\nseguir en esta larga jornada Álvaro de Mezquita, dio vuelta del mar del Norte para España, donde llegado dio noticia de lo que hasta allí se había descubierto y navegado.\n\nPor manera que de lo dicho se infiere, haber sido Américo Vespucio el primero que descubrió la costa del Brasil, de quien le quedó a esta cuarta parte del mundo su nominación; Solís, el que halló la boca del Río de la Plata, y el primero que navegó y entró por él; y Magallanes el primer descubridor del Estrecho, que costeó lo que hay desde este Río de la Plata hasta 56 grados de esta tierra y sus comarcas.\n\n\n\nCapítulo II\n\nDe la descripción del Río de la Plata, comenzando de la costa del mar\n\n\nHabiendo de tratar las cosas susodichas en este libro, en el descubrimiento y población de las provincias del Río de la Plata, no es fuera de propósito describirlas con sus partes y calidades, y lo que contienen en latitud y longitud, con los caudalosos ríos que se reducen en el principal, y la multitud de indios naturales de diversas naciones, costumbres y lenguajes, que en sus términos incluyen. \n\nPor lo cual es de saber que esta gobernación es una de las mayores que su Majestad tiene y posee en las Indias, porque demás de habérsele dado de costa al mar Océano 400 leguas de latitud, corre de largo más de 800 hasta los confines de la gobernación de Serpa y Silva; por medio de la cual corre este Río al Océano, donde sale con tan gran anchura, que tiene más de 85 leguas de boca, haciendo un cabo de cada parte. El que está a la del Sur, mano izquierda como por él entramos, se llama Cabo Blanco; y el otro que es a la del Norte a mano derecha, se dice de Santa María, junto a las Islas de los Castillos, que son unos médanos de arena, que de muchas leguas parecen del mar. Está este Cabo en 35 grados poco más, y el otro en 37, del cual para el Estrecho de Magallanes hay 18 grados. \n\nCorre esta gobernación a esta parte, según su Majestad le concede, 200 leguas: es toda aquella costa muy rasa, y falta de leña, de pocos puertos y ríos, salvo uno que llaman del Inglés, a la primera vuelta del Cabo; y otro muy adelante que llaman la Bahía sin Fondo, que está de esta otra parte de un gran río, que los de Buenos Aires descubrieron por tierra el año de 605 saliendo en busca de \n\n\t\n\n\t\n\t  \n\t\n\n\n",
  id: 6
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 5",
  chapter: "Capítulo II",
  layout: "textoporpagina",
  content: "\n\t\n\nla noticia que se dice de los Césares; sin que por aquella parte descubriesen cosa de consideración: aunque se ha entendido haberla más arriba a la Cordillera que va de Chile para el estrecho, y no a la costa del mar por donde fueron descubriendo. Y más adelante el de los Gigantes, hasta el de Santa Úrsula que está en 53 grados hasta el estrecho. Y vuelto a este otro Cabo para el Brasil, hay otras 200 leguas, poco menos a la cuenta, hasta la Cananea, de donde el Adelantado Álvaro Núñez Cabeza de Vaca puso sus armas por límite y término de su gobierno. La primera parte de esta costa, que contiene con el Río de la Plata, es llana y desabrigada hasta la isla de Santa Catalina, con dos o tres puertos para navíos pequeños. El primero es junto a los Castillos; el segundo es el Río Grande, que dista 60 leguas del de la Plata; este tiene dificultad en la entrada, por la grande corriente con que sale al mar, frontero de la isla pequeña que le encubre la boca, y entrado dentro es seguro y anchuroso, y se extiende como lago. En sus riberas por una y otra parte están poblados más de 20000 indios guaranís, que los de aquella tierra llaman Arachanes; no porque en las costumbres y lenguaje se diferencien de los demás de esta nación, sino porque traen el cabello revuelto y encrespado para arriba. Es gente muy dispuesta y corpulenta, y tienen guerra ordinaria con los indios Charrúas del Río de la Plata, y con otros de tierra adentro, que llaman Guayanás, aunque este nombre dan a todos los que no son guaranís, puesto que no tengan otros propios. Está este puerto y río en 32 grados, y corriendo la costa arriba, hay algunos pueblos de indios de esta misma nación. Es toda ella de muchos pastos para ganados mayores y menores, y por la falda de una cordillera y no muy distante de la costa que viene del Brasil, se dan cañas de azúcar y algodonales, de que se visten y aprovechan. Es cosa cierta haber en aquella tierra oro y plata, por lo que han visto algunos portugueses que han estado entre los indios, y por lo que se ha descubierto de minerales en aquel mismo término a la parte de San Vicente, donde don Francisco de Sosa está poblado. De este río, 40 leguas más adelante, está otro puerto, llamado la Laguna de los Patos, que tiene a la entrada una barra dificultosa: es de buen cielo y temple, muy fértil de mantenimientos, y muy cómoda para hacer ingenios de azúcar. Dista de la equinoccial 28 y medio grados: hay en este asiento y comarca más de 10000 indios Guaranís, tratables y amigos de españoles.\n\t\n\n\t\n\t  \n\t\n\n\n",
  id: 7
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 6",
  chapter: "Capítulo III",
  layout: "textoporpagina",
  content: "\n    \n\nDe aquí al puerto de Don Rodrigo habrá cuatro leguas, que es acomodado para el comercio de esta gente; y seis leguas más adelante está la Isla de Santa Catalina, uno de los mejores puertos de aquella costa: porque entre la isla y tierra firme hace algunos senos y bahías muy grandes, capaces de tener seguros muchos navíos muy gruesos: hace dos bocas, una al sudoeste, y otra al nordeste. Fue esta isla muy poblada de indios guaranís, y en este tiempo está desierta, porque se han ido los naturales de tierra firme, y dejando las costas se han metido entre los campos y pinales de aquella tierra. Tiene la isla más de siete leguas de largo, y más de cuatro de ancho; toda ella de grandes bosques y montañas, de muchas y muy buenas aguas, y muy caudalosas para ingenios de azúcar. Desde allá adelante está toda la costa áspera y montuosa, de grandes árboles, y muchas frutas de la tierra, y a cada cuatro o cinco leguas un río y puerto acomodado para navíos, en especial el de San Francisco, que es tan fondable que pueden surgir en él con gran seguro muy gruesos navíos, y tocar con los espolones en tierra. De allí a la Cananea hay 32 leguas, a donde caen las barras del Paraguay, y la de Arapia, con otros puertos y ríos. El de la Cananea está poblado de indios caribes del Brasil: tiene un río caudaloso que sale al mar, con un puerto razonable en la boca, con tres islas pequeñas de frente, de donde hay 30 leguas a San Vicente. Está toda esta costa llena de mucha pesquería y caza, así de jabalíes, puercos monteses, antas, venados, y otros diversos animales; muchos monos, papagayos, aves de tierra y agua. Hállanse, en muchas partes de esta costa, perlas, gruesas y menudas, en conchas y ostiones en cantidad, y mucho ámbar que la mar echa en la costa, el cual comen las aves y animales. Fue antiguamente muy poblada de naturales, los cuales, con las guerras que unos con otros tenían, se destruyeron; y otros, dejando sus tierras, se fueron a meter por aquellos ríos, hasta salir a lo alto, donde el día de hoy están poblados en aquellos campos que corren y confinan con el Río de la Plata, que llaman de Guayra.\n\n\n\nCapítulo III\n\nDescripción de lo que contiene dentro de sí este territorio\n\n\nEn el capítulo pasado comencé a describir lo que en el término y costa de aquella gobernación se contiene: en este lo habré de hacer,\n\n    \n\n    \n      \n    \n\n",
  id: 8
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 7",
  chapter: "Capítulo III",
  layout: "textoporpagina",
  content: "\n    \n\nlo más breve que me sea posible, de lo que hay a una y otra parte del Río de la Plata, hasta el mediterráneo, para lo cual es de suponer que en este territorio hay muchas provincias y poblaciones de indios de diversas naciones, por medio de las cuales corren muy caudalosos ríos, que todos vienen a parar, como en madre principal, a este de la Plata, que por ser tan grande, le llaman los naturales guaranís Paraná Guazú, como tengo dicho. Y así tomaré por margen de esta descripción el mismo Río de la Plata, comenzando primero de la mar por la mano derecha, como por él entramos, que es el Cabo de Santa María, del cual a una isla y puerto que llaman de Maldonado, hay diez leguas, todo raso, dejando a vista dentro del mar la de los Lobos. Esta de Maldonado es buen puerto, y tiene en tierra firme una laguna de mucha pesquería: corren toda esta isla los indios Charrúas de aquella costa, que es gente muy dispuesta y crecida, la cual no se sustenta de otra cosa sino de caza y pescado. Son muy osados en acometer, y crueles en el pelear, y después muy piadosos y humanos con los cautivos. Tiene fácil entrada, por cuya causa no tendría seguridad, siendo acometida por mar. Más adelante está Montevideo, llamado así de los portugueses; donde hay un puerto muy acomodado para una población, porque tiene extremadas tierras de pan y pasto para ganados, de mucha caza de gamos, perdices y avestruces. Lleva, no muy distante de la costa, una cordillera que viene bojeando del Brasil, y apartándose de ella se mete la tierra adentro, cortando la mayor parte de esta gobernación, y estendiéndose hacia el norte, se entiende que vuelve a cerrar a la misma costa abajo de la bahía. De aquí a la isla de San Gabriel hay veinte leguas, dejando en medio el puerto de Santa Lucía. Esta isla es muy pequeña y de mucha arboleda, y está de tierra firme poco más de dos leguas, donde hay un puerto razonable, pero no tiene el abrigo necesario para los navíos que allí aportan. En este paraje desemboca el río muy caudaloso del Uruguay, de que tengo hecha mención, el cual tiene allí de boca cerca de tres leguas, y dentro de él un pequeño río que llaman de San Juan, junto a otro de San Salvador, puerto muy acomodado. Y diez leguas por él adelante, uno que llaman Río Negro, del cual arriba, a una y otra mano, entran infinitos, en especial uno caudaloso que tiene por nombre Pepirí, donde es fama muy notoria haber mucha gente que poseen oro en cantidad, que trae este río entre sus menudas arenas. \n\n    \n\n    \n      \n    \n\n",
  id: 9
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 8",
  chapter: "Capítulo III",
  layout: "textoporpagina",
  content: "\n    \n\nEste río del Uruguay tiene su nacimiento en las espaldas de la Isla de Santa Catalina, y corriendo hacia el mediodía se aparta de la Laguna de los Patos para el occidente por muchas naciones y tierras pobladas, que llaman Guayanas, Pates, Chovas, Chovaras, que son casi todas de una lengua, aunque hasta ahora no han visto españoles, ni entrado en sus tierras más de las relaciones que de los Guaranís se han tomado. Y corriendo muchas leguas, viene este río a pasar por una población muy grande de indios guaranís, que llaman Tapes, que quiere decir ciudad: esta es una provincia de las mejores y más pobladas de este Gobierno. La cual dejando a parte iré por el de la Plata arriba, ciento y cincuenta leguas a la misma mano, por muchas naciones y pueblos de diferentes costumbres y lenguajes, que la mayor parte no son labradores hasta las Siete Corrientes, donde se juntan dos ríos caudalosos, el uno llamado Paraguay, que viene de la siniestra, el otro Paraná que sale de la derecha. Este es el principal que bebe todos los ríos que salen de la parte del Brasil: tiene de ancho, por todo lo más de su navegación, una legua, en parte dos. Baja al pie de 300 leguas hasta juntarse con este del Paraguay, en cuya boca está fundada una ciudad que llaman de San Juan de Vera, que está en altura de 28 grados; de la cual y su fundación y conquista en su lugar haremos mención. Luego como por este río se entra, es apacible para navegar, y antes de cuarenta leguas se descubren muchos bajíos y arrecifes, donde hay una laguna a mano izquierda del río que llaman de Santa Ana, muy poblada, hasta donde entra otro muy caudaloso a la misma mano que llaman Iguazú, que significa Río Grande. Viene de las espaldas de la Cananea, y corre doscientas leguas por gran suma de naciones de indios. Los primeros y más altos son todos Guaranís, y bojeando por el sur entra por los pueblos de los que llaman Chovas, Muños y Chiquis: tierra fría de grandes piñales, hasta entrar en este del Paraná, por el cual subiendo treinta leguas está aquel extraño salto, que entiendo ser la más maravillosa obra de naturaleza que hay. Porque la furia y velocidad con que cae todo el cuerpo de agua de este río, son más de 200 estados por once canales, haciendo todas ellas un humo espesísimo en la región del aire de los vapores que causan. De aquí abajo, es imposible poderse navegar con tantas vertientes y rebatientes que hace, con grandes remolinos y borbollones que se levantan como nevados cerros. Cae toda el agua de este salto en una peña, como caja guarnecida\n\n    \n\n    \n      \n    \n\n",
  id: 10
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 9",
  chapter: "Capítulo III",
  layout: "textoporpagina",
  content: "\n    \n\nguarnecida de duras rocas y peñas, en que estrecha todo el río en un tiro de flecha, teniendo por lo alto del salto más de dos leguas de ancho, de donde se reparte en estas canales, que no hay ojos ni cabeza humana que le pueda mirar sin desvanecerse y perder la vista. Óyese el ruido de este salto ocho leguas, y se ve el humo y vapor de estas caídas más de seis, como una nube blanquizca. Tres leguas arriba está fundada una ciudad que llaman Puerto Real, en la boca de un río que se dice Piquirí: está en el mismo Trópico de Capricornio, por cuya causa es lugar enfermizo, y lo es todo lo más del río y provincia, que comúnmente se llama de Guayra, tomado del nombre de un cacique de aquella tierra. Doce leguas adelante entran dos ríos; el uno a mano derecha, que se dice Ubay; y el otro a la izquierda llamado Muñey, que baja de la provincia de Jerez, de la cual, y de su población, a su tiempo se hará mención. El otro viene de hacia el Este, donde está fundada, 50 leguas por adentro, la villa del Espíritu Santo, en cuya jurisdicción y comarca hay más de 200 mil indios guaranís, poblados así por ríos y montañas, como en los campos y piñales, que corren hasta San Pablo, población del Brasil. Y corriendo el río arriba del Paraná, hay otro muy caudaloso, que viene de hacia el Brasil llamado Paraná-Pané, en el cual entran otros muchos, que todos ellos son muy poblados, en especial el que dicen Atibajiba, que contiene más de 100 mil indios poblados de esta nación. Nace de una cordillera que llaman Sobaré, que dista poco de San Pablo, juntándose con otros se hace caudaloso; y rodea el cerro de Nuestra Señora de Monserrate que tiene de circuito cinco leguas. Por cuya falda sacan los portugueses de aquella costa mucho oro rico de 23 quilates; y en lo alto de él se hallan muchas vetas de plata, cerca del cual don Francisco de Sosa, caballero de esta nación, fundó un pueblo que todavía permanece, y se va continuando su efecto y beneficio de las minas de oro y plata. Y volviendo a lo principal de este río, entra otro en él muy grande, aunque de muchos arrecifes y saltos, que los naturales llaman Ayembí. Este nace de las espaldas de Cabo Frío, y pasa por la villa de San Pablo, en cuya ribera está poblada. No tiene indios ningunos, porque los que había fueron echados y destruidos de los portugueses, por una rebelión y alzamiento que contra ellos intentaron, poniendo cerco a esta villa para la asolar y destruir, en lo que no salieron con su intento. El día de hoy se comunican por este río\n\n    \n\n    \n      \n    \n\n",
  id: 11
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 10",
  chapter: "Capítulo IV",
  layout: "textoporpagina",
  content: "\n    \n\nlos portugueses de la costa con los castellanos de esta provincia de Guayra. Más adelante por el Paraná entran otros muchos a una y otra mano, en especial el Paranaiba-buy, y otro que dicen sale de la laguna del Dorado, que viene de la parte del Norte, de donde han entendido algunos portugueses que cae aquella laguna tan mentada, que los moradores de ella poseen muchas riquezas. Del cual adelante viene este poderoso río por grandes poblaciones de naturales hasta donde se disminuye en muchos brazos y fuentes, de que vienen a tomar todo su caudal, según hasta donde lo tengo navegado. El cual dicen los portugueses, tiene su nacimiento en el paraje y altura de la Bahía, cabeza de las ciudades del Brasil.\n\n\n\nCapítulo IV\n\nEn que se acaba la descripción del propósito pasado.\n\n\nBien se ha entendido, como tengo declarado en el capítulo pasado, que entrando por el Río de la Plata a mano derecha caen los ríos y provincias, de que tengo hecha relación. En esto diré lo que contiene sobre mano izquierda a la parte del sur, tomando la costa del Río de la Plata arriba, en esta forma. Desde el Cabo Blanco para Buenos Aires, hay tierra muy rasa y desabrigada, de malos puertos, falta de leña, de pocos ríos, salvo uno que está 20 leguas adelante, que llaman de Tubichamiri, nombre de un cacique de aquella tierra. Este río baja de la Cordillera de Chile, y es el que llaman, el Desaguadero de Mendoza, que es una ciudad de aquel reino que cae a esta parte de la gran Cordillera, en los llanos que van continuando a Buenos Aires, a donde hay desde la boca de este río otras 20 leguas. Es toda aquella tierra muy llana; los campos tan anchurosos y dilatados, que no hay en todos ellos un árbol: es de poca agua, y de mucha caza de venados, avestruces y gran suma de perdices, aunque de pocos naturales: los que hay son belicosos, grandes corredores y alentados, que llaman Querandís. No son labradores, y se sustentan de sola caza y pesca; y así no tienen pueblos fundados ni lugares ciertos, más de cuanto les ofrece la comodidad de andar de ordinario esquilmando los campos. Estos corren desde Cabo Blanco, hasta el Río de las Conchas, que dista de Buenos Aires cinco leguas arriba, y toma más de otras\n\n    \n\n    \n      \n    \n\n",
  id: 12
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 11",
  chapter: "Capítulo IV",
  layout: "textoporpagina",
  content: "\n    \n\nsesenta la tierra adentro hasta la Cordillera, que va desde la mar bojeando hacia al Norte, entrando por la gobernación de Tucumán. Estos indios fueron repartidos, con los demás de la comarca, a los vecinos de la Trinidad, puerto de Buenos Aires. Está situada en 36 grados abajo de la Punta Gorda, sobre el propio Río de la Plata, el cual tiene el puerto muy desabrigado, que corren mucho riesgo los navíos estando surtos en donde llaman el Paso, por estar algo distante de tierra. Mas la Divina Providencia proveyó de un riachuelo, que tiene la ciudad por la parte de abajo como una milla, tan acomodado y seguro, que metidos dentro de él los navíos, no siendo muy grandes, pueden estar sin amarrar con tanta seguridad, como si estuvieran en una caja. Este puerto fue poblado antiguamente de los conquistadores, y por causas forzosas que se ofrecieron, la vinieron a despoblar, donde parece que dejaron en aquella tierra cinco yeguas, y siete caballos; de los cuales el día de hoy han venido a tanto multiplico, en menos de 70 años, que no se puede numerar; porque son tantos los caballos e yeguas, que parecen grandes montañas, y tienen ocupado desde el Cabo Blanco hasta el Fuerte de Gaboto, que son más de 80 leguas, y llegan adentro hasta la Cordillera. De esta ciudad arriba hay algunas naciones de indios; y aunque tienen diferentes lenguas, son de la misma manera y costumbres que los Querandis: enemigos mortales de españoles, y todas las veces que pueden ejecutar sus traiciones, no lo dejan de hacer. Otros hay más arriba, que llaman Timbús, y Caracarás, 40 leguas de Buenos Aires en Buena Esperanza, que son más afables, y de mejor trato y costumbres, que los de abajo. Son labradores, y tienen sus pueblos fundados sobre la costa del río. Tienen las narices horadadas, donde sientan por gala en cada parte una piedra azul o verde. Son muy ingeniosos y hábiles, y aprenden bien la lengua española: fueron más de 8000 indios antiguamente, y ahora han quedado muy pocos. Y dejando atrás el río de Luján y el de los Arrecifes, hasta el Fuerte de Gaboto, lugar nombrado por los muchos españoles que allí fueron muertos; y repasando adelante para la ciudad de Santa Fé, de donde hay allá otras 40 leguas con algunas poblaciones de indios que llaman Gualachos; por bajo de esta ciudad 12 leguas entra un río que llaman el Salado; es caudaloso, el cual atraviesa toda la gobernación del Tucumán, y nace de las Cordilleras de Salta y Calchaquí. Baja a las juntas de Madrid y Esteco, y pasa 12 leguas de Santiago del Estero, regando muchas tierras y pueblos de indios, que llaman Tonocotes\n\n    \n\n    \n      \n    \n\n",
  id: 13
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 12",
  chapter: "Capítulo IV",
  layout: "textoporpagina",
  content: "\n    \n\nTonocotes y Juris, y otras naciones que de aquel gobierno penden, hasta que viene a salir donde desagua en este de la Plata. Tiene este distrito muchos indios, que fueron repartidos a los pobladores de esta ciudad, la cual está fundada en 32 grados Este-oeste; con la de Córdoba. Los más indios de esta jurisdicción no son labradores, y tienen por pan cierto género de barro de que hacen unos bollos, y métenlos en el rescoldo: se cuecen, y luego para comerlos los empapan en aceite de pescado, y de esta manera los comen, y no les hace daño alguno. Todas las veces que se les muere un pariente, se cortan una coyuntura del dedo de la mano, de manera que muchos de ellos están sin dedos por la cantidad de deudos que se les han muerto. De aquí adelante salen otros ríos, poblados de indios pescadores, hasta una laguna que llaman de las Perlas, por haberlas allí finas, y de buen oriente, por ser de agua dulce, aunque hasta ahora no se ha dado en pescarlas, más de las que los indios traen a los españoles; aunque por ser todas cocidas pierden mucho de su buen lustre, oriente y estima. De aquí a la ciudad de Vera hay seis leguas, de la cual en el capítulo pasado hice mención; donde tiene frontero de sí el Puerto de la Concepción, ciudad del río Bermejo, que dista del río 44 leguas hacia el Poniente. Tiene esta ciudad en su comarca muchas naciones de indios, que llaman comúnmente, frentones, aunque cada nación tiene su nombre propio. Están divididas en 14 lenguas distintas: viven entre lagunas, por ser la tierra toda anegadiza y llana, por medio de la cual corre el río  Bermejo que tiene su nacimiento en los Chichas del Perú, juntándose en uno, el río de Tarija, el de Toropalca, y el de San Juan, con el de Humaguaca y Jujui: en cuyo valle está fundada la ciudad de San Salvador en la Provincia del Tucumán. Viene a salir a los llanos, y pasa por muchas naciones de indios bárbaros, dejando a la parte del Norte en las faldas de la Cordillera del Perú, los indios Chiriguanos, que son los mismos que en el Río de la Plata llamamos Guaranís, que toman las fronteras de los corregimientos de Mizque, Tomina, Paspaya y Tarija. Esta gente es averiguado, ser advenediza de la Provincia del Río de la Plata, como en su lugar haremos mención; de donde venidos, señorearon esta tierra, como hoy día la poseen, destruyendo muy gran parte de ella, excepto la que confina a la gobernación del Tucumán, por ser montuosa y cerrada, y los indios que por allá viven, belicosos, que son todos los más, frentones del distrito de la Concepción, la cual, como dije, está poblada sobre este río Bermejo;\n    \n\n    \n      \n    \n\n",
  id: 14
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 13",
  chapter: "Capítulo V",
  layout: "textoporpagina",
  content: "\n    \nDejándole aparte, siguiendo el Paraguay arriba a la misma mano, hay algunas naciones de gente muy bárbara que llaman Mahomas, Calchenas y Mogolas; y otros más arriba que se dicen Guaycurús, muy belicosos, los cuales no siembran, ni cogen ningún fruto, ni semilla, de que se puedan sustentar, sino de caza, y pesca. Estos Guaycurús dan continua pesadumbre a los vecinos de la Asumpción, que es la ciudad más antigua, y cabeza de aquel Gobierno, y con tener mucha gente de españoles e indios, con la comarca muy poblada, han sido poderosos para apretar esta República, de suerte que han despoblado más de 80 chacras y haciendas muy buenas de los vecinos, y muértoles mucha gente, como en el último libro se podrá ver. Abajo de esta ciudad cuatro leguas, entra de la parte del Poniente otro río, que llaman los de aquella tierra Araguay, y los Chiriguanos de la Cordillera le dicen Itica, y los indios del Perú, Pilcomayo. Nace de los Charcas, de entre las sierras que distan de Potosí, y Porco para Oruro, juntándose con él muchas fuentes sobre el río de Tarapaya, que es la ribera donde están fundados los ingenios de plata de la villa de Potosí. Y volviendo al Este de éste va a juntarse con el río Cachimayo, que es el de la ciudad de la Plata, y bojeando al mediodía hacia el valle de Oroncota, entrando por el corregimiento de Paspaya, dejando a la izquierda el de Tomina, cortando la gran cordillera general, sale a los llanos, donde va por muchas naciones de indios, los más de ellos labradores, aunque a los pueblos de la parte del Norte que comúnmente llaman de los Llanos del Manso, los han consumido los Chiriguanos. Y corriendo derecho al Este, viene a entrar a este del Paraguay, haciendo dos bocas por bajo de la frontera, que es distrito de la Asumpción cuatro leguas de ella, en cuya comarca hay muchos pueblos de indios Guaranís, donde los españoles antiguos tuvieron puerto, comunicación y amistad con ellos. Esta ciudad está fundada sobre el mismo río del Paraguay, en 26 grados de la equinoccial: es tierra fértil y de buen temperamento abundante de pesquería y caza, y mucha volatería de todo género de aves. Es sana en todo lo más del tiempo, excepto por los meses de marzo y abril que hay algunas calenturas y mal de ojos. Danse en esta algunos de los frutos de Castilla, y muchos de la tierra, en especial viñas y cañaverales de que tienen mucho aprovechamiento. Empadronáronse en la comarca de esta ciudad 24000 indios Guaranís, que fueron encomendados por el Gobernador Domingo Martínez de Irala, a los conquistadores antiguos: están poblando los naturales, y\n\n    \n\n    \n      \n    \n\n",
  id: 15
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 14",
  chapter: "Capítulo V",
  layout: "textoporpagina",
  content: "\n    \n\nencomiendas de este distrito a la misma mano, río arriba, hasta la provincia de Xerez, gozando de muchos ríos caudalosos que entran en este del Paraguay, como son Jejuí, Pané, y Picay. En esta distancia, a mano izquierda como vamos, hay otras naciones de indios que llaman Napabes y Payaguas, que navegan en canoas gran parte de aquel río hasta el puerto de San Fernando, donde comúnmente tienen su asiento, en una laguna que llaman de Juan de Oyólas, 120 leguas de la Asumpción. Y arriba de ella está el pasaje de Santa Cruz de la Sierra, gobernación distante, aunque dicha ciudad fue poblada por los conquistadores del Río de la Plata. Cuya provincia el primero que la descubrió fue Juan de Oyóla, y después la sojuzgó el capitán Domingo de Irala, el cual halló en aquella tierra mucha multitud de indios labradores en grandes pueblos, aunque el día de hoy todos los más son acabados y consumidos. Esta ciudad de Santa Cruz está con la de Jerez, este-oeste, 60 leguas del río, y la de Jerez 30 a mano derecha; la cual está ciento y tantas leguas de la ciudad de la Asumpción. Tiene su fundación sobre un río navegable y caudaloso, que llaman los naturales Obteteyú; está de la equinoccial 20 grados; tiene muy buenas tierras de pasto y sementeras. Está dividida en alto y bajo; hay en ambas muchas naciones de indios, y todos son labradores. Los que habitan en alto, se llaman Cutaguas y Curumias, todos de una costumbre y lengua, gente bien inclinada y no muy bárbara: no tienen ningún género de brebaje que les pueda emborrachar. Los de abajo tienen diversas lenguas, y están poblados entre ríos y lagunas; los cuales, demás de las cosechas de legumbres que cogen, tienen por cerca de las lagunas tanto arroz silvestre, que hacen muy grandes trojas y silos, y es gran sustento. Cógese en toda aquella provincia mucho algodón, que sin beneficio alguno se da en gran cantidad, y es tanta la miel de abejas silvestres que hay, que todos los montes y árboles tienen su colmenar y panales, de que sacan gran cantidad de cera, de la cual se aprovechan en las gobernaciones del Paraguay y Tucumán. Es asimismo abundante de pastos para todo género de ganados, y muy fértil de pan y vino, y de todas las legumbres y semillas de las Indias. Finalmente, es una provincia de mucha estima y de las más nobles y ricas de aquella gobernación; porque a la falda de una cordillera se han hallado minerales de oro con muchas muestras de metales de plata. De esta provincia, hacia el Este, se sabe haber pigmeos, que\n\n\n\n\n\n",
  id: 16
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 15",
  chapter: "Capítulo V",
  layout: "textoporpagina",
  content: "\n    \n\nhabitan debajo de tierra, y salen en abriendo los campos a sus empresas. Y a la parte del Norte van continuados muchos pueblos de naturales hasta la provincia de los Colorados, junto con los que llaman los Paretís, a los que descubrieron los de Santa Cruz de la Sierra, que está distante de Jerez ciento y tantas leguas; donde es cosa cierta haber gran multitud de naturales, divididos en 14 comarcas muy pobladas, así a la parte del Norte como a la del Este y mediodia, con fama de mucha riqueza.\n\n Y volviendo a proseguir el río del Paraguay arriba, desde el paraje de Santa Cruz hasta el puerto que llaman de los Reyes, hay algunos pueblos y naciones que navegan el río, hasta unos pueblos de indios llamados Orejones, los cuales viven dentro de una isla que hace este río, de más de diez leguas de largo, y dos y tres de ancho, que es una floresta amenísima, abundante de mil géneros de frutas silvestres, y entre ellas, uvas, peras, almendras y aceitunas. Tiénenla los indios toda ocupada de sementeras y chácaras, y todo el año siembran y cogen sin haber diferencia de invierno ni verano, siendo un perpetuo temple y calidad.\n\nSon los indios de aquella isla de buena voluntad, y amigos de españoles: llámanles Orejones, por tener las orejas horadadas, en donde tienen metidas ciertas ruedecillas de madera, o puntas de mates que ocupan todo el agujero. Viven en galpones redondos, no en forma de pueblo, sino cada parcialidad por sí: consérvanse unos con otros en mucha paz y amistad. Llamaron los antiguos a esta isla el Paraíso terrenal, por la abundancia y maravillosa calidad que tiene. \n\nDesde aquí a los JarayesPuede indicar al mismo tiempo la Laguna de los Xarajes (Gran Pantanal). hay 60 leguas, río arriba. Es una nación de más policía y razón de cuantas en aquella provincia se han descubierto; está poblada sobre el mismo río del Paraguay. Los de la parte de Jerez, se dicen Perabazanes; y los de Santa Cruz se llaman Maneses y todos se apellidan Jarayes. Hay pueblo de estos indios de 60 mil casas, porque cada indio vive en la suya con sus mujeres e hijos.\n\nTienen sujetas a su dominio otras naciones circunvecinas, hasta a los que llaman Tortugueses: son grandes labradores, y tienen todas las legumbres de las Indias; muchas gallinas y patos, y ciertos conejillos que crían dentro de sus casas. Obedecen a un cacique principal, aunque tienen otros muchos particulares, pues todos están sujetos al Manés, que así llaman a su Señor: viven en forma de República, donde son castigados de sus caciques los ladrones y adúlteros. Tienen\n\n\n\n\n  \n\n\n",
  id: 17
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 16",
  chapter: "Capítulo V",
  layout: "textoporpagina",
  content: "\n    \n\nTienen aparte las mujeres públicas que ganan por su cuerpo, porque no se mezclen con las honestas, aunque de allí salen muchas casadas, y no por eso son tenidas en menos. No son muy belicosos, aunque providentes y recatados, y por su buen gobierno, temidos y respetados de las demás naciones.\n\nHan sido siempre leales amigos de los españoles, tanto que, llegando a este puerto el capitán Domingo de Irala con toda su armada, fue de ellos bien recibido, y dieron huéspedes a cada soldado para que los proveyesen de lo necesario: y siéndole forzoso hacer su entrada de aquel paraje por tierra, les dejó en confianza todos los navíos, balsas y canoas que llevaba, velas, jarcias, áncoras, versos, y los demás pertrechos que no podían llevar por tierra; y al cabo de 14 meses que tardaron en dar vuelta de su jornada, no les faltó cosa ninguna de las que dejaron en su poder. Desea mucho esta gente emparentar con el español, y así les daban de buena voluntad sus hijas y hermanas, para que hubiesen de ellas generación. Hablan una lengua muy cortada y fácil de aprender, por manera que con facilidad serían atraídos a la conversión y conocimiento de Dios.\n\nDe esta provincia adelante hay otras poblaciones de gentes y naciones diferentes hasta el Calabrés, que es un cacique guaraní que dista como 60 leguas donde se juntan dos ríos, uno que viene de la parte del Este y otro del Poniente. De aquí adelante no se ha navegado, puesto que hasta, estos ríos han llegado bergantines y barcos; y por ser estos ríos pequeños y de poca agua, no han entrado por ellos españoles. Lo que de noticia se tiene es, que por aquella parte hay muchas naciones de indios que poseen oro y plata; en especial hacia el Norte, donde entienden cae aquella laguna que llaman del Dorado.\n\nTambién se ha sabido que hacia el Brasil hay ciertos pueblos de gente muy morena y belicosa, la cual se ha entendido ser negros retraídos de los portugueses de aquella costa, que se han mezclado con los indios de aquella tierra, la cual es muy dilatada hasta el Marañón, que coge en sí todas los ríos que nacen del reino del Perú desde el corregimiento de Tomina, de donde sale el río de San Marcos y se junta con el río grande que llaman de Chungurí, y luego cerca de los llanos del río de Parapití, y corriendo al Norte va para la ciudad de San Lorenzo, gobernación de Santa Cruz, a donde le llaman el Guapá, que quiere decir río que todo lo bebe. Y así, bajando por aquellos llanos, va recibiendo en sí todos los ríos que salen de las faldas y serranías del Perú, como son el de Pozona, Cochabamba, Chiquiago, y los del Cuzco y Chucuito, hasta ese otro cabo de Quito,\n\n    \n\n    \n      \n    \n    \n\n",
  id: 18
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 17",
  chapter: "Capítulo V",
  layout: "textoporpagina",
  content: "\n    \ny el nuevo reino, con que se viene a hacer el más caudaloso río de todas las Indias, que sale al mar del Norte en el primer grado de la equinoccial. Sin otro muy caudaloso que sale más al Brasil, y llaman de las Amazonas, como parece por la traza y descripción del mapa que aquí pongo en este lugar. Advirtiendo que no lleva la puntualidad de las graduaciones y partes que se le debían dar, porque mi intento no fue más que por él hacer una demostración de lo que contienen aquellas provincias y costas de mar y ríos, de que trato en el discurso de este presente libro, como en su descripción referida se contiene.Capítulo VDe una entrada que cuatro portugueses hicieron del Brasil por esta tierra, hasta los confines del Perú, etc.No me parece fuera de propósito decir ante todas cosas en este capítulo, de una jornada, que ciertos portugueses hicieron del Brasil para esta provincia del Río de la Plata, hasta los confines del Perú, y de lo demás que les sucedió, por ser eslabón de lo que se ha de tratar en este libro, sobre el descubrimiento y conquista que en ella hicieron nuestros españoles. Y es el caso, que el año de 1526 salieron de San Vicente cuatro portugueses por orden de Martín Alfonso de Sosa, señor de aquella capitanía, a que entrasen por aquella tierra adentro y descubriesen lo que había, llevando en su compañía algunos indios amigos, de aquella costa. El uno de estos cuatro portugueses se llamaba Alejos García, estimado en aquella costa por hombre práctico así en la lengua de los Carios, que son los Guaranís, como de los Tupis y Tamoyos. Caminando en sus jornadas, por el Serton adentro, con los demás compañeros, vinieron a salir al río del Paraná, y de él, atravesando la tierra por pueblos de indios Guaranís, llegaron al río del Paraguay, donde siendo recibidos y agasajados de los moradores de aquella provincia, convocaron toda la comarca, para que fuesen juntamente con ellos a la parte del poniente a descubrir y reconocer aquellas tierras, de donde traían muchas ropas de estima y cosas de metal, así para el uso de la guerra, como de la paz. Como gente codiciosa e inclinada a la guerra, se movieron con facilidad a ir con ellos, y juntos más de 2000 indios, hicieron jornada para el puerto que llaman de San Fernando, que es un alto promontorio que se hace sobre el río del Paraguay. Otros dicen que\n\n\n\n\n\n",
  id: 19
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 18",
  chapter: "Capítulo V",
  layout: "textoporpagina",
  content: "\n    \nentraron poco más arriba de la Asumpción por un río, que llaman Paray, y caminando por los llanos de aquella tierra, encontraron muchos pueblos de indios de diversas lenguas y naciones, con quienes tuvieron grandes encuentros, ganando con unos, y perdiendo con otros. Al cabo de muchas jornadas, llegaron a reconocer las cordilleras y serranías del Perú, y acercándose a ellas, entraron por la frontera de aquel reino, entre la distancia que ahora llaman Mizque y el término de Tomina. Y hallando algunas poblaciones de indios, vasallos del poderoso Inga, rey de todo aquel reino, dieron en ellos, y robando y matando cuanto encontraban, pasaron adelante más de cuarenta leguas, hasta cerca de los pueblos de Presto y Tarabuco, donde les salieron al encuentro gran multitud de indios charcas. Por lo cual dieron vuelta, retirándose con tan buen orden, que salieron de la tierra sin recibir daño ninguno, dejándola puesta en grande temor, y a toda la provincia de los Charcas en arma. Por cuya causa los Incas mandaron con gran cuidado fortificar todas aquellas fronteras, así de buenos fuertes, como de gruesos presidios; según se ve el día de hoy, que han quedado por aquella cordillera, que llaman del Cuzco-toro, que es la general que corre por este reino más de dos mil leguas. Salidos los portugueses a los llanos con toda su compañía, cargados de despojos de ropa, vestidos, y muchos vasos, manillas, y coronas de plata, de cobre, y otros metales, dieron la vuelta por otro más acomodado camino que hallaron, en el cual padecieron muchas necesidades de hambre y guerra, que tuvieron hasta llegar al Paraguay, y sus tierras y pueblos. De donde Alejos García se determinó a despachar al Brasil sus dos compañeros, a dar cuenta a Martín Alfonso de Sosa de lo que habían descubierto en aquella jornada, y donde habían entrado, con la muestra de los metales, y piezas de oro y plata que habían traído de aquellas partes; quedándose el García en aquella provincia del Paraguay, aguardando la correspondencia de lo que en esto se ordenase. Pasados algunos días, concertaron algunos indios de aquella tierra de matarle, y así lo pusieron en efecto (y estos fueron los que habían ido con él a la jornada). Una noche, estando descuidado, le acometieron, y le mataron a él y a sus compañeros, sin dejar más en vida que un niño, hijo de García, que por ser de poca edad no le mataron, al cual yo conocí, que se llamaba como su padre, Alejos García. Moviéronse los indios a hacer esto, por su mala inclinación\n\n\n\n\n\n",
  id: 20
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 19",
  chapter: "Capítulo V",
  layout: "textoporpagina",
  content: "\n    \nque es en ellos natural de hacer mal, sin tener estabilidad en el bien, ni amistad; dejándose llevar de la codicia, por robarles lo que tenían, como gente sin fe ni lealtad. Llegados para el Brasil los dos mensajeros, dieron relación de lo que habían descubierto, y de la mucha riqueza que habían visto en el poniente y confines de los Charcas, que hasta entonces no estaba aun descubierto de los españoles. A cuya fama se determinó salir del Brasil una tropa de sesenta soldados, cuyo capitán era un Jorge Sedeño.  Y así partieron de San Vicente en demanda de esta tierra, llevando consigo copia de indios amigos: y bajando en canoas por el río de Ayembí, salieron al Paraná, y bajando por él, llegaron sobre el Salto, donde tomando puerto, dejaron sus canoas atravesando hacia el poniente, llevando su derrota hacia el río del Paraguay, donde Alejos García había quedado. Lo cual, visto por los indios que habían sido cómplices en su muerte, convocaron los comarcanos a tomar las armas contra ellos para impedirles el paso; y dándoles muchos rebatos, pelearon con los portugueses en campo raso, donde mataron al Capitán Sedeño, con cuya muerte fueron constreñidos los soldados a retirarse con pérdida de muchos compañeros. Y tornando al pasaje del río Paraná, los indios de aquel territorio, con la misma malicia y traición que los otros, se ofrecieron a darles pasaje en sus canoas; para cuyo efecto las trajeron horadadas, con rumbos disimulados y embarrados, para que con facilidad fuesen rompidos. Y metiéndose en las canoas con los portugueses, en medio del río las abrieron y anegaron: donde con el peso de las armas los más se ahogaron, y algunos que cogieron vivos los mataron a flechazos, sin dejar ninguno a vida. Lo cual pudieron hacer con facilidad por ser grandes nadadores y criados en aquella navegación, y sin ningún embarazo que les impidiese, por ser gente desnuda. Con que fueron acabados todos los de esta jornada.  Después de lo cual los indios de la provincia del Paraguay se juntaron con sus caciques, y se determinaron a hacer una entrada y tornar a la parte donde Alejos García había hecho su jornada, y convocados muchos indios de la provincia, salieron por tercios y parcialidades a este efecto. Los de más abajo, que son los indios del Paraná, entraron por el río del Araguay, que es el que tengo dicho llamarse Pilcomayo, y estos son los fronterizos del corregimiento de Tarija. Los que estaban poblados donde hoy es la Asumpción, entraron\n\n\n\n\n\n",
  id: 21
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 20",
  chapter: "Capítulo V",
  layout: "textoporpagina",
  content: "\n    \nentraron por aquel río sobre el río del Paraguay, y Caaguazú; y los indios de río arriba Jeruquisaba y Carayazapera, entraron por San Fernando. Estos son los que están poblados en el del Guapay, veinte leguas de la ciudad de San Lorenzo, gobernación de Santa Cruz. Llegadas estas compañías a la falda de la sierra del Perú, cada una de ellas curó de fortificarse en lo más áspero de ellas; y de allí comenzaron a hacer cruda guerra a los naturales comarcanos, con tanta inhumanidad que no dejaban a vida persona ninguna, teniendo   por su sustento a los miserables que cautivaban. Con que vinieron a ser tan temidos de todas aquellas naciones, que muchos pueblos se les sujetaron sin ninguna violencia, con que vinieron a tener esclavos que les sirviesen, y muchas mujeres de quienes tuvieron generación: poblándose cada uno en la parte que mejor le pareció de aquellas fronteras, (que son los indios que hay llamamos Chiriguanos en el Perú, que, como digo, son procedidos de los Guaranís) de donde nunca más salieron, ora por la imposibilidad y gran riesgo del camino, ora por codicia de la tierra que hallaron acomodada a su condición y naturaleza, que es toda fértil, y de grandes y hermosos valles, que participan de más calor que frío, y de caudalosos ríos que salen de la provincia de los Charcas, la cual tienen por vecina. Asentaron en aquella tierra, haciendo muchas entradas en toda ella, destruyendo todos los llanos, así hacia el Septentrión, como al mediodía, y este, destruyendo más de 100 mil indios. Y puesto que a sus principios en sus fiestas y borracheras los comían, de muchos años a esta parte no lo hacen, más los venden a los españoles que entran del Perú entre ellos, a trueque de rescates que les dan, teniendo por más útil el venderlos por lo que han menester, que el comerlos. Y es tanta la codicia en que han entrado por el interés, que no hay año ninguno que no salgan a esta guerra por todos aquellos llanos, con gran trabajo y riesgo de las vidas, por hacer presa para el efecto de venderlos. De que hay indios tan ricos, que demás de la ropa y vestidos de paño y seda, tienen muchas vajillas de plata fina, e indios hay que tienen a 500 marcos de vajilla, sin gran número de caballos ensillados y enfrenados y muy buenos jaeces, espadas, y lanzas, y todo género de armas, adquirido todo de sus robos y presas, que en tan perniciosa e injusta guerra hacen, sin habérseles puesto hasta ahora algún freno a tanta crueldad, ni remedio al desorden e insolencia de esta gente. Habiendo cometido muchos delitos, en desacato de \n\n\n\n\n\n",
  id: 22
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 21",
  chapter: "Capítulo VI",
  layout: "textoporpagina",
  content: "\n    \nla real potestad, tomando las armas contra don Francisco de Toledo, virrey que fue de este reino, demás de las muertes y robos, y otras insolencias que han hecho a los españoles que están poblados en estas fronteras de Tarija, Paspaya, Pilaya, Tomina, y Mizque, y gobernación de Santa Cruz de la Sierra.Capítulo VIDe la armada con que entró en el Río de la Plata Sebastián GabotoPocos años después que por orden del Rey Henrico VII de Inglaterra el famoso piloto llamado Sebastián Gaboto descubrió los Bacallaos, con intento de hallar por aquella parte un estrecho por donde pudiese navegar para las Islas de la Especería vino a España; y como hombre que también entendía la cosmografía, propuso al emperador don Carlos nuestro señor, de descubrir fácil navegación y puerto, por donde con más comodidad se pudiese entrar al rico reino del Perú, y al poderoso Inga, que entonces llamaban los españoles rey blanco, de quien Francisco Pizarro había traído a Castilla larga relación y noticia. Admitida su petición, se le mandó dar para este descubrimiento cuatro navíos con más de 300 hombres, y entre ellos algunas personas de calidad que quisieron ir con él a esta jornada, a la cual salió de la bahía de Cádiz el año de 1530. Y navegando con diversos vientos, pasó la equinoccial, y llegó a ponerse en altura de más de 35 grados. Y reconociendo la costa, vino a tomar el cabo de Santa María; y conociendo ser aquel golfo la boca del Río de la Plata, que aun entonces no se llamaba sino de Solís, embocó por él, y navegando a vista de la costa de mano derecha, procuró luego algún puerto para meter sus navíos, y buscándole, se fue hasta la isla de San Gabriel, donde dio fondo. Y no le pareciendo tan acomodado y seguro, se arrimó a aquella costa de hacia el Norte, y entró por el ancho y caudaloso río del Uruguay. Dejando atrás la Punta Gorda, tomó un riachuelo que llaman de San Juan, y hallándole muy fondable, metió dentro de él su navíos; y de allí lo primero que hizo fue enviar a descubrir alguna parte de aquel caudaloso río, y procuró tener comunicación con algunos indios de aquella costa. Para lo cual despachó al capitán Juan Álvarez Ramón, para que fuese con un navío por él arriba, y reconociese con cuidado lo que en él había.\n\n\n\n\n\n",
  id: 23
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 22",
  chapter: "Capítulo VI",
  layout: "textoporpagina",
  content: "\n    \nEl cual habiendo navegado tres jornadas, dio en unos bajíos arriba de dos islas muy grandes que están en medio de dicho río, y sobreviniéndole una tormenta en aquel paraje, encalló el navío en parte, donde no pudo salir más (cuya razón parece el día de hoy allí). Con este naufragio el capitán Ramón echó su gente en un batel, y como pudo, salió con ella a tierra. Y vista la gente por los indios de la comarca, llamados Chayos y Charrúas, les acometieron, yendo caminando por la costa, por no poder ir todos en el batel, y peleando con ellos, mataron al capitán Ramón y algunos soldados, y los que quedaron se vinieron en el batel a donde estaba Gaboto. El cual, dejando allí la nao capitana con alguna gente de pelea y de mar que la guardasen, tomó una carabela y un bergantín con la gente que pudo, y se fue con ella por el Río de la Plata arriba: y atravesando aquel golfo entró por el brazo que se llama el río de las Palmas, y saliendo de la tierra habló con algunos indios de las islas, de quienes recibió alguna comida. Pasando adelante, llegó al río del Carcarañal, que es nombre antiguo de un cacique de aquella tierra, que cae a la costa de la mano izquierda, que es al Sud-oeste, donde Sebastián Gaboto tomó puerto, y le llamó de Sancti Spiritus: el cual viendo la altura y comodidad de esta isla, fundó allí un fuerte de madera con su terrapleno y dos baluartes bien cubiertos. Y corriendo la tierra tuvo comunicación con los indios de su comarca, con quienes trabó amistad; y pareciéndole conveniente reconocer lo más interior de la tierra para el fin que pretendía, descubriendo por aquella vía entrada para el reino del Perú, despachó cuatro españoles a cargo de uno llamado César, que fuese a este efecto por aquella provincia, y entrase caminando por su derrota entre mediodía y Occidente, y topando con alguna gente de consideración y con lo que descubriese dentro de tres meses, volviese a darle cuenta de lo que había. Con esta orden se despachó César, y sus compañeros, de los cuales a su tiempo haremos mención, por decir lo que hizo Gaboto en este tiempo. En el cual, habiendo arrasado los dos navíos, quitándoles las obras muertas, y poniéndoles remos, se metió con ellos río arriba, llevando consigo 110 soldados, dejando en el fuerte 60 a cargo del capitán Diego de Bracamonte. Entró por el Río de la Plata arriba, a remo y vela, con grandísimo trabajo, por no estar práctico de aquel río, ni de sus bajíos e incomodidades de aquella navegación, hasta que por su jornada llegó a las juntas de los dos ríos Paraná y Paraguay, hallándose en\n\n\n\n\n\n",
  id: 24
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 23",
  chapter: "Capítulo VI",
  layout: "textoporpagina",
  content: "\n    \naquel paraje distante del fuerte 120 leguas. Y entrando por el Paraná, por parecer más caudaloso y acomodado para navegar, llegó a la laguna dicha de Santa Ana, donde estuvo algunos días rehaciéndose de alguna comida, que con rescates hubo de los indios: de quienes tomó lengua de lo que por allí había, y de la incomodidad que había de poder navegar con sus navíos por aquel río, a causa de sus muchos bajíos y arrecifes. A cuya causa, volviendo atrás, tomó el río del Paraguay, y hallándole mu fondable hizo su navegación por él arriba como 40 leguas, hasta un paraje que llaman la Angostura; y estando en ella le acometieron más de 300 canoas de indios que llaman Agases, que en aquella ocasión señoreaban todo aquel río, (que ya en el día de hoy se han acabado en los encuentros que han tenido con los españoles). Estos se dividieron en tres escuadras, y acometiendo a los navíos que ya iban a la vela, Sebastián Gaboto, previniendo lo necesario, asestó los versos que llevaba, y teniendo al enemigo a tiro de cañón, hizo disparar a las escuadras de canoas, las cuales las más de ellas fueron hundidas y trastornadas de los tiros. Acercándose más a los enemigos, y peleando los españoles contra ellos con sus arcabuces y ballestas, y los indios con su flechería, vinieron casi a las manos, y llegaron a los costados de los navíos, de donde, con sus picas y otras armas, mataron gran cantidad de indios. De manera que fueron desbaratados y puestos en huida (los que escaparon), quedando los españoles victoriosos; con pérdida solo de tres soldados, que iban en un batel, y fueron presos de los enemigos, los cuales muchos años después vinieron a ser habidos y sacados de cautiverio. Redundó de su prisión muy gran bien, porque salieron grandes lenguas y prácticos en la tierra. Estos se llamaban, el uno Juan de Justes, y el otro Héctor de Acuña, y ambos fueron encomenderos en la Asumpción. Pasando adelante Sebastián Gaboto llegó a un término que llaman la Frontera, por ser los límites de los Guaranís, indios de aquella tierra, y términos de las otras naciones: donde tomando puerto, procuró con todas diligencias tener comunicación con ellos; y con dádivas y rescates, que dio a los caciques que le vinieron a ver, asentó paz y amistad con ellos, los cuales le proveyeron de toda la comida que hubo menester. Con esto Gaboto hubo con facilidad algunas piezas de plata, y manillas de oro, manzanas de cobre, y otras cosas de las que a Alejos García habían quitado, y él había traído del Perú, de la jornada que hizo a los Charcas, cuando le mataron los indios de aquella tierra.\n\n\n\n\n\n",
  id: 25
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 24",
  chapter: "Capítulo VII",
  layout: "textoporpagina",
  content: "\n    \nCon esto, Sebastián Gaboto estaba muy alegre y gozoso, con esperanza que la tierra era muy rica, según la fama y relaciones que de los indios tuvo, (aunque como he dicho, todo aquello emanaba del Perú) persuadiéndose ser aquellas muestras de la propia tierra. Y así dio vuelta a su fuerte, donde llegando, se determinó luego partirse para Castilla a dar cuenta a su Majestad de lo que había visto y descubierto en aquellas provincias. Y bajando al río de San Juan, donde había dejado la nao, se metió en ella con algunos de los que él quiso llevar, dejando en el fuerte de Sancti Spiritus 110 soldados a cargo del capitán don Nuño de Lara, y por su alférez Mendo Rodríguez de Oviedo, y por sargento a Luis Pérez de Bargas, sin otros muchos hidalgos y personas de cuenta que en el número de 110 soldados había, como el capitán Ruiz García Mosquera,Francisco de Rivera, etc.Capítulo VIIDe la muerte del capitán don Nuño de Lara, y su gente; y lo demás sucedidoPartido Sebastián Gaboto para España, con mucho sentimiento de los que quedaban, por ser un hombre afable, de gran valor y prudencia, muy experto y práctico en la cosmografía, como de él se cuenta, luego el capitán don Nuño procuró conservar la paz que tenía con los naturales circunvecinos, en especial con los indios Timbús, gente de buena masa y voluntad; con cuyos dos principales caciques siempre la conservó, y ellos, acudiendo a buena correspondencia, de ordinario proveían a los españoles de comida, que como gente labradora nunca les faltaba. Estos dos caciques eran hermanos, el uno llamado Mangoré, y el otro Siripo: mancebos ambos como de treinta a cuarenta años, valientes y expertos en la guerra, y así de todos muy temidos y respetados. Y en particular el Mangoré, el cual en esta ocasión se aficionó de una mujer española que estaba en la fortaleza, llamada Lucía de Miranda, casada con un Sebastián Hurtado, naturales de Ezija. A esta señora hacía este cacique muchos regalos, y socorría de comida, y ella de agradecida le hacia amoroso tratamiento: con que vino el bárbaro a aficionársele tanto, y con tan desordenado amor, que intentó de hurtarla por los medios a él posibles. Y convidando a su marido, a que se fuese a entretener a su pueblo, y a recibir de él buen hospedaje y amistad, con buenas razones se negó.&lt;/div&gt;\n\n\n\n\n&lt;/div&gt;\n\n",
  id: 26
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 25",
  chapter: "Capítulo VII",
  layout: "textoporpagina",
  content: "\n    \nVisto que por aquella vía no podía salir con su intento, y la compostura, honestidad de la mujer, y recato del marido, vino a perder la paciencia con grande indignación y mortal pasión. Por lo que ordenó con los españoles, debajo de amistad, una alevosía y traición, pareciéndole que por este medio sucedería el negocio de manera, que la pobre señora viniese a su poder. Para cuyo efecto persuadió al otro cacique su hermano, que no les convenía dar la obediencia al español tan de repente, porque con estar en sus tierras, eran tan señores y resolutos en sus cosas, que en pocos días les supeditarían todo, como las muestras lo decían. Y si con tiempo no se prevenía este inconveniente, después cuando quisiesen no lo podrían hacer, con que quedarían sujetos a perpetua servidumbre. Para cuyo efecto su parecer era, que el español fuese destruido y muerto, y asolado el fuerte, no perdonando la ocasión cuando el tiempo la ofreciese. A lo cual el hermano respondió: que ¿cómo era posible tratar él cosa semejante contra los españoles, habiendo profesado siempre su amistad, y siendo tan aficionado a Lucía? Que él de su parte no tenía intento ninguno de hacerlo, porque, a más de no haber recibido del español ningún agravio, antes todo buen tratamiento y amistad, no hallaba causa para tomar las armas contra él. -A lo cual el Mangoré replicó con indignación, que así convenía se hiciese por el bien común, y porque era gusto suyo, a que como buen hermano debía condescender. De tal suerte supo persuadir al hermano, que vino a condescender con él, dejando el negocio tratado entre sí para tiempo más oportuno. El cual no mucho después se lo ofreció la fortuna conforme a su deseo, y fue: que habiendo necesidad de comida en el fuerte, despachó el capitán don Nuño 40 soldados en un bergantín, en compañía del capitán Ruiz García, para que fuesen por aquellas islas a buscar comida, llevando por orden, se volviesen con toda brevedad con todo lo que pudiesen recoger. Salido pues el bergantín, tuvo el Mangoré por buena esta ocasión, y también por haber salido con los demás Sebastián Hurtado, marido de Lucía. Y así luego se juntaron por orden de sus caciques más de cuatro mil indios, los cuales se pusieron de emboscada en un sauzal, que estaba media legua del fuerte a la orilla del río, para con más facilidad conseguir su intento, y fuese más fácil la entrada en la fortaleza. Salió el Mangoré con 30 mancebos muy robustos cargados de comida, pescado, carne, miel, manteca y maíz; con lo cual se fue al fuerte, donde con muestras de amistad lo repartió, dando la mayor\n\n\n\n\n\n",
  id: 27
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 26",
  chapter: "Capítulo VII",
  layout: "textoporpagina",
  content: "\n    \nparte al capitán y oficiales, y lo restante a los soldados, de que fue muy bien recibido y agasajado de todos, aposentándole dentro del fuerte aquella noche. En la cual, reconociendo el traidor que todos dormían excepto los que estaban de posta en las puertas, aprovechándose de la ocasión, hicieron seña a los de la emboscada, los que con todo silencio llegaron al muro de la fortaleza, y a un tiempo los de dentro y los de fuera cerraron con los guardas, y pegaron fuego a la casa de munición: con que en un momento se ganaron las puertas, y a su salud mataron a los guardas, y a los que encontraban de los españoles, que despavoridos salían de sus aposentos a la plaza de armas, sin poderse de ninguna manera incorporar unos con otros. Porque, como era grande la fuerza del enemigo cuando despertaron, a unos por una parte, a otros por otra, y a algunos en las camas, los mataban y degollaban sin ninguna resistencia, excepto de algunos pocos que valerosamente pelearon. En especial don Nuño de Lara, que salió a la plaza haciéndola con su rodela y espada por entre aquella gran turba de enemigos, hiriendo y matando muchos de ellos, acobardándolos de tal manera, que no había ninguno que osase llegar a él, viendo que por sus manos eran muertos. Y visto por los caciques o indios valientes, haciéndose afuera, comenzaron a tirarle con dardos y lanzas, con que le maltrataron de manera, que todo su cuerpo estaba harpado y bañado en sangre. En esta ocasión, el sargento mayor con una alabarda, cota y celada, se fue a la puerta de la fortaleza, rompiendo por los escuadrones; y entendiendo poderse señorear de ella, ganó hasta el umbral, donde hiriendo a muchos de los que la tenían ocupada, y él asimismo recibiendo muchos golpes de ellos, aunque hizo gran destrozo, matando muchos de los que le cercaban, de tal manera fue apretado de ellos, tirándole gran número de flechería, que fue atravesado su cuerpo y así cayó muerto. En esta misma ocasión, el alférez Oviedo, con algunos soldados de su compañía, salieron bien armados, y cerraron con gran fuerza de enemigos que estaban en la casa de munición, por ver si la podían socorrer, y apretándoles con mucho valor, fueron mortalmente heridos y despedazados, sin mostrar flaqueza, hasta ser muertos; vendiendo sus vidas a costa de infinita gente bárbara que se las quitaron. En este mismo tiempo, el capitán don Nuño procuraba acudir a todas partes, herido por muchas y desangrado, sin poder remediar nada: por valeroso se metió en la mayor fuerza de enemigos, donde, encontrando con el Mangoré, le dio una gran cuchillada, y asegurándole con otros dos\n\n\n\n\n\n",
  id: 28
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 27",
  chapter: "Capítulo VII",
  layout: "textoporpagina",
  content: "\n    \ngolpes le derribó muerto en tierra. Y continuando con grande esfuerzo y valor, fue matando otros muchos caciques e indios, con que ya muy desangrando y cansado con las mismas heridas, cayó en el suelo donde los indios le acabaron de matar, con gran contento de gozar de la buena suerte en que consistía el buen efecto de su intento. Con la muerte de este capitán fue luego ganada la fuerza, y toda ella destruida sin dejar hombre a vida, excepto cinco mujeres que allí había, con la muy cara Lucía de Miranda y unos tres o cuatro muchachos, que por serlo no los mataron, y fueron presos y cautivos: haciendo montón del despojo, para repartirlo entre toda la gente de guerra, aunque esto más se hace para aventajar a los valientes y para que los caciques y principales escojan y tomen para sí lo que mejor les parece.Lo que hecho, visto por Siripo la muerte de su hermano, y la dama que tan cara le costaba, no dejó de derramar muchas lágrimas, considerando el ardiente amor que le había tenido, y el que en su pecho iba sintiendo tener a esta española: y así de todos los despojos que aquí se ganaron, no quiso por su parte tomar otra cosa, que por su esclava a la que por otra parte era señora de los otros. La cual puesta en su poder, no podía disimular el sentimiento de su gran miseria con lágrimas de sus ojos; y aunque era bien tratada y servida de los criados de Siripo, no era eso parte para dejar de vivir con mucho desconsuelo, por verse poseída de un bárbaro. El cual viéndola tan afligida, un día por consolarla la habló con muestra de grande amor, y le dijo: de hoy en adelante, Lucía, no te tengas por mi esclava, sino por mi querida mujer, y como tal, puedes ser señora de todo cuanto tengo, y hacer a tu voluntad de hoy para siempre; y junto con esto te doy lo más principal, que es el corazón. Las cuales razones afligieron sumamente a la triste cautiva, y pocos días después se le acrecentó más el sentimiento, con la ocasión que de nuevo se le ofreció, y fue, que en este tiempo los indios corredores trajeron preso ante Siripo a Sebastián Hurtado; el cual habiendo vuelto con los demás del bergantín al puesto de la fortaleza, saltando en tierra, la vio asolada y destruida, con todos los cuerpos de los que allí se mataron; y no hallando entre ellos el de su querida mujer, y considerando el caso, se resolvió a entrarse entre aquellos bárbaros, y quedarse cautivo con su mujer, estimando eso en menos, y aun dar la vida, que vivir ausente de ella.\n\n\n\n\n\n",
  id: 29
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 28",
  chapter: "Capítulo VII",
  layout: "textoporpagina",
  content: "\n    \nSin dar a nadie parte de su determinación, se metió por aquella vega adentro, donde al otro día fue preso por los indios, los cuales atadas las manos, lo presentaron a su cacique y principal de todos: y éste como le conoció, le mandó quitar de su presencia, y ejecutarlo de muerte. La cual sentencia oída por su triste mujer, con innumerables lágrimas, rogó a su nuevo marido no se ejecutase: antes le suplicaba le otorgase la vida para que ambos se empleasen en su servicio, y como verdaderos esclavos, de que siempre estarían muy agradecidos. A lo que el Siripo condescendió, por la grande instancia con que se lo pedía aquella a quien él tanto deseaba agradar: pero con un precepto muy rigoroso, que fue, que so pena de su indignación y de costarles la vida, si por algún camino alcanzaba que se comunicaban, y que él daría a Hurtado otra mujer, con quien viviese con mucho gusto y le sirviese; y junto con eso le haría él tan buen tratamiento, como si fuera, no esclavo, sino verdadero vasallo y amigo. Los dos prometieron de cumplir lo que se les mandaba: y así se abstuvieron por algún tiempo, sin dar ninguna nota. Mas, como quiera que el amor no se puede ocultar, ni guardar ley, olvidados de la que el bárbaro les puso, y perdido el temor, siempre que se les ofrecía ocasión no la perdían, teniendo siempre los ojos clavados el uno en el otro, como quienes tanto se amaban. Y fue de manera, que fueron notados de algunos de la casa, y en especial de un india, mujer que había sido muy estimada de Siripo, y repudiada por la española. La cual india, movida de rabiosos celos, le dijo al Siripo con gran denuedo: &quot;muy contento estás con tu nueva mujer: mas ella no lo está de ti, porque estima más al de su nación y antiguo marido, que a cuanto tienes y posees. Por cierto, pago muy bien merecido, pues dejaste a la que por naturaleza y amor estabas obligado, y tomaste la extranjera y adúltera por mujer&quot;. El Siripo se alteró oyendo estas razones, y sin duda ninguna ejecutara su saña en los dos amantes, más dejolo de hacer hasta certificarse de la verdad de lo que se le decía. Y disimulando andaba de allí adelante con cuidado, por ver si podía cogerlos juntos, o como dicen, con el hurto en las manos. Al fin se le cumplió su deseo, y cogidos, con infernal rabia mandó hacer un gran fuego, y quemar en él a la buena Lucía. Puesta en ejecución la sentencia, ella la aceptó con gran valor, sufriendo el incendio, donde acabó su vida como verdadera cristiana, pidiendo a Nuestro Señor hubiese misericordia y perdonase sus grandes pecados. Y al instante el bárbaro cruel mandó asaetear a Sebastián Hurtado;\n\n\n\n\n\n",
  id: 30
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 29",
  chapter: "Capítulo VIII",
  layout: "textoporpagina",
  content: "\n    \ny lo entregó a muchos mancebos, los cuales, atado de pies y manos, lo amarraron a un algarrobo, y fue flechado de aquella bárbara gente, hasta que acabó su vida arpado todo el cuerpo, y puestos los ojos en el cielo, suplicaba a Nuestro Señor le perdonase sus pecados, de cuya misericordia, es de creer, están gozando de su santa gloria marido y mujer. Todo lo cual sucedió en el año de 1532.Capítulo VIIIDe lo que sucedió a la gente del bergantínVuelto que fue el capitán Mosquera y sus cuarenta soldados, que con él salieron en el bergantín a buscar comida por aquel río, entraron en la fortaleza con el llanto y sentimiento que se puede imaginar, viéndolo todo asolado, y los cuerpos de sus hermanos y compañeros hechos pedazos; derramando muchas lágrimas les dieron sepultura lo mejor que pudieron. Y no sabiendo la determinación que pudieran tomar, entraron en consejo sobre ello, y resolvieron de irse al Brasil, costa a costa, en el mismo bergantín; pues no podían hacer otra cosa, aunque quisiesen ir a Castilla, porque el navío estaba rajado de las obras muertas, para poder navegar con él por aquel río, a remo y vela. Puesta en efecto su determinación, se hicieron a la vela bajando por las islas de las dos Hermanas, y entrando por el río de las Palmas, atravesaron el golfo del Paraná, tomando la isla de Martín García, y de allí a San Gabriel, yendo a desembocar por junto a la de los Lobos, saliendo al mar ancho. Y costeando al nordeste, llegaron a la isla de Santa Catalina, y pasando de San Francisco a la barra del Paranaguá, llegaron a la Cananea, y corriendo la costa tomaron un brazo y bahía de mar que allí hace, llamado Igua, veinte y cuatro leguas de San Vicente, donde surgieron y tomaron tierra, por ser de agradable vista sus salidas. Allí determinaron hacer asiento, para lo cual trabaron amistad con los naturales de aquella costa, y con los portugueses circunvecinos con quienes tenían correspondencia. Hechas, pues, sus casas y sementeras, vivieron dos años en buena conformidad, hasta que un hidalgo portugués, llamado el bachiller Duarte Pérez, se les vino a meter con toda su casa, hijos y criados, despechado y quejoso de los de su propia nación: el cual había sido desterrado por el rey don Manuel a aquella costa, en la que había padecido innumerables trabajos. Por \n\n\n\n\n\n",
  id: 31
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 30",
  chapter: "Capítulo VIII",
  layout: "textoporpagina",
  content: "\n    \nlo que hablaba con alguna libertad, más de la que debía: de lo cual resultó, que el capitán de aquella costa le envió a notificar que fuese a cumplir su destierro a la parte y lugar donde por su rey fue mandado; y por el consiguiente los castellanos que allí estaban, fueron requeridos que, si querían permanecer en aquella tierra, diesen luego obediencia a su Rey y Señor, cuyo era aquel distrito y jurisdicción, y en su nombre al gobernador Martín Alfonso de Sosa. Donde no, dentro de treinta días dejasen aquella tierra, saliéndose de ella, so pena de muerte y perdimiento de sus bienes. Los castellanos respondieron, que no conocían ser aquella tierra de la corona de Portugal, sino de la de Castilla, y como tal estaban allí poblados en nombre del emperador don Carlos, cuyos vasallos eran. De estas demandas y respuestas vino a resultar muy grande disconformidad entre los unos y los otros. En este tiempo sucedió el llegar a aquella costa un navío de franceses corsarios, los cuales, llegados a la Cananea, entraron en aquel puerto. Y siendo los castellanos avisados, se determinaron de acometer al navío, y cogiendo dos marineros, que habían saltado a tierra a tomar provisión de los indios, una noche muy obscura cercaron el navío con muchas canoas y balsas en que iban más de 200 flecheros, y llevando consigo los dos franceses les dijeron que dijesen, que venían con el refresco y comida que habían salido a buscar, y que no había de que recelarse, porque estaba todo muy quieto. Con lo cual los aseguraron, y fueron echando sus cabos en el navío, mientras acababan de llegar las canoas para echar arriba sus escalas: y saltando dentro los castellanos e indios repentinamente, pelearon con los franceses, los rindieron, y tomaron el navío con muchas armas, municiones y otras cosas que traían: con cuyo suceso quedaron los españoles muy bien pertrechados para cualquier acaecimiento. Pasando adelante la discordia que los portugueses con ellos tenían, determinaron de echarlos de aquella tierra y puerto, castigándolos con el rigor que su atrevimiento pedía. De esta determinación tuvieron los castellanos aviso; y así trataron entre sí el modo que habían de tener para defenderse de los contrarios. Y resueltos en lo que habían de hacer, supieron como dos capitanes portugueses venían de hecho con 80 soldados a dar sobre ellos, sin contar muchos indios que consigo traían, con determinación, como digo, de echarlos de aquel puesto, quitarles sus haciendas, castigándoles en las personas. Para cuyo resguardo los castellanos procuraron reparar y fortificar el puesto con sus trincheras de la parte del mar,\n\n\n\n\n\n",
  id: 32
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 31",
  chapter: "Capítulo IX",
  layout: "textoporpagina",
  content: "\n    \npor donde también les habían de acometer, donde plantaron cuatro piezas de artillería, y entre el puerto y el lugar hicieron una emboscada de 20 soldados y 150 indios flecheros, para que viniendo a las manos con los de la trinchera, de improviso diesen sobre los contrarios. En este tiempo llegaron los portugueses por mar y tierra, y puestos en buen orden marcharon para el lugar con sus banderas desplegadas, y pasando por cerca de la emboscada, llegaron a reconocer la trinchera, de la cual se les disparó la artillería, y abriéndoles su escuadrón a un lado y otro, cerca de una montaña, salieron a ellos los de la emboscada, y dándoles una rociada de arcabucería y flechería, los portugueses se desordenaron, y disparando algunos arcabuzazos se retiraron con toda prisa. Los del lugar dieron tras de ellos, y al pasar un paso estrecho que allí hacia un arroyo, hicieron gran matanza, prendiendo algunos, y entre ellos al capitán Pedro de Goas, que fue herido de un arcabuzazo. Continuando los castellanos la victoria, por no perder la ocasión, llegaron a la villa de San Vicente, donde entrados en las atarazanas del rey, saquearon y robaron cuanto había en el puerto. Hecho este desconcierto, volvieron a su asiento con algunos de los mismos portugueses, que al disimulo les favorecieron; donde metidos todos en dos navíos, desampararon la tierra y se fueron a la isla de Santa Catalina, que es ochenta leguas más para el Río de la Plata, por ser conocidamente demarcación y territorio de la corona de Castilla, y allí hicieron asiento por algunos días: hasta que el capitán Gonzalo de Mendoza encontró con ellos, como en adelante se dirá. Pasó este suceso el año de 1534, el cual entiendo que fue el primero que hubo entre cristianos en estas partes de las Indias Occidentales.Capítulo IXDel descubrimiento de César y sus compañerosEn el capítulo sexto de este libro dije, cómo Sebastián Gaboto había despachado a descubrir las tierras australes y occidentales que por aquella parte pudiesen reconocer, según le pareció al dictamen de su entendimiento y cosmografía, que por allí era el más fácil y breve camino para entrar al rico reino del Perú y sus confines, para lo cual dijimos haber enviado a César y sus compañeros.\n\n\n\n\n\n",
  id: 33
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 32",
  chapter: "Capítulo IX",
  layout: "textoporpagina",
  content: "\n    \nA este efecto, desde la fortaleza de Sancti Spiritu, de donde salieron a su jornada, se fueron por algunos pueblos de indios, y atravesando una cordillera que viene de la costa de la mar, y corriendo hacia el Poniente y Septentrión, se va a juntar con la general y alta cordillera del Perú y Chile, haciendo entre una y otra muy grandes y espaciosos valles, poblados de muchos indios de varias naciones. Pasando de aquel cabo, corriendo su derrota por muchas poblaciones de indios que les agasajaron y dieron pasaje, continuando sus jornadas, volvieron hacia el Sur, y entraron en una provincia de gran suma, y multitud de gente; muy rica de oro y plata, que tenían juntamente mucha cantidad de ganados y carneros de la tierra, de cuya lana fabricaban gran suma de ropa bien tejida. Estos naturales obedecían a un gran señor que los gobernaba, y teniendo por más seguro los españoles meterse debajo de su amparo, determinaron irse adonde él estaba. Y llegados a su presencia, con reverencia y acatamiento le dieron su embajada, por el mejor modo que les fue posible, dándole satisfacción de su venida, y pidiéndole su amistad de parte de Su Majestad, que era un poderoso príncipe que tenía su reino y señorío de la otra parte del mar: no porque tenía necesidad de adquirir nuevas tierras y señoríos, ni otro interés alguno más que tenerle por amigo, y conservar su amistad, como lo hace con otros muchos príncipes y reyes, y celo de darle a conocer al verdadero Dios. En este particular fueron los españoles con gran recato, por no caer en desgracia de aquel Señor: el cual los recibió humanamente haciéndoles buen tratamiento, gustando mucho de su conversación y costumbres de los españoles. Allí estuvieron muchos días, hasta que César y sus compañeros le pidieron licencia para volverse, la cual este Señor les concedió liberalmente, dándoles muchas piezas de oro y plata, y cargándoles de cuanta ropa pudieron llevar, y juntamente les dio indios que los acompañasen y sirviesen. Y atravesando toda aquella tierra, vinieron por su derrota hasta topar con la fortaleza de donde habían salido, la cual hallaron desierta y asolada, después del desdichado suceso de don Nuño de Lara, y de los demás que con él murieron. Lo cual visto por César, tornó a dar vuelta con su compañía a esta provincia, de donde pasados algunos días determinaron salir de aquella tierra y pasar adelante: como lo hicieron por muchas regiones y comarcas de indios de lenguas diferentes, y también en costumbres. Y subiendo una cordillera altísima y áspera, de la cual mirando el \n\n\n\n\n\n",
  id: 34
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 33",
  chapter: "Capítulo X",
  layout: "textoporpagina",
  content: "\n    \nhemisferio vieron a una parte el mar del Norte, y a la otra el del Sur: aunque a esto no me he podido persuadir por la distancia que hay de un mar a otro; porque tomando por lo más estrecho, que esto podrá ser en el rincón del estrecho de Magallanes, hay, de la una boca de la parte del Norte, a la otra del mar del Sur, más de cien leguas: por lo que entiendo fue engaño de unos grandes lagos que por noticia se sabe que caen de esta otra parte del Norte, que mirando de lo alto les pareció ser el mismo mar. De donde caminando por la costa del Sur muchas leguas, salieron hacia Atacama, tierra de los Olipes; y dejando a mano derecha los Charcas&lt;/a&gt; fueron en demanda del Cuzco, y entraron en aquel reino al tiempo que Francisco Pizarro acababa de prender a Atahualpa Inga, en los Tambos de Cajamarca, como consta de su historia. De forma que con este suceso, atravesó este César toda esta tierra, de cuyo nombre comúnmente le llaman la conquista de los Césares, según me certificó el capitán Gonzalo Sáenz Garzón, vecino de Tucumán, conquistador antiguo del Perú,, el cual me dijo haber conocido y comunicado a este César en la ciudad de los Reyes, de quien tomó la relación y discurso que en este capítulo he referido.Capítulo XCómo don Pedro de Mendoza pasó por Adelantado y Gobernador de estas provincias, y la armada que trajoLlegado Sebastián Gaboto a Castilla, el año de 33 dio cuenta a Su Majestad de lo que había descubierto y visto en aquellas provincias, la buena disposición, calidad y temple de la tierra, la gran suma de naturales, con la noticia y muestras de oro y plata que traía; y de tal manera supo ponderar este negocio, que algunos caballeros de caudal pretendieron esta conquista y gobernación. Un criado de la casa real, gentil hombre de boca del emperador nuestro señor don Pedro de Mendoza, deudo muy cercano de doña María de Mendoza, mujer del señor don Francisco de los Cobos, tuvo negociación de que su Majestad le hiciese merced de aquella gobernación con título de adelantado, haciendo asiento de la poblar y conquistar, pasando con su gente y armada en aquella tierra, con cargo de que habiéndola poblado, se le haría merced con título de marqués de lo que allí se poblase. Con cuya fama y buena opinión se movieron en España diversas personas, ofreciéndosele al gobernador con\n\n\n\n\n\n",
  id: 35
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 34",
  chapter: "Capítulo X",
  layout: "textoporpagina",
  content: "\n    \ncuanto tenían, de manera que no tenía a poca suerte los que a esta empresa eran admitidos. Y así no hubo ciudad de donde no saliesen para esta jornada mucha gente, y entre ella algunos hombres nobles y de calidad. Juntos en Sevilla, se embarcaron y salieron de la barra de San Lúcar en 14 navíos el año de 1535 a 24 de agosto, y navegando por su derrota con viento próspero, llegaron a las Canarias, y en la isla de Tenerife hizo el Adelantado reseña de su gente, y halló que traía 2200 hombres entre oficiales y soldados, de algunos de los cuales haré aquí mención, para noticia de lo que adelante ha de suceder. Traía por su maestre de campo un caballero de Ávila, llamado Juan de Osorio, que había sido en Italia capitán de infantería española, al cual todos querían y estimaban por su grande afabilidad y valor. Iba por almirante de la armada don Diego de Mendoza, hermano del Adelantado; y por su alguacil mayor, Juan de Oyolas, que a más de la privanza grande que con el adelantado tenía, era su mayordomo. Por proveedor de Su Majestad, un caballero llamado Francisco de Alvarado, y junto con él, un hermano suyo llamado don Juan de Carabajal. Entre los de más cuenta que llevaba, eran el capitán Domingo Martínez de Irala, natural de Bergara en la provincia de Guipúzcoa; Francisco Ruiz Galán, de la ciudad de León en Castilla; el capitán Salazar de Espinosa, de la villa de Pomar; Gonzalo de Mendoza, de Baeza, y don Diego de Avalos. Venía junto con estos, un caballero gentil hombre del &lt;/button class=\"balloon\" data-balloon-pos=\"up\" data-balloon-length=\"large\" data-balloon=\"Refiere al Rey Carlos I de España y V del Sacro Imperio Romano Germánico.\"&gt;Rey&lt;/button&gt;, llamado don Francisco de Mendoza, mayordomo de Maximiliano, rey de Romanos, el cual por cierta desgracia que le sucedió en España pasó a las Indias. Por contador de su Majestad venía Juan de Cáceres, natural de Madrid; y con él Felipe de Cáceres su hermano; por tesorero venía García Venegas natural de Córdoba; y Hernando de los Ríos, y Andrés Hernández el romo. Por factor de Su Majestad, don Carlos de Guevara y por alcaide de la primera fortaleza que se hiciese, don Núñez de Silva. Venía por sargento mayor de la armada, Luis de Rojas y Sandoval; y sin cargo venían otros muchos caballeros, como Perafán de Rivera, don Juan Manrique, el capitán Diego de Abreu, Pedro Ramiro de Guzmán, todos de Sevilla. Don Carlos Dubrin, hermano de leche del emperador don Carlos Nuestro Señor, el capitán Juan de Ortega, Luis Hernández de Zúñiga, de las Montañas, Francisco de Avalos Piscina, de Pamplona, Hernando Arias de Mansilla, don Gonzalo de Aguilar, el capitán Medrano, de Granada, don Diego Barba, caballero de San Juan, Hernán\n\n\n\n\n\n",
  id: 36
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 35",
  chapter: "Capítulo X",
  layout: "textoporpagina",
  content: "\n    \nRuiz de la Cerda, el capitán Agustín de Campos, de Almodóvar; capitán Luján, don Juan Ponce de León, de Osuna; el capitán Juan Romero, y Francisco Hernández de Córdoba, Antonio de Mendoza, y don Bartolomé de Bracamonte, de Salamanca; Diego de Estopiñán, capitán Figueroa, Alonso Suárez de Ayala, y Juan de Vera, de Jerez de la frontera, Bernardo Centurión, genovés, cuatralbo de las galeras del príncipe Andrea Doria; el capitán Simón Jacques de Ramúa, natural de Flandes, Luis Pérez de Ahumada, hermano de Santa Teresa de Jesús; sin otros muchos caballeros que venían en dicha armada por alférez, sargentos, y otros muchos hidalgos de cuenta. La cual partida de las Canarias, continuando su viaje, pasó la línea equinoccial, de donde con una gran tormenta se dividió la armada. Don Diego de Mendoza tomó hacia el Mediodía para la boca del Río de la Plata (según se presume, de malicia), y navegando toda la demás armada para la costa del Brasil, tomó puerto en el Río Janeiro, y en otros de aquella costa, obligados de la necesidad de hacer esta arribada, del agua y bastimentos. Estando en dicho puerto, sucedió un día, que andando el maestre de campo Juan de Osorio paseándose con el factor don Carlos de Guevara por la playa, llegó a él Juan de Oyolas, alguacil mayor, y le dijo (yendo en su compañía el capitán Salazar, y Diego de Salazar y Medrano): &quot;Usted sea preso, señor Juan de Osorio&quot;. El maestre de campo, se retiró empuñándose a la espada; y entonces le replicó el alguacil mayor, diciendo: &quot;téngase usted, que el señor gobernador manda que vaya preso&quot;; a lo que respondió Juan de Osorio: &quot;hágase lo que su Señoría manda, que yo estoy presto a obedecerle&quot;. Con esto, todos se fueron hacia la tienda del Gobernador, la cual estaba en la playa, y en aquella sazón, cercada toda de gente de guarda; y adelantándose el alguacil mayor, fue a dar aviso al Gobernador (que estaba almorzando), diciéndole: &quot;ya, señor, está preso, ¿qué manda Vuestra Señoría que se haga?&quot;. Él respondió, dando de mano: &quot;hagan lo que han de hacer&quot;; y volviendo a donde venía el maestre de campo, de improviso le dieron de puñaladas, que cayó muerto, sin poder confesar. Luego pusieron el cuerpo sobre un repostero, a vista de todo el campo, con un rótulo: -por traidor y alevoso-. A esta sazón el Adelantado dijo: &quot;este hombre tiene su merecido, que su soberbia y arrogancia le han traído a este estado&quot;. Todos los presentes sintieron en el alma la muerte de tan principal y honrado caballero, quedando tristes y desconsolados, particularmente sus deudos y amigos. Súpose que algunos envidiosos le malsinaron\n\n\n\n\n\n",
  id: 37
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 36",
  chapter: "Capítulo XI",
  layout: "textoporpagina",
  content: "\n    \nmalsinaron con don Pedro, diciendo, que el maestre de campo le amenazaba que, en llegando al Río de la Plata, había de hacer que las cosas corriesen por diferente orden, atribuyendo sus razones a mal fin. De cuya muerte sobrevinieron, por castigo de Dios, grandes guerras, muchas desgracias y muertes, como adelante se dirá.Capítulo XIComo la armada entró en el Río de la Plata, y de la muerte de don Diego de MendozaQuedó toda la gente tan disgustada con la muerte del maestre de campo Juan de Osorio, que muchos estaban determinados a quedarse en aquella costa, como lo hicieron. Y habiéndole entendido el gobernador, mandó luego salir la armada de aquel puerto, y engolfándose en la mar, se vinieron a hallar en veinte ocho grados sobre la laguna de los Patos, donde, y más adelante, tocaron en unos bajíos que llaman los Arrecifes de don Pedro. Corriendo la costa, reconocieron el cabo de Santa María, y fueron a tomar el cabo de la boca del Río de la Plata: por donde entrados, subieron por él hasta dar en la playa de San Gabriel, donde hallaron a don Diego de Mendoza que estaba haciendo tablazón para bateles y barcos en que pasar el río, para la parte del Oeste, que es Buenos Aires. Saludados los unos a los otros, supo don Diego la muerte del maestre de campo, la cual sintió mucho, y dijo públicamente: &quot;plegue a Dios, que la falta de este hombre, y su muerte, no sean causa de la perdición de todos&quot;. Y dando orden de pasar a aquella parte, fueron algunos a ver la disposición de la tierra; y el primero que saltó en ella, fue Sancho del Campo, cuñado de don Pedro, el cual vista la pureza de aquel temple, y su calidad y frescura, dijo: &quot;que Buenos Aires son los de este suelo&quot;; de donde se le ha quedado el nombre. Considerado bien el sitio y lugar por personas experimentadas, y ser el más acomodado que por allí había para escala de aquella entrada, determinó luego don Pedro hacer allí asiento, y mandó pasar toda la gente a aquella parte, así por parecerle estaría más segura de que no se le volviese al Brasil, como por la comodidad de poder algún día abrir camino y entrada para el Perú. Y dejando los navíos de más porte en aquel puerto con la guarda necesaria, se fue con lo restante al de Buenos Aires, metiendo los navíos en aquel riachuelo, del cual media legua arriba fundó una población que puso por nombre la ciudad de Santa María en el año de 36.\n\n\n\n\n\n",
  id: 38
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 37",
  chapter: "Capítulo XI",
  layout: "textoporpagina",
  content: "\n    \nHizo un fuerte de tapias de poco más de un solar en cuadro donde se pudiese recoger la gente, y poderse defender de los indios de guerra, que luego que sintieron a los españoles, vinieron a darles algunos rebatos por impedirles su población: y no pudiéndolo estorbar, se retiraron sobre el Riachuelo, de donde salieron un día y mataron como diez españoles, que estaban haciendo carbón y leña. Escapando algunos de ellos, vinieron a la ciudad, dando aviso de lo que había sucedido: y tocando al arma, mandó don Pedro a su hermano don Diego, que saliese a este castigo con la gente que le pareciese. Don Diego sacó en campo trescientos soldados infantes, y doce de a caballo, con tres capitanes, Perafán de Rivera, Francisco Ruiz Galán y don &lt;button class=\"balloon\" data-balloon-pos=\"up\" data-balloon-length=\"large\" data-balloon=\"Refiere a Diego Bartolomé Bracamonte, originario de Salamanca.\"Bartolomé de Bracamonte&lt;/button&gt;; y cerca de su persona a caballo don Juan Manrique, Pedro Ramiro de Guzmán, Sancho del Campo, y el capitán Luján: y así todos juntos fueron caminando como tres leguas, hasta una laguna donde halló algunos indios pescando, y dando sobre ellos mataron y prendieron más de 30; y entre ellos un hijo de un cacique de toda aquella gente. Venida la noche se alojaron en la vega del río, de donde despachó don Diego algunos presos para que diesen aviso al cacique, que se viniese a ver con él bajo de seguro, porque no pretendía con ellos otra cosa que tener amistad, que esta era la voluntad del Adelantado su hermano. Venido otro día acordó de pasar adelante, hasta topar los indios, y tomar más lengua de ellos: y llegados a un desaguadero de la laguna, descubrieron de la otra parte más de tres mil indios de guerra, con mucha flechería, dardos, macanas, y bolas arrojadizas, y tocando sus bocinas y cornetas, puestos en buen orden esperaban a don Diego. El cual como los vio, dijo: &quot;Señores, pasemos a, la otra banda y rompamos estos bárbaros: vaya la infantería delante haciendo frente, y deles una rociada, porque los de a caballo podamos sin dificultad salir a escaramucear con ellos y a desbaratarlos&quot;. Algunos capitanes dijeron, que sería mejor aguardar a que ellos pasasen, como al parecer lo mostraban, y pues se hallaban en puesto aventajado, sin el riesgo y dificultad que había en pasar aquel vado. Al fin se vino a tomar el peor acuerdo, que fue pasar el desaguadero donde estaban los enemigos: los cuales en este tiempo se estuvieron quedos, hasta que vieron que había pasado la mitad de nuestra gente de a pie; y entonces se vinieron repentinamente, cerrados en media luna, y dando sobre los nuestros, hiriendo con tanta prisa, que no les dieron lugar a disparar las ballestas y arcabuces. Visto por los capitanes y los de a caballo cuan mal les iba a los nuestros, dieron lugar a que pasase la caballería, y cuando llegó,\n\n\n\n\n\n",
  id: 39
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 38",
  chapter: "Capítulo XI",
  layout: "textoporpagina",
  content: "\n    \nya era muerto don Bartolomé de Bracamonte; y siguiendo Perafán de Rivera, que peleaba con espada y rodela metido en la fuerza de enemigos, junto con Marmolejo su alférez, los cuales mataban y herían a gran prisa, hasta que cansados y desangrados de las muchas heridas que tenían, cayeron muertos. Don Diego con los de a caballo acometió en lo raso al enemigo; mas hallóle tan fuerte que no le pudo romper, porque también los caballos venían flacos del mar, y temían arrojarse a la pelea: y así revolviendo cada uno por su parte, hiriendo y matando lo que podían, hasta que con las bolas fueron derribando algunos caballos. Don Juan Manrique se metió en lo más espeso de su escuadrón, y peleando valerosamente, cayó del caballo: y llegando don Diego a socorrerle no lo pudo hacer tan presto que cuando llegó no le tuviesen ya cortada la cabeza; y al que se la cortó el bravo don Diego le atravesó la lanza por el cuerpo, y a él le dieron un golpe muy fuerte en el pecho con una bola, de que luego cayó sin sentido. En este tiempo Pedro Ramiro de Guzmán se arrojó primero al escuadrón de los indios por sacarle de este aprieto; y llegando donde estaba, le pidió la mano para subirle a las ancas de su caballo, el cual, aunque se esforzó lo que pudo, no tuvo fuerzas por estar tan desangrado; y cerrando los enemigos con Pedro Ramiro, le acosaron de tal suerte a chuzazos, que en el propio lugar que don Diego, le acabaron y fue muerto. Luján y Sancho del Campo andaban algo a fuera muy mal heridos, escaramuceando entre los indios, los cuales cerrando con la infantería, y desbaratándola, entraron por el desaguadero, hiriendo y matando a una mano y a otra a los españoles, de tal suerte que hicieron cruel matanza en ellos, y a seguir el alcance no dejaron hombre a vida de todos. Luján y otro caballero, por disparar sus caballos, salieron sin poderlos sujetar ni detenerlos, por estar muy heridos; los cuales llegando a la orilla de un río que hoy llaman de Luján, ambos cayeron muertos, como después se vio, porque hallaron los huesos, y uno de los caballos vivo: de cuyo suceso se le quedó el nombre a este río. Algunos dicen que fueron estos la causa de la muerte del maestre de campo, con otros que en este desbarate murieron. Sancho del Campo y Francisco Ruiz recogieron la gente que por todos fueron 140 de a pie, y cinco de a caballo; y como de estos venían muchos heridos y desangrados, aquella noche se fueron quedando, donde acabaron de hambre y sed sin poderlos remediar, y quedaron solos de toda aquella tropa 80 personas.\n\n\n\n\n\n",
  id: 40
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 39",
  chapter: "Capítulo XII",
  layout: "textoporpagina",
  content: "\n    \nCapítulo XIIDe la hambre y necesidad que padeció toda la armadaSabido por don Pedro el suceso y desbarate, con la muerte de su hermano y de los demás que fueron en su compañía, recibió tan grande sentimiento, que estuvo a pique de perder la vida, y más con un acaecimiento y desastre de haber hallado muerto en su cama al capitán Medrano, de cuatro o cinco puñaladas, sin que se pudiese saber quién lo hubiese hecho: aunque se hicieron grandes diligencias, prendiendo muchos parientes y amigos de Juan de Osorio, con los cuales sucesos, y hambre que sobrevino, estaba la gente muy triste y desconsolada. Llegó a tanto extremo la falta de comida que había, que solo se daba ración de seis onzas de harina, y esa podrida y mal pesada: que lo uno y otro causó tan gran pestilencia, que corrompidos morían muchos de ellos. Para cuyo remedio determinó don Pedro enviar al capitán Gonzalo de Mendoza con una nao a la costa del Brasil, en busca de alguna comida. Y salido al efecto, hizo su jornada, y por otra parte despachó 200 hombres con Juan de Oyolas a que descubriesen lo que había el río arriba, nombrándole por su teniente general. El cual salió en dos bergantines y una barca, llevando en su compañía al capitán Alvarado y a otros caballeros, con orden de que dentro de cuarenta días le viniesen a dar cuenta de lo que descubriesen, para que conforme su relación, ordenase lo más conveniente. Pasados algunos días, estuvo don Pedro cuidadoso de saber lo sucedido, cumplido ya el término de los cuarenta días y otros más; lo cual le causó notable pena, y más, viendo que cada día iba creciendo más la pestilencia, hambre, y necesidad. Con que determinó irse al Brasil, llevando consigo la mitad de la gente, que allí tenía, a proveerse de bastimentos, y con ellos volver y proseguir su conquista, (aunque a la verdad su intento no era este, sino de irse a Castilla, y dejar la tierra). Para lo cual con gran prisa hizo aparejar los navíos que había de llevar; y embarcada la gente necesaria para el viaje, aquella misma noche llegó Juan de Oyolas antes del partirse; haciendo gran salva de artillería con gran júbilo, por haber hallado cantidad de comida y muchos indios amigos que dejaba de paz, llamados Timbús y Caracarás, en el puerto de Corpus Christi, a donde dejó al capitán Alvarado con cien soldados en su compañía. Con este socorro, y la buena nueva que de la tierra tuvo, mudó de parecer don Pedro, y determinó ir en persona a verla, llevando en su compañía la mayor parte de la gente con algunos caballeros,\n\n\n\n\n\n",
  id: 41
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 40",
  chapter: "Capítulo XII",
  layout: "textoporpagina",
  content: "\n    \ncaballeros; dejando por su lugar teniente en Buenos Aires al capitán Francisco Ruiz, y en su compañía a don Nuño de Silva, y por capitán de los navíos a Simón Jaques de Ramúa. Tardó don Pedro en el viaje muchos días, por causa de la gran flaqueza de la gente, la cual por momentos se le moría; tanto que ya le faltaba cerca de la mitad. Y llegando adonde estaba Alvarado halló habérsele muerto la mitad de la gente, no pudiendo arribar de la gran flaqueza y hambre pasada; y la que de presente tenían. Con todo determinó de hacer allí asiento, vista la buena comodidad del sitio. Mandó hacer una casa para su morada, recibiendo gran consuelo en la comunicación y amistad de los naturales, de quienes se informó de lo que había en la tierra, y como a la parte del Sud-Oeste había ciertos indios vestidos, que tenían muchas ovejas de la tierra, y que contrataban con otras naciones muy ricas de plata y oro, y que habían de pasar por ciertos pueblos de indios, que viven bajo de tierra, y que llaman Comechingones; y son los de las cuevas, que hoy día están repartidos a la ciudad de Córdoba. Con esta relación, se ofrecieron dos soldados a don Pedro de Mendoza de ir a ver y descubrir aquella tierra, y traer razón de ella. El cual deseando satisfacerse, condescendió con su petición: y salidos al efecto, nunca más volvieron, ni se supo que se hicieron, aunque algunos han dicho, que atravesando la tierra, y cortando la cordillera general, salieron al Perú, y se fueron a Castilla. En este tiempo padecían en Buenos Aires cruel hambre, porque faltándoles totalmente la ración, comían sapos, culebras y las carnes podridas que hallaban en los campos: de tal manera, que los excrementos de los unos comían los otros. Viniendo a tanto extremo de hambre, que como en el tiempo que Tito y Vespasiano tuvieron cercada a Jerusalem, comieron carne humana, así sucedió a esta miserable gente, porque los vivos se sustentaban de la carne de los que morían, y aun de los ahorcados por justicia, sin dejarles más de los huesos: y tal vez hubo que un hermano, que sacó las asaduras y entrañas a otro que estaba muerto, para sustentarse con ellas. Finalmente murió casi toda la gente: donde sucedió que una mujer española, no pudiendo sobrellevar tan grande necesidad, fue constreñida a salirse del real e irse a los indios para poder sustentar la vida. Y tomando la costa arriba, llegó cerca de la Punta Gorda en el Monte Grande, y por ser ya tarde, buscó donde albergarse: y topando con una cueva que hacía la barranca de la misma costa, entró por ella, y repentinamente topó una fiera leona que estaba en doloroso parto. La cual vista por \n\n\n\n\n\n",
  id: 42
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 41",
  chapter: "Capítulo XIII",
  layout: "textoporpagina",
  content: "\n    \nla afligida mujer quedó desmayada, y volviendo en sí se tendía a sus pies con humildad. La leona que vio la presa, acometió a hacerla pedazos, y usando de su real naturaleza se apiadó de ella, y desechando la ferocidad y furia con que la había acometido, con muestras halagüeñas llegó hacia a la que hacía poco caso de su vida; con lo que, cobrando algún aliento la ayudó en el parto en que actualmente estaba, y parió dos leoncillos en cuya compañía estuvo algunos días, sustentada de la leona con la carne que de los animales traía. Con que quedó bien agradecida del hospedaje por el oficio de comadre que usó. Acaeció que un día, corriendo los indios aquella costa, toparon con ella una mañana, al tiempo que salía a la playa a satisfacer la sed con el agua del río, donde la cogieron y llevaron a su pueblo, y tomola uno de ellos por mujer. De cuyo suceso y de lo demás que pasó, adelante haré relación.Capítulo XIIIDe la jornada que don Pedro mandó hacer al general Juan de Oyolas, y capitán Domingo de IralaAlgunos días después que don Pedro de Mendoza llegó a Corpus, determinó enviar a descubrir el Río de la Plata arriba, y tomar relación de la tierra; y con este acuerdo mandó a su teniente general se aprestase para el efecto. El cual el año de 1537 salió de este puerto con 300 soldados en tres navíos, llevando en su compañía al capitán Domingo Martínez de Irala, y al factor don Carlos de Guevara, a don Juan Ponce de León, a Luis Pérez de Zepeda, a don Carlos Dubrin y a otros caballeros, con instrucción de que dentro de cuatro meses le volviesen a dar cuenta de lo descubierto y sucedido. Salidos a su jornada, navegaron muchas leguas padeciendo grandes trabajos y necesidades, hasta que llegaron donde se juntan los ríos del Paraguay y Paraná, y, como hizo Gaboto, se entró por el que parece más caudaloso, que es el del Paraná; y tocando en los mismos bajíos de Gaboto, dieron vuelta y embocaron por el Paraguay con los remos en las manos y a la sirga, caminando de noche y de día, con deseo de llegar a algunos pueblos, donde pudiesen hallar refrigerio de alguna comida. Con esta determinación, yendo navegando en un paraje que llaman la Angostura, les acometieron gran número de canoas de aquellos indios llamados Agases, con los cuales \n\n\n\n\n\n",
  id: 43
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 42",
  chapter: "Capítulo XIII",
  layout: "textoporpagina",
  content: "\n    \npelearon muy reñidamente matando muchos de ellos: de manera que los hicieron retirar. Y al saltar todos los más en tierra, dejaron las canoas en que se cogió alguna comida y mucha carne de monte y pescado, con lo cual cómodamente pudieron llegar a la frontera de los Guaranís con quienes trabaron luego amistad, y se proveyeron del matalotaje necesario para pasar adelante. Tomando lengua, que hacia el Occidente y Mediodía había cierta gente que poseía muchos metales, y caminando por sus jornadas llegaron al puerto que dicen de Nuestra Señora de la Candelaria, donde Juan de Oyolas mandó desembarcar y tomar tierra, dejando allí los navíos con cien soldados a orden de Domingo de Irala, y prosiguiendo su jornada con 200 soldados en doce días del mes de Febrero de 1537 años, dejando orden que le aguardasen en aquel puerto seis meses, y si dentro de ellos no volviese, se fuesen sin detenerse más tiempo, porque la imposibilidad de algún suceso contrario se lo impediría. Con esta determinación, tomó su derrota al Poniente, caminando por los llanos de aquella tierra, llevando en su compañía al factor y a don Carlos Dubrin, Luis Pérez de Zepeda, y a otros muchos caballeros, donde los dejaremos por ahora. Volviendo a don Pedro de Mendoza, que estaba aguardando la correspondencia de Juan de Oyolas, vista su tardanza se bajó a Buenos Aires, con determinación de irse a Castilla. Donde llegado, halló gran parte de la gente muerta, y la demás que había quedado, tan acabada y flaca de hambre, que se temió no quedase ninguna de toda ella con vida. Estando todos con esta aflicción y aprieto, fue Dios servido de que llegó al puerto el capitán Gonzalo de Mendoza que venía del Brasil con la nao muy bien proveída de comida, junto con otros dos navíos que traía en su compañía, de aquella gente que quedó de Sebastián Gaboto y de los demás que se le juntaron después de la rota de los portugueses, a los cuales halló retirados en la isla de Santa Catalina, donde tenían hecho asiento. A persuasión de Gonzalo de Mendoza se determinaron a venir en su compañía, que fue toda la importancia del buen efecto de aquella conquista: porque de más de ser ya baqueanos y prácticos en la tierra, tenían consigo algunos indios del Brasil, y los más de ellos con sus mujeres e hijos. Los españoles fueron Hernando de Rivera, Pedro Morón, Hernando Díaz, el capitán Ruiz García, Francisco de Rivera, y otros, así castellanos como portugueses, los cuales todos venían bien pertrechados de armas y municiones. Con lo cual don Pedro de Mendoza recibió sumo gozo y alegría, de que le nació derramar muchas lágrimas, dando gracias a Nuestro Señor por tan señalada merced.\n\n\n\n\n\n",
  id: 44
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 43",
  chapter: "Capítulo XIII",
  layout: "textoporpagina",
  content: "\n    \nDe ahí a poco que esto pasó, se determinó de informarse del suceso de su teniente general Juan de Oyolas, para lo cual despachó al capitán Salazar, y al mismo Gonzalo de Mendoza: los cuales partieron en dos navíos con 140 soldados río arriba, y ellos partidos, dentro de pocos días don Pedro puso en efecto su determinación de ir a Castilla. Embarcándose en una nao, llevó consigo al contador Juan de Cáceres, y a Alvarado, dejando por su teniente general en el puerto de Buenos Aires al capitán Francisco Ruiz. Haciendo su viaje con tiempos contrarios, y larga navegación, le vino a faltar el matalotaje, de manera que se vino a hallar don Pedro tan debilitado de hambre, que le fue forzoso hacer matar una perra que llevaba en el navío, la cual estaba salida; y comiendo de ella tuvo tanta inquietud y desasosiego, que parecía que rabiaba, y dentro de dos días murió, sucediendo lo propio a otros que de la perra comieron. Los que escaparon llegaron a España al fin del año 37, donde se dio cuenta a Su Majestad de lo sucedido en aquella conquista. Volviendo al capitán Salazar y Gonzalo de Mendoza, que iban caminando en busca de Juan de Oyolas, subieron hasta el paraje de la Candelaria, donde hallaron a Domingo de Irala en los navíos, aguardando a Juan de Oyolas en los pueblos de los indios Payaguás y Guarapayos, que son los más traidores e inconstantes de todo aquel río. Los cuales, disimulando con los españoles su dañada intención, les traían alguna comida con que los entretenían: aunque no perdían la ocasión de hacerles todo el mal que podían. Juntos, pues, los capitanes, determinaron de hacer una correduría por aquella tierra, por ver si podían tener noticia de los de la entrada; y hecha, dejaron en aquel puerto en una tabla escrito todo lo que se ofrecía que poder avisar, y que no se fiasen de aquella gente, por estar rebelada y con mala intención. Hecho esto, se volvió Salazar río abajo, dejando a Domingo de Irala un navío nuevo, y tomando otro muy cascado, y llegado al puerto que hoy es la Asumpción, determinó hacer una casa fuerte, y dejar en ella a Gonzalo de Mendoza con sesenta soldados, por parecerle aquel puerto buena escala para la navegación de aquel río, y él se partió para el de Buenos Aires, a dar cuenta a don Pedro de su jornada. Llegado que fue, como vio que era ido a España, y que el teniente que había dejado, era malquisto con los soldados, por ser de condición áspera y muy riguroso; tanto que, por una lechuga cortó a uno las orejas, y a otro afrentó por un rábano, tratando a los demás con la misma crueldad. Con que todos estaban en gran desconsuelo; y \n\n\n\n\n\n",
  id: 45
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 44",
  chapter: "Capítulo XIII",
  layout: "textoporpagina",
  content: "\n    \ntambién por haber sobrevenido al pueblo una furiosa plaga de tigres, onzas y leones, que los mataban y comían en saliendo del fuerte; que los hacían pedazos, de tal manera, que para salir a hacer sus necesidades, era necesario que saliese número de gente para resguardo de los que salían a ellas. En este tiempo sucedió una cosa admirable, que por serlo la diré; y fue, que habiendo salido a correr la tierra un caudillo en aquellos pueblos comarcanos, halló en uno de ellos y trajo en su poder, aquella mujer de que hice mención arriba, que por la hambre se fue a poder de los indios: la cual como Francisco Ruiz la vio, condenó a que fuese echada a las fieras, para que la despedazasen y comiesen. Y puesto en ejecución su mandato, cogieron a la pobre mujer, y atada muy bien a un árbol, la dejaron una legua fuera del pueblo, donde acudiendo aquella noche a la presa número de fieras, entre ellas vino la leona a quien esta mujer había ayudado en su parto. La cual conocida por ella, la defendió de las demás fieras que allí estaban y la querían despedazar; y quedándose en su compañía, la guardó aquella noche, y otro día y noche siguiente, hasta que al tercero fueron allá unos soldados, por orden de su capitán, a ver el efecto que había surtido de dejar allí aquella mujer; y hallándola viva, y la leona a sus pies con sus dos leoncillos, la cual sin acometerles se apartó algún tanto, dando lugar a que llegasen. Lo cual hicieron, quedando admirados del instinto y humanidad de aquella fiera: y desatada por los soldados, la llevaron consigo, quedando la leona dando muy fieros bramidos, y mostrando sentimiento y soledad de su bienhechora, y por otra parte, su real instinto y gratitud, y más humanidad que los hombres. De esta manera quedó libre la que ofrecieron a la muerte, echándola a las fieras: la cual mujer yo la conocí, y la llamaban la Maldonada, que más bien se le podía llamar la Biendonada, pues por este suceso se ha de ver no haber merecido el castigo a que la ofrecieron, pues la necesidad había sido causa y constreñídola a que desamparase la compañía, y se metiese entre aquellos bárbaros. Algunos atribuyeron esta sentencia tan rigurosa al capitán Alvarado y no a Francisco Ruiz; mas cualquiera que haya sido, el caso sucedió como queda referido.\n\n\n\n\n\n",
  id: 46
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 45",
  chapter: "Capítulo XIV",
  layout: "textoporpagina",
  content: "\n    \nCapítulo XIVDe las cosas que sucedieron en estas provincias después de la partida de don PedroHabiendo llegado el capitán Salazar al puerto de Buenos Aires, y dado razón de las cosas de río arriba, se determinó que Francisco Ruiz, con la más gente que pudiese, se fuese donde quedaba Gonzalo de Mendoza, que era el puerto de Nuestra Señora de la Asumpción, a rehacerse de comida, por haber informado Salazar que había en cantidad, y los naturales haber dado la amistad y trato con nuestros españoles: con lo cual se puso en efecto, embarcándose en sus navíos toda la gente que cupo. Fue caminando para Corpus Christi, donde llegado que fue, sacó la mitad de la gente que allí había para llevarla consigo: con la cual, y la que él tenía, siguieron su viaje, llevando en su compañía al contador Felipe de Cáceres, que quedó con el oficio de su hermano, y al tesorero García Venegas, y otros hombres principales: dejando en su lugar en Buenos Aires al capitán Juan de Ortega. Y siguiendo su derrota, pasaron grandes trabajos y necesidades hasta que llegaron a la casa fuerte, donde hallaron al capitán Gonzalo de Mendoza en grande amistad con los indios Guaranís de aquella comarca; aunque la tierra muy falta de comida, procedido de una plaga general de langosta que había talado todas las chácaras, con lo que Francisco Ruiz y los de su compañía quedaron muy tristes. En esta coyuntura llegó de arriba Domingo de Irala con sus navíos, porque habiendo aguardado al general Juan de Oyolas más de ocho meses, la necesidad de comida le obligó a bajarse a rehacerse de lo necesario, y a dar carena a sus navíos que estaban muy mal parados, y así le fue forzoso llegarse a este puerto, donde Francisco Ruiz y él tuvieron algunas competencias, de que resultó el prender a Domingo de Irala; e interviniendo aquellos caballeros, fue luego suelto. De esta prisión resultó que Domingo de Irala con toda prisa se volvió río arriba, por ver si había alguna nueva del general Juan de Oyolas, a quien dejaremos por ahora. Volviendo al capitán Francisco Ruiz, que habiendo recogido alguna comida, se volvió a Buenos Aires, y llegando a la fortaleza de Corpus, donde estaba por cabo el capitán Alvarado, propuso determinadamente dar sobre los indios Caracarás, sin otra más razón que decir favorecían a unos indios rebelados contra los españoles. Y sin acuerdo\n\n\n\n\n\n",
  id: 47
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 46",
  chapter: "Capítulo XIV",
  layout: "textoporpagina",
  content: "\n    \nacuerdo ni parecer de los demás capitanes, habiéndolos asegurado con buenas palabras, dio en ellos una madrugada, y quemándoles sus ranchos, mató gran cantidad, y prendiendo mucha suma de mujeres, y demás chusma, lo repartió todo entre los soldados. Hecho esto, se partió con su gente para Buenos Aires, llevando al capitán Alvarado, en cuyo lugar dejó a Antonio de Mendoza con 100 soldados. Llegado a Buenos Aires, halló que de Castilla, había llegado a aquel puerto, por orden de Su Majestad, el veedor Alonso Cabrera con una nao llamada la Marañona, con muchas armas y municiones, ropa y mercaderías que habían despachado ciertos mercaderes de Sevilla, que se habían obligado de hacer este proveimiento al gobernador don Pedro de Mendoza: y así mismo vinieron algunos caballeros y soldados, y entre ellos el más conocido, Antonio López de Aguilar y Parata, y Antón Cabrera, sobrino del veedor. Luego que desembarcaron, se determinó volver a despachar la misma nao a dar aviso a Su Majestad del estado de la tierra, y para el efecto se embarcaron Felipe de Cáceres y Francisco de Alvarado. Y ellos partidos, se tuvo nueva que el capitán Antonio de Mendoza estaba en muy notable aprieto en su casa fuerte del Corpus, porque los indios comarcanos, lastimados de lo que con los Caracarás había usado Francisco Ruiz, procuraron vengarse; y así habían ya muerto 4 soldados. Y no contentos con esto, y para hacerlo más en forma, cautelosamente enviaron ciertos caciques al capitán, disculpándose de lo sucedido, y echando la culpa a unos indios con quienes decían estaban encontrados, por ser ellos amigos de los españoles. Y pues lo eran, y aquellos sus enemigos venían sobre ellos, les socorriese; que de no hacerlo, se temían ser maltratados; y vístose sin remedio, por evadirse de la muerte, sería fuerza aunarse con aquel enemigo, y dar tras los españoles, cuya culpa sería suya, pues siendo sus amigos no le socorrían. Al fin, de tal manera supieron hacer su negocio, y con tanto disimulo, que el capitán se vio forzado a darles 50 soldados, que fuesen con ellos, a cargo de su alférez Alonso Suárez de Figueroa. El cual habiendo salido, fue caminando con buen orden hasta ponerse a vista del pueblo de los indios, que distaba poco más de dos leguas del fuerte. Y entrando en un bosque, que antes del pueblo estaba, sintieron ruido, y era de la gente emboscada que los estaba aguardando; y acometiéndoles por las espaldas, les arremetieron tan furiosamente, que sacándolos a lo raso, les dieron gran rociada de flechas, de que quedaron muchos heridos; y como estaban, revolvieron sobre ellos con mucho esfuerzo, y mataron muchos de los indios. En\n\n\n\n\n\n",
  id: 48
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 47",
  chapter: "Capítulo XIV",
  layout: "textoporpagina",
  content: "\n    \ncuyo tiempo llegaron de refresco otros escuadrones de la parte del pueblo, con que quedaron en medio los nuestros: los cuales vístose tan apretados y algunos muertos, los demás aunque heridos se fueron retirando desordenadamente, y así tuvieron los indios mejor ocasión de acabarlos sin que quedase ninguno, con notable crueldad. Alcanzada esta victoria, la procuraron llevar adelante: para lo cual cercaron el fuerte más de dos mil indios, perseverando en él, hasta que vieron buena ocasión y le asaltaron, y de primera instancia fue herido el capitán Mendoza de un picazo que le atravesaron por una ingle, y apretaron tan fuertemente a los del fuerte, que a no remediarlo Nuestro Señor, sin ninguna duda ganaran aquel día el fuerte, pereciendo todos en él. Y fue el auxilio de esta manera: que estando en su mayor fuerza el asalto, llegaron dos bergantines en que venían el capitán Simón Jaques, y Diego de Abreu, y oyendo la gritería y bocinas de los indios, reconocieron lo que podía ser, y desde afuera comenzaron a disparar los pedreros, versos y demás artillería que traían en los bergantines, asestando a los escuadrones de los indios, con que hicieron gran riza. Y saltando en tierra con gran determinación, tomando los capitanes la vanguardia, peleando cara a cara con el enemigo a espada y rodela, le rompieron de manera que le fue forzoso desamparar el puesto. Y visto por los del fuerte, tuvieron lugar de salir a pelear, y lo hicieron con gran valor, hiriendo y matando a cuantos encontraban, con lo que se puso el indio en huida, mostrando en esta ocasión los soldados el valor de sus personas, en especial Juan de Paredes, extremeño, y Damián de Olavarriaga, vizcaíno, Campuzano, y otros que no cuento. Quedaron muertos en el campo más de cuatro cientos indios, y a no hallarse nuestros españoles tan cansados, sin duda ninguna los acabaran a todos, según estaban de desordenados y rendidos, y atónitos de una visión que, dicen, vieron en un torreón del fuerte un hombre vestido de blanco, con una espada desnuda en la mano, que les cegaba con su vista, de que atemorizados caían en tierra. Fue este suceso a 3 de Febrero, día del bienaventurado San Blas, de quien siempre se entendió haber recibido este socorro los nuestros, como otras muchas veces lo ha hecho en aquella tierra, de donde se tiene con él gran devoción, y le han recibido por patrón y abogado. Concluido el suceso, se recogieron los españoles, los cuales unos\n\n\n\n\n\n",
  id: 49
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 48",
  chapter: "Capítulo XV",
  layout: "textoporpagina",
  content: "\n    \na otros se daban mil parabienes, recibiéndose con lágrimas de amor y consuelo. Y entrados en el fuerte, hallaron a Antonio de Mendoza que estaba agonizando de su herida, a quien Nuestro Señor fue servido dar tiempo para poder confesar con un sacerdote que venía en los bergantines, y luego que recibió la absolución, pasó de esta vida. Al punto, los que en ellos venían, manifestaron la orden que traían de Francisco Ruiz, que fue que, en caso que conviniese, llevasen en ellos la gente que allí había, por recelo de algún mal suceso; que de unos indios que cogieron en el río de Luján, en cuyo poder hallaron una vela de navío, armas y vestidos ensangrentados, se temieron fuese de la gente que iba y venía en un bergantín de Buenos Aires a Corpus; que una noche habían cogido los indios, y mataron toda la gente que en él iba. Con cuya ocasión fueron despachados estos dos bergantines con sesenta soldados, y con los capitanes referidos, los cuales llegaron a tan buena ocasión.Capítulo XVDe lo que sucedió a Domingo de Irala, río arriba, y la muerte de Juan de OyolasDespués que Domingo de Irala partió del puerto de Nuestra Señora de la Asumpción con sus navíos, en demanda de alguna nueva del general Juan de Oyolas, llegó al puerto de la Candelaria, y saltando en tierra buscó a la redonda si hallaba algún rastro o señal de haber llegado alguna gente española. No le hallando, pegó fuego al campo por ver si le venían algunos indios, y así aguardaron aquella noche en mucho cuidado, por no haber hallado la tabla que habían dejado escrita Salazar y él. Al otro día de mañana se hicieron a la vela, y tomaron otro puerto más arriba, que llaman de San Fernando; y corriendo la tierra hallaron una ranchería coma alojamiento de gente de guerra; por lo cual se fue con sus bergantines a una isla que estaba en medio del río para alojarse en ella. Allí le vinieron cuatro canoas de indios que llaman Guajarapos, y preguntándoles si tenían alguna nueva de la gente de Juan de Oyolas, respondieron que nada sabían. Estaba Irala con mucha pena, porque la tarde antes un clérigo y dos soldados salieron a pescar, y no habían vuelto; y así otro día saliéndolos a buscar, no pudo hallarlos, aunque corrió toda la costa. Solo topó con un indio y una india payaguás que andaban pescando, y preguntando si habían visto este clérigo y españoles, dijeron que no sabían de ellos. Y así los trajo consigo a la isla, de\n\n\n\n\n\n",
  id: 50
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 49",
  chapter: "Capítulo XV",
  layout: "textoporpagina",
  content: "\n    \ndonde despachó al indio a llamar a su cacique, que dijo estaba cerca con toda su gente, sobre una laguna, que llaman hoy de Juan de Oyolas. Y otro día, como a las dos de la tarde, vinieron dos canoas de indios Payaguás de parte de su cacique, con mucho pescado y carne; y estando hablando con ellos vieron venir de la otra banda cuarenta canoas con más de 300 indios: y tomando tierra en la misma isla a la parte de abajo, el capitán mandó a su gente que estuviesen alerta con sus armas en las manos. Los indios desembarcaron en tierra, y vinieron al real como ciento de ellos sin ningunas armas; y hablando algo apartados, no se atrevían a llegar de temor de los arcabuceros y armas que tenían en sus manos; y que pues ellos no las traían y venían de paz, no era razón que ellos las tuviesen. En esta conformidad dio orden el capitán a su gente las arrimasen por asegurar a los indios; y con este seguro llegaron. Comenzando a hablar, trataron muchas cosas diversas, y entre ellas Domingo de Irala (que receloso de alguna traición, mandó que estuviesen con cuidado los suyos) les preguntó por intérprete, que si sabían de Juan de Oyolas, y le respondieron &quot;ad Efesios&quot; no concordando en nada. Y esparciendo la vista por el real, se iban llegando con muestras de querer contratar con los soldados; y pareciéndoles a los indios que los tenían asegurados, hicieron seña tocando una corneta, y a un tiempo vinieron a los brazos con los españoles, acometiendo primero a Domingo de Irala doce indios, los cuales no procuraban sino derribar a los españoles en tierra, y esto con gran gritería. Mas como el capitán estaba con recelo de lo que sucedió, desenvolviéndose con gran valor con espada y rodela, hiriendo y matando a los que le cercaban, se hizo plaza y socorrió a los soldados, que en aquella sazón estaban bien oprimidos, por ser muchos los que a cada uno acometieron. El primero con quien encontró, fue con el alférez Vergara que le tenían en tierra, al cual libró de aquel peligro; y luego deshació a Juan de Vera de los que le traían a mal traer, y los tres fueron socorriendo a los demás. En este tiempo don Juan de Carabajal, y Pedro Ramírez Maduro, que libres de sus enemigos, valerosamente favorecían a sus compañeros, de manera que ya casi todos estaban en salvo, cuando llegó la fuerza de los enemigos, tirándoles gran número de flechas, y con la gran vocería parecía que la isla se hundía, a los cuales los nuestros se opusieron con grande esfuerzo, con lo que les impidieron la entrada. En este mismo tiempo fueron acometidos los navíos de veinte\n\n\n\n\n\n",
  id: 51
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 50",
  chapter: "Capítulo XV",
  layout: "textoporpagina",
  content: "\n    \ncanoas, y llegaron a término de echar mano a las amarras con intento de meterse dentro, a los cuales resistieron Céspedes y Almaráz, con otros soldados que en los navíos estaban, matando algunos indios, que con atrevimiento quisieron entrar. Haciéndose algo a fuera, dispararon algunos versos y arcabuces, con que trastornando algunas canoas, las echaron a fondo; y viéndose en tal mal paraje, ellos y los de tierra dieron a huir, y los españoles con gran valor los siguieron, matando a su cacique principal, y ellos hirieron de un flechazo en la garganta a don Juan de Carabajal de que murió dentro de tres días. Siguiendo los nuestros el alcance hasta las partes donde tenían las canoas, donde llegados que fueron, se embarcaron en ellas, y pasaron a la otra parte, donde había gran golpe de gente mirando el paradero y fin del negocio. Visto esto por los nuestros, se recogieron a su cuartel, donde hallaron 2 soldados muertos y 40 heridos, y entre ellos el capitán, de tres heridas peligrosas; y todos juntos dieron muchas gracias a Dios Nuestro Señor, por haberlos librado de tan gran peligro y traición. En la refriega quedaron algunos indios mal heridos, de quienes después supieron, como el padre Aguilar, que así se llamaba el clérigo que con los soldados fue a pescar, los habían muerto estos traidores, lo cual todo sucedió el mismo año de 1538. Al siguiente día partió Domingo de Irala para otro puerto que está más arriba, y saltando en tierra reconoció por todas partes, por ver si había alguna muestra de haber llegado gente española: y visto que no, se tornó a embarcar, haciéndose a lo largo, apartado de tierra, donde estuvo aquella noche con buena centinela. Al cuarto del alba, a la parte del Poniente, oyeron unas voces como que llamaban: y para ver lo que era, mandó el capitán a cuatro soldados, que en un batel fuesen a reconocerlo. Llegando cerca de tierra con el recato posible, y a donde se oían las voces, reconocieron un indio, que en lengua española pedía que lo embarcasen: y mandándole subir mas de un tiro de ballesta, porque no hubiese alguna celada, le metieron en el batel, y trajeron a Domingo de Irala. Como llegó el indio, comenzó a derramar muchas lágrimas, diciendo: &quot;Yo, Señor, soy un indio natural de las llanos, de una nación que, llaman Chane; llevóme de mi pueblo por su criado el sin ventura Juan de Oyolas, cuando por allí pasó: púsome por nombre Gonzalo Aquier, y siguiendo su jornada en busca de sus navíos, vino a parar en este río, donde debajo de traición y engaño le mataron estos indios Payaguás con todos los españoles que traía en su compañía. Y aquí, sin poder pasar el indio adelante se quedó. De ahí a un poco algo sosegado, le dijo el capitán, le contase\n\n\n\n\n\n",
  id: 52
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 51",
  chapter: "Capítulo XV",
  layout: "textoporpagina",
  content: "\n    \npor extenso aquel suceso, y respondiendo el indio, dijo: &quot;Que habiendo llegado Juan de Oyolas a los últimos pueblos de los Samocosis y Sivicosis, que es una nación muy política y muy abundante de comida, que está poblada a la falda de la Cordillera de Perú; cargado de muchos metales que había habido de los indios de toda aquella comarca, de los que había sido muy bien recibido, pasando con mucha paz y amistad por otras muchas naciones, que admirados de ver tan buena gente les daban sus hijos e hijas para que les sirviesen, entre los cuales yo fui uno. Con esta prosperidad caminando por sus jornadas, llegó a este puerto, donde no halló los navíos que había dejado, que fue en tiempo que vosotros habíais bajado, y según entiendo, el General quedó muy triste y pesaroso de no hallaros. Los indios Payaguás, y los demás de este río, vinieron a visitarle, y proveyeron de comida. Estando en vuestra espera, los indios Payaguás le dijeron, que se fuese a descansar a sus pueblos, en el ínterin que venían los navíos, de que luego sería avisado de ellos; y allí también le proveerían de comida y de lo demás necesario. Persuadido de sus razones, mandó luego levantar su campo, y fuese al pueblo de los indios, que está distante de este puerto dos leguas: donde alojado su real, estuvo allí algunos días, (con más confianza y menos recato que debía). En cuyo tiempo, los indios disimulando su maldad, les agasajaban y servían con gran puntualidad, hasta que les pareció ser tiempo a propósito para ejecutar su traición.Y así reconociendo su descuido, y que todos estaban durmiendo, dieron sobre ellos mucha cantidad de indios, siendo repartidos en buen orden, tantos indios para cada español (que para como ellos estaban, bastaban aun menos indios que españoles), los cuales sin dejar ninguno, los mataron aquella noche, y solo el general Juan de Oyolas tuvo lugar de escaparse y meterse en un matorral, en el cual al otro día le hallaron unos indios. Y sacándole de él, le llevaron al pueblo, en cuya plaza le quitaron la vida e hicieron pedazos: quedando los indios con tal suceso, ricos de los despojos, y victoriosos de los españoles, de los cuales aquellos bárbaros nombraban algunos de los caballeros que allí perecieron.&quot; Con lo que dio fin a este lamentable suceso, del cual, y de los demás que dijo este indio, se hizo información jurídica, juntamente con lo que se supo, y dijeron algunos indios Payaguás que se cogieron, como todo consta por testimonio de Juan de Valenzuela, ante quien pasó.\n\n\n\n\n\n",
  id: 53
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 52",
  chapter: "Capítulo XVI",
  layout: "textoporpagina",
  content: "\n    \nCapítulo XVIDe lo que sucedió después de la muerte de Juan de Oyolas acerca del gobierno de estas provinciasEn tanto que las cosas sobredichas pasaban el río arriba, no cesaba de ir adelante la cruel hambre de los del puerto de Buenos Aires, que llegó a tal extremo que moría mucha gente. Por lo que muchos se huyeron al Brasil en algunos bateles que para el efecto tomaron, para haber de pasar aquel golfo y tomar tierra en aquella costa, en la cual murieron algunos a manos de indios de ella, y otros de hambre y cansancio, y tal vez hubo hombre que mató a su compañero para sustentarse, al cual yo conocí y se llamaba Vaytos. Visto por los capitanes que quedaron en el puerto la gran ruina, tomaron acuerdo de sacar parte de aquella gente, y llevarla río arriba, adonde estaba Gonzalo de Mendoza, y asimismo para saber nuevas del teniente general y su compañía; para lo cual salió luego Francisco Ruiz con el veedor Alonzo, Cabrera, y tesorero García Venegas, y otros caballeros, dejando en Buenos Aires por cabo de la gente que allí quedaba, al capitán Juan de Ortega; y así con los navíos necesarios se fueron el río arriba con diversos sucesos. Llegados al fuerte de Nuestra Señora, hallaron allí a Domingo de Irala, que había ya bajado con sus navíos como queda referido, el cual informó de la muerte, de Juan de Oyolas con sentimiento bastante, pero ninguno de los capitanes quiso reconocer a otro por superior. Hasta que el veedor Alonso Cabrera, vista la confusión y competencia de gobierno que entre ellos había, sacó una real provisión de Su Majestad, que fue de mucha utilidad en el presente caso, que por parecerme ser necesario para la inteligencia de esta historia, quise poner aquí su tenor, que es el que sigue.&quot;Don Carlos, por la divina clemencia, emperador semper Augusto, rey de Alemania y doña Juana su madre, el mismo don Carlos, por la misma gracia de Dios, rey de Castilla, de León, etc. Por cuanto vos Alonso Cabrera, nuestro veedor de fundaciones de la provincia del Río de la Plata, vais por nuestro capitán en cierta armada a la dicha provincia en socorro de la gente que allá quedó, que proveí en Martín de Orduña y Domingo de Sornoza, que podría ser que al tiempo que allá llegásedes fuese muerta la persona que dejó por su teniente general don Pedro de Mendoza, nuestro gobernador de las dichas provincias, ya difunto; y este, al tiempo de su fallecimiento o antes, no hubiese nombrado Gobernador, o los conquistadores y pobladores no lo hubiesen elegido, vos mandamos que en tal caso, y no en otro alguno\n\n\n\n\n\n",
  id: 54
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 53",
  chapter: "Capítulo XVI",
  layout: "textoporpagina",
  content: "\n    \nalguno, hagáis juntar los dichos pobladores, y los que de nuevo fueren con vos, para que, habiendo primeramente jurado de elegir persona cual convenga a nuestro servicio y bien de la tierra, elijan por Gobernador, en nuestro nombre, y Capitán General de aquella provincia, la persona que según Dios y sus conciencias pareciere más suficiente para el dicho encargo; y al que así eligieren todos en conformidad, o la mayor parte de ellos, use y tenga el dicho cargo, al cual por la presente damos poder cumplido para que lo ejecute cuanto nuestra merced y voluntad fuere.&quot; &quot;Y si aquel falleciere, se torne a proveer en otro por la orden susodicha, lo cual vos mandamos que así se haga con toda paz, y sin bullicio ni escándalo alguno; apercibiéndose que de lo contrario nos tenemos por deservidos, y lo haremos castigar con todo rigor. Y mandamos, que en cualquier de los dichos casos que halláredes en la dicha tierra persona nombrada por Gobernador de ella, le obedezcáis y cumpláis sus mandatos, y le deis todo favor y ayuda.&quot; &quot;Y mandamos a los nuestros oficiales de la ciudad de Sevilla, que asienten esta nuestra carta en nuestros libros que ellos tienen, y que den orden como se publique a las personas que lleváredes con vos a la dicha armada.&quot; &quot;Dada en la villa de Valladolid, a 12 días del mes de Setiembre de 1537 años.−Por la reina, el Dr. Sebastián Beltrán −Licenciado, Juanes de Carvajal− El Dr. Bernal −El Licenciado, Gutiérrez Velásquez.&quot; &quot;Yo, Juan Vázquez de Molina, secretario de su Cesárea y Católica Majestad, la fize escribir por su mandado, con acuerdo de los de su Consejo.&quot; Vista y leída la dicha provisión, convocados todos los Capitanes y Oficiales reales de Su Majestad, la examinaron juntamente, confiriendo los títulos, conducta y comisiones que tenían de sus oficios, y en cuya virtud los usaban y administraban. Por manera que, considerado el que tenía Domingo Martínez de Irala ser el más bastante, y el que Su Majestad en su real provisión corroboraba, por razón del que Juan de Oyolas en su vida y muerte dejó para el gobierno de los conquistadores de la provincia, todos unánimes y conformes le reconocieron por su Capitán General, dándole la superioridad de ella en el real nombre, hasta tanto que Su Majestad otra cosa proveyese, y mandase. Lo cual pasó el año 1538.\n\n\n\n\n\n",
  id: 55
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 54",
  chapter: "Capítulo XVII",
  layout: "textoporpagina",
  content: "\n    \nCapítulo XVIICómo se despobló el puerto de Buenos Aires, juntándose los conquistadores en el de la AsumpciónRecibido los Capitanes en la superior gobernación de esta provincia, como está dicho, Domingo de Irala, luego consultó con ellos el estado que convendría dar en la conservación de los españoles que habían quedado en el puerto de Buenos Aires, y de su parecer fue acordado y deliberado, que, atento la imposibilidad de poderse sustentar aquel puerto por entonces, convenía el desampararle, y agregar toda la gente en un cuerpo para que así pudiesen acudir y conseguir los efectos convenientes, al bien común de la provincia y real servicio; y que pues aquel puerto era el más acomodado que al presente se hallaba, fuesen todos agregados en él lo más breve que se pudiese. El cual acuerdo, siendo todos en uno, se puso por obra, despachando para ello al capitán Diego de Abreu, y al sargento mayor, en tres bergantines y otros bajeles, en que cupiese toda la gente que en Buenos Aires estaba: donde al tiempo que llegaron la hallaron tan enflaquecida y desmayada, que temieron perderla toda. Mas como supieron la determinación que llevaban, y la buena nueva de sustento que había, se animaron no sólo los que antes estaban; más por haber arribado a aquel puesto una nao genovesa, que allí hallaron, que había partido de Italia del puerto de Varase, lugar entre Génova y Savona, con todos los que en ella había. La cual nao vino con designio de embocar por el estrecho de Magallanes y tomar el puerto de los reyes de Lima, y allí cambiar más de cincuenta mil ducados de mercancía que traía. Habiendo embocado por el estrecho, navegaron por él hasta dar vista al mar del Sur, y fue a tiempo que las aguas corrían al del Norte con tanta furia, que no pudiendo romper adelante, fueron lanzados al mar del Norte, donde tomando en aquella costa tierra para hacer agua, la hallaron poblada de una gente muy crecida y dispuesta. Y hecha su aguada, se fueron costeando la tierra para el Río de la Plata, y determinando entrar por el que ya tenían noticia que estaba poblada de españoles, al entrar de dicho río estuvieron en peligro de ser ahogados todos, por haber tocado en un banco que hace a la entrada del Riachuelo, donde se perdió dicha nao, con gran parte de la hacienda que traía; y como llegaron, acompañaron a los que allí estaban en la misma hambre y necesidad. Venía por capitán de la nao un fulano Palchando, cuyo apellido se quedó a la nao, llamándola Palchanda. Venían algunos italianos nobles, como fue Perantón de \n\n\n\n\n\n",
  id: 56
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 55",
  chapter: "Capítulo XVIII",
  layout: "textoporpagina",
  content: "\n    \nPerantón de Aquino, Tomaz Rizo, Bautista Trocho, y algunos otros extranjeros sin la gente de cuenta. Y como vieron el socorro que los bergantines llevaban, como dije, se alentaron y todos en buena conformidad se embarcaron y vinieron río arriba, aunque con mucho trabajo, por ser la navegación tan larga, y que en el camino encontraron un socorro de comida que el General les despachó, suficiente hasta llegar al puerto de la Asumpción: donde como llegaron fueron, todos agregados y recogidos en forma de república. Situáronse y tomaron puesto cerca de la casa fuerte, donde se cercaron, y cada uno procuró hacer donde recogerse: el cual cerco con mucho cuidado mandó hacer el General, y de muy buena madera, para que allí estuviesen defendidos, y ellos pudiesen ofender si alguna cosa se ofreciese: procurando se proveyese de lo necesario al buen gobierno de esta república. A todo lo cual acudía el General con el acierto y prudencia que de él se podía esperar, así con su persona, como ayudándose de los indios naturales de la tierra, y de toda la comarca y provincia, que todos le acudían. Con que vino a poner las cosas de ella en el mejor estado que le fue posible, conservando la amistad de los caciques e indios principales; y de lo demás sucedido se dirá adelante.Capítulo XVIIICómo juntos todos los conquistadores en el puerto de la Asumpción, los indios intentaron matarlosHabiendo el general Domingo de Irala asentado la república de los españoles con la comodidad y orden más conveniente que le fue posible para su conservación, hizo copia de la gente, y halló que había 600 soldados por todos, de los 2400 que habían entrado a aquella conquista con los de Sebastián Gaboto; y aunque muy faltos de vestidos y municiones, y otros pertrechos necesarios, al fin estaban con más comodidad que nunca, con la providencia que el General tenía, supliendo con su misma hacienda las necesidades de todos, y ayudándose en lo que podía de los indios comarcanos, a los cuales hizo llamamiento, y juntos les procuró dar a entender las cosas de nuestra Santa Fe y buena policía, junto, con lo que debían hacer en servicio de Su Majestad, y la observancia que debían tener con la lealtad que estaban obligados como a soberano Señor, lo cual todo aceptaron de buena voluntad, sometiéndose el señorío real; y como tales vasallos se ofrecieron acudir en todo lo que se les mandase en su real nombre.\n\n\n\n\n\n",
  id: 57
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 56",
  chapter: "Capítulo XVIII",
  layout: "textoporpagina",
  content: "\n    \nEn esta conformidad en las ocasiones que se ofrecieron se mostraron, en especial en la guerra que el General hizo a unos indios llamados Yapirús, antiguos enemigos de Guaranís y españoles; y en la jornada que hizo, reducción y visita de los pueblos del Ibitirucuy y Tibicuarí, y Mondás con los del río arriba, dejándolos a todos asentados y en buena amistad, en que se conservaron hasta el año de 39, que se conjuraron contra el español, tomando ocasión de haberles hecho algunos españoles menguas, agravios y demasías; y como gente inconstante y de poca lealtad, con facilidad se dispusieron a quebrantar la fe. Así jueves santo en la noche, al tiempo que estaba para salir la procesión de Sangre, habiendo usado de una estratagema de ir entrando días antes en el pueblo en tropas, so color de venir a la Semana Santa a tenerla con los españoles, se juntaron más de ocho mil indios, y estando ya para dar en los españoles y acabarlos, fue Nuestro Señor servido de proveer el remedio por vía de una india que tenía en su servicio el capitán Salazar, hija de un cacique. La cual, habiendo entendido la traición, dio parte a su amo, y él con todo secreto avisó al General, y visto por él el gran riesgo en que todo estaba de ser acabados, tomó un medio muy bueno, de hacer tocar una alarma falsa, fingiendo que venían los indios Yapirús sobre el pueblo, y que estaban a dos leguas no más; y que así se juntasen todos los caciques y gente, de suerte que se ordenase lo que se debía hacer. Y así se fueron juntando todos en casa del General, donde como iban llegando les iban echando mano y metiendo en prisión, sin que los unos supiesen de los otros. Cuando ya los tuvo a todos presos, fulminó proceso, y hecha la averiguación del delito, a todos los más principales de esta conjuración mandó ahorcar y hacer cuartos, dando a entender la causa porque aquella justicia se hacía. Con lo cual ellos quedaron castigados, y los demás escarmentados y agradecidos. De allí adelante les españoles fueron temidos y estimados de los indios, y al General en su opinión le tuvieron por hombre de valor, y juez que castigaba a los malos, y a los buenos premiaba y estimaba: y así le cobraron grande amor y obedecíanle como era justo; y en agradecimiento, a los capitanes y soldados daban sus hijas y hermanas para que les sirviesen, estimando en mucho tener por este medio deudos con ellos, y así les llamaban cuñados, como se ha quedado hasta ahora este lenguaje entre ellos. Tuvieron de las mujeres que les dieron los naturales a los españoles, muchos hijos e hijas, a los cuales criaron en buena doctrina y policía, y Su Majestad ha sido servido de honrarlos, haciéndolos encomenderos, y ocupándolos en cargos honrosos\n\n\n\n\n\n",
  id: 58
});
index.addDoc({
  section: "Libro I",
  subtitle: "página 57",
  chapter: "Capítulo XVIII",
  layout: "textoporpagina",
  content: "\n    \ny preeminentes en aquella provincia; y ellos le han servido con mucha fidelidad, con sus personas y haciendas, y con los otros españoles y españolas que después vinieron, y se dirá adelante: con que se ha aumentado y amplificado la real corona. El día de hoy ha llegado a tanto el multiplico y procreación, que se han fundado en aquella gobernación de sola aquella ciudad, ocho colonias de pobladores, correspondiendo todas a la antigua nobleza de donde proceden. Son comúnmente de gran valor y ánimo, inclinados a la guerra y a las armas, las cuales manejan con mucho acierto y destreza; en especial la escopeta ejercitan más que otras armas: y así cuando salen a sus jornadas se sustentan de la caza, la cual matan volando las aves a bala rasa; y es en tanto exceso su destreza, que al que no mata de un tiro, aunque sea un gorrión, es reputado por mal arcabucero. Son también buenos hombres de a caballo de ambas sillas, y por su entretenimiento doman un potro; sobre todo, muy obedientes a sus mayores, y leales con Su Majestad. Las mujeres son de buen parecer, hábiles en la labor y costura; nobles, de condición afable, discretas, y sobre todo virtuosas y honradas. Por todo lo referido ha venido aquella provincia en grande aumento, como se dirá en el discurso de este tratado subsecuente; y aquí da fin este primer libro.\n\n\n\n\n\n",
  id: 59
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 59",
  chapter: "Capítulo I",
  layout: "textoporpagina",
  content: "\n    \nLibro IIDe lo sucedido en esta conquista desde el año de 1540, que entró el Adelantado Álvaro Núñez Cabeza de Vaca, hasta la venida de don Fray Pedro de la Torre, primer obispo de ellaCapítulo ICómo salió de Castilla el Adelantado, y del discurso de su viajeSon a las veces tan adversos los sucesos de las empresas, que entendiendo salir de ellas con honra y acrecentamiento, vienen a dar en lo ínfimo de miserias e infortunios. De esta suerte sucedió a nuestros españoles en la conquista y descubrimiento del Río de la Plata, de donde pensando volver prósperos y ricos, sucedió tan al contrario, que de todos, ninguno volvió remediado a su natural: acabando todos o los más sus vidas cruel y miserablemente, como parece en el discurso del libro I; en que, si mal no me acuerdo, traté como fue despachada del puerto de Buenos Aires para España la nao Marañona en que vino Alonso Cabrera al socorro de los conquistadores de esta provincia; la cual llegó a Castilla, a tiempo que así mismo acababa de llegar de la Florida Cabeza de Vaca. Y porque en este libro he de tratar algunos sucesos suyos, diré en breve lo que de él se ofrece. Era este caballero natural de Jerez de la Frontera, y vecino de la ciudad de Sevilla, nieto del Adelantado Pedro de Vera, el que conquistó las islas de la Gran Canaria, que habiendo gastado en esto su patrimonio por acudir con él sin faltar al servicio de Su Majestad, empeñó dos hijos suyos a un moro alcaide por cierta cantidad de dinero: los cuales estuvieron en su poder, hasta que los Reyes Católicos los sacaron del empeño. Estos caballeros fueron padre y tío de este caballero, como constó por una probanza que presentó en el Real Consejo. Pasó Álvaro Núñez a la Florida por tesorero de Su Majestad con el gobernador Pánfilo de Narváez, que fue a aquella conquista con cantidad de españoles: el cual habiendo perecido con la mayor parte de su gente, la restante quedó en poder de los indios de aquella tierra, gente caribe y cruel. Fueron todos comidos de ellos, excepto Álvaro Núñez Cabeza de Vaca, y un esclavo suyo de nación moreno\n\n\n\n\n\n",
  id: 60
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 60",
  chapter: "Capítulo I",
  layout: "textoporpagina",
  content: "\n    \nEstando los dos en este cautiverio entre tan mala gente, fue el Señor servido de darle don de hacer cosas miraculosas, como fueron el sanar enfermos, dar vista a los ciegos, y lo que más es, resucitó un muerto con solo tocarle, diciendo: &quot;En el nombre del Padre, del Hijo y del Espíritu Santo&quot;, tan grande era su fe! Con que vino a tener tanto crédito y estimación entre aquellos bárbaros, que le tenían por santo; y así le eligieron por su capitán; y de cautivo, libre y señor. El cual reconociendo su poder, determinó atravesar desde aquella provincia hasta la Nueva España, que dista hartas leguas, donde ya había españoles. Y puesto por obra, salió con su intento, y llegó a la ciudad de México, tardando en el viaje diez años, todos de peregrinación y cautiverio, sin que en todo este tiempo hubiese perdido la letra dominical, ni la cuenta del calendario, que fue prueba de gran memoria y cristiandad. De donde se embarcó el dicho año para Castilla, y llegado que fue, pretendió que Su Majestad le hiciese merced de la gobernación del Paraguay con título de Adelantado; y Su Majestad se lo concedió con ciertas capitulaciones, que fueron que había de continuar el descubrimiento, población y conquista de aquellas tierras; para lo cual Su Majestad nombró capitanes que levantasen gente. Lo cual se hizo, y él se obligó al cumplimiento. Puesto todo a pique, partió de San Lucar en cinco navíos de armada el año de 1540, y navegando por ancho mar, tocó en la Gran Canaria, y Cabo Verde; y prosiguiendo su derrota, llegó a la línea equinoccial donde tuvo grandes calmas; y refrescando el temporal, siguió su derrota revolviendo al Austro, hasta voltear el Cabo de San Agustín: y siguiendo su viaje se puso en 28 grados, de donde se fue del Este a Oeste a tomar el puerto de Santa Catalina. Desembarcó e hizo reseña de su gente, y halló que traía 700 hombres con la gente de la mar, en los que venían muchos caballeros, hidalgos y personas de calidad. Y porque me ha de ser forzoso tratar de algunos en este libro, haré mención de ellos, que son: un primo del adelantado, llamado Pedro de Estopiñán, que el común le llamaba Pedro Vaca: Alonso Riquelme de Guzmán, su sobrino; Alonso de Fuente, hijo de un veinte y cuatro de Jerez, y Antonio de Navarrete, don Martín de Villavicencio y Francisco de Peralta. De Sevilla, Rui Díaz Melgarejo y Francisco de Vergara, su hermano, Martín Suárez de Toledo, Hernando de Saavedra, hijo del correo mayor de aquella ciudad, Pedro de Esquivel y Luis de Cabrera. De la de Córdoba, Alonso de Valenzuela, Lope de los Ríos, Pedro de Peralta, Alonso de Angulo y don Luis de Rivera. De Castilla la Vieja, el capitán García Rodríguez de Vergara\n\n\n\n\n\n",
  id: 61
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 61",
  chapter: "Capítulo I",
  layout: "textoporpagina",
  content: "\n    \nGarcía Rodríguez de Vergara, natural de Ontiveros, el factor Pedro de Orantes, por contador Felipe de Cáceres. De Madrid, el capitán Camargo, Juan Delgado, capitán Agustín de Campos, de Almodóvar, Jaime Resquin, natural de Valencia. De Trujillo, Nuflo de Chaves, Luis Pérez de Bargas y Herrera. De San Lúcar de Barrameda, Francisco de Espínola, hijo del alcaide de aquel castillo. De Vizcaya y provincia de Guipúzcoa, Martín de Urua, Ochoa e Izaguirre; Miguel de Urrutia y Estigariaya. Venía por alcalde mayor, Juan Pavón, natural de Badajoz; y por su lugar teniente, Francisco López el indiano, natural de Cádiz, sin otros muchos hidalgos y demás gente ordinaria de que no hago mención. Halló el Adelantado en este paraje dos españoles, de los de la armada de don Pedro, que con el hambre y malos tratamientos de los capitanes de Buenos Aires habían venido huidos; el uno de los cuales era de quien se dijo haber comido a su compañero. De estos se informó el Adelantado de los sucesos de la provincia, con lo que, y acuerdo de los capitanes, se determinó el ir por tierra desde aquel paraje hasta la Asumpción, donde residían los conquistadores; y que los navíos, con la gente de la mar, y alguna otra impedida, con las mujeres, se fuesen por la mar hasta tomar el Río de la Plata, dejando las dos naos más gruesas en San Gabriel. Con este acuerdo envió el Adelantado al factor Pedro de Orantes a que le descubriese el camino: el cual saliendo a lo raso y pinales, topó con mucha gente, natural, con quien trabó amistad; y reconocida la tierra, dio vuelta a dar aviso al Adelantado de lo que había visto. Con cuya relación hizo su entrada por esta vía, tornando por un río llamado Itabucú, por el cual llevó algunas canoas hasta un puerto donde desembarcó, y juntos con los que iban por tierra, prosiguió su viaje, rompiendo por unos bosques muy espesos y cerrados, con grandísimo trabajo. Al cabo de 40 días salió a un alto, y bajando a lo raso le salieron los indios de aquella comarca, que llaman de Tatúa, a recibirle; con quienes de nuevo confirmaron la paz y amistad: los cuales servían a los españoles de buena voluntad, y les proveían de toda la comida necesaria, aunque eran más de quinientos hombres, los cuales llevaban 20 caballos. Y yendo caminando el Adelantado por aquella tierra otras quince jornadas, llegó a un gran río que llaman Iguazú, el cual atravesó tres veces con mucho trabajo, por tener grande corriente; y de allí prosiguió adelante otras seis jornadas, y dio con otro río llamado Ativajiba, muy poblado de naturales, donde está un gran pueblo de un indio principal que se dice Abaparí, toda gente guaraní.\n\n\n\n\n\n",
  id: 62
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 62",
  chapter: "Capítulo I",
  layout: "textoporpagina",
  content: "\n    \nVista la mucha que había en aquella comarca, hizo el Adelantado armar una fragua que llevaba, para labrar algún rescate de hazuelas, cuñas, cuchillos, escoplos, agujas y anzuelos, que todo se estima de estos naturales, para cuyo efecto hizo llevar hasta diez y seis quintales de fierro, repartido en pedazos de a cuatro libras entre los soldados; y proveído de comida fue de Este a Oeste en demanda de un río que llaman Ubay, y bajando a los indios que estaban poblados en sus riberas, fue muy bien recibido de ellos, los cuales le ayudaron. Pasando adelante, y caminando muchas jornadas por tierra muy fragosa y montuosa, llegó a un río llamado Piquirí, donde hizo alto algunos días, y volvió a asentar la fragua para proveerse de rescate con que atraer a los naturales, para obligarles a que hiciesen lo mismo que los que traía consigo, que lo acompañaron y ayudaron en aquel viaje, a los cuales despidió con agrado, y ellos se volvieron con el propio a su tierra. De ahí a poco salió de este asiento, y caminando otras veinte jornadas bajó al río del Paraná, treinta leguas abajo de un gran arrecife que llaman el Salto, de que ya tengo hecho mención; donde se informó de los naturales por extenso del paraje donde estaban los españoles de asiento, con cuya relación se determinó a despachar algunos enfermos o impedidos por el río, con el capitán Nuflo de Chaves; el cual, bajando en canoas y balsas, llevó orden para que diese vuelta por el río del Paraguay arriba, hasta juntarse con él en la Asumpción. El Adelantado se partió, tomando la vuelta del Poniente, por un río llamado el Monday; y cortando por aquella tierra, llegó a la comarca de la Sierra de Ibitirucú, donde le salieron todos los indios a recibir con mucha alegría. Llegado a los pueblos del Acay, despachó sus cartas al general Domingo de Irala, dándole aviso de su venida y de los despachos que traía de Su Majestad para el gobierno de aquellas provincias. Los cuales recibidos y vistos por los capitanes que estaban en la Asumpción, mandó luego el General saliesen al camino a besar la mano al Adelantado los capitanes Juan de Ortega, Alonso Cabrera y Juan de Salazar de Espinosa; lo cual cumplieron de muy buena voluntad y grande aplauso de unos y otros. Conferido con el Adelantado algunas cosas del real servicio, dieron vuelta a la Asumpción a dar razón al General de su embajada, y de lo que les fue cometido: y satisfecho de todo, mandó luego prevenir para su recibimiento, del cual y de algunas circunstancias que pasaron, se hará mención adelante. Entró el Adelantado en este lugar el año de 1541, con gran\n\n\n\n\n\n",
  id: 63
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 63",
  chapter: "Capítulo II",
  layout: "textoporpagina",
  content: "\n    \ncontentamiento de todos, porque a más de la afabilidad y buena condición que tenía, con otras muy buenas partes, era muy amado de todos, y tenido por hombre de gran gobierno y prudencia, como lo ha mostrado en el discurso de esta jornada tan larga y trabajosa, en la cual, habiendo atravesado más de 400 leguas, no había perdido tan solo un soldado, ni hombre de su armada; que fue de tanta felicidad, cuanto después infeliz y desgraciado.Capítulo IIDe lo que hizo el Adelantado después que llegó este puerto y de lo sucedido en la tierraLuego que fue recibido el Adelantado y su gente con el mayor aplauso que se ha dicho, y visto y examinado las provisiones y cédulas reales, por los capitulares y demás personas fueron obedecidas y cumplidas en todo: y habiéndose dado orden al hospedaje de la gente, se despachó un socorro de comida al resto que venía por el río con el contador Felipe de Cáceres, con toda brevedad. Salió al efecto el capitán Diego de Abreu, y llegó a tan buen tiempo que se encontró con los navíos por bajo de las Siete Corrientes cuando más el socorro era menester: porque venían tan necesitados de bastimento que solo se sustentaban con yerbas, raíces, y algún marisco que hallaban por la orilla, trabajando de noche y día a remo y sirga; de manera que fue Dios servido llegasen todos con bien a este puerto donde se hallaron juntos más de 1300 hombres. En esta ocasión, nombró el Adelantado por su maestre de campo a Domingo de Irala, cuyo nombramiento fue aprobado de todos; al cual despachó luego río arriba con 300 soldados para que pasase adelante del puerto de Juan de Oyolas, y descubriese otro de más consideración, por el cual pudiese hacer una entrada al Occidente, para poderse comunicar con el reino del Perú, como lo habían tratado en España Vaca de Castro y él: y saliendo el maestre de campo a la jornada en sus navíos, subió el río del Paraguay arriba 250 leguas, dejando atrás más de ciento la laguna de Juan de Oyolas, llegando a los indios que dicen Orejones, a cuyo puerto llamaron de los Reyes: y procurando por todos los medios posibles atraer aquella gente natural a buena amistad y comunicación, se informó de ellos del gran número de indios que por allí dentro había, con lo cual se volvió a dar cuenta al Adelantado de lo descubierto, con esperanzas de buen suceso en lo que se pretendía. \n\n\n\n\n\n",
  id: 64
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 64",
  chapter: "Capítulo II",
  layout: "textoporpagina",
  content: "\n    \nEn este mismo tiempo se ofreció el salir al castigo de ciertos indios rebelados en la provincia del Ipané, que tomaron las armas contra el español, cuya causa fue haber enviado el Adelantado ciertos mensajeros a un pueblo llamado Taberé, donde supo que estaba aquel hijo de Alejos García, portugués, de quien arriba se trató, para que se lo trajesen, y dijesen a los indios de aquel pueblo que lo hiciesen placer de que luego se lo despachasen, con cargo de satisfacerselo. Los cuales no solamente rehusaron cumplir el mandato, antes con gran soberbia y poco respeto prendieron a los mensajeros, y al día siguiente públicamente los mataron, diciendo: así cumplimos lo que se nos envía a mandar por ese capitán: y si los españoles se sintiesen de este agravio, vengan a satisfacerse que aquí les aguardamos: cuya respuesta enviaron con uno de los mensajeros que para este efecto dejaron. Sabido por el Adelantado este atrevimiento y libertad, despachó al castigo a su sobrino Alonso Riquelme con 300 soldados y más de mil amigos; y llegando al pueblo, halló que estaban juntos en un gran fuerte de madera más de ocho mil indios, y habiéndoles requerido con la paz a que se redujesen al servicio de Su Majestad, como lo habían prometido, no lo quisieron hacer antes salieron una alborada a dar en los españoles una arremetida con brava determinación, a la cual resistieron valerosamente los nuestros, matando muchos de los enemigos, hasta que se pusieron en huida. Y saliendo el capitán Camargo con su compañía y 400 amigos a buscar comida a las chácaras más cercanas, fueron otra vez acometidos de los indios cuando ya se volvían; tomándoles un estrecho paso donde se peleó de ambas partes con gran porfía: hasta que un soldado, llamado Martín Benzón, mató de un arcabuzazo a un indio principal muy valiente que manejaba los escuadrones; con cuya muerte desampararon el puesto y se pusieron en huida, con pérdida de mucha gente suya y nuestra: y con esto fue forzoso poner cerco al fuerte y asaltarle a fuerza, previniéndose primero de lo necesario, haciendo algunos pavesados, a cuyo amparo pudiesen llegar a las palizadas y trincheras de los indios. Y estando a pique para dar el asalto y romper las palizadas, salieron los indios por dos partes, cerrando con gran denuedo con los nuestros, ganándoles hasta llegar a la plaza de armas, donde los resistieron y echaron fuera. Mostrándose en esta ocasión con gran valor el capitán Alonso Riquelme, el cual ordenó saliesen dos mangas de soldados y amigos a pelear con ellos: y ocupándoles el paso, se trabó una escaramuza muy sangrienta, en que fueron muertos más de 600 indios, hasta que con la fuerza del sol, y su calor se recogieron unos y otros, retirándose los indios a su palizada. Otro día enviaron a pedir que se les diese tres días de tregua\n\n\n\n\n\n",
  id: 65
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 65",
  chapter: "Capítulo II",
  layout: "textoporpagina",
  content: "\n    \npara deliberar lo que debían hacer en razón de dar la paz: la cual se les concedió con acuerdo de todos los capitanes, por más justificar aquel negocio; tornándoles a requerir se sometiesen a la real obediencia, y que se les perdonaría lo pasado. Y visto por los nuestros que pasaba el término, y que el haberlo pedido fue para rehacerse, como lo hicieron, de mucha comida y fuerza de gente que les entró por tierra y por el río, se resolvieron a darles un terrible asalto, pasado ya el tercero día de la tregua: haciendo para el efecto dos medios torreones de madera muy fuertes sobre unas ruedas, los cuales sobrepujaban su fuerte; y hechas sus troneras para por ellas poder a su salvo jugar su arcabucería, y acabado todo, antes que amaneciese, se les dio el asalto por tres partes, porque por la del río, no hubo lugar, por estar una muy grande barranca: encargando uno de los puestos al capitán Rui Díaz Melgarejo, el otro a Camargo con sus compañías, y la parte del campo tomó Riquelme; los cuales todos a un tiempo cerraron; y llegando a la palizada, se comenzó a pelear con los enemigos que de sus trincheras se defendían, haciendo en los nuestros mucho daño, hiriéndolos y maltratándolos hasta que los torreones se acercaron a la palizada y trinchera, y arcabucearon a los indios que peleaban de dentro, con que se dio lugar a que los nuestros que iban en las pavesadas y adargas, rompiesen las palizadas con las hachas y machetes que llevaban: lo que hicieron y entraron en el fuerte con grande ánimo; y a la parte que tocó al capitán Camargo, andaban los indios muy insolentes por haberle herido de un flechazo y muerto dos soldados; a cuyo tiempo entró por la palizada a socorrerle el alférez Juan Delgado con algunos soldados, ganándoles un baluarte en que estribaba toda su fuerza. Así mismo por el otro lado el capitán Melgarejo estaba apretado, con riesgo y dificultad de poder entrar en el fuerte, por estar de por medio un foso muy ancho, que para poderle pasar fue necesario poner unos maderos; y al tiempo que iban pasando y rompiendo la palizada para poder entrar, salieron dos mangas de indios del fuerte a impedírselo, que cerrando por ambas partes con los nuestros, les dieron una gran rociada de flechería con que quedaron maltratados. Los cuales, viendo la fuerza con que el enemigo venía, con gran denuedo revolvieron sobre ellos, amparándose de su misma palizada; y aunque perseveraron los indios de fuera y los de dentro a flecharlos, se valían de sus arcabuces y ballestas, dándoles tanta prisa que tuvieron por bien de retirarse y entrarse en el fuerte: y sabido por Alonso Riquelme, que estaba a la parte del campo, bien armado con su\n\n\n\n\n\n",
  id: 66
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 66",
  chapter: "Capítulo II",
  layout: "textoporpagina",
  content: "\n    \ncota, celada, y rodela, con su espada en la mano, yendo delante acaudillando sus soldados, entró dentro, matando con los suyos a cuantos encontraban. Y a este tiempo la gente de Camargo pegó fuego a las casas cercanas al fuerte, y corriendo el incendio con gran violencia, llegaba ya cerca de una plaza donde estaba toda la fuerza de los contrarios, que con grande esfuerzo defendían las bocas de las calles; y rompiendo los nuestros por ellos, ganaron la dicha plaza matando a muchos de los enemigos, los cuales se hicieron fuertes y se pusieron a defender la casa del cacique principal, donde estaban apiñados más de cuatro mil indios, que hacían gran resistencia, sin poderlos romper nuestra gente. Hasta que llegando Melgarejo con su compañía por un lado, les fue apretando fuertemente; los cuales vístose tan acosados, con una rabia infernal cerraron todos juntos desesperadamente con los nuestros, matando dos soldados e hiriendo a otros muchos, se retiraron a la playa donde se ampararon de las barrancas del río; y acudiendo a ellos Riquelme con los demás que le seguían, les apretó de manera que se huían por donde podían, echándose en el río, y salvándose los que podían en algunas canoas que allí hallaron, quedando muchos de ellos muertos. Y hecha esta facción con tan buen suceso, acudió al pueblo, donde todavía se peleaba con la gente que dentro de la casa del cacique la defendía, que era muy grande y fuerte; de manera que a buen rato de pelear la entraron los nuestros por todas sus puertas, matando a cuantos la defendían sin dejar ninguno a vida, andando los indios amigos en esta ocasión por todo el pueblo saqueando y matando a cuantos topaban, mujeres y niños, con tanta saña, que parecía exceso de fieras más que venganza de hombres de razón, sin moverles a clemencia tan grandes alaridos y clamor de tantos como mataban, que era en tanto grado que no se oía otra cosa en todo el pueblo. Y acabado todo, los capitanes recogieron su gente en la plaza, donde ser alojaron; y puestos en un montón todos los despojos, y traídos allí todos los cautivos que había, se repartió todo a los soldados: hallándose de solas mujeres y niños más de tres mil, y muertos más de cuatro mil: y de los nuestros solo faltaron cuatro españoles, y como ciento cincuenta indios amigos, aunque muchos heridos: con que el Señor fue servido se diese fin a esta victoria, que sucedió a 24 de julio, víspera del Apóstol Santiago, año de 1541. Luego todos los pueblos de aquella comarca vinieron a dar la paz y obediencia a Su Majestad, pidiendo les perdonasen; lo cual se les concedió en el\n\n\n\n\n\n",
  id: 67
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 67",
  chapter: "Capítulo III",
  layout: "textoporpagina",
  content: "\n    \nreal nombre, y en el del Adelantado, con que quedaron por entones pacíficos tal ejemplo.Capítulo IIIDe la entrada que hizo el Adelantado por el puerto de los Reyes, y de algunas discordias y sucesosAcabada la guerra de Tabera con tan buen suceso, estaba el Adelantado muy obedecido y respetado de los indios de la tierra, aunque muy encontrado con los oficiales reales de Su Majestad, a causa de querer ellos tener tanta mano en el gobierno, que pretendían que el Adelantado no hiciese cosa en él sin su parecer: dando por razón, así lo mandaba Su Majestad, a lo que él respondía no tener necesidad de consultarles nada, en razón de cosas menores y ordinarias, porque de otra manera sería discernirles el oficio para que fuesen ellos los gobernadores y no él; y así andaban con requerimientos con que cada día, se encontraban, llevándolo el Adelantado con más sufrimiento de lo que su reputación convenía, por no venir a rompimiento y conseguir sus intentos. No obstante estas diferencias, resolvieron todos de conformidad, se hiciese una entrada para descubrir si se hallasen algunos minerales de los que tenían noticia; para cuyo efecto mandó el Adelantado prevenir 400 soldados con sus capitanes, que fueron, de los ya prácticos: Salazar, Francisco Ruiz y Juan de Ortega; y de log chapetones, Nuflo de Chaves, García Rodríguez Valenzuela, y Saavedra, y otra gente particular; y con este número de gente salió el Adelantado, en 4 bergantines, 6 barcas, 20 balsas y otras 200 canoas en 13 de diciembre de 1541, llevando consigo algunos cautivos, y cantidad de amigos, así guaranís como de la nación Nagases o Yapirús. Fue a esta jornada el contador Felipe de Cáceres, veedor Alonso abrera y el factor Pedro de Orantes; dejando en la Asumpción el Adelantado a Domingo de Irala su maestre de campo. Y navegando la armada río arriba, llegaron a los pueblos de Hieruquizava, y los demás que están por aquella costa hasta tornar el puerto de San Fernando, y de allí pasaron al de la Candelaria; y dejando atrás la laguna de Juan de Oyolas, donde los Payaguás los mataron so color de paz, viniendo, como se dijo en el libro pasado: en este paraje, por venir algunas canoas muy cargadas, se quedaron atrás, y siendo acometidas de los mismos indios Payaguás repentinamente, las tomaron todas con poca o \n\n\n\n\n\n",
  id: 68
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 68",
  chapter: "Capítulo III",
  layout: "textoporpagina",
  content: "\n    \nninguna resistencia; y de ahí adelante siempre que se les ofrecía ocasión, no la perdían, tocando a cada paso mil alarmas y rebatos, hasta que el Adelantado mandó se les echase una emboscada en una laguna o anegadizo acomodado para tener algunas canoas, con gente oculta para poderlos acometer, antes que pudiesen dar vuelta las que los contrarios traían al tiempo que viniesen siguiendo la armada, como de ordinario hacían. Y al llegar al paraje de la emboscada, una escuadra de canoas que venían en nuestro seguimiento salieron las nuestras que estaban ocultas, y los acometieron antes que ellos pudiesen revolver ni tomar tierra; de manera que parte se trabucaron, y parte cogieron matándole mucha gente, y cogiendo a manos los restantes, sin que escapase ninguno, y sin que pudiesen prevenir para defenderse de nuestros arcabuces y espadas, y flechería de los amigos: mandando el Adelantado ahorcar a todos los caciques y demás cabezas, de sus insultos. Y caminando adelante, tocaron en los pueblos de los Guajarapos, que están a mano izquierda, y en los que llaman Guatos, que están a mano derecha sobre el río del Araguay, con los cuales tuvieron comunicación: y pasando de esta comarca, llegaron a reconocer aquella tierra que llaman el Paraíso, donde partido el río en dos brazos hace aquella gran isla de tanta amenidad, como de ella y sus calidades tengo referido. Y vista por los españoles, y la afabilidad de los naturales, desearon mucho poblar en ella, aunque no se pudo acabar con el Adelantado, por tener la mira puesta en el descubrimiento occidental, y noticia que tenía de las riquezas del Perú, y así les decía: &quot;Señores, corramos la tierra, y descubramos lo que hay en ella, que después se tomará asiento donde más convenga, y no nos prendamos luego a la primera vista&quot;. Y con esto comentó a ser aborrecido de muchos, en especial de los ya antiguos que ya tenían en la tierra algunas raíces; y así fue corriendo su viaje por aquel río, hasta que llegó a tomar el puerto de los Reyes, en el cual toda la gente desembarcada, dio orden en lo necesario para su entrada; y partido en compañía de los capitanes, dejando en guarda de los navíos a su primo, Pedro de Estopiñán, tomó su derrota al Norte, y caminando por aquella tierra encontraron con muchos pueblos de indios labradores, descubriendo cada día gran multitud de gente, saliendo todos los más de paz, y algunos que les pareció el no hacerlo, tomaron las armas para los españoles, y se pusieron a impedirles el paso, a los cuales nuestra gente castigó con toda moderación. Y al cabo de algunas jornadas llegaron a un pueblo muy grande de más de \n\n\n\n\n\n",
  id: 69
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 69",
  chapter: "Capítulo III",
  layout: "textoporpagina",
  content: "\n    \nocho mil casas, de donde salieron a dos leguas de él, cuatro o cinco mil indios a impedir el pasaje a los nuestros, aunque por lo que se vio no fue sino para entretenerlos hasta poner su chusma en salvo: y habiéndoles los nuestros pagado su atrevimiento con pérdida de muchos de ellos que mataron, desampararon el puesto, y los nuestros llegaron al pueblo, el cual hallaron sin gente, mas todas las casas llenas de comida y de todas sus alhajas, que eran muchas mantas de algodón listadas y labradas, pieles de onzas y tigres, muchas cebellinas, gangas, gatillos y nutrias de que los soldados se pertrecharon: hallaron muchas gallinas, patos, y cierto género de conejillos que crían dentro sus casas, que todo fue de regalo y hubo en abundancia. Corriose todo el pueblo, y en la plaza principal se halló una casa espantable, que por serio no dejaré de tratar de ella. Estaba en un círculo muy grande a modo de palenque, de muy buena y fuerte madera en forma piramidal, cubierta por lo alto de ciertas empleitas de hojas de palmas, dentro de la cual tenían encerrada una monstruosa culebra o género de serpiente tan disforme que ponía gran terror y espanto a todos los que la veían. Era muy gruesa y llena de escamas la cabeza muy chata y grande, con disformes colmillos; los ojos muy pequeños, tan encendidos, que parecían centellear; tenía de largo 25 pies, y el grosor por el medio como un novillo; la cola tableada de duro y negro cuero, aunque en parte manchado de diversos colores: la escama era tan grande como un plato, con muchos ojos rubicundos que le hacían más feroz; y éralo tanto que ninguno la miró que no se le espeluzase el cabello. Los soldados la comenzaron a arcabucear, y a herir con saetas y flechas los amigos, y como se sintió herida comenzó a revolverse echando gran suma de sangre; dio feroces silbos con tanta ferocidad, que hizo temblar todo aquello; que causó grande espanto a todos. Al fin acabó de morir, y fue averiguado con los naturales de aquel partido, que hacían a esta serpiente adoración en quien estaba el demonio, les hablaba y respondía, la cual sustentaban solo con carne humana de los que en las guerras que unos a otros se hacían, procurando haber siempre cautivos que traer, y dar a comer a este monstruo, de que el Señor fue servido librarles con este suceso. Recogido, pues, todo el despojo que los soldados y amigos hallaron, los oficiales reales pidieron de todo ello el quinto, diciendo pertenecía a Su Majestad como cosa de estima y de valor, sobre lo cual hicieron muchos requerimientos al Adelantado, como en otras ocasiones habían hecho; y sin más declaración ni acuerdo, comenzaron a molestará algunos soldados, quitándoles so color del quinto, lo que\n\n\n\n\n\n",
  id: 70
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 70",
  chapter: "Capítulo III",
  layout: "textoporpagina",
  content: "\n    \nhabían adquirido; y pasó tan adelante que aun de cinco peces que pescaban, querían uno, y lo propio de los venados y otras cosas que cazaban y tenían algún valor: con lo que todos los soldados se disgustaron grandemente, y dijeron al Adelantado que no querían pasar adelante, pues los oficiales reales se metían en cosas tan menudas, pidiéndoles el quinto, y haciéndoles tan manifiestos agravios, de que se temía que en cosas mayores serían más. El Adelantado por aplacarlos mandó a los oficiales reales no tratasen de aquello de ninguna manera, porque Su Majestad no era servido que de cosas de tan poco valor se le pagase quinto; y que cuando esto quisiese, él de su hacienda, por excusar molestia a los soldados, ofrecía a Su Majestad cuatro mil ducados cada año, que era lo que se le daba de salario. Con lo cual se evitó por entonces el molestar a los soldados, aunque no por eso los oficiales reales dejaron de quedar sentidos; por lo que, por su parte, y la de otros soldados y capitanes, requirieron al Adelantado, se volviese a la Asumpción donde tenían que hacer cosas de su oficio y del servicio de Su Majestad, y darle cuenta del estado de la tierra. Con que vino a condescender en lo que se le pedía, volviendo aunque con notable desconsuelo por no poder conseguir lo que pretendía, que era hacer aquel descubrimiento: y así se volvió al puerto donde había dejado los navíos. Y embarcándose, bajó por sus jornadas hasta llegar a la Asumpción con algún aprovechamiento, porque trajeron de aquel viaje más de tres mil almas de servicio, con que este pueblo tuvo acrecentamiento, y se abasteció de comida y de otras cosas necesarias a los españoles. Luego el Adelantado determinó reprimir los indios Yapirús, que cada día inquietaban a aquella República, haciéndole muchos asaltos, así en el servicio, como en los indios amigos y chácaras: para cuyo remedio salió en persona con 300 soldados y 1000 amigos; y estando informado donde estaban recogidos, se fue a largas jornadas a ponerse sobre ellos, que era un lugar muy acomodado, porque tenían por frente el río del Paraguay, y por espalda una laguna que aislaba el sitio, y no más de una puerta en que tenían un baluarte de madera muy fuerte. Y reconocidos por el Adelantado los sitios, comenzó a batir, mandando que en este mismo tiempo pasasen a nado los amigos la laguna, y entrasen con gran denuedo a tornarles el sitio y hacerles todo el daño que pudiesen: con cuyo buen efecto los españoles entraron con facilidad, rindiendo a, los indios, y llevándolos a fuego y sangre, aunque los de dentro vendían muy bien sus vidas, peleando con valor. \n\n\n\n\n\n",
  id: 71
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 71",
  chapter: "Capítulo IV",
  layout: "textoporpagina",
  content: "\n    \nAl fin, matándoles mucha gente, y prendiendo los más que pudieron ser habidos, fueron ajusticiados los más culpados, y el resto se trajo a poblar a cuatro leguas de la Asumpción reduciéndolos con otros indios más benévolos, llamados Mogolas. Con lo cual se volvió el Adelantado muy gozoso, aunque enfermo de unas cuartanas que días había le traían desasosegado: todo lo cual pasó el año de 1542, con lo demás que en este capítulo se ha dicho.Capítulo IVCómo los oficiales reales y otros capitanes y caballeros prendieron al Adelantado, y de lo demás que sucedióDespués que el Adelantado volvió de la guerra que tengo referida, se ofreció luego despachar al maestre de campo a la provincia del Acay, a pacificar los indios de aquella comarca que andaban turbados con algunas alteraciones: para cuyo efecto mandó apercibir 250 soldados con cantidad de amigos, llevando consigo algunos capitanes. Partido que fue de la Asumpción, determinaron los oficiales reales poner por obra lo que muchos días había tenían determinado; para cuyo efecto secretamente convocaron sus amigos y otras personas de su satisfacción para prender al Adelantado, diciendo convenía al servicio del rey; y asimismo que gobernaba tiránicamente, excediendo en todo la orden de Su Majestad e instrucciones que su real consejo le había dado: dándole color y razones tan aparentes, que movieran a cualquiera que no estuviera muy sobre sí. Y quien más atizaba este fuego era Felipe de Cáceres, hombre sedicioso, altivo y amigo de novedades, al cual le nació esta enemiga, de que en cierta consulta el Adelantado se había disgustado con él, y habládole con desabrimiento, por haberle él ocasionado, y fue de manera lo que se alargó con el Adelantado, que obligó a su sobrino Alonso Riquelme a que le tirase una puñalada. Y el guardó todo esto para esta ocasión, en la cual supo persuadir a los con quienes trataba este negocio, que sin ninguna dificultad los trajo a todos a su voluntad; y fue a propósito el haber salido fuera el maestre de campo y otras personas de cuenta, amigos del Adelantado, el cual como se dijo, vino enfermo de las cuartanas, y al presente estaba en la cama purgado, como lo dijeron algunos que supieron como sucedió el caso, y que fueron sabedores algunos de sus criados: en especial Antonio de Navarrete y Diego de Mendoza, su maestre de sala, que tenía particular amistad con el contador, y aun posaba en su casa. \n\n\n\n\n\n",
  id: 72
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 72",
  chapter: "Capítulo IV",
  layout: "textoporpagina",
  content: "\n    \nHalláronse en esta conjuración dos y más personas, y entre ellas, como los más principales factores, el veedor Alonso Cabrera, el tesorero García Venegas, el factor Pedro de Orantes, don Francisco de Mendoza, capitán Nuflo de Chaves, Jaime Resquin, Juan de Salazar, con otros muchos capitanes, oficiales y caballeros. Los cuales, todos armados, se fueron una mañana a casa del Adelantado, y antes de entrar en el patio, tuvo aviso de su ida, y de que iban armados: con lo cual saltando de la cama se echó una cota: y púsose una celada de acero, y embrazando su rodela, la espada en la mano, los salió a recibir a la sala a tiempo que todos entraban en ella; donde en alta voz les dijo: &quot;Caballeros, ¿qué traición es esta que cometen contra su Adelantado?&quot;. A lo que respondieron: &quot;Aquí no hay traidor ninguno, por que todos somos servidores del Rey; y así conviene a su servicio que Vuestra Señoría sea preso, y vaya a dar cuenta al real consejo de sus delitos y tiranías&quot;. A lo que respondió el Adelantado, cerrándose con su rodela: &quot;Antes morir hecho pedazos que dar lugar a tan grande traición&quot;. Y a este tiempo todos le acometieron, requiriéndole se rindiese; donde no, le harían pedazos. Y cerrando a estocadas con él, y puestas muchas puntas de espadas a pique para atravesarle, llegó Jaime Resquin con una ballesta armada, y poniéndole un pasador al pecho, le dijo: &quot;ríndase luego, sino le pasaré luego con esta jara&quot;. Al cual el Adelantado, con semblante grave dio de mano, diciendo: &quot;apártense ustedes que yo me doy por preso&quot;. Y corriendo la vista por todos, la fijó en don Francisco de Mendoza, a quien llamó y dio su espada: &quot;a usted don Francisco entrego mis armas, y ahora hagan de mí lo que quisieren&quot;. Don Francisco tomó las armas, y luego le echaron mano y pusieron dos pares de grillos, y en una silla lo llevaron a las casas de García Venegas, rodeado de toda la gente, y le metieron en un aposento o mazmorra fuerte y obscura, poniéndole cincuenta soldados de guardia. Y a esta misma hora prendieron también al alcalde mayor, Pedro de Estopiñán, a Alonso Riquelme Melgarejo, a Francisco de Vergara, al capitán Abreu, y a otros caballeros y soldados: y quitándoles las armas, y poniéndoles a recaudo, vinieron a quedarse con la superior jurisdicción y potestad del gobierno, mandando los oficiales reales a su sabor, los que les estaba bien, así por bandos y pregones, como por ministros y oficiales; con lo cual no había ninguno que osase hablar ni contradecir ninguna cosa, porque si alguno lo hacía, era castigado severamente y le quitaban cuanto tenía. A más de esto, dieron aviso los oficiales reales al maestre de campo de lo que pasaba, y juntamente le requirieron de parte de todos, no se pusiese a mover algún tumulto, pues lo que se había hecho era con buen\n\n\n\n\n\n",
  id: 73
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 73",
  chapter: "Capítulo IV",
  layout: "textoporpagina",
  content: "\n    \nacuerdo, por convenir así al real servicio: y así le suplicaban se viniese luego donde le aguardaban, para que se tratase lo que más conviniese al bien propio y utilidad común de la tierra. Sintió el maestre de campo extrañamente este suceso, y mucho más por no poderlo remediar respecto de intervenir en el negocio tanta gente noble y capitanes; y en tiempo que se hallaba muy enfermo de una disentería que le tenía muy fatigado, tanto que ni a pie ni a caballo podía andar. Mas viendo el peso de negocio tan grave, se animó a venir en una hamaca, en que llegado a la Asumpción, estuvo desahuciado y a pique de perder la vida; y juntos todos unos y otros, acordaron elegir persona que los gobernase en nombre de Su Majestad. Y hechas las solemnidades y juramentos necesarios, dio cada uno su voto por cédulas, como por una real cédula estaba ordenado: y conferidos los votos, hallaron que el más aventajado era el maestre de campo, a quien hicieron saber luego de su elección; el cual envió a excusarse con muy grande afecto, a causa de su enfermedad: diciendo que más estaba para ir a dar cuenta a Nuestro Señor, que para admitir y tomar a su cargo cosas temporales: máxime donde tan principales caballeros había para ejercer aquel oficio; y así no se había de ponerlo en manos de un hombre que estaba oleado. En estas demandas y respuestas anduvieron gran parte del día, hasta que tomando la mano el veedor Alonso Cabrera y capitanes Salazar, Nuflo de Chaves, y Gonzalo de Mendoza, vino a condescender en lo que pedían, así de parte de los deudos y amigos del Adelantado, como de los demás: de manera que el mismo día, que se contaron 15 de Agosto de 1543, le sacaron en una silla en pública plaza enfermo como estaba; y fue recibido al gobierno de esta provincia con título de Capitán General, habiendo precedido el juramento ordinario sobre un misal, de mantener en paz y justicia así a los españoles como a los naturales, en nombre del rey Nuestro Señor, hasta tanto que por Su Majestad otra cosa fuese mandado. Y con todo lo procesado se despachó al real consejo la persona del Adelantado, habiéndose determinado en dicha elección se hiciese en una carabela de buen porte, en que fuese preso; la que se vino a acabar muy despacio, padeciendo entretanto el buen Adelantado muchas vejaciones y molestias que le hacían con grande inhumanidad: pues jamás se le permitió tuviese recado de escribir, ni otra cosa alguna que le pudiese servir de consuelo, lo cual todo pasaba con grandísima paciencia; y aunque le tenían secuestrados todos sus\n\n\n\n\n\n",
  id: 74
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 74",
  chapter: "Capítulo V",
  layout: "textoporpagina",
  content: "\n    \nbienes y en depósito, y ser de consideración, tan solamente le daban para su sustento una cosa muy tenue, gastando en dicha prisión más tiempo de diez meses, en el cual algunos de sus deudos y amigos pretendieron sacarle de ella; y como esto no se podía hacer sin consentimiento de los guardas que estaban dentro con él, se concertaron con dos de ellos. Y estando ya determinado a ponerlo en ejecución, fueron descubiertos por los oficiales reales, de que tuvieron grande indignación; y como eran en todo tan poderosos, y tenían tanta mano en la república, hicieron al General que castigase a los movedores de este negocio; de que resultó también, que todos los incursos en esta prisión hicieron una conjuración, de que si acaso por algún acontecimiento determinasen sacar de ella al Adelantado, le diesen de puñaladas, y muerto le echasen en el río; y lo mismo al general Domingo de Irala, sino acudiese a lo que a todos convenía, y a la guarda y custodia del Adelantado de donde resultó encenderse entre los principales, muchas disensiones y discordias, que llegaron a rompimiento; y vinieran a perderse todos, a no acudir al remedio el general Irala con su buen celo y diligencia, como adelante se verá.Capítulo VCómo el Adelantado fue despachado a Castilla, y de algunos tumultos y divisiones que hubo, etc.Desde el día que el Adelantado fue preso en la Asumpción, y Domingo Martínez de Irala electo por general, no cesó de haber entre los conquistadores, bandos y pasiones: los unos seguían el bando de Álvaro Núñez, que se llamaban leales, y los de la otra parte los llamaban tumultuarios; con lo cual había entre ellos cada día muchas pendencias y cuestiones, que no daba poco cuidado su remedio al General; y así se valía haciendo a unos merced, y a otros favores y ayudas, castigando con severidad y justicia cuando convenía, con lo que atajaba el fuego, y que no pasase adelante. Hasta que acabada la carabela fue embarcado Álvaro Núñez, con acuerdo de que fuesen con él dos oficiales reales, que fueron el veedor Alonso Cabrera, y el tesorero, García Venegas; los cuales llevaron consigo todo lo que contra él se había fulminado, que todo era hecho muy a su satisfacción y en contra del Adelantado. Nombrose por capitán y piloto a Gonzalo de Mendoza, portugués, y por procurador de la provincia, a Martín de Orué; y con otras personas de calidad, partieron el año 1544 de este puerto, y al tiempo\n\n\n\n\n\n",
  id: 75
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 75",
  chapter: "Capítulo V",
  layout: "textoporpagina",
  content: "\n    \ntiempo de su partida, dejó el Adelantado un poder en secreto al capitán Salazar, para que en su nombre gobernase la provincia; y aunque este era del bando contrario, le movió a ello el que hubiese entre ellos algunas disensiones, con que se abrasase el monte con su misma leña. Y así, luego que partió Cabeza de Vaca convocó a todos los que se llamaban leales, para en virtud del poder, tomar en sí la jurisdicción real: y habiendo juntado en su casa más de 100 soldados, les descubrió su intento; lo que sabido por algunos capitanes y oficiales reales, ocurrieron a Domingo de Irala, para que lo remediase, haciéndole muchos requerimientos y protestas de los daños que de lo contrario se siguiesen con esta novedad, tan del servicio de Dios y del Rey; y que a él, como justicia mayor, le tocaba el remediarlo. Por lo que Domingo de Irala mandó juntar la gente necesaria, y fue a las casas de Salazar; y requiriéndole a prima faz no perturbase la paz de la república, poniéndole por delante asimismo el juramento que hizo en su elección de obedecerle en nombre de Su Majestad: el cual se estuvo en sus trece, sin querer desistir de su intento, llevado de ambición, y por hacer gusto a los ya convocados para el efecto, respondiendo que no podía ni debía hacer otra cosa que usar del poder que el Adelantado le había dejado, y apellidar su voz en nombre de Su Majestad, con lo cual el General se determinó a romper con él. Y así mandó asestar a sus casas cuatro piezas de artillería, y las comenzó a batir; y derribando un lienzo entraron por él sin ninguna resistencia. A cuyo tiempo los más de los que le acompañaban le desampararon y salieron fuera: y así fue preso, junto con Rui Díaz Melgarejo, Alonso Riquelme, Francisco de Vergara y otros: los cuales todos fueron puestos a buen recaudo. Y luego tomando los autos y testimonio de lo sucedido, mandó el General embarcar en un bergantín al capitán Salazar, a cargo del capitán Nuflo de Chaves, para que le llevase en demanda de la carabela, y alcanzándola fuese junto con el Adelantado a España. Y saliendo para el efecto, se dio tan buena diligencia que dieron alcance a la carabela: donde llegando, dijo Salazar con voz alta: &quot;Señor García Venegas, ¿habrá lugar ahí para un preso?&quot;. A lo cual respondió: sí voto a... para llevarle a él y a otros veinte: y con esto se embarcaron y prosiguieron su viaje hasta el paraje de Sancti Spiritus, donde Alonso Cabrera, y el capitán del navío con los demás que allí iban, acordaron de volverse a la Asumpción a poner en su libertad al Adelantado, y restituirle su gobierno y oficio, tomando de él ante todas cosas juramento y homenaje, que por las cosas pasadas de su prisión no les sería hecho daño, ni perjuicio alguno; y ellos le prometían de \n\n\n\n\n\n",
  id: 76
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 76",
  chapter: "Capítulo VI",
  layout: "textoporpagina",
  content: "\n    \nfavorecerle con todas sus fuerzas, hasta poner las vidas en su servicio. Y estando todos resueltos en esta determinación, fue contradicho por Pedro de Estopiñán su primo; y llamando a consejo a aquellos caballeros, los requirió de parte de Su Majestad que por ninguna vía dejasen de proseguir su viaje, porque de volver a la Asumpción, y restituir poniendo al Adelantado en su libertad, podría redundar en gran deservicio de Dios, y en una guerra civil continua entre los españoles de la provincia; y muchas muertes y otros daños, por estar incursos todos los más principales de la tierra en los movimientos y tumultos pasados: y pues el conocimiento de este negocio tocaba a la real persona, no convenía poner en tan evidente peligro a todos los de la provincia. Y que en el ínterin habían nombrado general y justicia mayor que los gobernase, que era Domingo de Irala persona de tanta satisfacción, calidad y valor, que daría buena cuenta de lo que es tuviese a su cargo: y así, que de su parecer era que continuasen su viaje, y fuese cada uno por lo que le tocaba a dar cuenta al Rey nuestro Señor: con cuyo consejo y persuasiones inundaron de parecer. Y prosiguiendo su navegación, salieron al mar océano; y navegando por su derrota, al cabo de 60 días llegaron a España, donde presentado ante el consejo, y dado cuenta de lo que había pasado, mandó Su Majestad prender a Alonso Cabrera, y a Venegas; y procediendo contra ellos estando a pique de sentencia, murió García Venegas, súbitamente, y Alonso Cabrera enloqueció en la prisión; y siguiéndose la causa por parte del Fiscal, fue sentenciado en vista el Adelantado, en privación de oficio, y desterrado a Orán con seis lanzas; y en revista, fue dado por libre, señalándole 2000 ducados cada año para su sustento en la ciudad de Sevilla, donde falleció en la primacía del consulado de ella, con mucha honra y quietud de su persona.Capítulo VICómo en este tiempo llegó a esta provincia Francisco de Mendoza, con la compañía de Diego de Rojas, que salió del PerúPor haber prometido en este libro tratar algunas cosas que se ofrecen del gobierno de Tucumán, como de las provincias conjuntas a esta del Río de la Plata, diré de su descubrimiento con toda brevedad: y es de saber que el año de 1543, luego que el licenciado Vaca de Castro\n\n\n\n\n\n",
  id: 77
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 77",
  chapter: "Capítulo VI",
  layout: "textoporpagina",
  content: "\n    \ndesbarató y prendió en la batalla de Chupas a don Diego de Almagro, el mozo, determinó ocupar con cargos y oficios a algunos capitanes que le habían servido en aquel reino, despachándolos a gobiernos y nuevos descubrimientos, con que entendió satisfacerles en algo: y así hizo merced a Diego de Rojas del descubrimiento de la provincia que confina con la de Chile, abajo de la otra parte de la Cordillera, hasta los llanos que corren del Río de la Plata, dándole título de gobernador de aquella tierra; donde entraron en su compañía Felipe Gutiérrez, Pedro de Heredia, Francisco de Mendoza y otros caballeros y soldados, que por todos eran 300. Con los cuales, entrando en su jornada, dejó atrás la provincia de los Charcas, tierra asperísima; y saliendo a los llanos, encontraron algunos pueblos de indios: y entrando en los valles de Salta y Calchaquí, hallaron mucha gente de manta y camiseta, abundantes de comida; los cuales, juntos con los demás de la comarca, pelearon con los españoles; y en un reencuentro que con ellos tuvieron, fue muerto el capitán Diego de Rojas: por cuya muerte hubo diferencias en el campo sobre el gobierno de él, en especial de parte de Felipe Gutiérrez que lo pretendía como compañero y coadyutor de Diego Rojas, siendo todos de diferentes pareceres; por cuyos votos eligieron por general a Francisco de Mendoza, caballero principal y muy afable; y no cesando con esta elección Felipe Gutiérrez de su intento, fue desterrado para la provincia de Chile, con sus amigos y compañeros. Y prosiguiendo el General con su descubrimiento, llegó al Río del Estero, que saliendo de la Cordillera Nevada, corre por unos llanos hasta sumirse en medio de ellos, dejando grandes pantanos y lagunas: por cuyas riberas halló muchos pueblos de indios que llaman Jurís, y a este río Talcanco, de donde pasando adelante llegó a los Comechingones, que son unos indios naturales de la provincia de Córdoba que viven bajo de tierra en cuevas, que apenas aparecen sus casas por afuera. Y trabando amistad con ellos, se informaron de lo que había en la tierra, y tomando relación de como a la parte del Sur había una provincia muy rica de plata y oro, a quien llamaban Yungulo, que se entiende ser la misma noticia que en el Río de la Plata llaman los Césares, tomado del nombre de quien la descubrió. Junto con esto fueron informados que a la parte del Este había españoles que navegaban en navíos por un grande y anchuroso río donde estaban poblados: y con esta noticia determinaron dejar otra cualquiera empresa por ir en demanda de los de su nación. Y atravesando por algunas naciones de indios, con quienes tuvieron amistad, llegaron a un río pequeño, por cuya ribera bajaron a un\n\n\n\n\n\n",
  id: 78
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 78",
  chapter: "Capítulo VI",
  layout: "textoporpagina",
  content: "\n    \ngran pueblo de indios, que les salieron a recibir con las armas en las manos: y asegurados de los españoles, se aquietaron acudiéndoles con la comida necesaria. Este río sale al de la Plata, que se dice el Carcarañal, y a los naturales Timbús, gente dispuesta y agigantada. Otro día por la mañana, viendo los nuestros a la parte del Este grandes y extendidos vapores, preguntaron a los indios, qué fuese aquello: y ellos les dijeron, que procedían aquellas nieblas de un gran río que por allá corría: con lo cual el capitán Mendoza se fue luego a aquella parte por un llano muy apacible, y reconociendo de una legua las cristalinas aguas de aquel río, llegó a sus orillas, admirándose todos de ver su anchura y profundidad. Estaba todo el río lleno de muchas islas, pobladas de muy espesos sauces, que causaban gran contento a la vista; y por toda aquella costa se divisaban muchos fuegos, en que se avisaban los naturales de lo que se les ofrecía. Aquí sentaron su real, y otro día a las nueve vinieron a reconocer más de 300 canoas de indios; y cuando llegaron en frente de los nuestros, apartados de tierra como un tiro de flecha en una playa que allí parecía, comenzaron a levantar las palas en alto, señal de amistad, y quieta la gente oyeron los españoles hablar en voz alta a un indio que decía: &quot;¿Sois amigos, o enemigos, qué queréis, o qué buscáis?&quot;. Admirados los nuestros de oír entre aquellos bárbaros quien hablase nuestra lengua, respondió el capitán Mendoza: &quot;Amigos somos, y venimos de paz y amistad a esta tierra del reino del Perú, con deseo de saber de los españoles que por acá están&quot;. El indio le preguntó quién era y cómo se llamaba: y el capitán respondió que lo era de aquella gente que allí traía, y se llamaba Francisco de Mendoza. A lo cual el indio mostró mucho contento, diciendo: &quot;yo me huelgo, señor capitán, de que seamos de un nombre y apellido: yo me llamo don Francisco de Mendoza, que lo tomé de un caballero de este nombre, que fue mi padrino cuando me bautizaron: por tanto, mira señor lo que habéis menester, que yo os proveeré de muy buena voluntad&quot;. El capitán le rogó saltase en tierra y viniese donde él estaba, para que pudiesen comunicar más despacio y poderle regalar con lo que tenía. El indio respondió: que él lo hiciera, mas que no se fiaba de él, porque estaba escarmentado de algunos españoles, que debajo de amistad le habían hecho tiro. Francisco de Mendoza le aseguró de su parte, que no se le haría daño ni perjuicio alguno. A lo que respondió el indio, que fuese con una condición, que enviase cuatro soldados que estuviesen en sus canoas, en el ínterin que él estaba en su poder, y a un tiempo volvió cada uno a los suyos. El capitán le dijo que estaba contento, y juró como caballero, en la cruz de su\n\n\n\n\n\n",
  id: 79
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 79",
  chapter: "Capítulo VI",
  layout: "textoporpagina",
  content: "\n    \nespada de lo cumplir. Y así despachó cuatro soldados, dando orden para que en ningún acontecimiento pudiesen correr riesgo, ni perder su libertad, quedando en poder de aquellos bárbaros. Al mismo tiempo que el cacique estuvo en tierra, y los soldados en las canoas, el capitán se fue para él, donde abrazándose el uno al otro, echó mano al indio de los cabellos, que era la seña que había dado a los soldados, los cuales al punto se arrojaron de las canoas y saltaron en tierra, y con las espadas desnudas herían a los indios que les impedían, llegándoles de socorro veinte hombres de a caballo, con que salieron libres. El cacique visto el suceso tan nunca visto y debajo de juramento, dijo: &quot;Capitán Mendoza como me has engañado, como habéis quebrantado vuestra palabra y faltáis al juramento que me hicisteis? Que así es, matadme ya, o haced de mí lo que quisiereis&quot;. El capitán le consoló con buenas palabras, diciéndole que no recibiría ningún daño, antes sería muy bien tratado y regalado, porque el haber hecho aquello, no era por no quererle cumplir su palabra, sino por la poca satisfacción que él tenía de la suya; y sosegándose el cacique se informaron de él de las cosas de aquella tierra. Supo como todos los españoles que en ella había estaban en el río del Paraguay arriba, y debajo del mando del capitán Vergara (que por este nombre llamaban a Domingo de Irala): supo también como a Juan de Oyolas le habían muerto unos indios llamados Payaguás: díjole como había pocos días que habían llevado al adelantado Cabeza de Vaca preso a España, el cual había venido al socorro de los españoles que estaban en aquella tierra, con lo que quedó satisfecho de lo que deseaba saber: y regalando al indio lo posible, y dándole muchas cosas de rescate le pidió mandase a su gente le trajesen alguna comida; el cacique lo mandó, y se trajo al real lo necesario, haciendo en la playa de solo pescado un grande rimero, tan alto que una lanza no se veía. El capitán le dio un vestido de grana, manta y camiseta, y con grande caricia y amistad le despidió, y el indio se fue muy contento; y alzando el real se costeó río abajo hasta un sitio alto y llano que hace sobre su ribera; en cuya corona vieron la ruina de una fortaleza antigua que fue la que Sebastián Gaboto fabricó para escala de aquella navegación, y en la que sucedió la muerte del capitán don Nuño. Y sobre la barranca del propio río vieron enarbolada una cruz con una letra que decía: al pie cartas; donde cavando hallaron una botijuela en que estaba una carta muy larga del general Domingo de Irala, avisando a la gente de España de todo lo que se ofrecía, y de los inconvenientes que había de que guardarse; de los indios\n\n\n\n\n\n",
  id: 80
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 80",
  chapter: "Capítulo VII",
  layout: "textoporpagina",
  content: "\n    \nindios de quienes se podía fiar, y de quienes se habían de guardar; y de cierta cantidad de comida que estaba enterrada en una isla. Con que se determinó Francisco de Mendoza a pasar con su gente a la otra parte del río, que mostraba a la vista ser de buena y apacible disposición, y más alta y montuosa que donde él estaba: entendiendo poder ir con facilidad por aquella banda hasta topar con los españoles que estaban arriba. Sobre cuya determinación los más de los soldados replicaban contradiciendo este intento: de que vino a resultar que Pedro de Heredia y otros amigos suyos se conjuraron contra Francisco de Mendoza; y una noche con grande determinación se fueron a su tienda, y hallándole durmiendo, le mataron a puñaladas; y con esto se volvieron al Perú debajo de la orden de sus capitanes, al tiempo que el maestre de campo Carvajal acababa de desbaratar al capitán Diego Centeno en la batalla de Pocona, obligándole a que se retirase en una cueva donde estuvo escondido mucho tiempo. Y viendo Lope de Mendoza, su compañero, que le seguían algunos soldados, se fue a encontrar por gran ventura con los que iban de esta jornada del Río de la Plata, y juntos y conformes, tomaron la voz del rey contra el tirano, los cuales en otra batalla fueron vencidos y desbaratados.Capítulo VIIDe una entrada que hizo Domingo de Irala, hasta los confines del Perú, de donde despachó al de la Gasca, ofreciéndose al real servicio.Habiéndose ocupad Domingo de Irala todo el año de 1545 en aquietar los alborotos pasados, se determinó a hacer jornada a la parte del Norte para descubrir aquella tierra de que tenían gran noticia había mucha riqueza: para lo cual juntó 300 soldados con algunos caballeros, y personas de obligación, entre las cuales iban Felipe de Cáceres, Gonzalo de Mendoza, Miguel de Rutia, Nuflo de Chaves, Agustín de Campos, Juan de Ortega, Rui García Mosquera, y otros, y más de 3500 indios amigos; dejando en la Asumpción, por su lugar teniente, a don Francisco de Mendoza; y partiendo con su armada por fin del año de 46, en cuatro bergantines, y cantidad de otras embarcaciones en que llevaba algunos caballeros, yendo por tierra todos los más de los indios, hasta que en el río del Itatin se incorporasen con la armada. Este Itatin es término que divide y define la población de los Guaranís, de las otras naciones australes; e yendo de este paraje haciendo sus jornadas, subió el río arriba hasta el puerto de los Reyes y pasando de allí a la isla de los Orejones, llegó a los pueblos de los indios Jarayes, y Perabazanes, que es la gente de más policía de estas provincia, como ya tengo apuntado. Las mujeres se labran todo el cuerpo hasta los rostros, con unas agujas, picándose las carnes, haciendo en ellas mil labores y dibujos con guarniciones en forma de camisas y jubones con sus mangas y cuellos; con cuyas labores, como ellas son blancas, y las pinturas negras y azules, salen muy bien. Está poblado el río de esta gente, de una y otra banda; hacia el Poniente reside su cacique principal, llamado Mané; y a la del Oriente los Perabazanes, que viven en casas muy abrigadas, redondas y cerradas a hechura de campana: cúbrenlas de muy tejida empleita de paja. De aquí envió el general Irala a Francisco de Rivera, y a Monroy a descubrir lo que había de allí arriba; y habiendo caminado sesenta leguas, toparon con dos bocas de río que venían a juntarse \n\n\n\n\n\n",
  id: 81
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 81",
  chapter: "Capítulo VII",
  layout: "textoporpagina",
  content: "\n    \nen un cuerpo; y entrando por la de mano derecha, que corre de la parte del Brasil, reconociendo que traía poca agua, metiéndose por el que venía de hacia el Norte, navegaron dos días: y al cabo de ellos, viendo que se dividía en muchos brazos y anegadizos dieron vuelta, hallándose en aquel paraje del de la Asumpción más de 400 leguas, y del mar más de 340. Y llegado adonde estaba el General, y dándole cuenta, determinó hacer su entrada por aquella parte, para cuyo efecto dejó a aquellos indios encomendadas todas las embarcaciones que había traído, con todas las demás cosas que no se podían llevar por tierra, Y tomando su derrota entre el Oeste y Norte, le fueron saliendo al camino muchos indios de los naturales de aquella tierra; y llegando a unas naciones que llaman Timbús, les salieron de guerra, y tuvieron una muy reñida pelea, y desbaratándoles e informándose de algunas particularidades de aquel territorio, les dieron noticia de un poderoso río que corre del Sur para el Norte, al contrario del de la Plata, y juzgaron ser el Marañón uno de los mayores de las Indias, el cual sale a la vuelta y costa del Brasil en el primer grado de la equinoccial. Supo también de estos indios Domingo de Irala, como entre el Brasil y el Marañón, y cabezadas del Río de la Plata, había una provincia de mucha gente que tenía sus poblaciones a la ribera de una gran laguna, y que poseían gran cantidad de oro de qué se servían; por lo que los españoles dieron a dicha laguna por dominación el Dorado. Cuyos naturales, dicen, confinan con unos pueblos de solas mujeres que tienen solo el pecho del lado izquierdo, porque el derecho lo consumían con cierto artificio para poder pelear con arco\n\n\n\n\n\n",
  id: 82
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 82",
  chapter: "Capítulo VII",
  layout: "textoporpagina",
  content: "\n    \ny flechas de que eran diestras y ejercitadas, aludiendo a las mujeres de Escitia, de quienes los antiguos escribían, y nuestros españoles llamaron de las Amazonas, conformándose esta noticia con la que así mismo tuvo de ellas el capitán Orellana, cuando en la jornada de la Canela que hizo Gonzalo Pizarro, bajando por el Marañón, le dieron relación de esta gente y pueblos de mujeres. Y dudando el General a qué parte había de tomar, se acordó que revolviese hacia el Poniente a ciertos pueblos de indios que tenían mucha plata y oro; según noticias, que se llamaban Sambocosis y Sivicosis: y así se determinó llegarse a ellos; y caminando para allá, arribaron a un río llamado Guapas, que es uno de los principales brazos del Marañón, y pasando adelante, entraron en dichos pueblos, que estaban a las faldas de una serranía cercana al Perú. De estos indios fueron muy bien recibidos por ser gente amigable, doméstica y grandes labradores: aquí se hallaron muchas muestras de plata y oro. Había entre esta gente algunos indios del Perú que dijeron ser Yanaconas, del capitán Peranzules fundador de la villa de la Plata en las Charcas, que habían venido por su mandado a estos pueblos que eran de su encomienda: de estos Yanaconas se informó el General de las diferencias y revoluciones que en el Perú tenían los españoles con la tiranía de Gonzalo Pizarro, y venida del presidente Gasca, con lo cual le pareció a Domingo de Irala gozar de tan buena ocasión, y ofrecerse con toda su gente al servicio de Su Majestad; para cuyo efecto despachó a Nuflo de Chaves y a Miguel de Rutia, y por otra parte al capitán Rui García, para que en nombre de todos aquellos caballeros le pidiesen les diese Gobernador en nombre de Su Majestad, los cuales habiendo llegado, te dieron su despacho. El de la Gasca estimó en mucho aquel ofrecimiento, y les dio por Gobernador a Diego Centeno, que por su fin y muerte, no entró al gobierno; ni tampoco otro que fue después nombrado. Y deteniéndose Nuflo de Chaves, y los demás, más tiempo del que se les fue señalado, por haber pasado a la ciudad de los Reyes donde el presidente había ido, después de desbaratado al tirano y présole en la batalla de Xaquí-Xaguana, y partídose para Castilla, determinaron todos los más capitanes pedir a su gobernador Domingo de Irala, que entrase con ellos al Perú porque no los tuviese allí tanto tiempo sin hacer ningún efecto; pues la dilación de la correspondencia que aguardaban no daba lugar a otra cosa. A esto les respondió el General, que no lo podía ni debía hacer sin la autoridad de la persona que gobernaba aquel reino; por ser jurisdicción distinta\n\n\n\n\n\n",
  id: 83
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 83",
  chapter: "Capítulo VIII",
  layout: "textoporpagina",
  content: "\n    \nde la suya, y se le podía atribuir a mal caso el entrar con tanta gente armada en aquella tierra, en tiempo que estaba tan revuelta. De estas demandas y respuestas resultó que todos los más soldados del tercio se amotinaron, requiriendo al General que ya que no quería pasar adelante, diese vuelta para la Asumpción; a lo cual respondió no lo podía hacer por haber dado su palabra a los que despachó al Perú de aguardarlos en aquel puesto. Y ellos visto esto se determinaron a. negarlo la obediencia, y eligieron por su cabeza al capitán Gonzalo de Mendoza, quien no lo quiso aceptar, y fue compelido a ello y pareciéndole menos grave el dar la vuelta que entrar en un reino tan turbado, caminó con la gente por donde había entrado, y no pudiendo Domingo de Irala hacer otra cosa, se vino con ellos, acompañado de sus amigos: y caminando por sus jornadas con poco orden, y divididos por compañías, fueron asaltados en el camino de los indios, donde mataron a algunos españoles, recibiendo los demás mucho daño; de que todos quedaron descontentos por el mal gobierno y poco recato que traían; y llegados a los navíos por fin del año de 1549, hallaron en aquel paraje y puerto alguna gente que había subido de la Asumpción a dar aviso al General de lo que había sucedido en aquel tiempo, como adelante diremos; dando los indios Jarayes tan buena cuenta de lo que les había dado a guardar el General, que más no pudo ser, mostrando en esto gran fidelidad. Entendido por los del campo las revoluciones que había en la Asumpción, suplicaron a Domingo de Irala fuese servido de tornar a tomar el gobierno, y remediase los escándalos y alborotos en que estaba la república: pues teniéndola él a su cargo, reprimiría tan grandes excesos, reduciéndolos a todos a una universal paz y quietud. Y de tal manera lo persuadieron, que hubo de aceptar, haciendo todos el juramento y pleito homenaje de le obedecer y servir en nombre de Su Majestad y así bajaron con mucho gusto.Capítulo VIIIDe lo sucedido en este tiempo en la Asumpción, y de la elección del capitán Diego de Abreu; y cómo cortaron la cabeza a don Francisco de Mendoza, etc.En tanto que las cosas referidas en el capítulo precedente pasaban en la jornada de Domingo Martínez de Irala, sucedieron en la \n\n\n\n\n\n",
  id: 84
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 84",
  chapter: "Capítulo VIII",
  layout: "textoporpagina",
  content: "\n    \nAsumpción otras novedades, que causaron adelante mayor inquietud: siendo el principio de ellas, de que don Francisco de Mendoza, lugarteniente de Domingo Irala, visto que había más de año y medio que era salido a su jornada, y no volvía, propuso que los conquistadores que con él habían quedado, eligiesen quien los gobernase en justicia, por parecer y consejo de sus amigos y aficionados; que le decían, que un caballero de sus partes y nobleza, no era razón fuese inferior a otro ninguno: y pues en él concurrían tantos méritos, hiciese su negocio sin otro ningún respeto, pues la ocasión y ausencia del General le daba lugar a ello: y hecha que fuese la elección, despachase a Su Majestad por la confirmación, en conformidad de la real cédula, pues era cierta la venia, teniendo en España deudos tan principales: con que se vino a resolver y ponerlo en efecto, Para lo cual mandó llamar algunas personas de parecer y voto, junto con los capitulares y regidores; que fueron, el capitán García Rodríguez de Vergara, el factor Pedro de Orantes, los regidores Aguilera y Hermosilla, y otros a quienes don Francisco de Mendoza propuso su intento. Los cuales le respondieron no haber lugar a lo que pretendía, pues no era necesario en tanto que no se supiese de la muerte del General, que en nombre de Su Majestad gobernaba la provincia, cuyo lugar teniente era él en la república; a quien todos como a tal reconocían y obedecían en todo. Don Francisco replicó a sus razones, diciendo que por ellas mismas estaban convencidos de hacer elección, por haber tanto tiempo que Domingo de Irala había salido a su jornada y no haber vuelto; de donde se colegía que por su muerte e imposibilidad no daba lugar a ello: y en caso que no fuese muerto se reputaba por tal, por el largo tiempo de su ausencia, para poderse hacer jurídicamente la elección. Con lo que se resolvieron a hacerla, conque ante todas cosas se desistiese don Francisco de Mendoza del cargo que tenía, pues de lo contrario no habría lugar para poderse hacer, ni ellos permitirían tal. Y así juntos en su cabildo, hizo luego dejación de su oficio, desistiendo y apartando de sí el cargo y jurisdicción que tenía de Su Majestad; con lo cual fue pregonado, que para tal tiempo y día, todos los conquistadores se juntasen en la iglesia parroquial para elegir y nombrar gobernador. Y llegado el día, a son de campana tañida, se juntaron seiscientos españoles con el padre Fonseca, que era capellán del Rey, con los capitanes Francisco Ruiz, García Rodríguez, Diego de Abreu, Rui Díaz Melgarejo, Francisco de Vergara, Alonso Riquelme de Guzmán, y Don Diego Barúa, con los oficiales reales y regidores que allí había: los cuales todos, guardando los requisitos del derecho, recibían los juramentos \n\n\n\n\n\n",
  id: 85
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 85",
  chapter: "Capítulo VIII",
  layout: "textoporpagina",
  content: "\n    \nde cada uno, de que darían su voto a la persona que en Dios y en sus conciencias entendiesen que debía gobernar la república en el real nombre. Y con esto fueron dando sus cédulas y nominaciones: y metidas en un vaso fueron sacadas y conferidas por los capitulares; y regulada por ellos, hallaron tener más votos que otro ninguno el capitán Diego de Abreu, caballero de mucha calidad y suerte, natural de Sevilla, a quien luego eligieron y recibieron por capitán general y justicia mayor de aquella provincia. Y hecho el juramento y solemnidad que en tal caso se requería, tomó en sí la real jurisdicción, y administró justicia en nombre de Su Majestad: de lo cual don Francisco de Mendoza quedó muy sentido y avergonzado, por ver le había salido tan incierta su pretensión. Y tomando sobre el caso su acuerdo con algunos de sus amigos y aficionados, convinieron en que la elección de Diego de Abreu era nula, y de ninguna fuerza y vigor, por no haberse podido hacer conforme la cédula de Su Majestad durante el que gobernase, y el que por su fin y muerte quedase: que hablando en propios términos él era a quien se debía obedecer por el oficio que tenía, y le había sido dado por el general Domingo de Irala: no obstante el haber hecho dejación, que para ser jurídica había de ser en manos de superior, y de quien le pudiese proveer; y pues el ayuntamiento ante quien lo hizo no lo era, todo lo hecho y actuado en esta elección era en sí ninguno. Con estos y otros pareceres se determinó don Francisco a tornar a recobrar el uso y administración de su oficio; para lo cual juntó todos sus amigos y aliados para prender al capitán Diego de Abreu: lo cual sabido por él, juntó con toda diligencia la más gente que pudo, e yéndose con ella a casa de don Francisco, todos armados y puestos en buen orden, llegaron donde él y los suyos estaban, y poniéndole cerco, le acometieron por todas partes. Y entrando a fuerza en sus casas, le hallaron solo y desamparado; porque luego que vieron los que lo hacían, que venía Diego de Abreu con toda la gente, lo desampararon, salvo unos pocos de más obligaciones que quedaron con él, los cuales fueron presos con él. Y procediendo por vía de justicia contra don Francisco, el capitán Diego de Abreu y sus acompañados, fue sentenciado en que le fuese cortada la cabeza públicamente: cuya rigurosa sentencia le fue notificada, y sin embargo de su apelación, fue mandado ejecutar: y habiendo hecho todas las diligencias posibles por excusar su muerte, ofreció dos hijas que tenía, una a Diego de Abreu, y otra a Ruiz Díaz Melgarejo, para que se casasen con ellas. Y ellos le respondieron,\n\n\n\n\n\n",
  id: 86
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 86",
  chapter: "Capítulo IX",
  layout: "textoporpagina",
  content: "\n    \nque lo que le convenía era, componer su alma y disponerse a la muerte, y dejarse de aquellas cosas, porque no era tiempo de ellas; con otras palabras desenvueltas y libres, como de personas que estaban llenas de pasión. Lo cual visto por él, acudió a lo que debía, al ser de cristiano y de caballero. Ajustando su conciencia, legitimó a sus hijos, don Diego y don Francisco, Doña Elvira y Doña Juana, los cuales hubo en uña noble señora llamada Doña Francisca de Angulo, con quien casó en el artículo de la muerte; mandando a sus hijos fuesen siempre leales servidores del Rey, que en ningún tiempo fuesen contra él. Y acabado esto, le sacaron al cadalso rodeado de gente armada, que estaba a la puerta del capitán Diego de Abreu donde con gran lástima de los que le vieron, por ser un caballero venerable y de tanta calidad, fue muy llorado; y él con un semblante grave y sosegado habló a todos los circunstantes, dando algunas satisfacciones de haber venido a aquel punto, atribuyéndole a justo juicio de Dios, por haber en tal día como aquel, muerto en España a su mujer, a los criados de su casa, y a un clérigo, compadre y capellán suyo, por falsas sospechas que de ambos tenía; y así dijo permitía Dios Nuestro Señor pagase esto con su muerte, por mano de otro su compadre, que lo era el verdugo llamado el Sardo, por ser natural de Cerdeña.Capítulo IXCómo el capitán Diego de Abreu despachó a España a Alonso Riquelme de Guzmán, y de cómo se perdió; y vuelta del GeneralLuego que Diego de Abreu fue electo, mandó aderezar una carabela para despachar en ella a Castilla, con la elección de su nombramiento, a Alonso Riquelme de Guzmán; y proveído lo necesario con toda diligencia, le encargó sus negocios, en cuya compañía también iba Francisco de Vergara y otras personas de satisfacción. El cual este mismo día del año de 1548 salió del puerto, y bajando por sus jornadas, iba en su conserva un bergantín en que iba Hernando de Rivera hasta la isla de San Gabriel. Y saliendo del río de las Palmas, atravesando el golfo de Buenos Aires para la isla de Flores, dejando a una mano la de San Gabriel, para de allí entrar en el ancho mar; y despedidos los unos de los otros, se fueron por la canal que va a salir al puerto de Maldonado, donde aquella noche les sobrevino una tan gran tormenta, que dio con la carabela en una encubierta laja, que está en la misma canal, que hoy llaman la Laja del Inglés,\n\n\n\n\n\n",
  id: 87
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 87",
  chapter: "Capítulo IX",
  layout: "textoporpagina",
  content: "\n    \npor haberse perdido en ella, pocos años ha, un navío de esta nación que corría aquella costa. Por manera que la carabela, que estaba encallada sobre las peñas, se abrió por los costados, y entraba tanta agua por ellos, que no podían agotar: no cesando en todo este tiempo la furiosa tormenta: y recelando todos la perdición que tan cercana tenían, acordaron desamparar el navío y salirse a tierra firme, al peligro y riesgo de venir todos a poder de los indios de aquella tierra, que son los Charrúas, crueles y bárbaros. Y para poderlo hacer, cortaron el mastelero mayor, y con tablas y maderas hicieron una gran balsa juntamente con el batel, para que pudiesen atravesar aquel brazo y salir a tierra. Y cesando un poco la tormenta, tuvieron lugar de poderlo hacer y tomar la costa, adonde luego acudieron los indios que corren por toda ella; y haciendo un reparo entre el río y la barranca, se pudieron guarecer de la furia de ellos. Y caminando aquella noche por la costa arriba en busca del bergantín, dieron en unas lagunas, en que pasaron mucho trabajo para atravesarlas a nado; y aquella misma noche sobrevino de la parte del Sud otra mayor tormenta que la pasada, que desencalló la carabela de donde estaba, y dio con ella hecha pedazos en aquella costa, con la cual esta misma noche vinieron a topar con gran espanto y admiración de todos. Y cerca del día prendieron dos indios pescadores, de quienes supieron de cómo el bergantín estaba recogido en una caleta, dos leguas adelante; y por darle alcance, salid luego Francisco de Vergara con un compañero a dar aviso de lo que pasaba: por manera que con esto fue Dios servido poder tener embarcación en que volverse todos a la Asumpción, como lo hicieron al tiempo que el general Domingo de Irala había ya vuelto de la jornada: y como en el capítulo pasado referí, todo el campo le había tornado a reconocer por superior, y pedídole perdón los culpados de la desobediencia pasada. El cual, habiendo llegado cuatro leguas de la Asumpción, le salieron todos a recibir, reconociéndole por su General y Justicia mayor, sin que el capitán Diego de Abreu fuese parte para otra cosa. Y así determinó salirse luego del pueblo con todos sus amigos, no le osando aguardar ni resistir en aquel puesto; y entrándose por los pueblos de indios del Ibitiruzá, y tierras del Acay, se hizo fuerte. No mucho después llegaron a la Asumpción el capitán Nuflo de Chaves, Miguel de Rutia y Rui García, que venían del Perú, de aquel despacho que Domingo de Irala hizo al presidente Gasca: los cuales volvían muy aderezados de vestidos, armas y otros pertrechos \n\n\n\n\n\n",
  id: 88
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 88",
  chapter: "Capítulo IX",
  layout: "textoporpagina",
  content: "\n    \nde sus personas, con socorros y ayudas que para ello se le mandó dar. Traían en su compañía de aquel reino al Capitán Pedro de Segura, un hidalgo honrado de la provincia de Guipúzcoa, que había sido soldado imperial en Italia, y de los antiguos de las Indias; con quien juntamente venían Joanes de Oñate, Francisco Conton, Pedro Toledo, Alonso Martín de Trujillo, y otros muchos, que por todos eran más de cuarenta soldados. Metieron de esta jornada en aquella provincia algunas cabras y ovejas, y habiendo tenido en el camino con los indios muchos reencuentros y escaramuzas, rompieron por muchos pueblos, y llegando a cierto paraje, una noche fueron cercados de más de treinta mil indios: y estando para acometer al real, y darle asalto, no lo osaron hacer, porque entendieron ser sentidos, por haber oído toda aquella noche los balidos de los cabrones con las cabras, creyendo eran los españoles que estaban puestos en arma, por cuya causa se retiraron. Recibida de Domingo de Irala toda esta compañía, fueron muy satisfechos de no haber estado en su mano poderles aguardar, como quedó dicho, por las causas referidas. Pero, pasados algunos días, personas mal intencionadas se conjuraron en dar de puñaladas a Domingo de Irala, siendo autores de este negocio el capitán Camargo, Miguel de Rutia, y el sargento Juan Delgado, con otros que habían ido del Perú: y siendo el negocio descubierto, fueron presos, y averiguada la verdad, se dio garrote a Miguel de Rutia y al capitán Camargo: usando con los demás culpados de clemencia, fueron perdonados; no cesando sin embargo de esto, algunos intentos apasionados, que no dejaban de tener a la república muy turbada. En especial el capitán Nuflo de Chaves hacía instancia en pedir la muerte de don Francisco de Mendoza, por haberse casado en este tiempo con Doña Elvira Manrique, su hija; y siguiéndose la causa contra los agresores, salieron en busca de ellos como a perturbadores de la paz, y tumultuarios de la república. Fueron presos Juan Bravo y Rengifo, y luego ahorcados; y otros que fueron habidos, fueron puestos en estrecha prisión; especialmente Rui Díaz Melgarejo, que por cierta ventura fue libre de ella, echándole fuera un negro esclavo de Nuflo de ChavesÑuflo de Chaves o menos conocido como Nufrio de Chávez (Cáceres de la Extremadura leonesa, Corona de España, 1518 – aldea Mitimi de la laguna de los Xarayes, gobernación de Santa Cruz de la Sierra del Virreinato del Perú, 3 de octubre de 1568) era un explorador y conquistador español, conocido por sus exploraciones del actual territorio del Paraguay y la zona suroriental de la actual Bolivia y por haber fundado la ciudad de Santa Cruz de la Sierra en 1561. Fue el continuador de la política colonizadora de Domingo Martínez de Irala.Su actividad permitió extender la colonización por esas regiones. Fue el primer hombre que atravesó el continente, partiendo del Atlántico al Pacífico, para lograr la conquista del centro de América meridional. Su temprana muerte no supuso la interrupción de la actividad conquistadora de todo el territorio que hoy conforma esa extensa comarca, porque su legado quedó en las gentes de la vieja ciudad, quienes extendieron su cultura por todo lo que hoy se conoce como el Oriente Boliviano.. Visto por algunos caballeros, que andaban en estos desasosiegos, el riesgo de sus vidas, y el poco fruto que hacían en andar retirados de la obediencia de quien estaba en nombre de Su Majestad, acordaron de reducirse a su servicio, y a la paz general de la república: y habiéndose tratado por mano de religiosos y sacerdotes, hallaron en el General muy entera voluntad; y venido al fin de este negocio, para más\n\n\n\n\n\n",
  id: 89
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 89",
  chapter: "Capítulo X",
  layout: "textoporpagina",
  content: "\n    \nconfirmación de ella se concertó que Francisco Ortiz de Vergara y Alonso Riquelme de Guzmán, casasen con dos hijas del General; y lo mismo hicieron con otras el capitán Pedro de Segura y Gonzalo de Mendoza: con cuyos vínculos vinieron a tener aquellos tumultos el fin y concordia que convenía con verdadera paz y conformidad; en que fue Su Majestad muy servido con gran loa y crédito del celo y cristiandad de Domingo de Irala. Solo el capitán Diego de Abreu con algunos de sus amigos quedaron fuera de esta confederación, queriendo sustentar su opinión, porque le pareció no le convenía otra cosa, ni le era muy segura, por tener contra sí a Nuflo de Chaves, yerno de don Francisco de Mendoza, a quien él hizo degollar.Capítulo XDe cómo en este tiempo salió el capitán Juan Núñez de Prado del Perú a la población de la provincia de Tucumán, después que el de la Gasca venció a Gonzalo PizarroDespués que el de la Gasca el año de 1543 venció en la batalla de Xaqui-xaguana a Gonzalo Pizarro, luego el siguiente dio facultad y comisión a Juan Núñez de Prado para que tomase a su cargo la población y conquista de la gobernación de Tucumán, que se había dado a Diego de Rojas. El cual, acudiendo a lo que en esto convenía, juntó ochenta y tantos soldados con muchos indios naturales, y pertrechado de armas y caballos, hizo con ellos su entrada por la provincia de los Chicuanas el año de 1550. Y estando con su campo en los Chichas, en el pueblo de Talina, llegó allí Francisco de Villagra, que iba para Chile con socorro de gente a don Pedro de Valdivia, gobernador de aquel reino; donde vístose ambos capitanes, Villagra con poco decoro le sonsacó a Juan Núñez de Prado muchos soldados e indios de los que llevaba en su compañía, sin ser parte a impedirlo las suplicaciones y buenos respetos suyos. Francisco de Villagra se aseguró de todo lo que le pudo ejecutar; de que quedó muy sentido Juan Núñez de Prado; y haciendo su jornada con sesenta soldados que le quedaron, entró en la provincia de Tucumán con muy buenos sucesos: llegó al territorio de aquel término, donde fundó cerca de la Sierra una ciudad que le llamó del Barco; a contemplación del licenciado Gasca que era natural del Barco de Ávila. Y habiendo hecho la planta de su población, y un fuerte en que se metió \n\n\n\n\n\n",
  id: 90
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 90",
  chapter: "Capítulo X",
  layout: "textoporpagina",
  content: "\n    \ncon su gente, salió con treinta soldados a correr la redonda de la tierra, y traer a su amistad algunos pueblos de la comarca: y caminando una noche a reconocer unas poblaciones de indios, llegó a un río, en cuya ribera estaba alojado un gran real de españoles con mucha gente y caballos; de que quedaron confusos de quien podría ser: y reconociéndole de más cerca, vinieron a entender que era Francisco de Villagra, que torciendo su derrota había entrado por esta provincia por la falda de la Cordillera, con ánimo de emprender por aquella parte nuevo descubrimiento; de que Juan Núñez de Prado tomó grande, indignación acordándose del mal término que con él en los Chichas había tenido: y sin más deliberación determinó prenderle, y castigar, por entrársele en su Jurisdicción y gobierno con mano armada. Y así mandó al capitán Guevara que con unos soldados le acometiese por una parte, y que él asaltaría por otra su real, y en el ínterin que le procurase prender o matar. El capitán Guevara se fue derecho a la tienda de Villagra, encontrando con los que estaban de guardia, donde entraron por fuerza. A cuya hora ya estaba Villagra armado y con su espada y rodela; y abrazándose con el capitán Guevara, le dio un encuentro con la rodela que cayeron ambos en el suelo: y asiéndole a la guarnición de la espada, se la sacó Villagra de la mano, y él arremetiendo a un soldado que junto a él estaba, le quitó la suya, en tiempo que los unos y los otros andaban revueltos a cuchilladas, y todo el real despavorido con el alarma y sobresalto, que por la otra parte les iba dando Juan Núñez de Prado. Con lo cual se retiraron muchos, y desampararon sus tiendas, y con otros que acudieron al socorro de Villagra, vino a revolverse tan gran ruido que le convino a Juan Núñez de Prado tocar a recoger la trompeta, que era la seña que tenía dada a su gente; y con buen orden fueron saliendo adonde tenían sus caballos no siéndole poco dificultosa esta retirada al capitán Guevara, sin haber hecho ningún efecto de lo que pretendía, mas de haber habido algunos heridos de ambas partes: y junto con su capitán, se fueron a gran prisa para su pueblo. Villagra quedó encendido en ira y enojo, aunque le pareció como cosa de sueño; y así al mismo punto determinó seguirlos, llevando consigo sesenta soldados, con los cuales les fue a los alcances. Y Juan Núñez de Prado, llegado a su fuerte, le pareció no sería parte a resistirle, y así determinó irse a la sierra con alguno de su compañía, donde se retiró en lo más áspero, dejando en el lugar toda la demás gente que a su cargo tenía. Villagra se apoderó luego del fuerte, y juró de no salir de él hasta haber a las manos a Juan \n\n\n\n\n\n",
  id: 91
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 91",
  chapter: "Capítulo X",
  layout: "textoporpagina",
  content: "\n    \nNúñez de Prado y escarmentarle como merecía y metiéndose por medio en este negocio un honrado sacerdote que allí tenían por cura, trató con Villagra que fuese servido de remitir lo pasado con alguna concordia de amistad, y él lo admitió con una condición, de que Núñez de Prado se le sometiese, dándole obediencia como a superior, en nombre del gobernador don Pedro de Valdivia; y que con esto le haría toda amistad, y le dejaría en su tenencia y oficio. Y aunque a Núñez de Prado se le hizo esto dificultoso, fue aconsejado de sus amigos lo hiciese, pues no podía haber otro medio. De manera que, en esta conformidad, él y todo el cabildo le recibieron, y dieron la obediencia como a superior, en nombre de Su Majestad, y a don Pedro de Valdivia, so color de incluirse aquella provincia en el gobierno y conquista de Chile. Luego que esto se concluyó, Francisco de Villagra hizo nuevo nombramiento para el gobierno de aquella provincia, a Juan Núñez de Prado; y dando orden en algunas cosas que le parecieron convenientes, se partió para Chile. Y luego Juan Núñez de Prado, vístose desembarazado de la sujeción y poderío de Villagra, renunció el poder que por él le fue dado, diciendo que no tenía necesidad de él, pues le tenía con plena facultad del presidente Gasca, gobernador general de estos reinos; y así usando de su comisión y gobierno que antes tenía, continuó su conquista y población. Llegado Villagra al reino de Chile, dio cuenta a don Pedro de Valdivia de lo que le había pasado en la provincia de Tucumán con Núñez de Prado; y como le quedaba inmediato y sujeto a su gobierno. Por lo cual despachó luego a esta provincia, por su teniente general, a Francisco de Aguirre, hombre principal, conquistador antiguo del Perú, vecino y encomendero de la ciudad de Coquimbo: y entrando en esta tierra, tomó luego posesión de ella en nombre de Valdivia; como lo hicieron de allí adelante los que fueron despachados a su gobierno, la cual por este camino vino a quedar muchos años inmediata. Luego a Juan Núñez de Prado, por lo que había hecho, lo despachó procesado a Chile, de donde se fue a los Reyes, y tuvo negociación para tornar a entrar en esta provincia, aunque no lo pudo poner en efecto. Y así en este tiempo Francisco de Aguirre administró el oficio de Teniente General que le fue cometido por Valdivia; y por causas convenientes que le movieron, trasladó la ciudad del Barco de la Sierra sobre el Río del Estero, en la comarca de los Juris, mudándole el nombre en la ciudad de Santiago, que hoy tiene, y en cuyo lugar permanece. Está en altura de 29 grados, distante de la ciudad de la Plata\n\n\n\n\n\n",
  id: 92
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 92",
  chapter: "Capítulo XI",
  layout: "textoporpagina",
  content: "\n    \n1200 leguas, y es cabeza de aquella gobernación. Repartió Francisco de Aguirre los indios naturales de esta jurisdicción en 56 encomenderos: empadronáronse 47000 indios Jurís y Tenocotes, así en el Estero como en el río Salado y en la Sierra. Es tierra fértil en especial en los bañados, como en otro lugar se ha dicho; con que la deja el río dispuesta para las sementeras de los naturales y españoles. Y sucediéndole en el oficio Juan Pérez de Corita, fundó una ciudad en el Valle de Calchaquí, y otra en el de Conando, que la llamó la ciudad de Londres. Y corriendo el tiempo adelante, fue provisto a esta provincia un fulano Castañeda por los gobernadores de Chile, y por su mal gobierno vinieron a despoblarse estas dos ciudades por los indios naturales de aquella tierra, con pérdida y muerte de mucha gente española: cuyos sucesos por no ser   —83→   propios de esta historia, no los refiero; hasta que esta provincia fue proveída por Su Majestad, despachando al gobierno de ella a Francisco de Aguirre, como más largamente adelante diremos.Capítulo XIDe la jornada que hizo Domingo de Irala, llamada, la Mala Entrada, etc.Pacificados por Domingo de Irala los bandos y diferencias que había entre los españoles con las amistades y casamientos que tenemos referido, determinó hacer una jornada importante, en la cual pudiese descubrir algunas de las noticias de fama que tenia en la tierra; pues donde tanta nobleza y cantidad de soldados había, no era razón dejar de buscar el aprovechamiento y comodidad que les convenía. Y entrado el año de 1550 se publicó la jornada para que todos los que quisiesen ir a ella se alistasen; y así con este deseo se ofrecieron muchas personas de cuenta, capitanes y soldados, que por todos fueron 400 españoles, y más de 4000 indios amigos: con los cuales salió de la Asumpción por mar y tierra en bergantines y bajeles, y otras embarcaciones donde llevaban sus mantenimientos y vituallas, y más de 600 caballos. Dejó el General por su lugarteniente en la ciudad de la Asumpción al contador Felipe de Cáceres; y partido que fue a la jornada, mandó luego recoger los que andaban descarriados y fuera de orden por la tierra; porque de las ocasiones pasadas habían quedado algunas reliquias de bandos y parcialidades del capitán Diego de Abreu; a cuyo mandato acudieron todos los más a la obediencia de la real \n\n\n\n\n\n",
  id: 93
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 93",
  chapter: "Capítulo XI",
  layout: "textoporpagina",
  content: "\n    \njunta, quedándose solo con sus amigos Diego de Abreu, con lo cual todavía no cesaban los motivos y recelos de alguna turbación. Para cuyo remedio pareció a Felipe de Cáceres ser conveniente prenderle, y para poderlo hacer con más comodidad, despachó veinte soldados con un caudillo llamado Escaso, para que le buscase y trajese preso con los demás que con él andaban. Salidos al efecto, llegaron a un monte muy áspero donde estaba retirado, y entrados dentro de él, vieron en una espesura de grandes árboles una casa cubierta de palmas, las paredes de tapia francesa, y reconociendo con la obscuridad de la noche la gente que estaban dentro, vieron que había solo 4 ó 5 españoles, y uno de ellos el capitán Diego de Abreu que estaba enfermo de los ojos, y por el gran dolor de un accidente no podía dormir: y descubriéndole por un agujero el caudillo Escaso, le apuntó con una jara de ballesta, la cual disparada, le atravesó con ella el costado de que luego cayó muerto, y así le trajeron atravesado en un caballo a la Asumpción. Y porque el capitán Melgarejo reprobó este hecho, y tomó por suya la causa con tanta turbación, fue preso y puesto a buen recaudo, de que Francisco de Vergara su hermano fue muy sentido; y dádose aviso de lo sucedido al General, que aun no estaba muchas leguas de la ciudad, fue necesario volver en persona a aquietar esta turbación, que estaba a pique de gran ruina. Donde llegado, despachó a Melgarejo a su real, en que había quedado Alonso Riquelme con toda la gente; y entre los dos fueron de acuerdo, que le diesen lugar para irse al Brasil, y llevar en su compañía solo un soldado llamado Flores. Diole lugar Alonso Riquelme a conseguir su intento, y partió a su jornada, atravesando por los pueblos de los indios Guaranís: entró en la provincia de los Tupís que son antiguos enemigos de los Guaranís y castellanos, y amigos de los portugueses: estos prendieron a Rui Díaz Melgarejo y a su compañero, y atados con fuertes cordeles los tuvieron tres o cuatro días, y al cabo de ellos mataron a Flores y se lo comieron con gran fiesta: diciendo a Melgarejo, que otro día harían con él otro tanto. Del cual peligro fue Dios servido librarle; y soltándose de la prisión por medio y ayuda de una india que le guardaba, llegado a San Vicente se casó con una señora llamada doña Elvira, hija del capitán Becerra, de la armada de Sanabria, como adelante diremos. Vuelto el General a su real halló menos a Rui Díaz Melgarejo que no dejó de sentirlo, y así le escribió luego una carta de mucha amistad, y le envió un socorro de ropa blanca y rescate para el camino, con una espada de su misma cinta; que todo ello recibió Melgarejo, excepto la espada, por la dañada intención que llevaba contra él. \n\n\n\n\n\n",
  id: 94
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 94",
  chapter: "Capítulo XII",
  layout: "textoporpagina",
  content: "\n    \nHecho esto, continuó el General su jornada, y subiendo río arriba llegó al puerto de los Reyes donde saltó en tierra con toda su gente atrayendo al real servicio todos los pueblos de indios comarcanos: y caminando por los llanos entre el Sud-oeste y Occidente, descubrieron muchas naciones, que unas les salían de guerra, y otras de paz, y con diferentes sucesos fueron atravesando la tierra hasta los indios Bayás. Y pasando adelante bojeando la cordillera del Perú, dieron en unos indios que llaman Frentones, y por otra parte se dicen Nonogayes, gente muy belicosa; de los cuales informados de lo que había en la tierra, les dijeron estar metidos en los confines de la gobernación de Diego de Rojas, y a mano derecha las amplísimas provincias del reino del Perú, de donde entendieron, que por aquella parte no había más que descubrir. Y así determinados a revolver para el Norte, dieron vuelta, y prosiguiendo su derrota, se les amotinaron más de mil quinientos indios amigos, de los que llevaban por haber tenido noticia, que no muy lejos de aquella distancia estaban poblados otros de su misma nación, que llamaban Chiriguanos, y se fueron en busca de ellos, como lo habían hecho otra vez esta misma gente el año de 1548. Con esto, y las muchas aguas que sobrevinieron, les fue forzoso ir buscando donde hacer su invernada, con intento de entrar en la provincia del Dorado y descubrir los Moyones, que caen de la otra parte del río Guaypay, que, como dije atrás, es uno de los brazos del Marañón. Y revolviendo con esta determinación, fueron tantas las aguas, que anegaron toda la tierra: las unas de las vertientes de los ríos del Perú; y las otras de los mismos ríos de aquella tierra, por cuya causa perdieron todos los caballos, más de 1500 amigos, y todo el servicio que habían adquirido de aquellas naciones, padeciendo excesivos trabajos que españoles han pasado en las Indias. De que resultó que muchos de ellos murieron de enfermedades que les sobrevinieron; con que les fue forzoso dar vuelta para los navíos, con tanta, dificultad que no fue de poca ventura haberlos podido tomar, según la grande inundación de aquella tierra, que causó tanta perdición; por lo cual la llamaron la Mala Entrada, etc.Capítulo XIIDe la población del río de San Juan, y de cómo no se pudo sustentar, y de la pérdida de la galeraDespués que el general Domingo de Irala volvió de la Mala \n\n\n\n\n\n",
  id: 95
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 95",
  chapter: "Capítulo XII",
  layout: "textoporpagina",
  content: "\n    \nEntrada, hizo entender a los oficiales reales de Su Majestad la grande importancia que había de tener poblado un puerto para escala de los navíos en la entrada del Río de la Plata; y de acuerdo de todos fue determinado se pusiese en efecto. Para lo cual nombraron el capitán Juan Romero, hombre principal y honrado; y juntando en su compañía ciento y tantos soldados, salió de la Asumpción en dos bergantines hasta ponerse en el paraje de Buenos Aires: y tomando a mano izquierda a la parte del Norte, paso cerca de la isla de San Gabriel y entró por el río del Uruguay, donde a dos leguas surgió en el río de San Juan, y allí determinó de hacer la fundación que le estaba cometida: y puesto en efecto, nombró sus oficiales y regidores, llamándole la ciudad de San Juan, cuyo nombre quedó hasta ahora a aquel río. Pasado algún tiempo, los naturales de la tierra procuraron impedir la fundación, y hicieron muchos asaltos a los españoles, que no les daban lugar a hacer sus sementeras: por cuya causa, y por el poco socorro y recurso que tenían, padeciendo mucha necesidad y hambre, y haciéndolo saber Juan Romero al General, fue acordado despachar una persona de satisfacción para que viese y considerase el estado de este negocio, y las dificultades que se ofrecían, y conforme a ellas se hiciese lo que más triste conviniese. Para cuyo efecto se cometió al capitán Alonso Riquelme, el cual saliendo de la Asumpción en un navío, que llamaban la galera, con 60 soldados, y discurriendo por su camino, antes del río de las Palmas, entró por el de las Carabelas que sale al propio Uruguay poco más adelante que el de San Juan; y atravesando aquel brazo llegó a este puerto con mucho aplauso de toda la gente. Hallola muy enflaquecida; y que estaba desconfiada de poder salir de allí con vida, con los continuos asaltos que los indios les daban: por cuya causa, y otras de consideración bien vistas, fueron todos de acuerdo de desamparar por entonces aquel puerto, y se metieron con toda la gente en los navíos que allí tenían; y subiendo río arriba llegaron una mañana a tomar tierra sobre unas barranqueras muy altas y despeñadizas, donde quisieron descansar y comer un bocado, haciendo fuego para guisar. Y estando quince o diez y seis personas sobre aquellas barrancas, se desmoronaron súbitamente, y cayeron hasta dar en el agua, llevándose consigo toda la gente que arriba estaba: los cuales sin escapar ninguno se despeñaron y fueron abogados, habiendo sido el derrumbo de la tierra tan grande, que alteró todo el río, y le movió de tal manera que la galera que estaba cerca, fue trabucada como si fuera cáscara de avellana; y vuelta boca abajo, con la quilla arriba, fue por debajo del agua más de mil pasos río abajo, hasta que topando el mástil con un bajo, se detuvo en una punta. Donde llegando toda la gente la \n\n\n\n\n\n",
  id: 96
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 96",
  chapter: "Capítulo XIII",
  layout: "textoporpagina",
  content: "\n    \nvolvieron boca arriba, y hallaron una mujer que había quedado adentro, siendo Dios servido no se hubiese ahogado en todo este tiempo; en el cual no fue menos el peligro que los demás padecieron con los indios enemigos, que al mismo punto que esto sucedió fueron acometidos de ellos, viendo la ocasión tan a propósito para hacerles algún perjuicio: y peleando con ellos los nuestros con gran valor, fueron resistidos y ahuyentados, y con la buena diligencia y orden de los capitanes, fue Dios servido de librarlos de tan manifiesto peligro. Lo cual sucedió el año de 1552, primero de noviembre, día de Todos los Santos; y otras veces este mismo día han sucedido en esta provincia grandes desgracias y muertes: por cuya razón guardan en ella inviolablemente la festividad de dicho día y su víspera hasta el otro siguiente, sin moverse en cosa ninguna, aunque sea de necesidad muy precisa: con que, gracias a Nuestro Señor, se ha visto por evidencia el favor y auxilio con que la Divina Majestad la está socorriendo y ayudando.Capítulo XIIIDe una jornada que Domingo de Irala hizo a la provincia de GuayraEn este tiempo llegaron a la ciudad de la Asumpción ciertos indios principales de la provincia de Guayra a pedir al General les diese socorro contra sus enemigos Tupís, de la costa del Brasil, que con ordinarios insultos los molestaban y hacían muy grandes daños, con muertes y robos, con favor y ayudas de los portugueses de aquella costa: proponiendo la obligación que había, como a vasallos de Su Majestad de ser amparados y favorecidos; por manera que el General, habido su acuerdo, determinó ir personalmente a. aquella provincia a remediar estos agravios: y prevenido lo necesario, aprestó una buena compañía de soldados y cantidad de amigos, y caminó por tierra con su gente; y pasando por muchos pueblos de indios de aquella provincia, con mucho aplauso y amistad de toda la tierra, llegó al río del Paraná, a un puerto que baja sobre aquel gran salto, de que he hecho mención; donde los indios vinieron a recibir al General, proveyéndole de comida, y de todo lo demás que había menester. Y traídas canoas y balsas, pasó a aquella parte a un pueblo de un cacique llamado Guayra, de quien fue hospedado. Y convocando a los indios de la provincia, juntó mucha cantidad de ellos, y por su consejo y parecer, navegó por el Paraná arriba hasta los pueblos de los Tupís; los cuales\n\n\n\n\n\n",
  id: 97
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 97",
  chapter: "Capítulo XIII",
  layout: "textoporpagina",
  content: "\n    \ncuales, con mucha presteza se convocaron y tomaron las armas, saliéndole a resistir por mar y tierra, con quienes tuvo una trabada pelea en un peligroso paso del río, que llaman el Salto del Ayembí; y desbaratando a los enemigos, los puso en huida, y entró en el pueblo principal de la comarca con muerte de mucha gente; y pasando adelante tuvo otros muchos reencuentros, con que dentro de pocos días trajo a sujeción y dominio aquella gente. Y después de algunos tratos de paz, prometieron de no hacer más guerra a los indios guaranís de aquel gobierno, ni entrarles por sus tierras como hasta entonces lo habían hecho: y despachando por aquella vía del Brasil a Juan de Molina, que fuese por procurador de la provincia a la corte, con relación y larga cuenta a Su Majestad del estado de la tierra, dio vuelta con su armada con buen suceso; y llegado al río del Piquirí, trató con los naturales de él, si habría comodidad y disposición de camino para bajar por aquel salto, dejando el mayor riesgo y peligro a una parte, hasta salir a lo más llano y navegable: a lo cual los indios le pusieron muchas dificultades, por medio de un mestizo llamado Hernando Díaz. Este era un mozo mal inclinado y de peor intención; y por haber sido castigado del General otras veces, por sus liviandades, estaba sentido y agraviado; y así, intérprete infiel, le dijo: que los indios decían ser fácil el bajar en canoas por aquel río abajo, dejando arriba el salto principal, que este era imposible poderle navegar. Y aunque en lo demás era el peligro muy grande, con todo, se dispuso el General a que se llevasen por tierra muchas canoas y se echasen abajo del salto y de allí con cuerdas y maromas se fuesen poco a poco río abajo, hasta donde se pudiesen cargar y hacer su navegación. Juntaron más de cuatrocientas canoas, y con muchos millares de indios las llevaron más de cuatro leguas por tierra, hasta ponerlas en un pequeño río que sale al mismo Paraná: desechando con esto todo lo que les pareció ser malo y peligroso; y bajando con ellas con mucha dificultad, salieron de unos grandes borbollones, donde hicieron balsas, juntando dos y tres canoas para cada una; y cargadas de todo lo que llevaban, navegaron por este río, huyendo de una parte y otra de los riesgos y peligros que a cada paso topaban. Hasta que repentinamente llegaron a uno, que llaman Ocayeré, donde sin poder huir ni apartarse del peligro, se hundieron y fueron sorbidas más de cincuenta balsas y otras tantas canoas, con mucha cantidad de indios y algunos españoles que iban en ellas: donde sin duda ninguna todos perecieran, si media legua antes, el General con toda su compañía no hubiera saltado en tierra: los cuales a vista de las balsas venían caminando\n\n\n\n\n\n",
  id: 98
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 98",
  chapter: "Capítulo XIII",
  layout: "textoporpagina",
  content: "\n    \ncaminando por la orilla del río, por las peñas y riscos que a una mano y otra lleva. Con cuyo suceso el General quedó en punta de perecer, por ser toda aquella tierra asperísima y desierta; donde los más de los amigos naturales de la provincia le desampararon: de manera que les fue forzoso salir rompiendo por grandes bosques y montañas hasta los primeros pueblos; y porque mucha gente de la que traía iba enferma y no podía caminar por tierra, dio orden para que se metiesen en algunas canoas que habían quedado con los mejores indios amigos que traían, y se fuesen poco a poco, llevándolas a la sirga río abajo: yendo por capitán y caudillo un hidalgo de Extremadura, llamado Alonso de Encina. Este acudió a lo que se le encargó, con tanta prudencia y cuidado, que salió de los mayores peligros del mundo; en especial en un paso peligrosísimo del río, de una olla y remolino que como en un abismo se absorbe el agua, sin dejar a una y otra parte de la orilla cosa que no arrebate y trague dentro de su hondura, con tanta furia y velocidad, que cogida una vez es imposible salir de él, y dejar de ir a la profundidad de la olla; que es tal y tan grande que una gran nao de la India se hundirá con tanta facilidad como si fuera un batea. Aquí le hicieron los indios de aquella comarca una celada, pretendiendo echarlos a todos con sus canoas en este remolino. Alonso de Encina proveyó con grande diligencia que todos los españoles saliesen a tierra con sus armas en las manos, y acompañados de algunos amigos, fueron a reconocer el paso y la celada; y descubierta, pelearon con ellos de tal manera, que los hicieron retirar, y después de asegurados, se fueron con sus balsas y canoas poco a poco, asidas y amarradas de las proas y popas, con fuertes amarras, hasta pasarlas de una en una de aquel riesgo y peligro, de que Nuestro Señor fue servido sacarlos de aquel Caribdis y Sila, hasta ponerles en lo más apacible del río, y a salvamento: en tiempo que, por relaciones de los indios, se sabía que habían en la boca del Río de la Plata ciertos navíos de España. Sucedido este desbarate y perdición tan grande de tanta gente, el General prendió a Hernando Díaz, lengua, y estando para ahorcarle, aquella noche antes se salió de la prisión en que estaba, y huyó al Brasil, donde en aquella costa topó con el capitán Hernando de Trejo, e hizo allá otros delitos y excesos, por los que fue condenado a un destierro perpetuo en una isla desierta, de que salió con grandes aventuras que le sucedieron.\n\n\n\n\n\n",
  id: 99
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 99",
  chapter: "Capítulo XIV",
  layout: "textoporpagina",
  content: "\n    \nCapítulo XIVCómo el General mandó poblar la villa de Ontiveros en la provincia del Paraná, y de cómo algunos se retiraron en aquella tierraNo se puede negar lo mucho que esta provincia del Río de la Plata debe a Domingo Martínez de Irala, desde el punto que en ella entró, haciendo oficio de capitán y soldado, y mucho más después que fue electo por general y cabeza de los conquistadores españoles, que en ella estaban, procurando el aumento y utilidad del real servicio, la comodidad y sustento de sus vasallos: de tal manera, que con verdad se puede decir, que se le debe a él la mayor parte de la conservación de aquella tierra y los buenos efectos de ella; como se ha visto en el discurso de esta historia. El cual, habiendo considerado como hasta entonces no se había podido sustentar población alguna en la entrada de la boca del Río de la Plata, siendo tan necesario, para escala de los navíos que de España viniesen, tuvo acuerdo de hacer una fundación en el término del Brasil, a la parte del Este, sobre el río Paraná; pues era fuerza haber de cursar aquel camino, y tener comunicación y trato en aquella costa, para por aquella vía, avisar a Su Majestad del estado de aquella tierra. Juntamente convenía hacerlo, por excusar los grandes daños y asaltos que los portugueses hacían por aquella parte en los indios Carios de esta provincia, llevándolos presos y cautivos, sin justificación alguna de guerra, a venderlos por esclavos, privándolos de su libertad y sujetándolos a perpetua servidumbre. Y así con esta resolución, dio facultad al capitán García Rodríguez de Vergara para que fuese a hacer la población: y juntado sesenta soldados en su compañía con todos los pertrechos necesarios, salió de la Asumpción, año de 1554, y siguiendo su jornada con buen suceso, llegó al río Paraná, y pasando a la otra parte, fue bien recibido de todos los indios de la comarca: y considerado el puesto más acomodado para el asiento de su fundación, tuvo por conveniente hacerla una legua poco más arriba de aquel gran salto, en un pueblo de indios llamado Canenduyú, que eran muy amigos de los españoles. Pareciole a García Rodríguez ser por entonces aquel sitio el mejor y más acomodado para su pretensión, por ser en el propio pasaje del río y camino del Brasil, como por la mucha comarca de indios naturales, que entonces había; aunque después se siguieron muchos inconvenientes y daños de estar mal situada; donde se fundó el mismo año y llamó la villa de Ontiveros, de donde era natural el capitán García Rodríguez. \n\n\n\n\n\n",
  id: 100
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 100",
  chapter: "Capítulo XIV",
  layout: "textoporpagina",
  content: "\n    \nFecha su población, estuvo en ella algún tiempo hasta que Domingo de Irala le envió a llamar para otros negocios de más consideración; enviando allá persona que en su lugar tuviese en justicia aquella villa. Y habiendo llegado a ella, no le quisieron recibir, ni obedecer los poderes que llevaba; teniendo otros desacatos y libertades contra la autoridad y reputación del General: para cuyo castigo, y recoger los españoles que andaban derramados por la tierra, despachó al capitán Pedro de Segura, su yerno, con cincuenta soldados; y saliendo a su jornada por el año de 1556, llegó al río del Paraná; donde en el puerto y pasaje de aquella traviesa hizo señas de grandes fuegos y humaredas, para que le trajesen algunas canoas y balsas en que pasar el río. Entendido por los españoles que estaban en la villa, de como el capitán Pedro de Segura estaba en el puerto, fueron todos los más de acuerdo que no le diesen pasaje; antes se procurase de estorbarle e impedir su entrada; porque de otra manera, llegado que fuese, les había de salir muy caro el no haber querido admitir los poderes del General, y por muchos de los que en la villa estaban de los parciales del capitán Diego de Abreu, y de los tumultuarios que andaban por los pueblos de los indios, se concordaron con mucha facilidad los unos y los otros; tomaron luego las armas, entraron en sus canoas y se fueron a tomar una isla que estaba en el mismo río, en la traviesa de aquel pasaje, sobre la canal del gran salto: y puestos allí en arma, le requirieron se volviese a la Asumpción, y no imaginase hacer otra cosa, porque no le habían de permitir ellos en ninguna manera poner los pies en la otra parte del río, sin que primero arriesgasen sus vidas y honras; siendo más cierto tenerla él en este riesgo, que no ellos, pues estaban en sus casas. De todos estos, que tan declaradamente se amotinaron, era cabeza un inglés llamado Nicolás Colman, que aunque tenía solo una mano que era la izquierda, porque en una pendencia le habían cortado la derecha, era el más determinado y colérico soldado de cuantos allí había, como en este caso y en otros siempre lo mostró. De manera que, requerido el capitán Pedro de Segura por esta gente, y vista la insolencia de sus libertades y tiranías, determinó pasar una noche secretamente, y hacer para ello algunas balsas de madera y de tablones, y proveerse de pasaje para atravesar aquella parte. Y estando ya en el efecto, y a punto de hacerse a lo largo, salieron de la isla más de cien canoas muy grandes y fuertes, llenas de muchos indios; y acometieron a donde estaban las balsas en el puerto, con mucha gente ya embarcada, a la cual comenzaron a arcabucear con \n\n\n\n\n\n",
  id: 101
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 101",
  chapter: "Capítulo XIV",
  layout: "textoporpagina",
  content: "\n    \nuna rociada y otra; y respondiéndoles los de tierra, muy a su salvo, mataron a un soldado y algunos indios de la parte contraria; y diciendo muchas libertades, y dando sus pavonadas, y haciendo caracoles, se volvieron a la isla, la cual además de su fortaleza está puesta junto al canal de la caída principal de aquel salto, correspondiendo a otra isla, que dista de ella un tiro de arcabuz: la cual es tan larga que tiene más de catorce leguas; por cuya causa no pueden tener otro pasaje para aquella travesía, por el boquerón y distancia que hay entre las dos islas; que por la parte de abajo, que es la del Salto está muy segura. Y continuando la defensa del pasaje, pasados ocho días, constreñidos de necesidad, el capitán Pedro de Segura dio vuelta con su compañía, a la Asumpción, donde el General recibió de este desacato grande indignación, con ánimo y presupuesto de los castigar con rigor de justicia; teniendo en este tiempo a los indios naturales de aquella provincia en mucha paz y quietud, y tan obedecido y estimado, que cualquiera cosa, por grave que fuese, siéndoles mandado de parte del General, era luego cumplido. Y así edificó en esta ciudad, en muy breve tiempo, una iglesia, que es hoy la catedral de aquel obispado: es toda de muy buena madera, bien labrada; las paredes de gruesas tapias, cubierta de duras palmas. Levantó otros edificios y casas de concejo, que ennoblecieron aquella ciudad; de forma que estaba esta república tan aumentada, abastecida y acrecentada en su población, abundancia y comodidad, que desde entonces hasta hoy no se ha visto en tal estado. Porque, además de la fertilidad y buen temperamento del suelo y cielo, es grande la abundancia de caza, pesquería y volatería que hay en aquella tierra, donde la Divina Providencia dispuso tantas y tan nobles calidades, que no se hallaran todas juntas en una parte como las que vimos en ella. Y aunque al principio no fue con ánimo de fundar en ella ciudad, el mismo tiempo lo ha ido perpetuando con la nobleza y calidad de los que la habitan, y han poblado. Está fundada sobre el río Paraguay, a la parte del Este, en tierra alta y llana, asombrada de arboleda, y compuesta de buenos campos; cuya población tomaba antiguamente más de una legua de largo y más de una milla de ancho: el día de hoy ha venido a mucha diminución. Tiene a más de la catedral, una iglesia parroquial de españoles, con otras dos o tres: la una de naturales, que es del bienaventurado San Blas, y la otra de Santa Lucía, a la cual han sido concedidas por Su Señoría muchas y muy plenarias indulgencias. Hay tres conventos de religiosos, de San Francisco, de Nuestra Señora de las Mercedes, y de la Compañía de Jesús, y un hospital de españoles y \n\n\n\n\n\n",
  id: 102
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 102",
  chapter: "Capítulo XV",
  layout: "textoporpagina",
  content: "\n    \nnaturales: la traza de esta ciudad no es ordenada por cuadras y solares de un tamaño, sino en calles anchas y angostas que cruzan las principales, como algunos lugares de Castilla. Es medianamente sana, aunque por los vapores del río suceder algunos años calenturas y accidentes de ojos por el calor grande del sol; aunque lo templa mucho la frescura de aquel río tan caudaloso. Es abundante de todo género de pescado, así grande como pequeño; y la tierra, como tengo dicho, de mucha caza de ciervos, corsos y gamos, y gran cantidad de jabalíes, que allí llaman puercos del monte. Hay muchas antas, que son unos animales del tamaño de las vacas, que no hacen daño alguno y de muy buena carne; tienen una trompa pequeña y cerviguillo muy alto, que es la mejor parte que de ella se come: mátanse de noche en ciertas aguadas donde ellas viven, y de día, en las lagunas y ríos. Ha así mismo muchos tigres, onzas y osos, y algunos leones pardos; pero no muy carniceros; y en los bosques mucha diversidad de frutas muy gustosas, dulces y agrias, con que se sustentan y regalan los naturales; y en los campos igualmente, y muy diversas. Es la tierra muy agradable a la vista, de mucha cantidad de aves, de lagunas y ríos; y de los montes y campos, en los que hay avestruces y perdices en mucha cantidad. Finalmente es abundantísima de todo lo necesario para la vivienda y sustento de los hombres; que por ser la primera fundación que se hizo en esta provincia, me pareció no ser ocioso tratar en este capítulo de las calidades de ella, por ser madre de todos los que en ella hemos nacido, y de donde han salido todos los pobladores de las demás ciudades de aquella provincia.Capítulo XVDel proveimiento que Su Majestad hizo de esta gobernación en el adelantado Juan de SanabriaDespués que Álvaro Núñez Cabeza de Vaca llegó preso a Castilla de esta provincia, y se vio por el Consejo de Su Majestad su causa, como en otra parte está referido, luego pretendieron algunos caballeros este gobierno: como fue un noble valenciano, hombre de caudal, a quien se le hizo merced de este proveimiento, aunque luego se le opuso otro caballero, vecino de Trujillo, llamado Juan de Sanabria, el cual por sus méritos pidió que Su Majestad le hiciese merced de este gobierno; de que resultaron entre ambos algunas diferencias, pasiones y desafíos que no tocan al intento de mi historia. Por manera\n\n\n\n\n\n",
  id: 103
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 103",
  chapter: "Capítulo XV",
  layout: "textoporpagina",
  content: "\n    \nmanera que Su Majestad se sirvió de le conceder a Juan de Sanabria la merced, con título de adelantado de aquellas provincias, como a los demás que lo habían tenido: y estándose aprestando de todo lo necesario en la ciudad de Sevilla, para salir con su armada, murió de su enfermedad después de haber hecho mucho gasto de su hacienda. Con cuyo fallecimiento le quedó a su hijo, Diego Sanabria, el derecho de la sucesión de este gobierno, por la segunda vida, en conformidad de la capitulación de su padre. Y porque le convino en este tiempo llegarse a la corte a negocios que de nuevo se le ofrecieron; no pudo por la brevedad del tiempo salir personalmente con su armada: y así dio orden que luego saliese del puerto de San Lúcar; y con este acuerdo se hicieron a la vela por el año de 1552, en una nao y dos carabelas, en que venía doña Mencía Calderón, mujer que había sido del Adelantado Juan de Sanabria, y dos hijas suyas, llamadas doña María y doña Mencía. Y siguiendo por su derrota, llegaron a las Canarias: venía por cabo de la gente de esta armada Juan de Salazar de Espinosa, que por negociación que de su parte tuvo, por ser criado antiguo del Duque de Berganza, le dio licencia Su Majestad para volver a esta provincia con aviso que se dio en Portugal. Pasaron así mismo otros muchos caballeros e hidalgos, entre los cuales fueron, Cristóbal de Saavedra, natural de Sevilla, hijo del correo mayor de ella, Hernando de Trejo; y el capitán Becerra, que traía su mujer e hijos en una nao suya. Y caminando por su derrota con próspero viaje, llegaron a tomar puerto a la costa del Brasil, y de allí se vinieron a la isla de Santa Catalina, y a la Laguna de los Patos, donde a la entrada de la barra de ella, se perdió el navío de Becerra; y aunque salvó toda su gente, no pudieron dejar de perder todo lo que traían dentro: y llegados a este territorio, por ciertas causas y pendencias que se ofrecieron de parte de Salazar y el piloto mayor de la armada, le depusieron del cargo y oficio que traía; y nombraron por cabeza y superior al capitán Hernando de Trejo. Con las cuales novedades mucha gente se disgustó, y se fue al Brasil; quedando con poca y desacompañado Hernando de Trejo. Y porque de esta arribada se hiciese algún servicio a Su Majestad, fueron de parecer y acuerdo de hacer una población en aquella costa; con cuya determinación allegó todos los más soldados que pudo Hernando de Trejo, y el año de 1553 fundó un pueblo que llamó de San Francisco. Es un puerto el más anchuroso y seguro que hay en aquella costa. Está en 25 grados, poco más o menos, 30 leguas de la Cananea que cae a la parte del Brasil, \n\n\n\n\n\n",
  id: 104
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 104",
  chapter: "Capítulo XV",
  layout: "textoporpagina",
  content: "\n    \ny otras tantas de Santa Catalina que tiene a la parte del Río de la Plata: es toda aquella costa muy montuosa, y cercada de grandes bosques. La cual población se continuó con la asistencia de Hernando de Trejo, que en este tiempo se casó con doña María de Sanabria, hija del Adelantado; de cuyo matrimonio hubieron y procrearon al Reverendísimo Señor don Fray Fernando de Trejo, Obispo de Tucumán, que nació en aquella provincia. Puesta en efecto la población, se dio luego aviso a Su Majestad de lo sucedido, de que se tuvo por muy bien servido, por ser aquella una escala muy conveniente para la conquista y población de aquella tierra, y su comercio hasta el reino del Perú, y las demás partes occidentales. Luego el año siguiente padecieron los pobladores muchas necesidades y trabajos, y como era toda gente de poca experiencia, no se daban ninguna maña a proveerse en las necesidades, ni a buscar de comer en aquella tierra: siendo, como es, tan abastecida de caza y pesquería. Y quien más esto sentía eran las Señoras doña Mencía, y otras de particulares que estaban en aquella población: por cuyas persuasiones y continuos ruegos, se movió Hernando de Trejo a desamparar aquel puerto, y despoblar la fundación que tenía hecha. Y conformándose todos en ello, lo pusieron en efecto, determinados a venirse por tierra a la Asumpción. Salieron, pues, su camino la mitad de la gente con las mujeres por el río del Itabucú arriba, y la otra mitad por tierra, hasta la falda de la sierra; con orden que cada noche se juntasen en su alojamiento. Y así caminaron por el mismo camino de Cabeza de Vaca; hasta que un día, de los que iban por tierra con el capitán Saavedra, sucedió que una compañía de soldados se dividió de los otros para buscar algunas yerbas y palmitos, y otras cosas de comer, y alejándose más de lo que debían, no acertaron a volver a juntarse; y siendo buscados por aquellos bosques, fueron hallados todos muertos de hambre a los pies de los árboles y palmas a que se llegaban, para cortar y comer de las raíces y troncos. Murieron en esta ocasión 32 soldados, y los demás que quedaron con el capitán Saavedra se juntaron con los del río, que iban con Hernando de Trejo: y dejadas las canoas, subieron por una alta y áspera sierra, y llegando a su cima, descubrieron unos muy extendidos campos, todos poblados de indios naturales, de quienes fueron recibidos, en especial de un cacique de aquella tierra, llamado Gapúa. Y atravesando aquel territorio llegaron al río del Iguazú. De allí pasaron adelante al de Atibajiba; que es la provincia más poblada de \n\n\n\n\n\n",
  id: 105
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 105",
  chapter: "Capítulo XV",
  layout: "textoporpagina",
  content: "\n    \nlos indios guaranís que hay en todas aquellas partes; donde descansaron muchos días. Y prevenidos de lo necesario, partieron continuando su jornada: y discurriendo por unos grandes llanos, vinieron a salir a un pueblo de indios, cuyo cacique principal se llamaba Suravañe, el cual lo recibió con mucha amistad y buen hospedaje. De allí fueron en demanda del río del Ubay, en un pueblo de indios que llaman el Asiento de la Iglesia, porque Hernando de Trejo edificó aquí una casa de oración, donde los indios eran doctrinados, y los sacerdotes decían misa: de que le quedó a este asiento hasta ahora esta nominación. Bajaron por este río en canoas y balsas hasta un pueblo de indios que llaman Aguarás, arriba del pueblo de Roque, donde hallaron muy buen acogimiento y abundancia de comida; por lo cual determinaron estar allí más de asiento, y aun con pretensión de hacer una fundación, dando aviso en el ínterin, de todo lo que se les ofrecía, a Domingo de Irala, que ya tenía nueva cierta por el Brasil, de como Su Majestad le había hecho merced de darle aquel gobierno. Y pasados algunos meses, habiendo tenido correspondencia de la ciudad de la Asumpción, se dispusieron luego a continuar su camino: y al cabo de muchas jornadas, atravesando aquella tierra que hay del Paraná al Paraguay, llegaron a la Asumpción, donde el general Irala pidió a Hernando de Trejo la razón, porque había despoblado el puerto de San Francisco; y no dando bastante satisfacción, le prendió y tuvo siempre privado, hasta tanto que todo hubiese mandato y disposición de Su Majestad. En este mismo tiempo llegaron por el río del Paraná abajo, cierta gente de la costa del Brasil, donde venía el capitán Salazar y Rui Díaz Melgarejo, casado con doña Elvira de Contreras, hija del capitán Becerra; de los cuales tenemos hecha mención, y otros hidalgos, castellanos y portugueses, el uno de ellos Cipión de Goes, con su hermano Vicente de Goes, hijos de un honrado caballero de aquel reino, llamado Luis de Goes. Estos fueron los primeros que metieron vacas en esta provincia, las cuales trajeron por tierra muchas leguas, y después por el río en balsas en que traían siete vacas y un toro, a cargo y solicitad de un fulano Gaete que llegó con ellas a la Asumpción con mucho trabajo y dificultad, por una vaca que se le señaló de salario por su trabajo. De donde quedó un proverbio en aquella tierra que dicen: son más caras que las vacas de Gaete. Y llegados ante el general Irala, el capitán Rui Díaz Melgarejo y Salazar fueron de él bien recibidos, sin memoria de las ocasiones y diferencias que entre ellos habían pasado, como de esta historia se habrá entendido.\n\n\n\n\n\n",
  id: 106
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 106",
  chapter: "Capítulo XVI",
  layout: "textoporpagina",
  content: "\n    \nCapítulo XVIDe la entrada de don Fray Pedro de la Torre, primer obispo de esta provincia; y lo que Su Majestad proveyó, etc.Muchos días había que se tenía noticia por vía de los indios de abajo, como habían llegado de Castilla ciertos navíos a, la boca del Río de la Plata; cuya nueva se tenía por cierta, puesto que la distancia del camino era grande; mas con mucha facilidad, los naturales de aquel río se dan aviso unos a otros por humaredas y fuegos con que se entienden. Y estando el General ausente de la Asumpción, por haber salido con alguna gente y oficiales de carpintería a hacer tablazón para comenzar: a poner en astillero un navío de buen porte, para despachar a Castilla; llegó una canoa de indios, que llaman Agaces, a la ciudad, expresando que en la angostura y pasaje de aquel río, quedaban dos navíos, uno grande y otro pequeño. Y otro día siguiente llegaron con más resolución; a los cuales salieron a reconocer algunas personas; y topándose en la frontera, seis leguas de la Asumpción, vieron al Obispo don Fray Pedro de la Torre, a quien como a tal prelado besaron con mucha humildad las manos; donde venía por general por Su Majestad, Martín de Orué, que había ido a la corte por procurador de esta provincia, y a costa de Su Majestad volvió a ella con tres navíos de socorro de armas y municiones, y de lo demás necesario, con el nuevo prelado. Con esto la ciudad y toda la tierra recibió mucho contento, y previno un solemne recibimiento a su pastor; el cual llegó a este puerto, y entró en la ciudad año de 1555, víspera de Ramos: cuya llegada fue de gran consuelo y gozo universal. Venían en compañía del Obispo cuatro clérigos sacerdotes, y otros diáconos y de menores órdenes, y muchos criados de su casa, la cual traía bien proveída y muy ordenada: porque Su Majestad le había hecho merced de mandarle dar ayuda de costa por su viaje, y más de cuatro mil ducados de ornamentos pontificales, campanas, libros y santorales, con otras cosas necesarias para el culto divino, que fue de grande lustre y ornato para aquella república. Venían algunos hidalgos y hombres nobles en esta armada, que todos fueron muy gratamente recibidos y hospedados. Y el buen Obispo, con todo amor y humildad, admitió a grandes y pequeños debajo de su protección y amparo, como tal pastor y prelado; recibiendo sumo contento de ver tan ennoblecida aquella ciudad con tantos caballeros y hombres principales; que dijo no le hacía ventaja ninguna de las noblezas de España. Halló once o doce sacerdotes del hábito de San Pedro, muy honrados: el padre Miranda, &lt;/div&gt;\n\n\n\n\n&lt;/div&gt;\n\n",
  id: 107
});
index.addDoc({
  section: "Libro II",
  subtitle: "página 107",
  chapter: "Capítulo XVI",
  layout: "textoporpagina",
  content: "\n    \nFrancisco Homes Payaguá, que fue después deán de aquella santa iglesia, el padre Fonseca, capellán de Su Majestad, el bachiller Martínez, Hernando Carrillo de Mendoza, el padre racionero, que era de la ciudad de Toledo, Antonio de Escalera, el padre Martín González, el licenciado Andrade y otros de quienes no hago mención, con otros religiosos de San Francisco, llamado el uno de ellos Fray Francisco de Armenia, y el otro Fray Juan de Salazar; y otros de la orden de Nuestra Señora de las Mercedes; todos los cuales, juntamente con los ciudadanos nobles y caballeros, recibieron, como tengo dicho, con la solemnidad debida a su nuevo Obispo; de que luego enviaron a dar aviso al General; el cual con el mismo gozo y contento partió luego para la ciudad, donde llegado a los pies de su pastor, se le postró humildemente, y le pidió su bendición, besándole las manos, y llorando de puro gozo y consolación; dando gracias a Nuestro Señor por tan gran merced, como todos recibían de su mano, en aquel socorro y auxilio. Luego el capitán Martín de Orue dio y entregó el pliego que traía de Su Majestad, cerrado y sellado, duplicado del que por la vía del Brasil se le había despachado con Esteban de Vergara, su sobrino; que a este tiempo ya se sabía por nueva cierta de su venida por tierra para esta ciudad, a donde en pocos días llegó con los mismos despachos, y otros que Su Majestad y Real Consejo enviaron por el buen gobierno de esta provincia, como en el libro siguiente se podrá ver.\n\n\n\n\n\n",
  id: 108
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 109",
  chapter: "Capítulo I",
  layout: "textoporpagina",
  content: "\n    \nLibro IIIEn que se prosigue el discurso de esta conquista desde el año de 1555, que Su Majestad hizo merced de este gobierno a Domingo Martínez de Irala, hasta la prisión del General Felipe de Cáceres, y la fundación de la ciudad de Santa-FeCapítulo ICómo se publicaron las provisiones de Su Majestad, y de las cosas que en virtud de ellas hizo el Gobernador Domingo de IralaAunque las cosas de esta provincia y los sucesos de ella han sido tan difusas, he procurado de mi parte reducirlas al compendio más breve que me ha sido posible; y no pudiendo más, me ha sido forzoso extenderme algún tanto, para enhilar esta historia, y sacar a luz lo que la memoria tenía puesto en olvido: en especial habiendo de computar los casos sucedidos en los años pasados, así en esta provincia como en las comarcanas, hasta que por su discurso pudiese entrar en el tiempo de las cosas presentes: para cuyo presupuesto es de saber, que luego que Domingo de Irala recibió el pliego de Su Majestad, y la merced que le hacía del gobierno y administración de aquella provincia, con otras facultades y privilegios, mandó juntar a los oficiales reales de Su Majestad y capitulares de aquella república, donde, con la solemnidad debida, fueron vistas, y leídas; y en su cumplimiento, fue recibido al uso, ejercicio y administración de aquellas provincias, en nombre de Su Majestad. Se vieron así mismo otras provisiones y cédulas en favor de los conquistadores, y para les encomendar y repartir los indios naturales de aquella tierra, y nombrar personas necesarias de consejo, y cabildo, y oficiales de la real hacienda: y finalmente para hacer todas las ordenanzas necesarias en pro y utilidad así de los españoles y encomenderos, como de los indios naturales y encomendados. Para cuyo buen efecto trató en su consejo el orden que se debía tener, en lo que convenía, empadronando los indios de aquella jurisdicción para haberlos de repartir y encomendar como estaba dispuesto: de donde salió determinado despachar cuatro personas, que fuesen a hacer copia y padrón de todos los indios con distinción de 103 partidos y comarcas, que a cada uno se le señalaron. Y vueltos con sus padrones, se hallaron 27000 indios de guerra, desde \n\n\n\n\n\n",
  id: 109
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 110",
  chapter: "Capítulo I",
  layout: "textoporpagina",
  content: "\n    \nel territorio de la dicha ciudad de la Asumpción, cincuenta leguas hacia el Norte, y otras tantas para el Este y Mediodía, hasta el río Paraná; porque los de abajo y Occidente y otros comarcanos por ser de naciones diferentes, muy bárbaras e indomables, no se podían empadronar, y repartir por entonces. Para cuya causa, y haber tantos conquistadores y gente principal a quien repartir, era poca cantidad de indios la que estaba empadronada, y como el Gobernador era tan generoso y magnánimo, deseoso de hacer bien a todos, determinó repartir aquellos que habla, lo mejor que pudiese; hasta tanto que con otras poblaciones que se hiciesen, se remediase. Y así hizo el repartimiento de estos indios en 400 encomenderos, no con poca compasión que de ellos tenía, por haberles costado tan grandes y excesivos trabajos y miserias, como él les había visto pasar en aquella tierra; y ver cuan tenue era aquella repartición para recompensar tantos méritos: y la incomodidad de los naturales, que por ser tan pocos habían de ser muy trabajados: porque hubo muchas encomiendas de a 30 y 40 indios. Hecha la repartición, hizo ciertas ordenanzas muy convenientes al bien de los indios y encomenderos de la provincia y su buen gobierno y estado, que hoy día se guardan, por estar aprobadas por Su Majestad. Hizo así mismo regidores, alcaldes ordinarios y de la hermandad, que fueron, Francisco Ortiz de Vergara y el capitán Juan de Salazar de Espinosa; nombró por alguacil mayor de la provincia a Alonso Riquelme de Guzmán, y por subteniente general al capitán Gonzalo de Mendoza; con cuyas elecciones, y ordenanzas se hallaba la república, en esta sazón, con gran prosperidad: y con el regimiento y buen gobierno, ninguno excedía del límite que debía; procediendo cada cual a su oficio y arte y demás cosas necesarias, que en todo había particular cuidado. Tenían señalados dos maestros de niños, a cuyas escuelas acudían más de dos mil personas, donde eran enseñadas con muy buena doctrina, que era para alabar a Nuestro Señor: y esto en tanto grado, que el nuevo prelado dijo muchas veces en el púlpito, que estimaba y tenía en tanto aquel obispado, como el más calificado de Castilla. Y puestas las cosas de la república y exterior en tan buen estado, se dio a las que convenían a lo espiritual, con tanto fervor y caridad del pastor y de sus ovejas, que parecía estar todos conjuntos y aunados, en una voluntad y benevolencia. Y fecho lo que convenía, el Gobernador y toda la república estaban con la conformidad y gobierno conveniente; así acerca de los españoles y encomenderos, como de los naturales indios de la provincia, como en adelante diremos.\n\n\n\n\n\n",
  id: 110
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 111",
  chapter: "Capítulo II",
  layout: "textoporpagina",
  content: "\n    \nCapítulo IICómo el Gobernador envió al capitán Pedro de Zabala Segura a despachar la nao que vino de Castilla al puerto de San GabrielPocos días después de la llegada de Martín de Orue con el Obispo, don Fray Pedro de La-Torre, llegó del Brasil Esteban de Vergara con el duplicado del pliego de Su Majestad, para el Gobernador, en que venían otras cédulas y provisiones reales, en conformidad de las nuevas ordenanzas que Su Majestad hizo en Barcelona para el buen gobierno de las Indias; con algunas bulas apostólicas, e indulgencias concedidas a las iglesias y cofradías de aquella ciudad, en especial a la iglesia de Santa Lucía, a quien fueron concedidas grandes y plenarias indulgencias, de que recreció a todos los fieles suma devoción y consuelo. Y habiendo de dar cuenta a Su Majestad del estado de la tierra en la nao que quedó en la boca del Río de la Plata, en la isla de San Gabriel, se despachó al capitán Pedro de Segura con los pliegos y despachos que se enviaron al real consejo; y para que bajo de sus órdenes fuesen los pasajeros que habían de ir a Castilla, y traer todo lo que en la nao había quedado de armas y municiones de Su Majestad, que enviaba para el sustentó y conquista de está Provincia. Y así salió de esta ciudad en un bergantín, con una compañía de soldados, donde así mismo iba el capitán García Rodríguez para Castilla, por orden del Rey, y don Diego Barúa, del orden de San Juan, por llamamiento de su Gran Maestre: para lo cual, y lo demás que acerca de la real hacienda se había de traer, se le dio por el Gobernador y oficiales reales a Pedro de Segura, la comisión y despacho conveniente; en virtud de la cual, habiendo llegado donde estaba la nao proveída de lo necesario, embarcó la gente y pasajeros y la despachó. También se embarcó en este navío Jaime Resquin de quien ya hemos hecho mención; el cual llegado a Castilla fue proveído por Gobernador de esta provincia: y por ciertos sucesos que en el mar tuvo, no llegó con su armada a ella, siendo una de las mejores Y más gruesas que habían salido para esta conquista. Despachada, como tengo dicho, la nao y pasajeros, volvió el capitán Pedro de Segura en su bergantín el río arriba, trayendo en su compañía las personas que habían venido de Castilla, y quedaron en la nao: entre los cuales venía el capitán Gonzalo de Acosta con dos hijas suyas, que la una de ellas casó con el contador Felipe de Cáceres. Llegó a la Asumpción este hidalgo portugués, que había ido por capitán en la carabela en que fue preso Álvaro Núñez Cabeza de Vaca, y por orden de Su Majestad volvió por piloto mayor de \n\n\n\n\n\n",
  id: 111
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 112",
  chapter: "Capítulo II",
  layout: "textoporpagina",
  content: "\n    \nla armada a esta provincia, que con próspero suceso hicieron su viaje hasta tomar la boca del Río de la Plata. Fueron repartidas muchas de dichas armas a los soldados y personas que las habían menester, en moderados precios, con acuerdo y parecer de los oficiales reales y del Gobernador. Después de lo cual despachó Domingo de Irala al capitán Nuflo de Chaves a la provincia de Guayra, para que redujese a los naturales de aquella tierra, y remediase el desorden de los portugueses del Brasil que tenían entrado en los términos de este gobierno, asaltando los pueblos de los indios naturales, para llevarlos presos y cautivos al Brasil, donde los vendían y herraban por esclavos. Y con esta orden salió Nuflo de Chaves con una compañía de soldados, y llegó al río del Paraná, poniendo en orden aquella tierra, y procurando conservar la paz y amistad de los naturales; y con su acuerdo pasó adelante, y entró por otro río que viene de la costa del Brasil, llamado Paranapané, muy poblado de grandes y gruesos pueblos, de quienes fue bien recibido: y dejando este río, navegó por otro, que entra en él a mano derecha, llamado Atibajiba, muy caudaloso y corriente de muchos arrecifes y saltos, todo el poblado de una multitud de indios: y pasando por ellos, llegó a los fronterizos, que estaban con fuertes palizadas, por sus enemigos Tupís y Tobayarás del Brasil y de los portugueses de aquella costa. Donde habiéndolo asegurado con papeles y cartas que les dio, para aquella gente, fue revolviendo por otro río, y saltando en tierra en los pinales de aquel territorio, visitó a los indios que por allí había, y puso freno a la libertad y malicia de sus enemigos, que como tengo dicho los molestaba. Hecho esto, dio vuelta por otro camino, y llegando a una comarca de indios que llaman Peabeyú, determinaron dar sobre él; y un día, estando alojado, acometieron al real gran multitud de indios, inducidos de un hechicero que ellos tenían por santo, llamado Cutiguara, que les dijo que los españoles traían consigo pestilencia y mala doctrina; por lo cual se habían de perder y consumir, y que toda la pretensión de ellos era quitar a los indios sus mujeres y hijas, y reconocer aquellas tierras, para venirlas después a poblar y sujetar. Y con esto se convocaron para hacerles guerra; y con confianza de salir vencedores, se pusieron en campaña, y cercaron a los españoles, y con tal furia y determinación los acometieron, que si Nuflo de Chaves no se hubiera fortificado, sin ninguna duda los acabaran aquel día: mas defendiéndose los nuestros con gran valor, fue Dios servido librarlos de este aprieto, donde mataron muchos enemigos, con pérdida de alguna gente de la nuestra, y de tres españoles. Y \n\n\n\n\n\n",
  id: 112
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 113",
  chapter: "Capítulo III",
  layout: "textoporpagina",
  content: "\n    \nsaliendo de este distrito, bajó a unos palmares que cortan aquella tierra, muy ocupada de pueblos de indios, con los cuales tuvo algunos reencuentros; y pacificándolos con buenas razones y dádivas, los redujo y dejó en paz y quietud, trayendo consigo algunos indios principales, y, cabezas de aquella tierra a la ciudad de la Asumpción, donde todos ellos fueron bien recibidos y tratados del Gobernador.Capítulo IIIDe las poblaciones que en este tiempo mandó hacer el Gobernador, y de lo que en ellas sucedióHabiendo considerado el Gobernador la mucha gente española que había en la tierra, y la poca comodidad qué tenían, por no haberles cabido parte de las encomiendas de indios que había repartido en aquella ciudad; y tomado acuerdo y parecer de lo que en esto se debía hacer, consultándolo con el prelado, y oficiales reales y demás capitulares, fue acordado se hiciesen algunas poblaciones donde se pudiesen acomodar los que quisiesen y estaban desacomodados, Con esta resolución señaló una población en la provincia de Guayra, por ser escalón y pasaje del camino del Brasil, reduciendo en un cuerpo la poca gente que allí había quedado en la villa del Ontiveros, con la que de nuevo despachase para esta nueva población; la cual cometió el Gobernador al capitán Rui Díaz Melgarejo. Otra fue acordado se hiciese en la provincia de los Jarayes, por el río del Paraguay arriba, 300 leguas de la Asumpción, por ser uno de los mejores territorios de aquel gobierno, y más vecino al Perú, y a las demás noticias de riqueza que tenía por aquella parte. Para cuyo efecto nombró el Gobernador a Nuflo de Chaves por general; y publicadas las jornadas y poblaciones, se alistaron muchos soldados y vecinos de la Asumpción; y aderezados y puestos a punto, partió el capitán Melgarejo con 100 soldados para su jornada. Y llegado al puerto del Paraná, pasó a la otra parte de aquel río, a los pueblos que llaman de Guayra; y consideradas las partes y disposición de aquella tierra, hizo su fundación tres leguas más arriba de la villa de Ontiveros, y la llamó Ciudad Real, donde agregó y redujo la gente que en ella había, por estar mal situada, y tan cerca y vecina de aquel peligroso salto. Y aunque el lugar donde se hacía esta fundación no era aventajado, con todo era mejor que el otro, lo cual se hizo por el principio del año de 1557. Está toda rodeada de grandes bosques y arboledas, sobre el mismo Paraná en \n\n\n\n\n\n",
  id: 113
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 114",
  chapter: "Capítulo IV",
  layout: "textoporpagina",
  content: "\n    \nla boca del Río Piquirí, de constelación enferma, porque demás de los vapores que salen de aquellos montes, está en el trópico de capricornio, por cuya causa es el sol muy dañoso y perjudicial, causando por el mes de marzo agudas fiebres, pesadas modorras y calenturas, aunque los naturales no son muy afligidos, y las sobrellevan mejor, y así se halló aquel río muy poblado de naturales: supliendo esta incomodidad la abundancia que en él hay de mucha caza y pesquería, y todo género de volatería. Algunos pueblos de aquel río se retiran por los meses de marzo y abril a otros ríos que vienen de la tierra adentro, que todos son muy poblados, y de más saludable constitución, por estar en más altura. Fueron empadronados en esta provincia, en todos los ríos comarcanos a esta ciudad, 40 mil fuegos, entendiéndose cada fuego, por un indio con su mujer e hijos; aunque siempre corresponden a mucho más, los cuales fueron encomendados en 60 vecinos, que por algunos años estuvieron en gran sosiego y quietud, y muy bien servidos y respetados de todos los indios de aquella provincia; y tan abastecidos de los frutos de la tierra, como de vino, azúcar, algodón, cera y lienzo que tejían en los telares, que eran tenidos por los más acomodados de aquella gobernación. Hasta que por discurso de tiempo les fue faltando el servicio personal, y los naturales comarcanos del río, con las continuas jornadas y salidas que hacían, y trabajos ordinarios que les daban, ocasionaron a esta ciudad muy grande diminución y miseria, como en el discurso de este libro se verá, con otras cosas que en aquella tierra sucedieron.Capítulo IVCómo salió el capitán Nuflo de Chaves a la población de los Jarayes, y lo que en ella ejecutóHabiéndose aprestado Nuflo de Chaves para la población y conquista que le estaba cometida, con toda la gente que se le había ofrecido a ir en su compañía, salió de la Asumpción este mismo año de 1557 con 220 soldados, y más de 1500 amigos, y copia de caballeros, armas y municiones; y embarcados los que iban por el río en doce barcas de vela y remo, y muchas canoas y balsas, navegaron con próspero viaje, y los de por tierra se fueron hasta tomar el puerto de Itatin con los indios amigos que llevaban; se embarcaron en los bajéles referidos, hasta reconocer la sierra de los Guajarapos, los cuales salieron de paz en sus canoas, y pasando adelante llegaron a \n\n\n\n\n\n",
  id: 114
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 115",
  chapter: "Capítulo IV",
  layout: "textoporpagina",
  content: "\n    \nlas bocas de dos o tres ríos o lagunas, y no acertaron a tomar el principal de su navegación. Entraron por una que llaman el Aracay, el cual está muy poblado de unos indios canoeros llamados Guatos; y vista la comodidad que se les ofrecía, hicieron una celada a la armada, metiendo sus canoas debajo de grandes balsas de eneas, y cañahejas que hay por aquel río, donde encubierta mucha gente de indios aguardaron a que pasase toda la fuerza de la armada: y repentinamente saliendo de su emboscada, acometieron a la retaguardia, y trabándose una pelea muy reñida entre los unos y los otros, matando los enemigos once españoles, y más de ochenta indios amigos, se retiraron victoriosos del suceso que fue en 1º de noviembre, día de Todos los Santos (muy aciago en aquella provincia). Y tornando la armada a tomar el río principal, fueron por él adelante con ordinarios trabajos, digo, rebatos que a cada paso tenían con aquellas naciones y con los que llaman Payaguás; y pasando el puerto de los Reyes llegaron a la isla de los Orejones, donde descansaron algunos días: y continuando su derrota tomaron el puerto de los Perabazanes, provincia de los Jarayes, donde desembarcaron en tierra, y mirando la disposición de ella para hacer su fundación no hallaron sitio a propósito; y así fue de parecer Nuflo de Chaves, con otras personas del consejo, correr primero aquella tierra antes de hacer la planta de su población; y con este acuerdo salió con toda la gente de su armada por la tierra adentro, dejando en confianza de los indios Jarayes las embarcaciones, pertrechos y vituallas que allí tenían que no podían llevar con comodidad. Y entrando por aquel territorio, llegaron a un pueblo muy grande que llaman Paysurí, que es el indio principal de aquella comarca, quien les salió a recibir de paz y amistad. Y siguiendo su derrota llegaron a los pueblos de los indios Jaramasis, donde aguardaron algún tiempo, hasta la cosecha del maíz; y cogida, salieron de aquel distrito, y fueron revolviendo hacia el Poniente pro algunos pueblos de indios quienes tomaron lengua de algunas noticias de riqueza de muchos metales de plata y oro, y de cómo por aquella frontera y serranías del Perú había indios Guaranís, que llamaban Chiriguanos: con la cual relación caminó el general con su campo por unos bosques muy ásperos en demanda de unos indios que se dicen Travasicosis, y por otro nombre Chiquitos: no porque lo son, sino porque viven en casas muy pequeñas y redondas, y es la gente más belicosa e indómita de aquella provincia, con quienes tuvieron grandes reencuentros y escaramuzas, procurando impedir el pasaje de los nuestros, y se les antepusieron en una fuerte palizada, convocados \n\n\n\n\n\n",
  id: 115
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 116",
  chapter: "Capítulo V",
  layout: "textoporpagina",
  content: "\n    \ntodos los indios de aquella comarca. Lo cual visto por el general y sus capitanes, determinaron romper con ellos, ganar la palizada, y dominar la soberbia y arrogancia de aquella gente, para ejemplo de las demás naciones de aquella tierra; puesto que sabían la mucha fuerza de gente que tenían, y la suma de flechería, de yerba venenosísima con que acostumbraban a tocar sus armas, picas, dardos, etc., de que se aprovechaban para sus guerras; y así mismo usaban hincar muchas picas en la tierra a la redonda de sus palizadas y fosos, con que entraban a la palizada a pie o a caballo, matando toda la gente que encontraban, y llegando a ella la rompieron por muchas partes hasta meterse dentro, donde se peleó cruelmente con aquellos fieros e indómitos naturales; y después de ser muy reñida y porfiada la pelea, fueron vencidos y desbaratados, saliendo mucha indiada, huyendo de la palizada a otros pueblos circunvecinos, haciendo una grande presa de indios e indias, aunque no les salió a los nuestros este negocio muy barato. Porque demás de los que allí fueron muertos, salieron muchos heridos, así españoles, como indios, y casi todos los caballos, que los más murieron rabiando de aquella venenosa yerba; por cuya causa, y por tener el puerto de los navíos muy distante, trataron en el campo de volverse a la provincia de los Jarayes, que era la parte, que les fue asignada para su población: con cuyo acuerdo se lo representaron y pidieron al General, el cual por ninguna manera lo quiso hacer, sino pasar adelante hasta los confines del Perú, con intento según pareció de substraerse del Gobierno del Río de la Plata, y hacer distinta aquella provincia, haciéndose cabeza y superior de ella, como adelante veremos.Capítulo VCómo en este tiempo murió el gobernador Domingo de Irala; y lo que sucedió a Nuflo de ChavesLuego que partió de la ciudad de la Asumpción el capitán Nuflo de Chaves, en prosecución de su jornada, salió el Gobernador a ver lo que se hacía de madera y tablazón en un pueblo de indios, para acabar una hermosa capilla y sagrario, que hacia en la Iglesia Catedral: y estando allá adoleció de una calentura lenta que poco a poco le consumía, quitándole la gana de comer; con lo que le vino a quebrar en un flujo de vientre, que le dé fuerza venirse a la ciudad en una hamaca, que de otra manera no podía venir. Donde \n\n\n\n\n\n",
  id: 116
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 117",
  chapter: "Capítulo V",
  layout: "textoporpagina",
  content: "\n    \nllegado, le arreció la enfermedad, y viéndose muy agravado, dispuso las cosas de su conciencia en la mejor forma que pudo; y recibiendo los sacramentos de Nuestra Santa Madre Iglesia, con gran dolor y arrepentimiento de sus pecados, murió dentro de siete días, teniendo en su cabecera, al Obispo y otros sacerdotes y religiosos, que le ayudaban: haciendo todo el pueblo tanto sentimiento, así grandes como pequeños, que parecía hundirse; porque, además de que los españoles lo aclamaban, los indios naturales no les eran inferiores, diciendo a voces: &quot;ya se nos ha muerto nuestro amado padre, y quedamos todos huérfanos&quot;. Por manera que sus mismos émulos y contrarios le lloraban con mayor sentimiento de lo que se puede contar, por la falta grande que a todos hacía. Dejó en el gobierno de esta provincia a Gonzalo de Mendoza, su yerno; el cual, luego que el Gobernador murió, se recibió por tal en el cabildo y ayuntamiento, con mucho gusto y aplauso de todos, por ser un caballero muy honrado, afable, discreto y bienquisto de todos. Y así con mucho cuidado procuró de su parte dar todo favor a los efectos comenzados del Gobierno, y a los capitanes y pobladores; despachando sus cartas y recados de lo que convenía, y se debía hacer, ofreciéndoles todo el socorro y ayuda necesaria. Aunque el capitán Nuflo de Chaves no aceptó de buena voluntad estos ofrecimientos, con ánimo de exceder de la instrucción que le había sido dada por el Gobernador; lo cual entendido de los soldados de su campo, donde, como dije en el capítulo pasado, estaban determinados de volver a los Jarayes, vino a término de grandes diferencias y motines; hasta que la mayor parte de la gente, que estaban ya de él divididos, te hicieron un requerimiento, que por ser el propósito de esta historia lo pongo en este lugar, que es el que sigue: &quot;Los vecinos y moradores de la ciudad de la Asumpción, y las otras personas que de ella salimos para la población de la provincia de los Jarayes, en voz, y en nombre de los ausentes y heridos que aquí no parecen, por los cuales, a mayor abundamiento, prestamos voz y caución, por serio de yuso contenido, en servicio de Dios Nuestro Señor, y de Su Majestad y bien general de este campo, en la forma que más en derecho haya lugar, pedimos a vos, Bartolomé González, escribano público y del número de esta ciudad y provincias del Río de la Plata, nos deis por fe y testimonio, en manera que haga fe, lo que en este nuestro escrito pedimos y requerimos al muy magnífico Señor Capitán Nuflo de Chaves que está presente; que como ya Su Merced sabe, y a todos es notorio, como por \n\n\n\n\n\n",
  id: 117
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 118",
  chapter: "Capítulo V",
  layout: "textoporpagina",
  content: "\n    \nacuerdo y parecer del Reverendísimo Señor don Fray Pedro de La-Torre, Obispo de estas provincias, y de los muy magníficos Señores Oficiales reales de Su Majestad que residen en la dicha ciudad de la Asumpción, el ilustre Señor Gobernador Domingo de Irala, le dio comisión y facultad para que saliese a poblar las provincias de los Jarayes, y por su merced aceptada, nos ofrecimos con nuestras personas, armas y hacienda a servir a Su Majestad en tan justa demanda, como más largamente se contiene en los testimonios y capitulaciones que se hicieron, a que nos referimos. En razón de lo cual, por servir a Dios Nuestro Señor y a la real Majestad, fuimos movidos de salir de la dicha ciudad de la Asumpción con el dicho Señor Capitán en nuestros navíos y canoas, con armas, municiones y caballos e indios de nuestros repartimientos, con todas las demás cosas necesarias para el sustento de la dicha población. Y habiendo navegado por el río del Paraguay, después de muchos trabajos, muertes, pérdidas y desgracias, llegamos con Su Merced a los dichos Jarayes, y puerto de los Perabazanes, a los veinte y nueve días del mes de Julio del año próximo pasado de 1557, donde creímos se hiciera dicha población; y después de vista y considerada la tierra, y el tiempo estéril, y necesidades que se representaron por acuerdo y parecer que el dicho Señor Capitán tomó, fue dispuesto se buscase sitio y lugar conveniente, para el sustento y perpetuidad de esta población. Y así salió, con este intento, con toda la armada por fin del mes de agosto, dejando en el dicho puerto quince navíos, ocho anegados y siete varados, y con todas las canoas y demás pertrechos que se traían, y cantidad de ganado mayor y menor en confianza: y recomendado todo a los Jarayes, por la satisfacción y antigua amistad que con ellos se ha tenido; y puestos en camino con diversos sucesos, llegamos al pueblo de Paysurí, indio principal, que nos recibió de amistad, y de allí al de Pobocoygí, hasta los pueblos de los Saramacosis, donde estuvimos hasta tanto que los mantenimientos de los maíces, frijoles, etc. se cogiesen. En aquel asiento tomó Su Merced relación de los indios Guaranís, y de otros que habían sido sus prisioneros, de los particulares, y disposición de aquella tierra, y de la que comúnmente se llama la gran noticia; en cuyas fronteras se decía estaban poblados los dichos Guaranís, donde todos entendimos se haría la población en términos de los indios Travasicosis, que por otro nombre llamamos Chiquitos; donde concurrían las calidades necesarias para hacer la dicha fundación. Por lo cual informado Su Merced del camino, vino con toda la gente en demanda de los pueblos Guaranís, y de su cacique, que se decía Ibirapí, y el más principal Peritaguay; y llevando dichos indios por guías, \n\n\n\n\n\n",
  id: 118
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 119",
  chapter: "Capítulo V",
  layout: "textoporpagina",
  content: "\n    \nllegamos a este territorio donde al presente estamos, reformando la gente española, indios amigos y caballos, de los trabajos y peligros pasados; y por ser los naturales de este partido gente la más indómita y feroz de cuantos hasta ahora hemos visto, no han querido jamás venir a ningún medio de paz; antes, a los mensajeros que para ello se les ha enviado, los han muerto, despedazado y comido, procurando por todos medios echarnos de su tierra: han inficionado las aguas, sembrando por todas partes púas y estacas emponzoñadas de yerba mortal, con que nuestra gente ha sido herida y muerta; y así mismo han hecho sus juntas y dado sobre nosotros con mano armada. A los cuales hemos resistido con el favor de Nuestro Señor, no sin notable pérdida y daño nuestro, y de los caballos e indios amigos: por manera que Su Merced el Señor Capitán, informado que más adelante había otra población de indios benévolos, que se llaman Zaquaimbacú, y por salir de la perfidia de aquella gente, determinó de ir a ellos por caminos ocultos, dando de lado a los enemigos de esta comarca. Y tomando guías, partió con todo el campo, y caminando dos días por despoblado, creyendo todos que ibamos dando de mano, a los enemigos e inconvenientes de la guerra, vieron al raso un fuerte de madera con grandes torreones, atrincherados de tal manera que la palizada era doblada y muy fuerte, cercada de una gran fosa, llena de muchas lanzas y púas venenosas, sembradas al rededor, y un gran número de gente para defenderla. Donde alojándonos, les enviamos a requerir de parte de Su Majestad la concordia y amistad que no quisieron admitir: antes, por oprobio e injusticia nuestra, mataron a los mensajeros, y a saliendo fuera del fuerte incitaban a pelea y escaramuza, tirando mucha flechería. Por lo cual Su Merced, y demás capitanes fueron de parecer romper con ellos, y castigar su indómita fiereza, porque de otra manera fueran creciendo en soberbia y atrevimiento, y a cada paso nos salieran con avilantez a los caminos y pasos, de que resultaría el recibir mucho daño de ellos: y así se señaló día, para acometerles a pie y a caballo. Y puesto al efecto con gran riesgo de las vidas y resistencia de los enemigos, les entramos y ganamos su fortificación, rompiendo la palizada: fueron lanzados con muerte de gran número de ellos, y al traerlos a sujeción y dominio nuestro, fue tan a nuestra costa, que además de los que allí quedaron muertos, salieron heridos más de cuarenta españoles, ciento y tantos caballos, y setecientos indios amigos, de los cuales heridos por ser la yerba tan ponzoñosa y mortal, en doce días fallecieron diez y nueve españoles, trescientos indios y cuarenta caballos, sin los que adelante corrieran riesgo, si la divina \n\n\n\n\n\n",
  id: 119
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 120",
  chapter: "Capítulo V",
  layout: "textoporpagina",
  content: "\n    \nmano no lo remediara. Por cuya causa, y por las que adelante podían suceder, si en esta cruelísima tierra nos detuviésemos más, y por ella caminásemos, siendo, como todos dicen, los más de esta comarca de peor condición, y estando nuestro campo en gran diminución. De lo que se presume que pasando adelante, nos desampararán los indios amigos que traemos en nuestra compañía, de lo que puede resultar la total ruina y perdición de todos los que aquí estamos. Por tanto, en la forma debida, unánimes y conformes requerimos al señor Capitán, una, dos y tres veces, y cuantas en tal caso se requieren, que con toda la brevedad posible se retire y salga de esta tierra con el mejor orden y seguridad que convenga; y vuelva por el camino que vino, y se vaya y asiente en tierra pacífica y segura, como es la que atrás hemos dejado: para que convalecida y reformada la gente de los trabajos pasados, se pueda consultar con deliberado consejo lo que más convenga al servicio de Dios y de Su Majestad. Y si con todo perseverase Su Merced en pasar adelante, como lo ha dado a entender, le protestamos todas las muertes y daños, y pérdidas y menoscabos que en tal caso se siguiesen y recrecieren, así de españoles como de indios amigos y naturales. Para lo cual ponemos nuestras personas y haciendas, feudos y encomiendas que de Su Majestad tenemos, de bajo de la protección de su real amparo, pidiendo y requiriendo a Su Merced el cumplimiento de la orden e instrucción que le fue dada y cometida para el efecto de la población y su sustento; para lo cual, todos de conformidad estamos dispuestos a observar y cumplir lo que en este caso debemos y estamos obligados. Todo lo cual que dicho es, pedimos a vos, el presente escribano, nos lo deis por fe y testimonio en pública forma y manera que haga fe, para le presentar ante Su Majestad, y en los demás tribunales donde viéremos que más nos convenga; y a los presentes rogamos nos sean testigos, y lo firmamos de nuestros nombres. -Rodrigo de Osuna -Lope Ramos -Melchor Díaz -Pedro Méndez -Diego de Zúñiga -Francisco Díaz -Diego Bravo de la Vega -Juan Hurtado de Mendoza -Andrés López -Martín Notario -Francisco Álvarez Gastan -Rodrigo de Grijalva -Francisco Rodríguez -Antón Conejero -Juan Riquel -Bernabé González -Juan de Pedraza -Pedro de Sayas Espeluza -Antonio de Sanabria -Vasco de Solís -Julián Ximénez -Antón del Castillo -Diego de Peralta -Juan Vizcaíno -Diego Bañuelos -Gabriel Logroño -Nicolás Verón -Juan de Quintana -Bartolomé Justiniano -Cristóbal de Alzate -Baltasar García -Alonso Hernández -Pedro Coronel -Diego de Tobalina -Juan Ruiz -Bernabé de Vera -Juan Barrado -Bernardo Genovés -Juan Campos -Alonso López de Trujillo -Francisco Sánchez -Pedro Campuzano -Alonso Portillo -Juan Calabrés -Francisco Bravo -Pedro Cabezas -Alonso Parejo -Pantaleón Martínez -Alonso Fernández -Blas Antonio -Juan López -Hernando del Villar -Antonio Roberto -Francisco Delgado -Diego Díaz Adorno -Juan Salgado -Gonzalo Casco -Pedro de Segura&quot;. \n\n\n\n\n\n",
  id: 120
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 121",
  chapter: "Capítulo VI",
  layout: "textoporpagina",
  content: "\n    \nEl cual requerimiento, que hicieron al capitán Nuflo de Chaves, como en él se refiere, no fue parte para que en cosa alguna se le persuadiese a que hiciese lo que todos los más le pedían y requerían: antes con grande indignación respondió determinadamente, que en ninguna manera daría vuelta para el puerto, sino que continuaría el descubrimiento de aquella tierra pasando adelante, como pretendía. Con cuya determinada resolución se dividió luego la gente en dos partidas, la una y más principal debajo de la compañía de Gonzalo Casco, a quien nombraron por caudillo, y se le agregaron más de ciento cuarenta soldados: y quedaron con el General poco más de sesenta, que no le quisieron desamparar. De cuyo suceso, y de lo demás que en esta provincia sobrevino, se dirá adelante.Capítulo VIDe los sucesos del capitán Nuflo, después que se dividió la genteParéceme será fuerza haberme de alargar algún tanto en tratar algunas cosas de esta provincia de Santa Cruz de la Sierra, la cual al principio fue descubierta de los conquistadores del Río de la Plata, como de esta historia se habrá entendido; siendo el primero que entró en ella Juan de Oyolas; y después corrida y paseada otras muchas veces, de los capitanes de la dicha provincia, hasta esta última jornada que fue cometida a Nuflo de Chaves. La cual por ser ramo y circunstancia de esta historia, y donde más largamente se consumieron las fuerzas, armas y naturales de aquel gobierno, no dejaré de tratarlas como se refiere. Partidos los soldados del campo de Nuflo de Chaves, debajo de la capitanía de Gonzalo Casco, y caminando en demanda del puerto donde dejaron sus navíos, el capitán Nuflo se fue con la gente que le quedó a la parte del Occidente, por aquel distrito adelante, con tanto valor y determinación, quedando tan sin fuerza, que no se puede tener por poca hazaña. Y encontrando con gran fuerza de pueblos de indios, llegó al río del Guapay o Guarapay, y pasando a la otra parte, a los llanos de Guilguiriogota, envió a llamar a los Guaranís, que, como queda dicho, son los indios Chiriguanos a donde en este tiempo había llegado del Perú, un capitán llamado Andrés Manso, con buena compañía de soldados, con orden y comisión de poblar aquella tierra por el marqués de Cañete, virrey que fue del Perú. Sabido por Andrés Manso la entrada de Nuflo de Chaves, se fue hacia él a largas jornadas, y \n\n\n\n\n\n",
  id: 121
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 122",
  chapter: "Capítulo VI",
  layout: "textoporpagina",
  content: "\n    \nhabiéndose topado el uno con el otro, tuvieron grandes diferencias sobre el derecho de esta conquista: porque decía Andrés Manso, ser toda aquella tierra de su gobierno y descubrimiento, por el virrey de aquel reino; y Nuflo de Chaves decía y alegaba, que le pertenecía a él este derecho, así por la antigua posesión que los del Río de la Plata tenían de aquella conquista, como por la facultad y comisión que traía de poblarla y conquistar. Con esta competencia estuvieron muchos días los dos capitanes, hasta que la Real Audiencia de la Plata, avisada del caso, dio orden en componerlos, para cuyo efecto salió a aquella tierra Pedro Ramírez de Quiñones, regente de aquella audiencia, que les puso términos y límites a su jurisdicción, para que cada uno conociese lo que le tocaba, y su administración; y así estuvieron muchos días los dos capitanes no muy distantes el uno del otro. En este tiempo acordó Nuflo de Chaves salir al Perú, y de allí a los Reyes a verse con el virrey de aquel reino, dejando por su lugarteniente a Hernando de Salazar, que era casado con la hermana de su mujer; el cual, habiendo adquirido las voluntades de los soldados de Andrés Manso, y trabado amistad con ellos, mañosamente le prendió en cierta cordillera, y preso lo despachó al Perú, allegando a sí todos los soldados y la gente de Andrés Manso; de forma que estaba este campo considerablemente aventajado para cualquier buen efecto. Llegado Nuflo de Chaves a la ciudad de los Reyes, dio cuenta al marqués de Cañete del estado de aquella conquista, certificando ser muy rica, de grande multitud de poblaciones de naturales que diese el gobierno de ella a don García de Mendoza, su hijo, el cual luego nombró por su Teniente General en aquel gobierno a Nuflo de Chaves, así por sus méritos y servicios, como por estar casado con doña Elvira de Mendoza, hija de don Francisco de Mendoza, por cuyo deudo se tenía, ayudándoles con toda la costa necesaria para su entrada. Y con este despacho volvió a esta tierra, donde luego fundó la ciudad de Santa Cruz en medio de los términos de estaprovincia, al pie de un sierra, sobre la ribera de un deleitoso arroyo, en comarca de gran suma de naturales indios; que fueron empadronados más de 60 mil en su término y jurisdicción, casi a la parte del Septentrión y Río de la Plata, como a la de Andrés Manso, que a este tiempo tornaba a entrar con algunos soldados en prosecución de su demanda, por la frontera de Tomina, donde se habían juntado los que con él quisieron ir. Se fue con su gente al pie de una sierra que llaman Cuzcotoro\n\n\n\n\n\n",
  id: 122
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 123",
  chapter: "Capítulo VI",
  layout: "textoporpagina",
  content: "\n    \nCuzcotoro, y en un acomodado valle fundó una población, haciendo regidores y oficiales, de que luego fue contradicho por la ciudad de la Plata. Y despachado de ella a Diego Pantoja a impedir esta población y prender a Andrés Manso, por ser intruso en su jurisdicción, fue resistido por él en un peligroso paso, donde le arcabuceó con sus soldados: por manera que el alcalde Diego Pantoja no pudo pasar adelante; y persuadido de Martín de Almendras y Cristóbal Barba, volvió a la ciudad. Con esta ocasión Andrés Manso alzó su gente y pasó adelante a un pueblo de Chiriguanos, llamado Sapirán; y saliendo a los llanos de Taringui, distante doce leguas, sobre un mediano río, asentó su real, haciendo allí su población, donde los indios de toda la comarca le acudieron de paz y le dieron la obediencia. Y estando en este estado, despoblaron los Chiriguanos un pueblo que se había fundado en la barranca junto al río Guapay, 40 leguas de Santa Cruz, matando al capitán Pedraza, Antón Cabrera, y a los demás pobladores; y hecho este daño vinieron sobre la población de Andrés Manso, y poniéndole cerco una noche, y pegando fuego a todas las casas del pueblo, tomando las puertas, mataron con facilidad a los que salían fuera, y con poca resistencia fueron todos acabados, sin que escapase ninguno. De este desgraciado suceso quedó a esta provincia el llamarse los Llanos de Manso, que es un término dilatado y continuo hasta el río del Paraguay, que está al Este; y bojeando para el Sur la sierra, está en la gobernación del Tucumán, y por el Poniente termina en las tierras del Perú, donde nace y corre el río que llaman Yetica, que ocupa los pueblos de los Chiriguanos de aquella frontera, que es el propio que los indios del Perú llaman Pilcomayo. Fue antiguamente esta provincia muy poblada de naturales, y de gran multitud de gente, y al presente es cosa muy cierta estar toda despoblada y desierta, así por las continuas molestias, trabajos y servidumbre ordinaria que les dan los españoles, como de las crueles guerras, muertes y cautiverios en que han sido asolados de los Chiriguanos: de tal manera que ha sido, y es la más cruel y detestable tiranía; porque sola la sed de sangre humana y rabia mortal han destruido innumerables naciones, como ya en otra parte se ha dicho.\n\n\n\n\n\n",
  id: 123
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 124",
  chapter: "Capítulo VII",
  layout: "textoporpagina",
  content: "\n    \nCapítulo VIIDe la vuelta de los soldados que se dividieron de Nuflo de Chaves, hasta llegar a la Asumpción, etc.Divididos los soldados de la compañía del capitán Nuflo de Chaves, dieron vuelta para el puerto de los Jarayes, habiendo nombrado por su capitán a Gonzalo Casco; y tomando el camino por algunos pueblos de indios amigos, llenaron al de los Jarayes, sin ninguna contradicción, donde recibidos con mucho aplauso, hallaron todo lo que les dejaron en su poder, sin faltar cosa ninguna. Y echados los navíos que estaban en tierra al agua, y sacando los que en ella estaban hundidos, los calafatearon y dieron carena, y puesto todo a flote, se embarcaron en ellos, y en las demás embarcaciones; y fueron por el río abajo, llegando con buen viaje a la Asumpción, en tiempo que hallaron muerto al teniente general Gonzalo de Mendoza, que no tuvo este oficio más de un año; habiendo hecho, en este tiempo algunas cosas de consideración en bien de la República; como fue castigar y poner freno a los indios Agaces, que, apoderados del río, molestaban con continuos asaltos a los vecinos de la ciudad; matando los indios de su servicio, y robando sus ganados. Para cuyo remedio despachó Gonzalo de Mendoza a Alonso Riquelme, y Rui García Mosquera, y otras personas de cuenta, yendo con muy buen orden más de 200 soldados, y 1000 amigos. Y llegados que fueron a sus puertos, se peleó poderosamente, dándoles muchos asaltos; de que después de grandes escaramuzas, fueron todos los más presos y muertos, y puestos en sujeción. Por muerte de Gonzalo de Mendoza, vino a quedar esta provincia sin cabeza ni gobierno. Y para tenerlo como convenía, fue acordado por todos los caballeros de aquella república, elegir persona que los gobernase en paz y justicia; y hecha la publicación del nombramiento, se presentaron para el gobierno, algunos caballeros beneméritos, como fueron, el contador Felipe de Cáceres, el capitán Salazar, Alonso de Valenzuela, el capitán Juan Romero, Francisco Ortiz de Vergara, y el capitán Alonso Riquelme de Guzmán. Y llegado el día señalado, juntos los vecinos, moradores, y demás personas que en aquella sazón se hallaban, con asistencia del Obispo, don Fray Pedro de la Torre, cada uno dio su suerte en manos del prelado, habiendo jurado de elegir a quien en Dios y en sus conciencias, les pareciese convenir para el tal oficio; y hechas las demás solemnidades necesarias, se sacaron de un cántaro, donde estaban metidas todas estas nominaciones de los votadores; y conferidas, hallaron que el más aventajado en ellas, era Francisco Ortiz de Vergara, natural de Sevilla, \n\n\n\n\n\n",
  id: 124
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 125",
  chapter: "Capítulo VIII",
  layout: "textoporpagina",
  content: "\n    \ncaballero de mucha suerte, afabilidad y nobleza, digno y merecedor de cualquiera honra. Y luego que salió, mandó el Obispo sacar una provisión de Su Majestad, para que públicamente fuese leída: en la cual, se le daba facultad, que en caso semejante, eligiéndose persona que en su real nombre hubiese de gobernar la provincia, lo diese el título y nombramiento que le pareciese, o ya de Capitán General, o de Gobernador. Y entendida por todos la provisión, en alta voz, dijo el Obispo en presencia de todo el pueblo: que por honra de aquella provincia y de los caballeros que en ella residían, nombraba, y nombró en nombre de Su Majestad, por Gobernador y Capitán General y Justicia a su dilectísimo hijo, Francisco de Vergara, persona que recta y canónicamente había sido electa; y todos a una voz lo aprobaron. Y habiendo hecho el juramento y solemnidad debida, en razón del uso y ejercicio del oficio, y entregádole todas las varas de justicia, las dio y proveyó de nuevo, como mejor le pareció convenía, con otras cosas tocantes al servicio de Dios y de Su Majestad. Hízose dicha elección en 22 de julio del año de 1558; estando todos ayuntados en la iglesia parroquial de nuestra Señora de la Encarnación; siendo alcaldes ordinarios y de la hermandad, Alonso de Angulo, y el capitán Agustín de Campos, con los demás capitulares y regidores.Capítulo VIIIEn que se trata del alzamiento general de los indios de las provincias del Paraguay y ParanáEstaba en este tiempo la ciudad de la Asumpción en la mayor prosperidad y aumento, que jamás hasta entonces ni después se vio: porque demás del lustre y buen gobierno de la República, eran muy bien servidos de los indios naturales, los vecinos y encomenderos de ella; sin que se presumiese otra cosa en contrario: hasta que habiendo vuelto la gente que fue con el capitán Nuflo de Chaves a la provincia de los Jarayes, hubo algunos movimientos y conjuraciones secretas, en especial por medio de algunos caciques que habían ido a aquella jornada; y entre los que más encendieron el fuego, fueron dos mancebos hermanos, llamados don Pablo y Nazario, hijos de otro muy\n\n\n\n\n\n",
  id: 125
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 126",
  chapter: "Capítulo VIII",
  layout: "textoporpagina",
  content: "\n    \nprincipal de aquella tierra, llamado Curupiratí. Los cuales, convocando a todos los indios de la provincia a que tomasen las armas y se rebelasen contra los españoles, diciéndoles contra ellos muchas libertades y menguas, vinieron todos los indios a poner en efecto esta rebelión comenzando al descubierto a apellidar libertad y guerra sangrienta contra los españoles, haciendo alguno asaltos en los pueblos más circunvecinos que no eran de su parecer. Movió a esa gente a esta novedad (que no lo es para ellos, tomar las armas todas las veces que ven la ocasión) el haber traído de aquella entrada que hicieron con Nuflo de Chaves, gran suma de flechería enherbolada, de que aquella cruel gente, llamada los Chiquitos, usaba, de la cual los de esta provincia habían recogido y guardado lo que habían podido haber para sus fines contra los españoles; y vueltos a sus pueblos de la jornada, mostraron por experiencia a los demás, el venenoso rigor de aquella yerba, de cuya herida ninguno escapaba, ni hallaba remedio ni triaca contra ella. Y así se animaron a declararse contra los españoles, matando algunos que andaban por la campaña; para cuyo remedio procuró el Gobernador despachar algunos principales indios de confianza, a que aquietasen los tumultos y revoluciones de la provincia: los cuales no siendo parte a repararlo, dieron vuelta a la ciudad, dando cuenta de lo que pasaba; y que iba tan adelante el negocio, que hasta los circunvecinos y conjuntos a la ciudad, estaban movidos a la rebelión. Por lo cual mandó luego apercibir a todos los encomenderos y vecinos, y a otros muchos soldados nuevamente venidos, señalando los capitanes y oficiales necesarios, con los cuales salió por fin del año de 1559: y puesto en campaña con 500 soldados y más de 3000 indios amigos de los Guaranís, y 400 Guaycurús, repartió la gente en dos partes; la una tomó el Gobernador para sí, y la otra dio al contador Felipe de Cáceres para que entrase por la parte del Acay, y él se fue por los Acaraibá, en cuya comarca se habían de juntar y plantar el campo, para de allí hacer sus correrías y acometimientos a las partes donde fuese más necesario. Y con este acuerdo se fueron por los términos y lugares de sus partidos, sin hacer más efecto que pasar de tránsito, por estar todos los pueblos despoblados: estando toda la gente retirada en las montañas más ásperas de la tierra, aunque la gente de guerra quedaba siempre a la mira puesta en campaña. Y por parecer al enemigo que no convenía se juntasen los dos campos, dieron dos días en cada uno una alborada; y acometidos de gran multitud de indios, resistieron los nuestros con mucho daño de ellos, aunque con muerte \n\n\n\n\n\n",
  id: 126
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 127",
  chapter: "Capítulo VIII",
  layout: "textoporpagina",
  content: "\n    \nde alguna de nuestra gente. Y teniendo aviso el un campo del otro de lo sucedido, llegaron a juntarse en lo más poblado de aquella tierra, donde a tropas salían a correr la redonda, y atajarles su comida para necesitarlos por todas vías a que tomasen mejor acuerdo, y viniesen de paz: y así se ofrecía tener con ellos muchas escaramuzas; hasta que entrando el año de 1560 presentó el enemigo a nuestro campo la batalla. Venía repartido en cuatro tercios; y en todos 16000 indios; y puestos en campo raso, obligaron a los nuestros a salir a romperlos. Y así mandó el Gobernador al capitán Alonso Riquelme saliese con 80 de a caballo, y a los capitanes Segura y Agustín de Campo, con 1200 arcabuceros, 1600 amigos Guaranís y 200 Guaycurús: y puestos en campo en dos escuadrones, la infantería que hacía frente le dio una carga, y viniéndose a este tiempo el enemigo acercándose más a los nuestros con dos escuadrones que componían 8000 indios, desgalgando los 4000 por una quebrada a dar en el real por las espaldas, para impedirles que pudiesen socorrer a los del campo; y el otro escuadrón, que era de otros 4000 indios flecheros, se puso en un pequeño recuesto, para de allí socorrer donde fuese necesario. Los nuestros se portaron con buen orden hasta tenerlos a tiro de arcabuz; y dándoles la primera rociada, se postraron por tierra hasta que pasó aquella furia, y haciendo señal de su acometida, tocando sus bocinas y trompetas, en un improviso dieron sobre nuestros escuadrones; y saliendo nuestra caballería en cuatro tropas, que la una llevaba el factor Pedro de Orantes, y la otra Peralta Cordobés, la tercera Pedro de Esquivel, y la última Alonso Riquelme; y rompiendo todos por medio de los enemigos, revolviendo a una y a otra parte, lanceando e hiriendo a muchos de ellos, aunque desordenada nuestra infantería, les fueron apretando y degollando mucha gente; con lo que amenazaron a retirarse: y vista la rota por los 4000 que estaban de reserva, bajaron por la ladera, y con furia veloz y repentina se metieron en la batalla; y animando a los suyos a volver a ella, llegaron hasta nuestros escuadrones, que a este tiempo reunidos los aguardaban en buen orden, peleando con ellos pie con pie, con tal esfuerzo y valor los apretaron, que no sólo los desbarataron, sino que los pusieron en huida; aunque un gran golpe de ellos, hechos un cuerpo, se opusieron a los nuestros sin poderlos desmembrar hasta que el capitán Alonso Riquelme los acometió con la caballería; y rompiéndolos comenzaron a huir, y los nuestros a seguirlos; y haciendo en ellos cruel matanza, acabando los amigos de matar a todos los heridos que discurriendo por el campo hallaban. A cuyo tiempo, prosiguiendo\n\n\n\n\n\n",
  id: 127
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 128",
  chapter: "Capítulo IX",
  layout: "textoporpagina",
  content: "\n    \nprosiguiendo el alcance, vieron que estaba el real asaltado, y que había gran clamor y vocería: a cuya causa revolvieron a socorrer al Gobernador que estaba peleando con los enemigos, y habiéndoles resistido con gran denuedo los hizo retirar al tiempo que llegaba el socorro, con lo que acabaron de ser vencidos. Fue esta célebre victoria a 3 de mayo, día de la invención de la Santa Cruz del año referido: murieron de los enemigos más de tres mil sin mucha cantidad de heridos, y sin que se experimentase el efecto de la yerba de que estaba tocada toda su flechería, que no fue de poco provecho para los nuestros, según el daño que de ella se temió. Después de lo cual, poniéndose el campo sobre un río llamado Aguapey, mandó el Gobernador a Dame de Olavarriaga con 100 soldados de a pie, para que reconociese un fuerte que el enemigo tenía; y entrando por una montaña, salieron a un raso donde los indios tenían una emboscada, y descubierta por los nuestros comenzaron a disparar sus arcabuces y ballestas con buen orden, hasta pasar un arroyo ancho y barrancoso. Fueron recibidos de los enemigos, y acometidos con tal velocidad que vinieron a las manos; y andando en la revuelta, fueron muy sobrados de manera que mataron al alférez Correa, a Diego Díaz, y a otros soldados: y saliendo a su socorro Alonso Riquelme, llegó a este tiempo con 20 de a caballo hasta el arroyo donde cayeron sin poder salir, a ir menos el capitán Riquelme con otros ocho, los cuales comenzaron herir y a lancear a los enemigos con tanta prisa que luego tiñeron todo el campo en sangre; y socorriendo a algunos presos y caídos que tenían los enemigos, los libraron junto con las vidas que tan a pique tenían de perder; y libres ya comenzaron a esforzarse peleando de nuevo con gran valor, hasta que los pusieron en huida con muerte de mucha gente; y siguiendo el alcance los que llegaron al socorro cortaron más de mil cabezas como lo tienen de costumbre, en especial los Guaycurús que iban en esta guerra: con que el enemigo quedó por entonces quebrantado.Capítulo IXCómo en este tiempo se alzaron los indios de Guayra contra el capitán Melgarejo, a cuyo socorro fue el capitán Alonso RiquelmeCon el buen suceso que aquellos días tuvieron los nuestros contra los enemigos, se desbarató toda la junta que tenían hecha \n\n\n\n\n\n",
  id: 128
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 129",
  chapter: "Capítulo IX",
  layout: "textoporpagina",
  content: "\n    \npara está guerra, así el Gobernador ordenó a cuatro capitanes con sus compañías, para que cada uno de ellos fuese corriendo por su parte aquella tierra, castigando a los rebeldes y obstinados, y recibiendo y pacificando a los que viniesen de paz. Y hecho esto, el Gobernador con el resto del campo se puso en cierto paraje de aquel territorio, sobre un río que llaman Aguapey, que sale al Paraná, lugar dispuesto para sentar el campo; donde corriendo los unos y los otros aquel distrito, fueron siempre los indios de mal en peor, todo muy rebeldes y pertinaces. Cuando a este tiempo llegó al real un indio, y llevándolo a la tienda del Gobernador, y puesto en su presencia, dijo: &quot;yo soy de la provincia de Guayra, y mensajero de tu hermano y capitán Rui Díaz, el cual confiando de mí, me despachó a decirte le socorrieses con gente y soldados españoles, por habérsele alzado los indios de aquella tierra de quienes estaba muy apretado; y he venido disimuladamente por estos pueblos rebeldes y gente de guerra, dando a entender ser uno de ellos, y con esto he podido pasar hasta aquí, que no ha sido poca dicha mía&quot;. El Gobernador le dijo, que como le daría crédito en que aquello fuese verdad, pues no le traía carta de su hermano, en que le avisase de lo que pretendía. A esto respondió, que no venía sin ella, por la cual satisfaría largamente, y mirando todos al indio que venía desnudo en carnes: con solo su arco y flechas en las manos, no vieron cosa alguna donde pudiese traer la carta que decía. El entanto alargó el brazo, y dando el arco al Gobernador, le dijo: &quot;aquí hallarás lo que digo&quot;. Y rodeando el arco tampoco vieron cosa alguna escrita, ni donde pudiese venir: hasta que el mismo indio le tomó, y llegando a la empuñadura del medio, descubrió un encaje donde la traía, y sacándola vio el Gobernador el trabajo y necesidad en que estaban, y habiendo comunicado con los capitanes lo que se debía hacer, fue acordado se le despachase socorro; y por parecer de todos los más, se determinó el Gobernador fuese a este negocio el capitán Alonso Riquelme: y así se determinó, aunque sabían que entre él y el capitán Rui Díaz había algún encuentro; y acudiendo a dar gusto al Gobernador, no obstante de eso se dispuso a salir luego, tomando en su compañía 70 soldados. Y caminando por sus jornadas, no sin algunos encuentros y resistencia que los enemigos le hicieron, pasó por aquella tierra hasta tomar el río del Paraná; y llegado al puerto, le envió el capitán Rui Díaz las canoas necesarias para que pasase; y puestos de aquella banda, fue recibido de todos alegremente, entrando en la ciudad \n\n\n\n\n\n",
  id: 129
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 130",
  chapter: "Capítulo IX",
  layout: "textoporpagina",
  content: "\n    \nsin dificultad alguna, aunque estaba muy cercada de enemigos, y todas las calles cerradas con buena palizada, y recogida toda la gente dentro de una casa fuerte que tenía la ciudad. Sólo Rui Díaz no mostró mucho gusto viendo a Alonso Riquelme; aunque disimulando su antigua enemistad le pidió luego saliese con su compañía, y con la que en el pueblo había, a castigar la malicia de aquellos indios, poniendo freno a su insolencia; porque de su parte no lo podía hacer por estar muy enfermo y casi ciego. Con lo cual el capitán Riquelme salió de la ciudad con 100 soldados y algunos amigos aunque sospechosos; y el año de 1561 comenzó la guerra por los más cercanos. Alzando luego el cerco que tenían sobre el pueblo, los fue castigando y dando alcance en sus pueblos, prendiendo algunos principales en quienes hizo justicia: y corriendo por aquella tierra, salió a los campos que llaman de don Antonio, donde los pueblos de aquella comarca le pidieron la paz, y él les otorgó. De allí bajó al río del Ubay, que es muy poblado, y despachando mensajeros, le salieron muchos caciques pidiéndole perdón del delito pasado. Y asegurados los comarcanos, bajó por aquel río al Paraná, pacificando los pueblos que por allí había, aunque los más de la tierra adentro trataban de llevar adelante la guerra y de venir a asolar la ciudad. Por cuya causa determinó dejar las canoas, y entrar por aquel territorio, atravesando unos bosques muy ásperos hasta el pinal, donde estaban metidos los más de los indios alzados: y con asaltos repentinos y ligeros que les daban, los fue apretando de manera que dejaron sus escondrijos; y saliendo a lo raso se juntaron gran multitud de ellos; y en un, valle largo y angosto acometieron a los nuestros por todas partes, y los apretaron ya a cosa hecha para acabarlos. Mas los nuestros, con buen brío y ánimo, los fueron arcabuceando de un lado y otro, y fueron peleando con ellos muy reñidamente: con que quedó el enemigo vencido y desbaratado, huyendo a mucha prisa. Y dándoles alcance, mataron muchos de ellos y prendieron a muchos de los principales, obligándoles a pedir la paz y perdón de las perturbaciones pasadas, dando por disculpa haber sido movidos de otros caciques poderosos de la provincia. Y con esto fue corriendo aquellos pueblos, y en uno de ellos tuvo el invierno hasta el año siguiente que acabó de aquietar la provincia. Y puestos en el mejor estado posible, dio vuelta para la ciudad con toda su compañía, con mucha satisfacción del buen suceso de aquella guerra: y volviendo a la Asumpción, la halló con más quietud y sosiego, con lo cual los unos y los otros quedaron quietos por algunos años.\n\n\n\n\n\n",
  id: 130
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 131",
  chapter: "Capítulo X",
  layout: "textoporpagina",
  content: "\n    \nCapítulo XCómo vino a la Asumpción Rui Díaz Melgarejo, y como se quemó una carabela que se había de despachar a CastillaEstando en este estado las cosas de estas provincias, acordó el Gobernador Francisco de Vergara, de enviar a llamar de la provincia de Guayra al capitán Rui Díaz su hermano, para que acabada una carabela, que se estaba haciendo en aquel puerto para despachar a Su Majestad, fuese en ella a darle cuenta de su elección y de lo demás que en la tierra se ofrecía. Y en esta conformidad, el año siguiente de 1563 llegó a la Asumpción Rui Díaz Melgarejo con toda su casa, mujer e hijos; el cual solicitaba de su parte la fábrica de la carabela, que era una de las mejores que en aquella se habían hecho; y puesta a pique para echarla al agua, trató el Gobernador de quien podría acudir al gobierno de la provincia de Guayra, y fue acordado despachar al capitán Alonso Riquelme, para cuyo cumplimiento se aprestó luego. Y el mismo año salió de esta ciudad y llegó a la de Guayra, donde recibido de los vecinos con mucho aplauso y contento, dio orden para acabar de pacificar las alteraciones pasadas que aún no estaban del todo allanadas; y por el consiguiente los pueblos de naturales de la jurisdicción de la Asumpción tornaban a remover la guerra con nuevos bullicios, dejando sus pueblos y retirando sus mujeres e hijos a partes ásperas y montuosas. Para cuyo remedio salió el Gobernador con 250 soldados, y muchos caballos y amigos, junto con los indios Guaycurús, gente guerrera y enemiga de la Guaraní, que habitan de la otra parte de la ciudad pasado el río, y se sustentan de solo caza y pesca sin otra labor ni sementera. Y puestos todos en campaña mandó, que el capitán Pedro de Segura con una compañía de soldados, por la parte más abajo al Mediodía, y el capitán Rui Díaz norteando por el distrito de arriba, se fuesen, y el Gobernador con todo el resto, por el medio, derecho a Levante; y discurriendo por la tierra, se viniesen a juntar en el río del Aguapey, donde so asentase la guerra, haciendo los acometimientos y jornadas convenientes. En cuya orden se continuó la guerra, con efecto de algunas facciones importantes, aunque costosas a ambas partes; y quedando de aquella vez muy consumidos los naturales en gran cantidad, y siendo constreñidos con este rigor, fueron recibidos al servicio de Su Majestad. Con lo que el Gobernador se volvió a la Asumpción con su campo, al mismo tiempo que el capitán Nuflo de Chaves, y don Diego de Mendoza, su cuñado, con otros muchos soldados del Perú, bajaban de Santa Cruz de la Sierra, que, como ya se dijo, la tenía a su cargo por el marqués de \n\n\n\n\n\n",
  id: 131
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 132",
  chapter: "Capítulo XI",
  layout: "textoporpagina",
  content: "\n    \nCañete, distinta de la gobernación del Río de la Plata. Habíale movido volver a esta ciudad, tener en ella a su mujer e hijos, a quienes determinaba llevar a su provincia; y siendo bien recibido del Gobernador, se fue aderezando, como convenía, de lo necesario. Estando ya en esto de todo punto acabada la carabela y señaladas las personas, que habían de ir en ella, una noche, sin saberse hasta ahora quién lo hiciese, se pegó fuego a ella; y comenzando a arder, llegó todo el pueblo a socorrerla. Pero como estaba recién embreada, ardió de manera que, sin poderlo remediar, se acabó en breve tiempo de consumir, con notable sentimiento de las personas que tenían celo del bien común, por la gran pérdida y perjuicio que le venía a la provincia, y gasto de plata que se había hecho: atribuyose a algunos émulos del Gobernador e interesados en el gobierno. En cuyo tiempo sucedió asimismo que el capitán Rui Díaz mató, debajo de acechanzas, al Padre Hernán Carrillo, con su mujer doña Elvira Becerra; de que resultó doblado sentimiento al Gobernador. Por lo que fue persuadido saliese de esta provincia al Perú a tratar con el virrey sus negocios y el estado de ella: y confiriéndolo con sus amigos, se dispuso a ponerlo en efecto, como adelante se verá.Capítulo XIDe la salida que hizo el Gobernador para el Perú, y gente que sacó en su compañíaLlegado que fue Nuflo de Chaves a la Asumpción, con algún recelo de no ser bien recibido del Gobernador, por los antiguos bandos que habían tenido en la prisión de Álvaro Núñez, como por no haber cumplido en su población las instrucciones que se le dieron, separándose del gobierno de aquella provincia, procuró por todas vías congratular al Gobernador, y a las demás personas de cuenta. De manera que con su buena industria tuvo muchos aficionados, y en especial al Obispo, que en aquella sazón acababa de casar una sobrina suya con don Diego de Mendoza, su cuñado: el cual metiendo prenda, fueron facilitadas todas sus pretensiones; haciendo instancia al Gobernador que convenía a su honra hacer personalmente aquella jornada y salir al Perú, a dar cuenta a la Real Audiencia y al virrey de sus negocios y elección del gobierno, con que lo podía perpetuar con mucha honra suya. Con cuyas razones, y otras de bien poco \n\n\n\n\n\n",
  id: 132
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 133",
  chapter: "Capítulo XI",
  layout: "textoporpagina",
  content: "\n    \nfundamento, se persuadió a ponerlo en efecto, haciendo para ello grandes aparejos, y pertrechos, así de embarcaciones, como de caballos, armas, y municiones. Moviéronse para esta jornada muchas personas principales, como fueron el contador Felipe de Cáceres, el factor Pedro de Orantes, capitán Pedro de Segura con su mujer e hijos, Cristóbal de Saavedra, Rui Gómez Maldonado, procurador general de la provincia, y otros caballeros vecinos y conquistadores; y el Obispo don Fray Pedro Fernández de la Torre, con siete sacerdotes, clérigos y religiosos, que por todos fueron más de trescientos españoles: dejando el Gobernador por su lugarteniente en aquella ciudad, al capitán Juan de Ortega, y en la provincia de Guayra a Alonso Riquelme de Guzmán. Y el año siguiente de 1564, salió de la Asumpción con toda su armada, que era de veinte navíos de vela y remo, y otros tantos barcones, y otras embarcaciones balsas y canoas, en que iba toda la más de la gente española con todo el servicio de sus casas, que eran más de dos mil personas: sin otros tantos indios de sus encomiendas, que llevaban por tierra, a cargo del capitán Nuflo de Chaves, con quien iban otros muchos soldados: hasta tomar el puerto de los Guajarapos, frontera del río del Aracay provincia del Itatin; de donde asimismo sacaron más de otros tres mil naturales, persuadidos de las palabras y promesas conque los movía, por vía de intérpretes, Nuflo de Chaves; por lo que se determinaron a dejar su país natural, e irse al extraño, haciendo esta jornada, en la cual pasaron inmensos trabajos y necesidades, en que pereció gran parte de ellos de hambre y de sed. Y llegados estos indios 30 leguas de Santa Cruz, hicieron asiento en un término de tierra que les pareció conveniente, llamándola Itatin, por el nombre de la provincia de donde salieron, y era su natural. Allí poblaron e hicieron su sementeras, no dejando de pasar la gente española las mismas necesidades desde que salieron de la Asumpción. Y luego que tomó puerto toda la armada a la parte y término de Santa Cruz, Nuflo de Chaves se apoderó del mando y gobierno de ella, no consintiendo que el Gobernador ni otra persona alguna se metiese en la administración de paz ni guerra; con que muchos iban mal contentos. A cuya causa no se guardaba el orden que convenía, porque unos se quedaban atrás con sus deudos y amigos, y otros adelante con sus mujeres e hijos. Con este orden llegaron a Santa Cruz, que por estar falta de comida pasaron grande hambre, y perdieron gran parte del servicio de Yanaconas que llevaban; y \n\n\n\n\n\n",
  id: 133
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 134",
  chapter: "Capítulo XI",
  layout: "textoporpagina",
  content: "\n    \njunto con esto, todas las encomiendas y pueblos de aquella provincia se rebelaron contra los españoles, hasta los Samocosis de la otra parte del río Guapay, con quienes tuvo Nuflo de Chaves grandes reencuentros y reyertas, que costaron muertes de ambas partes, porque se salieron los más de ellos con los Chiriguanos sus circunvecinos con gran daño y perjuicio de nuestra gente, impidiendo la comunicación y camino del Perú. A cuyo remedio salió Nuflo de Chaves con propósito de pasar adelante, como lo hizo, con 50 soldados; dejando orden a su lugarteniente, Hernando de Salazar, que luego prendiese a Francisco de Vergara, y a otros sus amigos, y les quitase las armas, para que ninguno pudiese salir al Perú hasta tanto que él volviese. Y el Teniente lo puso, así en ejecución, sin que bastasen los requerimientos y protestas que en este caso se hicieron. Y así Francisco de Vergara y otros dieron orden de despachar al Perú a dar cuenta a la Real Audiencia de este agravio, ofreciéndose al viaje García Mosquera, mancebo animoso, hijo del capitán Rui García, que ha sido y es gran servidor de Su Majestad, y hoy vive en aquel reino. El cual, llegado que fue a la ciudad de la Plata, dio aviso a la Real Audiencia de lo que pasaba, y con su relación se despachó provisión para que no los detuviesen en aquella tierra, sino que libremente los dejasen salir a sus negocios al Perú: y aunque, intimada esta provisión y obedecida, no fue muy cumplida, porque Hernando de Salazar, por vía de torcedor, ponía algunas dificultades, no permitiendo que saliesen todos los que quisiesen, por lo que fue necesario venirse a las armas. Y puestos en campaña, se juntaron 60 soldados, algunos con sus mujeres e hijos, y tomaron por los llanos del Manso, por no encontrarse con Nuflo de Chaves, de quien ya tenían noticia que volvía del Perú por la cuesta que dicen de la Cuchilla, evitando el tener pesadumbre unos con otros; porque con algunas informaciones Nuflo tenía hecho su negocio muy a su salvo con el Gobernador Lope García de Castro. Por lo cual fue muy acertado el darle lado, aunque con el riesgo de encontrar con los indios Chiriguanos, que le dieron muchos asaltos, impidiéndoles el camino que llevaban, donde mataron a un fraile que llevaban de Nuestra Señora de las Mercedes y otros españoles, de cuyos peligros fue Nuestro Señor servido de sacarlos llegando con bien a aquel reino: al cual entraron por la frontera de Tomina, por el camino que dicen de Cuzcotoro, que el día de hoy es muy trillado por los Chiriguanos que allá comunican.\n\n\n\n\n\n",
  id: 134
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 135",
  chapter: "Capítulo XII",
  layout: "textoporpagina",
  content: "\n    \nCapítulo XIICómo en este tiempo sacaron preso a la Real Audiencia a Francisco de Aguirre, Gobernador del TucumánAunque parezca apartarme fuera del propósito de mi historia, desviándome del hilo de las cosas que tocan al Río de la Plata, no he querido pasar en silencio lo que sucedió a Francisco de Aguirre en la gobernación de Tucumán, que como tengo dicho me es fuerza tocar algunas cosas de aquella tierra, según en esta historia he comenzado. El cual gobernando aquella provincia en nombre de Su Majestad por el Conde de Nieva, virrey del Perú, mandó hacer la población de San Miguel del Tucumán, cometiéndola a Diego de Villarroel su sobrino, y el año de 1564 hizo esta fundación, que dista de Santiago del Estero 25 leguas, en comarca de 4 a 5 mil indios, parte de los cuales reconocieron en tiempos pasados y, por rey al Inga del Perú, que son los Serranos: los demás tienen algunos caciques a quienes respetan. Está en altura de 28 grados, y así tiene buen temperamento, siendo tierra de muchos bosques y arboledas muy crecidas, y pastos convenientes para todo género de ganados. Pasa por este pueblo un pequeño río, que de este y de otros doce, se viene a formar el de Santiago, que comúnmente llaman el Estero. Después de concluida esta población con buen suceso, determinó Francisco de Aguirre hacer una jornada a la provincia de los Comenchingones, que es hoy la de Córdoba; y habiendo salido con buen orden golpe de gente española y amigos, la hizo visitando los pueblos de aquel camino, tomando noticia y lengua que a la parte del S. E. había un término muy poblado de indios muy ricos, según y como a Diego de Rojas le informaron cuando descubrió esta provincia. Y después de algunos sucesos por desavenirse la gente que llevaba, dio vuelta para Santiago, y llegando a 40 leguas de ella, al puesto que llaman los altos de Francisco de Aguirre, le prendieron una noche en el año de 1566, siendo cabeza de este motín Diego de Heredia y Versocana, so color de un mandamiento eclesiástico que tenía del vicario de aquella ciudad. Donde llegando con él, bien aprisionado; usurparon la jurisdicción real, y de su propia autoridad administraron él y sus confidentes la real justicia, tomando en sí el gobierno. Prendieron a todas las personas sospechosas que podían apellidar la voz real, no solo en esta ciudad, sino en la de Tucumán, exceptuando el capitán Gaspar de Medina, lugar teniente del Gobernador, que por ventura se les escapó, valiéndose de la ciudad, y metiéndose en una sierra que llaman de Concho, distante del Estero 12 leguas. Con lo cual quedaron los tiranos apoderados\n\n\n\n\n\n",
  id: 135
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 136",
  chapter: "Capítulo XIII",
  layout: "textoporpagina",
  content: "\n    \nde la tierra; y para dar color a lo que tenían hecho con algún buen efecto, determinaron hacer una población, entre el Poniente y Septentrión, en la provincia de Esteco, la cual descubrió Diego de Rojas, cuando entró la primera vez en aquella gobernación. Y saliendo de Santiago a este efecto, fundaron una ciudad, ribera del Río Salado, a la que llamaron Esteco, por un pueblo de naturales de este nombre, de quien lo tomó también la provincia. Dista esta ciudad de la de Santiago del Estero 45 leguas, y está en altura de 26 grados y medio. Estando las cosas en este estado, el capitán Gaspar de Medina, teniente del gobernador Francisco de Aguirre, convocó algunos amigos suyos, y con favor y ayuda de Nicolás Carrizo, Miguel de Ardiles, y el capitán Juan Pérez Moreno, prendió a Heredia y Versocana, y a los demás sus secuaces; y hecho proceso contra ellos, los sentenció a muerte, la cual se ejecutó en los más culpados, con lo que se restituyó la jurisdicción real. Y en este medio la Real Audiencia despachó a aquel gobierno al capitán Diego Pacheco, ínterin que se veía en aquella Audiencia el negocio de Francisco de Aguirre, que había sido llevado preso a aquella corte. Y llegado Diego Pacheco, reformó algunas cosas, y mudó el nombre de la ciudad de Esteco, llamándola Nuestra Señora de Talavera, y repartió los naturales de su distrito en 60 vecinos: y después de algunos sucesos, mandó la Real Audiencia a Francisco de Aguirre volver a su gobierno, y él lo hizo, aunque no duró mucho en él: porque vuelto apasionadamente, fue atropellando las cosas aun no estando muy asentadas las pasadas, que estaban puestas en el tribunal eclesiástico. Y pasadas al del santo oficio, resultó que fuese despachado del Perú el capitán Diego de Arana, por orden de la inquisición, a prenderle; y consultado con el virrey; nombrole también para que administrase el gobierno de aquellas provincias; y con ambas facultades entró en él, y prendió a, Francisco de Aguirre, y puesto por efecto lo que se le había cometido, volvió con él a los Charcas, y de allí a los Reyes, dejando en el gobierno de aquella tierra al capitán Nicolás Carrizo, que en nombre de Su Majestad lo administró, hasta que fue en él proveído don Jerónimo Luis de Cabrera.Capítulo XIIIDe la llegada de Francisco de Vergara al Perú y sus sucesos; y vuelta del ObispoNo sin grandes dificultades y peligros de enemigos entraron en \n\n\n\n\n\n",
  id: 136
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 137",
  chapter: "Capítulo XIII",
  layout: "textoporpagina",
  content: "\n    \nel Perú, el Gobernador Francisco de Vergara, y el Obispo don Fray Pedro de la Torre, los oficiales reales, y otros caballeros que fueron en su compañía el año de 1565. Y llegados a la ciudad de la Plata, no le faltaron al Gobernador mil dificultades; y propuesta su pretensión del gobierno, tuvo opositores muy fuertes, demás de habérsele puesto capítulos muy perjudiciales en aquella audiencia; y el principal, por haber sacado del Río de la Plata tantos españoles e indios naturales, a tan gran costa y gasto de hacienda; so color de pedir socorro y ayuda para aquella conquista: siendo de manera que no se le podía dar mayor, ni tan copioso como el que sacó con tanto perjuicio, de aquellas provincias. Y así el procurador general, a instancia de sus émulos y contrarios, le puso 120 capítulos, muchos de ellos graves, con lo cual hubo lugar de oponerse a dicho gobierno Diego Pantoja, y Juan Ortiz de Zárate, vecinos principales de la ciudad de la Plata. Así mismo, entre los más que fueron del Río de la Plata, no faltaban diferencias y pasiones; entre las cuales causó mucha turbación una querella que dio en la real audiencia Hernando Vera de Guzmán, sobrino de Álvaro Núñez Cabeza de Vaca, contra Felipe de Cáceres y Pedro de Orantes, que fueron autores de la prisión de su tío, de quien era heredero y sucesor: de que resultó el prenderlos, y alegando, en su favor, dijeron: no poderse conocer de ella en aquella audiencia por estar su conocimiento pendiente ante Su Majestad y su real consejo de Indias, y así se debía inhibir aquella real audiencia de este negocio: y con esto y, los testimonios que presentaron se alzó mano, con que se evadieron de tan arduo y criminal peligro. Y sueltos de la prisión, el contador se fue a la ciudad de los Reyes con los pretensores del gobierno, de los cuales el que más instancia hizo fue Juan Ortiz de Zárate, persona principal y de grandes méritos, por haber servido a Su Majestad en las guerras civiles contra los rebelados del Perú, con gran fidelidad y valor, como se refiere en el título de Adelantado de que Su Majestad le hizo merced. Y llegado a los Reyes, hizo asiento y capitulación sobre este gobierno del Río de la Plata con el licenciado Lope García de Castro, Gobernador General de aquel reino, obligándose a gastar en la conquista y población del Río de la Plata, ochenta mil ducados, y de poblar en aquella provincia ciertas ciudades a su costa, haciéndosele merced de aquella gobernación con título de Adelantado, con otras muchas franquezas que están concedidas a los capitanes pobladores de indios. Y hecho el dicho asiento, se le dio el gobierno de aquella provincia, con cargo de que fuese por la confirmación a Su Majestad: mandándosele así mismo a Francisco de Vergara \n\n\n\n\n\n",
  id: 137
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 138",
  chapter: "Capítulo XIII",
  layout: "textoporpagina",
  content: "\n    \npareciese ante la real persona en la prosecución de su causa y pretensión. Y luego el año siguiente, partió Juan Ortiz de Zárate para Castilla, llevando consigo gran cantidad de oro y plata, que le robó en la mar un corsario francés, sin dejarles más de unos tejuelos de oro, que una negra suya escondió debajo de su saya. Antes de su salida despachó de Lima por su teniente general del Río de la Plata a Felipe de Cáceres, a quien ayudó con cantidad de plata para su avío, socorriendo así mismo a todas las personas que quisiesen volver a aquella tierra. Y juntos en la ciudad de le Plata el Obispo, y General, y demás caballeros, entraron a su jornada, y llegados a Santa Cruz de la Sierra, los recibió Nuflo de Chaves con muestras de grande voluntad, aunque en los negocios de tu despacho les dio poco favor: y puestos en buen orden, salieron de aquella ciudad, con el Obispo y General, 60 soldados y algunas mujeres y niños, y gente de servicio con cantidad de ganado vacuno y ovejuno. El capitán Nuflo de Chaves salió con otra compañía al mismo paso de la otra, so color de irle en conserva. Fuele entendido que su ánimo era otro del que mostraba, como se vio, que fue sonsacando algunas personas de las que iban con el General, como fue un famoso minero, llamado Muñoz, y otros. Con esta conformidad llegaron todos juntos hasta la comarca de los indios Guaranís, que quedaron poblados cuando vinieron del Río de la Plata con Francisco de Vergara, que casi todos eran de la provincia del Itatin: los cuales con su continua malicia estaban alborotados, y desamparando algunos pueblos, que estaban por el camino, se apartaron a los más lejanos, recelosos de recibir algún daño de los nuestros, o porque intentaban cometer alguna traición contra ellos: por manera que Nuflo de Chaves tuvo necesidad de irse apartando del General, metiéndose de un lado y otro para aquietar aquellos indios. Y llegando cerca de un pueblo donde supo que estaban algunos caciques principales, se adelantó de su compañía con doce soldados y llegó al pueblo: y apeados en la plaza, fueron bien recibidos de todos con muestra de amistad; y dándole una casa por posada, entró Nuflo en ella, y se sentó en una hamaca que le tenían colgada, quitándose la celada de la cabeza para orearse. A cuya sazón llegó a él por detrás un cacique principal, llamado de la Porrilla, y le dio con una macana en la cabeza, que le hizo saltar los sesos, derribándolo en tierra. A este tiempo acometían los demás a los soldados, que ajenos de esta traición estaban a la puerta, donde sin ninguna dificultad los \n\n\n\n\n\n",
  id: 138
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 139",
  chapter: "Capítulo XIV",
  layout: "textoporpagina",
  content: "\n    \nmataron a todos, que solo escapó el trompeta, llamado Alejandro, que se dio prisa a ponerse en su caballo, aunque con algunas heridas, y fue a dar aviso de lo que pasaba a don Diego de Mendoza, que venía marchando con la gente para dicho pueblo, bien fuera del suceso; y a no ser avisado del trompeta cayera como el General en manos de aquellos enemigos, que con la misma traición le esperaban.Capítulo XIVDel castigo que don Diego de Mendoza hizo por la muerte de Nuflo de Chaves, y los reencuentros que tuvo con los indios el General y su compañíaMuerto el capitán Nuflo de Chaves, los indios de la Comarca trataron de acometer a don Diego y su compañía; el cual como ya estaba avisado del trompeta, iba prevenido y con cuidado aguardando a los enemigos, los que pusieron en ejecución el acometerle: para lo cual ganaron un paso peligroso por donde los nuestros habían de pasar para sus pueblos, cerca de un pantano y tremedal, que les era forzoso pasar a pie, llevando los caballos de diestro. Allí se emboscaron, y el don Diego, cuando llegó, se previno de mandar reconocerle primero, con lo que descubrió la celada que le tenían armada: y haciendo reconocer otro paso por la parte de arriba, y hallándole razonable, mandó pasasen por él a la otra parte 20 arcabuceros de a caballo y algunos indios amigos que diesen de sobresalto, por las espaldas al enemigo. Y puestos en parte donde lo pudieron hacer, los acometieron e hicieron salir a campaña rasa, con lo que pudo pasar don Diego con su gente, por el paso que le tenía el enemigo tomado: y juntos en lo llano, se trabó una reñida pelea, y ayudando Nuestro Señor a los nuestros, pusieron en huida al enemigo con muerte de muchos de los suyos, y prendieron algunos caciques, a los cuales hizo don Diego hacer cuartos y empalar por los caminos. Y para acabar con este castigo y tener fuerza suficiente, convocó algunos pueblos de los leales, y que no estaban conjurados ni metidos en esta traición y juntando buena parte de ellos, los agregó con los demás de su compañía y se fue al pueblo del de la Porrilla, donde estaban los principales actores de la traición y muerte de Nuflo de Chaves, determinados, a aguardar a los nuestros cogiéndolos en medio de sus pueblos; habiéndose reforzado de toda la gente de guerra que pudieron para el efecto. Y con esta confianza hicieron rostro con tanto esfuerzo, que los pusieron en grande aprieto, hasta \n\n\n\n\n\n",
  id: 139
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 140",
  chapter: "Capítulo XIV",
  layout: "textoporpagina",
  content: "\n    \nque, favorecidos de Nuestro Señor, los españoles cerraron con los indios y los rompieron. Y entrando en el pueblo, le pusieron fuego; y en el alcance pasaron a cuchillo todo cuanto topaban, sin perdonar a sexo ni condición, haciendo en ellos el más rigoroso castigo que se ha visto en las Indias; que en alguna manera fue exceso de crueldad, pues pagaban tantos inocentes lo que debían los culpados: con lo que se atajó el paso en alguna manera a tanta malicia. Y hecho lo más que convino, don Diego dio la vuelta a la ciudad de Santa Cruz, donde luego que llegó, el cabildo y toda la demás gente le nombraron por su Capitán y Justicia mayor en nombre de Su Majestad, y como a tal le recibieron al uso y ejercicio de su oficio, en el ínterin que otra cosa fuese proveída por la real audiencia y virrey de aquel reino. Y dando cuenta, como debían, de lo sucedido a quien tocaba, fue aprobado don Diego, en cuya virtud aprendió la gobernación de aquella tierra. Hasta que andando el tiempo, don Francisco de Toledo, que por orden de Su Majestad fue proveído por virrey del Perú, envió por gobernador de esta provincia de Santa Cruz, al capitán Juan Pérez de Curita, persona principal y que había servido a Su Majestad en cargos preeminentes, y halládose en la conquista del reina de Chile, y administrado el gobierno del Tucumán. Y con su entrada resultaron las revoluciones y tumultos que en su lugar diremos, junto con la muerte de don Diego, por decir en este capítulo de la jornada de Felipe de Cáceres y el Obispo, hasta llegar a la Asumpción. Los cuales, en el ínterin que sucedió la muerte de Nuflo de Chaves, estaban detenidos en cierto paraje donde habían concertado el juntarse ambas armadas, y aguardando la correspondencia de Chaves, no se movían de aquel puesto. Y confusos de su tardanza, por no saber de él nueva alguna, una tarde se pusieron dos indios sobre un cerro que estaba cerca del cuartel, y advirtieron que daban voces y hacían señal a los españoles, con unos ramos, y lo que decían, según lo que se pudo oír, fueron estas palabras: &quot;Españoles, no aguardéis a Nuflo de Chaves, porque ya es muerto, y acabados sus días, y nosotros no pretendemos haceros a vosotros mal ninguno, y así seguid vuestro camino en paz, y no os juntéis con la gente de don Diego, porque no os ha de ir bien&quot;. Entendidas las razones de los indios, se determinó fuesen dos soldados a tomar lengua de lo que había, y saber de Nuflo de Chaves. Y así fueron dos mancebos de la tierra a pie con sus armas, y caminando fuera de camino encontraron ciertos indios, de quienes se informaron de lo que pasaba: con lo que volvieron al campo, y dieron cuenta de lo que les había sucedido. \n\n\n\n\n\n",
  id: 140
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 141",
  chapter: "Capítulo XV",
  layout: "textoporpagina",
  content: "\n    \nSobré lo cual se determinó no parar más allí un punto, sino que luego se prosiguiese con su jornada y así caminaron en demanda del río del Paraguay, despachando el General a un soldado, llamado Jácome, gran lenguaraz, con unos caciques naturales de aquella parte del río, que vinieron con el Obispo y Gobernador, a que diesen cuenta a los principales de aquella provincia, como ellos iban a hacerle mucha amistad; y así que les diesen seguro pasaje. Partido el mensajero, y llegado a la provincia del Itatin, comenzaron los naturales a turbarse y conmoverse, y en lugar de paz, tomaron las armas contra los españoles, y por principio de paga mataron luego a Jácome el mensajero; con lo que se alzó toda la tierra, sin que quedase ninguno en toda aquella provincia Y camino, que no lo hiciese, con tener de largo más de 150 leguas hasta la ciudad de la Asumpción. De cuyo suceso, guerra y trabajos padecidos en este camino, se tratará en el capítulo siguiente.Capítulo XVDe la guerra que los indios hicieron en aquel camino a Felipe de Cáceres, y su compañíaCaminando el General con buen orden con su gente en demanda del río Paraguay, no tuvo en todo aquel camino hasta el río ningún mal suceso ni pesadumbre con los indios de aquellos llanos. Y estando tres jornadas del pueblo, encontraron una tarde con siete u ocho indios con sus mujeres e hijos, que venían de la otra parte a visitar a los que estaban en esta, por ser todos deudos y parientes, y quedándose aquella noche en nuestro alojamiento, comenzaron algunos soldados a revolverles el hato que llevaban; y hallando un puño, de daga de plata dorada, luego conocieron todos era de la que llevaba en la cinta el mensajero Jácome, y se temieron de algún mal suceso. Y con él en la mano hablaron a los indios, y preguntaron de quien lo habían habido, sobre lo que comenzaron a desvariar: y poniendo a uno de ellos en cuestión de tormento, confesó lo que pasaba, expresando como le habían muerto los indios en el pueblo de Anguaguazú, los cuales, con los demás de aquella tierra estaban de terminados a no dejar pasar a los españoles, antes a hacerles cruda guerra hasta acabarlos. Con esta nueva recibió todo el campo gran turbación, y llegando al paraje del río, luego fueron sentidos de los indios Payaguás y Guajarapos, de los que ya en este libro tengo hecha mención. \n\n\n\n\n\n",
  id: 141
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 142",
  chapter: "Capítulo XV",
  layout: "textoporpagina",
  content: "\n    \nY despachando el General seis soldados en dos carabelas viejas a sacar del agua ciertas barcas y canoas que habían dejado hundidas en una laguna para cuando volviesen, fueron asaltados de los Payaguás, y presos. Porque su continua malicia, habiendo visto las canoas y barcas con las menguantes del agua, reconoció que habían de ser cebo de alguna presa cuando volviesen por allí los españoles, como sucedió. Porque luego que supieron de su llegada, salieron cantidad de canoas a ponerse cerca del real, con buena cantidad de gente de guerra, y encubiertas con ramas e yerbazales de la orilla del río, se estuvieron aguardando a que saliese alguna gente por las canoas y barcas que abajo estaban; por las cuales se habían despachado los seis hombres, que siendo hundidos en el río por esta gente, con facilidad los prendieron a vista del campo: aunque de ellos los tres se rescataron luego, y los otros tres de ninguna manera los quisieron rescatar. Y así se los llevaron a sus pueblos, aunque de ahí a algunos días vinieron a pedir una trompeta de plata que traía el General, y otras preseas y ropa de colores que ellos estiman, por lo que vinieron a darlos. Y sacando las barcas y canoas mandó el General pasasen a la otra banda veinte arcabuceros para asegurar el paso; y hecho con diligencia, fueron atravesando el río con buen orden y pasó el campo con todo el ganado vacuno, yeguas, etc., que traían. Al otro día partieron del puerto, y caminando por sus jornadas, llegaron al primer puerto de la provincia del Itatin, el cual hallaron sin gente, por haberla retirado con la ocasión de sus malos intentos: y pasando adelante hacia el pueblo principal de aquel distrito, reconocieron los nuestros que estaban metidos en una gruesa emboscada por el lado de un boquerón de quebrada; y así todos fueron marchando con mucho recato y buen orden, cerrados los escuadrones en cinco mangas: hasta que a las diez del día comenzaron los enemigos a acometer por la vanguardia en la que iba el General; juntamente dieron por la vanguardia, y al mismo tiempo por la retaguardia, y esto con tanta fuerza y furor que iban hiriendo a los nuestros, y de tal manera que les parecía imposible poderles resistir. Pero esforzados con el valor de Dios, y el ánimo y valor español, pelearon a pie y a caballo, de suerte que con matarles mucha gente a los enemigos, no se reconoció por grande espacio ventaja. En cuya ocasión el buen Obispo andaba muy solícito por el campo, esforzando a los soldados, junto con otros religiosos, con palabras dignas de quien las decía. Con lo cual se fue ganando tierra al enemigo, procurando el General llevar el bagaje muy apretado y recogido en medio de la \n\n\n\n\n\n",
  id: 142
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 143",
  chapter: "Capítulo XV",
  layout: "textoporpagina",
  content: "\n    \nbatalla, con las municiones, mujeres y demás gente que no era de pelea; guarnecido con muy buena arcabucería, llevando los nuestros conocida ventaja, aunque muchos muy heridos. Y apretando la pelea con valor, comenzaron a huir los enemigos repentinamente, sin que los nuestros pudiesen entender la causa; dejando el campo por nuestro, hasta que de ellos mismos se supo, que la causa de su huida fue el no poder resistir al furor y denuedo de un caballero, que lleno de resplandor, con tal velocidad los alanceaba, que no parecía sino un rayo. Túvose por cierto que aquel caballero y socorro fue el apóstol Santiago, o el bienaventurado San Blas, patrón de aquella tierra; y como quiera que fuese, el socorro fue del Altísimo Dios, que no permitió pereciese allí aquel buen pastor con sus ovejas, dándoles victoria de más de 10000 indios. Lo cual sucedió a 12 de noviembre de 1568. Y por todo aquel camino adelante, siempre tuvieron los nuestros reencuentros con los enemigos; y aunque siempre salieron con victoria, y llevaban estos en la cabeza, no por eso dejaron de seguir la armada, armándola cada día mil celadas, y dándola continuos rebatos, hasta que llegaron a un río que llaman de Jejuí, 24 leguas de la Asumpción, donde fueron saliendo algunos indios de paz. De allí dieron aviso a la ciudad, pidiendo algunas barcas y canoas en que pudiesen bajar, como en efecto se hizo; echando el General por tierra la gente más suelta, con los caballos y demás ganados, hasta tomar el puerto tan deseado. El capitán Juan de Ortega con los demás caballeros de la república, recibieron con mucho aplauso al Obispo y General, aunque entre los dos venían muy discordes, puesto que por entonces lo disimulaban; pero no pudieron dejar de manifestar lo que tenían encerrado en sus pechos, como se dirá en el discurso adelante. Luego que llegó el General mandó juntar a cabildo, y sin desarmarse ni descansar un momento, se hizo recibir al uso y ejercicio de su oficio, con que por entonces quedó en pacifica posesión del gobierno, que fue al principio del año de 1569; nombrando por su lugarteniente a Martín Suárez de Toledo, y por alguacil mayor de provincia al capitán Pedro de la Puente: acudiendo en todo lo demás a las cosas de la república, como convenía al real servicio; como más largamente se dirá adelante.\n\n\n\n\n\n",
  id: 143
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 144",
  chapter: "Capítulo XVI",
  layout: "textoporpagina",
  content: "\n    \nCapítulo XVIDe un tumulto que se levantó contra el capitán Alonso Riquelme, y del socorro que se le hizoDespués que el capitán Riquelme hubo allanado las alteraciones pisadas de los indios de la provincia de Guayra, a cuyo gobierno, como queda, dicho, fue enviado por el Gobernador Francisco de Vergara, y por su lugar teniente estuvo en ella con toda paz y quietud, gozándola también los vecinos y encomenderos, hasta el año de 1569, que hubo ciertas novedades entre ellos, cuyo origen fue de esta manera. Habiéndose descubierto en aquella tierra unas piedras cristalinas que se crían dentro de unos cocos de pedernal muy apretados y juntos, con puntas piramidales de diferentes colores, unas moradas, otras verdes y amarillas, y otras más claras cristalinas, todas finas y resplandecientes como cristales, las cuales tuvieron en aquella tierra por piedras preciosas y de gran valor, porque ya decían eran rubíes, amatistas, iris y esmeraldas, y aun por muy preciosos diamantes; las cuales se hallan en aquella parte en los montes, bajo de tierra, donde sazonados los granos deshacen los cocos de pedernales, criándose en una arena como ceniza, quedando las piedras sueltas puras y netas; reventando algunos cocos bajo de tierra con la fuerza del incremento de las piedras, con estallido y estruendo tan grande que estremecen los montes, hallándose bajo de tierra los medios cocos con la fuerza del reventar, divididos más de diez pasos. Habiendo también otras diferencias de piedras, que se crían en unos tejuelos de pedernal como puntas de diamantes, grandes y pequeñas que llaman zafiros, y jacintos, que según el viso que tenían, así les aplicaban el nombre. Y como les pareciese que poseían la mayor riqueza del mundo, intentaron desamparar el pueblo y tomar la costa del mar para irse a Castilla con sus mujeres e hijos; y determinados secretamente a ponerlo en efecto, no pudo ser tan secreto que no fuesen sentidos, y presos los más incursos en este trato; que al fin vinieron a concluir bajo de grandes juramentos que se aquietarían, y no harían ningún movimiento: con lo cual fueron sueltos y libres de la prisión. Pero de ahí a algunos días, estando el capitán Alonso Riquelme descuidado de esto, llegaron a su casa 40 vecinos y soldados todos armados, requiriéndole por escrito les diese caudillo para que fuese con ellos a los puertos de mar de aquella costa, de donde pudiesen dar cuenta a Su Majestad de la gran riqueza que tenían en aquellas \n\n\n\n\n\n",
  id: 144
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 145",
  chapter: "Capítulo XVI",
  layout: "textoporpagina",
  content: "\n    \npiedras; y si esto no quisiese, saliese personalmente con ellos: donde no, ellos harían lo que mejor les estuviese. A cuyo requerimiento respondió, que él acordaría lo que al real servicio más conviniese: y visto que les denegaba su pretensión, le prendieron una noche, y a otras personas que eran de su parte, quitándoles las armas con que podían ser resistidos, haciéndose cabeza de este motín un clérigo llamado Escalera. Y puesto en este estado el negocio, se previnieron de lo que habían menester, y partieron de la ciudad por el río y por tierra, nombrando por su caudillo a un inglés, que se llamaba Nicolás Colman; debajo de cuya orden se fueron por un río arriba, hasta dejar las canoas en cierto puerto, dejando solo al capitán Alonso Riquelme en la ciudad, con algunos amigos suyos: el cual dio luego aviso a la de la Asumpción, y por él se despachó socorro con el capitán Rui Díaz Melgarejo; que aunque no estaba absuelto por la muerte del clérigo y de la excomunión, luego fue absuelto por el provisor general del obispado, que era Paniagua; el cual con otras personas quiso ir en su compañía, que por todos fueron 50 soldados. Y salidos de la Asumpción, llegaron al río Paraná: y dándoles el pasaje necesario, salieron en seguimiento de los amotinados y les dieron alcance: y siendo presos y traídos a la ciudad, fueron castigados con más benignidad que lo que merecían sus delitos; los que coloreaba el capitán Rui Díaz, favoreciendo en secreto a los tumultuarios en perjuicio del buen crédito de Alonso Riquelme, por la antigua emulación que entre ellos había. Y así, no pudiendo estar juntos, determinó Alonso Riquelme venirse a la Asumpción con el provisor, el capitán, y con otros 40 soldados y vecinos de aquella tierra: y puestos en camino por el año de 1569, hallaron todos los pueblos de indios que por allí había, alzados, y con determinación de no dejarlos pasar adelante. Hicieron sus juntas, y en algunos lugares dispuestos les pusieron celadas, donde cada día se peleaba con ellos; y llegando nuestra gente 26 leguas de la Asumpción, en la travesía de un bosque muy cerrado que llaman Erespoco, les ganaron la entrada más de 4000 indios, y todo el camino, dándoles de un lado y otro muchas rociadas de flechería, donde los nuestros hubieron menester bien las manos; y ganándoles el puesto, los fueron echando por sus senderos a arcabuzazos, hasta sacarlos a lo raso, donde el capitán Riquelme escaramuceó con 6 de acaballo con ellos, y poniéndolos en huida, pasaron adelante. Y otro día siguiente llegaron a las boqueras del Paraguay, donde se junta el camino de Santa Cruz con el que va de esta tierra; y mirando por el campo, vieron mucho estiércol de caballos y vacas, \n\n\n\n\n\n",
  id: 145
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 146",
  chapter: "Capítulo XVII",
  layout: "textoporpagina",
  content: "\n    \nde lo que había traído del Perú el General, aunque no pudieron entender lo que fuese. Hasta que habiéndose acuartelado aquella noche, se cogieron unos indios que iban huídos de la Asumpción a los alzados, los cuales dijeron de la llegada del General y Obispo, y de los demás de la compañía: la cual nueva le fue a Alonso Riquelme de bien poco gusto, por el odio y enemistad que se tenían desde la prisión del Adelantado Cabeza de Vaca, su tío. Y el que más sintió esto fue Francisco González Paniagua, porque entendía que el Obispo no había de recibir bien la absolución de Rui Díaz Melgarejo, con cuya confusión no sabían que hacer; y a no ser las dificultades del camino tan grande, se volvieran desde allí. Pero les fue forzoso ponerse en manos de quienes tanto se recelaban, y despachando sus mensajeros a la Asumpción, dieron aviso de como iban; y sabido por el General, les envió luego a saludar y darles bien venido. Y entrando al otro día, los salió a recibir desde su casa hasta la puente de la iglesia mayor, donde con mucha cortesía y afabilidad se saludaron, y desde aquel día tuvieron el General y Alonso Riquelme muy buena amistad, dejando a parte negocios pasados, con los que adelante sucedieron, y se podrán ver.Capítulo XVIICómo Felipe de Cáceres bajó a Buenos Aires: de la vuelta de Alonso Riquelme a la provincia de Guayra, y su prisión, etc.Lo primero que el General Felipe de Cáceres hizo en llegando a esta ciudad, fue mandar aparejar los bergantines y barcas que había en aquel puerto, y alistar 150 soldados para ir a reconocer la boca del Río de la Plata, por ver si venía alguna gente de España; en conformidad de la orden e instrucción que traía de Juan Ortiz de Zárate. Y así para este efecto; aprestándose de todo lo necesario, entrando el año de 1570 salió de la Asumpción, y llegado a las Siete Corrientes, halló muchas canoas de indios Guaranís, que venían de correr el río, con los cuales se arcabucearon; y pasando adelante fue por sus jornadas hasta ponerse en el fuerte de Gaboto, donde le salieron los indios Timbús a darle la paz con mucha amistad. Y bajando al río de las Palmas, salió al golfo de Buenos Aires; y reconocida aquella costa de una y otra parte, llegó a la isla de San Gabriel, donde dejó escritas unas cartas de aviso metidas en una botija al pie de una cruz, y dando vuelta de allí, el río \n\n\n\n\n\n",
  id: 146
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 147",
  chapter: "Capítulo XVII",
  layout: "textoporpagina",
  content: "\n    \narriba, volvió a la ciudad de la Asumpción con toda su gente, sin haber tenido ningún mal suceso. Y luego que llegó, persuadió con muchas razones al capitán Alonso Riquelme, quisiese volver al gobierno de la provincia de Guayra en conformidad de lo que le fue ordenado por el gobernador Juan Ortiz de Zárate, el cual condescendiendo en lo que pedia le dio los poderes que para el efecto traía con las provisiones, y sobre carta de la Real Audiencia; y previniéndose de gente y de lo demás necesario, salió de la Asumpción con 50 soldados de compañía. Y porque en aquel tiempo estaba toda la tierra rebelada, y puesta en arma, salieron en su resguardo otros 100 arcabuceros a la orden del tesorero Adame; y llegando con ellos 35 leguas de la ciudad, sobre un gran pantano que llaman Coropatí, hallaron juntos los indios de toda aquella comarca, determinados a resistir a los españoles como enemigos; y siendo acometidos de los nuestros, pelearon con ellos en campo raso, donde fueron desbaratados, y vencidos con muerte de mucha gente. Y hecho este castigo, se volvieron los de la Asumpción, y los demás con el capitán Alonso Riquelme pasaron adelante. Y caminando por sus jornadas con muchos reencuentros y escaramuzas que los indios les daban, llegaron a un pueblo de indios que llaman Maracayú, cinco jornadas de Ciudad Real, de donde despachó sus mensajeros españoles al capitán Rui Díaz, dándole aviso de su venida, y ofreciéndole todo el favor, amistad y fidelidad del mundo. El cual, en recibiendo la carta de los mensajeros, en lugar de despacharle el avío conveniente, y agradecer como honrado caballero la oferta y amistad que lo prometía, mandó luego convocar sus amigos, y tratar con ellos de como no tenía intento de recibir al que venía, ni obedecer los poderes que traía. Y así mañosamente, unos de temor, y otros de ruego, se juntaron en su casa, donde por sus votos y firmas, le eligieron por su Capitán General y Justicia mayor, en nombre de su hermano Francisco de Vergara; y electo, salió de la ciudad con 100 arcabuceros, y se puso con ellos en la travesía y paso del río, en una isla que dista de tierra un cuarto de legua sobre la canal de aquel peligroso salto, y allá sentó su campo, y puso la gente en orden de guerra; mandando que ninguno pasase a la otra parte donde estaba Alonso Riquelme, so pena de la vida. Y luego aquella noche despachó algunos de sus amigos, para que le fuesen a sonsacar toda la gente que traía; que como los más eran vecinos y casados en la Ciudad Real con facilidad serían persuadidos; como lo fueron, desamparando a su capitán, que solo le quedaron \n\n\n\n\n\n",
  id: 147
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 148",
  chapter: "Capítulo XVIII",
  layout: "textoporpagina",
  content: "\n    \ncuatro soldados. Y aunque con esta imposibilidad, le envió a suplicar al capitán Rui Díaz Melgarejo, que pues no permitía su entrada, le despachase donde él estaba a su mujer e hijos que allá tenía, que con ellos, y los pocos soldados, que le habían quedado se volvería a la Asumpción. A esto respondió que no era tan inhumano, que diese lugar a que los indios del camino matasen a los que no tenían culpa, como él la tenía en haberle venido a dar pesadumbre: pero que como le entregase los poderes que traía, le daba su fe y palabra, de no hacerle ningún agravio en su persona, con cuya seguridad podía pasar a su casa, no tratando de administración de justicia y gobierno, sitio vivir quieta y pacíficamente. Visto por Alonso Riquelme lo que le prometía, y la dificultad de no poder hacer otra cosa, condescendió con su voluntad; y debajo de la fe y palabra, que se le había dado, pasó a la isla en una canoa que para el efecto le despacharon, donde luego que llegó le quitaron las armas, y pusieron en prisión con dos pares de grillos, por árdea de Rui Díaz: y con muestras de gran pasión le mandó embarcar en una canoa y con toda su gente se partió para la ciudad, donde entró en escuadrón con pífano y tambor, llevando delante de sí a su preso en una hamaca, al cual puso dentro de su casa en una mazmorra, que ya tenía prevenida, y fortificada de fuertes maderas; en la cual le tuvo con muchas guardias, con notable riesgo de la vida, padeciendo mil vejaciones y molestias. Y al cabo de un año le desterró a una casa fuerte, que tenía cuarenta leguas de allí, la que mandó hacer para el efecto, entregándole en poder de un alcaide, llamado Luis de Osorio; donde le tuvo otro año, hasta que fue Nuestro Señor servido librarle de esta prisión, con lo que adelante sucedió.Capítulo XVIIIDe las pasiones y revueltas, que el Obispo y el General tuvieron, hasta que le prendieron, etc.En tanto que las cosas referidas en el capítulo antecedente pasaban en la provincia de Guayra; vinieron a tal estado las pasiones y diferencias del General, que estaba el pueblo dividido en dos bandos. Unos decían que el Obispo como pastor debía prevalecer, y otros, que el General como Ministro de Su Majestad convenía estar adelante, y tener la suya sobre el hito: de donde resultó perseguir el General a algunas personas del bando contrario, y el Obispo usar de excomuniones contra él y sus ministros, y estaba de tal manera \n\n\n\n\n\n",
  id: 148
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 149",
  chapter: "Capítulo XVIII",
  layout: "textoporpagina",
  content: "\n    \nrevuelto, que muchos clérigos y eclesiásticos eran contra su Obispo, y la mayor parte de los seculares contra su General. A cuya causa vivían los unos y les otros con gran cuidado y recato. Y habiendo entendido el General que trataban de prenderle, hizo algunas diligencias en este caso, prendiendo algunas personas sospechosas, y entre ellas al provisor Alonso de Segovia; y llegándose el tiempo de la venida del Gobernador Juan Ortiz de Zárate, se determinó el General bajar a Buenos Aires a reconocer la boca del Río de la Plata, y ver si llegaba el Gobernador. Para cuyo efecto mandó aderezar dos bergantines y algunos barcos y canoas hendidas, en guajo abajo, con 200 soldados, llevando consigo preso a Alonso de Segovia, con intento de echarle de la provincia a la gobernación del Tucumán, aunque hasta entonces no estaba descubierto aquel camino. Partido con su armada, llegó a los anegadizos de los Mepenes; y pasando adelante, entró por el Riachuelo de los Quibacas, y bajando a la Bandereta, salió a la boca del río Salado, donde tuvo comunicación con los de aquella tierra; y prosiguiendo su viaje llegó a Gaboto, y entró por el Varadero a salir al río de las Palmas, de donde reconoció la isla de Martín García, saliendo allí a darle la paz algunos indios Guaranís de aquellas islas. De aquí atravesó aquel golfo a la isla de San Gabriel, de donde despachó un bergantín a, la isla de Flores cerca de Maldonado; y no habiendo en toda aquella costa muestra de gente española, ni de navíos, dio vuelta a San Gabriel, y de allí tomó a la otra parte del Sud a vista de Buenos Aires, dejando en todas partes señaladas cartas y avisos de lo que se ofrecía, para los que viniesen de España: aunque de allí adelante todas las veces que vino a cuento mandó romper con los indios naturales del río, sin admitirles paz ni amistad alguna, haciéndoles la guerra a sangre y fuego, por muy livianas cosas. Con que se vino a entender que su pretensión era cerrar la entrada y navegación de aquel río. Y después determinó despachar, por el río Salado arriba, al provisor, y echarlo a Tucumán: y navegando por él algunas jornadas, no pudieron pasar adelante, por estar muy cerrados de árboles, y bancos de arena, por cuya causa dieron vuelta a la armada; la cual pasados cuatro meses volvió a la ciudad de la Asumpción, donde halló el General las cosas que trataban de prenderle o matarle. Y habiendo sabido este trato, mandó él prender algunas personas de sospecha, y entre ellas un caballero llamado Pedro de Esquivel, natural de Sevilla a quien mandó dar garrote, y cortar la cabeza, y ponerla en la picota; con lo cual todo el pueblo se turbó. Y con \n\n\n\n\n\n",
  id: 149
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 150",
  chapter: "Capítulo XVIII",
  layout: "textoporpagina",
  content: "\n    \nesto mandó echar un bando, que ninguna persona fuese osada de comunicar, ni hablar con el Obispo, ni hacer junta de gente en su casa, so graves penas. Y porque su lugar teniente Martín Suárez de Toledo comunicaba de secreto con el Obispo, le quitó la vara y oficio; por cuyas causas muchas personas se retiraron a sus chacras, ausentándose de la ciudad, y el Obispo se metió dentro del monasterio de Nuestra Señora de las Mercedes, donde estuvo encerrado por muchos días, perseguido del General y de sus Ministros; quien, con el recelo dicho tenía de guarda cada semana un caudillo con 50 soldados. Hasta que entrado el año de 1572 se dispusieron a prenderle, convocando para ello mucha gente en número de 140 personas: a las cuales para este efecto tuvo en una casa, que está junto a la iglesia un religioso de San Francisco, llamado Fray Francisco del Campo, hombre a propósito para el efecto. Y saliendo el General un lunes por la mañana a oír misa a la iglesia mayor, acompañado de su guarda, entrando dentro, y haciendo oración fuera de la reja de la capilla mayor, oyó un gran tumulto y ruido de gente que entraba en dicha iglesia por todas tres puertas: a lo cual el General se levantó, y viendo tanta gente armada, se entró en capilla echando mano a la espada, al tiempo que el Obispo salia de la sacristía, revestido, con un Cristo en la mano, y junto con él su provisor, diciendo a grandes voces: &quot;Viva la Fe de Cristo&quot;. Con esto el General se acercó al sagrario, donde le acometieron todos los soldados que venían delante, dándole muchos golpes y estocadas, sin que los guardas que tenía fuesen parte a defenderle; porque como oyeron decir-&quot;Viva la Fe de Cristo&quot;-, todos dijeron &quot;Viva&quot;; excepto un hidalgo de Extremadura llamado Gonzalo Altamirano, que se les puso delante: el cual fue atropellado de manera que dentro de pocos días murió. Y cerrando con el General, le desarmaron, y asiéndole de los cabellos, le llevaron en volandas; hasta meterlo en el monasterio de las Mercedes, donde el Obispo le tenía ya aparejada una fuerte y estrecha cámara, en que le pusieron con dos pares de grillos, y una muy gruesa cadena, que atravesaba una pared, al aposento del Obispo, y venía a cerrar en un muy grueso cepo de madera con un muy fuerte candado, cuya llave tenía el Obispo: además de los guardas, que dentro y fuera tenía a su costa, sustentándoles de sus bienes, sin dejarle más que para su sustento. Así le tuvieron más de un año, padeciendo este caballero muchas molestias e inhumanidades, pagando por los propios términos que él fraguó en aquella misma ciudad contra su Adelantado: (secretos juicios de Dios que tal permite). \n\n\n\n\n\n",
  id: 150
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 151",
  chapter: "Capítulo XVIII",
  layout: "textoporpagina",
  content: "\n    \nAl tiempo que sacaban de la iglesia a Felipe de Cáceres para ponerle en prisión, salió a la plaza Martín Suárez de Toledo, rodeado de mucha gente armada, con una vara de justicia en las manos, apellidando libertad; y juntando así muchos arcabuceros, usurpó la real jurisdicción, sin que alguno le osase resistir. Y al cabo de cuatro días, mandó juntar a cabildo, para que le recibiesen por Capitán y Justicia mayor de la provincia. Y visto por los capitulares la fuerza de esta tiranía, le recibieron por teniente de Gobernador de Juan Ortiz de Zárate; con que usó el oficio de la real justicia, proveyendo tenientes, despachando conductas, y haciendo encomiendas y mercedes, como consta de un acto, que contra él pronunció el Adelantado Juan Ortiz de Zárate, que es el siguiente. &quot;El Adelantado Juan Ortiz de Zárate, caballero de la orden del Señor Santiago, Gobernador y Capitán General, Justicia mayor, y Alguacil mayor en todas estas provincias y gobernación del Río de la Plata, nuevamente intituladas la Nueva Vizcaya, por la Majestad del Rey don Felipe Nuestro Señor, digo: Que por cuanto, como es público y notorio, al tiempo que el señor don Fray Pedro Fernández de la Torre, Obispo de estas provincias, y Alonso de Segovia, su provisor, con las demás personas que para ello se juntaron, y prendieron en la iglesia mayor de esta ciudad de la Asumpción a Felipe de Cáceres, mi Teniente de gobernación en estas dichas provincias, Martín Suárez de Toledo, vecino de esta dicha ciudad, de su propia autoridad, temeraria y atrevidamente, el día de la prisión referida, tomó una vara de justicia real en la mano; y usando de ella, usurpó la real jurisdicción, donde después de tres o cuatro días, el Cabildo y regimiento de la dicha ciudad, viendo que convenía al servicio de Dios Nuestro Señor obviar el grande escándalo, y desasosiego de los soldados y gente que se había hallado en la prisión, nombraron y recibieron al dicho Martín Suárez de Toledo, por mi lugarteniente, de Gobernador y Justicia mayor de todas estas provincias. Y usando el dicho oficio, sin tener poder de Su Majestad ni mío en su real nombre, ni menos el Cabildo de esta dicha ciudad se lo pudo dar de su poderío y absoluto poder; dio y encomendó todos los repartimientos de indios que estaban vacos, y después vacaron, y las piezas de Yanaconas, de indios e indias, que quedaban encomendadas a las personas que a él le pareció, por ser sus íntimos amigos, y parciales en sus negocios; por tanto: Por la presente, en nombre de Su Majestad y por virtud de sus reales poderes, que para ello tengo, que por su notoriedad no\n\n\n\n\n\n",
  id: 151
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 152",
  chapter: "Capítulo XIX",
  layout: "textoporpagina",
  content: "\n    \n van aquí expresados, doy por ningunas, de ningún valor, y efecto todas las encomiendas y repartimientos de indios Yanaconas de servicio, tierras y demás mercedes que el dicho Martín Suárez hizo, dio y encomendó a cualesquier personas, así en el distrito de esta ciudad de la Asumpción, como en la Ciudad Real de la provincia de Guayra; y pronuncio y declaro por vacos todos los dichos repartimientos y mercedes, para los dar y encomendar a las personas de conquistadores y beneméritos, que hayan servido a Su Majestad lealmente en esta tierra, conforme a la orden que tengo del Rey Nuestro Señor. Y mando a todas las personas, que así tuvieren mercedes fechas del dicho Martín Suárez, no usen de ellas en manera alguna, directa o indirectamente: y luego que este mi auto fuere publicado, dentro de tercero día, vengan manifestando los dichos indios que tuvieren, con las mercedes y encomiendas de ellos; so pena de 500 pesos de oro, aplicados para la Cámara y Fisco de Su Majestad la mitad de ellos, y la otra mitad para la persona que denunciare. En la cual dicha pena doy por condenados a los inobedientes, y transgresores de este mi auto. El cual mando se pregone públicamente en la plaza de esta ciudad; y de como así lo pronunció, proveyó, y mandó, y lo firmó de su nombre; siendo presentes por testigos, el capitán Alonso Riquelme de Guzmán, el tesorero Adame de Olavarriaga, y Diego Martínez de Irala, vecinos y residentes en esta dicha Ciudad; que es fecho, y sacado en 22 días del mes de Octubre de 1575 años&quot;. -El Adelantado, Juan Ortiz de Zárate.-Por mandado de su Señoría, Luis Márquez, Escribano de Gobernación.Capítulo XIXCómo fue llevado Felipe de Cáceres a Castilla; y de la población de Santa Fe, y de cómo se toparon con el Gobernador de TucumánEn este estado estaban las cosas de la provincia, después de la prisión de Felipe de Cáceres, cuando por orden del Obispo y Martín Suárez de Toledo, se despacharon mensajeros a Ciudad Real, al capitán Rui Díaz Melgarejo, para que, como enemigo capital suyo, le llevase a Castilla en la carabela, que ya a este tiempo se \n\n\n\n\n\n",
  id: 152
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 153",
  chapter: "Capítulo XIX",
  layout: "textoporpagina",
  content: "\n    \nestaba haciendo a mucha prisa. Y así el mismo año salió el capitán Hernán González, con treinta soldados al efecto: y llegando al puerto y pasaje, que está tres leguas de la otra parte de la ciudad, hicieron sus fuegos para que les acudiese gente. Luego el capitán Rui Díaz envió seis soldados a ver quienes eran, con orden de que no llegasen a tierra hasta haberla reconocido: y con todo el recato, mirado que gente era la que venía, y siendo sospechosa, no embarcasen a ninguno hasta saber su voluntad. Llegada la canoa a donde estaba Hernán González y sus compañeros, hablaron con ellos desde afuera, e informados de la prisión de Felipe de Cáceres, de quien era todo el recelo, y asegurados de que todos eran amigos, embarcaron al caudillo, y otros dos con él, y los llevaron al capitán Rui Díaz con las cartas y recaudos que traían, quedándose los demás en aquel puerto hasta que se les envió lo necesario, para su pasaje. Visto los recaudos y cartas de sus amigos, se determinó a hacer lo que le pedían. Y prevenido de lo necesario, salió de aquella ciudad, con buena compañía de gente; aunque después de puesto en camino se arrepintió. Mas no pudiendo hacer otra cosa, prosiguió y llegó a la Asumpción, donde no fue tan bien recibido de Martín Suárez, como algunos creían; respecto de que no se fiaban el uno del otro, ni aun se tenían buena voluntad: y así estuvieron algunos días no muy corrientes, hasta que el Obispo tomó la mano y los conformó. Luego que Rui Díaz salió de la ciudad, todos los vecinos y demás personas de la tierra enviaron a sacar al capitán Alonso Riquelme de la fortaleza donde estaba preso y desterrado por Rui Díaz; y venido a la ciudad todos le recibieron por su capitán, teniente de Gobernador y Justicia Mayor de aquel distrito: y recibido con la solemnidad debida al uso de su oficio, puso a la ciudad y tierra en paz y justicia, de que carecía; hasta tanto que el que tuviese la superior gobernación, en nombre de Su Majestad, y otra cosa proveyese. Acabada la carabela, determinó el Obispo ir personalmente en ella a Castilla, llevándose consigo preso a Felipe de Cáceres, y que fuese por capitán Rui Díaz Melgarejo, como persona que tenía necesidad de ir a Roma por el suceso pasado. Juntamente con esto se concedió facultad a un hidalgo vizcaíno, llamado Juan de Garay, para que hiciese gente, y saliese con ella a hacer una población en Sancti Spiritus, o donde más convenía. Y hecho su nombramiento, levantó 80 soldados, todos los más hijos de la tierra; y prevenidos de armas, caballos y municiones, salieron de la ciudad de la Asumpción el año de 1573, por tierra y por el río en un bergantín y otras embarcaciones juntos, \n\n\n\n\n\n",
  id: 153
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 154",
  chapter: "Capítulo XIX",
  layout: "textoporpagina",
  content: "\n    \nen conserva del Obispo, y de los demás que iban a España; llevando por tierra caballos, yeguas y vacas. Y llegados a la boca del Paraguay, acordaron que los de tierra pasasen el río de la otra parte del Paraná, y por aquella costa se fuesen hasta la laguna de los Patos. Lo cual se hizo sin dificultad de enemigos, por ir descubriendo aquel camino que jamás se había andado por los españoles. Y juntos en aquel páramo los de la carabela y pobladores, se despidieron, los unos para Castilla, y los otros tomaron el río que llaman de los Quiloasas; atravesando a la parte del Sud-Oeste. Y sentado su real, corrió Juan de Garay aquel territorio, y vista su buena disposición, determinó hacer allá una fundación; para lo cual ordenó su elección y Cabildo, regidores, con dos alcaldes ordinarios y su procurador. Y habiendo tomado la posesión, y hecho los requisitos de ella, puso luego por obra un fuerte de tapia, de la capacidad de una cuadra, con sus torreones, donde se metió con su gente. Fue hecha esta fundación llamada la ciudad de Santa Fe, el aña referido, día del Bienaventurado San Jerónimo. Está en un llano, tres leguas más adentro, sobre este mismo río que sale 12 leguas más abajo: muy apacible y abrigado para todo género de navíos; la tierra es muy fértil de todo lo que en ella se siembra, de mucha caza y pesquería. Hay en aquella comarca muchos naturales de diferentes lenguas y naciones, de una y otra parte del río, que unos son labradores, y otros no. Concluido el fuerte, luego salió Juan de Garay a correr la tierra, empadronando a los indios de la comarca, así para encomendarlos a los pobladores, como para saber el número que había: para lo cual sacó 40 soldados en el bergantín, una barca y al unas canoas; y bajando el río abajo le salieron muchos indios de paz, y para poderlos visitar fue fuerza entrasen con el bergantín por un estrecho río, que sale al mismo principal, por donde había muchos pueblos de naturales; y después de haber entrado por aquel brazo, llegaron a cierto puerto, donde los indios le pidieron estuviese algunos días para ver la tierra. Y una mañana se fue llegando tanta multitud de gente, que los puso en gran cuidado, por lo cual el capitán mandó a su gente que estuviesen todos alerta con las armas en las manos, y que ninguno disparase hasta que él lo mandase. Y viendo que toda aquella tierra se abrazaba en fuegos y humaredas, mandó subir a un marinero a la gavia del navío, para que reconociese el campo; el cual dijo que todo cuanto había a la redonda estaba lleno de gente de guerra, y mucha más que venía acudiendo por todas partes, sin muchas canoas que de río abajo y arriba acudían para coger a los navíos en medio. \n\n\n\n\n\n",
  id: 154
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 155",
  chapter: "Capítulo XIX",
  layout: "textoporpagina",
  content: "\n    \nEl capitán se puso a punto de guerra, y conociendo el peligro en que estaba por la estrechura del río, y la dificultad de no poder salir de él sin gran riesgo, habló a sus soldados, esforzándolos animosamente. Cuando en este punto dijo el marinero que estaba en vigía: &quot;Un hombre de a caballo veo, que ya corriendo tras unos indios&quot;. Dijéronle que mirase lo que decía; luego respondió, &quot;otro veo que le va siguiendo&quot;; y prosiguiendo, dijo: &quot;tres, cuatro, cinco, seis de a caballo&quot;; los cuales, según parecía, andaban escaramuceando con los indios que venían a esta junta a dar en los nuestros; y siendo asaltados repentinamente de los de tierra, comenzaron a huir, y dando la voz de como había españoles de aquella parte que los herían y mataban. Luego en un instante se deshizo toda aquella multitud, de tal manera, que por huir más a prisa dejaban por los campos arcos y flechas, con lo que vinieron los nuestros a quedar libres. El capitán Juan de Garay escribió luego una carta con un indio ladino a aquellos caballeros; los cuales, en aquel mismo tiempo, día del bienaventurado San Jerónimo, habían poblado la ciudad de Córdoba, y salieron a correr o aquella tierra. Tiene esta comarca y jurisdicción mucha cantidad de indios, y pueblos, que por no estar reducidos no se pudo entonces saber la cantidad; y así en diferentes tiempos se fueron encomendando al los pobladores. Está situada en 32 grados, poco más o menos, Este-Oeste con la ciudad de Santa Fe; distante la una de la otra 60 leguas: fueron ambas pobladas en un mismo año y día, que fue el del Señor San Jerónimo, según llevo dicho: donde, después de haber hecho un fuerte de adobes con sus cubos y torreones, en que recogió toda la gente, determinó el Gobernador salir a recorrer toda la provincia, como lo efectuó. Y tomando lengua, fue discurriendo por aquellos llanos a reconocer el Río de la Plata, donde se toparon ambos capitanes, como se ha referido en el capítulo pasado. Y vuelto a su nueva ciudad, despachó a Nuflo de Aguilar con 30 soldados a requerir le entregase la jurisdicción que tenía de aquellas tierras, por estar en el distrito de su gobierno y conquista. Y dándoles el aviso de lo demás que convenía, partieron para la ciudad de Santa Fe, donde llegados hicieron sus requerimientos y protestas a Juan de Garay y a su Cabildo, en que pasaron muchas demandas y respuestas. Y respondiendo a todo Garay, dijo, en ninguna manera haría tal, porque aquella población había sido hecha por él, en nombre de Su Majestad y de la persona que tenía la superior gobernación de aquella provincia, y a su costa y mención, y a la de los demás pobladores que allí tenía en su compañía; en la cual no había sido intruso, porque los antiguos conquistadores de aquella provincia habían sido los primeros\n\n\n\n\n\n",
  id: 155
});
index.addDoc({
  section: "Libro III",
  subtitle: "página 156",
  chapter: "Capítulo XIX",
  layout: "textoporpagina",
  content: "\n    \nprimeros descubridores de ella: por cuya razón no le podía pertenecer su jurisdicción a otro que al Gobernador del Río de la Plata. Y estando en estos debates, llegaron al puerto de aquella ciudad tres canoas de indios Guaranís, naturales de las islas de Buenos Aires, con un principal llamado Ñamandú, el que traía un pliego cerrado dirigido a Garay, a quien el cacique le entregó. Y abriéndolo, halló que el Adelantado Juan Ortiz de Zárate había entrado con su armada en el puerto de San Gabriel, que venía de Castilla, donde estaba surto con su gente a la parte de tierra firme, y que tenía necesidad de comida, y juntamente estaba apretado por los Charrúas de aquella costa, pidiéndole el socorro conveniente. Para lo cual le despachó nombramiento de Teniente General, y Justicia mayor en aquella ciudad, con las demás provisiones y cédulas reales, en que Su Majestad le hacia merced de aquel gobierno: por las cuales le incluía todas las poblaciones que otros capitanes hubiesen hecho, en doscientas leguas del Río de la Plata al Sur, hasta la gobernación del reino de Chile. Por cuya demarcación la provincia del Tucumán entraba en este distrito y jurisdicción. En virtud de lo cual, luego el capitán Juan de Garay intimó a Nuflo de Aguilar la dicha provisión, y le requirió en nombre de su Gobernador el cumplimiento de ella. El cual habiéndola oído, la obedeció, y dio su respuesta de la que a su derecho convenía, sin tratar más de este negocio: y así aquella misma noche él, y los suyos partieron para la dicha ciudad de Córdoba, a dar cuenta al Gobernador de lo que pasaba. Al mismo tiempo recibió cartas aquel Gobernador, de que le venía sucesor, enviado por Su Majestad, que era un caballero de Sevilla, llamado Gonzalo de Abreu; de cuyos sucesos, y demás acontecimientos, se tratará en otro libro.\n\n\n\n\n\n",
  id: 156
});
console.log( jQuery.type(index) );

// Builds reference data (maybe not necessary for us, to check)


var store = [{
  "section": "Paratextos",
  "subtitle": "página iii",
  "chapter": "Dedicatoria",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0001.html",
},
{
  "section": "Paratextos",
  "subtitle": "página iv",
  "chapter": "Dedicatoria",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0002.html",
},
{
  "section": "Paratextos",
  "subtitle": "página v",
  "chapter": "Prólogo",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0003.html",
},
{
  "section": "Libro I",
  "subtitle": "página 1",
  "chapter": "Capítulo I",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0005.html",
},
{
  "section": "Libro I",
  "subtitle": "página 2",
  "chapter": "Capítulo I",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0006.html",
},
{
  "section": "Libro I",
  "subtitle": "página 3",
  "chapter": "Capítulo I",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0007.html",
},
{
  "section": "Libro I",
  "subtitle": "página 4",
  "chapter": "Capítulo II",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0008.html",
},
{
  "section": "Libro I",
  "subtitle": "página 5",
  "chapter": "Capítulo II",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0009.html",
},
{
  "section": "Libro I",
  "subtitle": "página 6",
  "chapter": "Capítulo III",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0010.html",
},
{
  "section": "Libro I",
  "subtitle": "página 7",
  "chapter": "Capítulo III",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0011.html",
},
{
  "section": "Libro I",
  "subtitle": "página 8",
  "chapter": "Capítulo III",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0012.html",
},
{
  "section": "Libro I",
  "subtitle": "página 9",
  "chapter": "Capítulo III",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0013.html",
},
{
  "section": "Libro I",
  "subtitle": "página 10",
  "chapter": "Capítulo IV",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0014.html",
},
{
  "section": "Libro I",
  "subtitle": "página 11",
  "chapter": "Capítulo IV",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0015.html",
},
{
  "section": "Libro I",
  "subtitle": "página 12",
  "chapter": "Capítulo IV",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0016.html",
},
{
  "section": "Libro I",
  "subtitle": "página 13",
  "chapter": "Capítulo V",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0017.html",
},
{
  "section": "Libro I",
  "subtitle": "página 14",
  "chapter": "Capítulo V",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0018.html",
},
{
  "section": "Libro I",
  "subtitle": "página 15",
  "chapter": "Capítulo V",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0019.html",
},
{
  "section": "Libro I",
  "subtitle": "página 16",
  "chapter": "Capítulo V",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0020.html",
},
{
  "section": "Libro I",
  "subtitle": "página 17",
  "chapter": "Capítulo V",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0021.html",
},
{
  "section": "Libro I",
  "subtitle": "página 18",
  "chapter": "Capítulo V",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0022.html",
},
{
  "section": "Libro I",
  "subtitle": "página 19",
  "chapter": "Capítulo V",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0023.html",
},
{
  "section": "Libro I",
  "subtitle": "página 20",
  "chapter": "Capítulo V",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0024.html",
},
{
  "section": "Libro I",
  "subtitle": "página 21",
  "chapter": "Capítulo VI",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0025.html",
},
{
  "section": "Libro I",
  "subtitle": "página 22",
  "chapter": "Capítulo VI",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0026.html",
},
{
  "section": "Libro I",
  "subtitle": "página 23",
  "chapter": "Capítulo VI",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0027.html",
},
{
  "section": "Libro I",
  "subtitle": "página 24",
  "chapter": "Capítulo VII",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0028.html",
},
{
  "section": "Libro I",
  "subtitle": "página 25",
  "chapter": "Capítulo VII",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0029.html",
},
{
  "section": "Libro I",
  "subtitle": "página 26",
  "chapter": "Capítulo VII",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0030.html",
},
{
  "section": "Libro I",
  "subtitle": "página 27",
  "chapter": "Capítulo VII",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0031.html",
},
{
  "section": "Libro I",
  "subtitle": "página 28",
  "chapter": "Capítulo VII",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0032.html",
},
{
  "section": "Libro I",
  "subtitle": "página 29",
  "chapter": "Capítulo VIII",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0033.html",
},
{
  "section": "Libro I",
  "subtitle": "página 30",
  "chapter": "Capítulo VIII",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0034.html",
},
{
  "section": "Libro I",
  "subtitle": "página 31",
  "chapter": "Capítulo IX",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0035.html",
},
{
  "section": "Libro I",
  "subtitle": "página 32",
  "chapter": "Capítulo IX",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0036.html",
},
{
  "section": "Libro I",
  "subtitle": "página 33",
  "chapter": "Capítulo X",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0037.html",
},
{
  "section": "Libro I",
  "subtitle": "página 34",
  "chapter": "Capítulo X",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0038.html",
},
{
  "section": "Libro I",
  "subtitle": "página 35",
  "chapter": "Capítulo X",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0039.html",
},
{
  "section": "Libro I",
  "subtitle": "página 36",
  "chapter": "Capítulo XI",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0040.html",
},
{
  "section": "Libro I",
  "subtitle": "página 37",
  "chapter": "Capítulo XI",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0041.html",
},
{
  "section": "Libro I",
  "subtitle": "página 38",
  "chapter": "Capítulo XI",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0042.html",
},
{
  "section": "Libro I",
  "subtitle": "página 39",
  "chapter": "Capítulo XII",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0043.html",
},
{
  "section": "Libro I",
  "subtitle": "página 40",
  "chapter": "Capítulo XII",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0044.html",
},
{
  "section": "Libro I",
  "subtitle": "página 41",
  "chapter": "Capítulo XIII",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0045.html",
},
{
  "section": "Libro I",
  "subtitle": "página 42",
  "chapter": "Capítulo XIII",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0046.html",
},
{
  "section": "Libro I",
  "subtitle": "página 43",
  "chapter": "Capítulo XIII",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0047.html",
},
{
  "section": "Libro I",
  "subtitle": "página 44",
  "chapter": "Capítulo XIII",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0048.html",
},
{
  "section": "Libro I",
  "subtitle": "página 45",
  "chapter": "Capítulo XIV",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0049.html",
},
{
  "section": "Libro I",
  "subtitle": "página 46",
  "chapter": "Capítulo XIV",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0050.html",
},
{
  "section": "Libro I",
  "subtitle": "página 47",
  "chapter": "Capítulo XIV",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0051.html",
},
{
  "section": "Libro I",
  "subtitle": "página 48",
  "chapter": "Capítulo XV",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0052.html",
},
{
  "section": "Libro I",
  "subtitle": "página 49",
  "chapter": "Capítulo XV",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0053.html",
},
{
  "section": "Libro I",
  "subtitle": "página 50",
  "chapter": "Capítulo XV",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0054.html",
},
{
  "section": "Libro I",
  "subtitle": "página 51",
  "chapter": "Capítulo XV",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0055.html",
},
{
  "section": "Libro I",
  "subtitle": "página 52",
  "chapter": "Capítulo XVI",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0056.html",
},
{
  "section": "Libro I",
  "subtitle": "página 53",
  "chapter": "Capítulo XVI",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0057.html",
},
{
  "section": "Libro I",
  "subtitle": "página 54",
  "chapter": "Capítulo XVII",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0058.html",
},
{
  "section": "Libro I",
  "subtitle": "página 55",
  "chapter": "Capítulo XVIII",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0059.html",
},
{
  "section": "Libro I",
  "subtitle": "página 56",
  "chapter": "Capítulo XVIII",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0060.html",
},
{
  "section": "Libro I",
  "subtitle": "página 57",
  "chapter": "Capítulo XVIII",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0061.html",
},
{
  "section": "Libro II",
  "subtitle": "página 59",
  "chapter": "Capítulo I",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0063.html",
},
{
  "section": "Libro II",
  "subtitle": "página 60",
  "chapter": "Capítulo I",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0064.html",
},
{
  "section": "Libro II",
  "subtitle": "página 61",
  "chapter": "Capítulo I",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0065.html",
},
{
  "section": "Libro II",
  "subtitle": "página 62",
  "chapter": "Capítulo I",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0066.html",
},
{
  "section": "Libro II",
  "subtitle": "página 63",
  "chapter": "Capítulo II",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0067.html",
},
{
  "section": "Libro II",
  "subtitle": "página 64",
  "chapter": "Capítulo II",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0068.html",
},
{
  "section": "Libro II",
  "subtitle": "página 65",
  "chapter": "Capítulo II",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0069.html",
},
{
  "section": "Libro II",
  "subtitle": "página 66",
  "chapter": "Capítulo II",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0070.html",
},
{
  "section": "Libro II",
  "subtitle": "página 67",
  "chapter": "Capítulo III",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0071.html",
},
{
  "section": "Libro II",
  "subtitle": "página 68",
  "chapter": "Capítulo III",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0072.html",
},
{
  "section": "Libro II",
  "subtitle": "página 69",
  "chapter": "Capítulo III",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0073.html",
},
{
  "section": "Libro II",
  "subtitle": "página 70",
  "chapter": "Capítulo III",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0074.html",
},
{
  "section": "Libro II",
  "subtitle": "página 71",
  "chapter": "Capítulo IV",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0075.html",
},
{
  "section": "Libro II",
  "subtitle": "página 72",
  "chapter": "Capítulo IV",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0076.html",
},
{
  "section": "Libro II",
  "subtitle": "página 73",
  "chapter": "Capítulo IV",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0077.html",
},
{
  "section": "Libro II",
  "subtitle": "página 74",
  "chapter": "Capítulo V",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0078.html",
},
{
  "section": "Libro II",
  "subtitle": "página 75",
  "chapter": "Capítulo V",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0079.html",
},
{
  "section": "Libro II",
  "subtitle": "página 76",
  "chapter": "Capítulo VI",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0080.html",
},
{
  "section": "Libro II",
  "subtitle": "página 77",
  "chapter": "Capítulo VI",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0081.html",
},
{
  "section": "Libro II",
  "subtitle": "página 78",
  "chapter": "Capítulo VI",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0082.html",
},
{
  "section": "Libro II",
  "subtitle": "página 79",
  "chapter": "Capítulo VI",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0083.html",
},
{
  "section": "Libro II",
  "subtitle": "página 80",
  "chapter": "Capítulo VII",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0084.html",
},
{
  "section": "Libro II",
  "subtitle": "página 81",
  "chapter": "Capítulo VII",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0085.html",
},
{
  "section": "Libro II",
  "subtitle": "página 82",
  "chapter": "Capítulo VII",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0086.html",
},
{
  "section": "Libro II",
  "subtitle": "página 83",
  "chapter": "Capítulo VIII",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0087.html",
},
{
  "section": "Libro II",
  "subtitle": "página 84",
  "chapter": "Capítulo VIII",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0088.html",
},
{
  "section": "Libro II",
  "subtitle": "página 85",
  "chapter": "Capítulo VIII",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0089.html",
},
{
  "section": "Libro II",
  "subtitle": "página 86",
  "chapter": "Capítulo IX",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0090.html",
},
{
  "section": "Libro II",
  "subtitle": "página 87",
  "chapter": "Capítulo IX",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0091.html",
},
{
  "section": "Libro II",
  "subtitle": "página 88",
  "chapter": "Capítulo IX",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0092.html",
},
{
  "section": "Libro II",
  "subtitle": "página 89",
  "chapter": "Capítulo X",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0093.html",
},
{
  "section": "Libro II",
  "subtitle": "página 90",
  "chapter": "Capítulo X",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0094.html",
},
{
  "section": "Libro II",
  "subtitle": "página 91",
  "chapter": "Capítulo X",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0095.html",
},
{
  "section": "Libro II",
  "subtitle": "página 92",
  "chapter": "Capítulo XI",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0096.html",
},
{
  "section": "Libro II",
  "subtitle": "página 93",
  "chapter": "Capítulo XI",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0097.html",
},
{
  "section": "Libro II",
  "subtitle": "página 94",
  "chapter": "Capítulo XII",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0098.html",
},
{
  "section": "Libro II",
  "subtitle": "página 95",
  "chapter": "Capítulo XII",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0099.html",
},
{
  "section": "Libro II",
  "subtitle": "página 96",
  "chapter": "Capítulo XIII",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0100.html",
},
{
  "section": "Libro II",
  "subtitle": "página 97",
  "chapter": "Capítulo XIII",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0101.html",
},
{
  "section": "Libro II",
  "subtitle": "página 98",
  "chapter": "Capítulo XIII",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0102.html",
},
{
  "section": "Libro II",
  "subtitle": "página 99",
  "chapter": "Capítulo XIV",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0103.html",
},
{
  "section": "Libro II",
  "subtitle": "página 100",
  "chapter": "Capítulo XIV",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0104.html",
},
{
  "section": "Libro II",
  "subtitle": "página 101",
  "chapter": "Capítulo XIV",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0105.html",
},
{
  "section": "Libro II",
  "subtitle": "página 102",
  "chapter": "Capítulo XV",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0106.html",
},
{
  "section": "Libro II",
  "subtitle": "página 103",
  "chapter": "Capítulo XV",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0107.html",
},
{
  "section": "Libro II",
  "subtitle": "página 104",
  "chapter": "Capítulo XV",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0108.html",
},
{
  "section": "Libro II",
  "subtitle": "página 105",
  "chapter": "Capítulo XV",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0109.html",
},
{
  "section": "Libro II",
  "subtitle": "página 106",
  "chapter": "Capítulo XVI",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0110.html",
},
{
  "section": "Libro II",
  "subtitle": "página 107",
  "chapter": "Capítulo XVI",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0111.html",
},
{
  "section": "Libro III",
  "subtitle": "página 109",
  "chapter": "Capítulo I",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0113.html",
},
{
  "section": "Libro III",
  "subtitle": "página 110",
  "chapter": "Capítulo I",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0114.html",
},
{
  "section": "Libro III",
  "subtitle": "página 111",
  "chapter": "Capítulo II",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0115.html",
},
{
  "section": "Libro III",
  "subtitle": "página 112",
  "chapter": "Capítulo II",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0116.html",
},
{
  "section": "Libro III",
  "subtitle": "página 113",
  "chapter": "Capítulo III",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0117.html",
},
{
  "section": "Libro III",
  "subtitle": "página 114",
  "chapter": "Capítulo IV",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0118.html",
},
{
  "section": "Libro III",
  "subtitle": "página 115",
  "chapter": "Capítulo IV",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0119.html",
},
{
  "section": "Libro III",
  "subtitle": "página 116",
  "chapter": "Capítulo V",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0120.html",
},
{
  "section": "Libro III",
  "subtitle": "página 117",
  "chapter": "Capítulo V",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0121.html",
},
{
  "section": "Libro III",
  "subtitle": "página 118",
  "chapter": "Capítulo V",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0122.html",
},
{
  "section": "Libro III",
  "subtitle": "página 119",
  "chapter": "Capítulo V",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0123.html",
},
{
  "section": "Libro III",
  "subtitle": "página 120",
  "chapter": "Capítulo V",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0124.html",
},
{
  "section": "Libro III",
  "subtitle": "página 121",
  "chapter": "Capítulo VI",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0125.html",
},
{
  "section": "Libro III",
  "subtitle": "página 122",
  "chapter": "Capítulo VI",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0126.html",
},
{
  "section": "Libro III",
  "subtitle": "página 123",
  "chapter": "Capítulo VI",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0127.html",
},
{
  "section": "Libro III",
  "subtitle": "página 124",
  "chapter": "Capítulo VII",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0128.html",
},
{
  "section": "Libro III",
  "subtitle": "página 125",
  "chapter": "Capítulo VIII",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0129.html",
},
{
  "section": "Libro III",
  "subtitle": "página 126",
  "chapter": "Capítulo VIII",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0130.html",
},
{
  "section": "Libro III",
  "subtitle": "página 127",
  "chapter": "Capítulo VIII",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0131.html",
},
{
  "section": "Libro III",
  "subtitle": "página 128",
  "chapter": "Capítulo IX",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0132.html",
},
{
  "section": "Libro III",
  "subtitle": "página 129",
  "chapter": "Capítulo IX",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0133.html",
},
{
  "section": "Libro III",
  "subtitle": "página 130",
  "chapter": "Capítulo IX",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0134.html",
},
{
  "section": "Libro III",
  "subtitle": "página 131",
  "chapter": "Capítulo X",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0135.html",
},
{
  "section": "Libro III",
  "subtitle": "página 132",
  "chapter": "Capítulo XI",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0136.html",
},
{
  "section": "Libro III",
  "subtitle": "página 133",
  "chapter": "Capítulo XI",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0137.html",
},
{
  "section": "Libro III",
  "subtitle": "página 134",
  "chapter": "Capítulo XI",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0138.html",
},
{
  "section": "Libro III",
  "subtitle": "página 135",
  "chapter": "Capítulo XII",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0139.html",
},
{
  "section": "Libro III",
  "subtitle": "página 136",
  "chapter": "Capítulo XIII",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0140.html",
},
{
  "section": "Libro III",
  "subtitle": "página 137",
  "chapter": "Capítulo XIII",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0141.html",
},
{
  "section": "Libro III",
  "subtitle": "página 138",
  "chapter": "Capítulo XIII",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0142.html",
},
{
  "section": "Libro III",
  "subtitle": "página 139",
  "chapter": "Capítulo XIV",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0143.html",
},
{
  "section": "Libro III",
  "subtitle": "página 140",
  "chapter": "Capítulo XIV",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0144.html",
},
{
  "section": "Libro III",
  "subtitle": "página 141",
  "chapter": "Capítulo XV",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0145.html",
},
{
  "section": "Libro III",
  "subtitle": "página 142",
  "chapter": "Capítulo XV",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0146.html",
},
{
  "section": "Libro III",
  "subtitle": "página 143",
  "chapter": "Capítulo XV",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0147.html",
},
{
  "section": "Libro III",
  "subtitle": "página 144",
  "chapter": "Capítulo XVI",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0148.html",
},
{
  "section": "Libro III",
  "subtitle": "página 145",
  "chapter": "Capítulo XVI",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0149.html",
},
{
  "section": "Libro III",
  "subtitle": "página 146",
  "chapter": "Capítulo XVII",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0150.html",
},
{
  "section": "Libro III",
  "subtitle": "página 147",
  "chapter": "Capítulo XVII",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0151.html",
},
{
  "section": "Libro III",
  "subtitle": "página 148",
  "chapter": "Capítulo XVIII",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0152.html",
},
{
  "section": "Libro III",
  "subtitle": "página 149",
  "chapter": "Capítulo XVIII",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0153.html",
},
{
  "section": "Libro III",
  "subtitle": "página 150",
  "chapter": "Capítulo XVIII",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0154.html",
},
{
  "section": "Libro III",
  "subtitle": "página 151",
  "chapter": "Capítulo XVIII",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0155.html",
},
{
  "section": "Libro III",
  "subtitle": "página 152",
  "chapter": "Capítulo XIX",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0156.html",
},
{
  "section": "Libro III",
  "subtitle": "página 153",
  "chapter": "Capítulo XIX",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0157.html",
},
{
  "section": "Libro III",
  "subtitle": "página 154",
  "chapter": "Capítulo XIX",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0158.html",
},
{
  "section": "Libro III",
  "subtitle": "página 155",
  "chapter": "Capítulo XIX",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0159.html",
},
{
  "section": "Libro III",
  "subtitle": "página 156",
  "chapter": "Capítulo XIX",
  "layout": "textoporpagina",
  "link": "/argentina_manuscrita_pages/pg_0160.html",
},
]

//Query

var url = window.location.href;
if (url.lastIndexOf("?q=") > 0) {
  // get the index of the parameter, add three (to account for length)
  var stringloc = url.lastIndexOf("?q=") + 3;
  // get the substring (query) and decode
  var searchquery = decodeURIComponent(url.substr(stringloc));
}

function doSearch() {
  var resultdiv = $('#results');
  var query = $('input#search').val();

  //The search is then launched on the index built with Lunr
  var result = index.search(query);
  resultdiv.empty();
  if (result.length == 0) {
    resultdiv.append('<p class="">No se encontraron resultados.</p>');
  } else if (result.length == 1) {
    resultdiv.append('<p class="">'+result.length+' resultados</p>');
  } else {
    resultdiv.append('<p class="">'+result.length+' resultados</p>');
  }
  //Loop through, match, and add results
  for (var item in result) {
    var ref = result[item].ref;
    var searchitem = '<div class="result"><p><a href="/Textos-y-Mapas'+store[ref].link+'?q='+query+'">'+store[ref].section+' - '+store[ref].chapter+' - '+store[ref].subtitle+'</a></p></div>';
    resultdiv.append(searchitem);
  }
}

$(document).ready(function() {
  if (searchquery) {
    $('input#search').val(searchquery);
    doSearch();
  }
  $('input#search').on('keyup', doSearch);
});
