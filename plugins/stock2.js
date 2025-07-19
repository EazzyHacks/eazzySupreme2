let handler = async (m, { conn }) => {
    let chat = global.db.data.chats[m.chat]
    if (chat.setstock2) {
        let stock2 = chat.setstock2;
        await conn.reply(m.chat, stock2, m);
    } else {
        m.reply(`> Actualiza Tu Lista De Precios Con .setstock2`);
    }
}
handler.command = ['stock2'];
handler.help = ["stock2 < Stock Seguidores >"];
handler.tags = ["ventas"];
handler.group = true;
handler.botAdmin = false;

export default handler;
