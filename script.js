// ATIVACAO DO MENU ICON

const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');
const menuLinks = document.querySelectorAll('.sideMenu a');

// Abre/fecha o menu ao clicar no botão
menuToggle.addEventListener('change', () => {
  if (menuToggle.checked) {
    sideMenu.classList.add('is-active');
  } else {
    sideMenu.classList.remove('is-active');
  }
});

// Fecha o menu ao clicar em um link
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    sideMenu.classList.remove('is-active');
    menuToggle.checked = false; // também desmarca o checkbox
  });
});

//FECHA ACCORDION QUANDO CLICAR NOVAMENTE
document.addEventListener('DOMContentLoaded', function() {
    const labels = document.querySelectorAll('.accordion-label');
    
    labels.forEach(label => {
        label.addEventListener('click', function(e) {
            e.preventDefault();
            
            const input = document.querySelector('#' + this.getAttribute('for'));
            
            // Se já está marcado, desmarque
            if (input.checked) {
                input.checked = false;
            } else {
                // Desmarque todos os outros
                const allInputs = document.querySelectorAll('input[name="accordion"]');
                allInputs.forEach(inp => inp.checked = false);
                
                // Marque este
                input.checked = true;
            }
        });
    });
});

//Carousel
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("wordCarousel");
  const words = ["Transformando histórias com leveza e autenticidade"];
  const copies = 8;

  // Limpa conteúdo (se já tiver)
  carousel.innerHTML = "";

  // Cria as cópias
  for (let copy = 0; copy < copies; copy++) {
    words.forEach((word) => {
      const wordElement = document.createElement("div");
      wordElement.className = "word-item";
      wordElement.textContent = word;
      carousel.appendChild(wordElement);
    });
  }

  // Adiciona classe pra animar
  carousel.classList.add("animate");
});


