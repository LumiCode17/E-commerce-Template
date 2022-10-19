//Header
$('.menu-toggle').click(function () {

    $('.site-nav').toggleClass('site-nav--open', 500);
    $(this).toggleClass('open');

});

/*********GSAP*ANIMATIONS**********/
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("h1", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo("img", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".line", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

//Blog
// Change The Picture and Associated Element Color when Color Options Are Clicked.
$(".product-colors span").click(function() {
    $(".product-colors span").removeClass("active");
    $(this).addClass("active");
    $(".active").css("border-color", $(this).attr("data-color-sec"))
    $(".blog-container").css("blog-background", $(this).attr("data-color-primary"));
    $(".content h2").css("color", $(this).attr("data-color-sec"));
    $(".content h3").css("color", $(this).attr("data-color-sec"));
    $(".blog-container .imgBx").css("blog-background", $(this).attr("data-color-sec"));
    $(".blog-container .details button").css("blog-background", $(this).attr("data-color-sec"));
    $(".imgBx img").attr('src', $(this).attr("data-pic"));
});

//featured blog
document.querySelectorAll('.featured-image-1').forEach(image_1 =>{
  image_1.addEventListener('click', () =>{
    let src = image_1.getAttribute('src');
    document.querySelector('.big-image-1').src = src;
  });
});

document.querySelectorAll('.featured-image-2').forEach(image_2 =>{
  image_2.addEventListener('click', () =>{
    let src = image_2.getAttribute('src');
    document.querySelector('.big-image-2').src = src;
  });
});

document.querySelectorAll('.featured-image-3').forEach(image_3 =>{
  image_3.addEventListener('click', () =>{
    let src = image_3.getAttribute('src');
    document.querySelector('.big-image-3').src = src;
  });
});

//Review
var rot = 0,
    con = document.querySelector('#caro_con'),
    btns = document.querySelectorAll('button'),
    tran_time = 1000

btns.forEach(function(btn) {
  btn.addEventListener('click', function(){
    if(btn.className == 'btn_left') {
      rot = rot - 90
      con.style.transform = 'rotate('+rot+'deg)'
    }
    if(btn.className == 'btn_right') {
      rot = rot + 90
      con.style.transform = 'rotate('+rot+'deg)'
    }
  })
})

window.addEventListener('keyup', function(e){
  if(e.keyCode === 37) {
    rot = rot - 90
    con.style.transform = 'rotate('+rot+'deg)'
  }
  if(e.keyCode === 39) {
    rot = rot + 90
    con.style.transform = 'rotate('+rot+'deg)'
  }
})

function mouseWheel(e) {
  // console.log(e)
  window.removeEventListener('wheel', mouseWheel)
  setTimeout(function(){
    window.addEventListener('wheel', mouseWheel)
  }, tran_time)

  if(e.deltaY < 0) {    
    rot = rot - 90
    con.style.transform = 'rotate('+rot+'deg)'
  } else {
    rot = rot + 90
    con.style.transform = 'rotate('+rot+'deg)'
  }
}
window.addEventListener('wheel', mouseWheel)

//Contact
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".contact-container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


// SCROLL INDICATOR: When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
} 

//fullscreen
let elem = document.getElementById("cardyIMG");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

