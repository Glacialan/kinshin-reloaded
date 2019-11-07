const Discord = require("discord.js");
const config = require("../config.json");
module.exports.run = async (bot, message, args) => {
  
  var rping = getRandomInt(0, 20);
  
  const exampleEmbed = new Discord.RichEmbed()
    
  
  
  
  
    .setColor(config.mainColor)
    .setTitle('Pong! :ping_pong:')
    .setDescription('> Ping: ' + Math.random(1500))
    .setTimestamp()
  
  message.channel.send(exampleEmbed);
  console.log(`Ping used in ${message.guild.name} #${message.channel.name} by ${message.author.tag}`)
}

module.exports.help = {
  name: "ping"
}
