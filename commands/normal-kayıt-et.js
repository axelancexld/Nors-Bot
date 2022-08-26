const {EmbedBuilder} = require("discord.js");
const Discord = require("discord.js")
const config = require("../config.js")
const db = require("croxydb")
exports.run = async (client, message, args) => {
let kullanıcı = message.mentions.members.first()
let isim = args[1]
let yas = args[2]
let yetkili = db.fetch(`normalkayıtmod${message.guild.id}`)
let kayıtrol = db.fetch(`normalkayıt${message.guild.id}`)
if (!yetkili) return message.reply("yetkili rolü ayarlanmamış!")
if(!message.member.roles.cache.has(yetkili)) return message.channel.send("yetkin yok")
if (!kayıtrol) return message.reply("kayıtlı rolü ayarlanmamış!")
if (!kullanıcı) message.reply("Lütfen birini etiketle!")
if (!isim) return message.reply("Lütfen bir isim gir")
if (!yas) return message.reply("Lütfen bir yaş gir!")
message.reply("Kullanıcı Başarıyla Kayıt Edildi!")
message.guild.members.cache.get(kullanıcı.id).roles.add(kayıtrol)
kullanıcı.setNickname(`${isim} | ${yas}`)
db.push(`normal_kayıt${message.author.id}_${message.guild.id}`, kullanıcı.id)

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "normal-kayıt-et"
};
