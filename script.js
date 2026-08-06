// ===== Smooth Scroll =====

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior:"smooth"
            });
        }

    });
});


// ===== Back To Top Button =====

const topBtn = document.getElementById("topBtn");

if(topBtn){

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 300){
            topBtn.style.display = "block";
        }else{
            topBtn.style.display = "none";
        }

    });

    topBtn.addEventListener("click",()=>{

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

}


// ===== Card Animation =====

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){
            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
        }

    });

});

cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition="0.6s ease";

    observer.observe(card);

});


// ===== Button Click Effect =====

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn=>{

    btn.addEventListener("click",()=>{

        btn.style.transform="scale(0.96)";

        setTimeout(()=>{
            btn.style.transform="scale(1)";
        },150);

    });

});
// ===== Mobile Menu =====

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(menuToggle && navLinks){

    menuToggle.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}
// Dark / Light Mode

// ===== Dark / Light Mode =====

const themeBtn = document.getElementById("themeBtn");

if(themeBtn){

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if(document.body.classList.contains("light-mode")){
            themeBtn.innerHTML = "☀️";
        }else{
            themeBtn.innerHTML = "🌙";
        }

    });
    // ===== EmailJS =====

emailjs.init({
    publicKey: "naAiQ6VfiSkiO40yx",
});

const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_xtflcbz",
            "template_8g7xyjc",
            this
        )
        .then(function () {
            alert("✅ Message sent successfully!");
            contactForm.reset();
        })
        .catch(function (error) {
            alert("❌ Failed to send message.");
            console.log(error);
        });
    });
}
