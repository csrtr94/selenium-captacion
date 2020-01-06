const {Builder, By, Key, until} = require('selenium-webdriver');
const selector = require('./../selectores/selector');
const readExcel = require('./../readExcel');




exports.prueba = async ()=> {

    let driver = await new Builder().forBrowser('chrome').build();
       let excel = await readExcel(2);
       console.log("Resulta2: ",excel);
        await driver.get("http://192.168.93.81/captacionOnline/?codCanal=2");
        // PP http://192.168.76.10/captacionOnline/?codCanal=2
        // TEST http://192.168.93.81/captacionOnline/?codCanal=2
        await driver.findElement( By.xpath(selector.capaUno.rut)).sendKeys(excel.rut)
        .then(()=> console.log("Rut ok"))
        .catch(err => console.log("Error rut"));
             
        await driver.findElement( By.xpath(selector.capaUno.celular)).sendKeys(excel.cel)
        .then(()=>console.log("Celular ok"))
        .catch(err => console.log("Error celular"));
        
        await driver.findElement( By.xpath(selector.capaUno.mail)).sendKeys(excel.email)
        .then(()=>console.log("Email ok"))
        .catch( err => console.log("Error email"));
        
        await driver.findElement( By.xpath(selector.capaUno.btn)).click();

        await driver.sleep(10000);

        // let check1 = driver.wait( until.elementLocated( By.xpath("/html/body/div/div/div[2]/div/div[1]/div[1]/div/div[3]/span/span[1]/input"),10000));
        // await check1.click();

        await driver.sleep(10000);
        let solicitar = driver.wait(until.elementLocated( By.xpath(selector.capaDos.btnSolicitar),10000));
        await solicitar.click();

        //PAGE 3
        await driver.sleep(10000);
        
        let txtNumSerie = driver.wait( until.elementLocated( By.id(selector.capaTres.numSerie),5000));     
        txtNumSerie.sendKeys(excel.serie).then(()=> console.log("Numero de serie ok")).catch(err => console.log("Error numero de serie"));

        let validarCedula = driver.wait( until.elementLocated( By.id("btnValidaCedula"),5000));
        await validarCedula.click();

        await driver.sleep(10000);

        let checkUno = driver.wait( until.elementLocated( By.xpath(selector.capaCuatro.checkUno),5000));
        
        await checkUno.click()
        .then(()=>console.log("Checkbox 1 seleccionado")).catch(err => console.log("Error al seleccionar checkbox"));

        let checkDos = driver.wait( until.elementLocated( By.xpath(selector.capaCuatro.checkDos),5000));
        await checkDos.click()
        .then(()=>console.log("Checkbox 2 seleccionado")).catch(err => console.log("Error al seleccionar checkbox"));

        let checkTres = driver.wait( until.elementLocated(By.xpath(selector.capaCuatro.checkTres),5000));
        await checkTres.click()
        .then(()=>console.log("Checkbox 3 seleccionado")).catch(err => console.log("Error al seleccionar checkbox"));

        let checkCuatro = driver.wait( until.elementLocated( By.xpath(selector.capaCuatro.checkCuatro),5000));
        await checkCuatro.click()
        .then(()=>console.log("Checkbox 4 seleccionado")).catch(err => console.log("Error al seleccionar checkbox"));

        await driver.findElement( By.xpath(selector.capaCuatro.btnSiguiente)).click();

        await driver.findElement( By.xpath(selector.capaCuatro.btnAuth)).click()
        .then(()=>console.log("Auth ok")).catch(err => console.log("Error auth"));

        await driver.sleep(10000);
        
        let esUsPerson = driver.wait( until.elementLocated( By.xpath("/html/body/div/div/div[2]/div/div[1]/div/div[1]/div[2]/label[1]/span[1]/span[1]/input"),10000));
        await esUsPerson.click()
        .then(()=>console.log("US Person 1 ok")).catch(err => console.log("Error al seleccionar US Person"));

        await driver.sleep(10000);

        let closePopout = driver.wait( until.elementLocated( By.xpath("/html/body/div[2]/div[2]/div/div[1]/h6/button"),10000));
        await closePopout.click();

        await driver.sleep(5000);

        let usPerson = driver.wait( until.elementLocated( By.xpath("/html/body/div/div/div[2]/div/div[1]/div/div[1]/div[2]/label[2]/span[1]/span[1]/input"),10000));
        await usPerson.click()
        .then(()=>console.log("US Person 2 ok")).catch(err => console.log("Error al seleccionar US Person 2"));

        let tipoActividad = driver.wait( until.elementLocated( By.xpath(selector.capaCinco.tipoActividad),10000));
        await tipoActividad.sendKeys(excel.tipoActividad, Key.ENTER)
        .then(()=>console.log("Tipo de actividad ok")).catch(err => console.log("Error al seleccionar tipo de actividad"));
        
        let btnNext =  driver.wait( until.elementLocated( By.xpath("/html/body/div/div/div[2]/div/div[4]/button"),10000));
        await btnNext.click();


        //LAST PAGE
        let cup = driver.wait(until.elementLocated( By.xpath("/html/body/div/div/div[2]/div/div[1]/div/div[2]/label/span[1]/span[1]/input"),10000));
        await driver.sleep(3000)
        await cup.click()
        .then(()=>console.log("CUP ok")).catch(err => console.log("Error al seleccionar CUP"));

        let registroFirmas = driver.wait(until.elementLocated( By.xpath("/html/body/div/div/div[2]/div/div[2]/div/div[2]/label/span[1]/span[1]/input"),10000));
         await registroFirmas.click()
         .then(()=>console.log("Resumen ok")).catch(err => console.log("Error al seleccionar resumen"));

        let FATCA = driver.wait(until.elementLocated( By.xpath("/html/body/div/div/div[2]/div/div[3]/div/div[2]/label/span[1]/span[1]/input"),10000));
        await FATCA.click()
        .then(()=>console.log("FATCA ok")).catch(err => console.log("Error al seleccionar FATCA"));

        let anexos = driver.wait(until.elementLocated( By.xpath("/html/body/div/div/div[2]/div/div[4]/div/div[2]/label/span[1]/span[1]/input"),10000));
        await anexos.click()
        .then(()=>console.log("Anexos ok")).catch(err => console.log("Error al seleccionar anexos"));

        // let KYC = driver.wait(until.elementLocated( By.xpath("/html/body/div/div/div[2]/div/div[7]/div/div[2]/label/span[1]/span[1]/input"),10000));
        // await KYC.click()
        // .then(()=>console.log("KYC ok")).catch(err => console.log("Error al seleccionar KYC"));
        ///html/body/div/div/div[2]/div/div[8]/button
        let btnContratar = driver.wait( until.elementLocated( By.xpath("/html/body/div/div/div[2]/div/div[5]/button"),10000));   
        await btnContratar.click();

        await driver.wait( until.elementLocated(By.xpath("/html/body/div[2]/div[2]/div/div[1]/div/div/div/input"),3000)).sendKeys(excel.sms)
        .then(()=>console.log("SMS ok")).catch(err => console.log("Error al ingresar SMS"));

        let btnConf = driver.findElement( By.xpath("/html/body/div[2]/div[2]/div/div[1]/button"));
        await btnConf.click();

        driver.sleep(3000);

        await driver.wait( until.elementLocated(By.xpath("/html/body/div/div/div[2]/div/div[2]/div[1]/div/div/input"))).sendKeys(excel.clave)
        .then(()=>console.log("Contraseña ok")).catch(err => console.log("Error al ingresar contraseñas"));

        await driver.wait( until.elementLocated(By.xpath("/html/body/div/div/div[2]/div/div[2]/div[2]/div/div/input"))).sendKeys(excel.clave)
        .then(()=>console.log("Contraseña 2 ok")).catch(err => console.log("Error al ingresar contraseñas"));

        await driver.wait( until.elementLocated(By.xpath("/html/body/div/div/div[2]/div/div[3]/button"),3000)).click();

        setTimeout( ()=>{
            driver.quit().then(()=>console.log("Proceso terminado"));
        },5000)

}