const Discord = require("discord.js");
const config = require("../config.json");
module.exports.run = async (bot, message, args) => {
    
  var author = message.author
 
  if(!author.id === config.ownerID) return;
      
  console.log(bot.guilds.name)
  
}

module.exports.help = {
  name: "serverlist"
}
