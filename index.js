const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '+'; // يمكنك تغيير البريفكس حسب احتياجاتك
const token = 'YOUR_DISCORD_BOT_TOKEN';

client.once('ready', () => {
    console.log('Bot is ready!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'broadcast') {
        // التحقق من أن المستخدم لديه الصلاحيات المناسبة لإرسال البرودكاست
        if (!message.member.hasPermission('ADMINISTRATOR')) {
            return message.reply('ليس لديك الصلاحيات الكافية لإرسال البرودكاست.');
        }

        // استخدام الـ prefix بدلاً من '+'
        const broadcastMessage = args.join(' ');

        // إرسال البرودكاست ومنشن الأعضاء
        message.guild.members.cache.forEach(member => {
            if (member.user.bot) return; // تجاهل البوتات
            member.send(`<@${member.id}> ${broadcastMessage}`).catch(console.error);
        });

        message.channel.send('تم إرسال البرودكاست بنجاح.');
    }
});

client.login('YOUR_TOKEN_BOT);