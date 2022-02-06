import { AccountTokenController, ApiRoute } from '../controller';

class AnswerSheetController extends AccountTokenController {

    protected get routes(): ApiRoute[] {
        return [
            { method: 'post', path: '/seed', handler: this.seed.bind(this) },
            { method: 'get', path: '', handler: this.list.bind(this) },
            { method: 'get', path: '/:id', handler: this.get.bind(this) },
            { method: 'get', path: '/:id/answers', handler: this.listAnswers.bind(this) },
        ];
    }

    public async seed(req: any, res: any) {
        const body = req.body;
        this.ok(res, {
            message: 'ok'
        });
    }

    public async list(req: any, res: any) {
        const body = req.body;
        this.ok(res, {
            message: 'ok'
        });
    }

    public async get(req: any, res: any) {
        const body = req.body;
        this.ok(res, {
            message: 'ok'
        });
    }

    // Answer

    public async listAnswers(req: any, res: any) {
        const body = req.body;
        this.ok(res, {
            message: 'ok'
        });
    }

}

export default new AnswerSheetController().router;