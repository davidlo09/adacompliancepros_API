import axios from 'axios';
require('dotenv').config();
import EmailService from '../EmailService';
import * as t from './types';
import * as cfg from './configs';
import * as consts from './constants';

class AdaCompilanceService {
  private static waveApiKey = process.env.WAVE_API_KEY as string;

  constructor() {}

  private static async getAdaReport(url: string) {
    try {
      return await axios.get(
        `${consts.waveApiBaseUrl}?key=${this.waveApiKey}&url=${url}`
      );
    } catch (error: any) {
      throw new Error(`There was an error getting report: ${error.message}`);
    }
  }

  static async handleRequest({ email, url }: t.AdaCompilanceRequestArgs) {
    const report = await this.getAdaReport(url);
		if (!report.data.status.success) {
			throw new Error(`Cannot generate report for URL ${url}. Please check it's correctness`);
		}
		const emailPayload = cfg.generateAdaEmailPayload(report?.data, { email, url });
		const { response } = await EmailService.sendMail({ ...emailPayload, to: email });
		if (response.startsWith("250 OK")) {
			return `The report for ${url} was successfully sent to ${email}`;
		}
  }
}

export default AdaCompilanceService;
