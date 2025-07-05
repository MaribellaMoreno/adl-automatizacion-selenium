const baseURL = 'https://the-internet.herokuapp.com'
const user = 'tomsmith'
const password = 'SuperSecretPassword!'

describe('Validando login', () => {
  it('Deberia loguearse con datos validos', async () => {
    //Ir al login de la url base
    await browser.url(`${baseURL}/login`)
    // tipear el usuario
    await $('#username').setValue(user)
    // tipear el password
    await $('#password').setValue(password)
    // click para loguearse
    await $('#login > button').click()
    // validar que el usuario se logueo
    await $('#flash').waitForDisplayed()
    await expect($('.flash.success')).toBeDisplayed()
  })
  it('No deberia loguearse con valores invalidos', async () => {
    await browser.url(`${baseURL}/login`)
    await $('#username').setValue('test')
    await $('#password').setValue('superclave')
    await $('#login > button').click()
    await $('#flash').waitForDisplayed()
    await expect($('.flash.error')).toBeDisplayed()
  })
})

/*escribe('Validando el Login', () => {
    it('Login con datos validos', async () => {
        await browser.url(`${baseUrl}/login}`);
        //Visitar la pagina
        await $('#username').setValue(userName);        //Tipear el username

        //Tipear el password 
        await $('#password').setValue(password);  
        //Hacer clic en login
        await $('#login > button').click();
        //Validar mensaje de respuest
        const mensajeRespuesta = await $('#flash');
        
        await expect(mensajeRespuesta).toBeDisplayed();
        await expect(mensajeRespuesta).toHaveText(
            expect.stringContaining('You logged into a secure area!')
        );

    });
});*/