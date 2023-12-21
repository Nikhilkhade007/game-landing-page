const menuBTN = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");
// menuBTN.addEventListener('click',()=>{
//     menuBTN.classList.toggle('active');
//     navbar.classList.toggle('active')
//     console.log("clicked");
// })
menuBTN.addEventListener("click", () => {
    menuBTN.classList.toggle("active");
    navbar.classList.toggle('active')
  });
  

const slide_btn = document.querySelectorAll(".slider-btn");
const slides = document.querySelectorAll('.image-slide')
let slideNav = function(manual){
    slide_btn.forEach((btn) => {
        btn.classList.remove('now-active')
    });
    slides.forEach((slide) => {
        slide.classList.remove('now-active')
    });
    slide_btn[manual].classList.add('now-active');
    slides[manual].classList.add('now-active')
    

}
slide_btn.forEach((btn,i) => {
    
    btn.addEventListener('click',()=>{
        slideNav(i)
    })
});