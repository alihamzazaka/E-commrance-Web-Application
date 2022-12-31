function ftech(e) {
  e.preventDefault();

  let username = document.getElementById("username").value;
  let pwd = document.getElementById("pwd").value;

  if (username == "") {
    alert("wrong username");
  } else if (password == "") {
    alert("wrong pasword");
  } else {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: pwd,
        // expiresInMins: 60, // optional
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(data);
        if ((res.message = "Worong Credentials")) {
        } else {
          localStorage.setItem(res.username);
          localStorage.setItem(res.pwd);
          localStorage.setItem(res.token);
          window.open("../html/main.html");
        }
      });
  }
}

// kminchelle
// 0lelplR
