var icon = document.getElementById("temp-icon");
var submitBtn = document.querySelector("#submit-btn");
submitBtn.addEventListener("click", function () {
  const inputbtn = document.getElementById("input-btn").value;
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputbtn +
      "&appid=9d09e907aa6c091f62b4c7ad1f2b6387"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      const cityName = data.name;
      const tem = data.main.temp;
      const temp = tem - 273.15;
      const {feels_like} = data.main;
      const {id, main} = data.weather[0];
      const description = data.weather[0].description;
      document.querySelector("h3").innerText = cityName;
      document.querySelector("span").innerText = temp.toFixed(2);
      document.querySelector("h4").innerText = description;
      if(id < 250){
        icon.src="icons/storm.svg"
      }
      else if(id < 350){
        icon.src="icons/drizzle.svg"
      }
      else if(id < 550){
        icon.src="icons/rain.svg"
      }
      else if(id < 650){
        icon.src="icons/snow.svg"
      }
      else if(id < 800){
        icon.src="icons/atmosphere.png"
      }
      else if(id === 800){
        icon.src="icons/clear.svg"
      }
      else if(id > 800){
        icon.src="icons/cloud.svg"
      }
      else{
        icon.src = "icons/haze.png"
      }
    })
    .catch((response) => alert("Check your city name again"));
});
