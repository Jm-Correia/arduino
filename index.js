const app = require('express')();
const consign = require('consign');

consign()
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app);



const porta = 5000;

app.listen(5000, ()=>{
    console.log(`Backend executando, esperando conexões do Arduino, na porta ${porta}`);
});