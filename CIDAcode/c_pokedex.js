
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

//---------------------------------------------------------------------------------------------