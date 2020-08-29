//DECLARE the vaiables to hold the location of each cell of the ship. Let's call them location1, location 2 and location 3.
var location1 = 3;
var location2 = 4;
var location3 = 5;
//DECLARE a variable to hold the user's current guess. Let's call it guess.
var guess;
//DECLARE a variable to hold the number of hits. We'll call it hits and set it to 0.
var hits = 0;
//DECLARE a variable to hold the number of guess. We'll call it guesses and sit it to 0.
var guesses = 0;
//DECLARE a variable to keep track of whether the ship is sunk or not let's call it isSunk and set it to false.
var isSunk = false;

//LOOP while the ship is not sunk
    while (isSunk == false) {
    //Get the user's guess 
        //Compare the user's input to valis input values
        guess = prompt("Ready, aim, fire! (enter a number from 0-6): ");
        //IF the user's guess invalid.
        //TELL user to enter a valid number
        if (guess < 0 || guess > 6) {
            alert("Please enter a valid cell number!");
         //ELSE
        //ADD one to guesses
        } else {
            guesses = guesses + 1;
        //IF the user's guess matches a location
        if (guess == location1 ||  guess == location2 || guess == location3) {
            //ADD one to the number of hits
            hits = hits + 1;
        //IF number of hits is 3
        if (hits == 3) {
            //SET isSunk to true
            isSunk = true;

            alert("You sank my battleship!");
        }
    }
}
}
    var stats = "You took " + guesses + " guesses to sink the battleship" +
                    "which means your shooting accuracy was " + (3/guesses);
    alert(stats);
        
        
            
            
        //TELL user "You sank my battleship!"
        //END IF 
        //END IF
        //END ELSE
        //END LOOP
        //Tell user stats
