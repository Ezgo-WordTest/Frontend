var main = function() {
  
  $('.mynav').click(function() {
    var id = $('.mynav').index(this);

    var currentSlide = $('.active_slide');
    var nextSlide = $("#slide"+(id+1));

    var currentDot = $('.active-dot');
    var nextDot = $('#dot'+(id+1));

    var currentNav = $('.active');
    var nextNav = $('#list'+(id+1));

    currentSlide.removeClass('active_slide');
    nextSlide.addClass('active_slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');

    currentNav.removeClass('active');
    nextNav.addClass('active');
  });

  $('.btn1').click(function() {
    $('.list1 span').html($(this).html());

  });

  $('.btn2').click(function() {
    $('.list2 span').html($(this).html());

  });

  $('.btn3').click(function() {
    //$('.list3 span').html($(this).html());

  });

  $('.btn4').click(function() {
    //$('.list4 span').html($(this).html());

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

}

$(document).ready(main);