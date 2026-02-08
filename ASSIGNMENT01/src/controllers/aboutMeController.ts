import type { Request, Response } from 'express';
import { aboutMe } from '../data/myPortfolio';

export function getAboutMe(req: Request, res: Response) {
    return res.status(200).json(aboutMe);
}
