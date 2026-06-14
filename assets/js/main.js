const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;
let autoSlide;

/* Show Slide */

function showSlide(index){

    slides.forEach(slide=>{
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

/* Next Slide */

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

/* Previous Slide */

function prevSlide(){

    currentSlide--;

    if(currentSlide < 0){
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
}

/* Auto Slide */

function startAutoSlide(){

    autoSlide = setInterval(()=>{
        nextSlide();
    },5000);

}

/* Reset Timer After Manual Click */

function resetAutoSlide(){

    clearInterval(autoSlide);
    startAutoSlide();

}

/* Button Events */

if(nextBtn){

    nextBtn.addEventListener("click",()=>{

        nextSlide();
        resetAutoSlide();

    });

}

if(prevBtn){

    prevBtn.addEventListener("click",()=>{

        prevSlide();
        resetAutoSlide();

    });

}

/* Initialize */

if(slides.length > 0){

    showSlide(currentSlide);
    startAutoSlide();

}