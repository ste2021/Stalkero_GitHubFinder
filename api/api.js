const users = [];
const urldominio = "https://api.github.com";
const urlUsers = "https://api.github.com/users"
const profiles = document.getElementById("lista");
const page = 1;
const params = `search/users?q=+type:User+location:Piracicaba&per_page=500&page=${page}`;
const url = `${urldominio}/${params}`;

//chamada api
//chamada para todos os usuários
async function getAllUsers() {
    const profileResponse = await fetch(
        `${url}`)
    let result = await profileResponse.json();
    for (let item of result.items) {
        //jogar os dados do array (users) em uma variável
        let user = await getUser(item);
        //condição para n repetir users no array
        if (!users.some(u => {
                return u.id == user.id
            })) { users.push(user) }

        let tmp = document.querySelector("#tmp").content;
        let clone = tmp.cloneNode(true); //filhos da div,,, usa o true para percorrer pelos elementos h2 e h4
        clone.querySelector('.imga').src = user.avatar_url;
        clone.querySelector('.name').innerText = user.name;
        clone.querySelector('.Seguidores').innerText = user.followers;
        clone.querySelector('.Repos').innerText = user.public_repos;

        clone.querySelector('.Type').innerText = user.type;
        clone.querySelector('a').href = user.html_url;
        profiles.appendChild(clone);
    }
}

const listarUsers = getAllUsers();

//puxar os dados (nome, repositorio )
async function getUser(user) {
    const userUrl = user.url;
    const userResponse = await fetch(userUrl);
    const userResult = await userResponse.json();

    return userResult;
};