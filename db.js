//lloT4gdiZTfoNBVx
//user:eder0782
//mongodb+srv://eder0782:<password>@primeirocluster.watpkc4.mongodb.net/?retryWrites=true&w=majority
const mongoose = require('mongoose');

const DB_USE = 'eder0782';
const DB_PASS = 'lloT4gdiZTfoNBVx'
const connect = `mongodb+srv://${DB_USE}:${DB_PASS}@primeirocluster.watpkc4.mongodb.net/?retryWrites=true&w=majority`;

async function dbConnect(){ await mongoose.connect(connect).then(()=>{
    console.log('Conexxão realizada com sucesso!');
}).catch((err)=>{
    console.log('Erro ao tentar conectar ao banco!');
})}

module.exports = dbConnect();
