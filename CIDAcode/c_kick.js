
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//                          KICK COMMAND
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// REMOVE THE MEMBER FROM THE SERVER.
 if (command === 'kick'){   
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

//-----------------------------------------------------------------------