const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/api');
const app = express();
const porta = 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // Serve os arquivos da pasta public

// Usando as rotas separadas
app.use('/api', apiRoutes);

// Rota raiz envia o index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para a página de listagem
app.get('/feedbacks/lista', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'lista.html'));
});

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});