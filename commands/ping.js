const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
     
  const exampleEmbed = new Discord.RichEmbed()
    
    .setColor('#0099ff')
    .setTitle('Pong! :ping_pong:')
    .setDescription('> Ping: ' + Math.round(bot.ping))
  
  
  message.channel.send(exampleEmbed);
  
  console.log(`Ping used in ${message.guild.name} #${message.channel.name} by ${message.author.tag}`)
}

module.exports.help = {
  name: "ping"
}
