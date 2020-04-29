const { RichEmbed } = require("discord.js");


module.exports = {
    name: "say",
    category: "misc",
    description: "Says your input via the bot",
    usage: "mer!say <message> or mer!say embed <message>",
    run: (client, message, args) => {
        message.delete();
//
   let merlinchannel = message.guild.channels.find(channel => channel.name === 'general');
   if(!merlinchannel) return;
       
        if (args.length < 0)
            return message.reply("Nothing to say?").then(m => m.delete(5000));

        const roleColor = message.guild.me.highestRole.hexColor;

        if (args[0].toLowerCase() === "embed") {
            const embed = new RichEmbed()
                .setDescription(args.slice(1).join(" "))
                .setColor(roleColor === "#000000" ? "#ffffff" : roleColor);

            message.merlinchannel.send(embed);
        } else {
            message.merlinchannel.send(args.join(" "));
        }
    }
}
