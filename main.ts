import * as fs from 'fs'

const json = fs.existsSync('api.json') ? JSON.parse(
    fs.readFileSync('api.json', 'utf8')) :
    await fetch('https://github.com/PaulSonOfLars/telegram-bot-api-spec/raw/main/api.min.json').then(e => e.json())

if (!fs.existsSync('api.json')) fs.writeFileSync('api.json', JSON.stringify(json))

let exports = []
let module: string[] = []

const http = `let BASE = \`https://api.telegram.org/bot\`

/**
* Makes an HTTP GET request to the Telegram Bot API.
*/

async function get(url: string, args: { [key: string]: any } = {}): Promise<any> {
    let keys = Object.keys(args)?.filter(e => !!args[e])?.map((e) => {
        let value

        if (typeof args[e] === 'string') value = args[e]
        else encodeURI(JSON.stringify(args[e]))

        return \`\${e}=\${value}\`
    })

    return await fetch(\`\${BASE}\${url}?\` + keys?.join('&')).then((res) => res.json())
}

async function login(token: string): Promise<void> {
    BASE += \`\${token}/\`
}`

const parseType = ((e) => {
    const types = {
        'String': 'string',
        'Integer': 'number',
        'Float': 'number',
        'Boolean': 'boolean'
    }

    let x = e
    let count = 0
    while ((x.startsWith('Array of ') | (count++ & 0)) && count < 10) x = x.substring('Array of '.length)

    return `${new Array(count).fill('Array<').join('')}${types[x] ?? x}${new Array(count).fill('>').join('')}`
})

console.log('init passed')

let methods = Object.keys(json.methods).map(j => {
    let name = j
    let data = json.methods[name]
    if(!data.fields) data.fields = []

    let returns = data.returns.map(e => parseType(e)).join(' | ')
    let fields = data.fields.sort((x, y) => Number(y.required) - Number(x.required)).map(e => `    ${e.name}${e.required ? '' : '?'}: ${e.types.map(e => parseType(e)).join(' | ')}`)

    return `/**
 * Function: ${name}
${data.description.map(e => ` * ${e}`).join('\n')}
 * 
 * Read more: ${data.href}
${data.fields.map(e => ` * @param {${e.types.map(e => parseType(e)).join(' | ')}} ${e.name} ${e.description}`).join('\n')}
 * @returns {Promise<${returns}>}
 */
async function ${name}(
${fields.join(',\n')}
): Promise<${returns}> {
    return await get('${name}', {
${data.fields.map(e => `        ${e.name}`).join(',\n')}
    })
}`.replaceAll('\n\n', '').replaceAll(', {    }', '')
})

console.log('methods passed')

let types = Object.keys(json.types).map((j, i) => {
    let name = j
    let data = json.types[j]
    if(!data.fields) data.fields = []

    let fields = data.fields.sort((x, y) => Number(y.required) - Number(x.required))
        .map(e => `    /* ${e.description} */
    ${e.name}${e.required ? '' : '?'}: ${e.types.map(e => parseType(e)).join(' | ')}`)

    return `/**
 * Interface: ${name}
${data.description.map(e => ` * ${e}`).join('\n')}
 * 
 * Read more: ${data.href}
 */
interface ${name} {
${fields.join('\n')}
}`
})

console.log('types passed')

let output = `/* Telegram API wrapper for Javascript
 * By MinecraftPublisher
 * Auto-Scraped from https://core.telegram.org/bots/api
 */

${http}

${types.join('\n\n')}

${methods.join('\n\n')}

export default { ${Object.keys(json.methods).join(', ')} }`

fs.writeFileSync('api.ts', output)

export { }