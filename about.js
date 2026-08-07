const menu = document.querySelector(".menu"), nav = document.querySelector(".navbox");
menu.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".links a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible") }), { threshold: .1 }); document.querySelectorAll(".reveal").forEach(e => io.observe(e));

/*=========================================
    SCROLL REVEAL
    =========================================*/

    const revealElements = document.querySelectorAll(

        ".image-card, .director-message, .director-info"

    );

    const revealObserver = new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("fade-up");

                    entry.target.classList.add("active");

                }

            });

        },

        {

            threshold: 0.15

        }

    );

    revealElements.forEach((el) => {

        revealObserver.observe(el);

    });
