const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('play')
    .setDescription('Toca uma música (YouTube, Spotify, etc)')
    .addStringOption(option =>
      option.setName('query')
        .setDescription('URL ou nome da música')
        .setRequired(true)
    ),

  async execute(interaction) {
    console.log('Comando /play recebido');

    const query = interaction.options.getString('query');
    const voiceChannel = interaction.member.voice.channel;

    if (!voiceChannel) {
      console.log('Usuário não está em canal de voz');
      return interaction.reply({ content: 'Você precisa estar em um canal de voz.', ephemeral: true });
    }

    if (!query || query.trim().length === 0) {
      console.log('Query inválida');
      return interaction.reply({ content: 'Você precisa digitar o nome da música ou o link.', ephemeral: true });
    }

    try {
      console.log(`Tentando tocar a música: ${query}`);

      await interaction.deferReply({ ephemeral: false });
      await interaction.client.distube.play(voiceChannel, query, {
        textChannel: interaction.channel,
        member: interaction.member,
      });
      console.log('Música tocando ou adicionada na fila');

      await interaction.editReply(`🔍 Buscando e tocando: \`${query}\``);
    } catch (err) {
      console.error('Erro ao tocar música:', err);
      if (interaction.deferred || interaction.replied) {
        await interaction.editReply('❌ Ocorreu um erro ao tentar tocar a música.');
      } else {
        await interaction.reply('❌ Ocorreu um erro ao tentar tocar a música.');
      }
    }
  }
};
