const fs = require('fs')
const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
const client = new Discord.Client();
bot.commands = new Discord.Collection();

//Only fiil this with id's who are bot banned
const blacklist = [""]; 

fs.readdir('./commands/', (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  
  if(jsfile.length <= 0){
    console.log("Couldn't find commands! Check ./commands/")
    return;
  }
  
  setTimeout(function(){ 
    console.log("Beginning startup"); 
  }, 0);
  
  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`)
    console.log(`${f} loaded`);
    bot.commands.set(props.help.name, props);
  });

    setTimeout(function(){ 
      console.log("I should be up and running!"); 
    }, 1000)
});

bot.on("message", async message => {

  if (blacklist.includes(message.author.id)) return;

  let prefix = config.prefix

  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(command.slice(prefix.length));

  if (!message.content.startsWith(prefix)) return;

  if(commandfile) commandfile.run(bot,message,args);
  var author = message.author;
})

bot.on("ready", function(){
	console.log(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`); 
  	bot.user.setActivity(`${bot.guilds.size} Guilds | k.help`, { type: 'WATCHING' });
	bot.generateInvite(['SEND_MESSAGES', 'MANAGE_GUILD', 'MENTION_EVERYONE'])
	.then(link => {
		console.log(`Generated bot invite link: ${link}`);
	});
});


bot.login(process.env.TOKEN);
