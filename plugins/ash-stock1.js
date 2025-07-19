let handler = async (m, { conn, text, isROwner, isOwner }) => {
    if (text) {
        global.db.data.chats[m.chat].setstock1 = text
        conn.reply(m.chat, '> Tu Lista a Sido Actualizada Correctamente Pon .stock1 Para Ver La Lista 🥖', m)
    } else throw `> Para Actualizar Tu Lista Debes Poner Lo Siguiente .setstock1 + Tu Lista\n> Ejemplo :\n.setstock1 1 bot = 5soles`
}

handler.command = ['setstock1']
handler.group = true;
handler.admin = true;
handler.botAdmin = false;
export default handler
