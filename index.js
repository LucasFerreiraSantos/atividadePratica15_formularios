const btnEnviar = document
  .getElementById("btnEnviar")
  .addEventListener("click", (e) => {
    e.preventDefault();

    const checkbox_value =
      document.getElementsByClassName("checkbox_value").value;

    if (checkbox_value === undefined) {
      alert("Ao menos um dos campos de interesse deve ser preeenchido!");
    }
  });
