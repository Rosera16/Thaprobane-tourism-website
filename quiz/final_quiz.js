function increaseFontSize(objId) {																				//function for increasing font size
	
	obj = document.getElementById(objId);
	currentSize = parseFloat(obj.style.fontSize);
	obj.style.fontSize = (currentSize + .1) + "em";
	
}

function decreaseFontSize(objId) {																				//function for decreasing font size
	
	obj = document.getElementById(objId);
	currentSize = parseFloat(obj.style.fontSize);
	obj.style.fontSize = (currentSize - .1) + "em";
	
}

function Done(){																								//executes when done button is clicked or when time is up
	
	document.getElementById("Q_start").disabled = true;															//start button is no longer needed so it is disabled
	document.getElementById("Q_done").disabled = true;															//done  button is no longer needed so it is disabled
	Q_Count_time.style.display = "none";																		//removing the timer 
	
	var i ;
	for (i=1 ; i<41 ; i++)
		{	
			document.getElementById(i).disabled = true;															//radio buttons are disabled
		}
	var answer1  = document.quiz_q.question1.value;																//getting the value of the 1st question
	var answer2  = document.quiz_q.question2.value;																//getting the answer of the 2nd question
	var answer3  = document.quiz_q.question3.value;																//getting the answer of the 3rd question
	var answer4  = document.quiz_q.question4.value;																//getting the answer of the 4th question
	var answer5  = document.quiz_q.question5.value;																//getting the answer of the 5th question
	var answer6  = document.quiz_q.question6.value;																//getting the answer of the 6th question
	var answer7  = document.quiz_q.question7.value;																//getting the answer of the 7th question
	var answer8  = document.quiz_q.question8.value;																//getting the answer of the 8th question
	var answer9  = document.quiz_q.question9.value;																//getting the answer of the 9th question
	var answer10 = document.quiz_q.question10.value;															//getting the answer of the 10th question

	var score = 0;
	var correct = 0;
	var wrong = 0;
	var i ;
	//SUMMARY OF CORRECT AND INCORRECT ANSWERS DISPLAYED
	if (answer1 == "correct") 
		{
			score = score + 2 ;
			correct ++;
			document.getElementById("ques1").innerHTML = "Qustion1: Correct answer" ;
		}
	else
		{
			score = score - 1
			wrong ++;
			document.getElementById("ques1").innerHTML = "Qustion 1: The correct answer should be A" ;
		}
	
	if (answer2 == "correct") 
		{
			score = score + 2 ;
			correct ++;
			document.getElementById("ques2").innerHTML = "Qustion 2: Correct answer" ;
		}
	else 
		{
			score = score - 1 ;
			wrong ++;
			document.getElementById("ques2").innerHTML = "Qustion 2: The correct answer should be D" ;
		} 	
	
	if (answer3 == "correct") 
		{
			score = score + 2 ;
			correct ++;
			document.getElementById("ques3").innerHTML = "Qustion 3: Correct answer" ;
		}
	else 
		{
			score = score - 1 ;
			wrong ++;
			document.getElementById("ques3").innerHTML = "Qustion 3: The correct answer should be B" ;
		}
		
	if (answer4 == "correct") 
		{
			score = score + 2 ;
			correct ++;
			document.getElementById("ques4").innerHTML = "Qustion 4: Correct answer" ;
		}
	else 
		{
			score = score - 1 ;
			wrong ++;
			document.getElementById("ques4").innerHTML = "Qustion 4: The correct answer should be C" ;
		}	
		
	if (answer5 == "correct") 
		{
			score = score + 2 ;
			correct ++;
			document.getElementById("ques5").innerHTML = "Qustion 5: Correct answer" ;
		}
	else 
		{
			score = score - 1 ;
			wrong ++;
			document.getElementById("ques5").innerHTML = "Qustion 5: The correct answer should be B" ;
		}	
	
	if (answer6 == "correct") 
		{
			score = score + 2 ;
			correct ++;
			document.getElementById("ques6").innerHTML = "Qustion 6: Correct answer" ;
		}
	else 
		{
			score = score - 1 ;
			wrong ++;
			document.getElementById("ques6").innerHTML = "Qustion 6: The correct answer should be C" ;
		}
	
	if (answer7 == "correct") 
		{
			score = score + 2 ;
			correct ++;
			document.getElementById("ques7").innerHTML = "Qustion 7: Correct answer" ;
		}
	else 
		{
			score = score - 1 ;
			wrong ++;
			document.getElementById("ques7").innerHTML = "Qustion 7: The correct answer should be D" ;
		}
		
	if (answer8 == "correct") 
		{
			score = score + 2 ;
			correct ++;
			document.getElementById("ques8").innerHTML = "Qustion 8: Correct answer" ;
		}
	else 
		{
			score = score - 1 ;
			wrong ++;
			document.getElementById("ques8").innerHTML = "Qustion 8: The correct answer should be A" ;
		}
		
	if (answer9 == "correct") 
		{
			score = score + 2 ;
			correct ++;
			document.getElementById("ques9").innerHTML = "Qustion 9: Correct answer" ;
		}
	else 
		{
			score = score - 1 ;
			wrong ++;
			document.getElementById("ques9").innerHTML = "Qustion 9: The correct answer should be C" ;
		}

	if (answer10 == "correct") 
		{
			score = score + 2 ;
			correct ++;
			document.getElementById("ques10").innerHTML = "Qustion 10: Correct answer" ;
		}
	else 
		{
			score = score - 1 ;
			wrong ++;
			document.getElementById("ques10").innerHTML = "Qustion 10: The correct answer should be A" ;
		}	
	//COMMENTS ON HOW THE USER PERFORMED 
	var comments = ["Good job!", "Please do better next time!"];											
	var index;
	var total;

	if (score <= 0) 
		{
			total= 0;																					//SETTING THE TOTAL SCORE FOR THE USER IF SCORE IS BELOW OR EQUAL TO 0
			index = 1;
		}
	
	if (score > 0 && score < 11) 
		{
			total= score;																				//SETTING THE TOTAL SCORE FOR THE USER IF SCORE IS ABOVE 0 AND LESS THEN 11
			index = 1;		
		}
	
	if (score > 10 && score < 21) 
		{
			total= score;																				//SETTING THE TOTAL SCORE FOR THE USER IF SCORE IS ABOVE 10 AND LESS THEN 21
			index = 0;
		}
	
	document.getElementById("Q_done_clicked").style.visibility = "visible";
	document.getElementById("comments").innerHTML = comments[index];
	document.getElementById("noof_correct").innerHTML = "Number of correct answered questions " + correct +"<br/> Number of wrong answered questions " + wrong ;	
	document.getElementById("tot_score").innerHTML = "Your score is " + total ;	
	
	if (total >= 10){
		document.getElementById("quiz_q").style.backgroundColor = "#ADFF55";							// the quiz form background Color cahnged to green if total score above or equal to 10 
		document.getElementById("Q_done_clicked").style.backgroundImage = "url('Quiz_Images/white.jpg')";
		document.body.style.backgroundColor = "#005200";												//the body back ground color changed to green
		
	}
	else{
		document.getElementById("quiz_q").style.backgroundColor = "#FA8072"  ;							//the quiz form background Color cahnged to red if total score is below 10 
		document.getElementById("Q_done_clicked").style.backgroundImage = "url('Quiz_Images/white.jpg')";
		document.body.style.backgroundColor = "#a80000";												//the body back ground color changed to red
	}
}

