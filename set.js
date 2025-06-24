const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID |eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE8rSHFUUWttS0lVYWUxY3AzYmQ0UlBPak9VUjRYN29heWhIWEJ5Q0hVVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0tIa1k4MzJaUjhYWm1Wc1RkQ3d2WldyQS84TDZ3T2lUakU3S2hkdmJHcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBTGtFb3ptYkFiSnN1Vy9QeUFxcUxXY3ZQYTNFZkMvYzErY0dFa1hOMDFVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkS2E5Z0Qvc2RVVnN6M2QyVUpnbFg1WFRiZnVQbElHNkI5LzFpekI2dzE0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtGYmpUZkdXa1loUmJWSEwxYVNQTjR2cHlpTmRBWTJYUzltcGNlMWthMDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpzQXROck9uV2w5UWxybWpzRU5uSGtVRk5CUFhPM1ViSUovMXlkcHJ4M289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUdCdUZBcUZGNktzb1c1TzRueEYwVkErdXpiOXNTZzFhSFEzeUdza3gyWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNmJIZk5wc1V0Mjk0NEtnTE56bXNDbDM4cHRMSXhyQWQyTXR4ZWtnVnREWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNCM0xVb1NTcHVtcit1b3pjU3N4RnFGM3VFQjJCZkdRVjFhbG52S2xEMzNFR0VlMDMvMkhtNG41bW5VZkFVR092OEhzeFNZNzh1ejlQT09najdYdGpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OCwiYWR2U2VjcmV0S2V5IjoiVkFhTk1DUVB0RmZicDVzWEk0bXhYRE5yQVdNbzdMckxpVjZPMUMyMFVVND0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIyNjc3NDY3MTU0NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1NDcxMjQ0RkU2RTJGQkE3MzY0NzBCQ0JDNEY5OTMwQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUwNzU3MjE2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNjc3NDY3MTU0NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3NEIyNERERTM4NUY3QzcxQTBEREJGMjYxNzdBQTYyNCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUwNzU3MjE2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNjc3NDY3MTU0NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwMTQyRUIyRkUxQzA5MzhFMDYxMDIwMUY5MDk5RDYyQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUwNzU3MjIwfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJTUVpTN0RBOCIsIm1lIjp7ImlkIjoiMjY3NzQ2NzE1NDU6NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJTIEsgRSBNIFoiLCJsaWQiOiIyNjc3NTc1ODkzNzMwODQ6NEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BQYStKY0VFTkhlNmNJR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik0ycS8yTnVxQ3NDQ0k5eDYwQXdRWDRMamV6dkp6Y2pNSkxZYjFhU1R4Unc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkZkVVN5RzhrQ2JlWWJwbmRGR0hyT0M2SXliSFJMUzRJM0lQQjFWbXVrcTBidHVDZmo3V3hUOWRwUXEyTkpzOWFNOUZmZUNwM2FLSG5Ed3hFaUwzZUNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJvNXkyQ0t4U2dSK0M4YVJCQ2ZOUVdFS3p0eXVEQU9KSFBYUFROWnIwbDZiVmJuT203MU41M29hRktQSDlJdDJVRzRVWTBQRE9IQ2ZTYmlTaVU0aENqdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2Nzc0NjcxNTQ1OjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVE5xdjlqYnFnckFnaVBjZXRBTUVGK0M0M3M3eWMzSXpDUzJHOVdrazhVYyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwNzU3MjE1LCJsYXN0UHJvcEhhc2giOiIyUDFZaGYiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUlrRCJ9| 'ezra',
    PREFIXE: process.env.PREFIX || "+",
    GITHUB : process.env.GITHUB|| 'https://github.com/toxiclover-tech/TOXIC-LOVER-MD',
    OWNER_NAME : process.env.OWNER_NAME || "Blacq Boii",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "26774671545",  
              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "non",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    AUTO_REACT: process.env.AUTO_REACTION || "non",  
     AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
    URL: process.env.URL || "https://files.catbox.moe/39n0nf.jpg",  
    AUTO_REACT_STATUS: process.env.AUTO_REACT_STATUS || 'non',              
    CHAT_BOT: process.env.CHAT_BOT || "no",              
    AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "yes",
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'no', 
    GCF: process.env.GROUP_HANDLE || 'no', 
    AUTO_REPLY : process.env.AUTO_REPLY || "no", 
    AUTO_STATUS_TEXT: process.env.AUTO_STATUS_TEXT || 'viewed by JEEPERS CREEPER-XMD',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'no',
    AUTO_BIO: process.env.AUTO_BIO || 'yes',       
    ANTI_CALL_TEXT : process.env.ANTI_CALL_TEXT || '',             
    GURL: process.env.GURL  || "https://whatsapp.com/channel/0029VawCel7GOj9ktLjkxQ3g",
    WEBSITE :process.env.GURL || "https://whatsapp.com/channel/0029VawCel7GOj9ktLjkxQ3g",
    CHANNEL :process.env.CHANNEL || "https://whatsapp.com/channel/0029VawCel7GOj9ktLjkxQ3g",
    CAPTION : process.env.CAPTION || "✧JEEPERS CREEPER-XMD✧",
    BOT : process.env.BOT_NAME || '✧JEEPERS CREEPER-XMD✧⁠',
    MODE: process.env.PUBLIC_MODE || "no",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Nairobi", 
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME || null,
    HEROKU_API_KEY : process.env.HEROKU_API_KEY || null,
    WARN_COUNT : process.env.WARN_COUNT || '5' ,
    ETAT : process.env.PRESENCE || '1',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    LUCKY_ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    ANTI_CALL: process.env.ANTI_CALL || 'yes', 
    AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',             
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, 
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
