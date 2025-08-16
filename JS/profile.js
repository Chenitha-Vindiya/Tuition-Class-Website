// DOM Elements
const logoutButton = document.getElementById('logout-button');
const editProfileButton = document.getElementById('edit-profile-button');
const profilePicInput = document.getElementById('profile-pic-input');
const profilePic = document.getElementById('profile-pic');
const changePicButton = document.getElementById('change-pic-button');
const cropperModal = document.getElementById('cropper-modal');
const imageToCrop = document.getElementById('image-to-crop');
const saveCroppedImageButton = document.getElementById('save-cropped-image');
const cancelCropButton = document.getElementById('cancel-crop');
const saveChangesButton = document.getElementById('save-changes');
const cancelChangesButton = document.getElementById('cancel-changes');
const editProfileForm = document.getElementById('edit-profile-form');
const profileInfoSection = document.querySelector('.profile-info');
const profileFormSection = document.getElementById('edit-profile-form');
const usernameDisplay = document.getElementById('username-display');
const emailDisplay = document.getElementById('email-display');
const fullnameDisplay = document.getElementById('fullname-display');
const newUsernameInput = document.getElementById('new-username');
const newEmailInput = document.getElementById('new-email');
const newFullnameInput = document.getElementById('new-fullname');

// Cropper.js instance
let cropper;

// Function to open the modal when a file is selected
profilePicInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        // Create an object URL for the selected image
        const imageURL = URL.createObjectURL(file);
        
        // Set the image source for cropping
        imageToCrop.src = imageURL;

        // Show the modal using a CSS class
        cropperModal.classList.remove('hidden');

        // Wait until the image is fully loaded before initializing the cropper
        imageToCrop.onload = function() {
            console.log("Image loaded for cropping"); // Debugging log

            // Initialize the Cropper.js instance
            cropper = new Cropper(imageToCrop, {
                aspectRatio: 1, // Example aspect ratio
                viewMode: 2, // Restrict crop area to image size
                ready() {
                    console.log("Cropper ready.");
                },
                crop(event) {
                    // Optional: You can log the crop data for debugging
                    console.log(event.detail);
                }
            });
        };

        // Debugging: Ensure the image is loading correctly
        imageToCrop.onerror = function() {
            console.error("Error loading image");
        };
    }
});

// Save the cropped image
saveCroppedImageButton.addEventListener('click', function() {
    if (cropper) {
        const croppedCanvas = cropper.getCroppedCanvas();
        const croppedImageURL = croppedCanvas.toDataURL(); // Convert to base64 image URL

        // Update profile image on the page
        profilePic.src = croppedImageURL;

        // Hide the modal and destroy the cropper instance
        cropperModal.classList.add('hidden');
        cropper.destroy();
        cropper = null; // Reset the cropper variable
    }
});

// Cancel cropping and hide the modal
cancelCropButton.addEventListener('click', function() {
    if (cropper) {
        cropperModal.classList.add('hidden');
        cropper.destroy();
        cropper = null; // Reset the cropper variable
    }
});


// Trigger the file input click when the 'Change Profile Picture' button is clicked
changePicButton.addEventListener('click', function() {
    profilePicInput.click();
});

// Show the Edit Profile Form
editProfileButton.addEventListener('click', function() {
    profileInfoSection.classList.add('hidden');
    profileFormSection.classList.remove('hidden');

    // Prefill the inputs with current profile info
    newUsernameInput.value = usernameDisplay.textContent;
    newEmailInput.value = emailDisplay.textContent;
    newFullnameInput.value = fullnameDisplay.textContent;
});

// Save the Changes to the Profile
saveChangesButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    // Update the displayed profile information with the new values
    usernameDisplay.textContent = newUsernameInput.value;
    emailDisplay.textContent = newEmailInput.value;
    fullnameDisplay.textContent = newFullnameInput.value;

    // Hide the form and show the updated profile info
    profileFormSection.classList.add('hidden');
    profileInfoSection.classList.remove('hidden');
});

// Cancel the changes and revert to the profile info
cancelChangesButton.addEventListener('click', function() {
    profileFormSection.classList.add('hidden');
    profileInfoSection.classList.remove('hidden');
});

logoutButton.addEventListener('click', function() {
    // Display an alert message when logging out
    alert('Logging out...');

    // Redirect to logout.php to destroy the session
    window.location.href = 'logout.php';
});
