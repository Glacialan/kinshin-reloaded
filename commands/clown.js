const Discord = require("discord.js");
const config = require("../config.json");
module.exports.run = async (bot, message, args) => {
  var member = message.mentions.members.first();

  message.channel.send(member + )
 
  
  
  
  console.log(`Clown used in ${message.guild.name} #${message.channel.name} by ${message.author.tag}`)
}

module.exports.help = {
  name: "clown"
}
