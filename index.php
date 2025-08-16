<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Dulara Hettiarachchi</title>

    <link rel="stylesheet" type="text/css" href="/My/CSS/styles.css">
    <link rel="stylesheet" type="text/css" href="/My/CSS/dropdown.css">
    <link rel="stylesheet" type="text/css" href="/My/CSS/header_v1.css">
    <link rel="stylesheet" type="text/css" href="/My/CSS/main.css">
    <link rel="stylesheet" type="text/css" href="/My/CSS/signin.css">

    <link rel="icon" href="/My/IMAGE/logo.jpg">

    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>

</head>

<body>

    <!-- <header>

        <div id="logo" class="logo">
            <img src="/My/IMAGE/logo.jpg" onclick="document.location='index.php';" alt="Shoe Store Logo"><img>
        </div>

        <nav class="navbar">
            <ul class="nav-links">
                <li><a href="index.php" class="nav-item">Home</a></li>
                <li><a href="store.php" class="nav-item">Shop</a></li>

                <li><a href="#" id="open-model" class="nav-item">Categories</a>
                    <dialog id="cat-list">
                        <button id="close" class="dot" autofocus></button>
                        <div class="mega-dropdown">
                            <div class="dropdown-section">
                                <h3>Shop by Collection</h3>
                                <ul>
                                    <li><a href="#">New Arrivals</a></li>
                                    <li><a href="#">Best Sellers</a></li>
                                    <li><a href="#">Limited Edition</a></li>
                                    <li><a href="#">Sneaker Trends</a></li>
                                    <li><a href="#">Casual Wear</a></li>
                                </ul>
                            </div>
                            <div class="dropdown-section">
                                <h3>Shop by Gender</h3>
                                <ul>
                                    <li><a href="#">Men’s Shoes</a></li>
                                    <li><a href="#">Women’s Shoes</a></li>
                                    <li><a href="#">Kids' Shoes</a></li>
                                    <li><a href="#">Unisex Shoes</a></li>
                                </ul>
                            </div>
                            <div class="dropdown-section">
                                <h3>Shop by Type</h3>
                                <ul>
                                    <li><a href="#">Sneakers</a></li>
                                    <li><a href="#">Running Shoes</a></li>
                                    <li><a href="#">Casual Shoes</a></li>
                                    <li><a href="#">Formal Shoes</a></li>
                                    <li><a href="#">Sandals & Slides</a></li>
                                </ul>
                            </div>
                            <div class="dropdown-section">
                                <h3>Shop by Brand</h3>
                                <ul>
                                    <li><a href="#">Nike</a></li>
                                    <li><a href="#">Adidas</a></li>
                                    <li><a href="#">Puma</a></li>
                                    <li><a href="#">Reebok</a></li>
                                    <li><a href="#">Vans</a></li>
                                </ul>
                            </div>
                        </div>
                    </dialog>
                </li>

                <li><a href="contact.php" class="nav-item">Contact</a></li>
                <li><a href="#" class="nav-item">About</a></li>
            </ul>
        </nav> -->

    <!-- <input type="text" id="search-bar" placeholder="Search..." class="search-bar">
    <div id="search-results" class="search-results"></div> -->

    <!-- <a href="cart.php" class="cart-icon">
            <img src="/My/IMAGE/cart.png" alt="Cart Icon">
        </a>

        <div class="profile-icon">

            <img src="/My/IMAGE/profile.png" alt="Profile Icon">

            <div class="profile-dropdown">

                <div class="welcome-text">Welcome, Chenitha!</div>

                <div id="login-links">
                    <a href="signin.php" id="signin-button">Sign In</a>
                </div>

                <div id="settings-button">
                    <a href="settings.php" id="settings">Settings</a>
                </div>

                <div id="profile-button">
                    <a href="profile.php" id="profile">Profile</a>
                </div>

                <div id="logout-links">
                    <a href="index.php" id="logout-button">Log Out</a>
                </div>

            </div>

        </div>

    </header> -->

    <script type="text/javascript">
        const catBtn = document.querySelector('#open-model');
        const catList = document.querySelector('#cat-list');

        catBtn.addEventListener('click', () => catList.showModal());

        //close model when click outside

        catList.addEventListener('click', event => {
            const rect = catList.getBoundingClientRect();
            const isIncatList =
                event.clientX >= rect.left &&
                event.clientX <= rect.right &&
                event.clientY >= rect.top &&
                event.clientY <= rect.bottom;

            if (!isIncatList) {
                catList.close();
            }

        })
    </script>

    <script type="text/javascript">
        // Automatically set the active class based on the current page
        const currentPage = window.location.pathname.split('/').pop(); // Get the current page name from the URL
        const links = document.querySelectorAll('nav ul li a');

        links.forEach(link => {
            if (link.getAttribute('href').includes(currentPage)) {
                link.parentElement.id = 'active'; // Set the parent <li> as active
            }
        });
    </script>

    <script type="text/javascript">
        let isLoggedIn = false; // Change this to `true` if the user is logged in

        document.addEventListener("DOMContentLoaded", function() {
            if (isLoggedIn) {
                window.location.href = "profile.php";
            }
        });
    </script>


    <script type="text/javascript">
        window.onload = function() {
            // Check if the user is logged in from localStorage
            let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
            let username = localStorage.getItem('username') || 'Guest'; // Default to 'Guest' if no username is found

            // Get all the necessary DOM elements
            const signinButton = document.getElementById("signin-button");
            const signoutButton = document.getElementById("logout-button");
            const signinLinks = document.getElementById("login-links");
            const signoutLinks = document.getElementById("logout-links");
            const welcomeText = document.getElementById("welcome-text");
            const settingsButton = document.getElementById("settings-button");
            const profileButton = document.getElementById("profile-button");

            if (signinLinks && signoutLinks && welcomeText && settingsButton && profileButton) {
                // Change the welcome text and show/hide buttons based on login status
                if (isLoggedIn) {
                    // If the user is logged in, show the Log Out button, Settings, and Profile buttons, and hide the Sign In button
                    signinLinks.style.display = "none";
                    signoutLinks.style.display = "block";
                    settingsButton.style.display = "block";
                    profileButton.style.display = "block";
                    welcomeText.textContent = `Welcome, ${username}!`; // Dynamically insert the username
                } else {
                    // If the user is not logged in, show the Sign In button and hide the Log Out, Settings, and Profile buttons
                    signinLinks.style.display = "block";
                    signoutLinks.style.display = "none";
                    settingsButton.style.display = "none";
                    profileButton.style.display = "none";
                    welcomeText.textContent = "Welcome, Guest!"; // Default text for logged-out users
                }
            } else {
                console.error("Some required elements are missing from the page.");
            }

            // Event listener for the Log Out button
            signoutButton.addEventListener('click', function() {
                localStorage.setItem('isLoggedIn', 'false'); // Set login status to false
                localStorage.removeItem('username'); // Remove the username from localStorage
                window.location.reload(); // Reload the page to reflect the changes
            });

            // Event listener for the Sign In button (for demonstration purposes)
            signinButton.addEventListener('click', function() {
                // This would typically be replaced with real authentication logic
                let usernameInput = prompt("Enter your username:"); // Simulating a simple login
                if (usernameInput) {
                    localStorage.setItem('isLoggedIn', 'true');
                    localStorage.setItem('username', usernameInput);
                    window.location.reload(); // Reload the page to reflect the login changes
                }
            });
        };
    </script>

    <section class="hero">

        <div class="hero-overlay">

            <div class="hero-content">

                <h1>Dulara Hettiarachchi</h1>
                <p>Discover the latest trends in footwear and elevate your style today.</p>
                <button class="cta-button">Sign In</button>
            </div>

            <div class="container">
                <div class="form-box">
                    <h2 id="form-title">Sign In</h2>
                    <form id="auth-form" method="POST">
                        <div class="name-container">
                            <input type="text" id="fname" name="fname" placeholder="First Name" required class="hidden">
                            <input type="text" id="lname" name="lname" placeholder="Last Name" class="hidden">
                        </div>
                        <input type="text" id="username" name="username" placeholder="Username" required class="hidden">
                        <input type="email" id="email" name="email" placeholder="Email" required>

                        <div class="password-container">
                            <input type="password" id="password" name="password" placeholder="Password" required>
                            <button type="button" class="toggle-password" onclick="togglePassword('password', this)">
                                <img src="/My/IMAGE/visibility-on.png" class="visibility-icon">
                            </button>
                            <div id="password-requirements" class="password-requirements">
                                <p id="length-requirement" class="requirement">At least 8 characters</p>
                                <p id="uppercase-requirement" class="requirement">At least one uppercase letter</p>
                                <p id="lowercase-requirement" class="requirement">At least one lowercase letter</p>
                                <p id="number-requirement" class="requirement">At least one number</p>
                                <p id="special-requirement" class="requirement">At least one special character</p>
                            </div>
                        </div>

                        <div class="password-container hidden" id="confirm-password-container">
                            <input type="password" name="cpsw" id="confirm-password" placeholder="Confirm Password">
                            <button type="button" class="toggle-password" onclick="togglePassword('confirm-password', this)">
                                <img src="/My/IMAGE/visibility-on.png" class="visibility-icon">
                            </button>
                        </div>

                        <button type="submit" id="auth-button">Sign In</button>
                        <p id="toggle-text">
                            Don't have an account? <a href="#" id="toggle-link">Sign Up</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>

    </section>

    <script>
        const signinBtn = document.querySelector('.cta-button');
        const heroContent = document.querySelector('.hero-content');
        const formBox = document.querySelector('.container');

        signinBtn.addEventListener('click', () => {
            // move welcome left and fade out (button disappears with it)
            heroContent.classList.add('move-left');
            //disappear sign in button
            signinBtn.classList.add('disappearBtn')
            // show form in middle at same time
            formBox.classList.add('form-active');
        });
    </script>

    <script src="/My/JS/signin.js"></script>

    <section class="categories">

        <h2>Shop by Category</h2>

        <div class="category-list">

            <div class="category-item">

                <img src="/My/IMAGE/sneakers.jpg" alt="Sneakers">
                <h3>Sneakers</h3>

            </div>

            <div class="category-item">

                <img src="/My/IMAGE/formal.jpg" alt="Formal Shoes">
                <h3>Formal Shoes</h3>

            </div>

            <div class="category-item">

                <img src="/My/IMAGE/boots.jpg" alt="Boots">
                <h3>Boots</h3>

            </div>
            <div class="category-item">

                <img src="/My/IMAGE/sports.jpg" alt="Sports Shoes">
                <h3>Sports Shoes</h3>

            </div>

        </div>

    </section>

    <section class="featured-products">

        <h2>Featured Products</h2>

        <div class="product-list">

            <div class="product-item">

                <img src="/My/IMAGE/product1.jpg" alt="Product 1">
                <h3>Running Sneakers</h3>
                <p>$59.99</p>
                <a href="#" class="cta-button">Buy Now</a>

            </div>

            <div class="product-item">

                <img src="/My/IMAGE/product2.jpg" alt="Product 2">
                <h3>Classic Leather Shoes</h3>
                <p>$79.99</p>
                <a href="#" class="cta-button">Buy Now</a>

            </div>

            <div class="product-item">

                <img src="/My/IMAGE/product3.jpg" alt="Product 3">
                <h3>Stylish Casual Shoes</h3>
                <p>$49.99</p>
                <a href="#" class="cta-button">Buy Now</a>

            </div>

        </div>

    </section>

    <!-- <section class="testimonials">
    <div class="testimonial-list">
        <div class="testimonial-item">
            <h3>John Wick</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="testimonial-item">
            <h3>Head</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="testimonial-item">
            <h3>Head</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="testimonial-item">
            <h3>Head</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </div>
</section> -->

    <script src="/My/JS/search-bar.js"></script>

</body>

</html>