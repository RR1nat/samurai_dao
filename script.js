window.addEventListener('load', () => {
  const title = document.querySelector('.title');
  const channel = document.querySelector('.channel');
  const dao = document.querySelector('.dao');

  setTimeout(() => {
    title.classList.add('visible');
  }, 200);

  setTimeout(() => {
    channel.classList.add('visible');
  }, 500);

  setTimeout(() => {
    dao.classList.add('visible');
  }, 800);
});

document.addEventListener('mousemove', (e) => {
  const cursor = document.getElementById('neon-cursor');
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});