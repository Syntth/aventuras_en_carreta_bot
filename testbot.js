const Telegraf = require('telegraf')

const bot = new Telegraf('944251780:AAHa2U_tQ664Mq6cp5UmOZhV7P3KgnUk1a0')
bot.start((ctx) => ctx.reply('Welcome!'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()