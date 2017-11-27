const mtd = require('zeltice-mt-downloader');
const fs = require('fs');

process.on('message', (data) => {
    console.log(data);
    fs.writeFile('helloworld_' + data.number + '.txt', JSON.stringify(data, null, 2), function (err) {
        if (err) return console.log(err);
        console.log(data,'> helloworld.txt');
      });
})
