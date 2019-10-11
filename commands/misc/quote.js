module.exports = {
    name: "quote",
    aliases: ["q"],
    category: "misc",
    description: "Sends a random quote... or a meme. | alias: q",
    run: async (client, message, args) => {
        number = 23;
        var random = Math.floor (Math.random() * (number)) + 1;
        switch (random) {
           case 1: message.channel.send ("Hello, Chaldea's master. I am Merlin. People call me the Magus of Flowers. But you can just call me Merlin. I don't do well with formalities."); break;
           case 2: message.channel.send ("☆-(´>ω・`)b"); break;
           case 3: message.channel.send ("Good evening. It's a boisterous yet wonderful night, isn't it? Creating an artificial paradise in the middle of the wilderness... It's such a dream-like story. I haven't had much opportunities to appear, so now, I've come to play! How about it, Master? Won't you play together with me all night, until the morning comes?"); break;
           case 4: message.channel.send ("I've been watching from far away, but from now on I will be journeying together with you. I want you to rely on me. Especially concerning love, you are always welcome to recieve my consultation."); break;
           case 5: message.channel.send ("I'm called the Magus of Flowers because I like flowers. I don't even think I can make flowers bloom just by walking."); break;
           case 6: message.channel.send ("Am I good or evil? You are the one who decides that. I am simple - to humans who only go towards the future, I am like an unseedn fairy, aren't I?"); break;
           case 7: message.channel.send ("The painful struggle continues. But, well, a battle that isn’t painful isn’t a battle at all, only a task. It is good to think that even pain and suffering are important."); break;
           case 8: message.channel.send ("My journey with you has grown quite long. In the beginning I lent you my help out of a bit of curiosity…… Now, you are an unforgettable existence to me. —My lord. May the flowers bless the path you journey."); break;
           case 9: message.channel.send ("If you have so much free time, why not go out? At least, so long as your physical state permits."); break;
           case 10: message.channel.send ("Serving is a natural thing to me. After all, human spirit is nourishment for me."); break;
           case 11: message.channel.send ("You rely on me, and I raise you. Rather than fighting together with you, it is my policy to watch over* your fight. And the reward for that is…… Memories of our journey."); break;
           case 12: message.channel.send ("Things I like? Humans, pranks, and girls, ya’know? Aren’t they fun? Playing with them, I mean."); break
           case 13: message.channel.send ("Things I dislike…… Nothing in particular, but if I had to say something, I guess it’d be Grand Caster. Then again that also includes myself so there’s that. Well, I want you to guess."); break;
           case 14: message.channel.send ("So long as humans dream, so long as their wishes continue to grow, the Holy Grail will come into existence. That isn’t bad in of itself. The problem is that dreams of any age…… They’re far bigger than reality."); break;
           case 15: message.channel.send ("Are you enjoying the casino? \nThen, that's great! The substance your brain secretes when you gamble is very stimulating. It's vibrant yet simple, much like the feeling of liberation while free falling. \nIs this what they call a \"thrill\"? For me, it's like alcohol. Though it's not gratitude for some future day, I'd like for you to steadily exude it more!"); break;
           case 16: message.channel.send ("Oh my, it seems something unusual is happening. Yet again, it seems to be visitors from another world. How come this isn’t an event where only cute girls come to play?"); break;
           case 17: message.channel.send ("Good evening. \nIt's a boisterous yet wonderful night, isn't it? \nCreating an artificial paradise in the middle of the wilderness... It's such a dream-like story. I haven't had much opportunities to appear, so now, I've come to play! \nHow about it, Master? Won't you play together with me all night, until the morning comes?"); break;
           case 18: message.channel.send ("It's me, the dreamy sheep Onii-san~☆"); break;
           case 19: message.channel.send ("Sorry I can't have fun with you all! I'm a little busy updating Magi☆Mari's website!"); break;
           case 20: message.channel.send ("Relax~ relax~!"); break;
           case 21: message.channel.send ("I'll bet all my chips on you, I'm counting on you~!"); break;
           case 22: message.channel.send ("Are you tired? Then, rest well later and have a good dream."); break;
           case 23: message.channel.send ("A place with no walls, no castles, no countries, the sky of the beginning. The primordial star shining from the earth. Let me show you where the soul resides― The Forever Sealed Utopia, Garden of Avalon!");break;
         }
        }
    }
