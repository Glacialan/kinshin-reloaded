const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
     
  
  let guildname = message;
  
  console.log(`Help used in ${message.guild.name} #${message.channel.name} by ${message.author.tag}`)
  
  message.channel.send('help! :black_heart:' + message.author)
}

module.exports.help = {
  name: "help"
}
