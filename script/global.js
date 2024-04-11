const header = document.createElement("header");
header.classList.add("header");
header.innerHTML = `
    <h1 class="logo">
        <a href="index.html">Logo</a>
    </h1>

    <button id="menu-button" class="menu-button">
        <img src="assets/icon/menu.svg" alt="menu icon"/>
    </button>

   <nav id="nav-container" class="nav-container">
        <h2 class="nav-title">Mapa do Site  
            <button id="close-nav" class="close-nav">
                <img src="assets/icon/close.svg" alt="close icon"/>
            </button>
        </h2>
        
        <ul id="menu" class="menu">
            <li class="menu-item">
                <a href="index.html">Home</a>
            </li>

            <li id="dropdown" class="menu-item">
                <span>Tragédias</span>

                <div id="drop" class="drop">
                    <a class="drop-item" href="brumadinho.html">Brumadinho</a>
                    <a class="drop-item" href="maceio.html">Maceio</a>
                    <a class="drop-item" href="mariana.html">Mariana</a>
                </div>
            </li>

            <li class="menu-item">
              <a href="quiz-geral.html">Quiz</a>
            </li>
            
            <li class="menu-item">
                <a href="voluntario.html">Seja um Voluntário</a>
            </li>
        </ul>
   </nav>
`;

const footer = document.createElement("footer");
footer.innerHTML = `
  <footer>
    <div class="contact-info">
      <h3>Entre em Contato</h3>

      <ul>
        <li class="contact-item">
          <img
            class="contact-icon"
            src="assets/icon/email.png"
            alt="Email icone"
          />
          Email: contato@exemplo.com
        </li>

        <li class="contact-item">
          <img
            class="contact-icon"
            src="assets/icon/phone.png"
            alt="Telefone icone"
          />
          Telefone: (00) 1234-5678
        </li>

        <li class="contact-item">
          <img
            class="contact-icon"
            src="assets/icon/address.png"
            alt="Localização icone"
          />
          Endereço: Rua Exemplo, 1234
        </li>
      </ul>
    </div>

    <div class="social-media">
      <h3>Nos Siga</h3>

      <ul>
        <li class="social-item">
          <img
            class="contact-icon"
            src="assets/icon/facebook.svg"
            alt="Facebook logo"
          />

          <a href="#">Facebook</a>
        </li>

        <li class="social-item">
          <img
            class="contact-icon"
            src="assets/icon/instagram.svg"
            alt="Instagram logo"
          />

          <a href="#">Instagram</a>
        </li>
      </ul>
    </div>
  </footer>`;

document.body.insertBefore(header, document.body.firstChild);
document.body.appendChild(footer);

const openNav = document.getElementById("menu-button");
const closeNav = document.getElementById("close-nav");
const navContainer = document.getElementById("nav-container");
const dropdown = document.getElementById("dropdown");
const headerDrop = document.getElementById("drop");

dropdown.addEventListener("click", function () {
  return headerDrop.classList.toggle("drop-active");
});
openNav.addEventListener("click", function () {
  return navContainer.classList.add("menu-mobile-active");
});
closeNav.addEventListener("click", function () {
  return navContainer.classList.remove("menu-mobile-active");
});
