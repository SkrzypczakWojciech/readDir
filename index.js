var fs = require('fs');
var colors = require('colors');

fs.readdir('./test', 'utf-8', function(err, files) {
    console.log(files);
    fs.writeFile('./tekst.txt', files, function(err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log(data);
        });
    });
});