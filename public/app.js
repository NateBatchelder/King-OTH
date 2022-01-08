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
app.set('views', path.join(__dirname, "views"));

app.get('/', (req, res)=> {
    res.render('main', {layout: 'index'});
});
// LoginNoAccount Page Route 
app.get('main', (req, res)=> {
    res.render('signup', {layout: 'index'});
});


app.listen(PORT,
    console.log(`App listening to port ${PORT}`)
);