// let heroVideo = document.getElementById("video1");

// heroVideo.addEventListener("mouseover", function() {
//     heroVideo.playbackRate = 1.5; // Speed up to 1.5x on hover
//     heroVideo.smoo
// });



let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY && window.scrollY > 100) {
    // Scrolling down
    navbar.classList.add('hidden');
  } else {
    // Scrolling up
    navbar.classList.remove('hidden');
  }
  lastScrollY = window.scrollY;
});
