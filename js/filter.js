let arrayPessoas = [];
const searching = document.getElementById("inputsearch");
const pagina = document.getElementById("lista");

fetch("https://api.github.com/search/users?q=+type:User+location:Piracicaba")

   .then(resposta => resposta.json())
   .then(pessoas => arrayPessoas.push(...pessoas.items));


   
  console.log(arrayPessoas)




// function encontrarPiracicabano (pesquisa, array) {
//      return array.filter((pessoa) => {
         
//          const regex = new RegExp(pesquisa, 'gi'); //pr puxar metade da string
//          return regex.test(pessoa.id);//vai testar se existe uma pessoa aqui
     
//      })
// };

// function exibirPessoa (){
//     console.log(arrayPessoas);
//     pagina.innerHTML = "";
    
//     const resultadoPessoa = encontrarPiracicabano(this.value, arrayPessoas); //colocar array var como parametro);
//     const resultadoMap = resultadoPessoa.map(pessoa => {
//         return pagina;
//     })

//    pagina.innerHTML = resultadoMap;
// }

// searching.addEventListener('input', exibirPessoa);



