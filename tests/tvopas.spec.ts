import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://areena.yle.fi/tv/opas");
});

test("has title", async ({ page }) => {
  await expect(page).toHaveTitle("TV-opas | Ohjelmat tänään | Areena | yle.fi");
});

test("has klo 22.00 uutiset", async ({ page }) => {
  await expect(page.getByText("Kymmenen uutiset")).toBeVisible();
});

test("has logos", async ({ page }) => {
  const TV1 = await page.$('div[aria-label="Yle TV1"]');
  expect(TV1).not.toBeNull();

  const TV2 = await page.$('div[aria-label="Yle TV2"]');
  expect(TV2).not.toBeNull();

  const fem = await page.$('div[aria-label="Yle Teema Fem"]');
  expect(fem).not.toBeNull();

  const mtv3 = await page.$('div[aria-label="MTV3"]');
  expect(mtv3).not.toBeNull();

  const nelonen = await page.$('div[aria-label="Nelonen"]');
  expect(nelonen).not.toBeNull();

  const sub = await page.$('div[aria-label="Sub"]');
  expect(sub).not.toBeNull();
});
