const Discord = require("discord.js");
const config = require("../config.json");
module.exports.run = async (bot, message, args) => {
    
    var m = message;
    var min = config.pingMin; 
    var max = config.pingMax;  
    var random = Math.random() * (+max - +min) + +min; 
    var randomnumber = (random).toFixed();
  
  const exampleEmbed = new Discord.RichEmbed()
  
    .setColor(config.mainColor)
    .setTitle('Pong! :ping_pong:')
    .addField('Ping: ' + Math.round(bot.ping), '\u200b', true)
    .setTimestamp()
    .setFooter('Probably accurate...')  
  
  message.channel.send(exampleEmbed);
  console.log(`Ping used in ${message.guild.name} #${message.channel.name} by ${message.author.tag}`)
}

module.exports.help = {
  name: "ping"
}
