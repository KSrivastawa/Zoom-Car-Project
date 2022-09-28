// Slide show the fisrt pages

let slideIndex1 = 0;
showSlides();

function showSlides(){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for(i=0; i<slides.length; i++){
        slides[i].style.display ="none";
    }
    slideIndex1++;
    if(slideIndex1>slides.length){
        slideIndex1=1
    }
    slides[slideIndex1-1].style.display="block";
    setTimeout(showSlides, 2000); // change image every 2 seconds
}

//=================================================================

// Slide show the next pages

let slideIndex2 = 0;
showSlides2();

function showSlides2(){
    let i;
    let slides = document.getElementsByClassName("mySlides2");
    for(i=0; i<slides.length; i++){
        slides[i].style.display ="none";
    }
    slideIndex2++;
    if(slideIndex2>slides.length){
        slideIndex2=1
    }
    slides[slideIndex2-1].style.display="block";
    setTimeout(showSlides2, 2000); // change image every 2 seconds
}