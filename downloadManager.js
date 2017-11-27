const { path } = require('path');
const { os } = require('os');
const handleFolder = require('./helpers/_handleDisk');
const { fork } = require('child_process');
const forked = fork('./helpers/child.js');

const numbers = [1,2,3,4];

console.log(numbers)
numbers.forEach(n => {
    console.log(n)
    const forked = fork('./helpers/child.js');
    forked.send({ number: n,
    access_token: '123abc', data: {data: 'more data'}});
})

forked.on('message', (msg) => {
    console.log('Mensaje del hijo: ', msg)
})

forked.send({hello: 'World'})

let downloadManager = (items, access_token) => {
    console.log(access_token);
    let filePath = '';

    let options = {
        count: 8,
        headers: {
            'Authorization': 'Bearer ' + access_token,
        },
        onStart: function (meta) {
            console.log('Download started ', JSON.stringify(meta, null, 2)); },
        onEnd: function (err, result) {
            if (err) console.error(err);
            else {
                console.log('Download Complete');
            }
        }
    };

    let promisArr = [];
    items.forEach(item => {
        if (item.preserveStructure) {
            let structurePath = item.path.substring(item.path.lastIndexOf('/'), 1);
            promisArr.push(handleFolder(path.join(item.destination, structurePath), item));
        } else {
            handleDownload(options, item, item.destination);
        }
    });
    Promise.all(promisArr).then(folders => sendElements(result, options));
};

const sendElements = (result, options) => {
    result.forEach()
    const forked = fork('./helpers/child.js');
    forked.send({ result: n,
    access_token: '123abc'});
}
