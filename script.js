$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Data Engineer", "Data Analyst","Data Scientist"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Data Engineer", "Data Analyst","Data Scientist"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});


/*newly added */
const skillsData = {
    "data-analytics": ["Tableau", "Power BI", "Business Intelligence (BI)","Pandas","Numpy","Matplot Lib","Excel"],
    "Data Engineering Tools":  ["ETL (Extract, Transform, Load)", "Data Modeling", "Spark", "Data Warehousing", "Snowflake","Informatica"],
    "Data Science and Machine Learning": ["Data Analytics", "Statistical Analysis", "Predictive Modeling","Regression Models","Neural Networks","Random Forest","Decision Trees","Supervised & UnSupervised Methodologies"],
    "Cloud Platforms": ["AWS (Amazon Web Services)", "Azure Cloud","Aws Glue","Athena","Aws s3","Aws RDS","Amazon Redshift"],
    "programming Languages & Tools": ["Python", "SQL","Jupyter Notebook","VS Code","PyCharm"],
    "Soft Skills": ["Cross-functional Collaboration", "Problem Solving", "Communication Skills", "Leadership", "Technical Writing", "Strong Communication", "Collaboration","Problem-Solving","Critical Thinking"]
};

function showPopup(skill) {
    const popup = document.getElementById("skills-popup");
    const title = document.getElementById("popup-title");
    const list = document.getElementById("popup-list");

    // Set title and list items dynamically
    title.innerText = skill.replace("-", " ").toUpperCase();
    list.innerHTML = skillsData[skill]
        .map((item) => `<li>${item}</li>`)
        .join("");

    // Show the popup
    popup.style.display = "flex";
}

// Close popup if clicked outside of popup-content
function closePopupOnOutsideClick(event) {
    const popupContent = document.querySelector(".popup-content");
    if (!popupContent.contains(event.target)) {
        hidePopup();
    }
}

function hidePopup() {
    const popup = document.getElementById("skills-popup");
    popup.style.display = "none";
}

// Attach the click listener to the popup container
document.getElementById("skills-popup").addEventListener("click", closePopupOnOutsideClick);



// Optional smooth scroll for project section
$('.project-card .btn').click(function () {
    window.location.href = $(this).attr('href');
});


// // script for projects scroll bar

const slider = document.querySelector('.project-slider');
const projects = document.querySelectorAll('.project');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

let currentIndex = 0;

// Dynamically set the slider's width and each project's width
slider.style.width = `${projects.length * 100}%`;
projects.forEach((project) => {
    project.style.width = `${100 / projects.length}%`;
});

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

leftBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : projects.length - 1; // Loop to last
    updateSlider();
});

rightBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < projects.length - 1) ? currentIndex + 1 : 0; // Loop to first
    updateSlider();
});
