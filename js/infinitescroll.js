const Load = document.querySelector('.load');
let filtrado = false;
let contagemPg = 0;

window.addEventListener('scroll', () => {
    const { clientHeight, scrollHeight, scrollTop } = document.documentElement; //checa se o usuário chegou ao fim da página 
    const usuariofimPg = scrollTop + clientHeight >= scrollHeight - 10;
        
        if (usuariofimPg && !filtrado) {
            mostrarLoad();
        }
     
})

const mostrarLoad = () => { // Responsável pelo loading
    if (lista.innerHTML > "" && contagemPg == 0 && lista.childElementCount > 2) {
        Load.classList.add('mostrar');
        removerLoad(true);
    }
}

function pegarPiracicabanos() { //Quando a pagina rolar, os piracicabanos vão aparecer
    page++;
    getAllUsers();
}

const removerLoad = (refresh) => { //Remove o Loading e adiciona mais piracicabanos
    setTimeout(() => {
        Load.classList.remove('mostrar')
        if (refresh == true){
            pegarPiracicabanos();
        }
   }, 1000)
}