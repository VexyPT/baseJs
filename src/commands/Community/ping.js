const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("This is a test command!"),
    async execute(interaction, client) {
        await interaction.reply({
            content: `Client ping: ${client.ws.ping}ms`,
            ephemeral: false
        })
    }
}