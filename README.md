# VtsDj 🎷

Um bot de música para Discord feito com [Discord.js](https://discord.js.org) e [DisTube](https://distube.js.org), com suporte a YouTube, Spotify, e Deezer via `yt-dlp`. Criado para tocar músicas em canais de voz usando comandos de barra (`/play`, `/stop`, etc).

## 🚀 Funcionalidades

* Comando `/play` para tocar músicas
* Integração com YouTube
* Suporte a fila de músicas
* Mensagens de feedback no chat
* Uso de `@distube/yt-dlp` como plugin para busca

## 📁 Estrutura do Projeto

```bash
.
├── commands/
│   └── play.js         # Comando para tocar músicas
├── events/
│   ├── ready.js        # Evento de inicialização
│   └── interactionCreate.js  # Handler de interações
├── index.js            # Arquivo principal do bot
├── deploy-commands.js  # Script para registrar comandos
├── .env                # Variáveis de ambiente (token, IDs)
```

## 🔧 Requisitos

* Node.js 18+
* Uma conta de bot no Discord
* Token de bot válido

## 🛠️ Como rodar o projeto

```bash
git clone https://github.com/seuusuario/VtsDj.git
cd VtsDj
npm install
```

Crie um arquivo `.env` na raiz com o seguinte conteúdo:

```env
DISCORD_TOKEN=seu_token_aqui
CLIENT_ID=seu_client_id_aqui
GUILD_ID=seu_guild_id_aqui
```

### Explicação das variáveis

* `DISCORD_TOKEN`: token do bot gerado no Discord Developer Portal. Ele permite autenticar o bot para que ele consiga se conectar ao gateway do Discord.
* `CLIENT_ID`: ID da aplicação do bot, usado para registrar comandos e gerar URLs de convite.
* `GUILD_ID`: ID do servidor de testes onde os comandos serão registrados. Isso é útil durante o desenvolvimento para que os comandos apareçam instantaneamente sem precisarem de propagação global (que leva 1h+).

Em seguida, registre os comandos no Discord:

```bash
node deploy-commands.js
```

Depois, execute o bot:

```bash
node index.js
```

---

## 🤖 Como criar seu bot no Discord

Para rodar esse bot, você precisa criar uma aplicação no [Discord Developer Portal](https://discord.com/developers/applications) e obter três dados importantes: `DISCORD_TOKEN`, `CLIENT_ID` e `GUILD_ID`.

### 🔧 Passo a passo:

1. Acesse: [https://discord.com/developers/applications](https://discord.com/developers/applications)
2. Clique em **“New Application”**
   Dê um nome para sua aplicação e clique em **Create**.
3. Vá para a aba **“Bot”** no menu lateral.

   * Clique em **“Add Bot”**
   * Confirme clicando em **Yes, do it!**
4. Copie o **Token do Bot**

   * Clique em **“Reset Token”** se for a primeira vez
   * Copie e salve o valor como `DISCORD_TOKEN` no seu arquivo `.env`.
5. Vá para a aba **“OAuth2 > General”**

   * Copie o **Client ID** e salve como `CLIENT_ID`.
6. Adicione o bot ao seu servidor:

   * Vá em **OAuth2 > URL Generator**
   * Marque as opções:

     * **Scopes**: `bot`, `applications.commands`
     * **Bot Permissions**: `Send Messages`, `Connect`, `Speak`, `Use Slash Commands`
   * Copie o link gerado e abra no navegador para convidar o bot ao seu servidor.
7. Pegue o ID do servidor (GUILD\_ID):

   * No Discord, ative o **Modo de Desenvolvedor** em Configurações > Avançado
   * Clique com o botão direito no nome do servidor e selecione **“Copiar ID”**
   * Salve como `GUILD_ID` no `.env`

---

## 📄 Licença

MIT
