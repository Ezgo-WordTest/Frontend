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

var answer;
var answered;

var Question = function(topic, description, option, answer){
  var temp;
  // randomize (swap) options, 20 times might be enough
  for(i=0; i<20; i++){ 
    var random_number = Math.floor(Math.random()*4);
    var random_number2 = Math.floor(Math.random()*4);
    temp = option[random_number];
    option[random_number] = option[random_number2];
    option[random_number2] =temp;
  }
  this.topic = topic;
  this.description = description;
  this.option = { 1:option[0], 2:option[1], 3:option[2], 4:option[3] };
  this.answer = answer;
  this.selected_options = [];
  this.selected_answer = 0;
}

function quest_init(){
  $("#question-placeholder").load("quest-" + question_type[q_setting] + ".html",layout_init);
}

function layout_init(){
  //alert('layout init !');
  update_layout();
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
  setTimeout(test,1000);
  /* after layout has been initialized, find first question */
  find_question();
}

function test () {
    $('.option-clear').click(function() {
    //alert('press button!');
    if( $(this).html() == answer){
      if(answered == 0)console.log('Correct!');
        $(this).removeClass('option-clear');
      $(this).addClass('option-correct');
      selected_questions[current_no].selected_options[selected_questions[current_no].selected_options.length] = $('.option').index(this)+1;
    }
    else{
      if( answered == 0)console.log('Wrong!');
        $(this).removeClass('option-clear');
      $(this).addClass('option-wrong');
      selected_questions[current_no].selected_answer = $('.option').index(this)+1;
    }
    answered = 1;
  });
}

var update_layout = function(){
  //alert('update_layout!');
  $("#question-placeholder").load("quest-" + question_type[q_setting] + ".html");
}

function question_display(){
  //alert('question_display!');
  QuestionTag.display(current_question);
  QuestionTag.updateButtonStatus(current_question.selected_answer, current_question.selected_options);
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
  //alert('find question!');
  /* Load all question from JSON file */
  $.getJSON("all_questions.json", function(questions) {
    var random_number = getRandomQuestionID();

    /* Check if question category is satisfied */
    while(questions[random_number].category=="0" && option_setting[0]==1){
      random_number = getRandomQuestionID();//check category
    }
    while(questions[random_number].category=="1" && option_setting[0]==2){
      random_number = getRandomQuestionID();
    }
    //alert(questions[random_number].question+' QWQ');
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
    //alert(current_question.topic+' QWQ2');
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
