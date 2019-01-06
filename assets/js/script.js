//*Notes
    //Make an Array that is an object
    //Create Flags/Boolean values
        //flag for start button
        //flag for timers

//Step 1 ===================================
    //Document on start
    // 1- have the trivia box appear
    // 2- have a start button appear - with hover
    // 3- when button clicked start function

//Step 2 ===================================
    //Start button onclick 
    // 1 - button "start" is removed
    // 2 - Timer is counting down
    // 3 - Question is appearing
    // 4 - Buttons are appearing with questions
        //Hover effect over buttons
        //for loop
        // if the correct answer is chosen
            //freeze timer
            //remove question sentence
            //remove question choices
            //display "you are correct!"
            //display image 
            //wait X seconds, reload next Array
            //reset timer
            //increase correct counter by 1
        // else that wrong answer is chosen
            //freeze timer
            //remove question sentence
            //remove question choices
            //display "you are wrong! the right answer is"
            //display image
            //reset timer
            //wait X seconds, reload next Array
            //increat loss counter by 1

// Step 3 ===================================
    //At end of for loop display results
        //remove timer
        //display "Here's how you did"
        //display correct answers
        //display incorrect answers
        //display un-answered questions
        //display button that resets game

// lists of variables and arrays




// Starting Step 1 =================================================================================

