var main = function() {

  $('.list1').click(function() {
    var currentSlide = $('.active_slide');
    var nextSlide = $('.slide1');

    var currentDot = $('.active-dot');
    var nextDot = $('.dot1');

    var currentNav = $('.active');
    var nextNav = $('.list1');

    currentSlide.removeClass('active_slide');
    nextSlide.addClass('active_slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');

    currentNav.removeClass('active');
    nextNav.addClass('active');
  });

  $('.list2').click(function() {
    var currentSlide = $('.active_slide');
    var nextSlide = $('.slide2');

    var currentDot = $('.active-dot');
    var nextDot = $('.dot2');

    var currentNav = $('.active');
    var nextNav = $('.list2');

    currentSlide.removeClass('active_slide');
    nextSlide.addClass('active_slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');

    currentNav.removeClass('active');
    nextNav.addClass('active');
  });

  $('.list3').click(function() {
    var currentSlide = $('.active_slide');
    var nextSlide = $('.slide3');

    var currentDot = $('.active-dot');
    var nextDot = $('.dot3');

    var currentNav = $('.active');
    var nextNav = $('.list3');

    currentSlide.removeClass('active_slide');
    nextSlide.addClass('active_slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');

    currentNav.removeClass('active');
    nextNav.addClass('active');
  });

  $('.list4').click(function() {
    var currentSlide = $('.active_slide');
    var nextSlide = $('.slide4');

    var currentDot = $('.active-dot');
    var nextDot = $('.dot4');

    var currentNav = $('.active');
    var nextNav = $('.list4');

    currentSlide.removeClass('active_slide');
    nextSlide.addClass('active_slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');

    currentNav.removeClass('active');
    nextNav.addClass('active');
  });

  $('.arrow-next').click(function() {
    var currentSlide = $('.active_slide');
    var nextSlide = currentSlide.next();

    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();

    var currentNav = $('.active');
    var nextNav = currentNav.next();

    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      nextDot = $('.dot').first();
      nextNav = $('.mynav').first();
    }

    currentSlide.removeClass('active_slide');
    nextSlide.addClass('active_slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');

    currentNav.removeClass('active');
    nextNav.addClass('active');
  });


  $('.arrow-prev').click(function() {
    var currentSlide = $('.active_slide');
    var prevSlide = currentSlide.prev();

    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();

    var currentNav = $('.active');
    var nextNav = currentNav.prev();

    if(prevSlide.length === 0) {
      prevSlide = $('.slide').last();
      prevDot = $('.dot').last();
      nextNav = $('.mynav').last();
    }

    currentSlide.removeClass('active_slide');
    prevSlide.addClass('active_slide');

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');

    currentNav.removeClass('active');
    nextNav.addClass('active');
  });

  $('#startbutton').click(function() {
    $("#main-block").load("quest.html");
  });
}

function loadCSS(file){
    if($('link[href="' + file + '"]').size() > 0){ 
        console.log('already loaded ' + file);
    }else{
      if (document.createStyleSheet){
        document.createStyleSheet( file );
      }
      else {
        $("head").append($('<link rel="stylesheet" href="' + file +'" type="text/css" />'));
      }
    }
}

$(document).ready(main);
