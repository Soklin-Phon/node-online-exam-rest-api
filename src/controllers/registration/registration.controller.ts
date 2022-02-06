import { User } from '../../models/user/user';
import { getUserByPhone, updateUser } from '../../repositories/user.repository';
import { AccountTokenController, ApiRoute } from '../controller';
const bcrypt = require('bcryptjs');
import {
    getUsers,
    createUser,
    getUser,
    getUserByUsername,
} from "../../repositories/user.repository";
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

class RegistrationController extends AccountTokenController {

    protected get routes(): ApiRoute[] {
        return [
            { method: 'post', path: '', handler: this.register.bind(this) },
            { method: 'post', path: '/resend', handler: this.resend.bind(this) },
            { method: 'post', path: '/verify', handler: this.verify.bind(this) },
        ];
    }

    public async register(req: any, res: any) {
        const body = req.body;
        const password = body.password;

        

        await getUserByUsername(body.username).then((_user) => {
            if (_user) {
                this.clientError(res, {
                    message: 'invalid username'
                });
            }

        });

        await getUserByPhone(body.phone).then((_user) => {
            if (_user) {
                this.clientError(res, {
                    message: 'invalid phone'
                });
            }
        });

        body.password = await bcrypt.hash(password, 10);

        const user = createUser(body);
        user.then((_user) => {
            if (_user) {
                generateCode(body.phone).then((code) => {
                    sendCode(body.phone, code);
                });
                this.ok(res, {
                    message: 'ok'
                });
            } else {
                this.clientError(res, {
                    message: 'invalid body'
                });
            }
        }, (err) => {
            console.log(err);
            this.clientError(res, {
                message: 'invalid body'
            });
        });
    }

    public async resend(req: any, res: any) {
        const body = req.body;

        let user = getUserByPhone(body.phone);
        user.then((_user) => {
            if (_user) {
                generateCode(body.phone).then((code) => {
                    sendCode(body.phone, code);
                });
                this.ok(res, {
                    message: 'ok'
                });
            } else {
                this.clientError(res, {
                    message: 'invalid body'
                });
            }
        }, (err) => {
            console.log(err);
            this.clientError(res, {
                message: 'invalid body'
            });
        });
    }

    public async verify(req: any, res: any) {
        const body = req.body;

        let user = getUserByPhone(body.phone);

        user.then((_user) => {
            console.log('verify code');
            verifyCode(body.phone, body.code).then((result) => {
                console.log('result code', result);
                if (result) {
                    _user.enable = true;
                    updateUser(_user).then((_update) => {
                        if (_update) {
                            this.ok(res, {
                                data: this.makeView(_update)
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
            this.notFound(res, 'record not found');
        });
    }

    private makeView(_user: User): any {
        return {
            id: _user.id,
            name: _user.name,
            username: _user.username,
            phone: _user.phone,
        };
    }
}

export default new RegistrationController().router;