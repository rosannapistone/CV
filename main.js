window.addEventListener('load', main);

/** This is where the program begins */
function main() {
  writeRegard(); 
  fadingProfileImage();
  scrollDownCategory();
}

let index =0;
const textRegard = 'Hello, I´m Rosanna';
/**
 * Show text typing effect with the variables abow
 */
function writeRegard(){
    if (index < textRegard.length){
        document.getElementById('regard').innerHTML += textRegard.charAt(index);
        index++;
        setTimeout(writeRegard, 240);
    }   
}

let opacity = 0;
/** Image opacity onload */
function fadingProfileImage() {
   if (opacity<1) {
      opacity += .1;
      setTimeout(function(){fadingProfileImage()},200);
   }
   document.getElementById('profile-img').style.opacity = opacity;
}

/**
 * Scroll down function by clicking navigation links
 */
function scrollDownCategory() {
    const navigations = document.querySelectorAll('.fixed-icons');
    for (const navigation of navigations) {
        navigation.addEventListener('click', goToCategory);
    }
}

/**
 * Matches the id's of to elements and putting them together -
 * by scrolling and display the matching one
 * @param {object} event 
 */
function goToCategory(event) {
    const matchId = event.target.id;
    const matchingDiv = document.querySelector('div#' + matchId);
    matchingDiv.scrollIntoView({behavior: 'smooth'});
}