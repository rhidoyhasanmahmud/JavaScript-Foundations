var numOfBottles = 10;

while(numOfBottles > 0){
	 
    var bottles = numOfBottles < 2 ? "bottle" : "bottles";

    console.log(numOfBottles + " " + bottles + " of beer on the wall.");
    console.log(numOfBottles + " " + bottles + " of beer,");
    console.log("take one down, pass it around,");
    numOfBottles--;

    console.log(numOfBottles + " " + bottles + " of beer on the wall.");
}