const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
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

app.listen(port, () => console.log(`server is on port ${port}`));