import { generateAdaEmailLayout } from "../utils/generateVpat101EmailLayout";

export const generateVpat101EmailPayload = (name: string) => {
  return {
    subject: `VPAT 101 Explainer`,
    html: generateAdaEmailLayout(name),
  };
};
