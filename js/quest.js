// Display mode selection
var question_type = ["vertical", "horizontal", "horizontal2"];
var q_setting = 1;

var current_question;

var Question = function(topic,description,option1,option2,option3,option4){
  this.topic = topic;
  this.description = description;
  this.option = { 1:option1, 2:option2, 3:option3, 4:option4 };
};

var question_init = function(){
  current_question = new Question('Hello','Test Description', 'opt1','opt2','opt3','opt4');
  layout_init();
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

