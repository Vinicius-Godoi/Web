function verificar() {
      const entradaBruta = document.getElementById("vp-entrada").value;
      const resultadoEl = document.getElementById("resultado");

      // Normaliza para minúsculas e remove espaços nas pontas/internos simples
      const texto = entradaBruta.toLowerCase().replaceAll(" ", "");

      if (texto.length === 0) {
        resultadoEl.textContent = "Digite algum texto antes de verificar.";
        return;
      }

      let inverso = "";

      // Percorre do último índice (length - 1) até o índice 0
      for (let i = texto.length - 1; i >= 0; i--) {
        inverso += texto[i];
      }

      if (inverso === texto) {
        resultadoEl.textContent = `"${entradaBruta}" é um palíndromo! (Invertido: "${inverso}")`;
      } else {
        resultadoEl.textContent = `"${entradaBruta}" não é um palíndromo. (Invertido: "${inverso}")`;
      }
    }