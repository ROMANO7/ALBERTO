
import yts from 'yt-search'
import fs from 'fs'

let handler = async (m, {conn, text }) => {
  if (!text) throw 'β οΈ *_Que quieres que busque en YouTube?_*'
  await conn.reply(m.chat, global.wait, m)
  let results = await yts(text)
  let tes = results.all
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
π β *${v.title}*
π β *Link* : ${v.url}
β± β *DuraciΓ³n* : ${v.timestamp}
π₯ β *Subido :* ${v.ago}
π β *Vistas:* ${v.views}`}}).filter(v => v).join('\n\nββββββββ\n\n')
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m)
}
handler.help = ['ytsearch *<texto>*'] 
handler.tags = ['search']
handler.command = ['ytsearch', 'yts'] 
handler.register = true

export default handler
