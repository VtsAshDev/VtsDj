# VtsDJ 🎧

Bot de música para Discord usando [DisTube](https://distube.js.org/), tocando músicas do YouTube com suporte a comandos slash.

## 📦 Tecnologias usadas

- [Discord.js v14](https://discord.js.org/)
- [DisTube](https://distube.js.org/)
- [@distube/yt-dlp](https://www.npmjs.com/package/@distube/yt-dlp)
- [dotenv](https://www.npmjs.com/package/dotenv)

## 🚀 Funcionalidades

- Comando `/play`: toca músicas do YouTube (por nome ou link)
- Entra e sai automaticamente do canal de voz
- Eventos de feedback no chat (`tocando agora`, `adicionada à fila`, `erro`)

## 📁 Estrutura

```
VtsDJ/
├── commands/
│   └── play.js            # comando /play
├── events/
│   ├── interactionCreate.js
│   └── ready.js
├── index.js               # arquivo principal do bot
├── deploy-commands.js     # script de deploy dos comandos
├── .env                   # token do bot
└── package.json
```

## 🔧 Como usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/VtsDJ.git
   cd VtsDJ
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie um arquivo `.env` com o token do seu bot:
   ```env
   DISCORD_TOKEN=seu_token_aqui
   ```

4. Registre os comandos (roda uma vez):
   ```bash
   node deploy-commands.js
   ```

5. Inicie o bot:
   ```bash
   node index.js
   ```

## 🛠️ To-do

- Comandos: pause, resume, skip, stop
- Suporte a playlists
- Reação a mensagens com emojis de controle

---

Feito por Vitor 💻