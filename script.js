
  
      document.addEventListener("DOMContentLoaded", function () {
        const profileForm = document.getElementById("profile-form");
        const editButton = document.getElementById("edit-button");
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const bioTextarea = document.getElementById("bio");
    
        // Disable form inputs initially
        nameInput.disabled = true;
        emailInput.disabled = true;
        bioTextarea.disabled = true;
    
        // Function to enable/disable form inputs
        function toggleFormInputs(enabled) {
            nameInput.disabled = !enabled;
            emailInput.disabled = !enabled;
            bioTextarea.disabled = !enabled;
        }
    
        // Handle Edit Profile button click
        editButton.addEventListener("click", function () {
            toggleFormInputs(true);
            editButton.style.display = "none";
        });
    
        // Handle form submission
        profileForm.addEventListener("submit", function (event) {
            event.preventDefault();
            // Save profile data (you can implement this part with AJAX to a server)
            // For this example, we will just disable the form inputs and show the Edit button again
            toggleFormInputs(false);
            editButton.style.display = "block";
        });
    });
    
    document.addEventListener("DOMContentLoaded", function () {
      const imageUpload = document.getElementById("image-upload");
      const profileImage = document.getElementById("profile-image");
  
      // Handle file input change event
      imageUpload.addEventListener("change", function () {
          const file = imageUpload.files[0];
          if (file) {
              const reader = new FileReader();
  
              reader.onload = function (e) {
                  profileImage.src = e.target.result;
              };
  
              reader.readAsDataURL(file);
          }
      });
  });
  


