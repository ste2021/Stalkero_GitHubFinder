var queryString = window.location.search;

var paramsSearch = new URLSearchParams(queryString);

var username = paramsSearch.get("username");

var card = document.querySelector(".card");

function userData(name) {
    return fetch(`https://api.github.com/users/${name}`)
        .then(response => {
            return response.json();
        }).then(json => {
            return json
        })
};

function createUserPage(user) {
    var userInfo = document.createElement("div");
    userInfo.classList.add("card");

    var avatar = document.createElement("div");

    avatar.innerHTML = `<img id="imagemPerfil" src="${user.avatar}">`;

    card.appendChild(avatar);

    var name = document.createElement("h4");

    if (user.name != null) {
        name.textContent = user.name
    } else {
        name.textContent = user.login
    }
    userInfo.appendChild(name);


    var bio = document.createElement('p');
    bio.textContent = user.bio;
    userInfo.appendChild(bio);

    if (user.company != null) {
        var company = document.createElement("p");
        company.innerHTML = `<img src="images/company.png">  ${user.company}`;
        userInfo.appendChild(company);
    }

    if (user.email != null) {
        var email = document.createElement('p');
        email.innerHTML = `<img src="images/email.svg">  ${user.email}`;
        userInfo.appendChild(email);
    }

    var followers = document.createElement('p');
    followers.innerHTML = `<img src="images/seguidores.svg"> Seguidores: ${user.followers} |  Seguindo: ${user.following}`;
    userInfo.appendChild(followers)

    var repos = document.createElement('p');
    repos.innerHTML = `<img src="images/giticonrepos.svg"> Repositórios: ${user.repos}`;
    userInfo.appendChild(repos);

    var location = document.createElement('p');
    location.innerHTML = `<img src="images/location.svg">  ${user.location}`;
    userInfo.appendChild(location);

    profileSection.appendChild(userInfo);

}

function userProfile(username) {
    profileSection.innerHTML = "";
    userData(username).then(obj => {
        var login = obj.login;
        var name = obj.name;
        var avatar = obj.avatar_url;
        var bio = obj.bio;
        var company = obj.company;
        var email = obj.email;
        var followers = obj.followers;
        var following = obj.following;
        var repos = obj.public_repos;
        var location = obj.location;
        var user = { login, name, avatar, bio, company, email, followers, following, repos, location };
        createUserPage(user);
    });
}
userProfile(username);