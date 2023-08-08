const theBody = document.querySelector('body');
        const openNav = document.querySelector('.menu-bar button');
        const closeNav = document.querySelector('.close-nav button');
        const Navbar = document.querySelector('.navbar');

        // function bodyScroll(){
        //     if(Navbar.classList.contains('show')){
        //         theBody.classList.add('hide-scroll');
        //     }
        //     else if(theBody.classList.contains('hide-scroll')){
        //         theBody.classList.remove('hide-scroll');
        //     }
        // }

        function showHide(){
            Navbar.classList.toggle('show');
            // bodyScroll();
        }

        openNav.onclick = showHide;
        closeNav.onclick = showHide;


document.addEventListener("DOMContentLoaded", () => {
  // ... (existing code)

  removeButton.addEventListener("click", async () => {
    // ... (existing code)

    try {
      progressBar.style.display = "block";
      progressFill.style.width = "0";

      const response = await fetch("https://api.remove.bg/v1.0/removebg", {
        // ... (existing code)
      });

      if (!response.ok) {
        throw new Error("API request failed");
      }

      // ... (existing code)

      setTimeout(() => {
        window.location.href = "https://example.com"; // Replace with the URL of the page you want to redirect to
      }, 3000); // 3000 milliseconds (3 seconds) delay before redirection
    } catch (error) {
      // ... (existing code)
    } finally {
      progressBar.style.display = "none";
    }
  });

  // ... (existing code)
});

document.addEventListener("DOMContentLoaded", () => {
    const imageInput = document.getElementById("imageInput");
    const removeButton = document.getElementById("removeButton");
    const previewImage = document.getElementById("previewImage");
    const progressBar = document.getElementById("progressBar");
    const progressFill = document.getElementById("progressFill");
    const resultDiv = document.getElementById("result");
  
    removeButton.addEventListener("click", async () => {
      if (!imageInput.files.length) {
        alert("Please select an image.");
        return;
      }
  
      const apiKey = "3FYJwQMAdNc1SKoQpHU92iZN"; // Replace with your actual remove.bg API key
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
  
        resultDiv.innerHTML = `<img src="${imageUrl}" alt="Removed Background">`;
      } catch (error) {
        resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
      } finally {
        progressBar.style.display = "none";
      }
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
  