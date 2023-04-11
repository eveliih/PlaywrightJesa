import { test, expect } from "@playwright/test";

test.describe("Log in tests", () => {
  test("one", async ({ page }) => {
    await page.goto("https://areena.yle.fi");
    await page.getByRole("button", { name: "Kirjaudu", exact: true }).click();
  });

  /*  test("two", async ({ page }) => {
    // ...
  }); */
});
