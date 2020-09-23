const Discord = require('discord.js')
const bot = new Discord.Client();

const prefix = "-";

var version = "1.1"

bot.on('ready', () =>{
    console.log('User Info Bot is online!')
    bot.user.setActivity("TESTING RIGHT NOW", {type: "WATCHING"})

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
    
    let args = message.content.substring(prefix.length).split(" ");

    let member = message.mentions.members.first() || message.member
        user = member.user;

    //switch(args[0]){
        if (message.content === `${prefix}ping`) {
            message.channel.send('Pong!');
        };

        if (message.content === `${prefix}userinfo`) {
            var userinfoembed = new Discord.MessageEmbed()
            .setTitle('User Information')
            .addField('Player Name', message.author.username)
            .addField('Server Sent From', message.guild.name)
            .addField('Server Join Date', `${moment.utc(member.joinedAt).format('DD/MM/YY')}` + "\n")
            .setColor(0xF92C00)
            .setThumbnail(message.author.avatarURL());
            message.channel.send(userinfoembed);
        }

        if (message.content === `${prefix}help`) {
            var helpmenuembed = new Discord.MessageEmbed()
            .setTitle('Commands')
            .addField('Commands List', '-help')
            .addField('Pong!', '-ping')
            .addField('Gives Info on You!', `-userinfo`)
            .addField('Gives Info on the Bot!', '-botinfo')
            .addField('Developer Info', '-devinfo')
            .addField('Invite Bot', '-invite')
            .addField('Discord', '-discord')
            .setColor(0xF92C00)
            message.channel.send(helpmenuembed);
        }

        if (message.content === `${prefix}botinfo`) {
            var botinfoembed = new Discord.MessageEmbed()
            .setTitle('Bot Info')
            .addField('Servers', `${bot.guilds.cache.size}`)
            .addField('Version', version)
            .addField('Lines of Code', '95')
            .addField('Developer', 'Overblown')
            .setColor(0xF92C00)
            message.channel.send(botinfoembed);
        }

        if (message.content === `${prefix}devinfo`) {
            var devembed = new Discord.MessageEmbed()
            .setTitle('Owner Info')
            .addField('Online Name', 'Overblown')
            .addField('YouTube', 'Overblown')
            .addField('Did he make this bot on his own?', 'Yes, but with some help with the internet.')
            .setColor(0xF92C00)
            message.channel.send(devembed);
        }

        if (message.content === `${prefix}invite`) {
            message.channel.send('Invite:')
            message.channel.send('https://discord.com/api/oauth2/authorize?client_id=751912754289573959&permissions=8&scope=bot')
        }

        if (message.content === `${prefix}discord`) {
            message.channel.send('Discord:')
            message.channel.send('https://discord.gg/BCukkMX')
        }
})

bot.login(process.env.BOT_TOKEN)
