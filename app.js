window.onload = function () {
  var contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    this.contact_number.value = (Math.random() * 100000) | 0;

    emailjs.sendForm("service_bro9vyj", "template_zgroj47", this).then(
      function () {
        console.log("SUCCESS!");
        contactForm.reset();
        var successMessage = document.querySelector(".success");
        successMessage.classList.add("successMessage");

        setTimeout(() => {
          successMessage.classList.remove("successMessage");
        }, 3000);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  });
};

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

var navMenu = document.querySelector(".menu");
var navLinks = document.querySelector(".nav-links");

function displayMenu() {
  navLinks.classList.toggle("active");
}

(function () {
  emailjs.init("fybEhFmbjU3EgPVVT");
})();
