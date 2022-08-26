const db = require("croxydb")
const Discord = require("discord.js")
exports.run = (client, message, args) => {
let kullanıcı = message.mentions.members.first()
let isim = args[1]
let yas = args[2]
let erkek = db.fetch(`erkek_${message.guild.id}`)
let kız = db.fetch(`kız_${message.guild.id}`)
let kayıtlı = db.fetch(`kayıtlı_${message.guild.id}`)
let kayıtsız = db.fetch(`kayıtsız_${message.guild.id}`)
let yetkili = db.fetch(`public_yetkili_${message.guild.id}`)
if (!yetkili) return message.reply("yetkili rolü ayarlanmamış!")
if(!message.member.roles.cache.has(yetkili)) return message.channel.send("yetkin yok")
if (!erkek) return message.reply("Erkek rolü ayarlanmamış!")
if (!kız) return message.reply("Kız rolü ayarlanmamış!")
if (!kayıtlı) return message.reply("Kayıtlı rolü ayarlanmamış!")
if (!kayıtsız) return message.reply("Kayıtsız Rolü Ayarlanmamış!")
if (!kullanıcı) return message.reply("Lütfen bir kullanıcı etiketle!")
if (!isim) return message.reply("Lütfen bir isim gir!")
if (!yas) return message.reply("Lütfen bir yaş gir!")
const embed = new Discord.EmbedBuilder()
.setTitle("Nors - Kayıt Menüsü!")
.setDescription(`Kayıt Edilicek: ${kullanıcı}\n\nKayıt Eden: ${message.author}`)
.setColor("#ff0000")
const row = new Discord.ActionRowBuilder()
.addComponents(
new Discord.ButtonBuilder()
.setLabel("Erkek")
.setStyle(Discord.ButtonStyle.Success)
.setCustomId("erkek"),
new Discord.ButtonBuilder()
.setLabel("Kız")
.setStyle(Discord.ButtonStyle.Danger)
.setCustomId("kız")
)
message.reply({embeds: [embed], components: [row], content: "Kullanıcıyı nasıl kayıt etmek istiyorsun?"}).then(msg => {
    msg.createMessageComponentCollector(user => user.clicker.user.id == message.author.id).on('collect', async (button) => {
      let interaction = button
        if (interaction.customId == "erkek") {
msg.delete()
message.guild.members.cache.get(kullanıcı.id).roles.add(erkek)
message.guild.members.cache.get(kullanıcı.id).roles.add(kayıtlı)
message.guild.members.cache.get(kullanıcı.id).roles.remove(kayıtsız)
kullanıcı.setNickname(`${isim} | ${yas}`)
db.push(`public_${message.author.id}_${message.guild.id}`, kullanıcı.id)
        }
        if (interaction.customId == "kız") 
        msg.delete()
        message.guild.members.cache.get(kullanıcı.id).roles.add(kız)
        message.guild.members.cache.get(kullanıcı.id).roles.add(kayıtlı)
        message.guild.members.cache.get(kullanıcı.id).roles.remove(kayıtsız)
        kullanıcı.setNickname(`${isim} | ${yas}`)
        db.push(`public_${message.author.id}_${message.guild.id}`, kullanıcı.id)
    
    })
})


};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'public-kayıt-et'
};