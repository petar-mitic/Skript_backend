window.onload = function () {
    var loginBtn = document.getElementById("login");
    var logout = document.getElementById("logout");
    var usersBtn = document.getElementById("users");
    var carsBtn = document.getElementById("cars");
    var trucksBtn = document.getElementById("trucks");
    var motorsBtn = document.getElementById("motors");
    
  
    logout.onclick = function () {
      if (!localStorage.getItem("token")) {
        alert("Niste ulogovani");
        return;
      }
      localStorage.clear();
      alert("Odlogovalii ste se");
      window.location.href = "login.html";
    };
  
    usersBtn.onclick = function () {
      if (!localStorage.getItem("token")) {
        alert("Niste ulogovani");
        return;
      }
      const token = JSON.parse(localStorage.getItem("token"));
      fetch("http://localhost:3000/users/get", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if(data.message){
              if (jwtExpired(data.message)) return;
              alert(JSON.stringify(data.message));
              return;
          }
          console.log(data);
          localStorage.setItem("users", JSON.stringify(data))
          window.location.href = "models/users/users.html";
        });
    };
  
    carsBtn.onclick = function () {
      if (!localStorage.getItem("token")) {
          alert("Niste ulogovani");
          return;
        }
        const token = JSON.parse(localStorage.getItem("token"));
        fetch("http://localhost:3000/cars/get", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `${token}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if(data.message){
                if (jwtExpired(data.message)) return;
                alert(JSON.stringify(data.message));
                return;
            }
            console.log(data);
            localStorage.setItem("cars", JSON.stringify(data))
            window.location.href = "models/cars/cars.html";
          });
    };
  
    trucksBtn.onclick = function () {
        if (!localStorage.getItem("token")) {
            alert("Niste ulogovani");
            return;
          }
          const token = JSON.parse(localStorage.getItem("token"));
          fetch("http://localhost:3000/trucks/get", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `${token}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              if(data.message){
                  if (jwtExpired(data.message)) return;
                  alert(JSON.stringify(data.message));
                  return;
              }
              console.log(data);
              localStorage.setItem("trucks", JSON.stringify(data))
              window.location.href = "models/trucks/trucks.html";
            });
      };
  
      motorsBtn.onclick = function () {
        if (!localStorage.getItem("token")) {
            alert("Niste ulogovani");
            return;
          }
          const token = JSON.parse(localStorage.getItem("token"));
          fetch("http://localhost:3000/motors/get", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `${token}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              if(data.message){
                  if (jwtExpired(data.message)) return;
                  alert(JSON.stringify(data.message));
                  return;
              }
              console.log(data);
              localStorage.setItem("motors", JSON.stringify(data))
              window.location.href = "models/motors/motors.html";
            });
      };
  
    loginBtn.onclick = function () {
      if (localStorage.getItem("token")) {
        alert("Ulogovani ste");
        return;
      }
      window.location.href = "login.html";
    };
  
    const jwtExpired = (message) => {
      if (
        message == "jwt expired" ||
        message == "Authentication missing" ||
        message == "Please login"
      ) {
        alert("Niste ulogovani");
        window.location.href = "/../../login.html";
        localStorage.clear();
        return true;
      }
      return false;
    };
    
  
  };
  