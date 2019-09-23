// 'files' will be an array of filenames, like ['bash.js', 'pwd.js']
const fs = require('fs');

const lsFunc = (cmd) => {
    if(cmd === 'ls'){
        fs.readdir('./', 'utf8', (err, files) => {
            if (err) {
                throw err
            }else {
                process.stdout.write(files.join('\n'))
                process.stdout.write('prompt > ');
            }
        })
    }
}

module.exports = lsFunc;