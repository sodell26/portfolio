require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const session = require('express-session')


app.use(express.static('public'))

app.get('/', (req, res) => {
	res.render('home.ejs')
});


app.get('/aboutme', (req,res) => {
	res.render('aboutMe.ejs')
});

app.get('/skills', (req,res) => {
	res.render('skills.ejs')
})


































app.listen(PORT, () => {
	console.log("Testing Sarah's portfolio")
})