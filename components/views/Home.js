import html from "html-literal";
import dogsImage from "/assets/dog2.jpg";

export default (st) => html`
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
          <br><img src="${dogsImage}"/>
          <br><b>Resident dogs Indie (left) and Scarlett (right)</b></P>
          <br><br>
          <h2>Random Dog Facts</h2>
          <P>Interesting dog facts.</P>
          <br>
         <p>1. A dog’s nose print is unique, much like a person’s fingerprint.<br>
          2. Forty-five percent of U.S. dogs sleep in their owner’s bed.<br>
          3. There are over 75 million pet dogs in the U.S.—more than in any other country.
          </p><br><br><br>
          <h2>Thank you, for visiting our site!</h2>
          <p>
          Visitor number
          ${st.visits}
          </table></p><br>
        </div><BR>
        </div>
</table>
</section>
`;
