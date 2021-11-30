window.addEventListener('load', main);



/** This is where the program begins */
function main() {
  writeRegard(); 
  MyFadeFunction();
}

let index =0;
const textRegard = 'Hello, I´m Rosanna';

function writeRegard(){
    if (index < textRegard.length){
        document.getElementById('regard').innerHTML += textRegard.charAt(index);
        index++;
        setTimeout(writeRegard, 240);
    }   
}

let opacity = 0;

function MyFadeFunction() {
   if (opacity<1) {
      opacity += .1;
      setTimeout(function(){MyFadeFunction()},200);
   }
   document.getElementById('profile').style.opacity = opacity;
}

