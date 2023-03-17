const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("sertanejo")
        .setDescription("Playlist Sertaneja"),
        
    async execute(interaction) {
            await interaction.reply("https://open.spotify.com/playlist/2d2N2IBAdia0EwWndZdtCP?si=625b015269674ab2")
    }

}

