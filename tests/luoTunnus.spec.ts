import { test, expect } from "@playwright/test";
import { getAccessibilityIssues } from "../helpers/axeHelper";

test.describe("Log in tests", () => {
  test("one", async ({ page }) => {
    await page.goto("https://areena.yle.fi");
    await page.getByRole('button', { name: 'Kirjaudu', exact: true }).click({force: true});
    const popup = page.frameLocator('.tunnus-sdk__iframe');
    await popup.getByText("Luo Yle Tunnus").click({force:true});
    await popup.locator("#email").fill("fake.email@asdf");
    const error = await page.getByText("Tarkista sähköpostiosoitteen muoto.");
    expect(error).not.toBeNull();
  });

  test("two", async ({ page }) => {
    await page.goto("https://areena.yle.fi");
    await page.getByRole('button', { name: 'Kirjaudu', exact: true }).click({force: true});
    const popup = page.frameLocator('.tunnus-sdk__iframe');
    await popup.getByText("Luo Yle Tunnus").click({force:true});
    await popup.locator("#email").fill("väääääärä");
    const error = await page.getByText("Tarkista sähköpostiosoitteen muoto.");
    expect(error).not.toBeNull();
  });

  test("three", async ({ page }) => {
    await page.goto("https://areena.yle.fi");
    await page.getByRole('button', { name: 'Kirjaudu', exact: true }).click({force: true});
    const popup = page.frameLocator('.tunnus-sdk__iframe');
    await popup.getByText("Luo Yle Tunnus").click({force:true});
    await popup.locator("#email").fill("fake.email£gmail.com");
    const error = await page.getByText("Tarkista sähköpostiosoitteen muoto.");
    expect(error).not.toBeNull();
  });

  test('Yle Areena accessibility issues', async ({ page }) => {
    await page.goto('https://areena.yle.fi');
  
    const accessibilityIssues = await getAccessibilityIssues(page);
    if (accessibilityIssues.length > 0) {
      console.log(`Accessibility issues found: ${accessibilityIssues.length}`);
      console.log(accessibilityIssues);
    } else {
      console.log('No accessibility issues found');
    }
});

});
