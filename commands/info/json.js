const api = "https://jsonplaceholder.typicode.com/posts";
const snekfetch = require("snekfetch");
const Discord = require("discord.js");

module.exports = {
    name: "json",
    description: "testing json api",
    usage: "mer!json <1-100>",
    run: async (client, message, args) => {
        snekfetch.get(api).then(r => {
            let body = r.body;
            let id = Number(args[0]);
            if(!id) return message.channel.send("Supply an ID");
            if(isNaN(id)) return message.channel.send("Supply a valid number");

            let entry = body.find(post => post.id === id);
            if(!entry) return message.channel.send("This entry doesn't exist");

            let embed = new Discord.RichEmbed()
                .setAuthor(entry.title)
                .setColor("#d96ddb")
                .setDescription(entry.body)
                .addField("Author ID", entry.userId)
                .setFooter("Post ID: " + entry.id)
                message.channel.send({embed: embed})
        });

    }
}
