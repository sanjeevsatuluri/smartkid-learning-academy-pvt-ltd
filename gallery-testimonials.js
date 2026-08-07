const m=document.querySelector(".menu"),n=document.querySelector(".links");m.onclick=()=>n.classList.toggle("open");const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.08});document.querySelectorAll(".reveal").forEach(e=>io.observe(e));
// ============================
// IMAGE GALLERY
// ============================

const galleryGrid = document.getElementById("galleryGrid");

const loadBtn = document.getElementById("loadMoreBtn");

const images = [];

for(let i=1;i<=121;i++){

    images.push(`assets/gallery/image${i}_result.webp`);

}

let current = 0;

const perLoad = 12;

function loadImages(){

    const end = Math.min(current+perLoad,images.length);

    for(let i=current;i<end;i++){

        const div=document.createElement("div");

        div.className="gallery-item";

        div.innerHTML=`

        <img
        src="${images[i]}"
        loading="lazy"
        alt="SmartKid Gallery ${i+1}"
        >

        `;

        galleryGrid.appendChild(div);

    }

    current=end;

    if(current>=images.length){

        loadBtn.style.display="none";

    }

}

loadBtn.addEventListener("click",loadImages);

loadImages();


// ============================
// VIDEOS
// ============================

const videos=[

{ id:"nmlSGd96FG4", title:"Success Story 1"},
{ id:"RP_-o-A76fI", title:"Success Story 2"},
{ id:"KRAJyAKDsug", title:"Success Story 3"},
{ id:"Jw9qKhpRVEg", title:"Success Story 4"},
{ id:"naOnwcbPuOg", title:"Success Story 5"},
{ id:"JLzNGtpQSkk", title:"Success Story 6"},
{ id:"Q2P4ZgQwJdQ", title:"Success Story 7"},
{ id:"nmlSGd96FG4", title:"Success Story 8"},
{ id:"qiH3MMxjz7o", title:"Success Story 9"},
{ id:"pdYWxvR-ewo", title:"Success Story 10"},
{ id:"-UTP0zw0Z-k", title:"Success Story 11"},
{ id:"ZkuYkGGc4-o", title:"Success Story 12"},
{ id:"ZT3-uDax1UA", title:"Success Story 13"},
{ id:"x1tnZUOF4IY", title:"Success Story 14"},
{ id:"9WYy5Ojassk", title:"Success Story 15"},
{ id:"ITE6_DBdLyU", title:"Success Story 16"},
{ id:"TIST-bGfe7Y", title:"Success Story 17"},
{ id:"FxEivegsQks", title:"Success Story 18"},
{ id:"AuWH-81Kxtw", title:"Success Story 19"},
{ id:"XBrXCKmt3EA", title:"Success Story 20"}

];

const videoGrid=document.getElementById("videoGrid");

videos.forEach(video=>{

videoGrid.innerHTML+=`

<div class="video-card">

<iframe
src="https://www.youtube.com/embed/${video.id}"
allowfullscreen>
</iframe>

<div class="caption">${video.title}</div>

</div>

`;

});