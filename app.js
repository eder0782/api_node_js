

const ax = require('axios').default;
const axios = ax.create({
    timeout: 1000,
  headers: {'Content-type': 'application/json; charset=UTF-8',}
});


function salvar(titulo,texto){ axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: titulo,
    body: texto,
    userId: 10,
  })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error.data);
  })};

function consulta(id){ axios.get("https://pokeapi.co/api/v2/ability/?limit=20&offset=20")
                .then(function (response) {
                // handle success
                console.log(response.data);
                })
                .catch(function (error) {
                // handle error
                console.log(error.data);
                })};
function deletar() { axios.delete('https://jsonplaceholder.typicode.com/posts/101')
                .then(()=>{
                    console.log('Deletado com sucesso')
                })
                .catch((err)=>{
                    console.log('Erro=>'+err);
                })};

function alterar(id_,titulo,texto){ axios.put('https://jsonplaceholder.typicode.com/posts', {
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error.data);
  })};
// fetch('https://jsonplaceholder.typicode.com/posts/50').then((response) => response.json())
function listarTodos() {axios.get('https://jsonplaceholder.typicode.com/posts')
.then(function (response) {
// handle success
console.log(response.data);
})
.catch(function (error) {
// handle error
console.log(error.data);
})};
   

let titulo='Lorem ipsum';
let texto ='augue vehicula urna auctor mauris ullamcorper purus integer suscipit, arcu sodales hendrerit class dui pretium porta urna fusce, per auctor mollis a dui luctus mattis etiam enim.';


// salvar(titulo,texto)
consulta(100)