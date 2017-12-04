//alert("I am here");
//display initial values on window open
//on Window load

    $( document ).ready(function() {
        console.log( "document loaded" );
        GenerateRandomNumbers();
     
    });
 
    $( window ).on( "load", function() {
        console.log( "window loaded" );
    });


// Globals
var nTargetScore = 0;
var nYourScore = 0;
var nBlueCrystal = 0;
var nYellowCrystal = 0;
var nRedCrystal = 0;
var nAmberCrystal = 0;
var WinCtr = 0;
var LooseCtr = 0;

//functions
//reset variables
function ResetVar()
{
	 nTargetScore = 0;
	 nYourScore = 0;
	 nBlueCrystal = 0;
	 nYellowCrystal = 0;
	 nRedCrystal = 0;
	 nAmberCrystal = 0;
	 //WinCtr = 0;
	 //LooseCtr = 0;
	 //reset the HTML elements

}
//this function will assign random nos where needed for game
function GenerateRandomNumbers()
{
    ResetVar();
    nBlueCrystal = getRandomIntInclusive(1, 12);
    console.log("Blue Value is:" + nBlueCrystal);
    nRedCrystal = getRandomIntInclusive(1, 12);
    console.log("Red Value is:" + nRedCrystal);
    nYellowCrystal = getRandomIntInclusive(1, 12);
    console.log("Yellow Value is:" + nYellowCrystal);
    nAmberCrystal = getRandomIntInclusive(1, 12);
    console.log("Amber Value is:" + nAmberCrystal);
    nTargetScore = getRandomIntInclusive(19, 120);
    console.log("Target Score is:" + nTargetScore);
    //update the div elements with the values
   
    //$("#Target").text(nTargetScore.toString());
    $("#Target").text(nTargetScore.toString());
    $("#Result").text(nYourScore.toString());
    $("#WinCtr").text(WinCtr.toString());
    $("#LoseCtr").text(LooseCtr.toString());
}
//Main body

//Gen Target Score Random No.
//Gen ran no bet 1 and 9 for the 4 crystals
//update YourScore when crystal are selected.
//Check if your score execeeds Target. IF yes say you loose, reset LoosCtr and reset.
//if your score matches Target score, then say you win. Increment Winctr and reset
function ProcessResults(IncVal)
{
	nYourScore += IncVal;
	$("#Result").text(nYourScore.toString());
	if(nYourScore == nTargetScore)
	{
		alert("Congrats!!! YOU WON!!!. Want to play another game?");
		WinCtr +=1;
		GenerateRandomNumbers();
		//increment WinCtr
		$("#WinCtr").text(WinCtr.toString()); 
	}
	else if(nYourScore > nTargetScore)
	{
		alert("Sorry!!! YOU LOSE!!!. Please try again");
		//increment Lose ctr
		LooseCtr +=1;
		GenerateRandomNumbers();		
		$("#LoseCtr").text(LooseCtr.toString());		
	}
}  
  
//blue img click
function openOnBlueImageClick()
{
	//alert( "Handler for blue image .click() called." );
	ProcessResults(nBlueCrystal);	
}


//red img click
function openOnRedImageClick()
{
	//alert( "Handler for Red image .click() called." );
	ProcessResults(nRedCrystal);	
}
//Yellow img click
function openOnYellowImageClick()
{
	//alert( "Handler for Yellow image .click() called." );
	ProcessResults(nYellowCrystal);
}
//Amber img click
function openOnAmberImageClick()
{
	//alert( "Handler for Amber image .click() called." );
	ProcessResults(nAmberCrystal);
}

//generate random num in range
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

