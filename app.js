const { User }= require('./models/User');
const express = require('express');
const PORT = process.env.PORT || 3000;
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/King-OTH', {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
let db = mongoose.connection;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
const handlebars = require('express-handlebars').create({
    layoutsDir: path.join(__dirname, "views/layouts"),
    partialsDir: path.join(__dirname, "views/partials"),
    defaultLayout: 'main',
    extname: 'hbs'
});


app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');
app.use(express.json());
app.use(express.urlencoded({
    extended:false
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./routes/users.js'))


db.once('open', function () {
    app.listen(PORT,
        console.log(`App listening to port ${PORT}`)
    );
    console.log('connected to mongo bro bro')
})
