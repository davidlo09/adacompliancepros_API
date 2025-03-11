// import path from "path";
// import fs from "fs";
import { generateAdaEmailLayout } from "../utils/generateAdaEmailLayout";
import * as t from "../types";

export const generateAdaEmailPayload = (
	data: t.FormattedCategories[],
	{ email, url, fullName }: t.AdaCompilanceRequestArgs
) => {
	// const pdfFilePath = path.join("assets", "Website Accessibility Guide.pdf");
	// const attachment = {
	// 	filename: "Website Accessibility Guide.pdf",
	// 	content: fs.readFileSync(pdfFilePath),
	// 	contentType: "application/pdf",
	// };

	return {
		subject: `Personalized Web Accessibility Test Results for: ${url}`,
		html: generateAdaEmailLayout(data, { email, url, fullName }),
	};
};
