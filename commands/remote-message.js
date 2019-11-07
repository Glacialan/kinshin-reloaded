const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  let ownerid = 171335165476470784;
  
  if(!message.author.id === ownerid) return;
    if(!message.guild === null) return;
  
        let target = args.slice(0).join(' ');
        
  
        message.target.send(`${message}`);
  
  
  
  
  
  
  


}

module.exports.help = {
  name: "rm"
}
