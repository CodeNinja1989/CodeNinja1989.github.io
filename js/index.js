// Get a reference to the button, select element, and the message div
const orderButton = document.getElementById("orderButton");
const itemSelect = document.getElementById("itemSelect");
const messageDiv = document.getElementById("message");

// Add a click event listener to the button
orderButton.addEventListener("click", function () {
    // Get the selected item from the select element
    const selectedItem = itemSelect.value;

    // Display a message in the message div when the button is clicked
    messageDiv.textContent = `Thank you for placing your order for a ${selectedItem}!`;
});

// JavaScript to toggle the visibility of the "About" information
document.getElementById("aboutLink").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the link from navigating

    var aboutInfo = document.getElementById("aboutInfo");
    if (aboutInfo.style.display === "none" || aboutInfo.style.display === "") {
        aboutInfo.style.display = "block";
    } else {
        aboutInfo.style.display = "none";
    }
});


