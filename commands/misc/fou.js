module.exports = {
    name: "fou",
    category: "misc",
    description: "random Fou image out of 14 images <:fou:631864260900814877>",
    run: async (client, message, args) => {
        number = 14;
        imageNumber = Math.floor (Math.random() * (number)) + 1;
        const msg = await message.channel.send ({files: ["./images/fou/" + imageNumber + ".png"]});

    }
}
