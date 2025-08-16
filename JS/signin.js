// Get references to the elements
const formTitle = document.getElementById("form-title");
const authButton = document.getElementById("auth-button");
const toggleText = document.getElementById("toggle-text");
const authForm = document.getElementById("auth-form");
const usernameField = document.getElementById("username");
const fnameField = document.getElementById("fname");
const lnameField = document.getElementById("lname");
const confirmPasswordContainerField = document.getElementById("confirm-password-container");
const confirmPasswordField = document.getElementById("confirm-password");
const passwordField = document.getElementById("password");
const passwordRequirements = document.getElementById("password-requirements");

const requirements = {
    length: document.getElementById("length-requirement"),
    uppercase: document.getElementById("uppercase-requirement"),
    lowercase: document.getElementById("lowercase-requirement"),
    number: document.getElementById("number-requirement"),
    special: document.getElementById("special-requirement")
};

// Error message container for email existence check (Sign Up)
const errorMessageContainer = document.getElementById("error-message");
const errorMessageText = document.getElementById("error-text");

// Function to toggle between Sign In and Sign Up forms
function toggleAuthMode() {
    const isSignUp = formTitle.innerText === "Sign In";

    formTitle.innerText = isSignUp ? "Sign Up" : "Sign In";
    authButton.innerText = isSignUp ? "Sign Up" : "Sign In";
    toggleText.innerHTML = isSignUp
        ? 'Already have an account? <a href="#" id="toggle-link">Sign In</a>'
        : 'Don\'t have an account? <a href="#" id="toggle-link">Sign Up</a>';

    if (isSignUp) {
        fnameField.classList.remove("hidden");
        lnameField.classList.remove("hidden");
        usernameField.classList.remove("hidden");
        confirmPasswordContainerField.classList.remove("hidden");
    } else {
        fnameField.classList.add("hidden");
        lnameField.classList.add("hidden");
        usernameField.classList.add("hidden");
        confirmPasswordContainerField.classList.add("hidden");
    }

    applyToggleEvent();
}

// Function to apply the toggle event to the link
function applyToggleEvent() {
    document.getElementById("toggle-link").addEventListener("click", function (event) {
        event.preventDefault();
        toggleAuthMode();
    });
}

// Function to toggle the visibility of the password
function togglePassword(fieldId, button) {
    const field = document.getElementById(fieldId);
    const icon = button.querySelector(".visibility-icon");

    if (field.type === "password") {
        field.type = "text";
        icon.src = "/My/IMAGE/visibility-off.png"; // Change to eye-off icon
    } else {
        field.type = "password";
        icon.src = "/My/IMAGE/visibility-on.png"; // Change back to eye-on icon
    }
}

// Function to validate the password against the requirements
function validatePassword() {
    const password = passwordField.value;

    // Length validation: Password must be at least 8 characters long
    updateRequirement(requirements.length, password.length >= 8);

    // Uppercase validation: Password must contain at least one uppercase letter
    updateRequirement(requirements.uppercase, /[A-Z]/.test(password));

    // Lowercase validation: Password must contain at least one lowercase letter
    updateRequirement(requirements.lowercase, /[a-z]/.test(password));

    // Number validation: Password must contain at least one number
    updateRequirement(requirements.number, /\d/.test(password));

    // Special character validation: Password must contain at least one special character
    updateRequirement(requirements.special, /[^A-Za-z0-9]/.test(password));

    // Check if password and confirm password match
    if (password !== confirmPasswordField.value) {
        confirmPasswordField.setCustomValidity("Passwords do not match!");
    } else {
        confirmPasswordField.setCustomValidity("");
    }
}

// Update requirement display for each password condition
function updateRequirement(requirementElement, isValid) {
    if (isValid) {
        requirementElement.classList.add("valid");
        requirementElement.classList.remove("invalid");
    } else {
        requirementElement.classList.add("invalid");
        requirementElement.classList.remove("valid");
    }
}

// Show password requirements when user clicks on the password field
passwordField.addEventListener("focus", function () {
    passwordRequirements.classList.add("visible");
});

// Hide password requirements when user clicks outside the password field
passwordField.addEventListener("blur", function () {
    setTimeout(function () {
        passwordRequirements.classList.remove("visible");
    }, 200); // Small delay to ensure clicking on the requirements doesn't hide them immediately
});

// Listen for input events to validate password in real-time
passwordField.addEventListener("input", function () {
    validatePassword();
});

// Listen for input events to validate confirm password
confirmPasswordField.addEventListener("input", function () {
    validatePassword();
});

// Simulate a database check for email (mock function)
function checkIfEmailExists(email) {
    return new Promise((resolve) => {
        // Simulate database check delay (replace with actual database query)
        setTimeout(() => {
            // Example: This is where you'd check the email in your database
            const registeredEmails = ["user@example.com", "test@domain.com"]; // Mock registered emails
            resolve(registeredEmails.includes(email)); // Return true if email exists
        }, 1000);
    });
}

// Function to handle Sign Up form submission
function handleSignUp(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = passwordField.value;

    checkIfEmailExists(email).then((emailExists) => {
        if (emailExists) {
            errorMessageText.textContent = "This email is already registered. Please use a different email.";
            errorMessageContainer.classList.add("visible");
        } else {
            // Proceed with Sign Up (mock sign up)
            alert("Sign Up successful!");
            // Redirect or other action after sign up
        }
    });
}

// Function to handle Sign In form submission
function handleSignIn(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = passwordField.value;

    // Simulate checking credentials (replace with actual DB query)
    const users = [
        { email: "user@example.com", password: "password123" },
        { email: "test@domain.com", password: "test123" }
    ];

    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
        // Successfully signed in
        alert("Sign In successful!");
        // Redirect or other action after sign in
    } else {
        // Show error message if credentials don't match
        errorMessageText.textContent = "Incorrect email or password.";
        errorMessageContainer.classList.add("visible");
    }
}

// Event listener for the form submission (Sign In / Sign Up)
authButton.addEventListener("click", function (event) {
    if (formTitle.innerText === "Sign Up") {
        handleSignUp(event);
    } else {
        handleSignIn(event);
    }
});

// Initialize the form to the default state (Sign In) on page load
document.addEventListener("DOMContentLoaded", function () {
    formTitle.innerText = "Sign In";
    authButton.innerText = "Sign In";
    toggleText.innerHTML = 'Don\'t have an account? <a href="#" id="toggle-link">Sign Up</a>';

    // Hide the Sign Up fields by default
    fnameField.classList.add("hidden");
    lnameField.classList.add("hidden");
    usernameField.classList.add("hidden");
    confirmPasswordContainerField.classList.add("hidden");

    // Apply the toggle event for switching forms
    applyToggleEvent();
});
