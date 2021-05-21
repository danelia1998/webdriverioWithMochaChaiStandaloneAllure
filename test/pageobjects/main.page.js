const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class mainPage extends Page {
    /**
     * define selectors using getter methods
     */
    get UnderTwentyBucksButton () { return $('div=Under $20.00') }
    get ActionCategoryButton () { return $('div=Action') }
    get NewReleaseButton () { return $('.css-1hxieb-Dropdown-styles__toggleLabel') }
    get ExampleGameName () { return $('span=Sockventure') }
    get ColumnA () { return $('#column-a') }
    get DragAndDropText () { return $('.example h3') }
    get ColumnB () { return $('#column-b') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async chooseUnderTwentyBucksAndAction () {
        await (await this.UnderTwentyBucksButton).click();
        await (await this.ActionCategoryButton).click();
    }

    async checkIfExampleGameExistsOnPage () {

        await console.log("------------",await (await this.ExampleGameName).isExisting())
        await (await this.ExampleGameName).isExisting();
        await (await this.ExampleGameName).click();
        
    }
    
    // async checkIfExampleGameExistsOnPage () {

    //     await (await this.NewReleaseButton).isExisting();
    // }

    async dragOneItemToAnother(){
        console.log("----");
        // await (await this.ColumnA).dragAndDrop(await this.ColumnB);
        await (await this.ColumnA).click()
        console.log("----david");
    }

    async CheckTextOfThePage(){
        console.log("----");
        // await (await this.ColumnA).dragAndDrop(await this.ColumnB);
        const text = await (await this.DragAndDropText).getText();
        assert.isTrue(text == "Drag and Drop");
        
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open (path) {
        browser.maximizeWindow()
        return super.open(path);
    }
    /**
     * overwrite specifc options to adapt it to page object
     */
    openExerciseBrowser (path) {
        browser.maximizeWindow()
        return super.openExerciseBrowser(path);
    }

    
}

module.exports = new mainPage();
