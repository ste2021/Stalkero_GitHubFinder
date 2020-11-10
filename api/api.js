let users = [];
const urldominio = "https://api.github.com";
var urlUsers = "users";
var profiles = document.getElementById("lista");
var page = 1;
var params = `search/users?q=+location:Piracicaba&per_page=20&page=${page}`;
var url = `${urldominio}/${params}`;

//chamada api
//chamada para todos os usuários
async function getAllUsers() {
    let profileResponse = await fetch(
        `${urldominio}/search/users?q=+type:User+location:Piracicaba&per_page=20&page=${page}`)
    page++;
    let result = await profileResponse.json();
    for (let item of result.items) {
        // //jogar os dados do array (users) em uma variável
        let user = await getUser(item);
        // //condição para n repetir users no array
        if (!users.some(u => {
                return u.id === user.id
            })) { users.push(user) }
         
        let tmp = document.querySelector("#tmp").content;
        let clone = tmp.cloneNode(true); //filhos da div,,, usa o true para percorrer pelos elementos h2 e h4
        clone.querySelector('.imga').src = user.avatar_url;
        clone.querySelector('.name').innerText = user.name;
        clone.querySelector('.Seguidores').innerText = user.followers;
        clone.querySelector('.Repos').innerText = user.public_repos;
        clone.querySelector('.Type').innerText = user.type;
        clone.querySelector('a').href = "../index-perfil.html";
        profiles.appendChild(clone);
    }
}
const listarUsers = getAllUsers();
// getAllUsers().then(indice => {
// console.log(indice.user);
// });
//puxar os dados (nome, repositorio )
async function getUser(user) {
    const userUrl = user.url;
    const userResponse = await fetch(userUrl);
    const userResult = await userResponse.json();

    return userResult;
};