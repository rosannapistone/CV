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

let x = window.matchMedia("(max-width: 1200px)")
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