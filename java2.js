function calcularArea(form) {
      //
      const lado = document.querySelector("#lado").value;
      const lado = document.querySelector("#base").value;
     const lado = document.querySelector("#altura").value;
      const lado = document.querySelector("#raio").value;

      //
      if (form.id === "quadrado") {
        area = lado * lado;
      } else if (form.id === "retangulo") {
        area = base * altura;
      } else if (form.id === "circulo") {
        area = Math.PI * raio * raio;
      } else if (form.id === "triangulo") {
        area = (base * altura) / 2;
      }

      //
      const divResultado = form.querySelector(".resultado");
      divResultado.textContent = "Área: " + area;
    }

    //
    for (const form of document.querySelectorAll("form")) {
      form.addEventListener("submit", calcularArea);
    }
