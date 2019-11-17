const Discord = require("discord.js");
const config = require("../config.json");
module.exports.run = async (bot, message, args) => {
  
  const decision = ["Yes", "No"]
  const decided = decision[Math.floor(Math.random()*decision.length)];
  const exampleEmbed = new Discord.RichEmbed()

    .setColor(config.mainColor)
    .setTitle('Your Answer is:')
    .setDescription(decided)
  
  
  
  message.channel.send(exampleEmbed);
  console.log(`Decide Check used in ${message.guild.name} #${message.channel.name} by ${message.author.tag}`)

}

module.exports.help = {
  name: "decide"
}
