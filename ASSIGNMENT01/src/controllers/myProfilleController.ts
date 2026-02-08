import type { Request, Response } from 'express';
import { myProfile } from '../data/myPortfolio';

export function getMyProfile(req: Request, res: Response) {
    return res.status(200).json(myProfile);
}
