const banUser = () => {
    
    const userId = document.getElementById("id2").value;

    const requestData = {
      userId: userId,
    };
  
    const token = JSON.parse(localStorage.getItem("token"));
    fetch("http://localhost:3000/users/ban", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify(requestData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          if (jwtExpired(data.message)) return;
          alert(JSON.stringify(data.message));
          fetchUsers();
          return;
        }
      });
  };

  const unBanUser = () => {
    
    const userId = document.getElementById("id3").value;

    const requestData = {
      userId: userId,
    };
  
    const token = JSON.parse(localStorage.getItem("token"));
    fetch("http://localhost:3000/users/unban", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify(requestData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          if (jwtExpired(data.message)) return;
          alert(JSON.stringify(data.message));
          fetchUsers();
          return;
        }
      });
  };

  const deleteUser = () => {
    
    const userId = document.getElementById("id1").value;

    const requestData = {
      userId: userId,
    };
  
    const token = JSON.parse(localStorage.getItem("token"));
    fetch("http://localhost:3000/users/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify(requestData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          if (jwtExpired(data.message)) return;
          alert(JSON.stringify(data.message));
          fetchUsers();
          return;
        }
      });
  };

  const showUsers = () =>  {

    const token = JSON.parse(localStorage.getItem("token"));
    fetch('http://localhost:3000/users/get', {
      method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        }
    })
        .then( res => res.json() )
        .then( data => {
            const allCars = document.getElementById('getUsers');

            data.forEach( el => {
                allCars.innerHTML += `<li>userId: ${el._id}, username: ${el.username}, 
                    password: ${el.password}, userType: ${el.userType}, is user Banned: ${el.isBanned}</li>`;
            });
        });
      }