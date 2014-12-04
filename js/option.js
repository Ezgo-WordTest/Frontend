var main = function() {

  var setting1=3,setting2=20,setting3=1,setting4=1;

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
    $('#list1 span').html($(this).html());
    setting1 = $('.btn1').index(this) +1;
  });

  $('.btn2').click(function() {
    $('#list2 span').html($(this).html());
    setting2 = $('.btn2').index(this);
    if(setting2==0)setting2 = 10;
    else if(setting2<3)setting2 *= 20;
    else if(setting2<7)setting2 = (setting2-1)*25;
    else setting2 = 10;
  });

  $('.btn3').click(function() {
    $('#list3 span').html($(this).html());
    setting3 = $('.btn3').index(this) +1;
  });

  $('.btn4').click(function() {
    $('#list4 span').html($(this).html());
    setting4 = $('.btn4').index(this) +1;
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
  
  $('#start-button').click(function(){
    option_setting = [setting1,setting2,setting3,setting4];
    $('#main-block').load('quest.html');
  });
}

$(document).ready(main);
