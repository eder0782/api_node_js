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

userRoutes.get('/delete/:id',async (req,res)=>{
    const id = req.params.id;
    // console.log(id);
   
   const user= await User.findOne(
        {_id: id}
    );

    if(!user){
        return res.json({
            error:true,
            message:'Usuário não econtrado!'
        })
    }
    
    await User.findByIdAndDelete(
        {_id: id},
        )
    .then(()=>{
        return res.json({
            error:false,
            message:'Usuário excluido com sucesso!!'
        })
    })
    .catch((err)=>{
        console.log(err);
       return res.json({
            error:true,
            message:'Erro ao tentar excluir usuário!'
        })
    })
    
})
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