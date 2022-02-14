//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//                          PURGE COMMAND
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// THIS COMMAND DELETE MESSAGES ACCORDING TO NUMBER THAT THE USER REQUIRED.
// THIS FUNCTION IT'S USEFUL FOR DELETE MASSIVE SPAM IN TEXT CHANNELS.
 if (command === "purge"){
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

//----------------------------------------------------------------------