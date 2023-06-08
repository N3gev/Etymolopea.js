const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('pic')
    .setDescription('Return users profile picture.')
    .addUserOption(option =>
        option
        .setName('target')
        .setDescription('Return the user')
        .setRequired(false)),
    async execute(interaction) {
        const target = interaction.options.getUser('target') ?? interaction.user;

        const embed = new EmbedBuilder()
            .setColor(Math.floor(Math.random()*16777215).toString(16).padStart(6, '0'))
            .setTitle(`${target.username}'s profile picture`)
            .setImage(target.displayAvatarURL({ size: 2048, dynamic: true }))
            .setTimestamp()
            .setFooter({ 
                text: interaction.user.username, 
                iconURL: interaction.user.displayAvatarURL({size:2048, dynamic: true})
            });

        await interaction.reply({ embeds: [embed] });

    },
};

