const Discord = require("discord.js");
const config = require("../config.json");
module.exports.run = async (bot, message, args) => {
  const exampleEmbed = new Discord.RichEmbed()
     
    .setColor(config.mainColor)
    .setTitle('Kinshin Info')
    .setTimestamp()
    .setThumbnail(bot.user.avatarURL)
    .addField('Im a rad ass bot', 'Made by: Glacialan#2576')   
  
  
  message.channel.send(exampleEmbed);
  console.log(`Info used in ${message.guild.name} #${message.channel.name} by ${message.author.tag}`)    
}

module.exports.help = {
  name: "info"
}
