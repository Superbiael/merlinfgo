module.exports = {
    name: "react",
    description: "Test command for reacts <:saintquartz:631918679105470504>",
    run: async (client, message, args) => {
        let chaldeaMas = (message.member.user.username)
            message.react('631918679105470504');
            return message.channel.send ("Here, for you, " + [chaldeaMas] + "~❤")
    }
}

// Original React Command
//   if (msg.startsWith (prefix + "leaf")) {
//     message.react('🍃');
//     return message.channel.send("Babe, that me leaf 🍃");
//    }