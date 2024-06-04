const { ApplicationCommandOptionType } = require("discord.js");
const userSchema = require("../../schemas/user.js");

module.exports = {
    data: {
        name: "coins",
        description: "coins test command",
        "integration_types": [0,1],
        "contexts": [0,1,2],
        options: [
            {
                name: "user",
                description: "select a user",
                type: ApplicationCommandOptionType.User
            }
        ]
    },
    async execute (interaction) {
        
        const { options } = interaction;

        const user = options.getUser("user") || interaction.user;

        let userDb = userSchema.findOne({
            id: user.id
        });
        if (!userDb) {
            userDb = userSchema.create({
                id: user.id
            });
            userDb.save();
        }

        const userCoins = userDb.coins;

        await interaction.reply({
            content: `${user} have \`${userCoins}\`💲`
        });


    }
}