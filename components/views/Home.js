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
          <h2>Mission:</h2>
          <P> Providing educational & community resources in adopting a senior dogs. Senior dogs have a much lower adoption rate versus younger dogs & puppies. We strive to change this one dog & heart at a time.  <br>
          <br>
          <br>
          <h2>Random Dog Facts</h2>
          <P>Interesting dog facts.</P>
          <br>
        <table id="facts">
        ${st.facts}
<tr><th>Random</th><th>dog</th><th>facts</th><th>generator</th></tr>
</table>
          </div>
      </div>
</table>
</section>
`;
