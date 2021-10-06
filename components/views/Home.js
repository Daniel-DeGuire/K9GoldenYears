export default () => `
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
          <h2>Mission:</h2>
          <P> Providing educational & community resources in adopting a senior dogs. Senior dogs have a much lower adoption rate versus younger dogs & puppies. We strive to change this one dog & heart at a time.  </P>
          <br>
          <br>
          <h2>Find a Pet</h2>
          <P>Enter your zip code and select the breed of dog you are interested in adopting.</P>
          <br>
          <form id="pet-form">
          <div class="form-group">
            <label for="animal">Dog Breed:</label>
            <select id="animal" class="form-control form-control-lg mb-3">
              <option value="German Shepherd">German Shepherd</option>
              <option value="Labrador Retriever">Labrador Retriever</option>
              <option value="Pit Bull">Pit Bull</option>
              <option value="Husky">Husky</option>
              <option value="Golden Retriever">Golden Retriever</option>
            </select>
            <input type="text" id="zip" class="form-control form-control-lg" placeholder="Zipcode">
            <input type="submit" value="Find" class="btn btn-dark btn-lg btn-block mt-3">
          </div>
        </form>

          </div>
      </div>
</section>
`;
