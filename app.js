document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
  });

const priceCards = document.querySelectorAll(".price-card");

priceCards.forEach((card, index) => {
  card.addEventListener("mouseenter", () => {
    priceCards.forEach((c) => {
      c.style.transform = "scale(1)";
      c.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";

      c.addEventListener("mouseleave", () => {
        if (index === 1) {
          card.style.transform = "scale(1.1)";
          card.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.2)";
        }
      });
    });

    card.style.transform = "scale(1.1)";
    card.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.2)";
  });

  card.addEventListener("mouseleave", () => {
    if (index === 1) {
      card.style.transform = "scale(1.1)";
      card.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.2)";
    } else {
      card.style.transform = "scale(1)";
      card.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
    }
  });
});
