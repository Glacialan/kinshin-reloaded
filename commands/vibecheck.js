const Discord = require("discord.js");
const config = require("../config.json");
module.exports.run = async (bot, message, args) => {
  
  var member=  message.mentions.members.first();  
  const options = ['Mad Clown', 'Hella Clown', 'Mad Cute', 'Hella Cute', 'Mad Soft', 'Hella Soft', 'Mad Cursed', 'Hella Cursed', 'Mad Gremlin', 'Hella Gremlin', 'Mad Fake', "Hella Fake"]
  const vibecheck = options[Math.floor(Math.random()*options.length)];
  const exampleEmbed = new Discord.RichEmbed()

    .setColor(config.mainColor)
    .setTitle(':clown: Vibe Check:')
    .setDescription(member + ' is ' + vibecheck)
    .setTimestamp()
  
  if(!member) return message.channel.send('> Please mention a user.');   
    
  if(member);
    message.channel.send(exampleEmbed);
    console.log(`Vibe Check used in ${message.guild.name} #${message.channel.name} by ${message.author.tag}`)

}

module.exports.help = {
  name: "vibecheck"
}
