const Discord = require("discord.js");
const config = require("../config.json");
module.exports.run = async (bot, message, args) => {
  
  
  const options = ["Sexy Time", ]
  const title = options[Math.floor(Math.random()*options.length)];
  var member =  message.mentions.members.first();  
  var author = message.author
  const exampleEmbed = new Discord.RichEmbed()

    .setColor(config.mainColor)
    .setTitle('😏 Sexy Time')
    .setDescription(member + ' was impregnated by ' + author)
    .setFooter('Why is this a thing...')
    .setTimestamp()
  
  if(!member) return message.channel.send('> Please mention a user.');   
  if(member);
    message.channel.send(exampleEmbed);
    console.log(`Impregnate Check used in ${message.guild.name} #${message.channel.name} by ${message.author.tag}`)

}

module.exports.help = {
  name: "impregnate"
}
