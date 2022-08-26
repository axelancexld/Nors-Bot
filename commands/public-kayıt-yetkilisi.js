const Discord = require("discord.js")
let database = require("croxydb")




exports.run = async(client, message) => {
  if(!message.member.permissions.has(`ADMINISTRATOR`)) return message.channel.send(
    "yetkin yok"
  )
  
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send(
   "bir rol etiketle"
  )
  
  
  database.set(`public_yetkili_${message.guild.id}`, rol.id)
 message.reply("ayarladim")
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  perm: 0
}
exports.help = {
  name: 'public-kayıt-yetkilisi'
}   