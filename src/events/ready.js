const { ActivityType } = require("discord.js");

module.exports = {
    name: "ready",
    once: true,
    async execute(client) {

        client.user.setActivity({
            name: "Streaming Status!",
            type: ActivityType.Streaming,
            url: "https://www.twitch.tv/discord"
        });

        console.log("I'm Online!")

    }
}