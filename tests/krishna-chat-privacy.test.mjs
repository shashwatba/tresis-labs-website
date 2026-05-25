import { readFile } from "node:fs/promises";
import { test } from "node:test";
import assert from "node:assert/strict";

const pagePath = new URL("../app/privacy/krishna-chat/page.tsx", import.meta.url);
const deletionPath = new URL("../app/krishna-chat/delete-account/page.tsx", import.meta.url);
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

  assert.match(source, /\/privacy\/krishna-chat/);
  assert.match(source, /Krishna Chat Privacy/);
  assert.match(source, /\/krishna-chat\/delete-account/);
  assert.match(source, /Delete Krishna Chat Account/);
});

test("Krishna Chat account deletion page contains Play Console deletion instructions", async () => {
  const source = await readFile(deletionPath, "utf8");

  assert.match(source, /Delete Your Krishna Chat Account/);
  assert.match(source, /Tresis Labs/);
  assert.match(source, /shashwatbansaldev@gmail\.com/);
  assert.match(source, /Steps to Request Account Deletion/);
  assert.match(source, /What We Delete/);
  assert.match(source, /What We May Keep/);
  assert.match(source, /account information/);
  assert.match(source, /conversation history/);
  assert.match(source, /legal, security, fraud prevention, dispute/);
  assert.match(source, /resolution, or tax purposes/);
});
