document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const popupNotification = document.getElementById("popupNotification");
  const popupMessage = document.getElementById("popupMessage");
  const popupClose = document.getElementById("popupClose");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const formData = new FormData(form);

    fetch("https://formspree.io/f/xwpeqpbk", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          popupMessage.textContent =
            "Thank you for your message! We'll get back to you soon.";
          popupNotification.style.backgroundColor = "green";
          popupNotification.style.display = "block";
          form.reset(); // Optional: Clear the form
        } else {
          popupMessage.textContent =
            "Oops! There was a problem sending your message.";
          popupNotification.style.backgroundColor = "red";
          popupNotification.style.display = "block";
        }
      })
      .catch((error) => {
        popupMessage.textContent =
          "Oops! There was a problem sending your message.";
        popupNotification.style.backgroundColor = "red";
        popupNotification.style.display = "block";
      });
  });

  // Close the popup notification when the close button is clicked
  popupClose.addEventListener("click", function () {
    popupNotification.style.display = "none";
  });
});
