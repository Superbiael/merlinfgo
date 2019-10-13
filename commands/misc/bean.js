module.exports = {
    name: "bean",
    category: "misc",
    description: "Mer🅱ean...",
    run: async (client, message, args) => {
        return message.channel.send ({files:["./images/bean.png"]});
    }
}
