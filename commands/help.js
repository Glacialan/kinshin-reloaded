const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
     
  
  let guildname = message;
  
  console.log(`Help used in ${message.guild.name} #${message.channel.name} by ${message.author.tag}`)
  
  message.channel.send('Yeah, sure... I bet you want help.)
}

module.exports.help = {
  name: "help"
}
