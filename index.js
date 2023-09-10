const btnEnviar = document
  .getElementById("my_form")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    const checkbox_value = document.querySelectorAll("input[name='check']");
    let checked = false;
    const areaInteresse = [];
    checkbox_value.forEach((checkbox) => {
      if (checkbox.checked) {
        checked = true;
        areaInteresse.push(checkbox.value);
        return;
      }
    });
    if (!checked) {
      alert("Ao menos um checkbox deve ser marcado!");
      e.preventDefault();
    }

    const cargos = document.querySelectorAll("input[name='cargo']");
    let naturezaCargo = "";
    cargos.forEach((cargo) => {
      if (cargo.checked) {
        naturezaCargo = cargo.value;
      }
    });

    const inName = document.getElementById("inName").value;
    console.log(inName);
    const inAdreess = document.getElementById("inAdreess").value;
    console.log(inAdreess);
    const inCity = document.getElementById("inCity").value;
    console.log(inCity);
    const inState = document.getElementById("inState").value;
    console.log(inState);
    console.log(naturezaCargo);
    console.log(areaInteresse);
    const textarea = document.getElementById("textarea").value;
    console.log(textarea);
  });
