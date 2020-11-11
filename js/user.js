let linkperfil = document.getElementById("link"); //variavel que vai receber o link
let perfil = document.getElementById("listaPerfil");

const exibirUser = (user) => {  //
    let popup = document.querySelector("#userpopup");
    
         popup.querySelector('.imga2').src = user.avatar_url; 
         popup.querySelector('.name').innerText = user.name; 
         popup.querySelector('.bio').innerText = user.bio; 
         popup.querySelector('.Seguidores').innerText = user.followers; 
         popup.querySelector('.Repos').innerText = user.public_repos; 
         popup.querySelector('.Company').innerText = user.company;
         popup.querySelector('.Location').innerText = user.location; 
         popup.querySelector('a').href = user.html_url;

         popup.style.display = "block";

     } 


const fecharUser = () => {
    let popup = document.querySelector("#userpopup");
    popup.style.display = "none";
   
}



