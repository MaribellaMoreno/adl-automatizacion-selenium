describe('Navegacion en MercadoLibre', () => {
    it('Validar busqueda de articulo', async () => {
        //Accedemos a la aplicacion
        await browser.url('https://webdriver.io/');
        //Selector de la caja es #cb1-edit
        const cajaBusqueda = await $('#cb1-edit');
        await expect(browser).toHaveText('WebdriverIO');
        //Tipeamos el criterio de busqueda
        cajaBusqueda.setValue('iphone');
        //Clicamos en la lupa 
        await $('body > header > div > div.nav-area.nav-top-area.nav');
        //Selector del resultado es 
        $('.ui-search-breadcrumb__title').waitForDisplayed({ timeout: 10000});
        //Validar que el texto del titulo es igual a lo buscado 
    })
})
