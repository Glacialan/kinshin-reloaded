const Discord = require("discord.js");
const config = require("../config.json");
module.exports.run = async (bot, message, args) => {
   if (message.author.hasPermission('MANAGE_NICKNAMES'))
      message.member.setNickname(message.content.replace('k.setmynickname ', ''))
      let newnick = message.content.replace('k.setmynickname ', '');
      message.channel.send('> I updated changed your nickanme to ' + newnick)
  
  
  
  
  

  console.log(`Nickname used in ${message.guild.name} #${message.channel.name} by ${message.author.tag}`)
}

module.exports.help = {
  name: "setmynickname"
}


