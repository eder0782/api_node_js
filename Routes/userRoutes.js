const userRoutes = require('express').Router();

const User = require('../models/User');

userRoutes.post('/user',async (req,res)=>{

    const{name,password,email,active}=req.body;
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

userRoutes.delete('/user',async (req,res)=>{
    //const email =  req.params.email;
    //console.log(req.body);
    // res.send('sdfsdf')
   
   const user= await User.findOne(
        {email: req.body.email},
    );

    if(!user){
        return res.json({
            error:true,
            message:'Usuário não econtrado!'
        })
    }
    
    await User.deleteOne(
        {_id: user._id},
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
    
});

userRoutes.get('/user/:email', async (req,res)=>{
    const user = await User.findOne({
        email: req.params.email
    })

    if(!user){
        return res.json({
            error:true,
            message:"Usuário não encontrado"
        })       
    }

    res.json(user);
});


userRoutes.put('/user/:email', async (req,res)=>{
    const {name,email,password,active} = req.body;
    
    const user = await User.findOne({
        email: req.params.email
    })

    if(!user){
        return res.json({
            error:true,
            message:"Usuário não encontrado"
        })       
    }
    const newUser={
        name,
        password,
        email,
        active
    }

    try{
        await User.updateOne({_id: user._id},newUser);
        res.json({
            error:false,
            message:'Usuário atualizado com sucesso!'
        });
    }catch(err){
        res.json({
            error:true,
            message:'Erro ao tentar atualizar o usuário!'
        });

    }

    //res.json(user);
});






module.exports = userRoutes;