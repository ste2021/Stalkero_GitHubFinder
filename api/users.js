const search = document.getElementById("search");
const url = "https://api.github.com/search/users?q=+type:User+location:Piracicaba+created:2010-01-19..2020-10-21+followers:2..150+repos:0..100&per_page=20&page=2";
const acessToken = { token: "b36b31678c1e2f901b968204b9ee30591fd10df8" };
const auth = acessToken.token;
const search = document.getElementById("search");

const limit = {
    method: "GET",
    headers: {
        Authorization: "Basic" + btoa(auth),
    },
};

function getUsers() {

    return fetch(url, limit)
        .then((response) => { return response.json() })
        .then((json) => console.log(json.items));
}

getUsers();



//precisamos descobrir uma forma do array puxar a imagem

// search.addEventListener("keyup", e => {
//     const user = e.target.value;

//     if (user.length > 0) {
//         getUsers(user).then(data => {
//             console.log(data);
//             if (data.message !== "Not Found") {
//                 showProfile(data.card);

//             }
//         });
//     }
// });


//para percorrer cada item da lista com o for
// for (let item of items) {

//     let tmp = document.querySelector("#tmp").content;
//     let avatar = document.getElementById(#img);
//     let clone = tmp.cloneNode(true); //filhos da div,,, usa o true para percorrer pelos elementos h2 e h5
//     avatar.innerHTML = item.avatar_url;
//     clone.querySelector('h2').innerText = item.name;
//     clone.querySelector('h5').innerText = item.type;
//      clone.querySelector('h5').innerText = item.url_html;
//     document.querySelector("#lista").appendChild(clone);
// }
//maneira mais fácil d criar as divs pela api, a chamada vc vai ter que estudar por conta nega