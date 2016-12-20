(function() {
  var openMap = document.querySelector('.open-map');
  var mapPopup = document.querySelector('.modal-content-map');
  var closeMap = mapPopup.querySelector('.modal-content-close');

  openMap.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.add('modal-content-show');
  });
  closeMap.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.remove('modal-content-show');
  });
  window.addEventListener("keydown", function(event) {
    if ( event.keyCode == 27 ) {
      if ( mapPopup.classList.contains('modal-content-show') ) {
        mapPopup.classList.remove('modal-content-show');
      }
    }
  });
})();