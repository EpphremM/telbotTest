import { Telegraf } from "telegraf"; // Ensure you're using the correct import statement

const TOKEN = "7578510001:AAEAmMM6VeOEmCXZkr8k5T_BOD-2Wwih1zM"; // Replace with your actual bot token
const bot = new Telegraf(TOKEN);

bot.start((ctx) => ctx.reply("Welcome, Ephrem"));

bot.launch().then(() => {
    console.log("Bot is up and running!");
}).catch(err => {
    console.error("Error launching the bot:", err);
});
