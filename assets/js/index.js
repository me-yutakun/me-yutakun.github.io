function main(){
setTimeout(Preloader(),10000);
TypedJS();
CircularPG();
}

function Preloader(){
document.getElementById("buffer").style.display="none";
document.getElementById("loadMsg").style.display="none";
}

function TypedJS(){
  let content = document.querySelector('.typed').getAttribute('data-typed-items').split(',')
  new Typed('.typed', {
  strings: content,
  loop: true,
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 2000
});
}

function CircularPG(){
const numb = document.querySelector(".number");
let counter = 0;
setInterval(() => {
  if(counter == 100 ){
    clearInterval();
  }else{
    counter+=1;
    numb.textContent = counter + "%";
  }
}, 80);
}