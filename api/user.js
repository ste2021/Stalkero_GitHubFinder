// search.addEventListener("click", event => {
//     event.preventDefault();
//     const user = e.target.value;

//     if (user.length > 0) {
//         getUsers(user).then(data => {
//             console.log(data);
//             if (data.message !== "Not Found") {
//                 showProfile(data.card);
//             }
//         })
//     }