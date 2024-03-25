document.addEventListener('DOMContentLoaded', function () {
  // Ajoute des écouteurs d'événements à tous les éléments .pdf-item
  const pdfItems = document.querySelectorAll('.pdf-item')
  pdfItems.forEach(function (item) {
    item.addEventListener('click', function () {
      // Toggle la classe 'zoomed' sur l'élément cliqué
      if (this.classList.contains('zoomed')) {
        this.classList.remove('zoomed')
      } else {
        // S'assure qu'aucun autre élément n'est zoomé
        const alreadyZoomed = document.querySelector('.pdf-item.zoomed')
        if (alreadyZoomed) {
          alreadyZoomed.classList.remove('zoomed')
        }
        this.classList.add('zoomed')
      }
    })
  })

  // Ajoute un écouteur d'événements pour fermer le zoom en cliquant n'importe où sur la page
  document.addEventListener(
    'click',
    function (e) {
      const zoomedElement = document.querySelector('.pdf-item.zoomed')
      if (
        zoomedElement &&
        !zoomedElement.contains(e.target) &&
        !e.target.closest('.pdf-item')
      ) {
        zoomedElement.classList.remove('zoomed')
      }
    },
    true
  ) // Utilise la capture pour que l'événement soit détecté avant d'arriver aux éléments .pdf-item
})
