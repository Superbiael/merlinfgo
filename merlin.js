const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");
const fs = require("fs");
const prefix = "mer!";

const client = new Client({
    disableEveryone: true
})

client.commands = new Collection();
client.aliases = new Collection();

client.categories = fs.readdirSync("./commands/");

config({
    path: __dirname + "/.env"
});


["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
    console.log(`${client.user.username} is online in ${client.guilds.size} servers!`);

    client.user.setPresence({
        status: "online",
        game: {
            name: "Detective Fou-mes",
            type: "STREAMING"
        }
        
    });
})

client.on("message", async message => {
    msg = message.content.toLowerCase();


    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd.length === 0) return;


    let command = client.commands.get(cmd);
    // If none is found, try to find it by alias
    if (!command) command = client.commands.get(client.aliases.get(cmd));


    if (command)
        command.run(client, message, args);

        let chaldeaMas = (message.member.user.username) 
    });

        client.on("message", async message => {
            msg = message.content.toLowerCase();
        // Commands that don't need a prefix

        if(msg.startsWith ("hewwo merwin")) {
            number = 3;
            var random = Math.floor (Math.random() * (number)) + 1;
            switch (random) {
              case 1: message.channel.send ("Hewwo! <:fou:631864260900814877>"); break;
              case 2: message.channel.send ("Hewwo! It's me, the dreamy sheep, Onii-san!"); break;
              case 3: message.channel.send ("Hewwo! It is I, Merwin, everyone's twusted advisor.",); break;
            }
        }

        if(msg.startsWith ("good night merlin")) {
            number = 4;
            var random = Math.floor (Math.random() * (number)) + 1;
            switch (random) {
            case 1: message.channel.send ("Are you tired? Then, rest well and have a sweet dream~"); break;
            case 2: message.channel.send ("Good night, sweet dreams. Humans need to have time to see beautiful dreams."); break;
            case 3: message.channel.send ("Good night, sweet dreams. As you are someone's happy song, I'll dedicate a higiri flower to your dream."); break;
            case 4: message.channel.send ("Good night, my master. For tonight, I shall paint you a lovely dream~"); break;
           }
        }

        if(msg.startsWith ("murder merlin fou")) {
            number = 2;
            var random = Math.floor (Math.random() * (number)) + 1;
            switch (random) {
              case 1: message.channel.send ("Dofouuuu!?"); break;
              case 2: message.channel.send ("What are you doing, you feral beast!?"); break;
          }
        }

        if(msg.startsWith (prefix + "hex")) {
            return message.channel.send ("#d96ddb");
        }
       

        if(msg.startsWith ("pspspsps")) {
            if(message.author.id != "182723698711592960") return;
            return message.channel.send ("owo");
        }

});

client.login(process.env.TOKEN);
