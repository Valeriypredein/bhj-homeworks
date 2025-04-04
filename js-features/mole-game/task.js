function getHole(index) {
    return document.getElementById(`hole${index}`);
  }
 
  let dead = 0; 
  let lost = 0; 
  

  function updateGame() {
    const deadDisplay = document.getElementById("dead");
    const lostDisplay = document.getElementById("lost");
    deadDisplay.textContent = dead;
    lostDisplay.textContent = lost;
  
    if (dead >= 10) {
      alert("Победа! Вы убили 10 кротов.");
      resetGame();
    } else if (lost >= 5) {
      alert("Вы проиграли! 5 промахов.");
      resetGame();
    }
  }
  
 
  function resetGame() {
    dead = 0;
    lost = 0;
    updateGame();
  }
  
  
  for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);
  
    hole.onclick = () => {
      if (hole.classList.contains("hole_has-mole")) {
        dead++; 
      } else {
        lost++; 
      }
      updateGame();
    };
  }