/*=========================================================
 SMARTKID ALUMNI PAGE
 alumni.js
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=====================================
      MOBILE MENU
    =====================================*/

    const menu = document.querySelector(".menu");
    const navbox = document.querySelector(".navbox");

    if (menu && navbox) {

        menu.addEventListener("click", () => {

            navbox.classList.toggle("active");

            menu.classList.toggle("active");

        });

        document.addEventListener("click", (e) => {

            if (
                !navbox.contains(e.target) &&
                !menu.contains(e.target)
            ) {

                navbox.classList.remove("active");
                menu.classList.remove("active");

            }

        });

        document.querySelectorAll(".links a").forEach(link => {

            link.addEventListener("click", () => {

                navbox.classList.remove("active");
                menu.classList.remove("active");

            });

        });

    }


    /*=====================================
      HEADER SCROLL EFFECT
    =====================================*/

    const header = document.querySelector("header");

    function headerShadow() {

        if (window.scrollY > 30) {

            header.style.boxShadow =
                "0 12px 35px rgba(0,0,0,.10)";

        } else {

            header.style.boxShadow =
                "0 8px 30px rgba(0,0,0,.05)";

        }

    }

    headerShadow();

    window.addEventListener("scroll", headerShadow);


    /*=====================================
      REVEAL ANIMATION
    =====================================*/

    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.15
    });

    reveals.forEach(item => {

        item.style.opacity = "0";
        item.style.transform = "translateY(50px)";
        item.style.transition =
            "all .8s cubic-bezier(.2,.65,.3,1)";

        observer.observe(item);

    });


    /*=====================================
      SMOOTH SCROLL
    =====================================*/

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

});