$(document).ready( function() {

console.log("yeet its working");

$('#startButton').text('Start');

$('#startButton').on('click', function() {
    $('#startButton').empty();
    triviaGameStart();
    function triviaGameStart() {
        var rightCounter = 0;
        var wrongCounter = 0;
        var unansweredCounter = 0;
        console.log(rightCounter);
        console.log(wrongCounter);
        console.log(unansweredCounter);

        var questions = [
            { //index 0
                main: "What was Rick's favorite exhibit in Anatomy Park?", 
                first: "The Bone Train",
                second: "Spleen Mountain",
                third: "Bladder Falls",
                fourth: "Pirates of the Pancreas" //Answer
            },
            { //1
                main: "In the Pilot why did Rick blow up earth?",
                first: "He wanted a clean slate", //A
                second: "He wanted to accomplish something",
                third: "He was bored",
                fourth: "He was angry"
            },
            { //2
                main: 'What does, "Wubaluba dub dub" mean? ',
                first: "I will kill you",
                second: "I'm in great pain", //A
                third: "I don't like you",
                fourth: "I am the best"
            },
            { //3
                main: "Who does Morty of a crush on?",
                first: "Ashley",
                second: "Jasmine",
                third: "Summer",
                fourth: "Jessica" //A
            },
            { //4
                main: 'Which dog thinks the human is saying, "I love lasagna?" ',
                first: "Bill", //A
                second: "Snuffles",
                third: "Fluffy",
                fourth: "Rick"
            },
            { //5
                main: "What is the name of Scary Terry's Son?",
                first: "Scary Jerry",
                second: "Scary Brandon", //A
                third: "Scary Ling",
                fourth: "Scary Pedro"
            },
            { //6
                main: "What is the name of the Giant that Rick and Morty get blamed for killing?",
                first: "Dave",
                second: "Dan",
                third: "David",
                fourth: "Dale" //A
            },
            { //7
                main: "What non-weapons does Rick use to make the purgers drop thier weapons?",
                first: "Tic Tacs", //A
                second: "Skittles",
                third: "M&Ms",
                fourth: "Altoids"
            },
            { //8
                main: "What does Jerry attempt to use as a gun at a wedding?",
                first: "Super Soaker",
                second: "Confetti Cannon", //A
                third: "T-shirt Cannon",
                fourth: "Potato Gun"
            },
            { //9
                main: "Who is the character that makes Morty uncomfortable in the bathroom?",
                first: "Scary Terry",
                second: "Mr. Meeseeks",
                third: "Principal Vagina",
                fourth: "Mr. Jellybean" //A
            }
        ];
        
        var triviaQuestion = $('#triviaQuestion');
        var one = $('#question1');
        var two = $('#question2');
        var three = $('#question3');
        var four = $('#question4');
        var image = $('#image');
        var rightWrong = $('#rightWrong');
        var timeCount = $('#timeCount');

        var secondsDown = 20;
        var isClicked;
        var questionCount = 0;


//Functions that get other functions started
        function triviaPlacer(x) { // works
            $('#triviaQuestion').text(questions[x].main);
            $('#question1').text(questions[x].first);
            $('#question2').text(questions[x].second);
            $('#question3').text(questions[x].third);
            $('#question4').text(questions[x].fourth);
            $('#image').text('');
            isClicked = false;
        };
        
        function triviaEmpty() { // works
            timeCount.empty();
            $('#triviaQuestion').empty();
            $('#question1').empty();
            $('#question2').empty();
            $('#question3').empty();
            $('#question4').empty();
            $('#image').empty();
        };

        function showAnswer(x,y) {
            rightWrong.empty();
            rightWrong.text('Answer: ' + x);
            image.html(y);
        };

        function removeAnswer() {
            timeCount.empty();
            rightWrong.empty();
            image.empty();
        };
//Function for 20 second countdown 
        function thirtyCount() {
            countDown = setInterval(function() {
                if (secondsDown == 0 || isClicked == true) {
                    secondsDown = secondsDown;
                    timeCount.text(" " + secondsDown);
                    clearInterval(countDown);
                } else {
                    secondsDown = secondsDown - 1;
                    console.log(secondsDown);
                    timeCount.text(" " + secondsDown);
                    if (secondsDown == 0) {
                        clearInterval(countDown);
                    }
                }
            }, 1000);
            secondsDown = 20;
            setTimeout(function() {
                if (isClicked == true) {
                    clearTimeout();
                    isClicked = false;
                } else if (isClicked == false) {
                    unansweredCounter++;
                    console.log(unansweredCounter + ' thirty count');
                    triviaEmpty();
                    showAnswer(x,y);
                    setTimeout(function() {
                        removeAnswer();
                        questionCount++; //==========================================QC
                        console.log(questionCount);
                        questionTrivia1();
                        questionTrivia2();
                        clearTimeout();
                    }, 3 * 1000);
                }
                clearTimeout();
            }, 20 * 1000);
        };
//Function for when user selects right answer
        function rightChoice(a, x, y) {
            a.on('click', function() {
                isClicked = true;
                rightCounter++;
                console.log(rightCounter + " right");
                finish = true;
                triviaEmpty();
                rightWrong.text('You\'re right, but you are still an idiot.');
                setTimeout(function(){
                    showAnswer(x, y);
                    setTimeout(function() {
                        removeAnswer();
                        questionCount++; //======================================QC
                        console.log(questionCount);
                        questionTrivia1();
                        questionTrivia2();
                        clearTimeout();
                    }, 3 * 1000);
                    clearTimeout();
                }, 2 * 1000);
            });
        };

//Function for when user selects wrong answer
        function wrongChoice(b, c, d, x, y) {
            b.on('click', function() { 
                isClicked = true;
                wrongCounter++;
                console.log(wrongCounter + " wrong");
                finish = true;
                triviaEmpty();
                rightWrong.text('Congrats you\'re wrong!');
                setTimeout(function(){
                    showAnswer(x, y);
                    setTimeout(function() {
                        removeAnswer();
                        questionCount++; //========================================QC
                        console.log(questionCount);
                        questionTrivia1();
                        questionTrivia2();
                        clearTimeout();
                    }, 3000);
                    clearTimeout();
                }, 2000);
            });
            c.on('click', function() { 
                isClicked = true;
                wrongCounter++;
                console.log(wrongCounter + " wrong");
                finish = true;
                triviaEmpty();
                rightWrong.text('Wrong, come on this is simple Morty!!');
                setTimeout(function(){
                    showAnswer(x, y);
                    setTimeout(function() {
                        removeAnswer();
                        questionCount++; //========================================QC
                        console.log(questionCount);
                        questionTrivia1();
                        questionTrivia2();
                        clearTimeout();
                    }, 3000);
                    clearTimeout();
                }, 2000);
            });
            d.on('click', function() { 
                isClicked = true;
                wrongCounter++;
                console.log(wrongCounter + " wrong");
                finish = true;
                triviaEmpty();
                rightWrong.text('Ohh geez, that\'s wrong');
                setTimeout(function(){
                    showAnswer(x, y);
                    setTimeout(function() {
                        removeAnswer();
                        questionCount++; //========================================QC
                        console.log(questionCount);
                        questionTrivia1();
                        questionTrivia2();
                        clearTimeout();
                    }, 3000);
                    clearTimeout();
                }, 2000);
            });
        };

        // var triviaPlay = [
        //     {
        //         play: function() {
        function questionTrivia0() {
            if (questionCount == 0) {
                    triviaPlacer(0);
                    rightChoice(four,'Pirates of the Pancreas', '<img src="assets/images/piratesOfTheP.jpg">'); 
                    wrongChoice(one, two, three,'Pirates of the Pancreas', '<img src="assets/images/piratesOfTheP.jpg">');
                    thirtyCount();
            } else {
                return questionCount;
            }
        }
        //             console.log("test 1");
        //         }
        //     },  
        //     { 
        //         play: function() {
        function questionTrivia1() {
            if (questionCount == 1) {
                    triviaPlacer(1);
                    rightChoice(one,'A Clean Slate', '<img src="assets/images/cleanStart.jpg">');
                    wrongChoice(two, three, four,'A Clean Slate', '<img src="assets/images/cleanStart.jpg">');
                    thirtyCount();
            } else {
                return questionCount;
            }
        }
        //             console.log("test 2");
        //         }
        //     },
            // {    
            //     play: function() {
        function questionTrivia2() {
            if (questionCount == 2) {
                    triviaPlacer(2);
                    rightChoice(two,'I\'m in great pain', '<img src="assets/images/greatPain.jpg">');
                    wrongChoice(one, three, four,'I\'m in great pain', '<img src="assets/images/greatPain.jpg">');
                    thirtyCount();
            } else {
                return questionCount;
            }
        }
        questionTrivia0();

            //     }
            // },
            // { 

            //     play: function() {
            //         triviaPlacer(3);
            //         rightChoice(four,'Jessica', '<img src="assets/images/jessica.jpg">');
            //         wrongChoice(one, two, three,'Jessica', '<img src="assets/images/jessica.jpg">');
            //         thirtyCount();
            //     }
            // },
            // {   
            //     play: function() {     
            //         triviaPlacer(4);
            //         rightChoice(one,'Bill', '<img src="assets/images/bill.jpg">');
            //         wrongChoice(two, three, four,'Bill', '<img src="assets/images/bill.jpg">');
            //         thirtyCount();
            //     }
            // },      
            // { 
            //     play: function() {
            //         triviaPlacer(5);
            //         rightChoice(two,'Scary Brandon', '<img src="assets/images/scaryBrandon.jpg">');
            //         wrongChoice(one, three, four,'Scary Brandon', '<img src="assets/images/scaryBrandon.jpg">');
            //         thirtyCount();
            //     }
            // },
            // {   
            //     play: function() {     
            //         triviaPlacer(6);
            //         rightChoice(four,'Dale', '<img src="assets/images/dale.jpg">');
            //         wrongChoice(one, two, three,'Dale', '<img src="assets/images/dale.jpg">');
            //         thirtyCount();
            //     }
            // },      
            // { 
            //     play: function() {
            //         triviaPlacer(7);
            //         rightChoice(one,'Tic Tacs', '<img src="assets/images/ticTacs.jpg">');
            //         wrongChoice(two, three, four,'Tic Tacs', '<img src="assets/images/ticTacs.jpg">');
            //         thirtyCount();
            //     }
            // },
            // {  
            //     play: function() {   
            //         triviaPlacer(8);
            //         rightChoice(two,'Confetti Cannon', '<img src="assets/images/confetti.jpg">');
            //         wrongChoice(one, three, four,'Confetti Cannon', '<img src="assets/images/confetti.jpg">');
            //         thirtyCount();
            //     }
            // },
            // { 
            //     play: function() {
            //         triviaPlacer(9);
            //         rightChoice(four,'Mr. Jellybean', '<img src="assets/images/mrJelly.jpg">');
            //         wrongChoice(one, two, three,'Mr. Jellybean', '<img src="assets/images/mrJelly.jpg">');
            //         thirtyCount();
            //     }
            // }
        // ];

        // for (var counter = 0; counter < triviaPlay.length; counter++) {
        //     triviaPlay[counter].play();
        // }


    //end of triviaGameStart - used to also restart game. 
    };
});

//end of document.ready jQuery
});