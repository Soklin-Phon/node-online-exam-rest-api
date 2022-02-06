const https = require('https');
const TELEGRAM_URL = process.env.TELEGRAM_URL || 'https://api.telegram.org/bot5030128259:AAGh2MoayElt0Wg8YhsDzWt2eF6D2VSnIYE/sendMessage?chat_id=@tsipwtexamdev&text=';

export const sendTelegramCode = function (number, code) {
    let message = encodeURI(`[${number}]Your Code is ${code}`);
    https.get(TELEGRAM_URL + message, (res) => {
        if (res.statusCode !== 200) {
            console.error(`Did not get an OK from the server. Code: ${res.statusCode}`);
            res.resume();
            return;
        }
    });
}
