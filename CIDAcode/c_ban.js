//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//                          BAN COMMAND
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

//BAN THE MEMBER FROM THE SERVER, AND RESTRICT THEM TO JOIN BACK BY ANY CHANGE, ADDING THEM INTO A BLACKLIST.
if (command === 'ban'){   
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

//---------------------------------------------------------------------