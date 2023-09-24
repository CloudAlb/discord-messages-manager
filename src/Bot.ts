// https://sabe.io/tutorials/how-to-build-discord-bot-typescript

import { Client } from "discord.js";

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

console.log(client);
