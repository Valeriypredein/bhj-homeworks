function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
    return (
      rect.top <= windowHeight && rect.bottom >= 0
    );
  }
  
  window.addEventListener('scroll', () => {
   
    const revealBlocks = document.querySelectorAll('.reveal');
  
    revealBlocks.forEach(block => {
      if (isInViewport(block)) {
        block.classList.add('reveal_active');
      }
    });
  });
  
  window.addEventListener('DOMContentLoaded', () => {
    const revealBlocks = document.querySelectorAll('.reveal');
    revealBlocks.forEach(block => {
      if (isInViewport(block)) {
        block.classList.add('reveal_active');
      }
    });
  });