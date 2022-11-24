import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './index.scss';
import App from './App';
import $ from 'jquery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


var altura;
var largura;
var altura_documento;
var load_skills = false;
var load_about = false;
var load_job = false;
var load_contact = false;

function scale (number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

// PARALLAX
function parallaxBanner(mouseX,mouseY) {
  let originX = mouseX - largura * 0.3;
  let originY = mouseY - altura * 0.5;

  let eHeight = $(".banner-content__image").height();
  let eWidth = $(".banner-content__image").width();

  let x = (scale(originX,0,largura,-12,12) * -1) - eWidth / 5;
  let y = (scale(originY,0,altura,-12,12) * -1) - eHeight / 5;


  $(".banner-content__image").css({
    "backgroundPosition":
    `${x}px 
    ${y}px`
  });
}

function parallaxNeblina(mouseX,mouseY) {
  let originX = mouseX - largura * 0.3;
  let originY = mouseY - altura * 0.7;

  let x = (scale(originX,0,largura,60,120) * -1);
  let y = (scale(originY,0,altura,60,120)) ;

  let x2 = (scale(originX,0,largura,80,140) * -1);
  let y2 = (scale(originY,0,altura,80,140)) ;


  $(".neblina1").css({
    "left":`${x}px`,
    "bottom":`${y}px`
  });

  $(".neblina2").css({
    "left":`${x2}px`,
    "bottom":`${y2}px`
  });
}

function parallaxText(mouseX,mouseY) {
  let originX = (mouseX - largura * 0.1);
  let originY = (mouseY - altura * 0.4);


  let x = (scale(originX,0,largura,-5,5) * -1) + largura * 0.1;
  let y = (scale(originY,0,altura,-10,10));

  $(".banner-content__titulo").css({
    "left":`${x}px`,
    "bottom":`${y}px`
  });
}

// function parallaxMenu(mouseX,mouseY) {
//   let originX = (mouseX - largura * 0.5);
//   let originY = (mouseY - altura * 0.7);

//   // let eHeight = $(".banner-content__image").height();
//   let eWidth = $(".menu__content").width();

//   let x = (scale(originX,0,largura,0,5) * -1) + (largura/2 - eWidth/2);
//   let y = (scale(originY,0,altura,0,5));

//   $(".menu__content").css({
//     "left":`${x}px`,
//     "bottom":`${y}px`
//   });
// }

function parallaxLapa(scroll) {
  let originY = (altura_documento * 0.05) + altura + scroll;

  let y = (scale(originY,0,altura_documento,-180,120));

  $(".lapa").css({
    "bottom":`${y}px`
  });
}

function parallaxBirds(scroll) {
  let originY = (altura_documento * 0.05) + altura + scroll;

  let y = (scale(originY,0,altura_documento,-150,380));


  $(".about.animate .birds").css({
    "left":`${y + largura * 0.4}px`,
    "bottom":`${y}px`
  });
}

function loadParallax(e){
    let mouseX = e.pageX;
    let mouseY = e.pageY;
    
    if(mouseY < altura + altura_documento * 0.4) { 
      parallaxBanner(mouseX,mouseY);
      parallaxNeblina(mouseX,mouseY);
      parallaxText(mouseX,mouseY);
    }
  
}

// Skills
function skill(e,max) {
    var numero = e;
    var min = 1;
    var duração = 5000 * (max / 100); // proporcional
  
    for (var i = min; i <= max; i++) {
      setTimeout(function(nr) {
        numero.innerHTML = nr;
      }, i * duração / max, i);
      duração += 30;
    }
}

const changeButtons = () => {
  let name = $("#name").val();
  let message = $("#message").val();

  let msg = `mailto:?subject=Contato via Portifólio - ${name}&amp;body=Olá,%0D%0A%0D%0A${message}%0D%0A%0D%0AAtenciosamente,%0D%0A${name}`;

  let whatsapp = `https://api.whatsapp.com/send?phone=5521995084896&text=Olá meu nome é ${name}, ${message}`;
  $("#send").attr("href",msg);
  $(".whatsapp").attr("href",whatsapp);
}


$( document ).ready(function(i) {

  largura = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
  altura = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

  altura_documento = $(document).height(); // altura do documento HTML

  if(largura > 1100) {  
    loadParallax(i);
  }

  // $( ".banner" ).click(function() {
  //   $( "#animated" ).addClass( "off" );
  // });

  // Parallax
  $(function(){
    // var altura1 = window.screen.height;
    // var largura1 = window.screen.width;

    // let bannerX = 10;
    // let bannerY = 20;

    $(".App").mousemove(function(e){
      if(largura > 1000) {
        loadParallax(e);
      }
      // parallaxMenu(mouseX,mouseY);
    });
    
    // Header Fixed
    $(window).scroll(function() { 
      parallaxLapa($(this).scrollTop());
      parallaxBirds($(this).scrollTop());
    });
  });

  // Skills
  $(window).on("scroll", function(){
    // About
    if($("#about").offset().top - $(window).scrollTop() < 300 && load_about === false) {
      load_about = true;

      $(".about").addClass("animate");
    }

    // Skill
    if($("#skill")?.offset().top - $(window).scrollTop() < 400 && load_skills === false) {
      skill($('.html')[0], 98);
      skill($('.css')[0], 98);
      skill($('.js')[0], 87);
      skill($('.react')[0], 73);
      skill($('.node')[0], 54);
      skill($('.vtex')[0], 79);
      skill($('.git')[0], 83);
      skill($('.sql')[0], 57);

      load_skills = true;

      $(".skill").addClass("animate");
    }

    // Job
    if($("#job").offset().top - $(window).scrollTop() < 300 && load_job === false) {
      load_job = true;

      $(".job").addClass("animate");
    }

    // Contact
    if($("#contact").offset().top - $(window).scrollTop() < 500 && load_contact === false) {
      load_contact = true;

      $(".contact").addClass("animate");
    }
  });


  
  $( ".row3" ).on( "click", function() {
    if(load_skills === true) {
      skill($('.html')[0], 98);
      skill($('.css')[0], 98);
      skill($('.js')[0], 87);
      skill($('.react')[0], 73);
      skill($('.node')[0], 54);
      skill($('.vtex')[0], 79);
      skill($('.git')[0], 83);
      skill($('.sql')[0], 57);
      load_skills = true;
    }
  });

  // About section
  $( ".about-info-1" ).on( "click", function() {
    $(".about-texts").removeClass("info-2");
    $(".about-texts").toggleClass("info-1");
    $(".about-info-2").removeClass("active");
    $(".about-info-1").toggleClass("active");
  });
  
  $( ".about-info-2" ).on( "click", function() {
    $(".about-texts").removeClass("info-1");
    $(".about-texts").toggleClass("info-2");
    $(".about-info-1").removeClass("active");
    $(".about-info-2").toggleClass("active");
  });

  // Tabs jobs
  $( ".dev" ).on( "click", function() {
    if($(this).hasClass("active")) {
      $(".job__tab__item p").removeClass("active");
      $(".job__list").removeClass("dev");
      $(this).removeClass("active");
      $(".job__list__item.evo").fadeIn(500);
    } else {
      $(".job__tab__item p").removeClass("active");
      $(".job__list").removeClass("evo");
      $(".job__list").addClass("dev");
      $(this).addClass("active");

      $(".job__list__item.dev").fadeIn(500);
      $(".job__list__item.evo").fadeOut(500);
    }
  });

  $( ".evo" ).on( "click", function() {
    if($(this).hasClass("active")) {
      $(".job__tab__item p").removeClass("active");
      $(".job__list").removeClass("evo");
      $(this).removeClass("active");

      $(".job__list__item.dev").fadeIn(500);
    } else {
      $(".job__tab__item p").removeClass("active");
      $(".job__list").removeClass("dev");
      $(".job__list").addClass("evo");
      $(this).addClass("active");

      $(".job__list__item.evo").fadeIn(500);
      $(".job__list__item.dev").fadeOut(500);
    }
  });

  // Contact
  $( ".contact-title p" ).on( "click", function() {
    $( ".contact-title" ).animate({
      opacity: 0,
      right: "100%",
    }, 800, function() {
      $( ".contact-title" ).css({"display":"none"})
    });
    $( ".contact-form" ).animate({
      opacity: 1,
      left: "0",
    }, 1000);
  });

  $("#name").on("change",function(){
    changeButtons();
  });

  $("#message").on("change",function(){
    changeButtons();
  });
});

