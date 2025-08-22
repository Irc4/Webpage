var navBar = document.getElementById('mainNav');
function openSidebar(){
    navBar.classList.toggle('show');
   
}
function closeSidebar(){
    navBar.classList.remove('show');  
}


function addReview(){
var userInput = document.getElementById('userInput');
document.getElementById('review').innerHTML += '<p>' + userInput.value + '</p>';
}


document.addEventListener('DOMContentLoaded', function() {
    // Focus first nav link on Tab from body
    document.body.addEventListener('keydown', function(e) {
        if (e.key === 'Tab' && document.activeElement === document.body) {
            const firstNav = document.querySelector('nav a');
            if (firstNav) {
                firstNav.focus();
                e.preventDefault();
            }
        }
    });

    // Arrow key navigation for menu
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach((link, idx) => {
        link.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                const next = navLinks[idx + 1] || navLinks[0];
                next.focus();
            }
            if (e.key === 'ArrowUp') {
                e.preventDefault();
                const prev = navLinks[idx - 1] || navLinks[navLinks.length - 1];
                prev.focus();
            }
        });
    });

    // Enter key submits forms
    const reviewBtn = document.querySelector('button[onclick="addReview()"]');
    const reviewInput = document.getElementById('userInput');
    if (reviewInput && reviewBtn) {
        reviewInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                reviewBtn.click();
            }
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
                e.preventDefault();
                contactForm.querySelector('button[type="submit"]').click();
            }
        });
    }
});

