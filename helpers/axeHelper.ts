import { Page } from 'playwright';
import * as axe from 'axe-core';

export async function getAccessibilityIssues(page: Page): Promise<axe.Result[]> {
  await page.addScriptTag({ path: require.resolve('axe-core') });

  const result: axe.AxeResults = await page.evaluate(async () => {
    const axeCore = (window as any).axe;
    return await axeCore.run(document, {
      reporter: 'v2',
    });
  });

  return result.violations;
}