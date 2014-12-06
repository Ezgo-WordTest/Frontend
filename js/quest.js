// Display mode selection
var question_type = ["vertical", "horizontal", "horizontal2"];
var all_questions;

var q_setting = 1;
var option_setting;
var questions;
var current_question;

var selected_questions=[];
var current_no=0;

var Question = function(topic,description,option1,option2,option3,option4){
  this.topic = topic;
  this.description = description;
  this.option = { 1:option1, 2:option2, 3:option3, 4:option4 };
};

var question_init = function(){
  selected_num = 1;
  $.getJSON("all_questions.json", function(data) {
    questions = data;
    current_question = new Question(questions[0].question,questions[0].ps,questions[0].answer,questions[0].option1,questions[0].option2,questions[0].option3);
<<<<<<< HEAD
  }
  //alert(option_setting[0]);
  //alert(option_setting[1]);
  //alert(option_setting[2]);
  //alert(option_setting[3]);

  //current_question = new Question('Hello','Test Description', 'opt1','opt2','opt3','opt4');
  //current_question = new Question(questions[0].question,questions[0].ps,questions[0].answer,questions[0].option1,questions[0].option2,questions[0].option3);
  layout_init();
=======
    layout_init();
>>>>>>> 8c3c858d5deefa924c61a4cf36ba894aa4e1142d
  });
}

var layout_init = function(){
  switch_layout();
  $('#option-button').click(function(){
    $('#popup-option').toggleClass('popup-active');
  });
  $('#popup-option').click(function(){
    $('#popup-option').toggleClass('popup-active');
  });
  $('.mode-select').click(function(){
     q_setting = $(this).attr('data');
     switch_layout();
  });
}

var switch_layout = function(){
  $("#question-placeholder").load("quest-" + question_type[q_setting] + ".html", question_display );
}

var question_display = function(){
  QuestionTag.display(current_question);
}

$(document).ready(question_init);

var next_quest = function(){
  current_no++;
  //alert(selected_questions.length);
  if(current_no >= option_setting[1]){
    current_no = 0;
    current_question = selected_questions[0];
  }
  else if(selected_questions.length < option_setting[1]){
    var random_number=Math.floor(Math.random()*1001);
    $.getJSON("all_questions.json", function(data) {
      questions = data;
      current_question = new Question(questions[random_number].question,questions[random_number].ps,questions[random_number].answer,questions[random_number].option1,questions[random_number].option2,questions[random_number].option3);
      selected_questions[current_no]=current_question;
    });
  }
  else{
    current_question = selected_questions[current_no];
  }
  $("#question-placeholder").load("quest-" + question_type[q_setting] + ".html", question_display );
}

var prev_quest = function(){
  current_no--;
  var random_number=Math.floor(Math.random()*1001);
  current_question = selected_questions[current_no];
  $("#question-placeholder").load("quest-" + question_type[q_setting] + ".html", question_display );
}

$('.glyphicon-chevron-left').click(function() {
  prev_quest();
});

$('.glyphicon-chevron-right').click(function() {
  next_quest();
});

<<<<<<< HEAD
var find_question = function(){
  $.getJSON("all_questions.json", function(data) {
    questions = data;
    current_question = new Question(questions[random_number].question,questions[random_number].ps,questions[random_number].answer,questions[random_number].option1,questions[random_number].option2,questions[random_number].option3);
    selected_questions[current_no]=current_question;
  });
  if(option_setting[0]===1 && current_question.)
}
  
=======
>>>>>>> 8c3c858d5deefa924c61a4cf36ba894aa4e1142d
