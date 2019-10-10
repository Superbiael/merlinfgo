const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");
const fs = require("fs");

const client = new Client({
    disableEveryone: true
})

// Collections
client.commands = new Collection();
client.aliases = new Collection();

client.categories = fs.readdirSync("./commands/");

config({
    path: __dirname + "/.env"
});

// Run the command loader
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
    console.log(`${client.user.username} is now online!`);

    client.user.setPresence({
        status: "online",
        game: {
            name: "owo",
            type: "WATCHING"
        }
    });
})

client.on("message", async message => {
    const prefix = "mer!";
    msg = message.content.toLowerCase();

    if (message.author.bot) return;
    if (!message.guild) return;
    // if (!message.content.startsWith(prefix)) return;

    // If message.member is uncached, cache it.
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd.length === 0) return;

    // Get the command
    let command = client.commands.get(cmd);
    // If none is found, try to find it by alias
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    // If a command is finally found, run the command
    if (command)
        command.run(client, message, args);

        if(msg.startsWith ("hewwo merwin")) {
            number = 2;
            var random = Math.floor (Math.random() * (number)) + 1;
            switch (random) {
              case 1: message.channel.send ("Hewwo! <:fou:631864260900814877>"); break;
              case 2: message.channel.send ("Hewwo! It's me, the dreamy sheep, Onii-san!"); break;
            }
           }
});



client.login(process.env.TOKEN);
