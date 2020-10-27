const url = "https://api.github.com/users"
const url2 = "https://api.github.com/search/users?q=+type:User+location:Piracicaba+created:2008-01-19..2020-10-21+followers:1..100+repos:1..100&per_page=100&page=2"
const client_id = "Iv1.30b891205d4b2ae1";
const client_secret = "4f60bdd925cd5292404e1ac272f6ce2d40bdb0a5"; //aqui é onde será feita a comunicação da api
var perfil = document.querySelector(".card");
var perfil = document.querySelector(".container");


async function getUser(user) {
    const profileResponse = await fetch(
        `${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`
        .then(resposta => {
            resposta.json();
        })
    );

    const profile = await profileResponse.json();

    return { profile };
}
// mostrarProfile = (user) => {
//         profile.innerHTML =


//             // return fetch(url)
//             //     .then(resposta => {
//             //         return resposta.json()

//             //     })