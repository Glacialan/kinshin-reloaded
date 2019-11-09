const Discord = require("discord.js");
const config = require("../config.json");
module.exports.run = async (bot, message, args) => {
    
  if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('I don\'t have permission to change your nickname!');
    message.member.setNickname(message.content.replace());
  
  
  const taggedUser = message.mentions.users.first();
  
  
  
  const exampleEmbed = new Discord.RichEmbed()
  
    .setColor(config.mainColor)
    .setTitle('Pong! :ping_pong:')
    .addField('> **Ping: **' + Math.round(bot.ping), '\u200b', true)
    .setTimestamp()
    .setFooter('Probably accurate...')  
  
  message.channel.send(exampleEmbed);
  console.log(`Nickname used in ${message.guild.name} #${message.channel.name} by ${message.author.tag}`)
}

module.exports.help = {
  name: "nickname"
}


