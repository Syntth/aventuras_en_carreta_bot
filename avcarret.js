//Require libraries
const TelegramBot = require('node-telegram-bot-api');

// API Token Telegram
const token = '';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

//Start bot /start
bot.onText(/\/start/, (msg) => {
    bot.sendPhoto(msg.chat.id, "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/50054535_1287984378018789_7423573593558089728_o.jpg?_nc_cat=111&_nc_oc=AQkTxsazKLe5EPBnZyMaUmLk91KKlWbM3tYs9M_NzD4T2kfF6hEtd5ZikQU4fVnNttoJKBuV8IlKtACOkD2OunGh&_nc_ht=scontent-dfw5-1.xx&oh=11fe66ce9113d7f90dab80a021261fb1&oe=5DD0D296", {caption : "Bienvenido a Aventuras en Carreta, si esta es tu primera experiencia en este tipo de aventuras hay algunas cosas que debes de saber:"})
    bot.sendMessage(msg.chat.id, "Durante toda la aventura te mostraremos diferentes comandos que son fáciles de identificar ya que comienzan con una “/”  de las cuales deberás elegir solo una para seguir avanzando en la historia, solo ten en cuenta que la historia cambiara según lo que elijas, así que piensa bien lo que escoges o caerás en una inevitable muerte.\n¡Suerte!\n\n Para iniciar el tutorial escribe /intrusos")
    //bot.sendMessage(msg.chat.id, "Para iniciar el tutorial escribe /intrusos");
})

// Info command /info
bot.onText(/\/info/, (msg) => {
    bot.sendMessage(msg.chat.id, "Bot para Telegram en Node.js por Aventuras en Carretas.\nLa finalidad de este bot es brindar la experiencia de los juegos de rol clásicos como Dungeons and Dragons, Star Wars D6 o La Llamada de Cthulhu a los usuarios de Telegram");
})

//Social media command /red
bot.onText(/\/red/, (msg) => {
    bot.sendMessage(msg.chat.id, "Recuerden visitar nuestras redes sociales:\nFacebook: Aventuras en Carreta: https://www.facebook.com/aventurasencarreta/ \n\nColaborador especial: Star Wars D6 (West End Games) [Only Spanish Users]: https://www.facebook.com/SWD6REDUX/");
})



