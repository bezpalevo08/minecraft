$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: true,
    prevArrow: 
    `
    <button class="slider-arrow slider-arrow--left">
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_5_2)">
    <path d="M48 24C48 10.7454 37.2545 0 24 0C10.7454 0 0 10.7454 0 24C0 37.2545 10.7454 48 24 48C37.2545 48 48 37.2545 48 24ZM25.7957 12.5891L28.8939 15.6873L20.4109 24.1746L29.6531 33.4168L26.568 36.5019L14.2255 24.1592L25.7957 12.5891Z" fill="#fff"/>
    </g>
    <defs>
    <clipPath id="clip0_5_2">
    <rect width="48" height="48" fill="white"/>
    </clipPath>
    </defs>
    </svg>    
    </button>
    `,
    nextArrow: 
    `
    <button class="slider-arrow slider-arrow--right">
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_5_2)">
    <path d="M48 24C48 10.7454 37.2545 0 24 0C10.7454 0 0 10.7454 0 24C0 37.2545 10.7454 48 24 48C37.2545 48 48 37.2545 48 24ZM25.7957 12.5891L28.8939 15.6873L20.4109 24.1746L29.6531 33.4168L26.568 36.5019L14.2255 24.1592L25.7957 12.5891Z" fill="#fff"/>
    </g>
    <defs>
    <clipPath id="clip0_5_2">
    <rect width="48" height="48" fill="white"/>
    </clipPath>
    </defs>
    </svg>    
    </button>
    `,
})