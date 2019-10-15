const urban = require("urban")
const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "urban",
    category: "misc",
    description: "gets an urban dictionary defination",
    usage: "`mer!urban random` or `mer!urban search <term>`",

    run: async (client, message, args) => {
    if(!message.channel.nsfw) return message.channel.send("This command is restricted to nsfw channels");
    
    if( args < 1 || !["random", "search"].includes(args[0])) return message.channel.send("usage: `mer!urban random` or `mer!urban search <term>`");
    let image = "http://cdn.marketplaceimages.windowsphone.com/v8/images/5c942bfe-6c90-45b0-8cd7-1f2129c6e319?imageType=ws_icon_medium";
    let search = args[1] ? urban(args.slice(1).join(" ")) : urban.random();
        try {
            search.first(res => {
                if(!res) return message.channel.send("No results found")
                let { word, definition, example, thumbs_up, thumbs_down, permalink, author} = res 

                    let embed = new RichEmbed()
                        .setColor("#d96ddb")
                        .setAuthor(`Urban Dictionary | ${word}`, image)
                        .setThumbnail(image)
                        .setDescription(stripIndents`**Definition:** ${definition || "No definition"}
                        **Example:** ${example || "No example"}
                        **Upvote:** ${thumbs_up || 0}
                        **Downvote:** ${thumbs_down || 0}
                        **Link:** [link to ${word}](${permalink || "https://www.urbandictionary.com/"})`)
                        .setTimestamp()
                        .setFooter(`Written by ${author || "unkown"}`);

                        message.channel.send(embed)
            })
        } catch(e) {
            console.log(e)
            return message.channel.send("Oof, I’m sorry for being useless.")
        }
    }
}