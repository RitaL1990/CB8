const express = require ('express');
const bodyParser = require ('body-parser');

const author = require('./auth');

const app =  express();
app.use((req,res,next) => {
    console.log(__dirname)

next();
})


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/dashboard', author, (req, res) => {
    res.sendFile(__dirname + './public/index.html');
});

app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/public/form.html')
});


app.post('/mostra-dati', (req, res) => {
    const { nome } = req.body;
    const { cognome } = req.body;

    if (nome && cognome) {
        res.status(201).send(`Welcome ${nome} ${cognome}!`);
    }
    
});


app.listen(8000, () => {
    console.log('server attivo');
})