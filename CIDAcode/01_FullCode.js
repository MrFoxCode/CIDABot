//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//               CIDA BOT  - MADE BY RONDNELLE (MR. FOX) 
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
/* 
This is a Personal project, using Discord.JS, made in 2020.

I also worked in another bot project before. This is an improved version
of a similar bot.

some of the functions in this code may still receive updates and improvements.

*/
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//                       CONNECT BOT STATUS
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

// IMPORT THE REQUIREMENTS
const Discord = require('discord.js');
const bot = new Discord.Client();

// SECTION THAT INITIATE THE BOT
bot.on('ready', () => {
console.log('CIDA IS ONLINE!');

//Set a Status for the Bot 
    bot.user.setPresence({
        status: 'online',
        activity: {
            name: 'SONG NAME',
            type: 'LISTENING',
            url: 'URL'
        }
    })
});
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//                     STREAMING ON LIVE ALERT
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//Get current Streamer Presence Activity
bot.on('presenceUpdate', (oldPresence, newPresence) => {
//Streamers IDs 
let foxID = 'Insert Discord profile ID here'
  
// Announcements Text Channel
let alertChannel = bot.channels.cache.get('insert ID of the text channel where message will be announced here');

    // GET THE NEW STATUS OF THE MEMBER IF THEY ARE STREAMING AND UPDATE THE PRESENCE FOR THE MEMBER IN THE CODE
    let member = newPresence.member;
    
    //STREAMING ALERT, SEND A MESSAGE IN A TEXT CHANNELS
    if (member.id === foxID && member.presence.activities.find(a => a.type === 'STREAMING')) {
        return alertChannel.send('**Default message for that streamer going on live in that moment** https://www.twitch.tv/username');   
        console.log('Mr. Fox has started streaming!');
    }

});

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ PREFIX ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
                        const prefix = "c!";                              //You can change the commands Prefix here
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ COMMANDS ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

//FUNCTION THAT WILL DETECT COMMANDS THAT STARTED WITH THE PREFIX ABOVE
bot.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    console.log(command);

    let args = message.content.split(" ").slice(1);

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//                          MASTER ROLES                               // GET SOME ROLES FROM THE SERVER THAT CONTAINS SPECIAL PERMISSIONS.
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
var majestyRole = 'past ID of Role with all Permissions here'; // Majesty
var modRole = 'past ID of Moderator Role here'; // Moderator
var royaltyRole = 'ID Extra Role with some Permissions here'; // Royalty Role 
var hackRole = 'ID Role for Tech Members here'; // Hackerman 
var managerRole = 'past ID of Role that gives Permission to some Bots in the Server here'; // Bot Manager
var kittyRole = 'Extra Role for fun'; // Kitty Role
var botRole = 'past ID of Role to Display Bots in another List'; // BOT

let mutedRole = 'Role Created in the server for'; //muted role
let logChannel = bot.channels.cache.get('ID of Channel where the events will be logged');


//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//                          POKEDEX COMMAND
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

