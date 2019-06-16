const express = require('express');
const https = require('https')
const xml2js = require('xml2js')
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/flickerFeed',function(req, res) {
    let tags = req.param('tags');
    console.log(tags);
    let query_uri = 'https://api.flickr.com/services/feeds/photos_public.gne';
    if (tags && tags!==''){
        query_uri = query_uri+'?tags='+tags;
    }

    let images = [];
    https.get(query_uri,(resp) =>{
        let data='';
        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('error',function (e) {
            console.error(e);
        });

        resp.on('end',() =>{
            xml2js.parseString(data, function (err, result) {
                if(err) {
                    console.error(err);
                }
                const entries = result.feed.entry
                for(let index in entries){
                    const entry = entries[index]
                    let image = {title:entry.title}
                    const imagesrc = entry.link.filter( link => link.$.rel === 'enclosure')
                    console.log(imagesrc)
                    image.src= imagesrc[0].$.href;
                    images.push(image);
                }
                console.log(images)
                res.send(images);
            });
        });
    });
});

const port = process.env.PORT || 8080;

app.listen(port,() => console.log(`Listening on port ${port} ....`));