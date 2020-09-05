const Discord = require('discord.js')
const bot = new Discord.Client();

var token = 'token';

const PREFIX = "-";

var version = "1.0.0"

bot.on('ready', () =>{
    console.log('User Info Bot is online!')
    //bot.user.setActivity("User Info Bot v2 is now out!", {type: "PLAYING"})

    let statuses = [
        `${bot.guilds.size} Servers!`,
        `${bot.users.size} People!`,
        '-help'
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: "WATCHING"});
    }, 5000)
})



bot.on('message', message=>{
    
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.send(`Pong! Sent in the speed of ${bot.pings[0]}`) 
        break;

        case 'userinfo':
            var embed = new Discord.RichEmbed()
            .setTitle('User Information')
            .addField('Player Name', message.author.username)
            .addField('Server Sent From', message.guild.name)
            .setColor(0xF92C00)
            .setThumbnail(message.author.avatarURL)
            message.channel.sendEmbed(embed);
        break;

        case 'help':
            var embed = new Discord.RichEmbed()
            .setTitle('Commands')
            .addField('Commands List', '-commands')
            .addField('Pong!', '-ping')
            .addField('Gives Info on You!', `-userinfo`)
            .addField('Gives Info on the Bot!', '-botinfo')
            .addField('Clears Messages', '-clear')
            .addField('Owner Info', '-ownerinfo')
            .addField('Invite Bot', '-invite')
            .addField('Discord', '-discord')
            .setColor(0xF92C00)
            message.channel.sendEmbed(embed);
        break;

        case 'botinfo':
            var embed = new Discord.RichEmbed()
            .setTitle('Bot Info')
            .addField('Version', version)
            .addField('Lines of Code', '64')
            .addField('Developer', 'BlaZed')
            .setColor(0xF92C00)
            message.channel.sendEmbed(embed);
        break;

        case 'ownerinfo':
            var embed = new Discord.RichEmbed()
            .setTitle('Owner Info')
            .addField('Online Name', 'Overblown')
            .addField('Mixer', 'BlaZedPlayz')
            .addField('Coding Languages He Knows', 'JavaScript, HTML, CSS')
            .setColor(0xF92C00)
            message.channel.sendEmbed(embed);
        break;

        case 'invite':
            message.channel.sendMessage('Invite:')
            message.channel.sendMessage('https://discordapp.com/api/oauth2/authorize?client_id=658860706766127104&permissions=8&scope=bot')
        break;

        case 'discord':
            message.channel.sendMessage('Discord:')
            message.channel.sendMessage('https://discord.gg/GebHzZB')
        break;
    }
})

bot.login(process.env.BOT_TOKEN)