//COMMAND SEND A MESSAGE IN THE TEXT CHAT WHERE THE COMMAND WAS EXECUTED, SHOWING INFOS ABOUT AN MEMBER TAGGED IN THE COMMAND IN A FORM OF A CARD.
if(command === 'pokedex'){
    if (!message.member.roles.cache.has(managerRole)){
        return;
    }else   
// --- this command check if the mod tagged some user to check the info
   if(message.mentions.users.size === 0) {
    return message.reply('You need to Mention someone');
  }   
  let memberINFO = message.guild.member(message.mentions.users.first());
  if (!memberINFO){
   return message.channel.send('**this member doesnt seem valid.**')
  }
//---------------------------- POKEDEX DATA ----------------------------
let pokeBall = 'https://cdn.discordapp.com/attachments/751589471669190686/751603062828826714/50e1db4684e6f697f93590950eb832f6.png' 
let fireButton = 'https://cdn.discordapp.com/attachments/751589471669190686/751615387866628186/FIREBUTTON.png'
let grassButton = 'https://cdn.discordapp.com/attachments/751589471669190686/751615390660165682/GRASSBUTTON.png'
let waterButton = 'https://cdn.discordapp.com/attachments/751589471669190686/751615394984361994/WATER_BUTTON.png'
let memberElement = 'none'
let homeLand = 'none'
let memberType = 'none'
let pokedexColor = 0xff2323

// Nick Name Member
 let memberNickName = memberINFO.nickname
 if(!memberNickName){
   memberNickName = "none"
 }
 //check when member joined server
 let memberCaught = memberINFO.joinedAt.toUTCString()
 
 var memberIcon = memberINFO.user.avatarURL();


 //GENERATE THE PROFILE OF THE MEMBER IN THE POKEDEX BASED ON THEIR DISCORD ID
 //-------------------------- FIRE ------------------------------
if(memberINFO.user.id.startsWith('3') || memberINFO.user.id.startsWith('6') || memberINFO.user.id.startsWith('7')){ 
    memberType = 'Fire'
    homeLand = 'Kanto'
    memberElement = fireButton
    pokedexColor =  0xe9873a 
  }else

//-------------------------- GRASS ------------------------------
if(memberINFO.user.id.startsWith('2') || memberINFO.user.id.startsWith('4') || memberINFO.user.id.startsWith('5')){  
    memberType = 'Grass'
    homeLand = 'Hoenn'
    memberElement = grassButton
    pokedexColor = 0x68d63f
  }else

//-------------------------- WATER -------------------------------
if(memberINFO.user.id.startsWith('1') || memberINFO.user.id.startsWith('9') || memberINFO.user.id.startsWith('8')){    
    memberType = 'Water'
    homeLand = 'Alola'
    memberElement = waterButton
    pokedexColor =  0x6f99e7 
  }
//-------------------------------------------------------------------------- 
     /// ember starts here
     /// SEND A CUSTOMIZED EMBED MESSAGE IN THE TEXT CHANNEL WHERE COMMAND WAS EXECUTED.
    let embed = new Discord.MessageEmbed()

        .setAuthor(memberINFO.user.username, pokeBall)       
   
        .setThumbnail(memberIcon)

        .setColor(pokedexColor) 
        
        .setDescription("**POKÉDEX INFORMATIONS**") 

        .addField('Name', memberINFO.user.tag, true)
        .addField('Nickname', memberNickName, true)         
        .addField('Pokedex ID', memberINFO.user.id, true)        
        .addField("Status", memberINFO.presence.status, true)
        .addField('Region', homeLand, true)        
        .addField('Current Location', memberINFO.guild.name, true)
        .addField('Caught', memberCaught, true)
        .addField('Registered', memberINFO.user.createdAt.toUTCString(), true)
        .addField('Type', memberType, true) 

        //Display the Element Button
        embed.setImage(memberElement)
        
        .setTimestamp()
        
        embed.setFooter(message.guild.name);
      
        message.channel.send({embed});
      
    } 

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//                        SERVER INFO COMMAND
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 /// SEND A CUSTOMIZED EMBED MESSAGE IN THE TEXT CHANNEL WHERE COMMAND WAS EXECUTED WITH INFOS ABOUT THE SERVER.
else if(command === 'serverinfo'){
    
    if (!message.member.roles.cache.has(managerRole)) {
        return;
    }
    var serverIcon = message.guild.iconURL();


    let embed = new Discord.MessageEmbed()

        .setAuthor(message.guild.name, serverIcon)       
   
        .setThumbnail(serverIcon)

        .setColor(0xf28c2c) 
        
        .setDescription("**SERVER INFORMATIONS**")
                
        .addField('Server Name', message.guild.name, true)
        //.addField(`Server ID`, message.guild.id, true)
        .addField('Owner', message.guild.owner.user.tag, true)        
        .addField('Region', message.guild.region, true)
        .addField('Members', `${message.guild.memberCount}`, true)
        
        .addField('Created', message.guild.createdAt.toUTCString(), true)
        
     
        .setTimestamp()
        
        .setFooter(message.guild.name);
      
        message.channel.send({embed});
      
    } 

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//                         HELP COMMAND
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 /// SEND A CUSTOMIZED EMBED MESSAGE IN THE TEXT CHANNEL WHERE COMMAND WAS EXECUTED WITH ALL COMMANDS LISTED.
else if(command === 'help'){
    if (!message.member.roles.cache.has(managerRole)) {
        return;
    }

    let embed = new Discord.MessageEmbed()

        .setAuthor(message.guild.name, message.guild.iconURL())       
   
        .setThumbnail(message.guild.iconURL())

        .setColor(0xfefefe) 
        
        .setDescription("**COMMANDS**")
                
        .addField(`c!serverinfo`, 'Shows informations about this Server.')
        .addField(`c!streamer`,   'Shows the list of Streamers in this servers.')
        .addField(`c!pokedex`,    'Shows informations about that member.')
        
        .setTimestamp()
        
        .setFooter(message.guild.name);
      
        message.channel.send({embed});
      
      } 

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//                        STREAMERS COMMAND
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 /// SEND A CUSTOMIZED EMBED MESSAGE IN THE TEXT CHANNEL WHERE COMMAND WAS EXECUTED, A LIST OF CHOSEN MEMBERS.
else if(command === 'streamer'){
    if (!message.member.roles.cache.has(managerRole)) {
        return;
    } 

    let embed = new Discord.MessageEmbed()

        .setAuthor(message.guild.name, message.guild.iconURL())       
   
        .setThumbnail('https://cdn.discordapp.com/attachments/751589471669190686/751589628535898152/new-twitchtv-logo.png')

        .setColor(0x8759d2) 
        
        .setDescription("**STREAMERS LIST**")        
        
        .addField('Mr. Fox', 'channel url')
        .addField('Mr. Fox', 'channel url')
        .addField('Mr. Fox', 'channel url')
        .addField('Mr. Fox', 'channel url')
        .addField('Mr. Fox', 'channel url')

        .setTimestamp()
        
        .setFooter(message.guild.name);
      
        message.channel.send({embed});
      
    } 


