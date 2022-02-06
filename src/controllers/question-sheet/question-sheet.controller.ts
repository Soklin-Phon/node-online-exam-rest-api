import { AccountTokenController, ApiRoute } from '../controller';

class QuestionSheetController extends AccountTokenController {

    protected get routes(): ApiRoute[] {
        return [
            { method: 'get', path: '', handler: this.list.bind(this) },
            { method: 'get', path: '/:id', handler: this.get.bind(this) },
            { method: 'post', path: '', handler: this.create.bind(this) },
            { method: 'patch', path: '/:id', handler: this.update.bind(this) },
            { method: 'delete', path: '/:id', handler: this.delete.bind(this) },
            { method: 'get', path: '/:id/questions', handler: this.listQuestion.bind(this) },
            { method: 'post', path: '/:id/questions', handler: this.createQuestion.bind(this) },
            { method: 'patch', path: '/:id/questions', handler: this.updateQuestion.bind(this) },
        ];
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

    public async create(req: any, res: any) {
        const body = req.body;
        this.ok(res, {
            message: 'ok'
        });
    }

    public async update(req: any, res: any) {
        const body = req.body;
        this.ok(res, {
            message: 'ok'
        });
    }

    public async delete(req: any, res: any) {
        const body = req.body;
        this.ok(res, {
            message: 'ok'
        });
    }

    // Question

    public async listQuestion(req: any, res: any) {
        const body = req.body;
        this.ok(res, {
            message: 'ok'
        });
    }

    public async createQuestion(req: any, res: any) {
        const body = req.body;
        this.ok(res, {
            message: 'ok'
        });
    }

    public async updateQuestion(req: any, res: any) {
        const body = req.body;
        this.ok(res, {
            message: 'ok'
        });
    }

}

export default new QuestionSheetController().router;