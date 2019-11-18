const Discord = require("discord.js");
const config = require("../config.json");
module.exports.run = async (bot, message, args) => {
  
  var member =  message.mentions.members.first();  
  var author = message.author
  const exampleEmbed = new Discord.RichEmbed()

    .setColor(config.mainColor)
    .setTitle('📄 ' + author.tag + '\'s info')
    .setDescription('null')
    .addField('> Roles:', member.roles ? member.roles.map(r => `${r}`).join(' | ') : "", true)
    .setTimestamp()
  
  if(!member) return message.channel.send('> Please mention a user.');   
  if(member);
    message.channel.send(exampleEmbed);
    console.log(`User Info used in ${message.guild.name} #${message.channel.name} by ${message.author.tag}`)

}

module.exports.help = {
  name: "userinfo"
}
