export default (st) => `
<section id="about">
<div id="container">
<div id="header">


      <div id="content">
      </div>
      <div class="welcometext">
      <h2>We want to bolden folks to adopt golden!</h2>
      </div>
      <div class="contenttext">
      <h2>Furr-ever Homes for Senior Pets</h2>
      <p> Rescue organizations hire us to help market their senior dogs. </p><br><br>
      <h2>Virtual visit our new Headquarters</h2>
      <p>Our new tech hub is now open in Brentwood, MO. We are working on a YouTube video to show our clients.</p><br><br>
      <p>Weather in ${st.weather.city} ${kelvinToFahrenheit(
  st.weather.temp
)}C, feels
            like ${kelvinToFahrenheit(st.weather.feelsLike)}C</P></p><br><br>
      <h2>We are donation based </h2>
      <p>We are working on filing for a non-profit status. Please stand-by until then.</p><br>


      <div class="dogs">
      <img id="dog1" src= "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?cs=srgb&dl=pexels-valeria-boltneva-1805164.jpg&fm=jpg">
      <img id="dog2" src = "https://images.unsplash.com/photo-1607867062231-89acdc79a5e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80">
      <img  id="dog3" src="https://cdn.pixabay.com/photo/2019/10/26/18/36/labrador-4580060_960_720.jpg"
      </div>
      </div>
  </div>
          </div>
      </div>
</section>
`;

const kelvinToFahrenheit = (kelvinTemp) =>
  Math.round((kelvinTemp - 273.15) * (9 / 5));
