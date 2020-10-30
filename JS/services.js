document.getElementById("menu_serv").addEventListener("mouseover", () =>{
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


var gallery = document.querySelector('#gallery');
var getVal = function (elem, style) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };
var getHeight = function (item) { return item.querySelector('.content').getBoundingClientRect().height; };
var resizeAll = function () {
    var altura = getVal(gallery, 'grid-auto-rows');
    var gap = getVal(gallery, 'grid-row-gap');
    gallery.querySelectorAll('.gallery-item').forEach(function (item) {
        var el = item;
        el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
    });
};
gallery.querySelectorAll('img').forEach(function (item) {
    item.classList.add('byebye');
    if (item.complete) {
        console.log(item.src);
    }
    else {
        item.addEventListener('load', function () {
            var altura = getVal(gallery, 'grid-auto-rows');
            var gap = getVal(gallery, 'grid-row-gap');
            var gitem = item.parentElement.parentElement;
            gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
            item.classList.remove('byebye');
        });
    }
});
window.addEventListener('resize', resizeAll);
gallery.querySelectorAll('.gallery-item').forEach(function (item) {
    item.addEventListener('click', function () {        
        item.classList.toggle('full');        
    });
});

// document.getElementById("menu_serv").addEventListener("click", () =>{
//     console.log("holi")
//     document.getElementById("desplegable").classList.toggle("disp_none")
// })
// const gap = 0;

// const carousel = document.getElementById("carousel"),
//   content = document.getElementById("content"),
//   next = document.getElementById("next"),
//   prev = document.getElementById("prev");

// next.addEventListener("click", e => {
//   carousel.scrollBy(width + gap, 0);
//   if (carousel.scrollWidth !== 0) {
//     prev.style.display = "flex";
//   }
//   if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
//     next.style.display = "none";
//   }
// });
// prev.addEventListener("click", e => {
//   carousel.scrollBy(-(width + gap), 0);
//   if (carousel.scrollLeft - width - gap <= 0) {
//     prev.style.display = "none";
//   }
//   if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
//     next.style.display = "flex";
//   }
// });

// let width = carousel.offsetWidth;
// window.addEventListener("resize", e => (width = carousel.offsetWidth));
