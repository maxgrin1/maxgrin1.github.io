// Dit is het script bestand.
// Een apart bestand omdat het dan wat opgeruimder is.

//Masonry(Dat de blog posts er mooi uitzien).

//Laad de JavaScript pas nadat alle abfeeldingen geladen zijn.
var $grid = $('.grid').imagesLoaded( function() {
  $('.grid').isotope({
    itemSelector: '.collum',
    percentPosition: true,
    layoutMode: 'masonry',
    masonry: {
      columnWidth: '.detSize',
    }
  });
});


//Slide show:
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("Slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000);
}

//Klikbaar maken AboutMe afbeelding en trigger functie: showPopUp
document.getElementById("AboutMe").addEventListener("click", showPopUp);
//Het laten zien van de popup.
function showPopUp(){
  document.getElementById('AboutMePopUp').style.display = "block"
}
//Ga weer weg wanneer je buiten het div vak "AboutMePopUp" klikt.
window.onclick = function(event) {
  if (event.target == document.getElementById('AboutMePopUp')) {
      document.getElementById('AboutMePopUp').style.display = "none";
    }
}
