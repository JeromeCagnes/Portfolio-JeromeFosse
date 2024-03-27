//ZOOM TEXTE INTRO
window.addEventListener('scroll', function () {
  var scrollPosition = window.scrollY
  var selectors = [
    '.texte-intro1 img',
    '.texte-intro2 img',
    '.texte-intro3 img',
    '.texte-intro4 img',
    '.texte-intro5 img',
  ] // Toutes vos classes
  var images = []

  selectors.forEach(function (selector) {
    images = images.concat(Array.from(document.querySelectorAll(selector)))
  })

  images.forEach(function (image) {
    var scaleValue = 1 + scrollPosition * 0.0002 // Ajustement pour un zoom moins prononcé

    scaleValue = Math.max(scaleValue, 1)
    scaleValue = Math.min(scaleValue, 1.5) // Réduit le niveau de zoom

    image.style.transform = 'scale(' + scaleValue + ')'
  })
})
