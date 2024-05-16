<html>
  <head>
    <meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <ul><il>
      filname:index.js
    </il><il>gg</il></ul>
    <h6>
        
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '+'; 

client.once('ready', () => {
    console.log('Bot is ready!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'broadcast') {
        // ا
        if (!message.member.hasPermission('ADMINISTRATOR')) {
            return message.reply('ليس لديك الصلاحيات الكافية لإرسال البرودكاست.');
        }

        // استخدام الـ prefix بدلاً من '!'
        const broadcastMessage = args.join(' ');

        // إرسال البرودكاست ومنشن الأعضاء
        message.guild.members.cache.forEach(member => {
            if (member.user.bot) return; // تجاهل البوتات
            member.send(`<@${member.id}> ${broadcastMessage}`).catch(console.error);
        });

        message.channel.send('تم إرسال البرودكاست بنجاح.');
    }
});

// قم بتغيير "YOUR_DISCORD_BOT_TOKEN" إلى توكن البوت الخاص بك
client.login('YOUR_TOKEN_HERE');
    </h6>
  </head>
  <body>
    
  </body>
</html>
