const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log("Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const fs = require('fs')
const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
const client = new Discord.Client();
bot.commands = new Discord.Collection();



fs.readdir('./commands/', (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  
  if(jsfile.length <= 0){
    console.log("Couldn't find commands")
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
  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(command.slice(prefix.length));
  if (!message.content.startsWith(prefix)) return;
  if(commandfile) commandfile.run(bot,message,args);
  var author = message.author;
})

fs.readdir('./events/', (err, files) => { // We use the method readdir to read what is in the events folder
	if (err) return console.error(err); // If there is an error during the process to read all contents of the ./events folder, throw an error in the console
	files.forEach(file => {
		const eventFunction = require(`./events/${file}`); // Here we require the event file of the events folder
		if (eventFunction.disabled) return; // Check if the eventFunction is disabled. If yes return without any error

		const event = eventFunction.event || file.split('.')[0]; // Get the exact name of the event from the eventFunction variable. If it's not given, the code just uses the name of the file as name of the event
		const emitter = (typeof eventFunction.emitter === 'string' ? client[eventFunction.emitter] : eventFunction.emitter) || client; // Here we define our emitter. This is in our case the client (the bot)
		const once = eventFunction.once; // A simple variable which returns if the event should run once

		// Try catch block to throw an error if the code in try{} doesn't work
		try {
			emitter[once ? 'once' : 'on'](event, (...args) => eventFunction.run(...args)); // Run the event using the above defined emitter (client)
		} catch (error) {
			console.error(error.stack); // If there is an error, console log the error stack message
		}
	});
});


bot.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  bot.user.setActivity(`Serving ${client.guilds.size} servers`);
});


bot.on("ready", function(){
    console.log(`the client becomes ready to start`);
	console.log(`I am ready! Logged in as ${client.user.tag}!`);
	console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 

  	bot.user.setActivity("the upright organ");
	bot.generateInvite(['SEND_MESSAGES', 'MANAGE_GUILD', 'MENTION_EVERYONE'])
	.then(link => {
		console.log(`Generated bot invite link: ${link}`);
		inviteLink = link;
	});
});


bot.login(config.token);
