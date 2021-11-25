window.addEventListener('load', main);

/** This is where the program begins */
function main() {
  writeRegard();
  writeProfession();  
}

var index =0;
var textRegard = 'Hello, I´m Rosanna';
var textProfession = 'Front End';


function writeRegard(){
    if (index < textRegard.length){
        document.getElementById('regard').innerHTML += textRegard.charAt(index);
        index++;
        setTimeout(writeRegard, 270);
    }   
}

/*function writeProfession(){
    if (index < textProfession.length){
        document.getElementById('profession').innerHTML += textProfession.charAt(index);
        index++;
        setTimeout(writeProfession, 270);
    }
}*/

/*const textProfession = 'Front End Developer Student and Communication Strategist';
const rate = 250;


function writeRegard() {    
    if (index < textRegard.length) {
        document.getElementById('regard').innerHTML += textRegard.charAt(index);
        index++;
        setTimeout(writeRegard, rate); }
        
    }*/
