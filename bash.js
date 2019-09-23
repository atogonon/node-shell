// Output a prompt

const pwd = require('./pwd');
const lsFunc = require('./ls');

process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); // remove the newLine

    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');

    pwd(cmd);

    lsFunc(cmd);
});
