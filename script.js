let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function changeSlide(direction) {
    currentSlideIndex = (currentSlideIndex + direction + slides.length) % slides.length;
    showSlide(currentSlideIndex);
}

// Initialize the slider
showSlide(currentSlideIndex);

function validateForm(event) {
    let valid = true;
    const namePattern = /^[A-Za-z]+$/;
    const phonePattern = /^[0-9]{10}$/;

    // First Name Validation
    const fName = document.getElementById("FName");
    const fNameError = document.getElementById("FNameError");
    if (fName && !namePattern.test(fName.value)) {
        fNameError.textContent = "First Name should contain only letters.";
        valid = false;
    } else if (fNameError) {
        fNameError.textContent = "";
    }

    // Last Name Validation
    const lName = document.getElementById("LName");
    const lNameError = document.getElementById("LNameError");
    if (lName && !namePattern.test(lName.value)) {
        lNameError.textContent = "Last Name should contain only letters.";
        valid = false;
    } else if (lNameError) {
        lNameError.textContent = "";
    }

    // Phone Validation
    const phone = document.getElementById("Phone");
    const phoneError = document.getElementById("PhoneError");
    if (phone && !phonePattern.test(phone.value)) {
        phoneError.textContent = "Phone number should be exactly 10 digits.";
        valid = false;
    } else if (phoneError) {
        phoneError.textContent = "";
    }

    if (!valid) {
        event.preventDefault();
    }
}

window.onload = function() {
    const form = document.getElementById("signupForm");
    if (form) {
        form.addEventListener("submit", validateForm);
    }
};
