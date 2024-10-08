import { generateAdaEmailLayout } from "../utils/generateVpat101EmailLayout";
import * as t from '../types'

export const generateVpat101EmailPayload = (data: t.Vpat101Args) => {
	return {
		subject: `VPAT 101 Explainer`,
		html: generateAdaEmailLayout(data),
	};
};
