var main = function() {
  $('.icon-option').click(function() {
    $('.option').animate({left: "0px"}, 200);
  });
  $('.icon-close').click(function() {
    $('.option').animate({left: "-250px"}, 200);
  });
  $('.back').click(function() {
    $('#main-block').load('index.html');
  });  
  $('.answer').click(function() {
    //show anser
  });  
};

$(document).ready(main);
