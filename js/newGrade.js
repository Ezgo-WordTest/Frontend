var settings = [3, 20, 1, 1];

var main = function() {
  $('#correct-table').text(right);
  $('#wrong-table').text(wrong);
  $('#score-table').text(100/option_setting[1]*right);

  $('#end').click(function() {
    window.open('','_self').close();
  });

  $('#restart').click(function() {
    $('#main-block').load('index.html');
    selected_questions = [];
  });
}

$(document).ready(main);
