window.addEventListener('scroll', fadeIn); 

function fadeIn() {
  var elements = document.querySelectorAll('div'); 
  for (var i = 0; i < elements.length; i++) { 
    var rect = elements[i].getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) { 
      elements[i].classList.add('anim2'); 
    } else {
      elements[i].classList.remove('anim2');
    }
  }
}