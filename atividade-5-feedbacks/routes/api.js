const express = require('express');
const router = express.Router();

let listaDeFeedbacks = [];

// Rota para cadastrar feedback
router.post('/feedbacks/enviar', (req, res) => {
    const { nome, comentario } = req.body;
    const novoFeedback = { id: Date.now().toString(), nome, comentario };
    listaDeFeedbacks.push(novoFeedback);
    
    // Redireciona para a página de lista conforme solicitado
    res.redirect('/feedbacks/lista');
});

// Rota para retornar os dados (usada pelo fetch no frontend)
router.get('/feedbacks/dados', (req, res) => {
    res.json(listaDeFeedbacks);
});

// Rota para remover feedback
router.post('/feedbacks/remover', (req, res) => {
    const { id } = req.body;
    listaDeFeedbacks = listaDeFeedbacks.filter(f => f.id !== id);
    res.redirect('/feedbacks/lista');
});

module.exports = router;