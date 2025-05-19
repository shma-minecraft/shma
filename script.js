// Анимация появления блоков
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('section').forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(30px)";
    setTimeout(() => {
      section.style.transition = "all 1s";
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }, 300);
  });
});

// Копирование IP
function copyIP() {
  const ip = document.getElementById('server-ip').innerText;
  navigator.clipboard.writeText(ip).then(() => {
    const alertBox = document.getElementById('copy-alert');
    alertBox.style.display = 'block';
    setTimeout(() => {
      alertBox.style.display = 'none';
    }, 2000);
  });
}
