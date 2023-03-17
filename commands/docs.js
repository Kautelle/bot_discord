const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, Component } = require("discord.js")

const row = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
            .setCustomID("select")
            .setPlaceholder("Nenhuma linguagem selecionada")
            .addOptions({
                label: "javascript",
                description: "Veja a documenta��o de Javascript",
                value: "javascript"
            },
                {
                    label: "python",
                    description: "Veja a documenta��o de Python",
                    value: "python"
                },
                {
                    label: "C#",
                    description: "Veja a documenta��o de C#",
                    value: "csharp"
                },
                {
                    label: "discord.js",
                    description: "Veja a documenta��o de Discord.js",
                    value: "discordjs"
                }
            )
    )

module.exports = {
    data: new SlashCommandBuilder()
        .setName("docs")
        .setDescription("Acesse a documenta��o da tecnologia que quiser"),

    async execute(interaction) {
        await interaction.reply({ content: "Selecione uma das tecnologias abaixo:", components: [row] })
    }

}

