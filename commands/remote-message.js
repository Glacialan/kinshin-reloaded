const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  let ownerid = 171335165476470784;
  
  if(!message.author.id === ownerid) return;
    if(!message.guild === null) return;
  
        const sayMessage = args.join(" ");
        const sayChannel = 632872731108704270;
        message.sayChannel.send(`${sayMessage}`);
        bot.channels.get(632872731108704270).send(`${sayMessage}`)
  
  
  
  
  
  
  


}

module.exports.help = {
  name: "rm"
}
