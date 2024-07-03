gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();


function page4Animation() {
  var elemC = document.querySelector("#elem-container")
  var fixed = document.querySelector("#fixed-image")

  elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block"
  })
  elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none"
  })

  var elems = document.querySelectorAll(".elem")
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      var img = e.getAttribute("data-image")
      fixed.style.backgroundImage = `url(${img})`
    })

  })
}

//swpier
function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
  });
}
swiperAnimation()
page4Animation()

//page3
var tl = gsap.timeline()
tl.from("#page3 .elem h2", {
    // rotate:360,
    // scale:0,
    y:220,
    opacity:0,
    duration: 1,
    stagger: 0.7,

    scrollTrigger:{
      trigger:"#page3",
      scroller:"#main",
      // markers:  true,
      start: "top 50%",
      end: "top 0%",
      scrub:true

      
    }
})

//page4
var one = document.querySelector("#page4 #one")
var two = document.querySelector("#page4 #two")
var three = document.querySelector("#page4 #three")
var ryt = document.querySelector(".right img")
var red = document.querySelector("#line #redline")

two.addEventListener("click", function () {
  one.style.color = `rgb(66, 60, 55)`
  two.style.color = "white";
  three.style.color = `rgb(66, 60, 55)`
  red.style.top = "35%"
  ryt.src= "https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d0_Project.webp"
})
one.addEventListener("click", function () {
  two.style.color = `rgb(66, 60, 55)`
  one.style.color = "white";
  three.style.color = `rgb(66, 60, 55)`
  red.style.top = "0"
  ryt.src = "https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15e1_Project-p-800.jpg"

})
three.addEventListener("click", function () {
  one.style.color = `rgb(66, 60, 55)`
  two.style.color = `rgb(66, 60, 55)`
  three.style.color = "white";
  red.style.top = "66%"
  ryt.src = "https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15cd_Execution-p-800.jpg"
})

var navimg = document.querySelector("#nav img")
var full = document.querySelector("#full-scr")
var menu = document.querySelector("#nav h3")
var icon = document.querySelector("#page1 #nav i")

var flag = 0
menu.addEventListener("click",function(){
  if(flag==0){
    full.style.top = 0
    navimg.style.opacity = 0
    // icon.innerHTML = `<i class="ri-close-large-line"></i>`
    flag = 1
  }else{
    full.style.top = "-100%"
    navimg.style.opacity = 1
    flag = 0
  }
})