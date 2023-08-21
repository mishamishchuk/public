AOS.init({
    duration: 1200,
    easing: 'ease-out-quart',
    once: true,
    offset: 100,
  });

  document.addEventListener("DOMContentLoaded", function() {
    var socIcons = document.querySelector(".delayed-fade-in");
    socIcons.classList.add("visible");
  });

  /*//////////////////////////////////HAMBURGER MENU//////////////////////////////*/

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navItem = document.querySelectorAll(".nav-item")

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  })

  for(let elem of navItem){
  elem.addEventListener("click", ()=>{
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  })}

  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", ()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }))

  /*//////////////////////////////////SKILLS ANIMATION//////////////////////////////*/

  let options = {
    startAngle: -1.55,
    size: 150,
    value: 0.85,
    fill: {gradient: ['red', 'purple']}
  }
  $(".circle .bar").circleProgress(options).on('circle-animation-progress',
  function(event, progress, stepValue){
    $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
  });
  $(".js .bar").circleProgress({
    value: 0.75
  });
  $(".node .bar").circleProgress({
    value: 0.60
  });      
  $(".react .bar").circleProgress({
    value: 0.90
  });



  $(document).ready(function () {
    let animationActivated = false;

    function isElementInViewport(el) {
      let rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );
    }

    function activateAOSWithDelay() {
      if (!animationActivated) {
        $(".circle .bar").each(function (index) {
          let cardElement = this;
          let delay = 200 * index; 

          setTimeout(function () {
            if (isElementInViewport(cardElement)) {
              $(cardElement)
                .circleProgress("redraw")
                .on("circle-animation-progress", function (event, progress, stepValue) {
                  $(this)
                    .parent()
                    .find("span")
                    .text(String(stepValue.toFixed(2).substr(2)) + "%");
                });
              animationActivated = true;
            }
          }, delay);
        });
      }
    }

    $(window).on("scroll", function () {
      activateAOSWithDelay();
    });
  });