//Start tutorial command /intrusos
bot.onText(/\/intrusos/, (msg) => {

    const chatId = msg.chat.id;

    bot.sendAudio(chatId, "music/intrusos_origins.mp3")

    bot.sendPhoto(chatId, "https://www.artcurial.com/sites/default/files/styles/840_width/public/lots-images/2017-09-30-02/2981_10544170_0.jpg?itok=2wYfsTiT", {caption : "Lo primero que vez al despertar es la gran cabeza de jabalí que cuelga sobre tu pared, un trofeo de tu padre que solo te recuerda lo malo que eres como cazador, te pones tu gran armadura plateada que te identifica como un soldado del gremio de La Rosa Llameante: protectores de la ciudad de Azimasar y sus cercanías.\n\nLos rayos del sol que se reflejan en tu ventana te indican que llegas tarde para reportarte, tomar un buen desayuno o ir corriendo al gremio para no ser reprendido seria tu primera decisión. /desayuno /corrergremio"})
    
    bot.onText(/\/desayuno/, (msg) => {
        bot.sendPhoto(chatId, "https://i.imgur.com/ijUrS4v.jpg", {caption: "Quizá ni noten que no estás en el gremio así que te dispones a devorar unos cuantos trozos de carne seca, una hogaza de pan negro remojado en agua y una manzana que compraste en el mercado un día anterior.\nCon el estomago lleno te diriges al gremio y para tu buena suerte el anciano encargado de abrir la entrada llego tarde haciendo que todos tus compañeros estén en las afueras esperándolo.\nAl final fue una buena decisión y decides entrar con todos los demás /entrargremio"})
    })

    bot.onText(/\/corrergremio/, (msg) => {
        bot.sendMessage(chatId, "Con mucho esfuerzo corres con tu gran armadura hacia la entrada del gremio solo para descubrir que aun está cerrado, los demás miembros que como tu llegaron a tiempo te indican que el anciano encargado de abrir las puertas aun no se ha presentado y que al parecer lo vieron rondando por el prostíbulo llamado “La Sombra del Muerto” la noche anterior y si es que no murió bajo los encantos de alguna joven mujer entonces lo verían llegar dentro de algunas horas más.\nTal y como dijeron tus compañeros el anciano llego después de 1 hora para abrir la entrada del gremio sin siquiera dirigirles una palabra. /entrargremio") 
    })

    bot.onText(/\/entrargremio/, (msg) => {
        bot.sendPhoto(chatId, "https://i.pinimg.com/564x/1d/e6/dd/1de6dd226cd9633120c0a9c915cb8902.jpg", {caption: "Unas grandes puertas de madera ornamentada se abren frente a ti dejando ver el interior, enormes pinturas que dejan ver entre sus grabados las grandes hazañas que los aventureros han vivido desde los inicios del gremio, un suelo de mármol blanco, candelabros de cristal colgando de cadenas de oro, diez grandes mesas de madera repartidas por la sala donde los miembros se van sentando uno a uno mirando hacia un podio justo al centro de la gran sala. /sentarse"})
    })

    bot.onText(/\/sentarse/, (msg) => {
        bot.sendPhoto(chatId, "https://micahblackburn.files.wordpress.com/2012/05/thieves-world-cover-cropped.jpg", {caption: "Tomas uno de los asientos que quedan libres para escuchar las nuevas misiones.\nUno de los soldados que porta una armadura dorada más elegante que la tuya se acerca a ti con intenciones de molestarte, recordándote que nunca serás como la leyenda que era tu padre y que no eres ni la sombra de lo que él fue, ignorar sus palabras no parece funcionar y te reta a un duelo poniendo como premio la espada que te heredo tu padre.\nAnte sus insultos y amenazas sólo te queda decidir si golpearlo para que deje de molestar o razonar con palabras para persuadirlo. /golpearimbecil /hablartranquilo"})
    })

    //Final de partida
    bot.onText(/\/hablartranquilo/, (msg) => {
        bot.sendMessage(chatId, "Hablas con el hombre y tratas de hacerle entender que la violencia es solo la solución de los cortos de mente sin embargo no fue suficiente para él, así que te golpea en el rostro rompiendo tu nariz y dejándote inconsciente. Al despertar te das cuenta de que ya no tienes tu espada y te han abandonado a las afueras del gremio perdiendo así la misión que te encomendarían. Al final todos tenían razón no eres y nunca serás ni la mitad de lo que fue tu padre.\n--- Fin de la partida. ---")
        bot.sendPhoto(chatId, "http://therpgpundit.blogspot.com/2015/06/10th-anniversary-classic-rant-gary.html", {caption: "Puedes regresar al mensaje de bienvenida o intentar nuevamente el tutorial. /start /intrusos"})
    })

    bot.onText(/\/golpearimbecil/, (msg) => {
        bot.sendPhoto(chatId, "https://dustinanddragons.files.wordpress.com/2018/02/tavern.jpg?w=870&h=700&crop=1", {caption: "Sin previo aviso te le lanzas encima y le propinas un golpe en el rostro que termina por dejarlo inconsciente y con la naríz rota lo cual provoca la risa de tus compañeros; sin embargo las risas cesan rápidamente cuando vez entrar al actual líder de La Rosa Llamente /hablarlider"})
    })

    bot.onText(/\/hablarlider/, (msg) => {
        bot.sendPhoto(chatId, "https://media.discordapp.net/attachments/455948583775109130/616462206086676480/krowen.jpg?width=372&height=473", {caption: "Líder Kraus"})
        bot.sendMessage(chatId, "Con mirada de pocos amigos el jefe Kraus se dirige a ti: - Felicidades!!! has noqueado a tu nuevo compañero de aventura, espero y no te cueste trabajo cargarlo hasta la carreta para vuestra siguiente misión --\nSin tomar un no como respuesta el líder Kraus se retira no sin antes dejarte una hoja con las indicaciones de tu nueva encomienda, descubrir el porqué de las desapariciones de un pueblo vecino.")
    })

})


