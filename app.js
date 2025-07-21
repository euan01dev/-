const scrollButton = document.getElementById('scrollButton');
const messageSection = document.getElementById('messageSection');
const resetButton = document.getElementById('resetButton');
const heartContainer = document.getElementById('heart-container');

scrollButton.addEventListener('click', () => {
  messageSection.classList.add('show');
  setTimeout(() => {
    messageSection.scrollIntoView({ behavior: 'smooth' });
  }, 200);

  resetButton.style.display = 'block';

  // Start heart generation
  const heartInterval = setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '🌹';

    heart.style.left = Math.random() * 90 + '%';

    heartContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 3000);
  }, 100);

  resetButton.onclick = () => {
    clearInterval(heartInterval);
    messageSection.classList.remove('show');
    scrollButton.scrollIntoView({ behavior: 'smooth' });
    resetButton.style.display = 'none';
    heartContainer.innerHTML = '';
  };
});
