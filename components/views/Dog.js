export default (st) => `
<section id="home">
<div id="container">
<div id="header">

</div>
      <div id="content">
          </div>
          <div class="welcometext">
          <h2>Strive to change lives of dogs in their golden years.</h2>
          </div>
          <div class="contenttext">
          <h2>LostBoard:</h2><br>
          <p>Reported Lost Senior Dogs</p><br><br>
          <table id="lostDog">
          <tr><th>Breed</th><th>Name</th><th>Size</th><th>Characteristics</th></tr>
${st.dogs
  .map((dog) => {
    return `<tr><td>${dog.paramOne}</td><td>${dog.paramTwo}</td><td>${
      dog.paramThree
    }</td><td>${dog.paramFour.join(" & ")}</td></tr>`;
  })
  .join("")}
</table>
</section>
`;
