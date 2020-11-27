var readlineSync = require("readline-sync");
var score = 0;
const chalk=require("chalk");
var userName = readlineSync.question("Can I Know Your Name ?\n");
var uppr = userName.toUpperCase();
// const colorOne = 
console.log(chalk.blue("Welcome "+ uppr +"!!😜 \n"))
console.log("Let's Play a Quiz  😈 \n\n\nThis Quiz Is Based On Current Affairs" )
console.log("\n\!You can give your Answer either by option or option name!.  \n\n")


function play(Answerone,Answertwo){
  var userAnswer = readlineSync.question(chalk.underline("\ntype your answer: "))
  var lower = userAnswer.toLowerCase()

  if((Answerone===lower)||(Answertwo===lower)){
    score = score + 1
    console.log(chalk.blue("\nWow!🎉   you are genius.\n*************\n your current score is: " + score+"\n************\n"))
  }else{
    score=score-1
    console.log(chalk.red("\nsorry😥   better luck for next.\n*************\n your current score is: " +score+ "\n************\n"))
   
  }
}

var array= [
  {
    question: "Indian Government blocked how many mobile apps on November 24, 2020? \na: 73 \nb: 61 \nc: 43 \nd: 24",
    answer:"c",
    answertwo:"43"
  },
  {
    question: "Which series won the 'Best Drama Series’ award at 48th International Emmys? \na: made in heaven \nb: asur \nc: delhi crime \nd: four more shots please",
    answer:"c",
    answertwo: "delhi crime"
  },
  {
     question: "Who among the following has been nominated for the ICC Player of the Decade Award? \na: Virat Kohli \nb: Rohit Sharma \nc: MS Dhoni \nd: Yuvraj Singh",
    answer:"a",
    answertwo:"virat kohli"
  },
  {
     question: ".Who among the following has not been nominated for the ODI Player of the Decade award? \na: MS Dhoni \nb: Steve Smith \nc: Kumar Sangakkara \nd: AB de villiers",
    answer:"b",
    answertwo:"steve smith"
  },
  {
     question: "Who won the International Emmy Award 2020 for Best Actor? \na: Billy Barratt \nb: Guido Caprino \nc: Arjun Mathur  \nd: Raphael Logam",
    answer:"a",
    answertwo:" Billy Barratt"
  },
  {
     question: "Who represented India at the Afghanistan 2020 Conference? \na: PM modi \nb: S Jaisankar \nc: Rajnath Singh \nd: Nirmala Sitharaman",
    answer:"b",
    answertwo:"s jaisankar"
  },
  {
     question: "Which state government has put on hold an ordinance that seeks to make abusive content punishable with jail term? \na: Maharastra \nb: Madhya Pradesh \nc: Kerala \nd: Karnataka",
    answer:"c",
    answertwo:"kerala"
  }
]


for(var i=0; i<array.length; i++){
  console.log(chalk.green("que",[i+1]+".", array[i].question))
  play(array[i].answer,array[i].answertwo)
}


console.log("YOUR FINAL SCORE IS :" + score)
if("final score < 3"){
  console.log(chalk.red("POOR 👎   YOU ARE WEAK "))
}
else if("final score < 5"){
  console.log(chalk.yellow("GOOD 👍   YOU ARE AVERAGE "))
}
else if("final score = 7"){
  console.log(("EXCELLENT 👏   YOU ARE FABULOUS "))
}