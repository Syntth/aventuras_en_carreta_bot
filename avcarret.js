//Require libraries
const TelegramBot = require('node-telegram-bot-api');

// API Token Telegram
const token = '944251780:AAHa2U_tQ664Mq6cp5UmOZhV7P3KgnUk1a0';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

//Start bot
bot.onText(/\/start/, (msg) => {

    bot.sendPhoto(msg.chat.id, "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/50054535_1287984378018789_7423573593558089728_o.jpg?_nc_cat=111&_nc_oc=AQkTxsazKLe5EPBnZyMaUmLk91KKlWbM3tYs9M_NzD4T2kfF6hEtd5ZikQU4fVnNttoJKBuV8IlKtACOkD2OunGh&_nc_ht=scontent-dfw5-1.xx&oh=11fe66ce9113d7f90dab80a021261fb1&oe=5DD0D296", {caption : "Bienvenido a Aventuras en Carreta, si esta es tu primera experiencia en este tipo de aventuras hay algunas cosas que debes de saber:"});
    
    bot.sendMessage(msg.chat.id, "Durante toda la aventura te mostraremos diferentes opciones que son fáciles de identificar ya que comienzan con una “/”  de las cuales deberás elegir solo una para seguir avanzando, solo ten en cuenta que la historia cambiara según lo que elijas, así que piensa bien lo que escoges o caerás en una inevitable muerte. \n¡Suerte!");
});

bot.onText(/\/info/, (msg) => {
    bot.sendMessage(msg.chat.id, "Bot para telegram en nodejs por Aventuras en Carretas. \n La finalidad de este bot es brindar la experiencia de los juegos de rol clásicos como Dungeons and Dragons, Star Wars D6 o La Llamada de Cthulhu a los usuarios de Telegram");
})

bot.onText(/\/red/, (msg) => {
    bot.sendMessage(msg.chat.id, "Recuerden visitar nuestras redes sociales:\nFacebook: Aventuras en Carreta: https://www.facebook.com/aventurasencarreta/ \n\nColaborador especial: Star Wars D6 (West End Games) [Only Spanish Users]: https://www.facebook.com/SWD6REDUX/");
})



// // Matches "/echo [whatever]"
// bot.onText(/\/echo (.+)/, (msg, match) => {
//     // 'msg' is the received Message from Telegram
//     // 'match' is the result of executing the regexp above on the text content
//     // of the message
  
//     const chatId = msg.chat.id;
//     const resp = match[1]; // the captured "whatever"
  
//     // send back the matched "whatever" to the chat
//     bot.sendMessage(chatId, resp);
//   });
  
//   // Listen for any kind of message. There are different kinds of
//   // messages.
//   bot.on('message', (msg) => {
//     const chatId = msg.chat.id;
  
//     // send a message to the chat acknowledging receipt of their message
//     bot.sendMessage(chatId, 'Received your message');
//   });