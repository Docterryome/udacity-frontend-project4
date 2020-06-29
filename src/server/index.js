var path = require('path')
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const AYLIENTextAPI = require('aylien_textapi');

var textapi = new AYLIENTextAPI({
  application_id: "0f0e3651",
  application_key: "5e0a5db8809d61bc91a4f1e6e2b464a2"
});




const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    textapi.entityLevelSentiment({
        'text': 'Punta Cana is a dope city!'
      }, function(error, response) {
        if (error === null) {
          res.send(response);
        }
      });
})
