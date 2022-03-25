let landing = new TimelineMax();
landing
  .fromTo('.images', 1.8, {
    height: "0%"
  }, {
    height: "80%",
    ease: Power2.easeInOut
  });

const menuSlide = () => {
  const burgerWrapper = document.querySelector('.burger-wrapper');
  const menu = document.querySelector('.menu');

  burgerWrapper.addEventListener('click',() => {
    menu.classList.toggle('menu-active');
    burgerWrapper.classList.toggle('burger-wrapper-active');
  });
}

menuSlide();

document.addEventListener('DOMContentLoaded', () => {
  let controller = new ScrollMagic.Controller();
  let timeline = new TimelineMax();
  timeline
    .to('#fourth', 6, {
      y: -700
    })
    .to('#third', 6, {
      y: -500
    }, "-=6")
    .to('#second', 6, {
      y: -300
    }, "-=6")
    .to('#first', 6, {
      y: -100
    }, "-=6")
    .to('img-blocker', 6, {
      y: -700
    }, "-=6")
    .to('.content, .blur', 6, {
      top: '0%'
    }, "-=6")
  let scene = new ScrollMagic.Scene({
      triggerElement: '.container',
      duration: '105%',
      triggerHook: 0
    })
    .setTween(timeline)
    .setPin('.container')
    .addTo(controller);
});


const videoController = new ScrollMagic.Controller();
const videoScene = new ScrollMagic.Scene({triggerElement: '.sample-video-wrapper', triggerHook: 0.5});
const videoTimeLine = new TimelineMax();
videoTimeLine
.fromTo('.sample-video-wrapper', 1.8, {opacity: 0}, {opacity: 1, ease: Power2.easeOut})
.fromTo('.pool-video', 1.8, {opacity: 0}, {opacity: 1, ease: Power2.easeOUt})
videoScene.setTween(videoTimeLine).addTo(videoController);

const introController = new ScrollMagic.Controller();
const introScene = new ScrollMagic.Scene({triggerElement: '.content', triggerHook: "0.2"});
const introTimeline = new TimelineMax();
introTimeline
.fromTo('.images', 1.5, {opacity: 1}, {opacity: 0, ease: Power2.easeOut})
introScene.setTween(introTimeline).addTo(introController);
