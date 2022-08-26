const {EmbedBuilder} = require("discord.js");
const Discord = require("discord.js")
const config = require("../config.js")
exports.run = async (client, message, args) => {
const embed = new EmbedBuilder()
.setTitle("Nors - Davet Menüsü!")
.setDescription("**Aşağıdaki linklere tıklayarak ilgili yerlere ulaşabilirsiniz.**")
.addFields({ name: '> Davet Linki', value: `[TIKLA](${config.davet})`, inline: true})
.addFields({ name: '> Destek Sunucusu', value: `[TIKLA](${config.destek})`, inline: true})
.addFields({ name: '> Website', value: `[TIKLA](${config.website})`, inline: true})
const row = new Discord.ActionRowBuilder()
.addComponents(
  new Discord.ButtonBuilder()
  .setLabel("Davet Et!")
  .setStyle(Discord.ButtonStyle.Link)
  .setURL(config.davet),
  new Discord.ButtonBuilder()
.setLabel("Destek Sunucusu")
.setStyle(Discord.ButtonStyle.Link)
.setURL(config.destek),
new Discord.ButtonBuilder()
.setLabel("Oy Ver")
.setStyle(Discord.ButtonStyle.Link)
.setURL(config.topgg)

)
message.reply({embeds: [embed], components: [row]})
message.react("⬇️")


};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "davet"
};
