require('dotenv').config();
import nodemailer from 'nodemailer';
import * as configs from './configs';
import * as t from './types.ts';

const from = process.env.EMAIL_USER as string;
const bcc = process.env.EMAIL_BCC ? process.env.EMAIL_BCC.split(",") : [];
const replyTo = process.env.EMAIL_REPLY_TO as string;

class EmailService {
  private static emailTransporter = nodemailer.createTransport(
    configs.emailTransporter
  );

  constructor() {}

  static async sendMail(payload: t.EmailPayload) {
    try {
      return await this.emailTransporter.sendMail({
        ...payload,
        from,
        bcc,
        replyTo,
      });
    } catch (error: any) {
      throw new Error(`There was an error sending the email: ${error.message}`);
    }
  }
}

export default EmailService;
