function opencake(letterId) {
    var cake = document.getElementById(letterId);
    var guiOverlay = document.getElementById('guiOverlay');
    var birthdayTextAbove = document.createElement('div');
    var birthdayTextBelow = document.createElement('div');
  
    birthdayTextAbove.classList.add('birthday-text', 'above');
    birthdayTextAbove.textContent = 'Happy Birthday!';
    birthdayTextBelow.classList.add('birthday-text', 'below');
    birthdayTextBelow.textContent = 'Happy Birthday!';
  
    document.body.appendChild(birthdayTextAbove);
    document.body.appendChild(birthdayTextBelow);
  
    cake.style.display = 'block';
    guiOverlay.style.display = 'flex';
  }
  
  function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snow');
    document.body.appendChild(snowflake);
  
    // Set random position
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
    snowflake.style.left = `${randomX}px`;
    snowflake.style.top = `${randomY}px`;
  
    // Remove the snowflake after the animation duration (4s)
    setTimeout(() => {
      snowflake.remove();
      createSnowflake(); // Create a new snowflake after the previous one is removed
    }, 4000);
  }
  
  // Initial creation of snowflakes
  for (let i = 0; i < 50; i++) {
    createSnowflake();
  }
  