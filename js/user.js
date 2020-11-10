const perfil = document.getElementById("listaPerfil");

for (let item of users) {
    let tmp = document.querySelector("#tmp").content;
    let clone = tmp.cloneNode(true); //filhos da div,,, usa o true para percorrer pelos elementos h2 e h4
    clone.querySelector('.imga').src = item.avatar_url;
    clone.querySelector('.name').innerText = item.name;
    clone.querySelector('.bio').innerText = item.bio;
    clone.querySelector('.Seguidores').innerText = item.followers;
    clone.querySelector('.Repos').innerText = item.public_repos;
    clone.querySelector('.Company').innerText = item.company;
    clone.querySelector('.Email').innerText = item.email;
    clone.querySelector('a').href = item.html_url;
    perfil.appendChild(clone);
}