var submitBtn = document.querySelector("#submit-btn");
submitBtn.addEventListener("click", function(){
  const inputbtn = document.getElementById("input-btn").value;
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputbtn+'&appid=9d09e907aa6c091f62b4c7ad1f2b6387')
  .then(response => response.json())
  .then(data => {
      const cityName = data.name;
      const tem = data.main.temp;
      const temp = tem - 273.15;
      const description = data.weather[0].description;
      document.querySelector('h3').innerText = cityName;
      document.querySelector('span').innerText = temp.toFixed(2);
      document.querySelector('h4').innerText = description;
  })
  .catch(res => alert("Check your city name again"))
})