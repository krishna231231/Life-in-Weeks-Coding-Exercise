function lifeInWeeks(age){
    
/************Don't change the code above************/    
    
    //Write your code here.
    //Supposing we are taking 120 as the full ripe age
    
    var ageRemaining = 120 - age;
    var days = ageRemaining * 365;
    var weeks = ageRemaining * 52;    
    var months = ageRemaining * 12;

    console.log("You have " + days + " days, " + weeks + " weeks and " + months + " months left.");
     
/*************Don't change the code below**********/
}
lifeInWeeks( age = prompt("How old are you?"));
