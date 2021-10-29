import html from "html-literal";

export default () => html`
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
          <h2>Report a lost Senior Dog</h2>
          <div class="form">
          <form id="order" method="POST" action="">
          <div>
            <label for="paramOne">Select a Breed</label>
            <select id="paramOne" name="paramOne">
              <option value="Husky">Husky</option>
              <option value="germanShepard">German Shepard</option>
              <option value="pitBull">Pit Bull</option>
              <option value="labradorRetriever">Labrador Retriever</option>
              <option value="chihauaDog">Chihaua</option>
              <option value="otherDog">Other</option>
            </select>
          </div>
          <div>
            <label for="paramTwo">Name</label>
            <input
              type="text"
              name="paramTwo"
              id="paramTwo"
              placeholder="Name"
              required
            />
          </div>
          <div>
            <label for="paramThree">Size</label>
            <input
              type="text"
              name="paramThree"
              id="paramThree"
              placeholder="Size"
              required
            />
          </div>
          <div>
            <label for="char0">Medical Problem</label>
            <input
              type="checkbox"
              id="id_of_checkbox1"
              class="items1"
              name="paramFour"
              value="Friendly"
            /><br>
            <label for="char1">Friendly</label>
            <input
              type="checkbox"
              id="id_of_checkbox2"
              class="items1"
              name="paramFour"
              value="Good with Children"
            /><br>
            <label for="char2">Good with Children</label>
            <input
              type="checkbox"
              id="id_of_checkbox3"
              class="items1"
              name="paramFour"
              value="Playful"
            /><br>
            <label for="char3">Playful</label>
            <input
              type="checkbox"
              id="id_of_checkbox4"
              class="items1"
              name="paramFour"
              value="listens well"
            /><br>
            <label for="char4">Listens Well</label>
            <input
              type="checkbox"
              id="id_of_checkbox5"
              class="items1"
              name="paramFour"
              value="medical problem"
            /><br>
          </div>
          <input type="submit" name="submit" value="Submit Lost Dog" />
        </form>
</div>
</section>
`;
