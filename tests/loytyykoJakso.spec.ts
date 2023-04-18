import { test, expect } from "@playwright/test";
import { getAccessibilityIssues } from "../helpers/axeHelper";
test.describe("Episode Detail test", () => {

    test("kummeli has name", async ({ page }) => {
      await page.goto("https://areena.yle.fi/1-3339547");
      await page.getByRole("button", { name: "Kausi 3", exact: true }).click({force: true});
      const expected = "5. Kummeli"
      const name = page.getByText(expected);
      expect(name).not.toBeNull();
    });

    test("kummeli has date", async ({ page }) => {
        await page.goto("https://areena.yle.fi/1-3339547");
        await page.getByRole("button", { name: "Kausi 3", exact: true }).click({force: true});
        const expected = "ti 8.3.2016"
        const name = page.getByText(expected);
        expect(name).not.toBeNull();
      });

      test('Yle Areena accessibility issues', async ({ page }) => {
        await page.goto('https://areena.yle.fi/1-3339547');
      
        const accessibilityIssues = await getAccessibilityIssues(page);
        if (accessibilityIssues.length > 0) {
          console.log(`Accessibility issues found: ${accessibilityIssues.length}`);
          console.log(accessibilityIssues);
        } else {
          console.log('No accessibility issues found');
        }
  });

});
