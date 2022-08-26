const db = require("croxydb")
exports.run = (client, message, args) => {
const kanal = message.mentions.channels.first()
if(!kanal) return message.reply({content: "Bir kanal etiketlemelisin."})
db.set(`gckanal_${message.guild.id}`, kanal.id)
message.reply({content: `Giriş çıkış kanalı ${kanal} olarak ayarlandı`})
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'public-giriş'
};