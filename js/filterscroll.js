const Load = document.querySelector('.load');
let contagemPg = 0;

window.addEventListener('scroll', () => {
    const { clientHeight, scrollHeight, scrollTop } = document.documentElement; //checa se o usuário chegou ao fim da página 
    const usuariofimPg = scrollTop + clientHeight >= scrollHeight - 10;
    console.log(usuariofimPg);

    if (usuariofimPg) {
        mostrarLoad();
    }
})

const mostrarLoad = () => { // Responsável pelo loading
    if (lista.innerHTML > "" && contagemPg == 0 && lista.childElementCount > 2) {
        Load.classList.add('mostrar');
        removerLoad();
    }

}

function pegarPiracicabanos() { //Quando a pagina rolar, os piracicabanos vão aparecer

    getAllUsers();

}

const removerLoad = () => { //Remove o Loading e adiciona mais 20 piracicabanos
    setTimeout(() => {
        Load.classList.remove('mostrar')
        pegarPiracicabanos();
    }, 1000)
}