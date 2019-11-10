const Discord = require("discord.js");
const config = require("../config.json");
module.exports.run = async (bot, message, args) => {

    const exampleEmbed = new Discord.RichEmbed()
  
    .setColor(config.mainColor)
    .setTitle('Kinshin Help
    .addField('**ping**'.'/u200b', true)
    .setTimestamp()
    .setFooter('Created by Glacialan#2576')  
  
  message.channel.send(exampleEmbed);
  console.log(`Help used in ${message.guild.name} #${message.channel.name} by ${message.author.tag}`)

}

module.exports.help = {
  name: "help"
}
