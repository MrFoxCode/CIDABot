

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//                        SERVER INFO COMMAND
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 /// SEND A CUSTOMIZED EMBED MESSAGE IN THE TEXT CHANNEL WHERE COMMAND WAS EXECUTED WITH INFOS ABOUT THE SERVER.
 if(command === 'serverinfo'){
    
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

//-----------------------------------------------------------------------------------------    