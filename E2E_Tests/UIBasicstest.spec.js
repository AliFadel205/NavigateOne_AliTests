const {test, expect} = require('@playwright/test');

// test('First Playwright test', async function() explicit function name
test.only('Browser Context Playwright test', async ({browser}) => // anonymous function - function that has no name
{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://one-dev.navigate360.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("NavigateOne");
   
    await page.locator('#email').fill("ali@test.com");
    await page.locator('#password').fill("P@ssw0rd2025");
    await page.locator('#btn-login').click();
    await page.waitForTimeout(5000);
    console.log(await page.locator('#error-message').textContent());
    //Temporary line to trigger workflow
    //await page.waitForSelector('#error-message', { timeout: 10000 });
    //console.log(await page.locator('text=Wrong email or password.').textContent());
    //await expect(page.locator('text=Wrong email or password.')).toBeVisible();



});



//this test do exactly as the above test
//instead of declaring browser and go over the 3 steps above we can directly declare page and go to page immediately
// test('Page Playwright Test', async ({page}) => // anonymous function - function that has no name
// {

//     await page.goto("https://google.com");
//     console.log( await page.title());
//     await expect(page).toHaveTitle("Google");
    
// });