<html>
  <head>
    <meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
   <h3> <ul>
      <li>file name(index.js)</li>
      <li>before running your bot must you use this cod in consol or shell if you cant writing on consol"npm install discord.js@12</li>
      <li>dont forget replace"YOUR_TOKEN_BOT" WITH TOKEN BOT</li>
    </ul></h3><br>
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
        if (!message.member.hasPermission('ADMINISTRATOR')) {
            return message.reply('ليس لديك الصلاحيات الكافية لإرسال البرودكاست.');
        }

        const broadcastMessage = args.join(' ');

        message.guild.members.cache.forEach(member => {
            if (member.user.bot) return;
            member.send(`<@${member.id}> ${broadcastMessage}`).catch(console.error);
        });

        message.channel.send('تم إرسال البرودكاست بنجاح.');
    }
});

client.login('YOUR_BOT_TOKEN');
  </body>
</html>
