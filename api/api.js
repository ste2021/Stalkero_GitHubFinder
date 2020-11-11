
const urldominio = "https://api.github.com";
let profiles = document.getElementById("lista");
let page = 1;
let params = `search/users?q=+location:Piracicaba&per_page=20&page=${page}`;
let url = `${urldominio}/${params}`;
const accessToken = { token: "50aca22dda5474d5a46ca31ab0831ad883488aab" }; 
const auth = accessToken.token;
const limit = {

    headers: {Authorization: "Basic " + btoa(auth)
    },
};
//chamada para todos os usuários
async function getAllUsers() {
    let profileResponse = await fetch(
        `${urldominio}/search/users?q=+type:User+location:Piracicaba&per_page=03&page=${page}`, limit)
    
    let result = await profileResponse.json();
    for (let item of result.items) {
        //cards usuarios
        let user = await getUser(item);
        let tmp = document.querySelector("#tmp").content;
        let clone = tmp.cloneNode(true); //filhos da div,,, usa o true para percorrer pelos elementos h2 e h4
        clone.querySelector(".link").addEventListener( //evento click no link ver perfil pr chamar a function exibirUser
            "click", function (e) {
                e.preventDefault();
                exibirUser(user);
            });
        clone.querySelector('.imga').src = user.avatar_url;
        clone.querySelector('.name').innerText = user.name;
        clone.querySelector('.Seguidores').innerText = (user.followers) + "   Seguidores";
        clone.querySelector('.Repos').innerText = user.public_repos + "  Repositórios";
        clone.querySelector('.Type').innerText = user.type;

        profiles.appendChild(clone);

    }
}
getAllUsers();
//puxar os dados (nome, repositorio )
async function getUser(user) {
    const userUrl = user.url;
    const userResponse = await fetch(userUrl);
    const userResult = await userResponse.json();

    return userResult;
};