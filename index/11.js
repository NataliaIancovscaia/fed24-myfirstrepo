/*let sum=0;
let points=[1,5,-50,10,20,8,3];
for (let i=0 ;i<points.length;i++){
    
	console.log(`At index ${i}, number is:`, point);
if (points[i]<=0){
    console.log("got some negative");
    continue;
}
	// add number to sum
	sum += points[i];
    console.log("the new summa is",sum);
    if (sum >=30 ){console.log("You  ve passed the test");
        break;
    }
}
console.log("Loop is done, sum is:", sum);
let i;
for (  i=0;i<5;i++){

    console.log(i,"sheep");
}
console.log("sheep:",i);

let i=0;
while(i<0){
    console.log("In whole loop i is:",i);

   if (i >= 3) {
    break;
}
    
    i++
}
console.log("Finished looping i is",i);
let i=0;
do{
    // do stuff
	console.log("in do while-loop, i is:", i);

	// increase i by 1
	i++;
} while (i < 5);
console.log("Finished looping, i is:", i);*/
/*let grade = "MVP";
if (grade === "VG") {
	console.log("🥳 Nice!! You got a VG");

} else if (grade === "G") {
	console.log("🆗 Excellent! You got a G");

} else if (grade === "IG") {
	console.log("😔 Sorry, you got an IG");

} else {
	console.log("😡 Why you try 🐅 cheating?!");

}*/
let grade="MVP";
switch(grade){
case "VG":
		console.log("🥳 Nice!! You got a VG");
	break;
	case "G":
		console.log("🆗 Excellent! You got a G");
    break;
	case "IG":
		console.log("😔 Sorry, you got an IG");
    break;
    default:
         console.log("😡 Why you try 🐅 cheating?!");
    break;        

}

console.log("I'm so over loops");







