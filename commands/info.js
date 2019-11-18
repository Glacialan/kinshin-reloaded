const Discord = require("discord.js");
const config = require("../config.json");
module.exports.run = async (bot, message, args) => {
  const exampleEmbed = new Discord.RichEmbed()
     
    .setColor(config.mainColor)
    .setTitle('Kinshin Info')
    .setTimestamp()
    .setThumbnail(bot.user.avatarURL)
    .addField(`In ${bot.guilds.size} Servers!`, '\u200b', true)
    .addField(`Serving ${bot.users.size} Users!`, '\u200b', true)
    .addField('\u200b', `${bot.guilds.channels.size}`, true)
    .addField("\u200b", "View My Discord Bot Page [Here](https://top.gg/bot/513587870704074752)")
    .addBlankField()
    
  
  message.channel.send(exampleEmbed);
  console.log(`Info used in ${message.guild.name} #${message.channel.name} by ${message.author.tag}`)    
}

module.exports.help = {
  name: "info"
}
