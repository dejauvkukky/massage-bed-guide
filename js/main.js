
let idleTimer;
const idleTimeout = 30000; // 30초 후 초기화면으로

function navigateToMenu() {
  document.getElementById('main-screen').style.display = 'none';
  document.getElementById('menu-screen').style.display = 'block';
  resetIdleTimer();
}

function openModal(url) {
  const modal = document.getElementById('modal');
  const frame = document.getElementById('video-frame');
  frame.src = url + "?autoplay=1";
  modal.style.display = "block";
  resetIdleTimer();
}

function closeModal() {
  const modal = document.getElementById('modal');
  const frame = document.getElementById('video-frame');
  frame.src = "";
  modal.style.display = "none";
}

function resetToMain() {
  document.getElementById('menu-screen').style.display = 'none';
  document.getElementById('main-screen').style.display = 'block';
}

function resetIdleTimer() {
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => {
    closeModal();
    resetToMain();
  }, idleTimeout);
}

document.addEventListener('mousemove', resetIdleTimer);
document.addEventListener('click', resetIdleTimer);
document.addEventListener('touchstart', resetIdleTimer);
