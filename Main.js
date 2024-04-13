  // ..................................Header Scroll Effects
window.addEventListener('scroll', function() {
  var header = document.getElementById('header');
  if (window.scrollY > 0) {
    header.classList.add('border-radius-scrolled');
  } else {
    header.classList.remove('border-radius-scrolled');
  }
});


  // ..................................slideshow
  var slideIndex = 1;
  showDivs(slideIndex);
  
  function plusDivs(n) {
    showDivs(slideIndex += n);
  }
  
  function currentDiv(n) {
    showDivs(slideIndex = n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " w3-white";
  }
  
  // Automatic slideshow
  var slideInterval = setInterval(plusDivs.bind(null, 1), 2500); // Transition every 3 seconds

  