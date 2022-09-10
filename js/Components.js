

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
  <li>Home</li>
  <li>Products</li>
  <li>Clients</li>
  <li>Team</li>
  <li>Work</li>
  <li>Contact</li>
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


