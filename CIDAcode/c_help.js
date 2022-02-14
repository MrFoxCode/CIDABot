
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//                         HELP COMMAND
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 /// SEND A CUSTOMIZED EMBED MESSAGE IN THE TEXT CHANNEL WHERE COMMAND WAS EXECUTED WITH ALL COMMANDS LISTED.
 if(command === 'help'){
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
///---------------------------------------------------------------------       
