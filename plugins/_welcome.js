
import { WAMessageStubType} from "@whiskeysockets/baileys";
import fetch from "node-fetch";

export async function before(m, { conn, groupMetadata}) {
  try {
    if (!m.messageStubType ||!m.isGroup) return true;

    const fkontak = {
      key: {
        participants: "0@s.whatsapp.net",
        remoteJid: "status@broadcast",
        fromMe: false,
        id: "Halo"
},
      message: {
        contactMessage: {
          vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${conn.user.jid.split('@')[0]}:${conn.user.jid.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
}
},
      participant: "0@s.whatsapp.net"
};

    const chat = global.db?.data?.chats?.[m.chat];
    if (!chat ||!chat.bienvenida) return true;

    let userJid;
    switch (m.messageStubType) {
      case WAMessageStubType.GROUP_PARTICIPANT_ADD:
      case WAMessageStubType.GROUP_PARTICIPANT_REMOVE:
        userJid = m.messageStubParameters?.[0];
        break;
      case WAMessageStubType.GROUP_PARTICIPANT_LEAVE:
        userJid = m.key.participant;
        break;
      default:
        return true;
}

    if (!userJid) return true;

    const user = `@${userJid.split("@")[0]}`;
    const groupName = groupMetadata.subject;
    const groupDesc = groupMetadata.desc || "📜 Sin descripción disponible";
    const imgBuffer = await fetch("https://cdn-sunflareteam.vercel.app/images/fe2072569a.jpg").then(res => res.buffer());

    if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_ADD) {
      const welcomeText = `🎉 *¡HOLA ${user}!* 🎉\n\nBienvenido/a a *${groupName}*.\n\n📚 *Sobre nosotros:*\n_${groupDesc}_\n\n🌟 ¡Esperamos que disfrutes tu estancia!`;

      await conn.sendMessage(m.chat, {
        image: imgBuffer,
        caption: welcomeText,
        mentions: [userJid]
}, { quoted: fkontak});

      try {
        await conn.sendMessage(m.chat, {
          audio: { url: "https://qu.ax/sjtTL.opus"},
          mimetype: "audio/ogg; codecs=opus",
          ptt: false
}, { quoted: fkontak});
} catch (err) {
        console.error("❌ Error al enviar el audio de bienvenida:", err);
}
}

    if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_LEAVE) {
      const goodbyeText = `🚶‍♂️ *¡Adiós ${user}!* 😔\n\nGracias por haber formado parte de *${groupName}*. ¡Vuelve cuando quieras!`;

      await conn.sendMessage(m.chat, {
        image: imgBuffer,
        caption: goodbyeText,
        mentions: [userJid]
}, { quoted: fkontak});

      try {
        await conn.sendMessage(m.chat, {
          audio: { url: "https://qu.ax/LhbNi.opus"},
          mimetype: "audio/ogg; codecs=opus",
          ptt: false
}, { quoted: fkontak});
} catch (err) {
        console.error("❌ Error al enviar el audio de despedida:", err);
}
}

    if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_REMOVE) {
      const kickText = `🚨 *${user} ha sido expulsado del grupo* 🚨\n\nMantengamos un ambiente respetuoso en *${groupName}*`;

      await conn.sendMessage(m.chat, {
        image: imgBuffer,
        caption: kickText,
        mentions: [userJid]
}, { quoted: fkontak});

      try {
        await conn.sendMessage(m.chat, {
          audio: { url: "https://qu.ax/LhbNi.opus"},
          mimetype: "audio/ogg; codecs=opus",
          ptt: false
}, { quoted: fkontak});
} catch (err) {
        console.error("❌ Error al enviar el audio de expulsión:", err);
}
}

} catch (error) {
    console.error("❌ Error general en la función de bienvenida/despedida:", error);
}
}