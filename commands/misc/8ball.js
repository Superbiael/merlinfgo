const Discord = require("discord.js");

module.exports = {
  name: "ask",
  category: "misc",
  description: "Basic 8ball command | still wip",
  run: async (client, message, args) => {
  if(!args[0]) return message.reply("I'll answer whatever. Will you finally ask for my body measurements?");
  let replies = [
    "Okay~! Sure thing.",
    "Sure thing.",
    "If that is your wish.",
    "Yes, well, no... Not exactly.",
    "Oh, you know... I suddenly feel that some things are better left unsaid!",
   ];

   let result = Math.floor((Math.random() * replies.length));
   let question = args.slice(0).join(" ");
   let chaldeaMas = (message.member.user.username);

     return message.channel.send (replies[result]);

 }
}