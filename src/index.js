const express = require('express')
const path = require('path')
const exphbs  = require('express-handlebars');
const app = express()
const port = 3001

//Template engiiner
app.engine('hbs', exphbs({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) {
    res.render('home')
})
app.get('/home', function (req, res) {
    res.render('home')
})
app.get('/services', function (req, res) {
    res.render('services')
})
app.get('/projects', function (req, res) {
    res.render('projects')
})
app.get('/user', function (req, res) {
    res.render('user')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})