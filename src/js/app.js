console.log("hola mundo");

// function modifyText() {
//   var t2 = document.getElementById("t2");
//   t2.firstChild.nodeValue = "three";
//  }

//  var el = document.getElementById("t");
//  el.addEventListener("click", modifyText, false);

// $(document).ready(function(){
//   $(".mobile").click(function(){
//     $("nav").toggleClass("active")
//   }),
//   $("nav ul li ul").each(function(){
//     $(this).before('<span class="arrow"></span>')
//   }),
//   $("nav ul li").click(function(){
//     $(this).children("ul").toggleClass("active"),
//     $(this).children(".arrow").toggleClass("rotate")
//   })
// });



// const ham = document.querySelector('.ham');
// const enlaces = document.querySelector('.enlaces-menu');
// const barras = document.querySelectorAll('.ham span');

// ham.addEventListener('click', () => {
//     enlaces.classList.toggle('activado');
//     barras.forEach(child => {child.classList.toggle('animado')});
//     ham.classList.toggle('girar');
// });


function mensaje(){
  //console.log("hola");
  const square = function(number) { return number * number }
  let x = square(4);
  alert(x);
}

let menuMobile = document.querySelector('.mobile');
let navMobile = document.querySelector('.nav');

function activate(){
  navMobile.classList.toggle('active');
}

//menuMobile.addEventListener("click", mensaje, false);
menuMobile.addEventListener("click", activate, false);
