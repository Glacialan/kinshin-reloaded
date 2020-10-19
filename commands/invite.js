const Discord = require("discord.js");
const config = require("../config.json");
module.exports.run = async (bot, message, args) => {
  const exampleEmbed = new Discord.RichEmbed()
     
    .setColor(config.mainColor)
    .setTitle("Invite Kinshin")
    .addField("\u200b", "Add Kinshin to your server! [Click here](https://discordapp.com/oauth2/authorize?client_id=513587870704074752&scope=bot&permissions=8)", true)
    .addField("\u200b", "Kinshin's bot page! [Click here](https://top.gg/bot/513587870704074752)")
    .setTimestamp()
    .setThumbnail(bot.user.avatarURL)
    .addBlankField()
    
  message.channel.send(exampleEmbed);
  console.log(`Invite used in ${message.guild.name} #${message.channel.name} by ${message.author.tag}`)  

//Generate invite link in console
bot.generateInvite(['ADMINISTRATOR'])
.then(link => {
	console.log(`Invite link for quick grab: ${link}`);
});


}

module.exports.help = {
  name: "invite"
}
