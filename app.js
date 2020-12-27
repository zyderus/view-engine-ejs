const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
// Activate to enable templating
app.use(expressLayouts);
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));

const list = [
  { type: 'mamal', animal: 'copybara' },
  { type: 'fish', animal: 'sting ray' },
  { type: 'reptile', animal: 'dragon' },
  { type: 'bird', animal: 'penguin' }, 
];
let person;
// person = { name: 'Rustams', age: 40 };

app.get('/', (req, res) => res.render('index', { list, person }));

// Templating (initialize expressLayouts)
app.get('/layout', (req, res) => res.render('index-insert'));
app.get('/layout-about', (req, res) => res.render('about-insert'));

app.listen(port, () => console.log(`server is on port ${port}`));