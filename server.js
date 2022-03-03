const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

//Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//React Build Output folder
app.use(express.static(path.join(__dirname, 'build')))

//Send all other request to React app
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
})

const port = process.env.PORT || '3046';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));