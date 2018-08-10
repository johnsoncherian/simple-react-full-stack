const express = require('express');
const os = require('os');

const app = express();

app.use(express.static('dist'));
app.get('/api/login', (req, res) => res.send({ isLoggedIn: true }));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.listen(8081, () => console.log('Listening on port 8081!'));
