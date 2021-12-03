window.addEventListener('load', main);



/** This is where the program begins */
function main() {
  writeRegard(); 
  fadingProfileImage();
  scrollDownCategory();
  
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

function fadingProfileImage() {
   if (opacity<1) {
      opacity += .1;
      setTimeout(function(){fadingProfileImage()},200);
   }
   document.getElementById('profile-img').style.opacity = opacity;
}

function scrollDownCategory() {
    const navigations = document.querySelectorAll('.fixed-icons');

    for (const navigation of navigations) {
        navigation.addEventListener('click', goToCategory);
    }
}

function goToCategory(event) {
    const matchId = event.target.id;
    const matchingDiv = document.querySelector('div#' + matchId);
    matchingDiv.scrollIntoView({behavior: 'smooth'});
}


/* function showContentOnClick() {
    const container = document.querySelectorAll('container');
    console.log(container);
    
}



showContentOnClick() */


/*const contentContainer = document.getElementById('weldex-logo');
console.log ('contentContainer')

contentContainer.addEventListener('click', function() {
    
})*/


/* document.getElementsByClassName('.container').addEventListener('click', function (event) {
    console.log("You finally clicked without jQuery");
  }); */

  /*const contentContainer = document.getElementById('weldex');

  contentContainer.addEventListener('click', function () {
      console.log('Hi!');
  });*/


/* const contentContainer = document.querySelectorAll('.container');

function showContentOnClick() {
    const contentContainer = document.querySelectorAll('.container');
    
    console.log('function')
    console.log('contentContainer', contentContainer)
    
    contentContainer.addEventListener('click', slideContent);
}

function slideContent(div) {
    


} */



