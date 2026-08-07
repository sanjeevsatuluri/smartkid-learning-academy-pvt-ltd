const menu=document.querySelector(".menu"),links=document.querySelector(".links");menu.onclick=()=>links.classList.toggle("open");
const interest=document.getElementById("interest"),note=document.getElementById("olyNote");
function olympiadNote(){note.classList.toggle("show",interest.value==="SMART Olympiad")} interest.addEventListener("change",olympiadNote);
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.08});document.querySelectorAll(".reveal").forEach(e=>io.observe(e));