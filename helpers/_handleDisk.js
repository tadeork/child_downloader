const fs = require('fs');
const mkdirp = require('mkdirp');

const handleFolder = (directory, item) => {
    let data = {
            'path': directory,
            'item': item
        };
    console.log('CONFIRM: ',directory);
    return new Promise((resolve, reject) =>{
        if (!fs.existsSync(directory)) {
            mkdirp.sync(directory, (err) => {
                if (err) {
                    console.log(err);
                    rejec(err);
                }
                else {
                    console.log('Created directory at ', directory);
                    data.path = directory;
                    data.item = item;
                }
            });
        }
        resolve(data);
    });
};

module.exports = handleFolder;
