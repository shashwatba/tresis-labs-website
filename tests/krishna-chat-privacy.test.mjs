import { readFile } from "node:fs/promises";
import { test } from "node:test";
import assert from "node:assert/strict";

const pagePath = new URL("../app/privacy/krishna-chat/page.tsx", import.meta.url);
const footerPath = new URL("../components/Footer.tsx", import.meta.url);

test("Krishna Chat privacy page contains the required public policy content", async () => {
  const source = await readFile(pagePath, "utf8");

  assert.match(source, /export const metadata/);
  assert.match(source, /Privacy Policy for Krishna Chat/);
  assert.match(source, /May 25, 2026/);
  assert.match(source, /AI-powered spiritual guidance/);
  assert.match(source, /Bhagavad Gita/);
  assert.match(source, /Tresis Labs/);
  assert.match(source, /shashwatbansaldev@gmail\.com/);
  assert.doesNotMatch(source, /\[Developer Name\]/);
  assert.doesNotMatch(source, /\[Contact Email\]/);
  assert.doesNotMatch(source, /TODO/);
  assert.match(source, /third-party AI model providers/);
  assert.match(source, /We do not sell personal information/);
  assert.match(source, /not intended for children under 13/);
});

test("site footer links to the Krishna Chat privacy policy", async () => {
  const source = await readFile(footerPath, "utf8");

  assert.match(source, /href="\/privacy\/krishna-chat"/);
  assert.match(source, /Krishna Chat Privacy/);
});
