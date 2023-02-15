const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '5643604088:AAGD17t3OJBAUm3DDldg6KgTdJIVNmDU9pk';
const webAppUrl = 'https://valeronski-tg-shop.netlify.app/'

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === '/start') {
        await bot.sendMessage(chatId,'The button Fill the form will be appeared', {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Make an order', web_app: {url: webAppUrl}}]
                ]

            }
        })
    }

});