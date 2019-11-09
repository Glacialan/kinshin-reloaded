const Discord = require("discord.js");
const config = require("../config.json");
module.exports.run = async (bot, message, args) => {
  
  var member=  message.mentions.members.first();  
  const vibecheck = ['Mad Clown', 'Hella Clown']
  const exampleEmbed = new Discord.RichEmbed()

    .setColor(config.mainColor)
    .setTitle('Vibe Check:')
    .setDescription(memebr + ' is ' + )
    .setTimestamp()
  
  
  message.channel.send(exampleEmbed);
  console.log(`Vibe Check used in ${message.guild.name} #${message.channel.name} by ${message.author.tag}`)
}

module.exports.help = {
  name: "vibecheck"
}
