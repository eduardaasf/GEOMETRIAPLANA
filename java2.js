function calcularArea(form) {
      //
      const lado = form.querySelector("input[name='lado']").value;
      const base = form.querySelector("input[name='base']").value;
      const altura = form.querySelector("input[name='altura']").value;
      const raio = form.querySelector("input[name='raio']").value;

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