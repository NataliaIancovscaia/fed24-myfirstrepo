/**
 * Workshop: Password Checker
 *
 * Skriv kod som kollar att lösenordet i variabeln password har
 * - minst 6 tecken varav minst två specialtecken enligt nedan
 * - minst 8 tecken varav minst ett specialtecken enligt nedan
 * - eller har minst 12 tecken och minst 1 bindestreck
 * - eller har minst 16 tecken
 *
 * Börja med att lösa den i omvänd ordning, dvs få först kollen att lösenordet
 * har minst 16 tecken att fungera.
 *
 * Utöka därefter koden till att kolla om lösenordet har minst 12 tecken OCH
 * minst 1 bindestreck.
 *
 * Osv.
 *
 * Googla för att hitta lämpliga metoder för att lösa uppgiften.
 *
 * Du ska alltså precis som i första dagens workshop ta bort kommentarerna
 * en efter en och testa att alla olika kombinationer av lösenord fungerar
 * och ger rätt resultat.
 */

let password;
// password = "password"; // inte giltigt
// password = "pa$sword"; // giltigt
 password = "p@ssw%rd"; // giltigt
 //password = "paxc!word"; // giltigt
//password = "secretpassword"; // inte giltigt
 //password = "secret-password"; // giltigt
//password = "such-password-much-secure-very-long"; // giltigt

const specialChars = [
	"@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
];

console.log(`🕵🏻 Checking password '${password}'`);
/*1 

if (password.length>16){
    console.log(`  password har minst 16 tecken
 *`);
}else   if (password.length>12 && password.includes(`-`)){
    console.log("Your password have enough lenght and has `-`");
}
else{
    console.log("You need to add letters or `-`");
}*/


/*3
for (let i = 0; i < specialChars.length; i++) {
    if (password.includes(specialChars[i])) {
        console.log(`The specialCharacters "${specialChars[i]}"is in the password "${password}"`);
        break; 
    }else
    console.log(`The specialCharacters "${specialChars[i]}" is not in the password "${password}"`);
    continue;
}*/



/*let contains = false;


for (let i = 0; i < specialChars.length; i++) {
	if (password.includes(specialChars[i])) {
		contains = true;
		break; 
	}
}

if (contains) {
	console.log("Password contains special characters.");
} else {
	console.log("Password does not contain special characters.");
}

let contains = false;


for (let i = 0; i < specialChars.length; i++) {
	if (password.includes(specialChars[i])) {
		contains = true;
		break;
	}
}

if (contains) {
	console.log("Password contains special characters.");
} else {
	console.log("Password does not contain special characters.");
}*/
/*for (let i = 0; i < specialChars.length; i++) {
    const con = password.includes(specialChars[i]);
    let specialCharCount = 0;;
  
    if (password.length >= 16) {
      console.log("Password: Giltigt, långt också.");
    } else if (password.length >= 12 && password.includes("-")) {
      console.log("Password: Giltigt, password.length >= 12 && password.includes - ");
    } //else if (con && password.length >= 8) {
      //console.log("Giltigt: Minst 8 bokstäver och specialtecken");
    //}
    else  

    for (let i = 0; i < specialChars.length; i++) {
        if (password.includes(specialChars[i])) {
            specialCharCount++;
        }
    }
    
    if (specialCharCount >= 2) {
        console.log(" Password contains at least two special characters.");
    } 
    else {console.log("password är inte giltigt")}
    }*/


    let specialCharCount=0;

for(let i=0;i<specialChars.length;i++){
    const char=password[i];
    console.log("at index  $[i] password contents ");

    if(password.includes(char)){
        specialCharsCount++;

		if (specialCharCount === 2) {
    break;

    }
}console.log("Loop is done");
    if(password>=16){
        console.log("This is a long password");
    }
    else if(password>=12&&/*password.indexOf("-")!==-1*/  password.includes("-")){
        console.log("password har -")
    }

    else if(password.length>=8&&specialCharsCount>=1)  {
        console.log("such password much security");
    }  
    else if(password.length>=8&&specialCharsCount>=2)  {
        console.log("such password muchmuuuuuuuuuuch security");
    }  

    else {console.log("Insecurity password");}
}

