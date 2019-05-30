const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.sendFile('views/index.html', { root: __dirname });
});

app.get('/solutions', (req, res) => {
	res.sendFile('views/solutions.html', { root: __dirname });
});

app.get('/faq', (req, res) => {
	res.sendFile('views/faq.html', { root: __dirname });
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
