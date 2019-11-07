const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
     
  message.channel.send('Pong! :ping_pong:')
  bot.guilds.get(message.author.guild.id);
  
  let guildname = guild.name
  
  console.log(`Ping used in ${guildname} by ${message.author}`)
}

module.exports.help = {
  name: "ping"
}
