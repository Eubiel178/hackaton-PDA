class Apoie {
  constructor() {
    this.amount = document.getElementById("amount");
    this.email = document.getElementById("email");
    this.name = document.getElementById("name");
    this.message = document.getElementById("message");
  }

  formatAmount() {
    return parseFloat(this.amount.value).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  validate() {
    clearTimeout();
    const fields = [this.name, this.email, this.amount];

    const isError = fields.map((field) => {
      if (field.value.trim().length <= 0) {
        this.message.innerText = "Preencha todos os campos";
        this.message.classList.add("error");
        field.classList.add("input-error");

        // remove 'error' class after 3 secs
        setTimeout(() => {
          this.message.classList.remove("error");
          this.message.innerText = "";
        }, 3000);

        return false;
      }

      field.classList.remove("input-error");
      return true;
    });

    return !isError.includes(false);
  }

  send() {
    if (this.validate()) {
      this.message.innerText = `Obrigado, ${
        this.name.value
      }! Sua doação de ${this.formatAmount()} foi recebida com sucesso.`;
      this.message.classList.add("success");

      // remove 'success' class after 3 secs
      setTimeout(() => {
        this.message.classList.remove("success");
        this.message.innerText = "";
      }, 3000);
    }
  }
}

// get donate-form and check for submit event

document
  .getElementById("donate-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const apoie = new Apoie();
    apoie.send();
  });
