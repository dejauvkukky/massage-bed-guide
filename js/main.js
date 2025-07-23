
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

  // 유튜브 영상을 다시 로딩 (src 재설정)
  const promoVideo = document.getElementById('promo-video');
  const newSrc = "https://www.youtube.com/embed/rvZAn6mI02o?autoplay=1&mute=1&loop=1&playlist=rvZAn6mI02o&controls=0&modestbranding=1&rel=0&playsinline=1";
  promoVideo.src = "";                 // 먼저 src를 비워주고
  promoVideo.src = newSrc;            // 다시 설정
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
