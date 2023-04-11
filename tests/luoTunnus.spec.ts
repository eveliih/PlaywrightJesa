import { test, expect } from "@playwright/test";

test.describe("Log in tests", () => {
  test("one", async ({ page }) => {
    await page.goto("https://areena.yle.fi");
    await page.getByRole("button", {name: "Kirjaudu", exact: true}).click();
    await page.waitForSelector('input[id="email"]');
    await page.getByRole("button", {name: "Luo Yle Tunnus", exact: true}).click();
    const email = await page.$('input[autocomplete="username]"').fill("fake.email@asdf");
    await email.fill("fake.email@asdf");
    const error = await page.getByText("Tarkista sähköpostiosoitteen muoto.");
    expect(error).not.toBeNull();
  });

});
