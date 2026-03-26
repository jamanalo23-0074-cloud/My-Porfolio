function toggleHobby(card) {
  card.classList.toggle("active");
}

const hobbyImages = document.querySelectorAll('.hobby-info img');
const zoomModal = document.getElementById('zoomModal');
const zoomedImg = document.getElementById('zoomedImg');

hobbyImages.forEach(img => {
  img.style.cursor = 'zoom-in'; // change cursor to indicate zoom

  img.addEventListener('click', e => {
    e.stopPropagation(); // prevent bubbling to card click
    zoomedImg.src = img.src;
    zoomModal.style.display = 'flex';
  });
});

function closeZoom() {
  zoomModal.style.display = 'none';
  zoomedImg.src = '';
}