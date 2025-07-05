describe('Pagina de WebDriverIO', () => {
    it('Validar el titulo de la pagina', async () => {
        await browser.url('https://webdriver.io/');

        await expect(browser).toHaveText('WebdriverIO');
    })
})
