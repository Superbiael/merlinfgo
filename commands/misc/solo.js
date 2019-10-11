module.exports = {
    name: "solo",
    // category: "RNG related",
    description: "Solo yolo, but all servants have an equal change regarless of rarity",
    run: async (client, message, args) => {
        number = 161;
        imageNumber = Math.floor (Math.random() * (number)) + 1;
        const msg = await message.channel.send ({files: ["./images/servants/" + imageNumber + ".png"]});
    }
}
