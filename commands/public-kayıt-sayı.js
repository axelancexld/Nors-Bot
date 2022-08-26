const Discord = require("discord.js")
const db = require("croxydb")
exports.run = async(client, message) => {
  let kullanıcı = message.mentions.members.first()
   
   if (!kullanıcı) return message.reply("Lütfen bir kullanıcı etiketle!")
   let puan = db.get(`public_${kullanıcı.id}_${message.guild.id}`).length;
   const embed = new Discord.EmbedBuilder()
   .setTitle("Nors - Sorgu Sistemi!")
   .setDescription(`Kullanıcı: ${kullanıcı}\nKayıt Ettiği Kişi Sayısı: ${puan}\nSorgulayan: ${message.author}`)
   .setImage("https://cdn.discordapp.com/attachments/753645578835067030/931568526311960617/dnm2_kopya.png")
   message.reply({embeds: [embed]})


}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  perm: 0
}
exports.help = {
  name: 'public-kayıt-puan'
}   