import { newBot } from './out/star'

const bot = newBot('TOKEN')
const owner = 102380910 // random id

await bot.sendMessage(owner, 'Hello!')