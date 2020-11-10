let arrayPessoas = [];
const searching = document.getElementById("inputsearch");
const pagina = document.getElementById("lista");

fetch(`${urldominio}/search/users?q=+location:Piracicaba+created:2010-01-19..2020-10-21+followers:2..150+repos:0..100&per_page=20&page=2`)

   .then(resposta => resposta.json())
   .then(pessoas => arrayPessoas.push(...pessoas.items));
  console.log(arrayPessoas);

function encontrarPiracicabano (pesquisa, array) {
     return array.filter((indice) => {
         let id = indice++;
         const regex = new RegExp(pesquisa, 'gi'); //pr puxar metade da string
         return regex.test(indice.toString(id));//vai testar se existe uma pessoa aqui
     
     })
};

function exibirPessoa (){
    console.log(arrayPessoas);
    pagina.innerHTML = "";
    
    const resultadoPessoa = encontrarPiracicabano(this.value, arrayPessoas); //colocar array var como parametro);
    const resultadoMap = arrayPessoas.map(pessoa => {
        return getUser(item);
        //
        
        
    })

   pagina.innerHTML = resultadoMap;
}

searching.addEventListener('input', exibirPessoa);



