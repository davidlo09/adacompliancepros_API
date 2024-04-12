import { Request, Response } from 'express';
import Vpat101Service from '../services/Vpat101Service';

export const vpat101 = async (req: Request, res: Response) => {
  const { email, fullName } = req.body;
  const response = await Vpat101Service.handleRequest({ email, fullName });
  res.status(200).json(response);
};
