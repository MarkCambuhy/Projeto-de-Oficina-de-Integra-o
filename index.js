let express = require('express'),
    path = require('path'),
    app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'view'));
app.use(express.static(__dirname + '/public'));

app.get('/home', (req, res) => {
    res.render('home');
});
app.get('/produtos', (req, res) => {
    res.render('produtos');
});
app.get('/American-Vintage-II-1963-Telecaster', (req, res) => {
    res.render('singleprod');
});
app.get('/favoritos', (req, res) => {
    res.render('favoritos');
});
app.get('/bag', (req, res) => {
    res.render('bag');
});
app.get('/login', (req, res) => {
    res.render('login');
});
app.get('/register', (req, res) => {
    res.render('register');
});


app.listen(3000);