document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("inventoryForm");
    const itemList = document.getElementById("itemList");
    const searchBox = document.getElementById("searchItem");

    // Add Item Function
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const itemName = document.getElementById("itemName").value;
        const quantity = document.getElementById("quantity").value;
        const expiryDate = document.getElementById("expiryDate").value;

        if (!itemName || !quantity || !expiryDate) {
            alert("Please fill in all fields!");
            return;
        }

        // Create new list item
        const li = document.createElement("li");
        li.innerHTML = `<strong>${itemName}</strong> - ${quantity} pcs (Exp: ${expiryDate}) 
                        <button onclick="removeItem(this)">🗑 Delete</button>`;

        itemList.appendChild(li);

        // Clear input fields
        form.reset();
    });

    // Remove Item Function
    window.removeItem = (button) => {
        button.parentElement.style.opacity = "0";
        setTimeout(() => button.parentElement.remove(), 300);
    };

    // Search Feature
    searchBox.addEventListener("input", () => {
        const searchText = searchBox.value.toLowerCase();
        const items = itemList.getElementsByTagName("li");

        for (let item of items) {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(searchText) ? "" : "none";
        }
    });
});
