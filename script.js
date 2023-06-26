function kuralAPI() {
  return new Promise((resolve, reject) => {
    let num = document.getElementById("kuralNum").value;
    let api = `https://api-thirukkural.vercel.app/api?num=${num}`;
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function getKural() {
  kuralAPI()
    .then((data) => {
      let one = document.getElementById("line1");
      one.innerHTML = data.line1;
      let sec = document.getElementById("line2");
      sec.innerHTML = data.line2;
      let mean = document.getElementById("meaning");
      mean.innerHTML = data.tam_exp;
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}
