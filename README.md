# EJS view engine
EJS stands for Embeded JavaScript. It's a templating script to generate dynamic web pages using JavaScript. Errors are easier to debug: error output includes line-numbers.

### Main tags
| tags | description |
| ------ | ------ |
| **<% %>** | Javascript logic (Control flow) |
| **<%= %>** | Escaped output to page |
| **<%- %>** | Unescaped output to page (Raw Html) |
| **<%# %>** | Comment tag, no execution, no output |

### Embed other HTML files
```sh
  <%- include('partials/header') %>
```

### Iterate through an array
```sh
  <% list.forEach(item => { %>
    <li><%= item.name %></li>
  <% }) %> 
```

<p align="center">
  <img src="ejs.png">
</p>

### Templating
Layout is not native to EJS, however it is easy to setup by installing package **express-ejs-layouts**
```sh
  npm i express-ejs-layouts
```
- import the package in your app file and initialize
```sh
  const expressLayouts = require('express-ejs-layouts');
  app.use(expressLayouts);
```

- setup routes for home and about pages
```sh
    app.get('/layout', (req, res) => res.render('index-insert'));
    app.get('/layout-about', (req, res) => res.render('about-insert'));
```

- in view directory make a layout file. It'll be a **wrapper**
- place **<%- body %>** tag *(inserts rendered here)*
```sh
    <!DOCTYPE html>
    <html>
    <head>
      <title>Title</title>
    </head>
    <body>
      <small>template.ejs</small>
      <%- body %>
    </body>
    </html>
```
- make HTML files that will be **inserts**

index-insert.ejs
```sh
    <div>
      <h1>Welcome to Index page</h1>
      <a href="/layout-about">About</a>
    </div>
```

about-insert.ejs
```sh
    <div>
      <h1>About page</h1>
      <a href="layout">Index</a>
    </div>
```
##### Layout path
Once layouts activated, every route will load layout.ejs and res.render page into <%- body %> section. Test layout route here *localhost:3000/layout*