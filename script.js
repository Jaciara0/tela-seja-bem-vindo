

document.addEventListener('DOMContentLoaded', () => {
  const card = document.querySelector('.card');
  const logo = document.querySelector('.logo-wrap');
  const title = document.getElementById('title');
  const subtitle = document.getElementById('subtitle');
  const cta = document.querySelector('.cta-row');
  const dots = document.getElementById('dots');
  const getStarted = document.getElementById('getStarted');
  const learnMore = document.getElementById('learnMore');

 
  setTimeout(() => card.classList.add('enter'), 120);
  setTimeout(() => logo.classList.add('enter'), 380);
  setTimeout(() => title.classList.add('enter'), 520);
  setTimeout(() => subtitle.classList.add('enter'), 700);
  setTimeout(() => cta.classList.add('enter'), 860);

  
  typeWrite(subtitle, "Uma tela animada elegante para sua interface.", 30);

  
  getStarted.addEventListener('mouseenter', () => {
    pulseButton(getStarted);
  });

  
  getStarted.addEventListener('click', (e) => {
    e.currentTarget.disabled = true;
    e.currentTarget.innerText = "Carregando...";
    e.currentTarget.style.transform = "translateY(2px) scale(.995)";
    
    setTimeout(() => {
      e.currentTarget.innerText = "Pronto ✓";
      e.currentTarget.style.boxShadow = "0 14px 40px rgba(18,216,216,0.14)";
      setTimeout(() => {
        e.currentTarget.disabled = false;
        e.currentTarget.innerText = "Começar";
        e.currentTarget.style.transform = "";
      }, 1400);
    }, 1200);
  });

  learnMore.addEventListener('click', () => {
    
    card.animate([
      { transform: 'perspective(800px) rotateX(0deg)' },
      { transform: 'perspective(800px) rotateX(-14deg) translateY(-8px)' },
      { transform: 'perspective(800px) rotateX(0deg)' }
    ], { duration: 520, easing: 'cubic-bezier(.2,.9,.2,1)' });
    
    subtitle.innerText = "Detalhes: cores, timing e microinterações editáveis.";
    typeWrite(subtitle, "Detalhes: cores, timing e microinterações editáveis.", 20);
  });

  
  let dotState = 0;
  setInterval(() => {
    dotState = (dotState + 1) % 3;
    dots.textContent = '•'.repeat(dotState + 1);
  }, 600);

 
  function typeWrite(node, text, delay = 40) {
    
    node.textContent = "";
    let i = 0;
    const iv = setInterval(() => {
      node.textContent += text.charAt(i);
      i++;
      if (i >= text.length) clearInterval(iv);
    }, delay);
  }

  function pulseButton(el) {
    el.animate([
      { transform: 'scale(1)', boxShadow: '0 10px 30px rgba(124,92,255,0.12)' },
      { transform: 'scale(1.04)', boxShadow: '0 18px 50px rgba(124,92,255,0.18)' },
      { transform: 'scale(1)', boxShadow: '0 10px 30px rgba(124,92,255,0.12)' }
    ], { duration: 420, easing: 'ease-out' });
  }

});
