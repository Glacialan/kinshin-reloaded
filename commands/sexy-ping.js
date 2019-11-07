const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  const exampleEmbed = new Discord.RichEmbed()
    
    .setColor('#0099ff')
    .setTitle('Pong! :ping_pong:')
    .setDescription('> Ping: ' + Math.round(bot.ping))
  
  
  message.channel.send(exampleEmbed);
}

module.exports.help = {
  name: "sexyping"
}
