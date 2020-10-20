




if (user.location = "Piracicaba") {
    getUser(user).then(data => {
      console.log(data);
      if (data.message !== "Not Found") {
        showProfile(data.profile);
      }
    });
  }
});
})();

if (user.length > 0) {
    getUser(user).then(data => {
      console.log(data);
      if (data.message !== "Not Found") {
        showProfile(data.profile);

      }
    });
  }
});
})();


<div class="col-md-8">
        <div id="repos"></div>
    </div>