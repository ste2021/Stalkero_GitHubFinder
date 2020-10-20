(function() {
  const search = document.getElementById("search");
  const profile = document.getElementById("profile");
  const url = "https://api.github.com/users" //colocar a url que chunla colocou no discord!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const client_id = "Iv1.5a110c2eeb3bcdc8";
  const client_secret = "a7fc9ded0d4ef147cee7e33c3751c7520aae2454";
  const location = "Piracicaba"

  async function getUser(user) {
    const profileResponse = await fetch(
      `${url}/${user}?client_id=${client_id}&client_secret=${client_secret}&${location}`
    );
    
    const profile = await profileResponse.json();

    return { profile};
  }

  function mostrarDev(user) {
    perfil.innerHTML = `
    <div class="row">
      <div class="col-md-4">
          <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="${
                user.avatar_url
              }" alt="Card image cap">
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">Repositórios: <span class="badge badge-success float-right">${
                    user.public_repos
                  }</span></li>
                  <li class="list-group-item">Seguidores: <span class="badge badge-primary float-right"> ${
                    user.followers
                  }</span></li>
                  <li class="list-group-item">Seguindo:<span class="badge badge-info float-right">${
                    user.following
                  }</span></li>
                  <li class="list-group-item">OnceMora<span class="badge badge-info float-right">${
                    user.location
                  }</span></li>
              </ul>
              <div class="card-body">
              <a href="${
                user.html_url
              }" target="_blank" class="btn btn-warning btn-block">Ver Perfil</a>
              </div>
          </div>
      </div>
      <div class="col-md-8">
          <div id="repos"></div>
      </div>
    </div>
    `;
  }

   search.addEventListener("keyup", e => {
    const user = e.target.value;

    if (user.length > 0) {
      getUser(user).then(data => {
        console.log(data);
        if (data.message !== "Not Found") {
          mostrarDev(data.profile);
          
        }
      });
    }
  });
})();
