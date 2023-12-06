    function enviarMensagem() {
      //
      const nome = document.querySelector("input[name='nome']");
      const email = document.querySelector("input[name='email']");
      const telefone = document.querySelector("input[name='telefone']");

      //
      const mensagem = `
        Nome: ${nome}
        E-mail: ${email}
        Telefone: ${telefone}
      `;

      //
      window.open("https://api.whatsapp.com/send?phone=5521996613840&text=Olá, gostaria de falar com você!");
    }

    //
    //document.querySelector("button[type='submit']").addEventListener("click", enviarMensagem);