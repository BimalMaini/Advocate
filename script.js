// =========================
// LOADER
// =========================

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

loader.style.opacity = "0";

setTimeout(() => {
loader.style.display = "none";
},600);

});

// =========================
// MOBILE MENU
// =========================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click",()=>{

if(nav.style.display==="flex"){

nav.style.display="none";

}else{

nav.style.display="flex";
nav.style.flexDirection="column";
nav.style.position="absolute";
nav.style.top="80px";
nav.style.left="0";
nav.style.width="100%";
nav.style.background="#111";
nav.style.padding="25px";
nav.style.textAlign="center";
nav.style.gap="20px";

}

});

// =========================
// STICKY HEADER
// =========================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.background="rgba(0,0,0,.95)";
header.style.boxShadow="0 10px 30px rgba(0,0,0,.5)";

}else{

header.style.background="rgba(0,0,0,.82)";
header.style.boxShadow="none";

}

});

// =========================
// SCROLL ANIMATION
// =========================

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:.15
});

document.querySelectorAll("section").forEach(section=>{

section.style.opacity="0";
section.style.transform="translateY(60px)";
section.style.transition=".8s ease";

observer.observe(section);

});

// =========================
// CONTACT FORM
// =========================

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you for contacting Advocate Bimal Maini. We will get back to you shortly.");

form.reset();

});

}

// =========================
// CURRENT YEAR
// =========================

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}
