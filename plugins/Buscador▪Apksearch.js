//By ALBERTO9883 +50499698072

import { googleImage } from '@bochilteam/scraper'
import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, {text, usedPrefix, command, conn}) => {
if (!text) throw `*â ï¸ Ingrese el nombre de la apk o app que desea buscar.*`
const res = await googleImage(text)
let image = res.getRandom()
let link = image

let json = await fetch(`https://api-reysekha.herokuapp.com/api/download/apk?query=${text}&apikey=APIKEY`)
let jsons = await json.json()
let caption = `*â RESULTADOSð*\n`
for (let x of jsons.result) {
caption += `
*â¢ ð· Nombre:* *_${x.name}_*
*â¢ ð Url:* _${x.url}_
*â¢ ð¥ Linkdl:* _${x.dl_url}_
*â¢ ð Desc:* _${x.desc}_\nâââ
`}
await conn.sendFile(m.chat, link, 'error.mp3', caption, m)}

handler.tags = ['search']
handler.command = handler.help = ['apksearch']
handler.register = true
export default handler
