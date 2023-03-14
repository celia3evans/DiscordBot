/* 
Celia Evans

This is the code for my Discord Bot:
CeliaBot !

*/


const Discord = require("discord.js") //import discord library
require("dotenv").config();
const bot = new Discord.Client()// create new client, "bot"

bot.on("ready", () => { //when ready event called,
  console.log(`CeliaBot is Online! :)`)//
})

const ytdl = require('ytdl-core')
const prefix = '+'

bot.on('message', message => { //when message recieved
    if(!message.content.startsWith(prefix) || message.author.bot) return; //doesnt respond without the prefix, nor if the bot wrote it itself

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase()

    //Start of responses:

    if(command === 'reactwhy'){
        message.channel.send("", {files: ["https://i.kym-cdn.com/photos/images/facebook/000/680/518/40f.jpg"]});
    }

    if(command === 'morbintime'){
        message.channel.send("", {files: ["https://discord.com/channels/763459825333567488/763491394110750730/1020482710290051092"]});
    }

    if(command === 'pbjtime'){
        message.channel.send("", {files: ["https://tenor.com/view/peanut-butter-jelly-time-banana-dancing-banana-gif-15003593"]}); //sends link
    }

    if(command === 'lifechoices'){
        message.channel.send("", {files: ['https://i.pinimg.com/originals/41/05/c3/4105c30ad869a2b7e65f8fd595418c3b.jpg']});
    }

    if(command === 'gifred'){
        message.channel.send("", {files: ["https://cdn.discordapp.com/attachments/763516655837380608/763858571921195048/image0.gif"]});
    }

    if(command === 'reactfam'){
        message.channel.send("", {files: ["https://cdn.discordapp.com/attachments/763516655837380608/763536382345347123/image0.jpg"]});
    }

    if(command === 'feedchickens'){
        message.channel.send("", {files: ["https://cdn.discordapp.com/attachments/755454758369755336/1020198106672939008/8mb.video-lo8-RvlsJvg4.mp4"]});
    }

    //turn bot off!!
    if(command === 'logoff'){
        message.channel.send(":wave: **CeliaBot is logging off for a bit! Be back soon.** :wave:");
        bot.off()
        return;
    }

    if(command === 'reactcrewmate'){
        message.channel.send("", {files: ["https://manofmany.com/wp-content/uploads/2020/10/Best-Among-Us-Memes-6-1280x720.jpg"]});
    }

    if(command === 'reactthink'){
        message.channel.send("", {files: ["https://cdn.discordapp.com/attachments/763516655837380608/763856022145466368/image0.jpg"]});
    }

    if(command === 'democracy'){
        message.channel.send("", {files: ["https://cdn.ebaumsworld.com/2020/09/22/055339/86396186/among-us-memes-and-jokes-2.jpg"]});
    }

    if(command === 'reactmad'){
        message.channel.send("", {files: ["https://64.media.tumblr.com/922a7d724a6d30fc8c5a0e83420ea9f5/3acf973ebfb601cb-9f/s400x600/726a201feb98df7b37692e6b5445d56fd300eaf0.jpg"]});
    }

    if(command === 'reactlaugh'){
        message.channel.send("", {files: ['https://i1.kym-cdn.com/photos/images/facebook/001/094/858/dae.jpg']});
    }

    if(command === 'gifspook'){
        message.channel.send("", {files: ['https://i.gifer.com/origin/25/25175811b9c76409be932808860a5a00_w200.gif']});
    }

    if(command === 'gifswag'){
        message.channel.send('', {files: ['https://cdn.discordapp.com/attachments/763516655837380608/772614140749152297/image0.gif']});
    }

    if(command === 'gifsuplex'){
        message.channel.send('', {files: ['https://cdn.discordapp.com/attachments/709232303184019466/765952957903798312/image0.gif']});
    }

    if(command === 'gifburrito'){
        message.channel.send('', {files: ['https://cdn.discordapp.com/attachments/763516655837380608/764172024984895508/image0.gif']});
    }

    if(command === 'ejectcc'){
        message.channel.send('', {files: ['https://cdn.discordapp.com/attachments/709232303184019466/775902910240129084/eject.gif']});
    }

    if(command === 'ejectben'){
        message.channel.send('', {files: ['https://cdn.discordapp.com/attachments/763865470595629086/775905896643166228/eject.gif']});
    }

    if(command === 'newfriend'){
        message.channel.send({files: ['https://img.ifunny.co/images/365aa51479b145c85624f6982c191319294233ff0fcb8f7c4f9e5ab9e5c913dd_1.jpg']});
    }

    if(command === 'ejectliam'){
        message.channel.send('', {files: ['https://cdn.discordapp.com/attachments/709232303184019466/775904061823647764/eject.gif']});
    }

    if(command === 'ejectjulia'){
        message.channel.send('', {files: ['https://cdn.discordapp.com/attachments/709232303184019466/775904941281771580/eject.gif']});
    }

    if(command === 'gifkill'){
        message.channel.send('', {files: ['https://media1.tenor.com/images/ef4993b593954811a0c0a1c98af698a3/tenor.gif?itemid=16399941']});
    }

    if(command === 'gifsteve'){
        message.channel.send('', {files: ['https://cdn.discordapp.com/attachments/758354023270842448/764498772796637274/image0.gif']});
    }

    if(command === 'gifcaprisun'){
        message.channel.send('', {files: ['https://cdn.discordapp.com/attachments/758354023270842448/773690244771217449/image0.gif']});
    }

    if(command === 'triggered'){
        message.channel.send('',{files: ['https://media1.tenor.com/images/e9db989a56b5e3da4ed8a9b50ebcbabc/tenor.gif?itemid=14949762']});
    }

    if(command === 'cowboy'){
        message.channel.send('',{files: ['https://cdn.discordapp.com/attachments/763516655837380608/764169043883982848/image0.gif']});
    }

    if(command === 'suicide'){
        message.channel.send('',{files: ['https://cdn.discordapp.com/attachments/763516655837380608/775532586470604820/JEBkBgZbKhpOZ7td.gif']});
    }

    if(command === 'unoreverse'){
        message.channel.send('⣰⣾⣿⣿⣿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣆\n⣿⣿⣿⡿⠋⠄⡀⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠋⣉⣉⣉⡉⠙⠻⣿⣿\n⣿⣿⣿⣇⠔⠈⣿⣿⣿⣿⣿⡿⠛⢉⣤⣶⣾⣿⣿⣿⣿⣿⣿⣦⡀⠹\n⣿⣿⠃⠄⢠⣾⣿⣿⣿⠟⢁⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄\n⣿⣿⣿⣿⣿⣿⣿⠟⢁⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷\n⣿⣿⣿⣿⣿⡟⠁⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⠋⢠⣾⣿⣿⣿⣿⣿⣿⡿⠿⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⡿⠁⣰⣿⣿⣿⣿⣿⣿⣿⣿⠗⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⣿⡟ \n⣿⡿⠁⣼⣿⣿⣿⣿⣿⣿⡿⠋⠄⠄⠄⣠⣄⢰⣿⣿⣿⣿⣿⣿⣿⠃\n⡿⠁⣼⣿⣿⣿⣿⣿⣿⣿⡇⠄⢀⡴⠚⢿⣿⣿⣿⣿⣿⣿⣿⣿⡏⢠\n⠃⢰⣿⣿⣿⣿⣿⣿⡿⣿⣿⠴⠋⠄⠄⢸⣿⣿⣿⣿⣿⣿⣿⡟⢀⣾\n⢀⣿⣿⣿⣿⣿⣿⣿⠃⠈⠁⠄⠄⢀⣴⣿⣿⣿⣿⣿⣿⣿⡟⢀⣾⣿\n⢸⣿⣿⣿⣿⣿⣿⣿⠄⠄⠄⠄⢶⣿⣿⣿⣿⣿⣿⣿⣿⠏⢀⣾⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿⠋⣠⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢁⣼⣿⣿⣿⣿⣿\n⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢁⣴⣿⣿⣿⣿⣿⣿⣿\n⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⢁⣴⣿⣿⣿⣿⠗⠄⠄⣿⣿\n⣆⠈⠻⢿⣿⣿⣿⣿⣿⣿⠿⠛⣉⣤⣾⣿⣿⣿⣿⣿⣇⠠⠺⣷⣿⣿\n⣿⣿⣦⣄⣈⣉⣉⣉⣡⣤⣶⣿⣿⣿⣿⣿⣿⣿⣿⠉⠁⣀⣼⣿⣿⣿\n⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣾⣿⣿⡿⠟');
    }

    if(command === 'hi'){
        message.channel.send('hi!');
    }

    if(command === 'bored'){
        message.channel.send('go play a game or something, I dunno');
    }

    if(command === 'ping'){
        ping = Math.floor((Math.random() * 8) + 1)
        if(ping === 1){
            message.channel.send('Dang it! I missed! You win. :disappointed:');
        }
        if(ping === 2){
            message.channel.send('Pong! HAHA! You missed! I win! :sunglasses:');
        }
        if(ping === 3||ping === 4||ping === 5||ping===6||ping===7||ping===8){
            message.channel.send('Pong! :ping_pong:');
        }
    }

    if(command === '8ball'){
        ball = Math.floor((Math.random() * 6) + 1)
        if(ball === 1){
            message.channel.send('Yes.:8ball:');
        }
        if(ball === 2){
            message.channel.send('No.:8ball:');
        }
        if(ball === 3){
            message.channel.send('Maybe.:8ball:');
        }
        if(ball === 4){
            message.channel.send('Ask again later.:8ball:');
        }
        if(ball === 5){
            message.channel.send('ABSOLUTELY!:8ball:');
        }
        if(ball === 6){
            message.channel.send('HECK NO!:8ball:');
        }
    }

    if(command === 'facts'){
        number = Math.floor((Math.random() * 10) + 1)
        if(number === 1){
            message.channel.send(' You\'re as useless as the "ueue" in queue.');
        }
        if(number === 2){
            message.channel.send(' Mirrors can\'t talk. Lucky for you they can\'t laugh either.');
        }
        if(number === 3){
            message.channel.send(' Hey, you have something on your chin. No, the third one down.');
        }
        if(number === 4){
            message.channel.send(' You\'re the reason the gene pool needs a lifeguard.');
        }
        if(number === 5){
            message.channel.send(' If I had a face like yours, I\'d sue my parents.');
        }
        if(number === 6){
            message.channel.send(' Some day you\'ll go far... and I hope you stay there.');
        }
        if(number === 7){
            message.channel.send(' You must have been born on a highway, because that\'s where most accidents happen.');
        }
        if(number === 8){
            message.channel.send(' If laughter is a medicine, your face must be curing the world.');
        }
        if(number === 9){
            message.channel.send(' When I see your face, there\'s not a thing that I would change... except the direction I\'m walking in.');
        }
        if(number === 10){
            message.channel.send(' If I had a dollar for every time you said something smart, I\'d be broke.');
        }
    }

    if(command === 'pickmeup'){
        number = Math.floor((Math.random() * 8) + 1)
        if(number === 1){
            message.channel.send('Your smile could light up this whole world. :)');
        }
        if(number === 2){
            message.channel.send('You are the embodiment of puppies and babies laughter. :)');
        }
        if(number === 3){
            message.channel.send('Has anyone told you that you look nice today? Because you\'re absolutely glowing.');
        }
        if(number === 4){
            message.channel.send('I hope you have the very best of days today. You deserve it.');
        }
        if(number === 5){
            message.channel.send('You\'re a genius and you should believe in yourself.');
        }
        if(number === 6){
            message.channel.send('You are SUPER talented! Keep up the good work. :)');
        }
        if(number === 7){
            message.channel.send('I am extremely proud of you. You\'ve worked very hard recently.');
        }
        if(number === 8){
            message.channel.send('You\'re so kind! Don\'t forget to be kind to yourself. :)');
        }
    }

    if(command === 'rand%'){
        randint = Math.floor((Math.random() * 100) + 1)
        message.channel.send(randint + '%');
    }

    if(command === 'randint'){
        randint = Math.floor((Math.random() * 100) + 1)
        message.channel.send(randint);
    }

    if(command === 'rickroll'){
        message.channel.send('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    }

    if(command === 'rainingtacos'){
        message.channel.send('https://youtu.be/npjF032TDDQ');
    }

    if(command === 'getstickbugged'){
        message.channel.send('https://www.youtube.com/watch?v=fC7oUOUEEi4');
    }

    if(command === 'unoyellow'){
        message.channel.send({files: ['https://i.imgur.com/yXEiYQ4h.jpg']});
    }

    if(command === 'unored'){
        message.channel.send({files: ['https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5ef95353-9f74-45ba-a400-5494417ca165/ddmcdqs-ecd2b865-fa25-4550-adf0-f5962af5484f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWVmOTUzNTMtOWY3NC00NWJhLWE0MDAtNTQ5NDQxN2NhMTY1XC9kZG1jZHFzLWVjZDJiODY1LWZhMjUtNDU1MC1hZGYwLWY1OTYyYWY1NDg0Zi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.JASe6g-Qonkdhm7GQ5H-qEyH-bM7sh6lPp60apDiUUo']});
    }
    
    if(command === 'unoblue'){
        message.channel.send({files: ['https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5ef95353-9f74-45ba-a400-5494417ca165/ddmcdr5-d973f8f4-425c-4c29-9ff0-a7ded220a78a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWVmOTUzNTMtOWY3NC00NWJhLWE0MDAtNTQ5NDQxN2NhMTY1XC9kZG1jZHI1LWQ5NzNmOGY0LTQyNWMtNGMyOS05ZmYwLWE3ZGVkMjIwYTc4YS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.S4WsrFGZRnzrrtawsDm016DOv3ATIE0SxHe5Z3NU-9A']});
    }

    if(command === 'unogreen'){
        message.channel.send({files: ['https://i.imgur.com/CSuB3ZW.png']});
    }

    if(command === 'howdy'){
        message.channel.send('',{files: ['https://media1.tenor.com/images/3ab272eac29e787f7efec17e8e2c0f69/tenor.gif?itemid=5254840']});
    }

    if(command === 'troll'){
        message.channel.send('',{files: ['https://cdn.discordapp.com/attachments/763516655837380608/829101102972010556/image0.gif']});
    }

    if(command === 'johncena'){
        message.channel.send('',{files: ['https://cdn.discordapp.com/attachments/763516655837380608/889513602023833630/image0.gif']});
    }

    //JACKBOX???//
    if(command === 'quips'){
        number = Math.floor((Math.random() * 32) + 1)
        if(number === 1){
            message.channel.send('Bank heist plan: Step 1. Approach bank teller. Step 2. __________.');
        }
        if(number === 2){
            message.channel.send('The greatest trick the Devil ever played was __________.');
        }
        if(number === 3){
            message.channel.send('The most intriguing phrase to find in a dating profile:');
        }
        if(number === 4){
            message.channel.send('If a candidate did this, they would instantly win my vote.');
        }
        if(number === 5){
            message.channel.send('A sure sign your co-worker is a robot.');
        }
        if(number === 6){
            message.channel.send('What sign was left off of the zodiac?');
        }
        if(number === 7){
            message.channel.send('The worst thing to say during an autopsy:');
        }
        if(number === 8){
            message.channel.send('You can expect tragedy when the tarot reader turns the card depicting __________.');
        }
        if(number === 9){
            message.channel.send('What do super progressive schools give instead of grades?');
        }
        if(number === 10){
            message.channel.send('What is the one trick magicians refuse to do?');
        }
        if(number === 11){
            message.channel.send('A really terrible job would be the brand ambassador for __________.');
        }
        if(number === 12){
            message.channel.send('There is a famous assassin who shows no mercy. They call her __________.');
        }
        if(number === 13){
            message.channel.send('What Santa\’s elves do when the old man is sleeping:');
        }
        if(number === 14){
            message.channel.send('The secret thing you must do to pass the final exams at Hogwarts:');
        }
        if(number === 15){
            message.channel.send('The one thing the entire family can agree upon at Thanksgiving dinner:');
        }
        if(number === 16){
            message.channel.send('“She\’s a cop. He\’s a celebrity chef! This summer they\’re...”');
        }
        if(number === 17){
            message.channel.send('After “the wheel” and “fire,” what was humanity\’s third discovery?');
        }
        if(number === 18){
            message.channel.send('A theatrical production you\’ll never see at an elementary school:');
        }
        if(number === 19){
            message.channel.send('What trap was a little too severe for the final cut of Home Alone?');
        }
        if(number === 20){
            message.channel.send('Everybody forgets that one Friends episode titled “The One Where __________”');
        }
        if(number === 21){
            message.channel.send('What Ronald McDonald dreams about:');
        }
        if(number === 22){
            message.channel.send('The Queer Eye expert who didn\’t make the cut specialized in __________:');
        }
        if(number === 23){
            message.channel.send('The worst thing to hear after saying “I love you”:');
        }
        if(number === 24){
            message.channel.send('What God was thinking when he invented testicles:');
        }
        if(number === 25){
            message.channel.send('The one question science may never answer:');
        }
        if(number === 26){
            message.channel.send('You know it\’s a slow morning when __________ is trending on Twitter:');
        }
        if(number === 27){
            message.channel.send('What\’s behind the locked door the real estate agent refuses to show you?');
        }
        if(number === 28){
            message.channel.send('Haunted House rules: 1. Do not touch the actors 2. __________.');
        }
        if(number === 29){
            message.channel.send('What is a sexy vampire\’s biggest turnoff?');
        }
        if(number === 30){
            message.channel.send('The only thing worse than watching __________ is watching it in slow-motion.');
        }
        if(number === 31){
            message.channel.send('A dangerous marital sex game: you tie yourself to the bed and they __________.');
        }
        if(number === 32){
            message.channel.send('The name of a start-up company that\’s doomed to fail:');
        }
    }
    //Jackbox ends//

    //HELP IS HERE

    if(command === 'help'){
        message.channel.send(':wave: ***Hello there! I\'m CeliaBot! Here are my commands!***\n:speech_balloon: **Simple:** `+help, +hi, +ping, +bored, +facts, +pickmeup`\n:game_die: **Gambling:** `+randint <ask question>, +rand% <ask question>, +8ball <ask question>`\n:arrow_forward: **Videos:** `+rickroll, +getstickbugged, +rainingtacos, +feedchickens`\n:rofl: **Reaction Memes:** `+reactwhy, +reactfam, +reactthink, +reactmad, +reactlaugh, +cowboy, +lifechoices, +newfriend`\n:gift: **Gifs:** `+gifspook, +gifburrito, +gifsteve, +gifsuplex, +gifswag, +gifcaprisun, +triggered, +howdy, +troll`\n:gift: **Gifs2:** `+johncena, +morbintime`\n:rocket: **Among Us:** `+gifred, +gifkill, +reactcrewmate, +democracy, +suicide, +eject(liam/ben/julia/cc)`\n:diamonds: **Uno:** `+unoreverse, +unored, +unoyellow, +unogreen, +unoblue`');
    }

    //HELP ENDS HERE

})

bot.login(process.env.TOKEN)