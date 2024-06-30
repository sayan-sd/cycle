/*=============== desc ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.desc-accordion-item');


accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.desc-accordion-header');

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open');
        console.log(item)
        toggleItem(item);

        if (openItem && openItem !== item) {
            toggleItem(openItem);
        }
    });
})

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.desc-accordion-content');

    if (item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style');
        item.classList.remove('accordion-open');
    }
    else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px';
        item.classList.add('accordion-open');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    toggleItem(accordionItems[0])


    // ======= Heart Icon Change ======== 
    const heartIcon = document.querySelector('.heart');

    heartIcon.addEventListener('click', () => {
        if (heartIcon.classList.contains('ri-heart-2-line')) {
            heartIcon.classList.remove('ri-heart-2-line');
            heartIcon.classList.add('ri-heart-2-fill');
        } else {
            heartIcon.classList.remove('ri-heart-2-fill');
            heartIcon.classList.add('ri-heart-2-line');
        }
    });

});



// ==================== TESTIMONIALS ===================
const testimonials = [
    {
        name: 'Rohan Patel',
        role: 'Cycling Enthusiast',
        avatar: 'user1.png',
        content: 'Ryd It has completely elevated my biking journey. The bikes are exceptional, the advice is spot-on, and the shopping experience is seamless. Riding with Ryd It is pure joy.',
        rating: 4
    },
    {
        name: 'Priya Singh',
        role: 'Bike Rider',
        avatar: 'user2.png',
        content: 'Ryd It has exceeded all my expectations. The bikes are top-quality, the support is phenomenal, and the buying process is hassle-free. I highly recommend Ryd It to all riders.',
        rating: 5
    },
    {
        name: 'Ankit Sharma',
        role: 'Adventure Cyclist',
        avatar: 'user3.png',
        content: 'Choosing Ryd It was the best decision for my cycling needs. The bikes are superb, the guidance is expert, and the service is exceptional. Ryd It has my full recommendation.',
        rating: 5
    },
    {
        name: 'Neha Gupta',
        role: 'Fitness Cyclist',
        avatar: 'user4.png',
        content: 'Ryd It has made my fitness journey enjoyable and effective. The bikes are top-notch, the advice is invaluable, and the experience is outstanding. Riding with Ryd It is a pleasure.',
        rating: 3
    },
    {
        name: 'Vikram Kumar',
        role: 'Casual Rider',
        avatar: 'user5.png',
        content: 'Ryd It has made cycling accessible and enjoyable for me. The bikes are fantastic, the support is exceptional, and the overall experience is fantastic. I love being a part of Ryd It.',
        rating: 4
    }
];


// Function to generate HTML for each testimonial
function generateTestimonialHTML(testimonial) {
    // Generate star icons based on rating
    const starsHTML = Array.from({ length: 5 }, (_, index) => {
        if (index < testimonial.rating) {
            return '<i class="ri-star-fill" style="color:var(--color-warning)"></i>';
        } else {
            return '<i class="ri-star-fill" style="color:var(--color-gray)"></i>';
        }
    }).join('');

    return `
<article class="testimonial swiper-slide">
    <div class="testimonial-person">
        <div class="avatar">
            <img src="../img/${testimonial.avatar}" alt="">
        </div>
        <div class="testimonial-info">
            <h5>${testimonial.name}</h5>
            <small>${testimonial.role}</small>
        </div>
    </div>
    <div class="testimonial-body">
        <p>${testimonial.content}</p>
    </div>
    <div class="testimonial-rating">
        ${starsHTML}
        <p>${testimonial.rating}/5</p>
    </div>
</article>
`;
}


// Function to dynamically generate testimonial HTML and append to container
function displayTestimonials() {
    const container = document.querySelector('.swiper-wrapper');
    testimonials.forEach(testimonial => {
        const testimonialHTML = generateTestimonialHTML(testimonial);
        container.innerHTML += testimonialHTML;
    });
}
displayTestimonials();



var swiper = new Swiper(".mySwiper", {
    // slidesPerView: 1,
    grabCurso: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    //when window width is  >= 767
    breakpoints: {
        767: {
            slidesPerView: 2
        }
    },
});



