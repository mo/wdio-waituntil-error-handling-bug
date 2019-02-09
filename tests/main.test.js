const assert = require('assert');

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        //throw Error("regular error")
        browser.waitUntil(() => {
            console.log("running waitUntil func at " + new Date())
            throw Error("error inside waitUntil")
        })
    });
});