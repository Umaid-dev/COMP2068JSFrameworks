import type { Request, Response } from 'express';
import { projects } from '../data/myPortfolio';

export function getProjects(req: Request, res: Response) {
    return res.status(200).json(projects);
}
