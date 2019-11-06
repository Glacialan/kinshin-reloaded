const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
     
  message.channel.send('help! :black_heart:' + message.author)
}

module.exports.help = {
  name: "help"
}
