const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
})

//message no longer works so use messageCreate
client.on('messageCreate', (msg) => {
    console.log(msg.content);
    //if(msg.content === "ping"){
    //    msg.reply("pong!!!");
    //}
})

client.login("TOKEN");