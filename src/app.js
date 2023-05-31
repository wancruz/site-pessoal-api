require('./config/dotenv');
require('express-async-errors');

const { initDatabase } = require('./config/db')
const cors = require('cors')

const express = require('express')

const app = express()

//    Estou Importando as Rotas
const aboutRoute = require('./routes/aboutRoute')
const projectRoute = require('./routes/projectRoute')
const skillsRoute = require('./routes/skillsRoute')
const authRoute = require('./routes/authRoute')

const PORT = process.env.APP_PORT || 5000

app.get('/', (req, res) => {
  res.send('Seja bem vindo a minha API do Site Pessoal')
})

app.use(cors())

app.use(express.json())

//Estou chamando a função
app.use('/api/sobre', aboutRoute)
app.use('/api/projetos', projectRoute)
app.use('/api/habilidades', skillsRoute)
app.use('/api/auth', authRoute)

initDatabase()

app.use((err,req, res, next) => { 
  console.error(err.stack)
  res.status(500).send({'Error': err.message});
});
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
