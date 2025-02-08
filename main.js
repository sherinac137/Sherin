// JavaScript for scrolling behavior
const backToTopButton = document.getElementById("backToTop");

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

backToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// JavaScript for typed effect
document.addEventListener("DOMContentLoaded", function () {
  // Function to handle the typing effect
  function typeText(elementId, textArray) {
    const element = document.getElementById(elementId);
    let textIndex = 0; // Which string from the array to display
    let charIndex = 0; // Current character in the string
    let isDeleting = false; // Whether we are deleting text

    function type() {
      let currentText = textArray[textIndex];
      if (isDeleting) {
        // Remove one character
        element.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        // Add one character
        element.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }

      // Determine speed and next action
      let typingSpeed = isDeleting ? 50 : 100; // Speed for typing and deleting

      if (!isDeleting && charIndex === currentText.length) {
        // Finished typing, start deleting after a pause
        setTimeout(() => {
          isDeleting = true;
          type();
        }, 2000);
      } else if (isDeleting && charIndex === 0) {
        // Finished deleting, move to next text
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length; // Loop back to the first string
        setTimeout(type, 500); // Pause before typing new text
      } else {
        // Continue typing or deleting
        setTimeout(type, typingSpeed);
      }
    }

    // Start typing
    type();
  }

  // Initiate typing effect on both elements
  typeText("typed-text", ["MERN Stack Developer", "Web Designer"]);
  typeText("typed-text-slide2", ["MERN Stack Developer", "Web Designer"]);
});


