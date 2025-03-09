function openLetter() {
    const letter = document.getElementById('letter');
    const envelope = document.querySelector('.envelope');

    // Adiciona a classe para mostrar a carta
    letter.classList.add('open');

    // Adiciona a classe para o efeito de luz no envelope
    envelope.classList.add('light');

    // Remove o envelope da tela
    envelope.style.display = 'none';

    // Tocar o som do papel ao abrir a carta
    const paperSound = document.getElementById('paperSound');
    paperSound.play();
}
// Verifica a orientação da tela
function checkOrientation() {
    if (window.innerHeight > window.innerWidth) {
      // Orientação vertical (em pé)
      console.log("Orientação vertical");
    } else {
      // Orientação horizontal (deitado)
      alert("Por favor, gire seu celular para a orientação vertical para uma melhor experiência.");
    }
  }
  
  // Verifica a orientação ao carregar a página e ao redimensionar a janela
  window.addEventListener('load', checkOrientation);
  window.addEventListener('resize', checkOrientation);
  