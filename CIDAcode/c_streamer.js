
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//                        STREAMERS COMMAND
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 /// SEND A CUSTOMIZED EMBED MESSAGE IN THE TEXT CHANNEL WHERE COMMAND WAS EXECUTED, A LIST OF CHOSEN MEMBERS.
 if(command === 'streamer'){
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
//--------------------------------------------------------------------