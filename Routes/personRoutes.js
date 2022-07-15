const personRoutes = require('express').Router();

personRoutes.get('/person',(req,res)=>{
    res.send('cadastro de pessoas!');
})


module.exports = personRoutes;