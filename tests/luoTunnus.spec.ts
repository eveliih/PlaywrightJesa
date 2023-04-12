import { test, expect } from "@playwright/test";

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

});
