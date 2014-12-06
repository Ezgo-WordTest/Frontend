// Display mode selection
var question_type = ["vertical", "horizontal", "horizontal2"];
var all_questions;

var q_setting = 1;
var option_setting;
var questions;
var current_question;

var selected_questions=[];
var current_no=0;
var avilible=0;

var Question = function(topic,description,option){
  var i,temp;
  for(i=0;i<20;i++){
    var random_number=Math.floor(Math.random()*4);
    var random_number2=Math.floor(Math.random()*4);
    temp = option[random_number];
    option[random_number] = option[random_number2];
    option[random_number2] =temp;
  }
  this.topic = topic;
  this.description = description;
  this.option = { 1:option[0], 2:option[1], 3:option[2], 4:option[3] };
}

var question_init = function(){
  alert(option_setting[0]);
  alert(option_setting[1]);
  alert(option_setting[2]);
  alert(option_setting[3]);
  find_question();
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


var next_quest = function(){
  current_no++;
  //alert(selected_questions.length);
  if(current_no >= option_setting[1]){
    current_no = 0;
    current_question = selected_questions[0];
    $("#question-placeholder").load("quest-" + question_type[q_setting] + ".html", question_display );
  }
  else if(selected_questions.length <= current_no){
    //alert('find~')
    find_question();
  }
  else{
    current_question = selected_questions[current_no];
    $("#question-placeholder").load("quest-" + question_type[q_setting] + ".html", question_display );
  }
}

var prev_quest = function(){
  current_no--;
  if(current_no<0)current_no=0;
  current_question = selected_questions[current_no];
  $("#question-placeholder").load("quest-" + question_type[q_setting] + ".html", question_display );
}

$('.glyphicon-chevron-left').click(function() {
  prev_quest();
});

$('.glyphicon-chevron-right').click(function() {
  next_quest();
});

var find_question = function(){
  //alert('QWQ');
  $.getJSON("all_questions.json", function(data) {
    var random_number=Math.floor(Math.random()*1000);
    while(check_repeat(random_number)==true){
      random_number=Math.floor(Math.random()*1000);
    }
    questions = data;
    //alert(questions[random_number].category);
    //alert(option_setting[0]);
    while(questions[random_number].category=="0" && option_setting[0]==1){
      random_number=Math.floor(Math.random()*1000);
    }
    while(questions[random_number].category=="1" && option_setting[0]==2){
      random_number=Math.floor(Math.random()*1000);
    }
    current_question = new Question(questions[random_number].question,questions[random_number].ps,[questions[random_number].answer,questions[random_number].option1,questions[random_number].option2,questions[random_number].option3]);
    selected_questions[current_no]=current_question;
    $("#question-placeholder").load("quest-" + question_type[q_setting] + ".html", question_display );
  });
  //if(option_setting[0]==1 && current_question.)
}

var check_repeat = function(random_number){
  var i;
  for(i=0; i<selected_questions.length; i++){
    if((selected_questions[i].id-1) == random_number){
      return true;
    }
  }
  return false;
}
  
















$(document).ready(question_init);