require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const session = require('express-session')



app.get('/', (req, res) => {
	res.send('The beginning')
});



































app.listen(PORT, () => {
	console.log("Testing Sarah's portfolio")
})