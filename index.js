let express = require('express');
let app = express();
let port = 3000;
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const cors = require('cors')
const axios = require('axios')
const { body, validationResult } = require('express-validator');
require('dotenv').config();

const path = require('path')
app.set('views', path.join(__dirname, 'views'));

app.use(express.json())
app.use(express.urlencoded({extended: true}));
//const key = '1081923ad12c48aea50a3b75a7109182';
const key = process.env.API_KEY
//const endpoint = 'https://systemintcomputervision.cognitiveservices.azure.com/'
const endpointURL = process.env.API_ENDPOINT

app.set('view engine','ejs')



app.get('/',(req, res)=>{
    console.log(key)
    console.log(endpointURL)
    res.render('./landing')
    //res.send('Hello');
});

app.post('/readtext', (req,res)=> {
    urlss = req.body
    imgUrl = req.body.imgUrl
    console.log("&********************************")
    console.log(req.body)


    axios.post(
        endpointURL,
        {
            'url': imgUrl
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key': key
            }
        }
    ).then(async function (result)  {
        //console.log(result.headers)
        //console.log(result.headers['operation-location'])
        //res.send(results)
        newUrl = result.headers['operation-location']
        do {
            textdata = await axios.get(newUrl, {
                headers: {
                    'Ocp-Apim-Subscription-Key': key,
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: '{body}'
                } )
            await sleep(6000);
        }
        while (textdata.data['status'] !== 'succeeded');

        //console.log(textdata.data.analyzeResult.readResults[0].lines)

        let lines = textdata.data.analyzeResult.readResults[0].lines

      
        var texts = ''
        var finalText = lines.reduce((text, curr) => {
            return `${text} ${curr.text}` 
        }, texts)

        console.log(finalText)
        res.send(finalText)

    })
    
  


});

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

app.listen(port, () => {
    console.log('API running on port',port);
});