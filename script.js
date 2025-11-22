// Smooth scrolling
$("a.nav-link").on("click", function (e) {
    if (this.hash !== "") {
        e.preventDefault();
        const hash = this.hash;

        $("html, body").animate(
            { scrollTop: $(hash).offset().top - 70 },
            800
        );
    }
});

// WhatsApp button click handler
$("#whatsapp-button").on("click", function () {
    const phoneNumber = "+923245943220"; 
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
});

// Animate on scroll helper function
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 100 &&
        rect.bottom >= 0
    );
}

// Animate elements when they enter viewport
function animateOnScroll() {
    // Animate sections
    document.querySelectorAll('.section').forEach(el => {
        if (isInViewport(el) && !el.classList.contains('animate')) {
            el.classList.add('animate');
        }
    });

    // Animate glass-cards except hero card (which animates on page load)
    document.querySelectorAll('.glass-card:not(.hero-card)').forEach(el => {
        if (isInViewport(el) && !el.classList.contains('animate')) {
            el.classList.add('animate');
        }
    });

    // Animate skill boxes
    document.querySelectorAll('.skill-box').forEach(el => {
        if (isInViewport(el) && !el.classList.contains('animate')) {
            el.classList.add('animate');
        }
    });
}

// Initial check
document.addEventListener('DOMContentLoaded', animateOnScroll);

// Scroll event
window.addEventListener('scroll', animateOnScroll);
