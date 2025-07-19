let handler = async (m, { conn }) => {
    let chat = global.db.data.chats[m.chat]
    if (chat.setstock1) {
        let stock1 = chat.setstock1;
        await conn.reply(m.chat, stock1, m);
    } else {
        m.reply(`> Actualiza Tu Lista De Precios Con .setstock1`);
    }
}
handler.command = ['stock1'];
handler.help = ["stock1 < stock bot >"];
handler.tags = ["ventas"];
handler.group = true;
handler.admin = true;
handler.botAdmin = false;

export default handler;
