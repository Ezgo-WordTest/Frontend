var settings = [3, 20, 1, 1];

var grade_main = function() {
  setTimeout(grade_display,200);
  
  $('#end').click(function() {
    //should close window, not yet find a good method
  });

  $('#restart').click(function() {
    $('#main-block').load('index.html');
    selected_questions = [];
  });
}

var grade_display = function(){
  $('#correct-table').text(right);
  $('#wrong-table').text(wrong);
  $('#score-table').text(100/option_setting[1]*right);

}

$(document).ready(grade_main);
