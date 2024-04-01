$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
    });
    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn img').toggleClass("active");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typed-output");
    const texts = ["Great Websites", "Awesome Websites", "User-Friendly Websites", "Amazing Websites"];
    let textIndex = 0;
    let charIndex = 0;

    function typeText() {
        if (textIndex < texts.length) {
            if (charIndex < texts[textIndex].length) {
                textElement.textContent += texts[textIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeText, 120); // Adjust the typing speed here
            } else {
                setTimeout(eraseText, 1000); // Delay before erasing
            }
        }
    }

    function eraseText() {
        if (charIndex > 0) {
            textElement.textContent = texts[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseText, 25); // Adjust the erasing speed here
        } else {
            textIndex++;
            if (textIndex >= texts.length) textIndex = 0;
            setTimeout(typeText, 1000); // Delay before typing the next text
        }
    }

    typeText();
});