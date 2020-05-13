const express = require('express');
const app = express();
const path = require('path');

// Qual sistema de views que o express usará
app.set('view engine', 'ejs');

// De qual diretório o express usará os arquivo como templates.
// path.join(__dirname, 'views') - vai dar um join no diretório atual com o
// diretório 'views' com auto escape
app.set('views', path.join(__dirname, 'views'));

app.get('/', (request, response) => {
	response.json({
		nome: "Lis docinho"
	});
});

app.get('/page', (request, response) => {

	// irá chamar e renderizar o template 'page'
	response.render('page', { name: 'Lis docinho' });
});

app.listen(3000, err => {
	console.log(err);
});
