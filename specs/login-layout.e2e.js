describe('Check app', function () {
    it('should login', async function () {
        await browser.url('https://viktor-silakov.github.io/course-sut');
        await $('#login').setValue('walker@jw.com');
        await $('#password').setValue('password');
        await $('button').click();
        await $('#spinner').waitForDisplayed({ reverse: false, timeout: 5000 });
        await browser.pause(5000);
        const sidebarMenu = await $$('ul[id=first-nav-block]>li.nav-item');
        for (const item of sidebarMenu) {
            let text = await item.getText();
            await item.moveTo();
            await browser.pause(2000);
            let back_color = await item.getCSSProperty('background-color');
            if(back_color.value == 'rgba(255,0,0,1)' ){
                 throw new Error(`The menu item ${text} has wrong color!`)
            }
        }
    });
});


