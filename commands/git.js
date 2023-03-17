const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

const exampleEmbed = new EmbedBuilder()
	.setColor("Aqua")
	.setTitle('Comandos do Git')
	.setURL('https://gist.github.com/leocomelli/2545add34e4fec21ec16')
	.setAuthor({ name: 'Studify', iconURL: 'https://preview.redd.it/p5f98uef7cy51.png?auto=webp&s=cd570a7d84d0874ad5a20e066baf3103bd2f2a01' })
	.setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQv4HuLgbOQeXFwLHbvxPNlkyigPduO8E-hw&usqp=CAU')
	.addFields(
		{ name: '\u200B', value: '\u200B' },
		{ name: '$ git init [nome-do-projeto]', value: 'Cria um novo reposit�rio local com um nome especificado', inline: true },
		{ name: '$ git clone [url]', value: 'Baixa um projeto e seu hist�rico de vers�o inteiro', inline: true },
		{ name: '$ git stash', value: 'Armazena temporariamente todos os arquivos monitorados modificados', inline: true },
		{ name: '\u200B', value: '\u200B' },
		{ name: '$ git status', value: 'Revise edi��es e crie uma transa��o de commit', inline: true },
		{ name: '$ git add [arquivo]', value: 'Faz o snapshot de um arquivo na prepara��o para versionamento', inline: true },
		{ name: '$ git commit -m "[mensagem]"', value: 'Grava o snapshot permanentemente do arquivo no hist�rico de vers�o', inline: true },
		{ name: '\u200B', value: '\u200B' },
		{ name: '$ git branch', value: 'Lista todos os branches locais no reposit�rio atual', inline: true },
		{ name: '$ git branch [nome-branch]', value: 'Cria uma nova branch', inline: true },
		{ name: '$ git switch -c [nome-branch]', value: 'Muda para a branch especificada e atualiza o diret�rio de trabalho', inline: true },
		{ name: '\u200B', value: '\u200B' },
		{ name: '$ git merge [nome-branch]', value: 'Combina o hist�rico da branch especificada a branch atual', inline: true },
		{ name: '$ git push [alias] [branch]', value: 'Envia todos os commits do branch local para o GitHub', inline: true },
		{ name: '$ git pull', value: 'Baixa o hist�rico e incorpora as mudan�as', inline: true },
	)
	
	.setTimestamp()
	.setFooter({ text: 'Studify', iconURL: 'https://preview.redd.it/p5f98uef7cy51.png?auto=webp&s=cd570a7d84d0874ad5a20e066baf3103bd2f2a01' });



module.exports = {
    data: new SlashCommandBuilder()
        .setName("git")
        .setDescription("Relembrar comandos do Git"),

    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed] })
    }
}