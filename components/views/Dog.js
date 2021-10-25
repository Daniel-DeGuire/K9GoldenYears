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
          <h2>Finder:</h2>
          <tr><th>Breed</th><th>Color</th><th>Size</th><th>Characteristcs</th></tr>
${st.dogs
  .map((dog) => {
    return `<tr><td>${dog.paramOne}</td><td>${dog.paramOne}</td><td>${
      dog.paramOne
    }</td><td>${pizza.paramFour.join(" & ")}</td></tr>`;
  })
  .join("")}
</table>
</section>
`;
// TO DO: Add API Functionality
