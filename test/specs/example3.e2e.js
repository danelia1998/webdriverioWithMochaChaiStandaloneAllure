const mainPage = require('../pageobjects/main.page');
const SecurePage = require('../pageobjects/secure.page');

describe('First Test Suite 3', () => {

    it('try drag and drop', async () => {

        await mainPage.openExerciseBrowser("drag_and_drop");
        console.log("------------------------------1");
        // console.log(browser.)
        // $('#sdadasdada').waitForExist({ timeout: 50000 })
        await mainPage.dragOneItemToAnother();
        await browser.pause(10000);
        console.log("-----------------------------2");
        // await expect(SecurePage.flashAlert).toBeExisting();
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!');
    });
});


