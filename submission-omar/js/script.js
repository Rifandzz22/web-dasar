// Menu toggle
const menuToggle = document.querySelector('.menu-toggle input')
const nav = document.querySelector('nav ul')

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});

$(document).ready(function(){
    
    $("a").on('click', function(event) {
  
    
      if (this.hash !== "") {
    
        event.preventDefault();
  
  
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });