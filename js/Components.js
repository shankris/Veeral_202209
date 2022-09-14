

class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <header>
    <div class="container">
    <div class="logo">
      <div class="logo__First">Veeral</div>
      <div class="logo__Last">Controls</div>
    </div>

<nav>
<ul>
  <li><span><img src="img/icon_home.png"></span><a href="index.htm">Home</a></li>
  <li><span><img src="img/icon_products.png"></span><a href="products.htm">Products</a></li>
  <li><span><img src="img/icon_clients.png"></span><a href="clients.htm">Clients</a></li>
  <li><span><img src="img/icon_team.png"></span><a href="team.htm">Team</a></li>
  <li><span><img src="img/icon_team.png"></span><a href="support.htm">Support</a></li>
  <li><span><img src="img/icon_team.png"></span><a href="news.htm">News</a></li>
  <li><span><img src="img/icon_career.png"></span><a href="career.htm">Career</a></li>
<!--  <li>Contact</li>>  --->
</ul>
</nav>


<button class="topBar">Login</button>

    </div>
  </header>
    `
  }
}
customElements.define('app-header', Header);





class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <footer>
    <div class="container">
      <div class="footerContent">

        <div class="footerBox">
          <img src="img/Icon_location.png" class="footerIcon">
          <h5>Meet Us</h5>
          <p>B-29 GIDC, Sector-25,<br>
            Gandhinagar - 382024 <br>
            Gujarat, India</p><br>
          <a href="">Find us on Google Maps</a>
        </div>
        <div class="footerBox">
          <img src="img/icon_phone2.png" class="footerIcon">
          <h5>Call Us</h5>
          <p>+91-79-23287575<br>
            +91-79-23287576<br>
            +91-79-23287579
            <!-- (3 lines) <br> <br>
            +91-79-23287580 (FAX)</p> -->
        </div>
        <div class="footerBox">
          <img src="img/icon_email.png" class="footerIcon">
          <h5>Email Us</h5>
          <p>
          <h6>General Information</h6>
          info@veeral.com<br><br>
          <h6>Customer Support</h6>
          support@veeral.com</p>
        </div>
        <div class="footerBox">
          <img src="img/icon_clock.png" class="footerIcon">
          <h5>Open Hours</h5>
          <p>Monday - Friday<br>
            9:00 AM - 06:00 PM<br><br>
            <small>GMT +5:30 hours</small>
          </p>

        </div>

      </div>



    </div>
  </footer>    `
  }
}
customElements.define('app-footer', Footer);


