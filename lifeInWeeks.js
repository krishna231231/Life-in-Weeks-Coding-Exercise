function lifeInWeeks(age) {
    
/************Don't change the code above************/    
    
    //Write your code here.
    var daysLeft;
    var weeksLeft;
    var monthsLeft;
    
    daysLeft= (90 - age) * 365;
    weeksLeft= (90 - age) * 52;
    monthsLeft= (90 - age) * 12;
    
    console.log("You have " + daysLeft + " days, " + weeksLeft + " weeks, and " + monthsLeft + " months left.");
    
    
    
/*************Don't change the code below**********/
}

lifeInWeeks(89);
