const menuBtn = document.querySelector(".menu-btn");
const dropdownMenu = document.querySelector(".dropdown-menu");

menuBtn.addEventListener("click", (event) => {
  event.stopPropagation(); // prevent click from bubbling to document
  dropdownMenu.classList.toggle("hidden");
});

document.addEventListener("click", (event) => {
  // Close the dropdown if the click is outside the menu and the button
  if (!dropdownMenu.contains(event.target) && !menuBtn.contains(event.target)) {
    dropdownMenu.classList.add("hidden");
  }
});

//new

const serviceBoxes = document.querySelectorAll(".service-box");

serviceBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    // Remove class from all service boxes
    serviceBoxes.forEach((b) => {
      b.classList.remove("border-orange-500", "border-[2px]");
    });

    // Add class to the clicked one
    box.classList.add("border-orange-500", "border-[2px]");

    // Get the data-value attribute of the clicked box
    const target = box.getAttribute("data-value");

    // Hide all content boxes
    document
      .querySelectorAll(".content-box")
      .forEach((c) => c.classList.add("hidden"));

    // Show the content box corresponding to the clicked box
    document.getElementById(`${target}-content`).classList.remove("hidden");
  });
});

// Add click event listener to each service box
