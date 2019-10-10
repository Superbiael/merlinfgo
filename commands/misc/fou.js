module.exports = {
    name: "fou",
    category: "misc",
    description: "random fou out of 9 total images",
    run: async (client, message, args) => {
        number = 9;
        imageNumber = Math.floor (Math.random() * (number)) + 1;
        const msg = await message.channel.send ({files: ["./images/fou/" + imageNumber + ".png"]});

    }
}
