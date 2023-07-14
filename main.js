function getVal() {
  var score1 =0, score2 =0, score3 =0, score4 =0;
  // Question 1
  var question1 = document.getElementById("multiple-choice-1");
  if(parseInt(question1.value)==1)
  var score1=1;
    
  // Question 2
  var question2 = document.getElementById("multiple-choice-2");
   if(parseInt(question2.value)==1)
  score2=1;

    // Question 3
    var question3 = document.getElementById("radio-question-1");
    if (question3.checked) {
      score3=1;
    }

      // Question 4
  var question4Option1 = document.getElementById("checkbox-question-1");
  if (question4Option1.checked) {
    score4=1;
  }

  document.getElementById("score-1").innerText = "Score: " + score1;
  document.getElementById("score-2").innerText = "Score: " + score2;
  document.getElementById("score-3").innerText = "Score: " + score3;
  document.getElementById("score-4").innerText = "Score: " + score4;

  var totalScore = score1 + score2 + score3 + score4;
  document.getElementById("Total-score").innerText = "Score: " + totalScore;

}