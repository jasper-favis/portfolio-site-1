
const tl = new TimelineMax();

tl
  .delay(0.3)
  .fromTo('.images', 1.2, {opacity: 1, width: "0%"}, {width: "100%",ease: Power2.easeInOut})
  .fromTo(".title", 0.8, {opacity: 0}, {opacity: 1,ease: Power2.easeOut}, "-=0.8")

  // const menuSlide = () => {
  //   const burgerWrapper = document.querySelector('.burger-wrapper');
  //   const menu = document.querySelector('.menu');
  //
  //   burgerWrapper.addEventListener('click', () => {
  //     menu.classList.toggle('menu-active');
  //     burgerWrapper.classList.toggle('burger-wrapper-active');
  //   });
  // }
  // menuSlide();

  document.addEventListener('DOMContentLoaded', () => {
  let controller = new ScrollMagic.Controller();
  let timeline = new TimelineMax();
  timeline
    .to('#fourth', 6, {y: -700})
    .to('#third', 6, {y: -200}, "-=6")
    .to('#second', 6, {y: -100}, "-=6")
    .to('#first', 6, {y: -100}, "-=6")
    .to('.title', 6, {y: 250}, "-=6")
    .to('.hide-img-overflow', 6, {y: 300}, "-=6")
    .to('.round-border', 6, {y: -300}, "-=6")
    .to('.scroll-down-button-wrapper', 6, {y: -300}, "-=6")
    .to('.about, .projects-section', 6, {y: -50}, "-=6")
    .to('.about-title', 6, {x: 200}, "-=6")
    .to('#sjsu', 6, {x: -10}, "-=6")
    .to('#headshot', 6, {x:-60}, "-=6")
    .to('#headshot', 6, {y:-60}, "-=6")
    .to('#brick-wall', 6, {scale: 0.7}, "-=6")
    .to('.my-photo-wrapper', 6, {x:60}, "-=6")
    .to('.my-photo-wrapper', 6, {y:60}, "-=6")
    .to('.my-photo-wrapper', 6, {scale:1.2}, "-=6")
  let scene = new ScrollMagic.Scene({
      triggerElement: 'body',
      duration: '300%',
      triggerHook: 0
    })
    .setTween(timeline)
    .setPin('.images-container')
    .addTo(controller);
   });


  //
  // const landingController = new ScrollMagic.Controller();
  // // const landingScene = new ScrollMagic.Scene({triggerElement: '.about', triggerHook: "0.7"});
  // // const landingTimeline = new TimelineMax();
  // const aboutScene = new ScrollMagic.Scene({triggerElement: '.about', triggerhook: "0.1"});
  // const aboutTimeline = new TimelineMax();
  // //
  // // landingTimeline
  // // .fromTo('.images-container', 1, {opacity: 1}, {opacity: 0, ease: Power2.easeOut})
  // //
  // aboutTimeline
  // .fromTo('.about', 0.8, {opacity: 0}, {opacity: 1})
  // // .fromTo('.my-photo-wrapper', 0.8, {opacity: 0}, {opacity: 1, ease: Power2.easeOut})
  // // .fromTo('#headshot', 2, {x: "100px"}, {x: "0", ease: Power2.easeInOut}, "-=2")
  // // .fromTo('#headshot', 0.6, {opacity: 0}, {opacity: 1, ease: Power2.easeOut}, "-=2")
  // //
  // // // landingScene.setTween(landingTimeline).addTo(landingController);
  // aboutScene.setTween(aboutTimeline).addTo(landingController);
