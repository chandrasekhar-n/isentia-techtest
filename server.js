const express = require('express');
const https = require('https')
const parseString = require('xml2js').parseString
const app = express();

app.route('/api/flickerFeed').get((req, res) => {
    https.get('https://api.flickr.com/services/feeds/photos_public.gne',(resp) =>{
        let data='';
        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('error',function (e) {
            console.error(e);
        });

        resp.on('end',() =>{
            parseString(data, function (err, result) {
                console.error(err);
                res.send(result);
            });
        });
    });
});

const port = process.env.PORT || 3000;

app.listen(port,() => console.log(`Listening on port ${port} ....`));