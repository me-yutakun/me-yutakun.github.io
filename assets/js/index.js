/* Buffer control */
function AtStart(){
setTimeout(Preloader(),10000);
let content = document.querySelector('.typed').getAttribute('data-typed-items').split(',')
new Typed('.typed', {
  strings: content,
  loop: true,
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 2000
});
}

function Preloader(){
document.getElementById("buffer").style.display="none";
document.getElementById("loadMsg").style.display="none";
}
