const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
const path = require('path')
const handlebars = require('express-handlebars').create({
    layoutsDir: path.join(__dirname, "views/layouts"),
    partialsDir: path.join(__dirname, "views/partials"),
    defaultLayout: 'index',
    extname: 'hbs'
  });
  

app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');

app.get('/', (req, res)=> {
    res.render('main', {layout: 'index'});
});
app.get('/', (req, res)=> {
    res.render('login', {layout: 'index'});
});
app.listen(PORT,
    console.log(`App listening to port ${PORT}`)
);