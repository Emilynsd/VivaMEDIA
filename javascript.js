// Find billede og video
const image = document.querySelector('.space-peak img');
const video = document.querySelector('.space-peak video');

// Lyt efter klik på containeren
document.getElementById('space-peak').addEventListener('click', function() {
  // Hvis billedet er synligt, skift til video
  if (image.style.display !== 'none') {
    image.style.display = 'none';
    video.style.display = 'block';
    video.play(); // Start videoen
  } else { // Ellers skift tilbage til billedet
    video.style.display = 'none';
    image.style.display = 'block';
  }
});

var customVideo = document.getElementById('customVideo');
var playPauseButton = document.getElementById('playPauseButton');
var muteUnmuteButton = document.getElementById('muteUnmuteButton');

playPauseButton.addEventListener('click', function () {
  if (customVideo.paused) {
    customVideo.play();
    playPauseButton.textContent = 'Pause';
  } else {
    customVideo.pause();
    playPauseButton.textContent = 'Play';
  }
});

muteUnmuteButton.addEventListener('click', function () {
  if (customVideo.muted) {
    customVideo.muted = false;
    muteUnmuteButton.textContent = 'Mute';
  } else {
    customVideo.muted = true;
    muteUnmuteButton.textContent = 'Unmute';
  }
});
