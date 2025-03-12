
// ******* Menu Button
function toggleNavbar() {
    let mobileMenu = document.getElementById("mobileMenu");
    let menuButton = document.querySelector(".menu-button");

    mobileMenu.classList.toggle("hidden");
    menuButton.classList.toggle("active");
}


// ******* Cursor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// Change cursor to smiley when hovering over text or images
document.querySelectorAll(".text-hover, img").forEach((element) => {
    element.addEventListener("mouseenter", () => {
        cursor.textContent = "😉";

        cursor.style.backgroundColor = "transparent"; // Remove background
        cursor.style.fontSize = "50px";
    });

    element.addEventListener("mouseleave", () => {
        cursor.textContent = ""; // Remove smiley
        cursor.style.backgroundColor = "#e7e9ea"; // Reset background
    });
});


// ****** Hero Section Text typing
var typed = new Typed("#typed-text", {
    strings: ["Web Developer", "Designer", "App Developer", "Skilled Developer"],
    typeSpeed: 100, // Typing speed
    backSpeed: 50, // Backspacing speed
    loop: true // Infinite loop
});



// ********* Certificiate
function showCertificate(imageSrc) {
    document.getElementById('certificateImage').src = imageSrc;
    document.getElementById('certificateModal').classList.remove('hidden');
  }

  function closeModal() {
    document.getElementById('certificateModal').classList.add('hidden');
  }



// ********* Contact Form
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.querySelector('input[placeholder="Your Name"]').value.trim();
    const email = document.querySelector('input[placeholder="Your Email"]').value.trim();
    const message = document.querySelector('textarea[placeholder="Type your message here..."]').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }

    alert('Message sent successfully!');
});



// ********* Scroll to section that takes me to sections
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}


// ***************
function downloadCV() {
    const link = document.createElement("a");
    link.href = "./updated_resume_neha.pdf";  // Replace with your actual CV file path
    link.download = "Neha_Singh_CV.pdf"; // File name after download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}



