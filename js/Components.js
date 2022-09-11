

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
    <div class="container">Footer Component</div>
  </footer>
    `
  }
}
customElements.define('app-footer', Footer);


