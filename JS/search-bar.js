    const products = [
        { name: "Running Sneakers", link: "/My/CSS/product1.php" },
        { name: "Classic Leather Shoes", link: "/My/CSS/product2.php" },
        { name: "Stylish Casual Shoess", link:"/My/CSS/product3.php" },
        { name: "Formal Shoes", link: "/My/CSS/formal.php" },
        { name: "Boots", link: "/My/CSS/boots.php" },
    ];

    const searchBar = document.getElementById("search-bar");
    const searchResults = document.getElementById("search-results");

    searchBar.addEventListener("input", function () {
        const query = searchBar.value.toLowerCase();
        searchResults.innerHTML = "";

        if (query.trim() === "") {
            searchResults.style.display = "none";
            return;
        }

        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(query)
        );

        if (filteredProducts.length === 0) {
            searchResults.innerHTML = "<p>No results found</p>";
        } else {
            filteredProducts.forEach(product => {
                const item = document.createElement("a");
                item.href = product.link;
                item.textContent = product.name;
                item.classList.add("search-item");
                searchResults.appendChild(item);
            });
        }

        searchResults.style.display = "block";
    });

        document.addEventListener("click", function (event) {
        if (!searchBar.contains(event.target) && !searchResults.contains(event.target)) {
            searchResults.style.display = "none";
        }
    
        // Close dropdown if clicked outside
        const profileMenu = document.getElementById("profileMenu");
        const dropdownMenu = document.getElementById("dropdownMenu");
        if (!profileMenu.contains(event.target) && dropdownMenu.style.display === "block") {
            dropdownMenu.style.display = "none";
        }
    });


    // Profile menu toggle
    document.getElementById("profileMenu").addEventListener("click", function(event) {
        event.preventDefault();
        const dropdownMenu = document.getElementById("dropdownMenu");
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block"; // Toggle visibility
    });