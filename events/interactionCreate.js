module.exports = {
  name: 'interactionCreate',
  async execute(interaction) {
    if (!interaction.isChatInputCommand()) return;

    const client = interaction.client;
    const command = client.commands.get(interaction.commandName);
    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      if (interaction.replied || interaction.deferred) {
        await interaction.editReply({ content: 'Erro ao executar comando.', ephemeral: true });
      } else {
        await interaction.reply({ content: 'Erro ao executar comando.', ephemeral: true });
      }
    }
  }
};
