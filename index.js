const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200);
    response.end('Page de test de Node');
});

server.listen(3000);
console.log('Adresse du serveur: http://localhost:3000');
const chalk = require('chalk')
console.log(chalk.red('Attention !'))
console.log(chalk.green.underline('It\'s works !'))
console.log(chalk.bgGreen.white.bold('Do NOT miss this'));
console.log(chalk.blue.bgRed.bold('You are dead'));
