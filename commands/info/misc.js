const Discord = require("discord.js");

module.exports = {
    name: "morecmd",
    category: "info",
    description: "Special commands that do not require a prefix (mer!)",
    run: async (client, message, args) => {
            let embed = new Discord.RichEmbed()
            .setDescription("These commands are not cap-sensitive.")
            .setColor("#d96ddb")
            .addField("Command phrases:", "Hewwo Merwin")
                message.channel.send({embed: embed})
        }

    }
