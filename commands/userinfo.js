const Discord = require("discord.js");
const config = require("../config.json");
module.exports.run = async (bot, message, args) => {
  
  //.format("dddd, MMMM Do YYYY, HH:mm")
  
  var member =  message.mentions.members.first();  
  var author = message.author
  
  if(!member) return message.channel.send('> Please mention a user.');   
  
  const exampleEmbed = new Discord.RichEmbed()

    .setColor(config.mainColor)
    .setTitle('📄 User Info:')
    .setDescription(member)
  
    
    .setTimestamp()
  

  if(member);
    

   
    message.channel.send(exampleEmbed);
    console.log(`User Info used in ${message.guild.name} #${message.channel.name} by ${message.author.tag}`)

}

module.exports.help = {
  name: "userinfo"
}
