
let idleTimer;
const idleTimeout = 30000; // 30초

function resetIdleTimer() {
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => {
    showPromoVideo();
  }, idleTimeout);
}

function closeVideoModal() {
  document.getElementById('video-modal').classList.remove('active');
  document.getElementById('menu-screen').style.display = 'block';
  resetIdleTimer();
}

function showPromoVideo() {
  document.getElementById('menu-screen').style.display = 'none';
  document.getElementById('video-modal').classList.add('active');
}

function openModal(url) {
  const modal = document.getElementById('modal');
  const frame = document.getElementById('video-frame');
  frame.src = url + "?autoplay=1";
  modal.classList.add("active");
  resetIdleTimer();
}

function closeModal() {
  const modal = document.getElementById('modal');
  const frame = document.getElementById('video-frame');
  frame.src = "";
  modal.classList.remove("active");
}

window.onload = () => {
  resetIdleTimer();
};
