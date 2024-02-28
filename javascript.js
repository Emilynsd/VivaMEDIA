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