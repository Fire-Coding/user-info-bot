const Discord = require('discord.js')
const bot = new Discord.Client();

const PREFIX = "-";

var version = "1.0.0"

bot.on('ready', () =>{
    console.log('User Info Bot is online!')
    bot.user.setActivity("New update coming on Friday!!", {type: "PLAYING"})

    /*let statuses = [
        `${bot.guilds.size} Servers!`,
        `${bot.users.size} People!`,
        '-help'
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: "WATCHING"});
    }, 5000)*/
})



bot.on('message', message=>{
    
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.send('Pong!');
        break;

        case 'userinfo':
            var embed = new Discord.MessageEmbed()
            .setTitle('User Information')
            .addField('Player Name', message.author.username)
            .addField('Server Sent From', message.guild.name)
            .setColor(0xF92C00)
            //.setThumbnail(message.author.user.iconURL)
            message.channel.send(embed);
        break;

        case 'help':
            var embed = new Discord.MessageEmbed()
            .setTitle('Commands')
            .addField('Commands List', '-help')
            .addField('Pong!', '-ping')
            .addField('Gives Info on You!', `-userinfo`)
            .addField('Gives Info on the Bot!', '-botinfo')
            //.addField('Developer Info', '-devinfo')
            .addField('Invite Bot', '-invite')
            .addField('Discord', '-discord')
            .setColor(0xF92C00)
            message.channel.send(embed);
        break;

        case 'botinfo':
            var embed = new Discord.MessageEmbed()
            .setTitle('Bot Info')
            .addField('Version', version)
            .addField('Lines of Code', '91')
            .addField('Developer', 'Overblown')
            .setColor(0xF92C00)
            message.channel.send(embed);
        break;

        case 'ownerinfo':
            var embed = new Discord.MessageEmbed()
            .setTitle('Owner Info')
            .addField('Online Name', 'Overblown')
            .addField('Mixer', 'BlaZedPlayz')
            .addField('Coding Languages He Knows', 'JavaScript, HTML, CSS')
            .setColor(0xF92C00)
            message.channel.send(embed);
        break;

        case 'invite':
            message.channel.send('Invite:')
            message.channel.send('https://discord.com/api/oauth2/authorize?client_id=751912754289573959&permissions=8&scope=bot')
        break;

        case 'discord':
            message.channel.send('Discord:')
            message.channel.send('https://discord.gg/BCukkMX')
        break;
    }
})

bot.login(process.env.BOT_TOKEN)
