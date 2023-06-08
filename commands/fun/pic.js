const { SlashCommandBuilder } = require('discord.js');

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
        // at the top of your file
        const { EmbedBuilder } = require('discord.js');

        // inside a command, event listener, etc.
            const embed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle(`${target.username}'s profile picture`)
            .setImage(target.avatarURL())
            .setTimestamp()
            .setFooter({ text: `Küsis: ${interaction.user.username}`});
        // interaction.user is the object representing the User who ran the command
        // interaction.member is the GuildMember object, which represents the user in the specific guild
        await interaction.reply({ embeds: [embed] });

    },
};

