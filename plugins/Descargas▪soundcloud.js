import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
if (!text) throw `*[āššššā] šøš½š¶šš“šš“ š“š» š½š¾š¼š±šš“ š³š“ š°š»š¶šš½š° š²š°š½š²šøš¾š½ š° š±ššš²š°š*`
try {
let res = await fetch(`https://hadi-api.herokuapp.com/api/soundcloud/play?query=${text}`)
let json = await res.json()
let shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${json.result.download}`)).text()
let soundcloudt = `āāāāā¬ šššššššššš ā­āāāā¾ā
ā¬
āā£āØ *ššøššš»š¾:* ${json.result.title}
ā“
ā¬
āā£š *ššš» š³šøšš“š²šš¾:* ${shortUrl}\nā“\n\n*- š“ššššššš šššššš...*\n\n 'ššš¦š®š«šš¢ ššØš­`
conn.sendFile(m.chat, json.result.thumbnail, '', soundcloudt, m)
conn.sendFile(m.chat, json.result.download, 'error.mp3', null, m, false, { contextInfo: { externalAdReply: { showAdAttribution: false, mediaType: 2, title: `${json.result.title}`, body: global.botname, sourceUrl: `${shortUrl}`, thumbnailUrl: json.result.thumbnail }}})
/*conn.sendMessage(m.chat, { audio: { url: json.result.download }, mimetype: "audio/mp4", fileName: title + '.mp3', quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply:{
showAdAttribution: false,
title: `${json.result.title}`,
body: ``,
mediaType: 2, 
sourceUrl: `${shortUrl}`,
thumbnailUrl: json.result.thumbnail}}}, { quoted: m })*/
} catch (e) {
throw '*[āššššā] š“ššš¾š, š½š¾ šš“ š»š¾š¶šš¾ š±ššš²š°š š»š° š²š°š½š²šøš¾š½ š¾ š»š° šæš°š¶šøš½š° š³š“ š°ššš³š° šæš°šš° š±ššš²š°š š»š° š²š°š½š²šøš¾š½ š“ššš° š²š°šøš³š°, šæš¾š šµš°šš¾š ššš“š»šš° š° šøš½šš“šš½šš°šš»š¾ š¼š°š šš°šš³š“*'
}}
handler.command = /^(spotify|music|soundcloud|cover)$/i
export default handler