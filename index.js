process.title = 'MeuServidorNode';
const port = 7070;
const webServer = require('./server');

webServer.listen(port, () => console.log('WebServer rodando na porta ' + port));