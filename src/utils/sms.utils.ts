const https = require('request');
const SMS_URL = process.env.SMS_URL || 'https://api.twilio.com/2010-04-01/Accounts/ACa75315ef46e37c896c16695415fa74f7/Messages.json';
const SMS_SID = process.env.SMS_SID || 'ACa75315ef46e37c896c16695415fa74f7';
const SMS_AUTH_TOKEN = process.env.SMS_AUTH_TOKEN || 'eab77f745972014cc2741a593017b1fa';
const SMS_FROM = process.env.SMS_FROM || '+17175379319';

export const sendSmsCode = function (number: string, code: string) {
    number = number.slice(1, number.length);
    let message = `Your Verify Code is ${code}`;
    const token = Buffer.from(`${SMS_SID}:${SMS_AUTH_TOKEN}`).toString('base64');
    https.post({
        url: SMS_URL,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${token}`
        },
        form: {
            From: SMS_FROM,
            To: `+855${number}`,
            Body: message 
        }
    }, function (err, httpResponse, body) {
        console.error(`Did not get an OK from the server. Code: ${httpResponse.statusCode}`);
        return;
    });
}