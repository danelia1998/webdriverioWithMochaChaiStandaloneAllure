const mainPage = require('../pageobjects/main.page');
const SecurePage = require('../pageobjects/secure.page');

describe('First Test Suite 2', () => {
    it('should enter and validate game after filters', async () => {

        await mainPage.open("browse");

        await mainPage.chooseUnderTwentyBucksAndAction();
        await mainPage.checkIfExampleGameExistsOnPage();
        // await browser.pause(30000);
        // await expect(SecurePage.flashAlert).toBeExisting();
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!');
    });

});


