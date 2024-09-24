document.addEventListener('DOMContentLoaded', () => {
    const scrollElements = document.querySelectorAll('.feature, .stat, .testimonial-content, .client-logos img');

    const elementInView = (el, threshold = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / threshold
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('scrolled');
    };

    const hideScrollElement = (element) => {
        element.classList.remove('scrolled');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };

    // Intersection Observer setup
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scrolled');
                observer.unobserve(entry.target); // Stop observing once the animation is applied
            }
        });
    });

    scrollElements.forEach((el) => {
        observer.observe(el);
    });

    // Fallback for older browsers without IntersectionObserver support
    if (!('IntersectionObserver' in window)) {
        window.addEventListener('scroll', handleScrollAnimation);
    }
});
