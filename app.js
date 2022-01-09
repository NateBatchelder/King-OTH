const User = require('./models/User.js');
const express = require('express');
const PORT = process.env.PORT || 3000;
const path = require('path');
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/King-OTH', {
//     useFindAndModify: false,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// let db = mongoose.connection;

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

app.get('/', (req, res) => {
    res.render('index', { layout: 'main' });
});
app.get('/views/signup', (req, res) => {
    res.render('signup', { layout: 'main' });
});

app.post('/views/api/users', (req, res) => {
    const body = req.body
    const user = new User(body)
    console.log(body)
    User.create(user)
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(400).json(err));

    // res.json({ message: 'First User' })
})

// db.once('open', function () {
//     app.listen(PORT,
//         console.log(`App listening to port ${PORT}`)
//     );
//     console.log('connected to mongo bro bro')
// })
app.listen(PORT,
    console.log(`App listening to port ${PORT}`)