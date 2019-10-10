module.exports = {
    name: "fou",
    category: "misc",
    description: "random fou image",
    run: async (client, message, args) => {
        number = 7;
        imageNumber = Math.floor (Math.random() * (number)) + 1;
        const msg = await message.channel.send ({files: ["./images/fou/" + imageNumber + ".png"]});

    }
}
