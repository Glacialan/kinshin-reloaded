const Discord = require("discord.js");
const config = require("../config.json");
module.exports.run = async (bot, message, args) => {
  
  //.format("dddd, MMMM Do YYYY, HH:mm")
  function checkDays(date) {
      let now = new Date();
      let diff = now.getTime() - date.getTime();
      let days = Math.floor(diff / 86400000);
      return days + (days == 1 ? " day" : " days") + " ago";
  };
  
  let region = {
      "brazil": ":flag_br: Brazil",
      "eu-central": ":flag_eu: Central Europe",
      "singapore": ":flag_sg: Singapore",
      "us-central": ":flag_us: U.S. Central",
      "sydney": ":flag_au: Sydney",
      "us-east": ":flag_us: U.S. East",
      "us-south": ":flag_us: U.S. South",
      "us-west": ":flag_us: U.S. West",
      "eu-west": ":flag_eu: Western Europe",
      "vip-us-east": ":flag_us: VIP U.S. East",
      "london": ":flag_gb: London",
      "amsterdam": ":flag_nl: Amsterdam",
      "hongkong": ":flag_hk: Hong Kong",
      "russia": ":flag_ru: Russia",
      "southafrica": ":flag_za:  South Africa"
  };  
  
  let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"]; 
  var author = message.author
  
  
  const exampleEmbed = new Discord.RichEmbed()

    .setColor(config.mainColor)
    .setTitle(message.guild.name)
    .addField("Owner:", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
    
    .addField("Region:", region[message.guild.region], true)
    .addField("Verification Level:", verifLevels[message.guild.verificationLevel], true)
    .addField("Amount of Roles:", message.guild.roles.size, true)
    .addField("Channels", message.guild.channels.size, true)
    .addField("Total | Humans | Bots", `${message.guild.members.size} | ${message.guild.members.filter(member => !member.user.bot).size} | ${message.guild.members.filter(member => member.user.bot).size}`, true).setThumbnail(message.guild.iconURL)
    .setTimestamp()
  

    message.channel.send(exampleEmbed);
    console.log(`Server Info used in ${message.guild.name} #${message.channel.name} by ${message.author.tag}`)

}

module.exports.help = {
  name: "serverinfo"
}
