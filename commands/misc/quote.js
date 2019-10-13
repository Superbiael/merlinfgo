module.exports = {
    name: "quote",
    aliases: ["q"],
    category: "misc",
    description: "Sends a random quote out of 31 | alias: q",
    run: async (client, message, args) => {
        number = 31;
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
           case 22: message.channel.send ("A place with no walls, no castles, no countries, the sky of the beginning. The primordial star shining from the earth. Let me show you where the soul resides― The Forever Sealed Utopia, Garden of Avalon!");break;
           case 23: message.channel.send ("What~ I can do anything, you know!"); break;
           case 24: message.channel.send ("I like the world of humans very much, but when it comes to each of them individually, I’m relatively, look, well, yeah!\nVery well, I suddenly feel that some things are better left unsaid!"); break;
           case 25: message.channel.send ("Why I don't use incantations, you ask?\nEven though it's faster to just hit them?"); break;
           case 26: message.channel.send ("Don't panic, don't panic. You'll bite your tongue over the incantations."); break;
           case 27: message.channel.send ("Oh, I do wonder… the age of Gods is long past, and with what is soon to unfold, so too will the age of the Fae end. It is age of Man – and that will also reach its eventual conclusion.\nThe day will come when this star of ours ceases to rotate, after which we will establish ourselves in the heavens, beginning the age of the Will.\nThose incapable of volition without a frame of fresh and blood will be left behind in time. And yet… I wonder why I find myself so often mingled with humanity."); break;
           case 28: message.channel.send ("I survive by eating dreams, and while I love to see reveries of hope and joy, nightmares are both easier to find and much more filling.\nIt is far more difficult to subsist on the former – not to mention certainly raising the hurdle for the dreamer here we are.");break;
           case 29: message.channel.send ("Good things come to those who wait! One step forward, and two steps  back!"); break;
           case 30: message.channel.send ("You know how they say.... Something, somethjing... \"helping other...\" Yeah! It's good... I think"); break;
           case 31: message.channel.send ("You can call me \"The Amazing Merlin the Great.\""); break;
        //    case 32: message.channel.send (""); break;
        //    case 33: message.channel.send (""); break;
         }
        }
    }
