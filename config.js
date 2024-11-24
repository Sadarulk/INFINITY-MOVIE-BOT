const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "v350zYZC#3U9_yltmhq_Qe2-VEBOLVj_9E3xRRE6CQz3JrjtJlzA", //your session id
MV_SEND_JID: process.env.MV_SEND_JID || "120363355439809658@g.us", //default movie send group
MODE: process.env.MODE || "public", //private or inbox or groups
AUTO_AI: process.env.AUTO_AI || "on", //on or off
AUTO_AI_JID: process.env.AUTO_AI_JID || "120363365489430422@g.us", //auto ai working group
BLOCK_JID: process.env.BLOCK_JID || "120363365489430422@g.us", //block jids
};
