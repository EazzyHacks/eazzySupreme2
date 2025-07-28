import fetch from "node-fetch";

const handler = async (m, { isOwner, isAdmin, conn, text, participants, args}) => {
  const chat = global.db.data.chats[m.chat] || {};
  const emoji = chat.emojiTag || '🤖';

  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw new Error('You do not have permission to use this command.');
}

  const customMessage = args.join(' ');
  const groupMetadata = await conn.groupMetadata(m.chat);
  const groupName = groupMetadata.subject;

 const countryFlags = {
  '1': '🇺🇸', '44': '🇬🇧', '33': '🇫🇷', '49': '🇩🇪', '39': '🇮🇹', '81': '🇯🇵',
  '82': '🇰🇷', '86': '🇨🇳', '7': '🇷🇺', '91': '🇮🇳', '61': '🇦🇺', '64': '🇳🇿',
  '34': '🇪🇸', '55': '🇧🇷', '52': '🇲🇽', '54': '🇦🇷', '57': '🇨🇴', '51': '🇵🇪',
  '56': '🇨🇱', '58': '🇻🇪', '502': '🇬🇹', '503': '🇸🇻', '504': '🇭🇳', '505': '🇳🇮',
  '506': '🇨🇷', '507': '🇵🇦', '591': '🇧🇴', '592': '🇬🇾', '593': '🇪🇨', '595': '🇵🇾',
  '596': '🇲🇶', '597': '🇸🇷', '598': '🇺🇾', '53': '🇨🇺', '20': '🇪🇬', '972': '🇮🇱',
  '90': '🇹🇷', '63': '🇵🇭', '62': '🇮🇩', '60': '🇲🇾', '65': '🇸🇬', '66': '🇹🇭',
  '31': '🇳🇱', '32': '🇧🇪', '30': '🇬🇷', '36': '🇭🇺', '46': '🇸🇪', '47': '🇳🇴',
  '48': '🇵🇱', '421': '🇸🇰', '420': '🇨🇿', '40': '🇷🇴', '43': '🇦🇹', '373': '🇲🇩'
};

  const getCountryFlag = (id) => {
    const phoneNumber = id.split('@')[0];
    if (phoneNumber.startsWith('1')) return '🇺🇸';

    let prefix = phoneNumber.substring(0, 3);
    if (!countryFlags[prefix]) {
      prefix = phoneNumber.substring(0, 2);
}

    return countryFlags[prefix] || '🏳️‍🌈';
};

  let messageText = `*╭───── •* *Eazzy Bot Supreme* *• ─────╮*\n*├⭓ 🐺 Bot :* https://chat.whatsapp.com/L6yIwe8qZVpGOYnrz8jMxU?mode=ac_t\n*├⭓ 🛡 Grupo :* ${groupName}\n*├⭓ 🗣 Integrantes :* ${participants.length}\n*├⭓ ✨Texto :*${customMessage}\n*├*\n`;
  for (const mem of participants) {
    messageText += `*├⭓${getCountryFlag(mem.id)}* *@${mem.id.split('@')[0]}*\n`;
}
  messageText += `*╰───── •  ☁ • ─────╯*`;

  const imageUrl = 'https://files.catbox.moe/mrtzyt.jpg';
  const audioUrl = 'https://files.catbox.moe/4i92ne.mp3';

  const fkontak = {
    key: {
      remoteJid: m.chat,
      fromMe: false,
      id: m.key.id
},
    message: {
      contactMessage: {
        displayName: conn.getName(m.sender),
        vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:${conn.getName(m.sender)}\nTEL;type=WA:${m.sender}\nEND:VCARD`
}
}
};

  // Enviar imagen con mención
  await conn.sendMessage(m.chat, {
    image: { url: imageUrl},
    caption: messageText,
    mentions: participants.map(a => a.id)
}, { quoted: fkontak});

  // Enviar audio como nota de voz
  await conn.sendMessage(m.chat, {
    audio: { url: audioUrl},
    mimetype: 'audio/mp4',
    ptt: true
}, { quoted: fkontak});
};

handler.help = ['todos'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|marcar|todos|invocación)$/i;
handler.admin = false;
handler.group = true;

export default handler;
