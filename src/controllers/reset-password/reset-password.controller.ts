import { getUserByPhone, updateUser } from '../../repositories/user.repository';
import { AccountTokenController, ApiRoute } from '../controller';
const bcrypt = require('bcryptjs');
import { generateCode, verifyCode } from '../../utils/generator.utils';
import { sendCode } from '../../utils/code-sender.utils';

export interface IUserPayload {
    name: string;
    username: string;
    email: string;
    phone: string;
    enable: string;
    createdAt: string;
    updatedAt: string;
}

class ResetPasswordController extends AccountTokenController {

    protected get routes(): ApiRoute[] {
        return [
            { method: 'post', path: '/request', handler: this.request.bind(this) },
            { method: 'post', path: '/reset', handler: this.changePassword.bind(this) },
        ];
    }

    public async request(req: any, res: any) {
        const body = req.body;

        await getUserByPhone(body.phone).then((_user) => {
            if (_user) {
                generateCode(body.phone).then((code) => {
                    sendCode(body.phone, code);
                });
                
            }
        });
        this.ok(res, {
            message: 'ok'
        });
    }

    public async changePassword(req: any, res: any) {
        const body = req.body;
        const password = body.password;

        let user = getUserByPhone(body.phone);
        const newPassword = await bcrypt.hash(password, 10);

        user.then((_user) => {
            console.log('verify code');
            verifyCode(body.phone, body.code).then((result) => {
                console.log('result code', result);
                if (result) {
                    _user.enable = true;
                    _user.password = newPassword;
                    updateUser(_user).then((_update) => {
                        if (_update) {
                            this.ok(res, {
                                message: 'ok'
                            });
                        } else {
                            this.clientError(res, {
                                message: 'verify failed'
                            });
                        }
                    }, (err) => {
                        this.clientError(res, {
                            message: 'verify failed'
                        });
                    });
                } else {
                    this.clientError(res, {
                        message: 'verify failed'
                    });
                }
            });

        }, (err) => {
            this.clientError(res, {
                message: 'verify failed'
            });
        });
    }
}

export default new ResetPasswordController().router;