// Display mode selection
var question_type = ["vertical", "horizontal", "horizontal2"];
var all_questions;

var q_setting = 1;
var option_setting;
var questions;
var current_question;

var Question = function(topic, description, option1, option2, option3, option4){
  this.topic = topic;
  this.description = description;
  this.option = { 1:option1, 2:option2, 3:option3, 4:option4 };
};

function question_init(){

  $.getJSON("all_questions.json", function(data) {

    console.log("Question count:" + data.length);
    var questions = question_filter(data, option_setting);
    console.log("Question count:" + questions.length);

    current_question = new Question(questions[0].question,questions[0].ps,questions[0].answer,questions[0].option1,questions[0].option2,questions[0].option3);

    layout_init();
  });
  console.log(option_setting[0]);
  console.log(option_setting[1]);
  console.log(option_setting[2]);
  console.log(option_setting[3]);
}

function question_filter(raw_data, option_setting){
    // Select questions
    return raw_data;
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

