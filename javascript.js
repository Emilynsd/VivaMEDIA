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
document.addEventListener('DOMContentLoaded', function() {
  const image = document.querySelector('.stor-animation-img');
  const video = document.querySelector('.stor-animation video');

  image.addEventListener('mouseover', function() {
    image.style.display = 'none';
    video.style.display = 'block';
    video.play(); // Start videoen
  });

  image.addEventListener('click', function(event) {
    event.stopPropagation(); // Stopper klikbegivenheden fra at nå containeren og stoppe videoen
    image.style.display = 'none';
    video.style.display = 'block';
    video.play(); // Start videoen
  });

  document.addEventListener('mouseover', function(event) {
    if (!event.target.matches('.stor-animation, .stor-animation *')) {
      image.style.display = 'block';
      video.style.display = 'none';
      video.pause(); // Stop videoen
    }
  });
});


