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
    fetch("http://localhost:3000/trucks/add", {
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

    const truckId = document.getElementById("id2").value;
    const brand = document.getElementById("brand2").value;
    const model = document.getElementById("model2").value;
    const year = document.getElementById("year2").value;
    const range = document.getElementById("range2").value;
    const price = document.getElementById("price2").value;
  
    const requestData = {
        truckId : truckId,
        brand : brand,
        model : model,
        year : Number.parseInt(year),
        range : Number.parseInt(range),
        price : Number.parseInt(price),
    };
  
    const token = JSON.parse(localStorage.getItem("token"));
    fetch("http://localhost:3000/trucks/update", {
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

    const truckId = document.getElementById("id3").value;

    // if(isNaN(truckId) == true) {
    //   alert("truck id mora biti broj");
    //   return;
    // }

  //   if(! Number.isInteger(truckId)){
  //     alert("id mora biti broj");
  //     return;
  // }

    const requestData = {
        truckId: truckId,
    };
    const token = JSON.parse(localStorage.getItem("token"));
    fetch("http://localhost:3000/trucks/delete", {
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

  const showTrucks = () =>  {

    const token = JSON.parse(localStorage.getItem("token"));
    fetch('http://localhost:3000/trucks/get', {
      method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        }
    })
        .then( res => res.json() )
        .then( data => {
            const allCars = document.getElementById('getTrucks');

            data.forEach( el => {
                allCars.innerHTML += `<li>truckId: ${el._id}, brand: ${el.brand}, 
                    model: ${el.model}, year: ${el.year}, range: ${el.range}, price: ${el.price} </li>`;
            });
        });
      }