import { AccountTokenController, ApiRoute } from '../controller';

class ExamController extends AccountTokenController {

    protected get routes(): ApiRoute[] {
        return [
            { method: 'get', path: '/check', handler: this.check.bind(this) },
            { method: 'post', path: '/:id/submit', handler: this.submit.bind(this) },
        ];
    }

    public async check(req: any, res: any) {
        const body = req.body;
        this.ok(res, {
            message: 'ok'
        });
    }

    public async submit(req: any, res: any) {
        const body = req.body;
        this.ok(res, {
            message: 'ok'
        });
    }

}

export default new ExamController().router;