// const m=document.querySelector(".menu"),n=document.querySelector(".links");m.onclick=()=>n.classList.toggle("open");const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.1});document.querySelectorAll(".reveal").forEach(e=>io.observe(e));

/* ==========================================
   SMART OLYMPIAD V2
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       MOBILE MENU
    ========================== */

    const menuBtn = document.querySelector(".menu");
    const navLinks = document.querySelector(".links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("open");

        });

        document.querySelectorAll(".links a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("open");

            });

        });

    }

    /* ==========================
       SCROLL REVEAL
    ========================== */

    const reveals = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.12
    });

    reveals.forEach(item => revealObserver.observe(item));

    /* ==========================
       STAGGER ANIMATION
    ========================== */

    document.querySelectorAll(".quick-grid .quick-card").forEach((card, index) => {

        card.style.transitionDelay = `${index * 0.08}s`;

    });

    document.querySelectorAll(".schools-grid .school-card").forEach((card, index) => {

        card.style.transitionDelay = `${index * 0.05}s`;

    });

    document.querySelectorAll(".cards article").forEach((card, index) => {

        card.style.transitionDelay = `${index * 0.08}s`;

    });

    /* ==========================
       SMOOTH INTERNAL LINKS
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        });

    });

    /* ==========================
       ACTIVE NAV LINK
    ========================== */

    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;

            if (pageYOffset >= top) {

                current = section.getAttribute("id");

            }

        });

        navItems.forEach(link => {

            link.classList.remove("active");

            if (current && link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /* ==========================
       HEADER SHADOW
    ========================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.boxShadow = "0 10px 30px rgba(0,0,0,.12)";

        } else {

            header.style.boxShadow = "";

        }

    });

    /* ==========================
       SCROLL TO TOP BUTTON
    ========================== */

    const topBtn = document.createElement("button");

    topBtn.className = "scroll-top";

    topBtn.innerHTML = "↑";

    document.body.appendChild(topBtn);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            topBtn.classList.add("show");

        } else {

            topBtn.classList.remove("show");

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

});