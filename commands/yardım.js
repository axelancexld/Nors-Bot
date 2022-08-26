const {EmbedBuilder} = require("discord.js");
const Discord = require("discord.js")
const config = require("../config.js")
exports.run = async (client, message, args) => {
  let desteksunucusu = config.destek
let davetlink = config.davet
let topgg = config.topgg
 const embed = new EmbedBuilder()
 .setTitle("Nors - Yardım Menüsü!")
 .setDescription(`**Nors Yardım Menüsüne Hoşgeldin! Botu kullanmadan önce rolünü en üste alınız.**\n**• | .yardım genel : Genel Komutlar Listesi**\n**• | .yardım yetkili : Yetkili Komutları Listesi**\n**• | .yardım kayıt : Kayıt Sistemi (Normal) Komut Listesi.**\n**• | .yardım kayıt2 : Kayıt Sistemi (Public) Komutları Listesi**`)
 .setImage("https://cdn.discordapp.com/attachments/753645578835067030/931568526311960617/dnm2_kopya.png")
 const row = new Discord.ActionRowBuilder()
.addComponents(
new Discord.ButtonBuilder()
.setLabel("Genel")
.setStyle(Discord.ButtonStyle.Primary)
.setCustomId("genel"),
new Discord.ButtonBuilder()
.setLabel("Yetkili")
.setStyle(Discord.ButtonStyle.Secondary)
.setCustomId("yetkili"),
new Discord.ButtonBuilder()
.setLabel("Kayıt")
.setStyle(Discord.ButtonStyle.Success)
.setCustomId("kayıt"),
new Discord.ButtonBuilder()
.setLabel("Kayıt2")
.setStyle(Discord.ButtonStyle.Danger)
.setCustomId("kayıt2"))
const row2 = new Discord.ActionRowBuilder()
.addComponents(
  new Discord.ButtonBuilder()
  .setLabel("Davet Et")
  .setStyle(Discord.ButtonStyle.Link)
  .setURL(davetlink),
  new Discord.ButtonBuilder()
.setLabel("Destek Sunucusu")
.setStyle(Discord.ButtonStyle.Link)
.setURL(desteksunucusu),
new Discord.ButtonBuilder()
.setLabel("Oy Ver")
.setStyle(Discord.ButtonStyle.Link)
.setURL(topgg)

)
message.reply({embeds: [embed], components: [row]}).then(msg => {
    msg.createMessageComponentCollector(user => user.clicker.user.id == message.author.id).on('collect', async (button) => {
      let interaction = button
        if (interaction.customId == "genel") {
          await interaction.deferUpdate()
const embed = new EmbedBuilder()
.setTitle("Nors - Yardım Menüsü!")
.setDescription(`**Nors Genel Yardım Menüsüne Hoşgeldin! Botu kullanmadan önce rolünü en üste alınız.
  • | .istatistik : Nors ile alakalı istatistikleri atar.
  • | .ping : Botun pingini atar.
  • | .oyver : Botun oy linkini atar.
  • | .davet : Botun davet linkini atar.**`)
  .setImage("https://cdn.discordapp.com/attachments/753645578835067030/931568526311960617/dnm2_kopya.png")
  msg.edit({embeds: [embed], components: [row2]})
        }
        if (interaction.customId == "yetkili") {
          await interaction.deferUpdate()
          const embed = new EmbedBuilder()
          .setTitle("Nors - Yardım Menüsü!")
          .setDescription(`**Nors Yetkili Yardım Menüsüne Hoşgeldin! Botu kullanmadan önce rolünü en üste alınız.
          • | .prefix : Botun prefixini sunucunuzda değiştirirsiniz.
          • | .say : Sunucudaki üyelerin sayılarını görürsünüz.
          • | .isimdeğiştir : Kullanıcının ismini değiştirirsiniz.
          • | .çek : Etiketlediğiniz kullanıcıyı bulunduğunuz ses kanalına çekersiniz.**`)
            .setImage("https://cdn.discordapp.com/attachments/753645578835067030/931568526311960617/dnm2_kopya.png")
            msg.edit({embeds: [embed], components: [row2]})
        }
        if (interaction.customId == "kayıt") {
          await interaction.deferUpdate()
          const embed = new EmbedBuilder()
          .setTitle("Nors - Yardım Menüsü!")
          .setDescription(`**Nors Yetkili Yardım Menüsüne Hoşgeldin! Botu kullanmadan önce rolünü en üste alınız.
          • | .normal-kayıtlı-rol : Kayıt edilince verilicek rolü ayarlarsın.
          • | .normal-kayıt-yetkilisi : Kayıt yetkilisini ayarlarsın.
          • | .normal-kayıt-et : Kullanıcıyı kayıt edersin.
          • | .normal-kayıt-puan : Etiketlediğiniz kullanıcının puanına bakarsın.**`)
            .setImage("https://cdn.discordapp.com/attachments/753645578835067030/931568526311960617/dnm2_kopya.png")
            msg.edit({embeds: [embed], components: [row2]})
        }
        if (interaction.customId == "kayıt2") {
          await interaction.deferUpdate()
          const embed = new EmbedBuilder()
          .setTitle("Nors - Yardım Menüsü!")
          .setDescription(`**Nors Yetkili Yardım Menüsüne Hoşgeldin! Botu kullanmadan önce rolünü en üste alınız.
          • | .public-erkek-rol : Erkek rolünü ayarlarsın.
          • | .public-giriş : Giriş sistemini ayarlarsın.
          • | .public-kayıt-et : Kullanıcıyı kayıt edersin.
          • | .public-kız-rol : Kız rolünü ayarlarsın.
          • | .public-kayıtlı-rol : Kayıtlı rolü ayarlarsın.
          • | .public-kayıtsız-rol : Kayıtsız rolünü ayarlarsın.
          • | .public-kayıt-yetkilisi : Kayıt yetkilisini ayarlarsın.
          • | .public-kayıt-puan : Etiketlediğiniz kullanıcının puanına bakarsın.**`)
            .setImage("https://cdn.discordapp.com/attachments/753645578835067030/931568526311960617/dnm2_kopya.png")
            msg.edit({embeds: [embed], components: [row2]})
        }
})
})
}
exports.conf = {
  aliases: []
};

exports.help = {
  name: "yardım"
};
