/*==========================================================
            MOBILE MENU
==========================================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (navLinks.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}

/*==========================================================
        CLOSE MENU WHEN LINK IS CLICKED
==========================================================*/

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        if (navLinks) {

            navLinks.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

});


/*==========================================================
            STICKY NAVBAR EFFECT
==========================================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.padding = "10px 8%";
        navbar.style.boxShadow = "0 8px 20px rgba(0,0,0,.2)";

    } else {

        navbar.style.padding = "15px 8%";
        navbar.style.boxShadow = "none";

    }

});


/*==========================================================
            BACK TO TOP BUTTON
==========================================================*/

const topBtn = document.createElement("button");

topBtn.id = "topBtn";

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*==========================================================
            SCROLL REVEAL ANIMATION
==========================================================*/

const revealElements = document.querySelectorAll(
    ".card, .about, .principal, .gallery-preview, .cta, .stat"
);

const reveal = () => {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < trigger) {

            el.classList.add("animate");

        }

    });

};

window.addEventListener("scroll", reveal);

reveal();


/*==========================================================
            IMAGE CLICK EFFECT
==========================================================*/

document.querySelectorAll(".gallery-grid img").forEach(image => {

    image.addEventListener("click", () => {

        window.open(image.src);

    });

});


/*==========================================================
            LOADER
==========================================================*/

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.remove();

        }, 600);

    }

});


/*==========================================================
            COUNTER ANIMATION
==========================================================*/

const counters = document.querySelectorAll(".stat h2");

const speed = 80;

const animateCounter = counter => {

    const target = parseInt(counter.innerText);

    if (isNaN(target)) return;

    let count = 0;

    const increment = Math.ceil(target / speed);

    const update = () => {

        count += increment;

        if (count >= target) {

            counter.innerText = target + "+";

        } else {

            counter.innerText = count + "+";

            requestAnimationFrame(update);

        }

    };

    update();

};

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            animateCounter(entry.target);

            observer.unobserve(entry.target);

        }

    });

});

counters.forEach(counter => observer.observe(counter));


/*==========================================================
            ACTIVE NAVIGATION LINK
==========================================================*/

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage || (currentPage === "" && href === "index.html")) {

        link.classList.add("active");

    }

});


/*==========================================================
            SMOOTH HOVER FOR BUTTONS
==========================================================*/

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-4px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0)";

    });

});


/*==========================================================
            PREVENT IMAGE DRAG
==========================================================*/

document.querySelectorAll("img").forEach(img => {

    img.setAttribute("draggable","false");

});


/*==========================================================
            CONSOLE MESSAGE
==========================================================*/

console.log(
    "%cKanti Secondary School Website Loaded Successfully",
    "color:#003366;font-size:18px;font-weight:bold;"
);