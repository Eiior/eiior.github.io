document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const successMessage = document.getElementById("formSuccess");
    successMessage.style.display = "block";

    this.reset();

    setTimeout(() => {
        successMessage.style.display = "none";
    }, 6000);
});
