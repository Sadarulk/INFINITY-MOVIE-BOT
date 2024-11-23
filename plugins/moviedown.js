const { fetchJson } = require('../lib/functions');
const config = require('../config');
const { cmd, commands } = require('../command');

const apilink = 'https://www.dark-yasiya-api.site';

cmd({
    pattern: "moviedl",
    desc: "download movies",
    category: "movie",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        const blockGrp = config.BLOCK_JID
if(blockGrp.includes(from)) return

const premUsers = ['94701814946', '94771709545', '94741545187'];
        
        // Check if the user is premium

        if (!premUsers.includes(senderNumber)) {
            return reply(
                "*_You don't have access to download movies._*"
            );
        }
        
        // Validate input

        if(!q && !q.startsWith("https://sinhalasub.lk/")) {

            return reply("*_Please give me a movie name or sinhalasub.lk url._*");
        }


        // Fetch movie data

        if(q.startsWith("https://sinhalasub.lk/")) {

        const mv = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${q}`)

        // Filter download links based on the quality
        const filteredLinks = mv.result.data.dl_links.filter(
            (link) => link.quality === 'SD 480p' && link.link.includes("pixeldrain.com")
        );

        if (filteredLinks.length === 0) {
            return reply(`*_Can't download your movie._*`);
        }

        // Generate download URL
        const downloadUrl = filteredLinks[0].link.replace('/u/', '/api/file/');

        // Prepare caption and send the document
        const caption = `${mv.result.data.title} ( SD 480p )\n\n> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ʙᴏᴛ`;

        await conn.sendMessage(
            from,
            {
                document: { url: downloadUrl },
                mimetype: "video/mp4",
                fileName: mv.result.data.title + ".mp4",
                caption: caption
            },
            { quoted: mek }
        );

 } else {

const search = await fetchJson(`${apilink}/movie/sinhalasub/search?text=${q}`)

const mv2 = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${search.result.data[0].link}`)

// Filter download links based on the quality
        const filteredLinks2 = mv2.result.data.dl_links.filter(
            (link) => link.quality === 'SD 480p' && link.link.includes("pixeldrain.com")
        );

        if (filteredLinks2.length === 0) {
            return reply(`*_Can't download your movie._*`);
        }

        // Generate download URL
        const downloadUrl2 = filteredLinks2[0].link.replace('/u/', '/api/file/');

        // Prepare caption and send the document
        const caption2 = `${mv2.result.data.title} ( SD 480p )\n\n> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ʙᴏᴛ`;

        await conn.sendMessage(
            from,
            {
                document: { url: downloadUrl2 },
                mimetype: "video/mp4",
                fileName: mv2.result.data.title + ".mp4",
                caption: caption2
            },
            { quoted: mek }
        );

}
    } catch (e) {
        console.error(e);
        reply(`${e}`)
    }
});
