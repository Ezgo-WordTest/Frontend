var settings = [3, 20, 1, 1];

function init() {
  var activeIndex = 0;
  var optionTypeCount = $('.nav-optiontype').children().length;

  function updateActiveItem(id){
    $("#slide"+activeIndex).removeClass('active');
    $("#slide"+id).addClass('active');

    $('#dot'+activeIndex).removeClass('active');
    $('#dot'+id).addClass('active');

    $('#list'+activeIndex).removeClass('active');
    $('#list'+id).addClass('active');

    activeIndex = id;
  }

  $('.nav-optiontype').on('click',function(e) {
    var id = $(e.target).index();
    updateActiveItem(id);
  });

  $('.dots').on('click',function(e) {
    var id = $(e.target).index();
    updateActiveItem(id);
  });

  $('.arrow-next').click(function() {
    updateActiveItem((activeIndex + 1 >= optionTypeCount) ? 0 : activeIndex + 1);
  });
  $('.arrow-prev').click(function() {
    updateActiveItem((activeIndex - 1 < 0) ? optionTypeCount - 1 : activeIndex - 1);
  });

  $('.btn-option').click(function() {
    $('#list' + $(this).attr('data-setting')).html( $(this).html() );
    settings[$(this).attr('data-setting')] = $(this).attr('data-option');
    updateActiveItem((activeIndex + 1 >= optionTypeCount) ? activeIndex : activeIndex + 1);
  });

  $('#start-button').click(function(){
    option_setting = settings;
    $('#main-block').load('quest.html');
  });
}

$(document).ready(init);
