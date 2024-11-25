function alterarConteudo(nome) {
    const foto = document.querySelector('.fotoo');
    const escrita = document.querySelector('.escrita');
  
    if (nome === 'Pablo') {
      foto.src = './img/Foto_Pablo.PNG'; // Caminho para a imagem do Pablo
      escrita.innerHTML = `
        <p>- Tornar-me um desenvolvedor Full Stack altamente capacitado.</p>
<p>- Construir uma carreira dinâmica, desafiadora e bem remunerada.</p>
      `;
    } else if (nome === 'Murilo') {
      foto.src = "./img/WhatsApp Image 2024-07-31 at 21.29.51.jpeg"; // Caminho para a imagem do Murilo
      escrita.innerHTML = `
        <p>Olá, sou Murilo Marcondes Silva, um entusiasta de 19 anos apaixonado por tecnologia e inovação na programação...</p>
      `;
    } else if (nome === 'Lucas') {
      foto.src = './img/lucas.jpg'; // Caminho para a imagem do Lucas
      escrita.innerHTML = `
        <p>Olá, sou Lucas! Desenvolvedor back-end com experiência em PHP, Java e Python.</p>
      `;
    }
  }

  // function alterarpagina(botao){
  //   const botao = document.querySelector('.escrita');

  //   if(botao===)
  // }
  