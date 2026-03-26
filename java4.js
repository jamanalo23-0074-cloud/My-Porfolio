// Image Modal Functionality
<script
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close-modal');
    const imageCards = document.querySelectorAll('.image-card');


    imageCards.forEach(card => {
      card.addEventListener('click', () => {
        const img = card.querySelector('img');
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        modal.classList.add('active');
      });
    });


    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });


    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });


    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
      }
    });
> </script>