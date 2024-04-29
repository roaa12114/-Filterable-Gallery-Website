// Select all filter buttons-cards
const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

// Define the filterCards function
const filterCards = (e) => {
  // Remove the "active" class from all buttons
  filterButtons.forEach((button) => button.classList.remove("active"));

  // Add the "active" class to the clicked button
  e.target.classList.add("active");

  // Iterate over each filterable card
  filterableCards.forEach((card) => {
    // Add hide class to hide the card initially
    card.classList.add("hide");

    // Check if the card matches the selected filter or if "all" is selected
    if (
      card.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === "all"
    ) {
      card.classList.remove("hide");
    }
  });
};

// Add click event listener to each filter button
filterButtons.forEach((button) =>
  button.addEventListener("click", filterCards)
);

// Get the modal and images
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementsByClassName("close")[0];
const cardsImages = document.querySelectorAll(".card img");

// Open the modal with the clicked image
function openModal(event) {
  modal.style.display = "block";
  modalImg.src = event.target.src;
}

// Close the modal when the close button is clicked
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// Close the modal when clicked outside the modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Attach click event listener to each image
cardsImages.forEach((img) => {
  img.addEventListener("click", openModal);
});
