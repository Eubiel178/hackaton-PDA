class Apoie {
  constructor() {
    this.amount = document.getElementById("amount");
    this.email = document.getElementById("email");
    this.name = document.getElementById("name");
    this.message = document.getElementById("message");
  }

  validate() {
    if (this.name.value.trim().length <= 0) {
      this.message.innerHTML = "Digite um nome válido";
      this.message.classList.add("error");

      // remove 'error' class after 3 secs
      setTimeout(() => {
        this.message.innerHTML = "";
        this.message.classList.remove("error");
      }, 3000);
      return false;
    } else if (this.email.value.trim().length <= 0) {
      this.message.innerHTML = "Digite um email válido";
      this.message.classList.add("error");

      // remove 'error' class after 3 secs
      setTimeout(() => {
        this.message.innerHTML = "";
        this.message.classList.remove("error");
      }, 3000);
      return false;
    } else if (
      this.amount.value.trim().length <= 0 ||
      parseInt(this.amount.value) <= 0
    ) {
      this.message.innerHTML = "Digite uma quantia válido";
      this.message.classList.add("error");

      // remove 'error' class after 3 secs
      setTimeout(() => {
        this.message.innerHTML = "";
        this.message.classList.remove("error");
      }, 3000);
    }
    return true;
  }

  send() {
    if (this.validate()) {
      this.message.innerHTML = "Doação enviada com sucesso!";
      this.message.classList.add("success");

      // remove 'success' class after 3 secs
      setTimeout(() => {
        this.message.innerHTML = "";
        this.message.classList.remove("success");
      }, 3000);
    }
  }
}

// get donate-form and check for submit event
document
  .getElementById("donate-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    apoie = new Apoie();
    apoie.send();
  });
