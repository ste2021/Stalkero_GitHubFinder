const url = "https://api.github.com/users"
const url2 = "https://api.github.com/search/users?q=+type:User+location:Piracicaba+created:2008-01-19..2020-10-21+followers:1..100+repos:1..100&per_page=100&page=2"
    //aqui é onde será feita a comunicação da api
function listarUsuarios() {
    return fetch(url)
        .then(resposta => {
            return resposta.json()

        })
        .then(json => {
            return json //devolve uma promisse, 
        })

}