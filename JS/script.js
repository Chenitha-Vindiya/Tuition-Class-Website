document.addEventListener("DOMContentLoaded", function () {
    const cart = JSON.parse(localStorage.getItem("cart")) || []; // Load cart from storage

    // Function to add items to cart
    function addToCart(event) {
        const button = event.target;
        const shoeInfo = button.closest(".shoe-info"); // Get parent container

        const shoe = {
            name: shoeInfo.querySelector("h2").innerText,
            price: shoeInfo.querySelector(".price").innerText,
            image: shoeInfo.parentElement.querySelector("img").src
        };

        cart.push(shoe);
        localStorage.setItem("cart", JSON.stringify(cart)); // Save to storage

        alert(`${shoe.name} added to cart!`); // Confirmation message
    }

    // Attach event listener to all "Add to Cart" buttons
    document.querySelectorAll(".shoe-info button").forEach(button => {
        button.addEventListener("click", addToCart);
    });
});