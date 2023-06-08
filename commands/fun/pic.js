const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('pic')
    .setDescription('Return users profile picture.'),
    async execute(interaction) {
        // at the top of your file
        const { EmbedBuilder } = require('discord.js');

        // inside a command, event listener, etc.
            const embed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Profile picture')
            .setImage(interaction.user.avatarURL())
            .setTimestamp()
            .setFooter({ text: interaction.user.username, iconURL: interaction.user.avatarURL() });
        // interaction.user is the object representing the User who ran the command
        // interaction.member is the GuildMember object, which represents the user in the specific guild
        await interaction.reply({ embeds: [embed] });

    },
};

