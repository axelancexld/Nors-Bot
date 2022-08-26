const {EmbedBuilder} = require("discord.js");
const Discord = require("discord.js")
const config = require("../config.js")
const moment = require("moment");
  require("moment-duration-format");
  const os = require("os");
exports.run = async (client, message, args) => {
let desteksunucusu = config.destek
let davetlink = config.davet
let topgg = config.topgg
const Uptime = moment
.duration(client.uptime)
.format(" D [gün], H [saat], m [dakika], s [saniye]");
const embed = new EmbedBuilder()
.setTitle("Nors - İstatistik!")
.addFields({ name: '• | Sunucu Sayısı', value: `${client.guilds.cache.size}`, inline: true})
.addFields({ name: '• | Kullanıcı Sayısı', value: `${client.users.cache.size}`, inline: true})
.addFields({ name: '• | Kanal Sayısı', value: `${client.channels.cache.size}`, inline: true})
.addFields({ name: '• | Ping', value: `${client.ws.ping}`, inline: true})
.addFields({ name: '• | Çalışma Süresi', value: `${Uptime}`, inline: true})
.addFields({ name: '• | Bellek Kullanımı', value: `${(process.memoryUsage().heapUsed /1024 /512).toFixed(2)}Mb`, inline: true})
.addFields({ name: '• | Cpu', value: `${os.cpus().map(i => `${i.model}`)[0]}`, inline: true})
.addFields({ name: '• | Discord.JS', value: `14.2.0`, inline: true})
.addFields({ name: '• | Geliştirici', value: `@Ly3ssia#0746`, inline: true})
.setImage("https://cdn.discordapp.com/attachments/753645578835067030/931568526311960617/dnm2_kopya.png")
const row = new Discord.ActionRowBuilder()
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
message.reply({embeds: [embed], components: [row]})

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "istatistik"
};