//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//                          PURGE COMMAND
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// THIS COMMAND DELETE MESSAGES ACCORDING TO NUMBER THAT THE USER REQUIRED.
// THIS FUNCTION IT'S USEFUL FOR DELETE MASSIVE SPAM IN TEXT CHANNELS.
else if (command === "purge"){
    if (!message.member.roles.cache.has(managerRole)) {
        return;
    }
    const amount = parseInt(args[0]);
    
    //check if there's any number  
    if (isNaN(amount)) {
        return message.reply(`that doesn't seem to be a valid number.`);
    }else    
    //check the amount of messages to delete
    if (amount < 1 || amount > 100){
        return message.reply('you need to input a number between 1 and 100.');
    }
    //delete messages
    message.channel.bulkDelete(amount, true).catch(err => {
        console.error(err);
        message.channel.send('there was an error trying to purge messages in this channel!');
    });
    
} 
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//                           MUTE COMMAND
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

//THIS COMMAND FORCE AND APPLY A ROLE WITH RESTRICTIONS UPON A MEMBER, RESTRICTING THEM OF SOME ACTIVITES IN THE SERVER.
else if (command === 'mute'){   
    if (!message.member.roles.cache.has(managerRole)) {
        return;
    }    
    const taggedUser = message.mentions.members.first();
   
    if (!message.mentions.users.size) {
        return message.reply('you need to tag an user in order to mute them!'); //CHECK IF MEMBER HAS TAGGED A MEMBER TO MUTE
    }else
    if(!taggedUser){
        return message.channel.send(`This user doesn't seems valid :thinking:`); 
    }else   
    if(taggedUser.id === message.author.id) return message.channel.send(`You can't mute yourself :rolling_eyes:`); //RESTRICT MODS OF USING COMMANDS ON THEMSELVES.
    else 
    //check if member is a mod or have any other special role
    if(taggedUser.roles.cache.has(majestyRole) || taggedUser.roles.cache.has(modRole) 
    || taggedUser.roles.cache.has(hackRole) || taggedUser.roles.cache.has(kittyRole)
    || taggedUser.roles.cache.has(botRole) || taggedUser.roles.cache.has(royaltyRole)){    
        return message.channel.send(`This user can't be muted. too powerful! :hushed:`);
    }else
    if(taggedUser.roles.cache.has(mutedRole)){
        return message.channel.send('This user is already Muted :rolling_eyes:'); //CHECK IF THE MEMBER IS ALREADY MUTED WITH THIS ROLE
    }else{             
        taggedUser.roles.add(mutedRole).then
        (message.channel.send(`${taggedUser} has no voice now! :wink:`))
        .then(logChannel.send(`${message.member} just muted ${taggedUser}!`)) //MUTE MEMBER AFTER ALL THE CHECKS.       
        
    }  
     
}
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//                          UNMUTE COMMAND
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// UNDO THE MUTE FUNCTION, REMOVING THE ROLE THAT RESTRICTS THE MEMBER OF DOING SOME ACTIVITIES.

