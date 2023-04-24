import { newBot } from './api'

const bot = newBot('TOKEN')
const owner = 102380910 // random id

await bot.sendMessage(owner, 'Hello!')