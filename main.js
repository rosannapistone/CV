window.addEventListener('load', main);



/** This is where the program begins */
function main() {
  writeRegard(); 
  fadingProfileImage();
  scrollDownCategory();
  showContentOnClick(x);
  /* showContentOnClick(); */
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


/*function showContentOnClick() {
    const contentContainer = document.getElementsByClassName("container");

    for (const contain of containers) {
        contain.addEventListener('click', showContent)
    }
}

function showContent(event) {

}*/


let x = window.matchMedia("(max-width: 1000px)")
function showContentOnClick(x) {
    
    if (x.matches) {
    const contentContainer = document.getElementsByClassName("container");
    console.log("function");
   
    for (let i = 0; i < contentContainer.length; i++) {
      contentContainer[i].addEventListener("click", function (event) {
        event.target.children[1].style.bottom = "0";
        event.target.children[1].style.height = "100%";
      });
    }
  }
}


/* showContentOnClick(x); */




/* function showContentOnClick() {
    const contentContainer = document.getElementsByClassName("container");
    console.log("function");
   
    for (let i = 0; i < contentContainer.length; i++) {
      contentContainer[i].addEventListener("click", function (event) {
        event.target.children[1].style.bottom = "0";
        event.target.children[1].style.height = "100%";
      });
    }
   } */
   












/* function showContentOnClick() {
    const container = document.querySelectorAll('container');
    console.log(container);

    container.addEventListener('click', slideContent)
    
} */



/* showContentOnClick()
slideContent() */


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



