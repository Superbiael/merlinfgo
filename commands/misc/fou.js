module.exports = {
    name: "fou",
    category: "misc",
    description: "random Fou image out of 26 images <:fou:631864260900814877>",
    run: async (client, message, args) => {
        number = 26;
        imageNumber = Math.floor (Math.random() * (number)) + 1;

        return message.channel.send ({files: ["./images/fou/" + imageNumber + ".png"]});
    }
}
