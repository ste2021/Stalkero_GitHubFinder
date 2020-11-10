let linkperfil = document.getElementById("link"); //variavel que vai receber o link

//variaveis para aparecer perfil
let perfil = document.getElementById("listaPerfil");
let tmp = document.querySelector("#tmp").content;
let clone = tmp.cloneNode(true); //filhos da div,,, usa o true para percorrer pelos elementos h2 e h4



link.addEventListener("click", function (e) {
        e.preventDefault();
        getUser(id);
        exibirUser (id);

})

const exibirUser = async () => {
    
    const perfilUser = await getUser()
    const perfil = perfilUser(user =>
        
         clone.querySelector('.imga').src = user.avatar_url; 
         clone.querySelector('.name').innerText = user.name; 
         clone.querySelector('.bio').innerText = user.bio; 
         clone.querySelector('.Seguidores').innerText = user.followers; 
         clone.querySelector('.Repos').innerText = user.public_repos; 
         clone.querySelector('.Company').innerText = user.company; 
         clone.querySelector('.Email').innerText = user.email; 
         clone.querySelector('a').href = user.html_url;
         perfil.appendChild(clone);
   )
console.log(perfilUser);

}

exibirUser();

