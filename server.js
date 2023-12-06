const express = require('express');
const path = require('path');
const html = require('./routes/html')
const api = require('./routes/api');

const app = express();

const PORT = process.env.PORT || 3001

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', api);

app.get('*', (req, res) =>
    res.send(
        `Make a GET request using Insomnia to <a href="http://localhost:${PORT}/api/terms">http://localhost:${PORT}/api/terms</a>`
    )
)

app.listen(PORT, () =>
    console.info(`App listening at http://localhost:${PORT}`)
);