// import npm
const express = require('express');
const app = express();
const path = require('path');

// set up ejs
app.set('view engine', 'ejs');
// look for views where this file (index.js) is located
app.set('views', path.join(__dirname, '/views'));

// render home.ejs template from views
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/rand', (req, res) => {
    // random number generator
    const num = Math.floor(Math.random() * 10) + 1;
    // render random.ejs template, passing random num object
    res.render('random', { rand: num })
})

// subreddit pattern
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    // render subreddit template and pass {subreddit: subreddit}
    res.render('subreddit', { subreddit })
})

// looping example
app.get('/cats', (req, res) => {
    // array of cats
    const cats = [
        'Blue', 'Woof', 'Melody', 'Max', 'Puffy'
    ]
    res.render('cats', { cats })
})

// local hosting
app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000');
})