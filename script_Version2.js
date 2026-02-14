// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Valentine Page Script
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

if (noBtn && yesBtn) {
    /* Make NO run away */
    function moveButton() {
        const maxX = window.innerWidth - 100;
        const maxY = window.innerHeight - 100;
        const minX = 50;
        const minY = 50;
        
        const x = Math.random() * (maxX - minX) + minX;
        const y = Math.random() * (maxY - minY) + minY;
        
        noBtn.style.position = "fixed";
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    }

    noBtn.addEventListener("mouseover", moveButton);
    noBtn.addEventListener("click", moveButton);

    /* Fade transition */
    yesBtn.addEventListener("click", () => {
        page1.classList.add("hidden");
        setTimeout(() => {
            page1.style.display = "none";
            page2.classList.remove("hidden");
        }, 800);
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});