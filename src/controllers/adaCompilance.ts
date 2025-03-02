import { Request, Response } from 'express';
import AdaCompilanceService from '../services/AdaCompilanceService';

export const adaCompilance = async (req: Request, res: Response) => {
  const { email, url, fullName } = req.body;
  const response = await AdaCompilanceService.handleRequest({ email, url, fullName });
  res.status(200).json(response);
};
