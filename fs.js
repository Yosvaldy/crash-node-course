//Writing and reading files

const fs = require('fs');

fs.writeFile('message.txt', 'This text was written now!', err => {
    if(err) throw err;

    console.log('File written successfully');

    fs.readFile('./message.txt', 'utf8', (err, data) => {
        if(err) throw err;

        console.log(data);
    }) 
});