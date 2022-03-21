const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/wvTMw09.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*𝐁𝐎𝐓 𝐍𝐀𝐌𝐄:QUEEN ANGELLA*
 
❏©drips ®zimbots☑✔

*🌟𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐑 𝐍𝐔𝐌𝐁𝐄𝐑🎊🎊 : wa.me/8960570658?text=Hii%20DripsMemes%20Save%20for%20save.%20*

 *🌟𝐓𝐎 𝐂𝐇𝐄𝐂𝐊 𝐔𝐏𝐃𝐀𝐓𝐄𝐒⏳⌛ .update   To update Bot .update now*





 *🌟 Shashikant 𝐎𝐅𝐂📎🔗: website coming soon*

 *🌟𝐆𝐈𝐓𝐇𝐔𝐁 𝐋𝐈𝐍𝐊📎🔗 : https://github.com/DarkCraft/queen-angela*



 ❏❏©drips ®zimbots✔
`}) 

}));
