
 document.addEventListener("DOMContentLoaded", function () {
       const toggleBtn = document.getElementById("toggleProjectsBtn");
       const moreProjects = document.getElementById("more-projects");
       let isExpanded = false;

       toggleBtn.addEventListener("click", function () {
         moreProjects.classList.toggle("hidden");
         isExpanded = !isExpanded;
         toggleBtn.textContent = isExpanded ? "Show Less" : "View All Projects";
       });
     });

// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobile-menu');
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});
// Highlight active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', function() {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= (sectionTop - 300)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add animation class when elements come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('section h2, .animate-on-scroll').forEach(el => {
    observer.observe(el);
});

function downloadPDF() {
  const link = document.createElement('a');
  link.href = '/portfolio/assets/riyaz_siddiqui.pdf';
  link.download = 'riyaz_siddiqui.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