function Start() {																						//when the start button is clicked 
	
	document.getElementById("Q_start").disabled = true;													//start button is disabled 
	var i ;
	for (i=1 ; i<41 ; i++)
		{	
			document.getElementById(i).disabled = false;												//radio buttons are enabled
		}	
	document.getElementById("Q_done").disabled = false;													//done button is enabled
	
	let counter, process;
	let Q_start = document.getElementById("Q_start");
	let Q_done = document.getElementById("Q_done");
	
	counter = -1;
	count_time();
	process = setInterval(count_time, 1000);
	
		Q_done.addEventListener("click", function () {													//when the done button is clicked
            clearInterval(process);																		//timer stops
        });
		
	function count_time() {																				//function for the calculation of seconds in the timer
	counter++;																							//incresing the timer
	var sec = ("0" + (counter % 60)).slice(-2);															//claculating the seconds
	document.getElementById("Q_Count_time").textContent = 40 - sec;										//Displaying the remaing time left for the game to quit
	document.getElementById("time").textContent = "The time you took is " + counter + " seconds." ;		//Prints the statements for the summary which will be displayed when the done is clicked
	document.getElementById("Q_done_clicked").style.visibility = "hidden";								
	if (sec == 40) {																					//quiting the timer when the time reaches 0
			clearInterval(process);
            Done();																						//calling the done function for the summary to be displayed
	}
	}
	
}