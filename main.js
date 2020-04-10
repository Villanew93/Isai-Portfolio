// gsap.to(".slider", {opacity: 0, duration: 10});

// gsap.from(".header1",{duration: 3, x: 300});
// gsap.from(".header2",{duration: 3, y: 290});
// gsap.from(".header3",{duration: 3, x: 280});
// gsap.from(".header4",{duration: 3, y: 270});
// gsap.from(".header5",{duration: 3, x: 260});


$(document).ready(function () {

    $('.first-button').on('click', function () {
  
      $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function () {
  
      $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function () {
  
      $('.animated-icon3').toggleClass('open');
    });
  });

