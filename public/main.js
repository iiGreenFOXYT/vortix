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



document.addEventListener("DOMContentLoaded", () => {
  const imageInput = document.getElementById("imageInput");
  const removeButton = document.getElementById("removeButton");
  const previewImage = document.getElementById("previewImage");
  const progressBar = document.getElementById("progressBar");
  const progressFill = document.getElementById("progressFill");
  const resultDiv = document.getElementById("result");
  const removedImage = document.getElementById("removedImage");
  const downloadButton = document.getElementById("downloadButton");

  removeButton.addEventListener("click", async () => {
    if (!imageInput.files.length) {
      alert("Please select an image.");
      return;
    }

    const apiKey = "3FYJwQMAdNc1SKoQpHU92iZN"; 
    const imageFile = imageInput.files[0];

    const formData = new FormData();
    formData.append("image_file", imageFile);

    try {
      progressBar.style.display = "block";
      progressFill.style.width = "0";

      const response = await fetch("https://api.remove.bg/v1.0/removebg", {
        method: "POST",
        headers: {
          "X-Api-Key": apiKey,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("API request failed");
      }

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);

      removedImage.src = imageUrl;
      downloadButton.style.display = "block";
      resultDiv.style.display = "block";
    } catch (error) {
      resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    } finally {
      progressBar.style.display = "none";
    }
  });

  downloadButton.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = removedImage.src;
    link.download = "removed_background.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

  imageInput.addEventListener("change", () => {
    if (imageInput.files.length) {
      const imageUrl = URL.createObjectURL(imageInput.files[0]);
      previewImage.src = imageUrl;
    } else {
      previewImage.src = "#";
    }
  });
});


const textElement = document.getElementById("typingText");
const textLines = textElement.innerHTML.split("<br>");

textElement.textContent = ""; // Clear the text content

let lineIndex = 0;
let letterIndex = 0;

function typeNextLetter() {
  if (lineIndex < textLines.length) {
    const line = textLines[lineIndex];
    if (letterIndex < line.length) {
      textElement.innerHTML += line[letterIndex];
      letterIndex++;
      setTimeout(typeNextLetter, 50); // Adjust the delay as needed
    } else {
      lineIndex++;
      letterIndex = 0;
      textElement.innerHTML += "<br>";
      setTimeout(typeNextLetter, 300); // Add a longer delay between lines
    }
  }
}

typeNextLetter();



