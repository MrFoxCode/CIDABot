//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//                           MUTE COMMAND
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

//THIS COMMAND FORCE AND APPLY A ROLE WITH RESTRICTIONS UPON A MEMBER, RESTRICTING THEM OF SOME ACTIVITES IN THE SERVER.
 if (command === 'mute'){   
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

//-------------------------------------------------------------------------------