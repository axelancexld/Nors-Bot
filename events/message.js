const { EmbedBuilder } = require("discord.js");
var config = require("../config.js");
const client = require("..");

const db = require("croxydb")
client.on("messageCreate", async (message) => {
  if (!message.guild) return;
  if (message.author.bot) return;
  let sprefix = db.fetch(`prefix_${message.guild.id}`)
  let prefix = sprefix || config.prefix
  if (!message.content.startsWith(prefix)) return;
  
  let command = message.content.split(" ")[0].slice(prefix.length);
  let params = message.content.split(" ").slice(1);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    cmd.run(client, message, params);
  }

});
