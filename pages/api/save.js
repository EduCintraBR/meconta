import { GoogleSpreadsheet } from'google-spreadsheet'
import moment from 'moment'

import credentials from '../../credentials.json'

const doc = new GoogleSpreadsheet('1GN7Y73p6bvDEbo44JeaquRiClTTE4HwkrboAY8ImI3w')

const genCupom = () => {
   const code = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase()
   return code.substr(0,4) + '-' + code.substr(4,4) + '-' + code.substr(8,4)
}

export default async(req, res) =>{
    try{
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()
        console.log(doc.title)
        const sheet = doc.sheetsByIndex[1]
        const data = JSON.parse(req.body)

        const sheetConfig = doc.sheetsByIndex[2]
        await sheetConfig.loadCells('A2:B2')

        const mostrarPromocaoCell = sheetConfig.getCell(1, 0)
        const textoCell = sheetConfig.getCell(1, 1)

        let Cupom = ''
        let Promo = ''
        if(mostrarPromocaoCell.value === 'VERDADEIRO'){
           // GERANDO CODIGO DE CUPOM
           Cupom = genCupom()
           Promo = textoCell.value 
        }

        //Nome Email Whatsapp Cupom Promo
        await sheet.addRow({
            Nome: data.Nome,
            Email: data.Email,
            Whatsapp: data.Whatsapp,
            Nota: parseInt(data.Nota),
            'Data Preenchimento': moment().format('DD/MM/YYYY, HH:mm:ss'),
            Cupom,
            Promo
        })
          res.end(JSON.stringify({
              showCoupon: Cupom !== '',
              Cupom,
              Promo
          }))
        }catch (err) {
            console.log(err)
            res.end('error')
        }
}