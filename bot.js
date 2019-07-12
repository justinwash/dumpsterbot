const Discord = require('discord.js');
const client = new Discord.Client();

// Bot Start
client.on('ready', () => {
  console.log('I am ready!');
});

client.login(process.env.BOT_TOKEN);
