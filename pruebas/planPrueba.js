const {Builder, By, Key, until} = require('selenium-webdriver');
const s = require('./../selectores/selector');


exports.prueba = async ()=>{
    console.log("Plan de prueba");

    let driver = await new Builder().forBrowser('chrome').build();
    //let excel = await readExcel(3,"ctaMastercard");
       //console.log("Resulta2: ",excel);
    await driver.get("http://192.168.93.81/captacionOnline/?codCanal=2");
    
    await driver.findElement( By.xpath(s.capaUno.rut)).

  
}