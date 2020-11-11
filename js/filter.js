const searching = document.getElementById("inputsearch");
var url2 = `https://api.github.com/search/users?q=${searching.value}+type:User+location:Piracicaba`;

async function getFilterUsers() {
  let profileResponse = await fetch(`https://api.github.com/search/users?q=${searching.value}+type:User+location:Piracicaba`, limit)
  let result = await profileResponse.json();

  return result;
}

// async function exibirUsuariosFiltrados(user) {
//   let result = getFilterUsers();

//   for (let item of result.items) {
//     let user = await getUser(item);
//     let tmp = document.querySelector("#tmp").content;
//     let clone = tmp.cloneNode(true); //filhos da div,,, usa o true para percorrer pelos elementos h2 e h4
//     clone.querySelector(".link").addEventListener( //evento click no link ver perfil pr chamar a function exibirUser
//       "click", function (e) {
//         e.preventDefault();
//         exibirUser(user);
//       });
//     clone.querySelector('.imga').src = user.avatar_url;
//     clone.querySelector('.name').innerText = user.name;
//     clone.querySelector('.Seguidores').innerText = (user.followers) + "   Seguidores";
//     clone.querySelector('.Repos').innerText = user.public_repos + "  Repositórios";
//     clone.querySelector('.Type').innerText = user.type;
//     profiles.appendChild(clone);
//   }
// }

searching.addEventListener("keyup", function (e) {
  const user = e.target.value;

  if (user.length > 0) {
    getFilterUsers(user).then(res => console.log(res));
  }

});

//     if (user.length > 0) {
//       getAllUsers(user).then(data => {
//         console.log(data);
//         if (data.message !== "Not Found") {
//           exibirUser(data.user);
//         }

//     }
//   }
// )


