

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

//-------------------------------------------------------------------