/* Buffer control */
function AtStart(){
setTimeout(Preloader(),10000);
}

function Preloader(){
document.getElementById("buffer").style.display="none";
document.getElementById("loadMsg").style.display="none";
}

(function() {
    "use strict";

    const typed = document.querySelector('.typed')
    if (typed) {
      let typed_strings = typed.getAttribute('data-typed-items')
      typed_strings = typed_strings.split(',')
      new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }
})()