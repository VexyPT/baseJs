module.exports = {
    data: {
        name: "userinstall",
        description: "User install command test",
        "integration_types": [0,1],
        "contexts": [0,1,2],
    },
    async execute (interaction) {
        await interaction.reply("Hello World");
    }
}