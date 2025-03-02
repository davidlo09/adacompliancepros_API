import axios from "axios";
require("dotenv").config();
import EmailService from "../EmailService";
import * as t from "./types";
import * as cfg from "./configs";
import * as consts from "./constants";

class AdaCompilanceService {
	private readonly waveApiKey = process.env.WAVE_API_KEY as string;

	private async getAdaReport(url: string) {
		try {
			return await axios.get(`${consts.waveApiBaseUrl}?key=${this.waveApiKey}&url=${url}`);
		} catch (error: any) {
			throw new Error(`There was an error getting report: ${error.message}`);
		}
	}

	async handleRequest({ email, url, fullName }: t.AdaCompilanceRequestArgs) {
		const report = await this.getAdaReport(url);
		const formattedReport = this.formatCategories(report.data.categories as t.WaveResponse["categories"]);
		if (!report.data.status.success) {
			throw new Error(`Cannot generate report for URL ${url}. Please check it's correctness`);
		}
		const emailPayload = cfg.generateAdaEmailPayload(formattedReport, { email, url, fullName });
		const { response } = await EmailService.sendMail({ ...emailPayload, to: email });
		if (response.startsWith("250 OK")) {
			return `The report for ${url} was successfully sent to ${email}`;
		}
	}

	private formatCategories(categories: t.WaveResponse["categories"]): t.FormattedCategories[] {
		return Object.entries(categories).map(([key, value]) => {
			const { title, description } = this.getCategoryTitleAndDescription(key as keyof t.WaveResponse["categories"]);
			return {
				title,
				description,
				count: value.count,
			};
		});
	}

	private getCategoryTitleAndDescription(category: keyof t.WaveResponse["categories"]) {
		switch (category) {
			case "error":
				return {
					title: "Errors within the code",
					description:
						"for the web page itself such as empty links, missing spaces, unlabeled form elements, or alternative text.",
				};
			case "contrast":
				return {
					title: "Contrast errors",
					description: "that make elements of pages difficult or impossible for people with low vision to see or use.",
				};
			case "alert":
				return {
					title: "Alerts",
					description:
						"such as possible headers that aren’t identified or underlined text that can cause issues with screen readers or other required accessibility tools.",
				};
			case "feature":
				return {
					title: "Feature issues",
					description:
						"such as missing information or missing alternative text to explain images that blind people can’t see.",
				};
			case "structure":
				return {
					title: "Structural problems",
					description:
						"with headers, footers, lists, search capabilities and tables that make navigating a website with a screen reader impossible to see or use.",
				};
			case "aria":
				return {
					title: "Incorrect usages",
					description:
						"of special annotations that enable digital accessibility, such as Accessible Rich Internet Applications (ARIA).",
				};
		}
	}
}

export default new AdaCompilanceService();
