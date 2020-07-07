import { Given, When, Then, Before } from "cucumber";

// eslint-disable-next-line no-undef
fixture`Getting Started`;

Before("@testHook", async () => {
  console.log("Running Google e2e test.");
});

Given(/I open Google's search page/, async t => {
  await t.navigateTo("https://www.google.com");
});

When(/I type in Google search bar/, async t => {
  await t.typeText('input[name="q"]', "testcafe");
});

Then(/I click Google search/, async t => {
  await t.pressKey("enter");
});
