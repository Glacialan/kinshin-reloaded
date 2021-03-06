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
  var member =  message.mentions.members.first();  
  var author = message.author
  
  if(!member) return message.channel.send('> Please mention a user.');   
  
  const exampleEmbed = new Discord.RichEmbed()

    .setColor(config.mainColor)
    .setTitle('📄 User Info:')
    .setDescription('Display Name: ' + member)
    .addField('Account Age:', `${member.user.createdAt.toUTCString().substr(0, 16)} (${checkDays(member.user.createdAt)})`)
    .addField('Join Date:', 'undefined')
    .addField('Region:', `${member.user.region}`)
    .addField('Roles:', member.roles ? member.roles.map(r => `${r}`).join(' | ') : "", true)
    .setThumbnail(member.avatarURL)
    .setTimestamp()
  
  if(member);
    message.channel.send(exampleEmbed);
    console.log(`User Info used in ${message.guild.name} #${message.channel.name} by ${message.author.tag}`)

}

module.exports.help = {
  name: "userinfo"
}
