const express = require('express')
const app = express()
const port = 3000
app.use(express.urlencoded({extended:true}));

//trabalhae com arquivos estaticos
app.use(express.static('public'));

//rotas -- rota padrão (/)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.get('/sobre', (req, res) => {
  res.sendFile(__dirname + '/public/sobre.html')

})

app.post('/contato', (req,res)=> {
    const {nome, email} = req.body;
    res.send(`Dados cadatrados: ${nome}, ${email}`);
    
}) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
