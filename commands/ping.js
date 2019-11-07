const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
     
  message.channel.send('You are a whore: ' + Math.round(bot.ping))
  
  let guildname = message;
  
  console.log(`Ping used in ${message.guild.name} #${message.channel.name} by ${message.author.tag}`)
}

module.exports.help = {
  name: "ping"
}
