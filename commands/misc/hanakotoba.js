module.exports = {
    name: "flower",
    aliases: ["f"],
    category: "misc",
    description: " Let's talk about the lanauge of flowers | alias: f",
    run: async (client, message, args) => {
        number = 8;
        var random = Math.floor (Math.random() * (number)) + 1;
        switch (random) {
            case 1: message.channel.send ("Let's talk about flowers. This flower's is \"noble\" and \"beautiful heart.\" I'll crown you with the Vertessen flower. Be happy, my king."); break;
            case 2: message.channel.send ("Let's talk about flowers. The language of flowers is \"milk\". Oh no, this isn't a joke from your mischievous brother Merlin. That really is the meaning for Lettuce. Isn't that amazing? lol"); break;
            case 3: message.channel.send ("Let's talk about flowers. The language of flowers is \"revenge\" \"misanthropic,\" and \"pessimistic.\" Oh, I wonder who left me these Aconite flowers? Your journey of revenge has nothing to do with me."); break;
            case 4: message.channel.send ("Let's talk about flowers. The language of flowers is \"loyalty\" Hanai flowers bloom near water. I wonder if your regret is blooming in that lake, Lucius."); break;
            case 5: message.channel.send ("Let's talk about flowers. The language of flowers is \"time,\" \"courage,\" and \"grief.\" You think the language of potpourri is similar to your journey? Don't worry, it's not going to end in grief. After all, I like happy endings!"); break;
            case 6: message.channel.send ("Let's talk about flowers. The language of flowers is \"remember me.\" The white clover is also known as just clover. By the way, the language of the four-leaf clover is \"good luck\". And while we're at it, why don't you give one to the beautiful knight who is suffering from a low luck?"); break;
            case 7: message.channel.send ("Let's talk about flowers. The language of flowers is \"happiness.\" The petals of the skeleton flower become transparent when it gets wet. Isn't it beautiful?"); break; 
            case 8: message.channel.send ("Let's talk about flowers. The language of flowers is \"Only you can see\" and \"You care full of charm\". The passionate color of the bougainvillea flower is like burning love, isn't it?"); break;
            // case 9: message.channel.send ("")
        }
        }
    }
