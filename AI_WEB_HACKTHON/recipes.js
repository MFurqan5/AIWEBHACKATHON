document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector("#searchBar");
    const recipeCards = document.querySelectorAll(".recipe-card");
    const categoryButtons = document.querySelectorAll(".filter-btn");
    const recipesContainer = document.querySelector(".recipes-container");

    // Create a message element for no results
    const noResultsMessage = document.createElement("p");
    noResultsMessage.textContent = "No recipes available for this category.";
    noResultsMessage.style.display = "none";
    noResultsMessage.style.textAlign = "center";
    noResultsMessage.style.color = "#ff5722";
    noResultsMessage.style.fontWeight = "bold";
    recipesContainer.appendChild(noResultsMessage);

    // Search Recipes by Name
    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();
        let hasResults = false;
        recipeCards.forEach(card => {
            const title = card.querySelector("h2").textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                card.style.display = "block";
                hasResults = true;
            } else {
                card.style.display = "none";
            }
        });
        noResultsMessage.style.display = hasResults ? "none" : "block";
    });

    // Filter Recipes by Category
    categoryButtons.forEach(button => {
        button.addEventListener("click", function () {
            const category = button.dataset.category;
            let hasResults = false;

            recipeCards.forEach(card => {
                if (category === "all" || card.dataset.category === category) {
                    card.style.display = "block";
                    hasResults = true;
                } else {
                    card.style.display = "none";
                }
            });

            // Show the "No recipes available" message if no recipes match
            noResultsMessage.style.display = hasResults ? "none" : "block";
        });
    });
});
