const TelegramBot = require('node-telegram-bot-api');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const token = process.env.TELEGRAM_BOT_TOKEN;

// Create a bot instance
const bot = new TelegramBot(token, { polling: true });

// Handle the /start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const welcomeMessage = "Welcome to the Wordle game! Are you ready to play? \n Click the \*\*Play Wordle\*\* button to start playing!";
  
  // Create an inline keyboard with a button
  const keyboard = {
    inline_keyboard: [
      [{ text: "Start Playing", url: "https://wordle-game-orcin.vercel.app/" }]
    ]
  };

  // Send the welcome message with the inline keyboard
  bot.sendMessage(chatId, welcomeMessage);
//   bot.sendMessage(chatId, welcomeMessage, {
//     reply_markup: JSON.stringify(keyboard)
//   });
});
// Start the bot
console.log('Bot is running...');