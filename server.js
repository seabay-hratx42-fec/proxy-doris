require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.listen(port, () => console.log(`Listening on ${port}`));