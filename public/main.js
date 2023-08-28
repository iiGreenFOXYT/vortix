const theBody = document.querySelector('body');
        const openNav = document.querySelector('.menu-bar button');
        const closeNav = document.querySelector('.close-nav button');
        const Navbar = document.querySelector('.navbar');

         function bodyScroll(){
             if(Navbar.classList.contains('show')){
                 theBody.classList.add('hide-scroll');
            }
        else if(theBody.classList.contains('hide-scroll')){
                theBody.classList.remove('hide-scroll');
            }
         }

        function showHide(){
            Navbar.classList.toggle('show');
            bodyScroll();
        }

        openNav.onclick = showHide;
        closeNav.onclick = showHide;



const textElement = document.getElementById("typingText");
const textLines = textElement.innerHTML.split("<br>");

textElement.textContent = "";

let lineIndex = 0;
let letterIndex = 0;

function typeNextLetter() {
  if (lineIndex < textLines.length) {
    const line = textLines[lineIndex];
    if (letterIndex < line.length) {
      textElement.innerHTML += line[letterIndex];
      letterIndex++;
      setTimeout(typeNextLetter, 50);
    } else {
      lineIndex++;
      letterIndex = 0;
      textElement.innerHTML += "<br>";
      setTimeout(typeNextLetter, 300); 
    }
  }
}

typeNextLetter();


const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
      }
  });
}, observerOptions);

document.querySelectorAll('.box, .bx, .bx-info').forEach(item => {
  observer.observe(item);
});

document.addEventListener("DOMContentLoaded", function () {
  // Page content is fully loaded, hide the loading overlay
  document.querySelector(".loading-overlay").style.display = "none";
});