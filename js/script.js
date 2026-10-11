// ==========================================
// PORTFOLIO JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Sundharesh Portfolio Loaded Successfully");

});


// ==========================================
// ACTIVE NAVIGATION
// ==========================================

const currentPage =
    window.location.pathname.split("/").pop();

const navLinks =
    document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {

    const linkPage =
        link.getAttribute("href");

    if (linkPage === currentPage) {

        link.classList.add("active");

    }

});

// =========================================
// BACK TO TOP
// =========================================

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
// =========================================
// SCROLL REVEAL
// =========================================

const revealElements =
    document.querySelectorAll(
        ".section-label, .section-description, " +
        ".project-card, .skill-card, " +
        ".experience-item, .highlight-card, " +
        ".contact-info-item, .contact-form-card"
    );

const revealObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("reveal");

                setTimeout(function () {
                    entry.target.classList.add("active");
                }, 50);

                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});