else if (command === 'unmute'){   
    if (!message.member.roles.cache.has(managerRole)) {
        return;
    }    
    const taggedUser = message.mentions.members.first();   
   
    if (!message.mentions.users.size) {
        return message.reply('you need to tag an user in order to unmute them!');
    }else
    if(!taggedUser){
        return message.channel.send(`This user doesn't seems valid :thinking:`);
    }else   
    if(taggedUser.id === message.author.id) return message.channel.send(`You are not muted! :rolling_eyes:`);
    else 
    //check if member is a mod
    if(taggedUser.roles.cache.has(majestyRole) || taggedUser.roles.cache.has(modRole) 
    || taggedUser.roles.cache.has(hackRole) || taggedUser.roles.cache.has(kittyRole)
    || taggedUser.roles.cache.has(botRole) || taggedUser.roles.cache.has(royaltyRole)){    
        return message.channel.send('This user is too powerful! and will never be muted. :hushed:');
    }else
    if(!taggedUser.roles.cache.has(mutedRole)){
        return message.channel.send('This user is not muted :rolling_eyes:');
    }else{             
        taggedUser.roles.remove(mutedRole).then
        (message.channel.send(`${taggedUser} has voice again! :wink:`))
        .then(logChannel.send(`${message.member} unmuted ${taggedUser}!`)) 
    } 
     
}
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//                          KICK COMMAND
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// REMOVE THE MEMBER FROM THE SERVER.
else if (command === 'kick'){   
    if (!message.member.roles.cache.has(managerRole)) {
        return;
    }    
    const taggedUser = message.mentions.members.first();
    
    let reason = args.slice(1).join(' '); //reason why member is being kicked
   
    if (!message.mentions.users.size) {
        return message.reply('you need to tag an user in order to kick them!');
    }else
    if(!taggedUser){
        return message.channel.send(`This user doesn't seems valid :thinking:`);
    }else   
    if(taggedUser.id === message.author.id) return message.channel.send(`You cannot kick yourself! :rolling_eyes:`);
    else 
    //check if member is a mod
    if(taggedUser.roles.cache.has(majestyRole) || taggedUser.roles.cache.has(modRole) 
    || taggedUser.roles.cache.has(hackRole) || taggedUser.roles.cache.has(kittyRole)
    || taggedUser.roles.cache.has(botRole) || taggedUser.roles.cache.has(royaltyRole)){    
        return message.channel.send(`I can't kick this user! too powerful! :hushed:`);
    }else{             
        taggedUser.kick(reason).then
        (message.channel.send(`kicked ${taggedUser} is now checking the outside! :wink:`))
        .then(logChannel.send(`${message.member} kicked ${taggedUser} from the server! \n **REASON:** ${reason}`)) 
    }  
     
}
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//                          BAN COMMAND
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

//BAN THE MEMBER FROM THE SERVER, AND RESTRICT THEM TO JOIN BACK BY ANY CHANGE, ADDING THEM INTO A BLACKLIST.
else if (command === 'ban'){   
    if (!message.member.roles.cache.has(managerRole)) {
        return;
    }    
    const taggedUser = message.mentions.members.first();   
    
    // resquest the reason why the member is being banned from the server. 
    let reason = args.slice(1).join(' '); //reason why member is being banned
   
    if (!message.mentions.users.size) {
        return message.reply('you need to tag an user in order to ban them!');
    }else
    if(!taggedUser){
        return message.channel.send(`This user doesn't seems valid :thinking:`);
    }else   
    if(taggedUser.id === message.author.id) return message.channel.send(`You cannot ban yourself! :rolling_eyes:`);
    else 
    //check if member is a mod
    if(taggedUser.roles.cache.has(majestyRole) || taggedUser.roles.cache.has(modRole) 
    || taggedUser.roles.cache.has(hackRole) || taggedUser.roles.cache.has(kittyRole)
    || taggedUser.roles.cache.has(botRole) || taggedUser.roles.cache.has(royaltyRole)){    
        return message.channel.send(`I can't ban this user! too powerful! :hushed:`);
    }else{             
        taggedUser.ban(reason).then
        (message.channel.send(`${taggedUser} was banned and will no longer return! :wink:`))
        .then(logChannel.send(`${message.member} banned ${taggedUser} from the server! \n **REASON:** ${reason}`)) 
    }  
     
}
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//                          PING COMMAND
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// Ping command tests the Latency (ms) between The user and the Discord Server.
else if (command === 'ping') {  
    if (!message.member.roles.cache.has(managerRole)) {
        return;
    }     
    message.channel.send(`Pong! \`${Date.now() - message.createdTimestamp} ms\``); 
}
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//                          MATH COMMAND
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

//SIMPLE FUNCTION TO TEST MESSAGES AND CALCULATION
else if(command === 'add'){  
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p+c);   
    return message.channel.send(total + ' :thinking:');  
    }

else if(command === 'sub'){     
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p-c);
    return message.channel.send(total + ' :thinking:');
    }

else if(command === 'multiply'){      
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p*c);
    return message.channel.send(total + ' :thinking:');
    }

else if(command === 'divide'){      
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p/c);
    return message.channel.send(total + ' :thinking:');
    }

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//                          TEST COMMAND
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬


/*
 This is a Dedicated Area to Test New Commands.
*/


});
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
bot.login("TOKEN"); //this Token is the access key to activate the Bot.