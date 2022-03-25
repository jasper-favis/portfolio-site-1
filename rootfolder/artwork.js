let landing = new TimelineMax();
landing
.fromTo('.art-title', 0.5, {
  opacity: 0
}, {
opacity: 1
})
.fromTo('.splash-wrapper .img-1', 0.1, {
  opacity: 0
}, {
opacity: 1
})
.fromTo('.splash-wrapper .img-2', 0.1, {
  opacity: 0
}, {
opacity: 1
})
.fromTo('.splash-wrapper .img-3', 0.1, {
  opacity: 0
}, {
opacity: 1
})
.fromTo('.splash-wrapper .img-4', 0.1, {
  opacity: 0
}, {
opacity: 1
})
  .fromTo('.front-img-wrapper', 1.6, {
    scale: 0
  }, {
  scale: 1.3,
    ease: Power2.easeInOut
  })
  .fromTo('.front-img-wrapper', 1.4, {
    opacity: 0
  }, {
  opacity: 1,
    ease: Power2.easeInOut
  }, "-=1")
  .to('.front-img-wrapper', 1.8, {
  scale: 1,
    ease: Power2.easeInOut
  })
  .fromTo('.scroll-down-container', 0.5, {
    opacity: 0
  }, {
  opacity: 1,
    ease: Power2.easeInOut
  }, "-=1.8")
  .fromTo('.background-wrapper', 2, {
    opacity: 0
  }, {
  opacity: 1,
    ease: Power2.easeInOut
  }, "-=1.8")
  .fromTo('.gallery', 2, {
    opacity: 0
  }, {
  opacity: 1,
    ease: Power2.easeInOut
  }, "-=1.8")



const menuSlide = () => {
  const burgerWrapper = document.querySelector('.burger-wrapper');
  const menu = document.querySelector('.menu');

  burgerWrapper.addEventListener('click',() => {
    menu.classList.toggle('menu-active');
    burgerWrapper.classList.toggle('burger-wrapper-active');
  });
}

menuSlide();

$(".img-wrapper").magnificPopup({
  delegate: '.image',
  type: 'image',
  gallery:{
    enabled: true
  }
});
