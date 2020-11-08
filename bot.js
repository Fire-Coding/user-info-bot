const Discord = require('discord.js')
const moment = require('moment')
const bot = new Discord.Client();

const prefix = "-";

var version = "1.2"

bot.on('ready', () =>{
    console.log('User Info Bot is online!')
    bot.user.setActivity("with info.", {type: "PLAYING"})

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



bot.on('message', async message=>{
    
    let member = message.mentions.members.first() || message.member
        user = member.user;
    let args = message.content.substring(prefix.length).split(" ");

    //switch(args[0]){
        if (message.content === `${prefix}ping`) {
            const msg = await message.channel.send(`Pinging...`);

            msg.edit(
            `Pong! \n Latency is ${Math.floor(
            msg.createdAt - message.createdAt
            )}ms \n API Latency ${Math.round(bot.ping)}ms`
            );
        };

        if (message.content === `${prefix}userinfo`) {
            const userinfoembed = new Discord.MessageEmbed()
            .setTitle('User Information')
            .addField('User Name', message.member.user.tag)
            .addField("User ID", message.member.id)
            .addField("Discord Account Creation", `${createdDate.toUTCString()}`)
            .addField('Server Sent From', message.guild.name)
            .addField('Server Join Date', `${moment.utc(member.joinedAt).format('DD/MM/YY')}` + "\n")
            .setColor(0xF92C00)
            .setThumbnail(message.author.avatarURL());
            message.channel.send(userinfoembed);
        }

        if (message.content === `${prefix}help`) {
            const helpmenuembed = new Discord.MessageEmbed()
            .setTitle('Commands')
            .addField('Commands List', '-help')
            .addField('Pong!', '-ping')
            .addField('Say Command (BROKEN)', '-say')
            .addField('Gives Info on You!', `-userinfo`)
            .addField('Gives Info on the Bot!', '-botinfo')
            .addField('Developer Info', '-devinfo')
            .addField('Invite Bot', '-invite')
            .addField('Discord', '-discord')
            .setColor(0xF92C00)
            message.channel.send(helpmenuembed);
        }

        if (message.content === `${prefix}botinfo`) {
            const botinfoembed = new Discord.MessageEmbed()
            .setTitle('Bot Info')
            .addField('Servers', `${bot.guilds.cache.size}`)
            .addField('Version', version)
            .addField('Lines of Code', '121')
            .addField('Developer', 'Overblown')
            .setThumbnail('https://media.discordapp.net/attachments/712418633451569152/762072545863139378/robot.png?width=200&height=200')
            .setFooter('Got any suggestions? Join the server and ask them in #bot-suggestions!')
            .setColor(0xF92C00)
            message.channel.send(botinfoembed);
        }

        if (message.content === `${prefix}devinfo`) {
            const devembed = new Discord.MessageEmbed()
            .setTitle('Developer Info')
            .addField('Online Name', 'Overblown')
            .addField('Twitter', '@OverblownDev')
            .addField('Did he make this bot on his own?', 'Yes, but with some help with the internet.')
            .setFooter('YouTube: Overblown')
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
    
        if (message.content.startsWith('.say')) {
              let msg;
              let textChannel = message.mentions.channels.first()
              message.delete()

                if(textChannel) {
                  msg = args.slice(1).join(" ");
                  textChannel.send(msg)
              } else {
                  msg = args.join(" ");
                  message.channel.send(msg)
              }
          }
})

bot.login(process.env.BOT_TOKEN)
