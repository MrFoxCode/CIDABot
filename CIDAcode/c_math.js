//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//                          MATH COMMAND
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

//SIMPLE FUNCTION TO TEST MESSAGES AND CALCULATION
 if(command === 'add'){  
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

//--------------------------------------------------------------------
