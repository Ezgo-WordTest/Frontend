// Display mode selection
var question_type = ["vertical", "horizontal", "horizontal2","summary"];
var all_questions;

var q_setting = 1;
var option_setting;
var questions;
var current_question;

var selected_questions=[];
var current_no=0;
var avilible=0;

var answer;
var answered;

var Question = function(topic,description,option,answer){
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
  this.answer = answer;
}

function quest_init(){
  $("#question-placeholder").load("quest-" + question_type[q_setting] + ".html",layout_init);
}

function layout_init(){
  $('#option-button').click(function(){
    $('#popup-option').toggleClass('popup-active');
  });
  $('#popup-option').click(function(){
    $('#popup-option').toggleClass('popup-active');
  });
  $('.mode-select').click(function(){
    q_setting = $(this).attr('data');
    update_layout();
  });
  $('.btn-primary').click(function() {
    if( $(this).html() == answer){
      if(answered == 0)console.log('Correct!');
        $(this).removeClass('btn-primary');
      $(this).addClass('btn-success');
    }
    else{
      if( answered == 0)console.log('Wrong!');
        $(this).removeClass('btn-primary');
      $(this).addClass('btn-danger');
    }
    answered = 1;
  });
  /* after layout has been initialized, find first question */
  find_question();
}

var update_layout = function(){
  $("#question-placeholder").load("quest-" + question_type[q_setting] + ".html");
}

function question_display(){
  QuestionTag.display(current_question);
  QuestionTag.updateButtonStatus( /* TODO: add answering status, this value is only for test */ 1, [2,3] );
}

var next_quest = function(){
  current_no++;

  /* Exceed question count */
  if(current_no >= option_setting[1]){
    $("#end-test").removeClass("btn-danger");
    $("#end-test").addClass("btn-success");
    current_no = 0;
    current_question = selected_questions[0];
  }

  /* need to find new question */
  else if(selected_questions.length <= current_no){
    find_question();
  }

  /* just switch to question that had been found */
  else{
    current_question = selected_questions[current_no];
  }
  question_display();
}

var prev_quest = function(){
  current_no--;
  if(current_no<0)current_no=0;
    current_question = selected_questions[current_no];
  question_display();
}

$('#question-prev').click(function() {
  prev_quest();
});

$('#question-next').click(function() {
  next_quest();
});

var find_question = function(){
  /* Load all question from JSON file */
  $.getJSON("all_questions.json", function(questions) {
    var random_number = getRandomQuestionID();

    /* Check if question category is satisfied */
    while(questions[random_number].category=="0" && option_setting[0]==1){
      random_number = getRandomQuestionID();
    }
    while(questions[random_number].category=="1" && option_setting[0]==2){
      random_number = getRandomQuestionID();
    }

    current_question = new Question(
      questions[random_number].question,
      questions[random_number].ps,
      [
        questions[random_number].answer,
        questions[random_number].option1,
        questions[random_number].option2,
        questions[random_number].option3
      ],
      questions[random_number].answer
    );

    selected_questions[current_no]=current_question;
    question_display();
  });
}

function getRandomQuestionID(){
  do{
    /* If repeated, try again */
    random_number=Math.floor(Math.random()*1000);
  }while( check_repeat(random_number) );
    return random_number;
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

$("#end-test").click(function() {
  console.log('End Test');
});

$(document).ready(quest_init);
