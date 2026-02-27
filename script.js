const buttons = document.querySelectorAll(".filters button");
const cards = document.querySelectorAll(".image-card");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    // active button highlight
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    cards.forEach(card => {
      const category = card.getAttribute("data-category");

      if (filter === "all" || filter === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
