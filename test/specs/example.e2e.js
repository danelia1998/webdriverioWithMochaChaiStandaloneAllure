const mainPage = require('../pageobjects/main.page');
const SecurePage = require('../pageobjects/secure.page');

describe('First Test Suite 1', () => {

    it('try drag and drop new ver', async () => {

        await mainPage.openExerciseBrowser("drag_and_drop");
        console.log("------------------------------1");
        await mainPage.dragOneItemToAnother();
        // await browser.pause(10000);
        console.log("-----------------------------2");

    });

    it('check drag and drop text', async () => {

        await mainPage.openExerciseBrowser("drag_and_drop");
        console.log("------------------------------1");
        // console.log(browser.)
        // $('#sdadasdada').waitForExist({ timeout: 50000 })
        await mainPage.CheckTextOfThePage();
        // await browser.pause(10000);
        console.log("-----------------------------2");
        // await expect(SecurePage.flashAlert).toBeExisting();
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!');
    });
});


