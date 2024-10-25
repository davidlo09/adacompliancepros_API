import * as t from "./types";
import EmailService from '../EmailService';
import * as cfg from './configs';

class Vpat101Service {
  constructor() { }
  
  static async handleRequest(data: t.Vpat101Args) {
    const { email } = data;
    const emailPayload = cfg.generateVpat101EmailPayload(data);
    const { response } = await EmailService.sendMail({
      ...emailPayload,
      to: email,
    });
    if (response.startsWith('250 OK')) {
      return {
        ok: true,
        message: `VPAT 101 explainer was successfully sent to ${email}`,
      };
    }
  }
}

export default Vpat101Service;
