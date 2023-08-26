# star - Automated telegram bot wrapper builder
This program scrapes the Telegram API and builds a bot client wrapper for you. The newest version of the wrapper is always uploaded on NPM, But you can build it yourself using `main.ts`.

## Documentation
Head over to [here](https://core.telegram.org/bots/api) for the documentation.

```ts
import { newBot } from '@agent_z/star'

const bot = newBot('your telegram bot token!')
const owner = 10000000 // Your telegram user id!

await bot.sendMessage(owner, 'Hello world!')
```