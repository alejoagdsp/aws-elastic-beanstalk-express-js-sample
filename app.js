const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Engineer, you are making all fine !. i do you need know how testing in mode review'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
