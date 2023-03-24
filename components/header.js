class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header>
    <nav
      id="dresseco-navbar"
      class="navbar navbar-expand-lg sticky-top bg-light"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="https://dresseco.github.io">
          <img
            src="assets/images/dresseco-logo.png"
            alt="Dresseco, S.L."
            width="160"
            height="64"
          />
        </a>
        <div class="order-lg-1">
          <div id="dresseco-action-buttons">
            <button
              class="btn btn-outline-primary ms-1 dropdown"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <ul class="dropdown-menu">
                <li>
                  <h6 class="dropdown-header">Selecciona el teu idioma:</h6>
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    ><i class="pe-2">🇦🇩</i>Català</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    ><i class="pe-2">🇪🇸</i>Español</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    ><i class="pe-2">🇬🇧</i>English</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    ><i class="pe-2">🇫🇷</i>Français</a
                  >
                </li>
              </ul>
              <i class="bi bi-globe"></i>
            </button>
            <button class="btn btn-outline-primary ms-1" type="button">
              <i class="bi bi-cart-fill pe-2"></i><span>0 productes</span>
            </button>
            <button
              class="btn btn-outline-primary d-md-none ms-1"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="bi bi-list"></i>
            </button>
          </div>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <hr />
          <ul
            id="dresseco-navbar-pages"
            class="navbar-nav me-auto mb-2 mb-lg-0"
          >
            <li class="nav-item">
              <a
                id="dresseco-navbar-page-home"
                class="nav-link mx-3"
                href="https://dresseco.github.io"
                ><i class="bi bi-house-fill pe-2"></i><span>Inici</span></a
              >
            </li>
            <li class="nav-item">
              <a
                id="dresseco-navbar-page-catalogue"
                class="nav-link mx-3"
                href="https://dresseco.github.io/catalogue"
                ><i class="bi bi-collection-fill pe-2"></i><span>Catàleg</span>
              </a>
            </li>
          </ul>
          <div class="me-1">
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success dresseco-button"
                type="submit"
              >
                <i class="bi bi-search"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  </header>
      `;
  }
}

customElements.define("dresseco-header", Header);
