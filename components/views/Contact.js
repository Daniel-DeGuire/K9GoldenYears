import html from "html-literal";

export default () => html`
<section id="contact">
<div id="container">
<div id="box">
    <div id="content">
    </div>
    <div class="welcometext">
    <h2>We want to bolden folks to adopt golden!</h2>
    </div>
    <div class="contenttext">
    <h2>Give us a holler or a bark!</h2>
    <p> Fill out the following form.</p><br>
    <div class='inputWrapper'>
    <form
action="https://formspree.io/f/moqyrkko"
method="POST"
>	<div id="entry">
<label>
  Your email:<br>
  <input type="email" name="_replyto">
</label><br><br>
<label>
  Your message:<br>
  <textarea name="message"></textarea>
</label>
<!-- your other form fields go here -->
<button type="submit">Send</button>
</form></div>
    </div><br><br>
    <h2>Additional contact information</h2>
    <p>K9 Golden Years Foundation<br>
    1600 South Brentwood Ave.<br>
    Brentwood, Missouri 63144 <br>
    </p>
    <div class="maps">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12467.907131529033!2d-90.34586666606317!3d38.62641516634893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8cb19fab5409d%3A0x743a403254ca3db!2s1600%20S%20Brentwood%20Blvd%2C%20Brentwood%2C%20MO%2063144!5e0!3m2!1sen!2sus!4v1634005156239!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe></div>
    <p> </p><br>
</div>
</div>
</section>
`;
