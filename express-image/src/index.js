var Chance = require("chance");
var chance = new Chance();
var express = require('express');
var app = express();
 
 
 
app.get('/', function (req, res) {
  res.send( generateCityHashtags() );
})

app.listen(3000, function () {
  console.log('Accept HTTP requests on port 3000.');
})
 
function generateCityHashtags(){
    var numberOfCities = chance.integer({
        min: 0,
        max: 10
    });
    console.log(numberOfCities);
    var citiesHashtags = [];
    for(var i = 0; i < numberOfCities; i++) {
        citiesHashtags.push({
            city: chance.city(),
            hashtag: chance.hashtag(),
        })
    };
    console.log(citiesHashtags);
    return citiesHashtags;
}
 
