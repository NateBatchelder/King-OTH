const express = require('express');
const router = express.Router();
const User  = require('../models/User');

// Register Form
router.get('/loginNoAccount', async (req, res) => {
  res.render('/signup');
});

// Register Proccess
router.post('/User', async (req, res) => {

  const name = req.body.name;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const password2 = req.body.password2;

  req.checkBody('name', 'Name is required').notEmpty();
  req.checkBody('email', 'Email is required').notEmpty();
  req.checkBody('email', 'Email is not valid').isEmail();
  req.checkBody('username', 'Username is required').notEmpty();
  req.checkBody('password', 'Password is required').notEmpty();
  req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

//   let errors = req.validationErrors();

//   if (errors) {
//     res.render('register', {
//       errors: errors
//     });
//   } else {
//     const salt = await bcrypt.genSalt(10);
//     const newUser = await User.create({
//       name: req.body.name,
//       email: req.body.email,
//       username: req.body.username,
//       password: await bcrypt.hash(req.body.password, salt)
//     });
//     newUser.save();
//     req.flash('success', 'You are now registered and can log in');
//     res.redirect('/users/login');
//   }
});


// Login Form
// router.get('/', async (req, res) => {
//   res.render('');
// });

// // Login Process
// router.post('/login', async (req, res, next) => {
//   passport.authenticate('local', {
//     successRedirect: '/',
//     failureRedirect: '/users/login',
//     failureFlash: true
//   })(req, res, next);
// });

// logout
// router.get('/logout', async (req, res) => {
//   req.logout();
//   req.flash('success', 'You are logged out');
//   res.redirect('/users/login');
// });
router.get('/', (req, res) => {
    res.render('index', { layout: 'main' });
});
router.get('/views/signup', (req, res) => {
    res.render('signup', { layout: 'main' });
});
router.get('/views/signedInHome', (req, res) => {
    res.render('signedInHome', { layout: 'main' });
});
router.post('/views/signedInHome', (req, res) => {
    res.render('signedInHome', { layout: 'main' });
});
router.post('/routes/users', (req, res) => {
    const body = req.body
    const user = new User(body)
    User.create(body)
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(400).json(err));

    // res.json({ message: 'First User' })
})
router.post('/routes/users/login', (req, res) => {
     const body = []
    // const user = new User(body)
    // User.validate(user)
    // .then(dbUser => res.json(dbUser))
    // .catch(err => res.status(400).json(err));

     res.json({ message: 'First User' })
})
module.exports = router;