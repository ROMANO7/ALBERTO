let handler = async (m, { command, text }) => m.reply(`
*âï¸ ððððððððð âï¸*
  
*â Pregunta:* ${text}
*â Respuesta:* ${['Si','Tal vez sÃ­','Posiblemente','Probablemente no','No','Imposible'].getRandom()}
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['pregunta *<texto>*']
handler.tags = ['fun']
handler.command = /^pregunta|preguntas|apakah$/i
handler.register = true

export default handler
