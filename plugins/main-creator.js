
import PhoneNumber from 'awesome-phonenumber';

async function handler(m, { conn}) {
  let numcreador = '51936994155';
  let ownerJid = numcreador + '@s.whatsapp.net';

  let name = await conn.getName(ownerJid) || 'Ash Developer';
  let about = (await conn.fetchStatus(ownerJid).catch(() => {}))?.status || '*💻 Creador Del Bot Eazzy Supreme Y Amante Del Desarrollo.*';
  let empresa = '✨ Eazzy Ventas ';
  let imagen = 'https://files.catbox.moe/mrtzyt.jpg';

  const caption = `
╔═══🔱 *INFORMACIÓN DEL CREADOR* 🔱═══╗
👩‍💻 *Nombre:* ${name}
📱 *Número:* wa.me/${numcreador}
📝 *Descripción:* ${about}
🏢 *Empresa:* ${empresa}
╚════════════════════════════════╝`.trim();

  await conn.sendMessage(m.chat, {
    image: { url: imagen},
    caption: caption
}, { quoted: m});
}

handler.help = ['owner'];
handler.tags = ['main'];
handler.command = ['owner', 'creator', 'creador', 'dueño'];

export default handler;
