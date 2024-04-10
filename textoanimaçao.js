const textToType = "INOVAÇÃO E EXCELÊNCIA SE UNEM. TRANSFORMAMOS SONHOS EM ESPAÇOS DURADOUROS E ÚNICOS.";
  const typedTextElement = document.getElementById("typed-text");

  // Função para adicionar o efeito de digitação
  function typeText() {
    let index = 0;
    const typingInterval = setInterval(() => {
      // Adiciona cada caractere ao texto
      typedTextElement.textContent += textToType[index];

      // Move para o próximo caractere
      index++;

      // Verifica se atingiu o final do texto
      if (index === textToType.length) {
        clearInterval(typingInterval); // Para a animação quando todo o texto for digitado
      }
    }, 100); // Ajuste o intervalo conforme necessário para controlar a velocidade da digitação
  }

  // Inicie a animação quando a página carregar
  window.onload = typeText;