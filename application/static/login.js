var button = document.getElementById("login");

button.onclick = function () {
  const parametars = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };
  fetch("http://localhost:2000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(parametars),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("token", JSON.stringify(data))
      if (!(typeof data === "string")){
          alert(JSON.stringify(data.message));
          return;
      }
      window.location.href = "index.html";
    });
};
