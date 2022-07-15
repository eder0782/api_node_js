const userRoutes = require('express').Router();

const User = require('../models/User');

userRoutes.get('/user',async (req,res)=>{

    const{name,password,email,active}=req.query;
    const user={
        name,
        password,
        email,
        active
    }
    await User.create(user).then(()=>{
        res.json({
            error:false,
            message:'Usuário Cadastrado com Sucesso'
        })
    }).catch((err)=>{
        res.json({
            error:true,
            message:'Erro ao cadastrar usuário=> '+err
        })
    })
});

userRoutes.get('/listUserAll',async (req,res)=>{
   
        const allUser = await User.find().catch((err)=>{
            return res.json({
                error:true,
                message:'Erro na consulta => '+err
            })
        })
           
        res.json(allUser);
   
});

module.exports = userRoutes;