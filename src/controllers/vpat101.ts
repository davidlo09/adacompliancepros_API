import { Request, Response } from 'express';
import Vpat101Service from '../services/Vpat101Service';
import path from 'path';

export const vpat101 = async (req: Request, res: Response) => {
  const { email, fullName } = req.body;
  // const response =
    await Vpat101Service.handleRequest({ email, fullName });
  // res.status(200).json(response);
    const filePath = path.join(__dirname, "../../assets", "VPAT-101.pdf");
		res.download(filePath, "VPAT-101-explainer.pdf", (err) => {
			if (err) {
				console.error("Error sending file:", err);
				res.status(500).send("Error downloading file");
			}
		});
};
