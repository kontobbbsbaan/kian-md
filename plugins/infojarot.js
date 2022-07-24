let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI OWNER* ´ˎ˗
│ ✎ _Nama_ : kian
│ ✎ _Sekolah_ : Smk
│ ✎ _Umur_ : 15
│ ✎ _Asal_ : Jawa timur
│ ✎ _Status_ : Turu deck
│ ✎ _WhatsApp_ :
│    wa.me/6283845409710
╰───────────────────
`.trim(), m)
}

handler.help = ['infojarot']
handler.tags = ['main', 'utama']
handler.command = /^(infojarot)$/i

handler.exp = 150

module.exports = handler
