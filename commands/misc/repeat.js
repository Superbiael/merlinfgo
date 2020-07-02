const { RichEmbed } = require("discord.js");

module.exports = {
    name: "repeat",
    run: (client, message, args) => {
        message.delete();

        // if (!message.member.hasPermission("MANAGE_MESSAGES"))
        //     return message.reply("You don't have the required permissions to use this command.").then(m => m.delete(5000));
        let botschannel = message.guild.channels.find(channel => channel.name === 'general');
        if(!botschannel) return;

        if (args.length < 0)
            return message.reply("Nothing to say?").then(m => m.delete(5000));

        const roleColor = message.guild.me.highestRole.hexColor;

        if (args[0].toLowerCase() === "embed") {
            const embed = new RichEmbed()
                .setDescription(args.slice(1).join(" "))
                .setColor(roleColor === "#000000" ? "#ffffff" : roleColor);

            botschannel.send(embed);
        } else {
            botschannel.send(args.join(" "));
        }
    }
}