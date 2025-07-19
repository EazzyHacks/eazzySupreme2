
import baileys from '@whiskeysockets/baileys';

const WAMessageStubType = baileys.default;

export async function before(m, { conn, participants, groupMetadata}) {
  if (!m.messageStubType ||!m.isGroup) return;

  const mikuContact = {
    key: {
      participants: '0@s.whatsapp.net',
      remoteJid: 'status@broadcast',
      fromMe: false,
      id: 'AEazzy Supreme 🐺'
},
    message: {
      contactMessage: {
        vcard: `BEGIN:VCARD
VERSION:3.0
N:Miku;Bot;;;
FN:AEazzy Supreme 🐺
item1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}
item1.X-ABLabel:Celular
END:VCARD`
}
},
    participant: '0@s.whatsapp.net'
};

  const chat = global.db.data.chats[m.chat];
  const usuario = participants.find(p => p.id === m.sender)?.name || `@${m.sender.split`@`[0]}`;
  const img = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || 'https://files.catbox.moe/xr2m6u.jpg';

  const eventos = {
    21: {
      mensaje: `🐺 𝗘𝗮𝘇𝘇𝘆 𝗕𝗼𝘁 𝗦𝘂𝗽𝗿𝗲𝗺𝗲𝘁 𝗔𝘃𝗶𝘀𝗮 🐺\n\n- 𝗡𝘂𝗲𝘃𝗼 𝗡𝗼𝗺𝗯𝗿𝗲 : ${m.messageStubParameters[0]}\n- 𝗨𝘀𝘂𝗮𝗿𝗶𝗼 : ${usuario}`,
      tipo: 'texto'
},
    22: {
      mensaje: `🐺 𝗘𝗮𝘇𝘇𝘆 𝗕𝗼𝘁 𝗦𝘂𝗽𝗿𝗲𝗺𝗲𝘁 𝗔𝘃𝗶𝘀𝗮 🐺\n\n𝗡𝘂𝗲𝘃𝗼 𝗙𝗼𝘁𝗼 𝗗𝗲𝗹 𝗚𝗿𝘂𝗽𝗼\n- 𝗨𝘀𝘂𝗮𝗿𝗶𝗼 : ${usuario}`,
      tipo: 'imagen',
      imagen: img
},
    23: {
      mensaje: `🐺 𝗘𝗮𝘇𝘇𝘆 𝗕𝗼𝘁 𝗦𝘂𝗽𝗿𝗲𝗺𝗲𝘁 𝗔𝘃𝗶𝘀𝗮 🐺\n\n 𝗡𝘂𝗲𝘃𝗼 𝗘𝗻𝗹𝗮𝗰𝗲 𝗗𝗲𝗹 𝗚𝗿𝘂𝗽𝗼\n- 𝗨𝘀𝘂𝗮𝗿𝗶𝗼 : ${usuario}`,
      tipo: 'texto'
},
    24: {
      mensaje: `🐺 𝗘𝗮𝘇𝘇𝘆 𝗕𝗼𝘁 𝗦𝘂𝗽𝗿𝗲𝗺𝗲𝘁 𝗔𝘃𝗶𝘀𝗮 🐺\n\n- 𝗨𝘀𝘂𝗮𝗿𝗶𝗼 : ${usuario}\n- 𝗡𝘂𝗲𝘃𝗮 𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝗰𝗶𝗼𝗻 𝗗𝗲𝗹 𝗚𝗿𝘂𝗽𝗼 : ${m.messageStubParameters?.[0] || 'Sin descripción'}`,
      tipo: 'texto'
},
    25: {
      mensaje: `🐺 𝗘𝗮𝘇𝘇𝘆 𝗕𝗼𝘁 𝗦𝘂𝗽𝗿𝗲𝗺𝗲𝘁 𝗔𝘃𝗶𝘀𝗮 🐺\n\n- 𝗨𝘀𝘂𝗮𝗿𝗶𝗼 : ${usuario}\n- 𝗔𝗷𝘂𝘀𝘁𝗲𝘀 𝗗𝗲𝗹 𝗚𝗿𝘂𝗽𝗼 : ${m.messageStubParameters[0] === 'on'? '𝗦𝗼𝗹𝗼 𝗔𝗱𝗺𝗶𝗻𝗶𝘀𝘁𝗿𝗮𝗱𝗼𝗿𝗲𝘀': '𝗦𝗼𝗹𝗼 𝗠𝗶𝗲𝗺𝗯𝗿𝗼𝘀'}`,
      tipo: 'texto'
},
    26: {
      mensaje: `🐺 𝗘𝗮𝘇𝘇𝘆 𝗕𝗼𝘁 𝗦𝘂𝗽𝗿𝗲𝗺𝗲𝘁 𝗔𝘃𝗶𝘀𝗮 🐺\n\n- 𝗨𝘀𝘂𝗮𝗿𝗶𝗼 : ${usuario}t\n- 𝗘𝘀𝘁𝗮𝗱𝗼 𝗗𝗲𝗹 𝗚𝗿𝘂𝗽𝗼 : ${m.messageStubParameters[0] === 'on'? '𝗚𝗿𝘂𝗽𝗼 𝗖𝗲𝗿𝗿𝗮𝗱𝗼 🔒': '𝗚𝗿𝘂𝗽𝗼 𝗔𝗯𝗶𝗲𝗿𝘁𝗼 🔓'}`,
      tipo: 'texto'
},
    29: {
      mensaje: `🐺 𝗘𝗮𝘇𝘇𝘆 𝗕𝗼𝘁 𝗦𝘂𝗽𝗿𝗲𝗺𝗲𝘁 𝗔𝘃𝗶𝘀𝗮 🐺\n\n- 𝗡𝘂𝗲𝘃𝗼 𝗔𝗱𝗺𝗶𝗻𝗶𝘀𝘁𝗿𝗮𝗱𝗼𝗿 : ${participants.find(p => p.id === m.messageStubParameters[0])?.name || `@${m.messageStubParameters[0].split`@`[0]}`} \n- 𝗨𝘀𝘂𝗮𝗿𝗶𝗼 : ${usuario}`,
      tipo: 'texto'
},
    30: {
      mensaje: `🐺 𝗘𝗮𝘇𝘇𝘆 𝗕𝗼𝘁 𝗦𝘂𝗽𝗿𝗲𝗺𝗲𝘁 𝗔𝘃𝗶𝘀𝗮 🐺\n\n- 𝗠𝗲𝗻𝗼𝘀 𝟭 𝗔𝗱𝗺𝗶𝗻𝗶𝘀𝘁𝗿𝗮𝗱𝗼𝗿 : ${participants.find(p => p.id === m.messageStubParameters[0])?.name || `@${m.messageStubParameters[0].split`@`[0]}`} \n- 𝗨𝘀𝘂𝗮𝗿𝗶𝗼 : ${usuario}`,
      tipo: 'texto'
}
};

  if (chat.detect && eventos[m.messageStubType]) {
    const evento = eventos[m.messageStubType];
    if (evento.tipo === 'texto') {
      await conn.sendMessage(m.chat, { text: evento.mensaje, mentions: [m.sender]}, { quoted: mikuContact});
} else if (evento.tipo === 'imagen') {
      await conn.sendMessage(m.chat, { image: { url: evento.imagen}, caption: evento.mensaje, mentions: [m.sender]}, { quoted: mikuContact});
}
}
}
