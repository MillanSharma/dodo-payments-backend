import {
  type NextFunction,
  type Request,
  type Response,
  Router,
} from "express";
import type { z } from "zod";

export function createRouter(callback: (router: Router) => void) {
  const router = Router();
  callback(router);
  return router;
}

export function createHandler<T extends z.ZodType>(
  schemaOrHandler:
    | T
    | ((
        req: Request,
        res: Response,
        next: NextFunction,
      ) => void | Promise<void>),
  handler: (req: Request, res: Response, next: NextFunction) => any,
) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const schema = schemaOrHandler as T;
      schema.parse(req.body);
      await handler(req, res, next);
    } catch (error) {
      next(error);
    }
  };
}
