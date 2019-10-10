module.exports = {
    name: "fou",
    category: "misc",
    description: "random fou out of 13 total images",
    run: async (client, message, args) => {
        number = 13;
        imageNumber = Math.floor (Math.random() * (number)) + 1;
        const msg = await message.channel.send ({files: ["./images/fou/" + imageNumber + ".png"]});

    }
}
