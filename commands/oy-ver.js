const {EmbedBuilder} = require("discord.js");
const Discord = require("discord.js")
const config = require("../config.js")
exports.run = async (client, message, args) => {
const embed = new EmbedBuilder()
.setTitle("Nors - Oy Menüsü!")
.setDescription("**Aşağıdaki linklere tıklayarak ilgili yerlere ulaşabilirsiniz.**")
.addFields({ name: '> Oy Verme Sitesi', value: `[TIKLA](${config.topgg})`, inline: true})
.addFields({ name: '> Destek Sunucusu', value: `[TIKLA](${config.destek})`, inline: true})
const row = new Discord.ActionRowBuilder()
.addComponents(
    new Discord.ButtonBuilder()
.setLabel("Oy Sitesi")
.setStyle(Discord.ButtonStyle.Link)
.setURL(config.topgg),
  new Discord.ButtonBuilder()
.setLabel("Destek Sunucusu")
.setStyle(Discord.ButtonStyle.Link)
.setURL(config.destek),


)
message.reply({embeds: [embed], components: [row]})
message.react("⬇️")


};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "oyver"
};
