const { RichEmbed } = require("discord.js");

module.exports = {
    name: "repeat",
    run: (client, message, args) => {
        message.delete();

        let botschannel = message.guild.channels.find(channel => channel.name === 'general');
        if(!botschannel) return;
        if(message.author.id != "182723698711592960") return;

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
