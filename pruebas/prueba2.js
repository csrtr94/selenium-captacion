const {Builder, By, Key, until} = require('selenium-webdriver');


exports.prueba2 = async ()=>{
   
    let driver = new Builder().forBrowser('chrome').build();

    driver.get("http://192.168.93.81/captacionOnline/?codCanal=2");

    //PAGE 1
    await driver.findElement( By.xpath(selector.capaUno.rut)).sendKeys("177390453");
    await driver.findElement( By.xpath(selector.capaUno.celular)).sendKeys("92836409");
    await driver.findElement( By.xpath(selector.capaUno.mail)).sendKeys("csrtr94@gmail.com");
    await driver.findElement( By.xpath(selector.capaUno.btn)).click();

    let solicitar = driver.wait(until.elementLocated( By.xpath(selector.capaDos.btnSolicitar),10000));
    await solicitar.click();

    //PAGE 3

    let txtNumSerie = driver.wait( until.elementLocated( By.id(selector.capaTres.numSerie),5000));
    txtNumSerie.sendKeys("517471210");

    let validarCedula = driver.wait( until.elementLocated( By.id("btnValidaCedula"),5000));
    await validarCedula.click();

    await driver.sleep(5000);

    let checkUno = driver.wait( until.elementLocated( By.xpath(selector.capaCuatro.checkUno),5000));
    await checkUno.click();

    let checkDos = driver.wait( until.elementLocated( By.xpath(selector.capaCuatro.checkDos),5000));
    await checkDos.click();


    let checkTres = driver.wait( until.elementLocated(By.xpath(selector.capaCuatro.checkTres),5000));
    await checkTres.click();

    let checkCuatro = driver.wait( until.elementLocated( By.xpath(selector.capaCuatro.checkCuatro),5000));
    await checkCuatro.click();

    await driver.findElement( By.xpath(selector.capaCuatro.btnSiguiente)).click();

    await driver.findElement( By.xpath(selector.capaCuatro.btnAuth)).click();

    await driver.sleep(3000);

    let tipoActividad = driver.wait( until.elementLocated( By.xpath(selector.capaCinco.tipoActividad)));
    await tipoActividad.sendKeys("dependiente", Key.ENTER);
    
    let btnNext =  driver.findElement( until.elementLocated( By.xpath(selector.capaCinco.btnSiguiente),10000));
    await btnNext.click();




}