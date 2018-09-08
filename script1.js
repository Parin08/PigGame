var age1,age2,age3;
var height1,height2,height3;
var score1,score2,score3;


age1=prompt("What is the Age of John?");
height1=prompt("What is the Height of John?");

age2=prompt("What is the Age of John's friend?");
height2=prompt("What is the Height of John's friend?");

age3=prompt("What is the Age of John's third friend?");
height3=prompt("What is the Height of John's third friend?");



score1=cal(age1,height1);
score2=cal(age2,height2);
score3=cal(age3,height3);

if((score1>score2) && (score1>score3) && (score1!==score2) && (score1!==score3)){
    
    alert("John is winner with the score of " + score1);
}

else if((score2>score3)&& (score2!==score3) ){
    
     alert("John's friend is winner with the score of " + score2);
}


else if((score1==score2)&&(score3==score2) && (score1==score3)){
    
     alert("Everyone have same score of " + score2);
}

else if((score1==score2)){
    
     alert("John's friend and john both have same score of " + score2);
}



else if((score2==score3)){
    
     alert("John's friend and john's other friend both have same score of " + score2);
}


else if((score1==score3)){
    
     alert("John's third friend and john both have same score of " + score3);
}
else{
    
     alert("John's third friend is winner with the score of " + score3);
}
function cal(arg1,arg2){
    
    var total=(arg1*5)+arg2;
    
    return total;
    
}