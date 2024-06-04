const { ActivityType } = require("discord.js");
const mongoose = require("mongoose");
const mongoURl = process.env.mongoURL

module.exports = {
    name: "ready",
    once: true,
    async execute(client) {

        client.user.setActivity({
            name: "Streaming Status!",
            type: ActivityType.Streaming,
            url: "https://www.twitch.tv/discord"
        });

        console.log("I'm Online!");

        if(!mongoURL) return;

        await mongoose.connect(mongoURl || '', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        if(mongoose.connect) {
            console.log('I have connected to the database!');
        } else {
            console.log('I cannot connect to the database right now...');
        }
        
    }
}