$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 1500,
    });
});
$(document).ready(function(){
    $('.prod__slider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 1500,
    });
});

const modalWindow = document.querySelector(".modal-window")
const modalClose = $(".modal-window-closed").on("click", () => {
    console.log(modalWindow)
    if(modalWindow.style.display === "none"){
        modalWindow.style.display = "flex"
    }else{
        modalWindow.style.display = "none"
        modalClose.css({ zIndex: -1 })
    }
})
const btn = $("#button-1").on("click", () => {
    console.log(modalWindow)
    if(modalWindow.style.display === "none"){
        modalWindow.style.display = "flex"
        modalClose.css({ zIndex: 999 })
    }else{
        modalWindow.style.display = "none"
        modalClose.css({ zIndex: -1 })
    }
})
const menu1 = document.querySelector(".menu")

menu1.addEventListener("click", () => {
    if(menu1.style.display === "none"){
        menu1.style.display = "flex"
    }else{
        menu1.style.display = "none"
    }
})


const menu2 = $(".burger").on("click", () => {
    if(menu1.style.display === "none"){
        menu1.style.display = "flex"
    }else{
        menu1.style.display = "none"
    }
})

const menu3 = $(".burger-closed-btn").on("click", () => {
    if(menu1.style.display === "none"){
        menu1.style.display = "flex"
    }else{
        menu1.style.display = "none"
    }
})