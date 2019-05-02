var fs = require('fs')

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello world');
});



var stringifyFile;
app.use(bodyParser.json());


app.get('/getNote', function (req, res) {
    res.send('Odczytujemy');
    fs.readFile('./test.json', 'utf8', function(err, data) {
        if (err) throw err;
        stringifyFile = data
        res.send(data);
    });
});

app.post('/updateNote/:note', function (req, res) {
    res.send('Zapisujemy');
    fs.writeFile('./test.json', stringifyFile, function(err) {
        if (err) throw err;
        console.log('file updated');
    });
});

app.listen(3000);