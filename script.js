$(document).ready(function () {
    // Reset visibility on page load: show login form, hide main content
    $("#loginForm").removeClass("d-none");
    $("#mainContent").addClass("d-none");

    // Disable nav links initially
    $(".nav-link").addClass("disabled-nav-link");

    $("#loginForm form").on("submit", function (e) {
        e.preventDefault();

        const username = $("#username").val();
        const password = $("#password").val();
        const errorMessage = $("#login-error");

        // Clear previous error message
        errorMessage.text("").hide();

        if (username === "admin" && password === "0130@NmN") {
            $("#loginForm").addClass("d-none");
            $("#mainContent").removeClass("d-none");
            // Enable nav links after login success
            $(".nav-link").removeClass("disabled-nav-link");
        } else {
            errorMessage.text("Invalid username or password. Please try again.").show();
        }
    });

    // Toggle password visibility
    $("#toggle-password-visibility").on("click", function () {
        const passwordInput = $("#password");
        const eyeIcon = $("#eye-icon");
        const type = passwordInput.attr("type") === "password" ? "text" : "password";
        passwordInput.attr("type", type);

        // Swap eye icon fill color for visibility state
        if (type === "text") {
            eyeIcon.attr("fill", "black");
        } else {
            eyeIcon.attr("fill", "gray");
        }
    });

    // Smooth scrolling
    $("a.nav-link").on("click", function (e) {
        if (this.hash !== "") {
            // Prevent clicks on nav-links if disabled
            if ($(this).hasClass("disabled-nav-link")) {
                e.preventDefault();
                return;
            }
            if ($("#loginForm").is(":visible")) {
                // If login form is visible, disable smooth scrolling
                return;
            }
            e.preventDefault();
            const hash = this.hash;
            const navbarHeight = $(".navbar").outerHeight() || 70;

            $("html, body").animate(
                { scrollTop: $(hash).offset().top - navbarHeight },
                300
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
    // sending email function
    (function () {
        emailjs.init("mrcJjBHYk44WZlkJS");
    })();

    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();

        emailjs.sendForm("service_695yzff", "template_r3l2a9h", this)
            .then(() => {
                document.getElementById("status").innerText = "Message sent!";
            }, (error) => {
                document.getElementById("status").innerText = "Failed: " + JSON.stringify(error);
            });
    });
    // Initial check
    document.addEventListener('DOMContentLoaded', animateOnScroll);

    // Scroll event
    window.addEventListener('scroll', animateOnScroll);
});
