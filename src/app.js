const express = require('express');

const app = express();

app.use('/',(req, res) => {
    res.send('sskggj main');
})

app.listen(8081, () => {
    console.log('server on port=8080');
})
