// =========================
// Brown Boys Agency Script
// =========================

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });
});

// Mobile Menu

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(menuToggle){

menuToggle.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

}

// Dark Mode

const themeBtn=document.getElementById("themeBtn");

if(localStorage.getItem("theme")=="light"){

document.body.classList.add("light-mode");

themeBtn.innerHTML="☀️";

}

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){

themeBtn.innerHTML="☀️";

localStorage.setItem("theme","light");

}else{

themeBtn.innerHTML="🌙";

localStorage.setItem("theme","dark");

}

});

// Back To Top

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

});
// =========================
// EmailJS
// =========================

emailjs.init({
    publicKey: "sczvthHWKkP0Gdo_O",
});

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        emailjs.sendForm(
            "service_xtflcbz",
            "template_8g7xyjc",
            this
        ).then(() => {

            alert("✅ Message Sent Successfully!");
            contactForm.reset();

        }).catch((error) => {

            alert("❌ Failed to send message.");
            console.log(error);

        });

    });

}

// =========================
// Scroll Animation
// =========================

const cards = document.querySelectorAll(".card, .about-card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = ".6s";

    observer.observe(card);

});