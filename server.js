const express = require('express');
const html = require('./routes/html')
const api = require('./routes/api');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', html)
app.use('/api', api);

app.get('*', (req, res) =>
    res.send(
        `Make a GET request using Insomnia to <a href="http://localhost:${PORT}">http://localhost:${PORT}</a>`
    )
)

app.listen(PORT, () =>
    console.info(`App listening at http://localhost:${PORT}`)
);