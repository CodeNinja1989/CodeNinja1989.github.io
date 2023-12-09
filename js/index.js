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




