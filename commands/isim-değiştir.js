const {EmbedBuilder} = require("discord.js");
const Discord = require("discord.js")
const config = require("../config.js")
exports.run = async (client, message, args) => {
  
  if (!message.member.permissions.has("MANAGE_GUILD"))
    return message.channel.send("Gerekli Yetkin Yok!")
let kullanıcı = message.mentions.members.first()
if (!kullanıcı) return message.reply("Lütfen bir kullanıcı etiketle!")
let isim = args.slice(1).join(" ")
if (!isim) message.reply("Lütfen bir isim girin!")
kullanıcı.setNickname(isim)
message.reply("Başarıyla kullanıcının adı değiştirildi")

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "isimdeğiştir"
};
