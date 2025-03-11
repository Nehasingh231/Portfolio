function toggleNavbar() {
    let mobileMenu = document.getElementById("mobileMenu");
    let menuButton = document.querySelector(".menu-button");

    mobileMenu.classList.toggle("hidden");
    menuButton.classList.toggle("active");
}

const cursor = document.querySelector(".cursor");

// Move cursor with mouse
document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// Change cursor to smiley when hovering over text or images
document.querySelectorAll(".text-hover, img").forEach((element) => {
    element.addEventListener("mouseenter", () => {
        cursor.textContent = "😊"; // Smiley face
        cursor.style.backgroundColor = "transparent"; // Remove background
        cursor.style.fontSize = "50px";
    });

    element.addEventListener("mouseleave", () => {
        cursor.textContent = ""; // Remove smiley
        cursor.style.backgroundColor = "#e7e9ea"; // Reset background
    });
});



var typed = new Typed("#typed-text", {
    strings: ["Web Developer", "Designer", "App Developer", "Skilled Developer"],
    typeSpeed: 100, // Typing speed
    backSpeed: 50, // Backspacing speed
    loop: true // Infinite loop
});

