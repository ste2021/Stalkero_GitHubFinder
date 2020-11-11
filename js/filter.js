const searching = document.getElementById("inputsearch");


      async function getFilterUsers() {
        let profileResponse = await fetch(
            `${urldominio}/search/users?q=+type:User+location:Piracicaba&per_page=03&page=${page}`)
        
          let result = await profileResponse.json();

          return result;
        }

searching.addEventListener("keyup", function (e) {
      const user = e.target.value;
      getFilterUsers(user).then(res => console.log(res))
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


