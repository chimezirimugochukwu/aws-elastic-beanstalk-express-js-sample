const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! Richards here sending out a message of Love!! Are you listening, can you feel it!!!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
