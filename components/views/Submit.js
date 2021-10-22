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
          <form id="order" method="POST" action="">
          <h2>Report a lost Senior Dog</h2>
          <div>
            <label for="paramOne">Select a Breed</label>
            <select id="paramOne" name="paramOne">
              <option value="huskyDog">Husky</option>
              <option value="germanShepard">German Shepard</option>
              <option value="pitBull">Pit Bull</option>
              <option value="labradorRetriever">Labrador Retriever</option>
              <option value="chihauaDog">Chihaua</option>
              <option value="otherDog">Other</option>
            </select>
          </div>
          <div>
            <label for="paramTwo">Color</label>
            <input
              type="text"
              name="paramTwo"
              id="paramTwo"
              placeholder="Color"
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
            <label for="toppings">Characteristics</label>
            <input
              type="checkbox"
              id="id_of_checkbox1"
              class="items1"
              name="chracteristics"
              value="Friendly"
            />
            <label for="top1">Friendly</label>
            <input
              type="checkbox"
              id="id_of_checkbox2"
              class="items1"
              name="characteristics"
              value="Good with Children"
            />
            <label for="top2">Goold with Children</label>
            <input
              type="checkbox"
              id="id_of_checkbox3"
              class="items1"
              name="characteristics"
              value="Playful"
            />
            <label for="top3">Playful</label>
            <input
              type="checkbox"
              id="id_of_checkbox4"
              class="items1"
              name="characteristics"
              value="listens well"
            />
            <label for="top4">Listens Well</label>
            <input
              type="checkbox"
              id="id_of_checkbox5"
              class="items1"
              name="toppings"
              value="medical problem"
            />
            <label for="top5">Medical problem</label>
          </div>
          <input type="submit" name="submit" value="Submit Lost Dog" />
        </form>

</section>
`;
