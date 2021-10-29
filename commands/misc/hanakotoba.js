module.exports = {
    name: "flower",
    aliases: ["f"],
    category: "misc",
    description: " Let's talk about the lanauge of flowers | alias: f",
    run: async (client, message, args) => {
        number = 4;
        var random = Math.floor (Math.random() * (number)) + 1;
        switch (random) {
            case 1: message.channel.send ("Let's talk about flowers. This flower's is \"noble\" and \"beautiful heart.\" I'll crown you with the Vertessen flower. Be happy, my king."); break;
            case 2: message.channel.send ("Let's talk about flowers. The language of flowers is \"milk\". Oh no, this isn't a joke from your mischievous brother Merlin. That really is the meaning for Lettuce. Isn't that amazing? lol"); break;
            case 3: message.channel.send ("Let's talk about flowers. The language of flowers is \"revenge\" \"misanthropic,\" and \"pessimistic.\" Oh, I wonder who left me these Aconite flowers? Your journey of revenge has nothing to do with me."); break;
            case 4: message.channel.send ("Let's talk about flowers. The language of flowers is \"loyalty\" Hanai flowers bloom near water. I wonder if your regret is blooming in that lake, Lucius."); break;
        //    case 3: message.channel.send (""); break;
         }
        }
    }
