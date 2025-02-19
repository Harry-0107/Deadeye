import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ],
    partials: ["MESSAGE", "USER"],
});

client.on('ready',() => {
    console.log('Nowhere to run!!')

});


client.on('messageCreate', (message) => {
   if (message.content === 'sussy') {
       message.reply({
           content: 'baka',
       });
   }
   else if (message.content === 'gay') {
        message.reply({
            content: 'https://tenor.com/view/stop-showing-me-pictures-of-amogus-gif-20643873',
        });
    }
    else if (message.content === 'sus') {
        message.reply({
            content: 'HOLY SHIT DID YOU JUST SAY THE WORD SUS???😳1?/1😱//1😳/1111!!!! Wait, you dont know what it is from?😳😳😳Let 👆give you a brief r/history. 📚📚📚👨‍🚀If you didnt r/knowyourshit, the r/term sus(suspicious) is a saying from the r/popular r/game r/AmongUs. Among us is so fun😔 👉👈, dont insult it, every youtuber and streamer says so!!!!!!!11 Corpses voice is so deep am i right or am i right😳😳????? I mean Mr beast and Dream play and pull big 🧠 1000000000000 iq moves in their videos..... YOU WERE THE IMPOSTER.... ඞ ඞ ඞ Get it because you dont know what sus means? r/stupidquestions r/youranidot r/stupidcuck. I CAnT BELEeVE YOUU dont KNoW WHT SUS MeaNS?/??!??!?!!🖕🖕🖕🖕🖕 Man why do i have to r/explain this to a r/idiot🤪🤪🤪📚📚📚... Sus is a GREAT WORD from a GREAT VIDEO GAME. in class, YOU CAN PLAY IT ON YOUR PHONE😜😜😜😜😜😜**??!?!?** such a masterpiece... FOR THE GREAT PRICE OF FREE!!!11!💰💰🤑🤑🤑🤑😜😜😜💰💰 It can also mean gay 😳😳😳😳',
        });
    }
    else if (message.content === 'hello') {
        message.reply({
            content: 'world',
        });
    }
    
})

client.login(process.env.TOKEN);