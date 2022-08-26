const Discord = require("discord.js");
const db = require("croxydb")
const ayarlar = require("../config.js")

exports.run = async (client, message, args) => {
  
  if (!message.member.permissions.has("MANAGE_GUILD"))
    return message.channel.send("Gerekli Yetkin Yok!")
let prefixdb = db.fetch(`prefix_${message.guild.id}`)
let prefix = prefixdb || ayarlar.prefix
if(!args[0]) {
 message.channel.send("Ayarla/Sıfırla Yazın!")
  
}
if(args[0] === "ayarla"){
  let yeniprefix = args[1]
  if(!yeniprefix) return message.channel.send("Lütfen bir prefix gir!")
  if(db.fetch(`prefix_${message.guild.id}`)) return message.channel.send("Bu sunucuda prefix zaten ayarlanmış!")
  db.set(`prefix_${message.guild.id}`, yeniprefix)

  message.channel.send("Başarılı!")
}
if(args[0] === "sıfırla"){
  let yeniprefix = args[1]
  
  if(!yeniprefix) return message.channel.send("Lütfen bir prefix gir!")

  if(!db.fetch(`prefix_${message.guild.id}`)) return message.channel.send("prefixi zaten ayarlamamışın!")
  db.delete(`prefix_${message.guild.id}`)
  
  message.channel.send("başarılı")
}
}
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'prefix', 
  description: 'Botu yeniden başlatır',
  usage: 'reboot'
};