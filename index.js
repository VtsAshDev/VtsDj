require('dotenv').config();
const fs = require('node:fs');
const path = require('node:path');

const { Client, GatewayIntentBits, Collection } = require('discord.js');
const { DisTube } = require('distube');
const { YtDlpPlugin } = require('@distube/yt-dlp');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMessages
  ]
});

client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  if ('data' in command && 'execute' in command) {
    client.commands.set(command.data.name, command);
    console.log(`Comando carregado: ${command.data.name}`);
  } else {
    console.log(`[AVISO] Comando em ${file} está faltando "data" ou "execute"`);
  }
}

client.distube = new DisTube(client, {
  emitNewSongOnly: true,
  plugins: [new YtDlpPlugin()]
});

client.distube
  .on('playSong', (queue, song) => {
    queue.textChannel.send(`▶️ Tocando agora: **${song.name}**`);
  })
  .on('addSong', (queue, song) => {
    queue.textChannel.send(`➕ Adicionada à fila: **${song.name}**`);
  })
  .on('error', (channel, error) => {
    console.error(error);
    if (channel) channel.send('❌ Erro: ' + error.message);
  });

client.once('ready', () => {
  console.log(`Bot logado como ${client.user.tag}`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

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
});

client.login(process.env.DISCORD_TOKEN);
