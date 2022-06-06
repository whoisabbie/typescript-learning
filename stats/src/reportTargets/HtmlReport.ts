// npm install @types/node is required to use this below lib in ts
// with that package all the annotation for all packages under node would
// be available
import fs from 'fs';

import { OutputTarget } from "../Summary";

export class HtmlReport implements OutputTarget {
  
  print(report: string): void {
    const html = `
      <div>
        <h1>Analysis</h1>
        <div>${report}</div>
      </div>
    `;

    fs.writeFileSync('report.html', html);
  }

}