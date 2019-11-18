const Discord = require("discord.js");
const config = require("../config.json");
module.exports.run = async (bot, message, args) => {

    const exampleEmbed = new Discord.RichEmbed()
  
    .setColor(config.mainColor)
    .setTitle('🌺 Kinshin Help')
    .addField('**userinfo**', 'Tells some basic information about the user. *Still a w.i.p.*')
    .addField('**serverinfo**', 'Tells some basic information about the server.')
    .addField('**ping**','Shows the bot\'s response time.')
    .addField('**vibecheck**', 'Checks some vibes.')
    .addField('**decide**', 'Decides Yes or No.')
    .setTimestamp()
    .setFooter('Created by Glacialan#2576')  
  
  message.channel.send(exampleEmbed);
  console.log(`Help used in ${message.guild.name} #${message.channel.name} by ${message.author.tag}`)

}

module.exports.help = {
  name: "help"
}
