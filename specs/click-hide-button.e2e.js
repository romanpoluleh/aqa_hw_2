describe('Check app', function () {
    it('click on hide button', async function () {
        await browser.url('https://viktor-silakov.github.io/course-sut');
        await $('#login').setValue('walker@jw.com');
        await $('#password').setValue('password');
        await $('button').click();
        await browser.pause(5000);
        const header = await $('.sticky-top');
        await browser.execute(async function (a) {
             await a.remove();
        }, header)
        await browser.pause(3000);
        await $('.btn-danger').click();
        await browser.pause(3000);
        await browser.acceptAlert();
        await browser.pause(3000);
    });
});

