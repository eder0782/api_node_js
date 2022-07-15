const routes = require('express').Router();
const personRoutes = require('./personRoutes');
const userRoutes = require('./userRoutes');
routes.use(personRoutes);
routes.use(userRoutes);
routes.get('/',(req,res)=>{
    res.send('Funcionou!');
})

routes.get('/sobre',(req,res)=>{
    res.send('Abault!');
})




module.exports = routes;

