const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  const exampleEmbed = new Discord.RichEmbed()
    .setTitle('Ping:')
    .setDescription(Math.round(bot.ping))
  
  
  message.channel.send(exampleEmbed);
}

module.exports.help = {
  name: "sexyping"
}
