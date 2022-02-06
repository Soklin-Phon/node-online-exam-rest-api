import { AccountTokenController, ApiRoute } from '../controller';

class QuestionController extends AccountTokenController {

    protected get routes(): ApiRoute[] {
        return [
            { method: 'get', path: '/:id', handler: this.get.bind(this) },
            { method: 'patch', path: '/:id', handler: this.update.bind(this) },
            { method: 'delete', path: '/:id', handler: this.delete.bind(this) },
            { method: 'get', path: '/:id/options', handler: this.listOption.bind(this) },
            { method: 'post', path: '/:id/options', handler: this.createOption.bind(this) },
            { method: 'patch', path: '/:id/options', handler: this.listOption.bind(this) },
        ];
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

    // Option

    public async listOption(req: any, res: any) {
        const body = req.body;
        this.ok(res, {
            message: 'ok'
        });
    }

    public async createOption(req: any, res: any) {
        const body = req.body;
        this.ok(res, {
            message: 'ok'
        });
    }

    public async updateOption(req: any, res: any) {
        const body = req.body;
        this.ok(res, {
            message: 'ok'
        });
    }

}

export default new QuestionController().router;