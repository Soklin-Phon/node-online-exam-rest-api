import { sendSmsCode } from './sms.utils';
import { sendTelegramCode } from './telegram.utils';

export const sendCode = function (number, code) {
    sendTelegramCode(number, code);
    sendSmsCode(number, code);
}