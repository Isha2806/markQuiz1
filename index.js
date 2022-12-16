var readlineSync = require('readline-sync');

var userName = readlineSync.question('What is your name?\n');
console.log('Welcome ' + userName + ",This is the CLI QUIZ App!The First Project.\n");

var quizOne = readlineSync.question('What is my Go-To-Food? \n1.panipuri\n2.Burger\n3.Pizza \n');
if(quizOne==1){
  console.log("YESSSS, PaniPuri is love.")
}else{
  console.log("oh..you don't know this answer!!")
}
var quizTwo = readlineSync.question('\nWhat is my Go-To-Place? \n1.Bangalore\n2.Pune\n3.HomeTown\n\n');
if(quizTwo==2){
  console.log("jai Shivrai, pune, prem aahe.")
}else{
  console.log("oh..you don't know this answer!!")
}
var quizThree = readlineSync.question('\nWhat do I generally prefer? \n1.Depends on the needs\n2.Train\n3.Bus or Car\n\n');
if(quizThree==1){
  console.log("YESSSSS")
}else{
  console.log("oh..you don't know this answer!!")
}
var quizFour = readlineSync.question('What do i want to become? \n1.Doctor\n2.Doctor Strange\n3.Batman\n\n');
if(quizFour==2){
  console.log("YESSSSS")
}else{
  console.log("oh..you don't know this answer!!")
}
var quizFive = readlineSync.question('last one,i am veg? \n1.Yes\n2.No\n3.Veg by choice\n\n');
if(quizFive==3){
  console.log("YESSSSS")
}else{
  console.log("oh..you don't know this answer!!")
}

var result = 0;

 if(quizOne==1){
  result++;
if(quizTwo==2){
  result++;
}
if(quizThree==1)
 result++;
 }
if(quizFour==2){ 
result++;
}
if(quizFive==3){ 
  result++;
}
console.log(result);

