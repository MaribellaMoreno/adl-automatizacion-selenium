const baseURL = 'https://ecommerce-js-test.vercel.app/'
const email = 'admin@example.com'
const password = 'admin123'
const admin = 'equipo grupo'

describe('Validando Registro con datos completos', () => {
  it('Ejercicio 1: Registro con datos correctos', async () => {
    //Ir al login de la url base
    await browser.url(baseURL)
    await $('a[href="/register"]').click()
    // tipear el usuario
    await $('#name').setValue(admin)
    //tipear 
    await $('#email').setValue(email)
    // tipear el password
    await $('#password').setValue(password)
    await $('#confirmPassword').setValue(password)
    // click boton crear cuenta
    await $('[type=submit]').click()
    await browser.pause(5000)
    const elem = await $('.space-x-2 > .text-sm').getText()
    // Variante 1: Comprobar que el texto contiene 'Hello, Equipo-grupo'
    // await expect(elem).toMatch(/Hello, Equipo-grupo/i)
    // Variante 2: Comprobar que el texto es exactamente 'Hello, Equipo-grupo'
    await expect(elem).toContain('Hello, Equipo-grupo')
    await $('#root > div > nav > div > div > div > button').click()
    
  })

  it('Ejercicio 2: Registro con datos imcompletos', async () => {
  //Ir al login de la url base
    await browser.url(baseURL)
    await $('a[href="/register"]').click()
    // tipear el usuario
    await $('#name').setValue(admin)
    //tipear 
    await $('#email').setValue(email)
    // tipear el password
    await $('#password').setValue('12345678')
    //await $('#confirmPassword').setValue('1234567') //variante 2 condatos incompletos
    // click boton crear cuenta
    await browser.pause(10000)
    const elemButton = await $('[type=submit]')
    elemButton.click()
    // Variante 1: Comprobar que el texto contiene 'Passwords do not match'
    //const elem = await $('#root > div > div > div > div > div.bg-red-50.border.border-red-200.rounded-lg.p-4.mb-6 > p').getText()
    //await expect(elem).toContain('Passwords do not match') //variante 1

    // Variante 2: Datos incompletos
    // Verificar cada campo requerido
    // Solo verificar el campo que está vacío
    const confirmPasswordField = await $('#confirmPassword')
    const validationMessage = await browser.execute((el) => {
        return el.validationMessage
    }, confirmPasswordField)
    }, confirmPasswordField)
    
    //console.log(Campo #confirmPassword: "${validationMessage}")
    expect(validationMessage).toContain("Completa este campo") // Comprobar que el mensaje de error es el esperado, si debe pasar la prueba

    // todos los campos
    /*
    const fields = ['#name', '#email', '#password', '#confirmPassword']
    for (const fieldSelector of fields) {
    const field = await $(fieldSelector)
    
    const validationMessage = await browser.execute((el) => {
      return el.validationMessage
    }, field)
    
    //const isValid = await browser.execute((el) => {
    //  return el.validity.valid
    // }, field)
    // expect(isValid).toBe(false) // aqui lo que comprueba es que si todos los campos no tiene valores, entonces no son validos
    
    // Este mensaje es para edge
    //expect(validationMessage).toContain('Rellene este campo.') // Comprobar que el mensaje de error es el esperado, si debe pasar la prueba
    // Este mensaje es para Chrome
    expect(validationMessage).toContain("Completa este campo")
    
    
    //console.log(Campo ${fieldSelector}: ${validationMessage})
    */

  
});
 it("Ejercicio 3: Login con datos correctos", async () => {
    //Ir al login de la url base
    await browser.url(baseURL)
    // click en el boton de login
    await $('a[href="/login"]').click()
    // tipear el usuario
    await $('#email').setValue('admin@example.com')
    // tipear el password
    await $('#password').setValue('admin123')
    // click boton crear cuenta
    await $('[type=submit]').click()
    await browser.pause(5000)
    const elem = await $('.space-x-2 > .text-sm').getText()
    await expect(elem).toContain('Hello, Admin User')
    await $('#root > div > nav > div > div > div > button').click()
 });

 it("Ejercicio 4: Login con datos incorrectos", async () => {
    //Ir al login de la url base
    await browser.url(baseURL)
    // click en el boton de login
    await $('a[href="/login"]').click()
    // tipear el usuario
    await $('#email').setValue('admin@example.com')
    // tipear el password
    await $('#password').setValue('admin12')
    // click boton crear cuenta
    await $('[type=submit]').click()
    await browser.pause(5000)
    
    const elem = await $('#root > div > div > div > div > div.bg-red-50.border.border-red-200.rounded-lg.p-4.mb-6').getText()
    // Variante 1: Comprobar que el texto contiene 'Hello, Equipo-grupo'
    // await expect(elem).toMatch(/Hello, Equipo-grupo/i)
    // Variante 2: Comprobar que el texto es exactamente 'Hello, Equipo-grupo'
    await expect(elem).toContain('Invalid email or password')

 });