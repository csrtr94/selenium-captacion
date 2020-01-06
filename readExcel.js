const excel = require('exceljs');
const wb = new excel.Workbook();
const path = require('path');

module.exports = (row) => {

    
    let url = path.join(__dirname+'/test.xlsx');

    let resultado = wb.xlsx.readFile(url).then(()=>{
        let worksheet = wb.getWorksheet('Hoja1');
        let resultExcel = {
            "rut" : worksheet.getRow(row).values[1],
            "cel" : worksheet.getRow(row).values[2],
            "email" : worksheet.getRow(row).values[3].text,
            "serie" : worksheet.getRow(row).values[4],
            "tipoActividad" : worksheet.getRow(row).values[5],
            "sms" : worksheet.getRow(row).values[6],
            "clave" : worksheet.getRow(row).values[7]
            
        }
        return resultExcel;
    }).catch( err => console.log("Error al leer archivo"));

    return resultado;


}

