const express = require('express');
const PORT = process.env.PORT || 3000
const path = require('path')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/King-OTH')
let db = mongoose.connection;
db.once('open',function(){
    console.log('connected to mongo bro bro')
})

const app = express();

const handlebars = require('express-handlebars').create({
    layoutsDir: path.join(__dirname, "views/layouts"),
    partialsDir: path.join(__dirname, "views/partials"),
    defaultLayout: 'main',
    extname: 'hbs'
  });
  

app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');

app.get('/', (req, res)=> {
    res.render('index', {layout: 'main'});
});
app.get('/views/signup', (req, res)=> {
    res.render('signup', {layout: 'main'});
});
app.listen(PORT,
    console.log(`App listening to port ${PORT}`)
);