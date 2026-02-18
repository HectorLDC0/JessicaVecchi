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


// Pictures section

(function () {
    const track = document.getElementById('galeriaTrack');
    const dotsContainer = document.getElementById('galeriaDots');
    if (!track) return;

    const cards = track.querySelectorAll('.galeriaCard');
    const total = cards.length;
    let current = 0;

    function getPerView() {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 1079) return 2;
        return 3;
    }

    // Cria dots
    function buildDots() {
        dotsContainer.innerHTML = '';
        const perView = getPerView();
        const numDots = Math.ceil(total / perView);
        for (let i = 0; i < numDots; i++) {
            const d = document.createElement('button');
            d.className = 'galeriaDot' + (i === 0 ? ' active' : '');
            d.addEventListener('click', () => goTo(i * perView));
            dotsContainer.appendChild(d);
        }
    }

    function goTo(idx) {
        const perView = getPerView();
        const maxIndex = Math.max(0, total - perView);
        current = Math.max(0, Math.min(idx, maxIndex));

        const cardWidth = cards[0].offsetWidth + 24; // gap = 24px
        track.style.transform = `translateX(-${current * cardWidth}px)`;

        const dotIdx = Math.floor(current / perView);
        dotsContainer.querySelectorAll('.galeriaDot').forEach((d, i) => {
            d.classList.toggle('active', i === dotIdx);
        });
    }

    document.getElementById('galeriaNext').addEventListener('click', () => goTo(current + 1));
    document.getElementById('galeriaPrev').addEventListener('click', () => goTo(current - 1));

    // Swipe mobile
    let startX = 0;
    track.addEventListener('touchstart', e => startX = e.touches[0].clientX);
    track.addEventListener('touchend', e => {
        const diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) goTo(diff > 0 ? current + 1 : current - 1);
    });

    window.addEventListener('resize', () => { buildDots(); goTo(0); });
    buildDots();
})();