import { Router, RequestHandler, Request, Response } from 'express';

type Method = 'get' | 'post' | 'put' | 'delete' | 'patch' | 'options' | 'head' | 'use';

export interface ApiRoute {
  method: Method;
  path: string;
  handler: RequestHandler;
}

export abstract class Controller {
  router: Router;

  constructor() {
    this.router = Router({ mergeParams: true });

    this.useRouter();

    this.setupRoutes();
  }

  /**
   * Common error handler.
   * @param _req
   * @param res
   * @param err
   */
  protected errorHandler(_req: Request, res: Response, err: any): void {
    const statusCode = err.statusCode || err.status;
    if (statusCode && (statusCode >= 400 && statusCode < 500)) {
      this.clientError(res, err.error || err.context);
    } else {
      res.status(400).send();
    }
  }

  public static jsonResponse(
    res: Response, code: number, message: any
  ) {
    try {
      message = JSON.parse(message);
    } catch (error) { }
    res.status(code).json(message)
  }

  public ok<T>(res: Response, dto?: T) {
    if (!!dto) {
      res.type('application/json');
      res.status(200).json(dto);
    } else {
      res.sendStatus(200);
    }
  }

  public created(res: Response) {
    res.sendStatus(201);
  }

  public deleted(res: Response) {
    res.sendStatus(204);
  }

  public clientError(res: Response, error?: any) {
    return AccountTokenController.jsonResponse(res, 400, error ? error : { message: 'Bad request' });
  }

  public unauthorized(res: Response, message?: string) {
    return AccountTokenController.jsonResponse(res, 401, message ? message : 'Unauthorized');
  }

  public paymentRequired(res: Response, message?: string) {
    return AccountTokenController.jsonResponse(res, 402, message ? message : 'Payment required');
  }

  public forbidden(res: Response, message?: string) {
    return AccountTokenController.jsonResponse(res, 403, message ? message : 'Forbidden');
  }

  public notFound(res: Response, message?: string) {
    return AccountTokenController.jsonResponse(res, 404, message ? message : 'Not found');
  }

  public conflict(res: Response, message?: string) {
    return AccountTokenController.jsonResponse(res, 409, message ? message : 'Conflict');
  }

  public tooMany(res: Response, message?: string) {
    return AccountTokenController.jsonResponse(res, 429, message ? message : 'Too many requests');
  }

  public todo(res: Response) {
    return AccountTokenController.jsonResponse(res, 400, 'TODO');
  }

  public fail(res: Response, error: Error | string) {
    console.log(error);
    res.status(500).json({
      message: error.toString()
    })
  }

  protected abstract get routes(): ApiRoute[];

  protected abstract useRouter(): void;

  private setupRoutes(): void {
    this.routes.forEach(route => {
      this.router[route.method](route.path, route.handler.bind(this));
    });
  }
}

export abstract class AccountTokenController extends Controller {
  protected useRouter(): void {
    this.router.use(async (req, res, next) => {
      next();
    });
  }
}
