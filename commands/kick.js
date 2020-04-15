const Discord = require("discord.js");
const config = require("../config.json");
module.exports.run = async (bot, message, args) => {
  
  var member=  message.mentions.members.first();  
  const exampleEmbed = new Discord.RichEmbed()
  
  
  if() return message.channel.send('> Please mention a user.');   
  if(member);
    member.ban()
    

}

module.exports.help = {
  name: "ban"
}