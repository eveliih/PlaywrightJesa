import { test, expect } from "@playwright/test";
test.describe("Episode Detail test", () => {

    test("kummeli has name", async ({ page }) => {
      await page.goto("https://areena.yle.fi/1-3339547");
      await page.getByRole("button", { name: "Kausi 3", exact: true }).click();
      const expected = "5. Kummeli"
      const name = page.getByText(expected);
      expect(name).not.toBeNull();
    });

    test("kummeli has date", async ({ page }) => {
        await page.goto("https://areena.yle.fi/1-3339547");
        await page.getByRole("button", { name: "Kausi 3", exact: true }).click();
        const expected = "ti 8.3.2016"
        const name = page.getByText(expected);
        expect(name).not.toBeNull();
      });
  });
