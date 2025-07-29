const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});