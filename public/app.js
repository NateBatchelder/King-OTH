const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000

const { engine } = require('express-handlebars');

app.set('view engine', 'hbs');

app.engine( 'hbs', engine({
    layoutsDir: `${__dirname}/views/layouts`,
    extname: 'hbs',
    defaultLayout: 'index'
}));

app.use(express.static('public'));

app.get('/', (req, res)=> {
    res.render('main');
});

app.listen(PORT,
    console.log(`App listening to port ${PORT}`)
);