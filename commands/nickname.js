const Discord = require("discord.js");
const config = require("../config.json");
module.exports.run = async (bot, message, args) => {

  
  

  console.log(`Nickname used in ${message.guild.name} #${message.channel.name} by ${message.author.tag}`)
}

module.exports.help = {
  name: "setmynickname"
}


