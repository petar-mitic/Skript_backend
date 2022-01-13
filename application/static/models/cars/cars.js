const addEntry = () => {

    const brand = document.getElementById("brand1").value;
    const model = document.getElementById("model1").value;
    const year = document.getElementById("year1").value;
    const range = document.getElementById("range1").value;
    const price = document.getElementById("price1").value;
  
    const requestData = {
        brand : brand,
        model : model,
        year : Number.parseInt(year),
        range : Number.parseInt(range),
        price : Number.parseInt(price),
    };
  
    const token = JSON.parse(localStorage.getItem("token"));
    fetch("http://localhost:3000/cars/add", {
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
          return;
        }
      });
  };

  const editEntry = () => {

    const carId = document.getElementById("id2").value;
    const brand = document.getElementById("brand2").value;
    const model = document.getElementById("model2").value;
    const year = document.getElementById("year2").value;
    const range = document.getElementById("range2").value;
    const price = document.getElementById("price2").value;
  
    const requestData = {
        carId : carId,
        brand : brand,
        model : model,
        year : Number.parseInt(year),
        range : Number.parseInt(range),
        price : Number.parseInt(price),
    };
  
    const token = JSON.parse(localStorage.getItem("token"));
    fetch("http://localhost:3000/cars/update", {
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
          return;
        }
      });
  };

  const deleteEntry = () => {

    const carId = document.getElementById("id3").value;

    const requestData = {
      carId: carId,
    };
    const token = JSON.parse(localStorage.getItem("token"));
    fetch("http://localhost:3000/cars/delete", {
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
          return;
        }
      });
  };


  const jwtExpired = (message) => {
    if (message == "jwt expired") {
      alert("Istekao je token");
      window.location.href = "/../../login.html";
      localStorage.clear();
      return true;
    }
    return false;
  };