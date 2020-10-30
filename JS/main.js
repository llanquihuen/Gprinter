var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var slideIndex = 0;
showSlides2();

function showSlides2() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("activo");
    [...slides[i].getElementsByTagName("img")][0].classList.remove("activo")


  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  [...slides[slideIndex-1].getElementsByTagName("img")][0].classList.add("activo")
  
  setTimeout(showSlides2, 6000); 
  plusSlides(0);// 
}


// ---- MENU STICKY
let menu= document.getElementById("menu")
window.addEventListener("scroll", (e) => {
    if (window.scrollY<105) {
        menu.classList.remove("stick")
        menu.classList.add("menu")


    }else{
        menu.classList.add("stick")
        menu.classList.remove("menu")

    }
});

document.getElementById("instagram").addEventListener("click", () =>{
    window.location.href = "https://www.instagram.com/gprinter_/";
})
document.getElementById("facebook").addEventListener("click", () =>{
    window.location.href = "https://www.facebook.com/gprinterchile";
})

document.getElementById("menu_serv").addEventListener("mouseover", () =>{
    console.log("holi")
    document.getElementById("desplegable").classList.remove("disp_none")
})
document.getElementById("desplegable").addEventListener("mouseover", () =>{
    document.getElementById("desplegable").classList.remove("disp_none")
})

document.getElementById("menu_serv").addEventListener("mouseout", () =>{
    document.getElementById("desplegable").classList.add("disp_none")
})
document.getElementById("desplegable").addEventListener("mouseout", () =>{
    document.getElementById("desplegable").classList.add("disp_none")
})

// document.getElementById("menu_serv").addEventListener("click", () =>{
//     console.log("holi")
//     document.getElementById("desplegable").classList.toggle("disp_none")
// })
