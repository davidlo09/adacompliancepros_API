import path from 'path';
import fs from 'fs';
import { generateAdaEmailLayout } from '../utils/generateAdaEmailLayout';
import * as t from '../types';

export const generateAdaEmailPayload = (data: t.WaveResponse) => {
  const { statistics } = data;

  const pdfFilePath = path.join('assets', 'Website Accessibility Guide.pdf');
  const attachment = {
    filename: 'Website Accessibility Guide.pdf',
    content: fs.readFileSync(pdfFilePath),
    contentType: 'application/pdf',
  };

  return {
    subject: `Web Accessibility Test Results for ${statistics.pageurl}`,
    html: generateAdaEmailLayout(data),
    attachments: [attachment],
  };
};
