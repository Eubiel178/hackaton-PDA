import { LocalStorage } from "../localStorage.js";

const storage = new LocalStorage(localStorage);

class Voluntario {
  constructor(storage) {
    this.storage = storage;
    this.name = document.getElementById("name");
    this.email = document.getElementById("email");
    this.phone = document.getElementById("phone");
    this.availability = document.getElementById("availability");
    this.skills = document.getElementById("skills");
    this.message = document.getElementById("message");
  }

  getObject() {
    return {
      name: this.name.value,
      email: this.email.value,
      phone: this.phone.value,
      availability: this.availability.value,
      skills: this.skills.value,
    };
  }

  save() {
    const voluntaries = this.storage.get("volunteer") || [];

    this.storage.save("volunteer", [...voluntaries, this.getObject()]);
  }

  validate() {
    clearTimeout();
    const fields = [
      this.name,
      this.email,
      this.phone,
      this.availability,
      this.skills,
    ];

    const isError = fields.map((field) => {
      if (field.value.trim().length <= 0) {
        this.message.innerText = "Preencha todos os campos";
        this.message.classList.add("error");
        field.classList.add("input-error");

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
      this.save();

      alert(
        `Enviado com sucesso, em breve entraremos em contato pelo email ${this.email.value} ou pelo telefone ${this.phone.value}`
      );

      return true;
    }
  }
}

document
  .getElementById("volunteer-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const voluntario = new Voluntario(storage);

    if (voluntario.send()) {
      event.target.reset();
    }
  });
