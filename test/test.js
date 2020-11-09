const url = "https://api.github.com/search/users?q=+type:User+location:Piracicaba&per_page=40&page=2";
const acessToken = { token: "16a10877bf2581d905f99e5aa35a859abfd5b3b1" };
const auth = acessToken.token;

//pro token
const limit = {
    method: "GET",
    headers: {
        Authorization: "Basic" + btoa(auth),
    },
};
//chamada api
function getUsers() {

    return fetch(url, limit)
        .then((response) => { return response.json() })
        .then((users) => console.log(users.items));

}
getUsers();
// let items = {};

for (let item of items) {
    getUsers();

    let tmp = document.querySelector("#tmp").content;
    let clone = tmp.cloneNode(true); //filhos da div,,, usa o true para percorrer pelos elementos h2 e h4
    clone.querySelector('.imga').src = item.avatar_url;
    clone.querySelector('h2').innerText = item.login;
    clone.querySelector('h5').innerText = item.type;
    clone.querySelector('a').href = item.url;
    document.querySelector("#lista").appendChild(clone);
}


//precisamos descobrir uma forma do array puxar a imagem



//para percorrer cada item da lista com o for
// for (let item of items) {

// for (let item of items) {
//     fetch(url, limit)
//         .then((response) => { return response.json() })
//         .then((json) => console.log(json.items));
//
//maneira mais fácil d criar as divs pela api, a chamada vc vai ter que estudar por conta nega